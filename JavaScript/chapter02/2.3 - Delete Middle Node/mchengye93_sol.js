let deleteMiddleNode = (head) => {
    let middle = head;
    let aheadNode = head;

   

    while (aheadNode.next.next !== null) {
        prev = middle;
        middle = middle.next;
        aheadNode = aheadNode.next.next;
        n++;
    }
    //this node is one behind middle so change it's next to skip middle
    prev.next = middle.next;

}