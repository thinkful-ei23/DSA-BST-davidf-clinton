'use strict';

const BinarySearchTree = require('./bst-class');

const BST = new BinarySearchTree();

BST.insert(3);
BST.insert(1);
BST.insert(4);
BST.insert(6);
BST.insert(9);
BST.insert(2);
BST.insert(5);
BST.insert(7);
BST.insert(8);

// BST.insert('e');
// BST.insert('a');
// BST.insert('s');
// BST.insert('y');
// BST.insert('q');
// BST.insert('u');
// BST.insert('e');
// BST.insert('s');
// BST.insert('t');
// BST.insert('i');
// BST.insert('o');
// BST.insert('n');

function findMaxHeight(tree) {
  let leftHeight = 0;
  let rightHeight = 0;
  if (tree.left === null && tree.right === null) {
    return 1;
  } else {
    if (tree.left) {
      leftHeight = findMaxHeight(tree.left);
    }
    if (tree.right) {
      rightHeight = findMaxHeight(tree.right);
    }
    if (leftHeight >= rightHeight) {
      return leftHeight + 1;
    } else {
      return rightHeight + 1;
    }
  }
}

console.log(findMaxHeight(BST));
// console.log(BST);
