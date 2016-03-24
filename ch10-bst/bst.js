'use strict';

function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.count = 1;
}

Node.prototype = {
  constructor: Node,
  show: function() {
    return this.data + ' : ' + this.count;
  }
}

function BST() {
  this.root = null;
}
BST.prototype = {
  constructor: BST,
  insert: function(data) {
    var n = new Node(data, null, null);
    if (this.root === null) {
      this.root = n;
    } else {
      var current = this.root;
      var parent;
      while (true) {
        parent = current;
        if (data < current.data) {
          current = current.left;
          if (current === null) {
            parent.left = n;
            break;
          }
        } else {
          current = current.right;
          if (current === null) {
            parent.right = n;
            break;
          }
        }
      }
    }
  },
  inOrder: function(node) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.show() + ' ');
      this.inOrder(node.right);
    }
  },
  preOrder: function(node) {
    if (node !== null) {
      console.log(node.show() + ' ');
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  },
  postOrder: function(node) {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.show() + ' ');
    }
  },
  getMin: function() {
    var current = this.root;
    while (current.left !== null) {
      current = current.left
    }
    return current.data;
  },
  getMax: function() {
    var current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  },
  find: function(data) {
    var current = this.root;
    while (current !== null) {
      if (current.data < data) {
        current = current.right
      } else if (current.data > data) {
        current = current.left;
      } else {
        return current;
      }
    }
    return null;
  },
  remove: function(data) {
    this.root = this.removeNode(this.root, data);
  },
  removeNode: function(node, data) {
    if (node === null) {
      return null;
    }
    if (data === node.data) {
      // 没有子节点的节点
      if (node.left === null && node.right === null) {
        return null;
      }
      // 没有左子节点的节点
      if (node.left === null) {
        return node.right;
      }
      // 没有右子节点的节点
      if (node.right === null) {
        return node.left;
      }
      // 有两个子节点的节点
      var tempNode = this.getSmallest(node.right);
      node.data = tempNode.data;
      node.right = this.removeNode(node.right, tempNode.data);
      return node;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data)
      return node;
    } else {
      node.right = this.removeNode(node.right, data);
      return node;
    }
  },
  getSmallest: function(node) {
    var current = node;
    while (current.left !== null) {
      current = current.left
    }
    return current;
  },
  update: function(data) {
    var grade = this.find(data);
    grade.count++;
    return grade;
  }

}
