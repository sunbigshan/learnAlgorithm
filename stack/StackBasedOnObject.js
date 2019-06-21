class Stack {
  constructor() {
    this.items = {};
    this.count = 0;
  }
  push(element) {
    this.items[this.count++] = element;
  }
  pop() {
    if(this.isEmpty()) {
      return undefined;
    }
    this.count--;
    let ret = this.items[this.count];
    delete this.items[this.count];
    return ret;
  }
  peek() {
    if(this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }
  isEmpty() {
    return this.count === 0;
  }
  clear() {
    // this.items = {};
    // this.count = 0;
    while(this.isEmpty()) {
      this.pop();
    }
  }
  toString() {
    if(this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[0]}`;
    for(let i = 1; i < this.count; i++) {
      objString += `,${this.items[i]}`;
    }
    return objString;
  }
}

function decimalToBinary(decNumber) {
  const remStack = new Stack();
  let number = decNumber;
  let rem;
  let binaryString = '';

  while(number > 0) {
    rem = Math.floor(number % 2);
    remStack.push(rem);
    number = Math.floor(number / 2);
  }

  while(!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }

  return binaryString;
}

console.log(decimalToBinary(11))