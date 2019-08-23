class Node { 
    // constructor 
    constructor(data) 
    { 
        this.data = data; 
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