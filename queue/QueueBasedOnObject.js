class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
  enqueue(element) {
    this.items[this.count++] = element;
  }
  dequeue() {
    if(this.isEmpty()) {
      return null;
    }
    let ret = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return ret;
  }
  peek() {
    if(this.isEmpty()) {
      return null;
    }
    return this.items[this.lowestCount];
  }
  isEmpty() {
    return this.count === this.lowestCount;
  }
  size() {
    return this.count - this.lowestCount;
  }
  clear() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
  toString() {
    if(this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[this.lowestCount]}`;
    for(let i = this.lowestCount + 1; i < this.count; i++) {
      objString += `,${this.items[i]}`;
    }
    return objString;
  }
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue('John');
queue.enqueue('Jack');
console.log(queue.toString());
queue.dequeue();
console.log(queue.toString());
