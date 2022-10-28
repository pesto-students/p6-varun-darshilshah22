function createStack() {
    var items = [];

    return {
        push(i) {
            items.push(i);
            console.log(items);
        },
        pop() {
            return items.pop();
        }
    };
}

const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();