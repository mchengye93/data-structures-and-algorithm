
// User defined class node 
class Node { 
    // constructor 
    constructor(data) 
    { 
        this.data = data; 
        this.next = null
    } 
} 

let removeDuplicate = (node) => {
    let set = {};

    let n = node;
    let next = n.next;

    set[n.val] = 1;


    while (next !== null) {
        if (set[next.val] === undefined) {
            set[next.val] = 1;
        } else {
            next = next.next;
            n.next = next;
        }
    }
}
let head = null;
var node = new Node (1);
head = node;
node.next = new Node (4);
node = node.next;
node.next = new Node (2);
node = node.next;
node.next = new Node(3);

console.log(node);
console.log(head);

//removeDuplicate(head);
