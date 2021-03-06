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

  /*
        - Finding
     - Starting at the root
        - Check if there is a root, if not - we're done searching!
        - If there is a root, check if the value of the new node is the value
            we are looking for. If we found it, we're done!
        - If not, check to see if the value is greater than or less than the value
            of the root
        - If it is greater
            - Check to see of there is a node to the right
                - If there is, move to that node and repeat theses steps
                - If there is not, we're done searching!
        - If it is less
            - Check to see if there is a node to the left
                - If there is, move to that node and repeat these steps
                - If there is not, we're done searching!
  */
  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) current = current.left;
      else if (value > current.value) current = current.right;
      else found = true;
    }
    if (!found) return undefined;
    return current;
  }

  // boolean method, another way for find();
  contains(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) current = current.left;
      else if (value > current.value) current = current.right;
      else return true;
    }
    return false;
  }

  /*
      -Breathe First Search BFS
    - Create a queue (this can be an array) and a variable to store the values of nodes visited
    - Place the root no in the queue
    - Loop as long as there is anything in the queue
      - Dequeue a node from the queue and push the value of the no into the variable that stores
        the nodes
      - If there is a left property on the node dequeued - add it to the queue 
      - If there is a right property on the node dequeued - add it to the queue
    - Return the variable that stores the values
  */
  BFS() {
    let node = this.root;
    let queue = [];
    let data = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  /*
      -DFSPreOrder
    - Create a variable to store the values of nodes visited
    - Store the root of the BST in a variable called current
    - Write a helper function which accepts a node
      - Push the value of the node to the variable that stores the values
      - If the node has a left property, call the helper function with the left property on the node
      - If the node has a right property, call the helper function with the right property on the node
    - Invoke the helper function with the current variable
    - Return the array of values
  */

  DFSPreOrder() {
    let data = [];
    const traverse = (node) => {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return data;
  }

  /*
      -DFSPostOrder
    - Create a variable to store the values of nodes visited
    - Store the root of the BST in a variable called current
    - Write a helper function which accepts a node
      - If the node has a left property, call the helper function with the left property on the node
      - If the node has a right property, call the helper function with the right property on the node
      - Push the value of the node to the variable that stores the values
      - Invoke the helper function with the current variable
    - Return the array of values
  */

  DFSPostOrder() {
    let data = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    };
    traverse(this.root);
    return data;
  }

  /*
      -DFSInOnder
    - Create a variable to store the values of nodes visited
    - Store the root of the BST in a variable called current
    - Write a helper function which accepts a node
      - If the node has a left property, call the helper function with the left property on the node
      - Push the value of the node to the variable that stores the values
      - If the node has a right property, call the helper function with the right property on the node
      - Invoke the helper function with the current variable
    - Return the array of values
  */

  DFSInOrder() {
    let data = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return data;
  }

  // get count of values stored

  getNodeCount() {
    let allValues = this.BFS();
    return allValues.length;
  }

  //print values from min -> max
  print() {
    let allValues = this.DFSInOrder();
    for (let i = 0; i < allValues.length; i++) {
      console.log(allValues[i]);
    }
  }

  getMin() {
    if (this.root == null) return -1;
    while (this.root.left != null) {
      this.root.left;
    }
    return this.root.value;
  }

  getMax() {
    if (this.root == null) return -1;
    while (this.root.right != null) {
      this.root.right;
    }
    return this.root.value;
  }

  getHeight(node = this.root) {
    if (node == null) return -1;
    let leftHeight = this.getHeight(node.left);
    let rightHeight = this.getHeight(node.right);

    let heightDiference = leftHeight - rightHeight;
    // if (Math.abs(heightDiference) > 1) {
    //   return -1;
    // }
    return Math.max(leftHeight, rightHeight + 1);
  }

  removeNode(current, value) {
    //base case, if the tree is empty

    if (current === null) return current;

    // when value is the same as current's value, this is the node to be deleted
    if (value === current.value) {
      // for case 1 and 2, without child or with onde child
      if (current.left === null && current.right === null) {
        return null;
      } else if (current.left === null) {
        return current.right;
      } else if (current.right === null) {
        return current.left;
      } else {
        //node with two children, get inorder successor
        // smallest in the right subtree

        let tempNode = this.kthSmallestNode(current.right);
        current.value = tempNode.value;

        //delete the inorder successor
        current.right = this.removeNode(current.right, tempNode.value);
        return current;
      }
    } else if (value < current.value) {
      current.left = this.removeNode(current.left, value);
      return current;
    } else {
      current.right = this.removeNode(current.right, value);
      return current;
    }
  }

  // this function calls removeNode
  remove(value) {
    this.root = this.removeNode(this.root, value);
  }

  //almost the same getMin(), but accept an argument
  kthSmallestNode(node) {
    while (!node.left === null) {
      node = node.left;
    }
    return node;
  }
}

// let tree = new BinarySearchTree();
