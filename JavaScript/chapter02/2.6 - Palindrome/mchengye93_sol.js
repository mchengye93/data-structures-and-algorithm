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

let reverseLinkedListEqual = (node1, node2) => {
    while (node1 !==null && node2 !== null) {
        if (node1.val !== node2.val) {
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

