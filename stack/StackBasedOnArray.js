/**
 * 基于数组实现栈
 */
let Stack = (function() {
    // items 为栈的私有变量，禁止外部访问
    const items = new WeakMap();
    class Stack {
        constructor() {
            items.set(this, []);
        }
        // 入栈
        push(item) {
            let s = items.get(this);
            s.push(item);
        }
        // 出栈
        pop() {
            if(this.isEmpty()) {
                return null;
            }
            let s = items.get(this);
            let r = s.pop();
            return r;
        }
        // 查看栈顶
        peek() {
            if(this.isEmpty()) {
                return null;
            }
            let s = items.get(this);
            return s[s.length - 1];
        }
        // 检查栈是否为空
        isEmpty() {
            let s = items.get(this);
            return s.length === 0;
        }
        // 返回栈的长度
        size() {
            let s = items.get(this);
            return s.length;
        }
        // 打印栈
        display() {
            let s = items.get(this);
            console.log(s);
        }
        // 情况栈
        clear() {
           items.set(this, []);
        }
    }
    return Stack;
}());

var stack = new Stack();
stack.push(5);
stack.push(4);
stack.push(3);
stack.push(2);
stack.push(1);
console.log(stack.peek())
console.log(stack.size())
console.log(stack.pop())
console.log(stack.size())
stack.clear();
console.log(stack.peek())
console.log(stack.pop())

module.exports = Stack;

