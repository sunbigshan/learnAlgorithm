/**
 * 1）单链表的插入、删除、查找操作；
 */

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new ListNode('head');
    }

    // 根据 val 查找节点
    findByValue(val) {
        let currentNode = this.head;
        while(currentNode !== null && currentNode.val !== val) {
            currentNode = currentNode.next;
        }
        return currentNode === null ? -1 : currentNode;
    }

    // 根据 index 查找节点
    findByIndex(index) {
        let currentNode = this.head;
        let pos = 0;
        while(currentNode !== null && pos !== index) {
            currentNode = currentNode.next;
            pos++;
        }
        return currentNode === null ? -1 : currentNode;
    }

    // 在指定元素后插入
    insert(newVal, val) {
        let currentNode = this.findByValue(val);
        if (currentNode === -1) {
            console.log('未找到插入位置')
            return false;
        }
        const newNode = new ListNode(newVal);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
    }

    // 查找前一个
    findPrev(val) {
        let currentNode = this.head;
        while(currentNode.next !== null && currentNode.next.val !== val) {
            currentNode = currentNode.next;
        }
        return currentNode === null ? -1 : currentNode;
    }

    // 根据值删除
    remove (val) {
        let prevNode = this.findPrev(val);
        prevNode.next = prevNode.next.next;
    }

    // 遍历显示所有节点
    display () {
        let currentNode = this.head;
        while (currentNode !== null) {
            console.log(currentNode.val)
            currentNode = currentNode.next;
        }
    }
}

const LList = new LinkedList()
LList.insert('chen', 'head')
LList.insert('curry', 'chen')
LList.insert('sang', 'head')
LList.insert('zhao', 'head')
console.log('-------------show item------------')
LList.display();
console.log('-------------remove item sang------------')
LList.remove('sang');
console.log('-------------show item------------')
LList.display();