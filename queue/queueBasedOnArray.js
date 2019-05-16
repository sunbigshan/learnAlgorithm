/**
 * 基于数组实现队列
 */
let Queue = (function () {
    const items = new WeakMap();
    class Queue {
        constructor() {
            items.set(this, []);
        }
        // 入队
        enqueue(element) {
            let q = items.get(this);
            q.push(element);
        }
        // 出队
        dequeue() {
            let q = items.get(this);
            let r = q.shift();
            return r;
        }
    }
    return Queue;
})();