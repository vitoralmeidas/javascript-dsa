class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

let list = new SinglyLinkedList(0);
console.log(list.push(10));
/*
    Method push()
    - This function should accept a value/;
    - Create an new node using the value passed to the function
    - If there is no head property on the list, set the head and the tail to be the newly created node
    - Otherwise set the next property o the tail to be the new node and set the tail property 
        on the list to be the newly created node
    - Increment the length by one
    - return the list (this)
    */
