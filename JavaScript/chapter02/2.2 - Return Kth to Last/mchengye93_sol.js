let nthNode = (head,n) => {
    let count = 0;
    let nNode = head;
    let node = head;

    while (count < n) {
        node = node.next;
        count++;

    }

    while(node !== null) {
        nNode = nNode.next;
        node = node.next;
    }
    return nNode;
}