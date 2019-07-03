/**
 * 二叉搜索树
 * insert(key) 向树中插入一个新的键
 * search(key) 在树中查找一个键。如果节点存在，则返回 true;如果不存在，则返回 false
 * inOrderTraverse() 通过中序遍历方式遍历所有节点
 * preOrderTraverse() 通过先序遍历方式遍历所有节点
 * postOrderTraverse() 通过后序遍历方式遍历所有节点
 * min() 返回树中最小的值/键
 * max() 返回树中最大的值/键
 * remove(key) 从树中移除某个键
 */
function Node(key) {
  this.key = key;
  this.left = left;
  this.right = right;
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(key) {
    if(this.root === null) { // 插入到根节点
      this.root = new Node(key);
    }else{ // 插入到根节点之外的位置
      this.insertNode(this.root, key);
    }
  }
  insertNode(node, key) {
    if(key < node.key) { // 插入左侧子节点
      if(node.left === null) {  // 左侧子节点为空
        node.left = new Node(key);
      }else{
        // 递归查找为空的左侧子节点
        this.insertNode(node.left, key);
      }
    }else{ // 插入右侧子节点
      if(node.right === null) {  // 右侧子节点为空
        node.right = new Node(key);
      }else{
        // 递归查找为空的右侧子节点
        this.insertNode(node.right, key);
      }
    }
  }
}