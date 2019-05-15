const Stack = require('./StackBasedOnArray.js');

class SampleBrowser {
    constructor() {
        this.normalStack = new Stack();
        this.backStack = new Stack();
    }
    // 正常浏览页面
    push(url) {
        this.normalStack.push(url);
        this.backStack.clear();
        this.displayAllStack();
    }
    // 后退
    back() {
        const value = this.normalStack.pop();
        if(value !== null) {
            this.backStack.push(value);
            this.displayAllStack()
        }else{
            console.log('无法后退');
        }
    }
    // 前进
    front() {
        const value = this.backStack.pop();
        if(value !== null) {
            this.normalStack.push(value);
            this.displayAllStack()
        }else{
            console.log('无法前进')
        }
    }
    // 打印栈内数据
    displayAllStack() {
        console.log('---后退页面---')
        this.backStack.display()
        console.log('---浏览页面---')
        this.normalStack.display()
    }
}

// Test
const browser = new SampleBrowser()
browser.push('www.google.com')
browser.push('www.baidu.com')
browser.push('www.github.com')
// 后退
browser.back()
browser.back()
browser.back()
browser.back()
browser.back()
browser.front()
browser.front()
browser.front()
browser.front()
browser.front()
browser.push('www.new.com')