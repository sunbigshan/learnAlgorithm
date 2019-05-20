const quickSort = (arr) => {
    quick(arr, 0, arr.length - 1);
}

function quick(arr, left, right) {
    let index;
    if(arr.length > 1) {
        index = partition(arr, left, right);
        if(left < index - 1) {
            quick(arr, left, index - 1);
        }
        if(index < right) {
            quick(arr, index, right);
        }
    }
}

function partition(arr, left, right) {
    let pivot = arr[Math.floor((left + right) / 2)];
    let i = left;
    let j = right;

    while(i <= j) {
        while(arr[i] < pivot) {
            i++;
        }
        while(arr[j] > pivot) {
            j--;
        }
        if(i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    
    return i;
}

function swap(arr, i, j) {
    // const temp = arr[i];
    // arr[i] = arr[j];
    // arr[j] = temp;
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

const test = [11, 8, 3, 9, 7, 1, 2, 5];
quickSort(test);
console.log(test)