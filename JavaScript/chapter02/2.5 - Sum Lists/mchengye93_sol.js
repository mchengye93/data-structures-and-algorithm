class Node { 
    // constructor 
    constructor(data) 
    { 
        this.val = data; 
        this.next = null
    } 
} 

let sumList = (node1, node2) => {
    //reverseOrder
    let input1 = '';
    let input2 = '';

    let input1Node = node1;
    while (input1Node.next  !== null) {
        input1 = input1Node.val + input1;
        input1Node = input1Node.next;
    }

    let input2Node = node2;
    while (input2Node.next !== null) {
        input2 = input2Node.val + input2;
        input2Node = input2Node.next;
    }

    let sum = parseInt(input1) + parseInt(input2);

    let sumArr = sum.toString().split('');

    let node = new Node(sumArr[sumArr.length-1]);

    for (let i = sumArr.length-2; i >= 0; i--) {
        node.next = new Node(sumArr[i]);
    }
    return node;
}

let node = new Node (1);
let node2 = new Node (2);
let node3 = new Node(3);

node.next = node2;
node2.next = node3;

let node4 = new Node(4);
let node5 = new Node(5);
node4.next = node5;


console.log(sumList(node, node4));