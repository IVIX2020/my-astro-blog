export interface TodoLeaf {
	text: string;
	done: boolean;
}

export interface TodoItem extends TodoLeaf {
	subtasks: TodoLeaf[];
}

export interface ProgressStats {
	done: number;
	total: number;
	percent: number;
}

// サブタスクがある項目は、その項目自身のdoneではなくサブタスクの完了数で数える
// （親のdoneはサブタスク全完了かどうかの表示にのみ使う）。
export function calcProgress(todos: TodoItem[]): ProgressStats {
	let done = 0;
	let total = 0;

	for (const item of todos) {
		if (item.subtasks.length > 0) {
			for (const sub of item.subtasks) {
				total += 1;
				if (sub.done) done += 1;
			}
		} else {
			total += 1;
			if (item.done) done += 1;
		}
	}

	const percent = total === 0 ? 0 : Math.round((done / total) * 100);
	return { done, total, percent };
}

export function isItemDone(item: TodoItem): boolean {
	if (item.subtasks.length > 0) {
		return item.subtasks.every((sub) => sub.done);
	}
	return item.done;
}
