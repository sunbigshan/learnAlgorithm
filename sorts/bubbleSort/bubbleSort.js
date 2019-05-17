/**
 * 冒泡排序
 */
const bubbleSort = (arr) => {
    if(arr.length <= 1) return;
    const len = arr.length;
    for(let i = 0; i < len; i++) {
        let hasChange = false;
        for(let j = 0; j < len - i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                const temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                hasChange = true;
            }
        }
        if(!hasChange) break;
    }
    console.log(arr);
}

const test = [4, 5, 6, 3, 2, 1];
bubbleSort(test)