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

function getNthLargest(tree, n) {
  // if (tree.left === null && tree.right === null) {
  //   console.log('no left no right');
  //   return;
  // }
  if (tree.right) {
    console.log('moving to', tree.right.key);
    getNthLargest(tree.right, n);
  }
  n--;
  if (n === 0) {
    console.log('base case triggered at', tree.key);
    let key = tree.key;
    console.log('key', typeof(key));
    return key;
  }
  if (tree.left) {
    n--;
    getNthLargest(tree.left, n);
  }

  // let largest;
  // while (tree.right !== null) {
  //   largest = largest.right;
  // }
}

// console.log(isBST(BST));
console.log(BST);
console.log(getNthLargest(BST, 3));
