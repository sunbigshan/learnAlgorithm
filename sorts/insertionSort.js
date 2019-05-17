/**
 * 插入排序
 */
const insertionSort = (arr) => {
    if(arr.length <= 1) return;
    const len = arr.length;
    for(let i = 1; i < len; i++) {
        const temp = arr[i];
        let j = i - 1;
        for(; j >= 0; j--) {
            if(arr[j] > temp) {
                arr[j + 1] = arr[j];
            }else{
                break;
            }
        }
        arr[j + 1] = temp;
    }
    console.log(arr);
}

const test = [4, 5, 6, 3, 2, 1];
insertionSort(test)