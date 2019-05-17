/**
 * 选择排序
 */
const selectionSort = (arr) => {
    if(arr.length <= 1) return;
    const len = arr.length;
    for(let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for(let j = i + 1; j < len; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        const temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    console.log(arr);
}

const test = [4, 5, 6, 3, 2, 1];
selectionSort(test)