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

  /*
    - If there are o nodes in the list, return undefined
    - Loop throught the list until you reach the tail
    - Set the next property of the 2nd to last node to be null
    - Set the tail to be the 2nd to last node
    - Decrement the length of the list by 1
    - Return the value if the node removed
  */

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  /*
  - If there are no nodes, return undefined
  - Store the current head property in a variable
  - Set the head property to be the current head's next property
  - Decrement the length by 1
  - Return the value of the node removed
  */

  shift() {
    if (!this.head) return undefined;
    let lastHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return lastHead;
  }

  /*
  - This function should accept a value
  - Create a new node using the value passed to the function
  - If there is no head property on the list, set the head and tail to be the newly created node
  - Otherwise set the newly created node's next property to be the current head property on the list
  - Set the head property on the list to be that newly created node
  - Increment the length of the list by 1
  - Return the linked list
  */
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  /*
    - This function shoudl accept an index
    - If the index is less than zero or greater than or equal to the length of the list, return null
    - Loop through the list until you reach the index and return the node at that specific index
  */

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
}

let list = new SinglyLinkedList();
// console.log(list.push(1));
// console.log(list.push(2));
// console.log(list.push(3));
// console.log(list.push(4));
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
console.log(list);
