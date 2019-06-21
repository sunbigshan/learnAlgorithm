class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
  addFront(element) {
    if(this.isEmpty()) {
      this.addBack(element);
    }else if(this.lowestCount > 0) {
      this.items[--this.lowestCount] = element;      
    }else{
      for(let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[0] = element;
    }
  }
  addBack(element) {
    this.items[this.count++] = element;
  }
  removeFront() {
    if(this.isEmpty()) {
      return null;
    }
    let ret = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return ret;
  }
  removeBack() {
    if(this.isEmpty()) {
      return null;
    }
    let ret = this.items[this.count - 1];
    delete this.items[this.count - 1];
    this.count--;
    return ret;
  }
  isEmpty() {
    return this.count === this.lowestCount;
  }
  peekFront() {
    if(this.isEmpty()) {
      return null;
    }
    return this.items[this.lowestCount];
  }
  peekBack() {
    if(this.isEmpty()) {
      return null;
    }
    return this.items[this.count - 1];
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

const deque = new Deque();
deque.addBack('Sun');
deque.addBack('Da');
deque.addBack('Shan');
deque.addFront('Name');
console.log(deque.toString());
deque.removeFront();
deque.removeFront();
deque.addFront('Test');
console.log(deque.toString());
deque.removeBack();
console.log(deque.toString());