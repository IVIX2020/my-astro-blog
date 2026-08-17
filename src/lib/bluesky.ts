// Blueskyの匿名公開API (public.api.bsky.app) は現在searchPostsへの未認証アクセスを
// 403で弾くため、App Passwordでセッションを取得し認証付きで叩く。
// ビルド時（Node.js）でのみ実行され、トークンはクライアントには渡らない。

const ENTRYWAY = 'https://bsky.social';

let sessionPromise: Promise<{ accessJwt: string } | null> | null = null;

function getSession() {
	if (!sessionPromise) {
		sessionPromise = createSession();
	}
	return sessionPromise;
}

async function createSession() {
	const identifier = process.env.BLUESKY_HANDLE;
	const password = process.env.BLUESKY_APP_PASSWORD;

	if (!identifier || !password) {
		console.warn(
			'[bluesky] BLUESKY_HANDLE / BLUESKY_APP_PASSWORD が未設定のため、更新ログの取得をスキップします。',
		);
		return null;
	}

	try {
		const res = await fetch(`${ENTRYWAY}/xrpc/com.atproto.server.createSession`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ identifier, password }),
		});
		if (!res.ok) {
			console.warn(`[bluesky] createSession failed: status ${res.status}`);
			return null;
		}
		const data = await res.json();
		return { accessJwt: data.accessJwt as string };
	} catch (err) {
		console.warn('[bluesky] createSession failed:', err);
		return null;
	}
}

export interface BlueskyPost {
	text: string;
	createdAt: string;
	link: string;
}

export interface SearchHashtagRange {
	since?: Date;
	/** 終了日を含めたいので、内部でこの日の24時間後を until として渡す */
	until?: Date;
}

export async function searchHashtag(
	hashtag: string,
	author: string,
	range: SearchHashtagRange = {},
): Promise<BlueskyPost[] | null> {
	const session = await getSession();
	if (!session) return null;

	try {
		// authorを指定しないと、無関係な他人の同名タグ投稿まで混ざる（#amamは他ユーザーも使う一般的なタグ）
		const params = new URLSearchParams({ q: hashtag, author, sort: 'latest', limit: '25' });
		if (range.since) params.set('since', range.since.toISOString());
		if (range.until) {
			const untilInclusive = new Date(range.until.getTime() + 24 * 60 * 60 * 1000);
			params.set('until', untilInclusive.toISOString());
		}
		const res = await fetch(`${ENTRYWAY}/xrpc/app.bsky.feed.searchPosts?${params}`, {
			headers: { Authorization: `Bearer ${session.accessJwt}` },
		});
		if (!res.ok) {
			console.warn(`[bluesky] searchPosts failed: status ${res.status}`);
			return null;
		}
		const data = await res.json();
		const posts = (data.posts ?? []) as any[];
		return posts.map((post) => {
			const rkey = post.uri?.split('/').pop() ?? '';
			const authorHandle = post.author?.handle ?? '';
			return {
				text: post.record?.text ?? '',
				createdAt: post.record?.createdAt ?? '',
				link: authorHandle && rkey ? `https://bsky.app/profile/${authorHandle}/post/${rkey}` : '',
			};
		});
	} catch (err) {
		console.warn('[bluesky] searchPosts failed:', err);
		return null;
	}
}
