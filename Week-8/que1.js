class Node {
    constructor(item) {
        this.data = item;
        this.left = this.right = null;
    }
}

let root;
function maxDepth(node) {
    if (node == null)
        return 0;
    else {
        let lDepth = maxDepth(node.left);
        let rDepth = maxDepth(node.right);

        if (lDepth > rDepth)
            return (lDepth + 1);
        else
            return (rDepth + 1);
    }
}

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("Height of tree is : " +
    maxDepth(root));