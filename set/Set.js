class CunstomSet {
  constructor(element) {
    this.items = {};
  }
  // 如果元素在集合中，返回 true，否则返回 false。
  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }
  // 向集合添加一个新元素
  add(element) {
    if(this.has(element)) {
      return false;
    }
    this.items[element] = element;
    return true;
  }
  // 从集合移除一个元素
  delete(element) {
    if(this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }
  // 移除集合中的所有元素
  clear() {
    this.items = {};
  }
  // 返回集合所包含元素的数量
  size() {
    return Object.keys(this.items).length;
  }
  // 返回一个包含集合中所有值(元素)的数组
  values() {
    return Object.values(this.items);
  }
  // 并集:对于给定的两个集合，返回一个包含两个集合中所有元素的新集合
  union(otherSet) {
    const unionSet = new CunstomSet();
    this.values.forEach(value => unionSet.add(value));
    otherSet.forEach(value => unionSet.add(value));
    return unionSet;
  }
  // 交集:对于给定的两个集合，返回一个包含两个集合中共有元素的新集合
  intersection(otherSet) {
    const intersectionSet = new Set();
    const values = this.values();
    const otherValues = otherSet.values();
    let biggerSet = values;
    let smallerSet = otherValues;
    if (otherValues.length - values.length > 0) {
      biggerSet = otherValues;
      smallerSet = values;
    }
    smallerSet.forEach(value => {
      if(biggerSet.has(value)) {
        intersectionSet.add(value);
      }
    })
    return intersectionSet;
  }
  // 差集:对于给定的两个集合，返回一个包含所有存在于第一个集合且不存在于第二个集合的元素的新集合
  difference(otherSet) {
    const differenceSet = new Set();
    this.values.forEach(value => {
      if(!otherSet.has(value)) {
        differenceSet.add(value);
      }
    })
    return differenceSet;
  }
  // 子集:验证一个给定集合是否是另一集合的子集
  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    }
    let isSubset = true;
    this.values().every(value => {
      if (!otherSet.has(value)) {
        isSubset = false;
        return false;
      }
      return true;
    });
    return isSubset;
  }
}

const set = new CunstomSet();

set.add(1); 
console.log(set.values()); // 输出[1] 
console.log(set.has(1)); // 输出true 
console.log(set.size()); // 输出1

set.add(2);
console.log(set.values()); // 输出[1, 2] 
console.log(set.has(2)); // 输出true 
console.log(set.size()); // 输出2

set.delete(1); 
console.log(set.values()); // 输出[2]

set.delete(2); 
console.log(set.values()); // 输出[]