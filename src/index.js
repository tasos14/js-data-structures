const LinkedList = require('./LinkedList');
const BST = require('./BST');
const Stack = require('./Stack');

const linkedList = new LinkedList();
linkedList.pushLeft(1);
linkedList.pushLeft(2);
linkedList.pushLeft(3);
linkedList.pushLeft(4);
linkedList.pushLeft(5);
linkedList.pushLeft(6);
linkedList.removeRight();
linkedList.removeLeft();

console.log(linkedList.getLast().value);
console.log(linkedList.getFirst().value);
console.log(linkedList.get(2).value);

linkedList.print();

const tree = new BST();
tree.add(10);
tree.add(4);
tree.add(4);
tree.add(12);
tree.add(2);

console.log(tree.find(10));

const stack = new Stack(10);

stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.pop();
