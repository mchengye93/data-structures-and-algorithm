let nthNode = (head,n) => {
    let n = n;
    let nNode = head;
    let node = head;

    while (n > 0) {
        node = node.next;
        n--;

    }

    while(node !== null) {
        nNode = nNode.next;
        node = node.next;
    }
    return nNode;
}