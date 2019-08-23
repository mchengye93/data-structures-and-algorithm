class Node { 
    // constructor 
    constructor(data) 
    { 
        this.data = data; 
        this.next = null
    } 
} 
let palindrome = (node) => {

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

