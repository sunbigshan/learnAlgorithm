
/**
 * 1) 单链表反转
 * 2) 链表中环的检测
 * 3) 两个有序的链表合并
 * 4) 删除链表倒数第n个结点
 * 5) 求链表的中间结点
 *
 */
class Node {
    constructor (element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor () {
        this.head = new Node('head');
    }

    // 根据 value 查找节点
    findByValue (item) {
        let currentNode = this.head;
        while (currentNode !== null && currentNode.element !== item) {
            currentNode = currentNode.next;
        }
        console.log(currentNode);
        return currentNode === null ? -1 : currentNode;
    }

    // 根据 index 查找节点
    findByIndex (index) {
        let currentNode = this.head;
        let pos = 0;
        while (currentNode !== null && pos !== index) {
            currentNode = currentNode.next;
            pos++;
        }
        console.log(currentNode);
        return currentNode === null ? -1 : currentNode;
    }

    // 指定元素向后插入
    insert (newElement, element) {
        let currentNode = this.findByValue(element);
        if (currentNode === -1) {
            console.log('未找到插入位置')
            return false;
        }
        const newNode = new Node(newElement);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
    }

    // 查找前一个
    findPrev (item) {
        let currentNode = this.head;
        while (currentNode.next !== null && currentNode.next.element !== item) {
            currentNode = currentNode.next;
        }
        if (currentNode.next === null) {
            return -1;
        }
        return currentNode;
    }

    // 根据值删除
    remove (item) {
        const desNode = this.findByValue(item);
        if (desNode === -1) {
            console.log('未找到该元素')
            return false;
        }
        const prevNode = this.findPrev(item);
        prevNode.next = desNode.next;
    }

    // 遍历显示所有节点
    display () {
        //先检查是否为环
        if(this.checkCircle()) return false;

        let currentNode = this.head;
        while (currentNode !== null) {
            console.log(currentNode.element)
            currentNode = currentNode.next;
        }
    }

    //  尾插法 反转单链表
    reverseList() {
        const root = new Node('head');
        let currentNode = this.head.next;
        while (currentNode !== null) {
            let nextNode = currentNode.next;
            currentNode.next = root.next;
            root.next = currentNode;
            currentNode = nextNode;
        }
        this.head = root;
    }

    // 环验证
    checkCircle() {
        let fast = this.head.next;
        let slow = this.head;
        while (fast !== null && false.next !== null) {
            fast = false.next.next;
            slow = slow.next;
            if(slow === fast) return true;
        }
        return false;
    }

    // 删除倒数第k个节点
    removeByIndexFromEnd(index) {
        //先检查是否为环
        if(this.checkCircle()) return false;

        let pos = 1;
        this.reverseList();
        let currentNode = this.head.next;
        while(currentNode !== null && pos < index) {
            currentNode = currentNode.next;
            pos++;
        }
        if (currentNode === null) {
            console.log('无法删除最后一个节点或者该节点不存在')
            return false
        }
        this.remove(currentNode.element)
        this.reverseList();
    }

    // 求中间节点
    findMiddleNode() {
        let fast = this.head;
        let slow = this.head;
        while(fast.next !== null && fast.next.next !== null) {
            fast = fast.next.next;
            slow = slow.next;
        }
        console.log(slow);
        return slow;
    }
}

