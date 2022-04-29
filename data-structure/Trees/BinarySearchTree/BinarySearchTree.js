class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /*
            - Inserting
         - Create a new node
         - Starting at the root
            - Check if there is a root, if not - the root now becomes that new node!
            - If there is a root, check if the value of the new node is greater than
                or less than the value of the root
            - If it is greater
                - Check to see if there is a node to the right
                    - If there is, move to that node and repeat theses steps
                    - If there is not, add that node as the right property 
            -  If is is less
                - Check to see if there is a node to the left
                    - If there is, move to that node and repeat theses steps
                    - If there is not, add that node as the left property
        */

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
}

// let tree = new BinarySearchTree();
