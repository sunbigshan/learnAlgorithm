
/**
 * 1) 单链表反转
 * 2) 链表中环的检测
 * 3) 两个有序的链表合并
 * 4) 删除链表倒数第n个结点
 * 5) 求链表的中间结点
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
        //先检查是否为环
        if(this.hasCycle()) return false;

        let currentNode = this.head;
        while (currentNode !== null) {
            console.log(currentNode.val)
            currentNode = currentNode.next;
        }
    }

    // 单链表反转
    reverseList() {
        let root = new ListNode('head');
        let currentNode = this.head.next;
        while(currentNode !== null) {
            const temp = currentNode.next;
            currentNode.next = root.next;
            root.next = currentNode;
            currentNode = temp;
        }
        this.head = root;
    }

    // 环检测
    hasCycle() {
        let slow = this.head;
        let fast = this.head.next;
        while(fast !== slow) {
            if(fast === null || fast.next === null) {
                return false;
            }
            fast = fast.next.next;
            slow = slow.next;
        }
        return true;
    }

    // 删除链表的倒数第N个节点
    removeNthFromEnd(n) {
        //先检查是否为环
        if(this.hasCycle()) return false;

        let root = new ListNode('head');
        root.next = this.head.next;

        let length = 0;
        let currentNode = this.head;
        while(currentNode !== null) {
            currentNode = currentNode.next;
            length++;
        }
        length = length - n - 1;
        currentNode = root;
        while(length > 0) {
            currentNode = currentNode.next;
            length--;
        }
        currentNode.next = currentNode.next.next;

        this.head = root;
    }

    // 求链表的中间结点
    middleNode() {
        let fast = this.head.next;
        let slow = this.head.next;

        while(fast !== null && fast.next !== null) {
            fast = fast.next.next;
            slow = slow.next;
        }

        return slow;
    }
}

var mergeTwoLists = function(l1, l2) {
    if(l1 === null) return l2;
    if(l2 === null) return l1;
    
    let ret = new ListNode('head');
    let currentNode = ret;
    
    let a = l1,
        b = l2;
    
    while(a !== null && b !== null) {
        if(a.val < b.val) {
            currentNode.next = a;
            a = a.next;
        }else{
            currentNode.next = b;
            b = b.next;
        }
        currentNode = currentNode.next;
    }
    
    if(a !== null) {
        currentNode.next = a;
    }else{
        currentNode.next = b;
    }
    
    return ret.next;
    
};


const LList = new LinkedList()
LList.insert('chen', 'head')
LList.insert('curry', 'chen')
LList.insert('sang', 'head')
LList.insert('zhao', 'head')
console.log('-------------show item------------')
LList.display();
console.log('-------------reverse list------------')
LList.reverseList();
LList.display();
console.log('-------------删除倒数第二个------------')
LList.removeNthFromEnd(2);
console.log('-------------show item------------')
LList.display();