interface IStack<T> {
	push(item: T): void;
	pop(): T | undefined;
	peek(): T | undefined;
	size(): number;
}

class Stack<T> implements IStack<T> {
	private storage: T[] = []
	constructor(private capacity = 4) {}
	push(item: T): void {
		if (this.size() === this.capacity) {
			throw Error('stack is full')
		}
		this.storage.push(item)
	}

	pop(): T | undefined { // IStack의 pop()
		return this.storage.pop() // 배열의 pop()
	}

	peek(): T | undefined {
		return this.storage[this.size() - 1]
	}

	size(): number {
		return this.storage.length
	}
}

const stringStack = new Stack<string>()
stringStack.push('hello')
stringStack.push('world')
stringStack.push('!')
stringStack.push('!!')
stringStack.push('!!!')
console.log(stringStack.peek());
