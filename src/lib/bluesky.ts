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

export async function searchHashtag(hashtag: string): Promise<BlueskyPost[] | null> {
	const session = await getSession();
	if (!session) return null;

	try {
		const params = new URLSearchParams({ q: hashtag, sort: 'latest', limit: '25' });
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
