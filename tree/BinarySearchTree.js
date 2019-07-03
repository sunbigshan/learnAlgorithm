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
  this.left = null;
  this.right = null;
}

class BinarySearchTree {
  constructor() {
    // 初始化根节点
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
  search(key) {
    return this.searchNode(this.root, key);
  }
  searchNode(node, key) {
    if(node === null) {
      return false;
    }
    if(key < node.key) { // 遍历左侧子节点
      return this.searchNode(node.left, key);
    }else if(key > node.key) { // 遍历右侧子节点
      return this.searchNode(node.right, key);
    }else{
      return true;
    }
  }
  // 中序遍历
  inOrderTraverse(callback) {
     this.inOrderTraverseNode(this.root, callback);
  }
  inOrderTraverseNode(node, callback) {
    if(node !== null) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this.inOrderTraverseNode(node.right, callback);
    }
  }
  // 先序遍历
  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback);
  }
  preOrderTraverseNode(node, callback) {
    if(node !== null) {
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }
  // 后续遍历
  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback);
  }
  postOrderTraverseNode(node, callback) {
    if(node !== null) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }
  // 获取最小值
  min() {
    return this.minNode(this.root);
  }
  minNode(node) {
    let current = node;
    while(current.left !== null) {
      current = current.left;
    }
    return current.key;
  }
  // 获取最大值
  max() {
    return this.maxNode(this.root);
  }
  maxNode(node) {
    let current = node;
    while(current.right !== null) {
      current = current.right;
    }
    return current.key;
  }
  // 移出节点
  remove(key) {
    this.root = this.removeNode(this.root, key);
  }
  removeNode(node, key) {
    if(node === null) {
      return null;
    }
    if(key < node.key) {
      node.left = this.removeNode(node.left, key);
      return node;
    }else if(key > node.key) {
      node.right = this.removeNode(node.right, key);
      return node;
    }else{
      if(node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if(node.left === null) {
        node = node.right;
        return right;
      }else if(node.right === null) {
        node = node.left;
        return node;
      }
      const aux = this.minNode(node.right);
      node.key = aux.key;
      node.right = this.removeNode(node.right, aux.key);
      return node;
    }
  }
}

const tree = new BinarySearchTree();

tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);

console.log('-------------搜索6------------')
console.log(tree.search(6))
console.log('-------------插入6------------')
tree.insert(6);
console.log('插入成功');
console.log('-------------再次搜索6------------')
console.log(tree.search(6))
console.log('-------------最小值------------')
console.log(tree.min());
console.log('-------------最大值------------')
console.log(tree.max());
console.log('-------------中序遍历------------')
tree.inOrderTraverse(val => console.log(val));
console.log('-------------先序遍历------------')
tree.preOrderTraverse(val => console.log(val));
console.log('-------------后序遍历------------')
tree.postOrderTraverse(val => console.log(val));