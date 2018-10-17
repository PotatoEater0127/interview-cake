class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

function isBalanced(node) {
  let minDepth = Number.POSITIVE_INFINITY;
  let maxDepth = Number.NEGATIVE_INFINITY;
  const traverse = function(node, depth) {
    if (maxDepth - minDepth > 1) {
      return;
    }
    if (node.right === null && node.left === null) {
      minDepth = Math.min(minDepth, depth);
      maxDepth = Math.max(maxDepth, depth);
    } 
    if (node.right !== null) {
      traverse(node.right, depth + 1);
    }
    if (node.left !== null) {
      traverse(node.left, depth + 1);
    }
  };
  traverse(node, 0);
  console.log(maxDepth, minDepth);
  return (maxDepth - minDepth) <= 1;
}

module.exports = {
  isBalanced,
};
