var removeNthFromEnd = function(head, n) {
    const dummy = {}
    dummy.next = head;
    let prev = dummy;
    let next = dummy;
    
    for (let i = 0; i < n; i++) {
        next = next.next;
    }

    console.log(prev, next);
    
    while (next.next) {
        prev = prev.next;
        next = next.next;
    }
    
    prev.next = prev.next.next;
    return dummy.next;
};

console.log(removeNthFromEnd({
  val: 1,
  next: null
}, 1))