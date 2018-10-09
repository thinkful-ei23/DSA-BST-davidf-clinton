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
// BST.insert(10);
// BST.insert(8);

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

function isBST(tree) {
  if (tree === null) {
    return true;
  }

  if (tree.right !== null && tree.key > tree.right.key) {
    return false;
  }

  if (tree.left !== null && tree.key < tree.left.key) {
    return false;
  }

  return isBST(tree.left) && isBST(tree.right);
}
let count = 0;
function getNthLargest(tree, n) {
  if (n === count) {
    // console.log(n);
    console.log('base case triggered at', tree.key);
    return tree.key;
  }
  if (tree.right) {
    console.log('moving to', tree.right.key);
    return getNthLargest(tree.right, n);
  }
  count++;
  console.log(count);
  if (tree.left) {
    // console.log(n);
    return getNthLargest(tree.left, n);
  }
  if (!tree.left) {
    console.log('dead end, go back to parent', tree.parent.key);
    return getNthLargest(tree.parent, n);
  }
}

// console.log(isBST(BST));
// console.log(BST);
console.log(getNthLargest(BST, 3));
