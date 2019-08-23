class Node { 
    // constructor 
    constructor(data) 
    { 
        this.data = data; 
        this.next = null
    } 
} 
let palindrome = (node) => {
    let reverse = reverseLinkedList(node);
    return linkedListEqual(reverse,node);
}

let reverseLinkedList = (node) => {
    let head = null;

    while(node !== null) {
        let newNode = new Node(node.data);
        newNode.next = head;
        head = newNode;
        node = node.next;
    }
    return head;
}

let linkedListEqual = (node1, node2) => {
    while (node1 !==null && node2 !== null) {
        if (node1.data !== node2.data) {
            return false;
        }
        node1 = node1.next;
        node2 = node2.next;
    }

    if (node1 === null && node2 === null) {
        return true;
    }
    return false;
}

let node = new Node (1);
let node2 = new Node(2);
let node3 = new Node (1);

node.next = node2;
node2.next = node3;

console.log(palindrome(node)); 

let node4 = new Node(4);
node3.next =node4;
console.log(palindrome(node)); 
