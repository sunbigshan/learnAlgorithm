/**
 * 归并排序
 */
const mergeSortRec = (arr) => {
    let len = arr.length;
    if(len === 1) {
        return arr;
    }
    let mid = Math.floor(len / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, len);

    return merge(mergeSortRec(left), mergeSortRec(right));
}

function merge(left, right) {
    let result = [];
    let il = 0;
    let ir = 0;

    while(il < left.length && ir < right.length) {
        if(left[il] <= right[ir]) {
            result.push(left[il++]);
        }else{
            result.push(right[ir++]);
        }
    }

    while(il < left.length) {
        result.push(left[il++]);
    }

    while(ir < right.length) {
        result.push(right[ir++]);
    }

    return result;
}

const test = [11, 8, 3, 9, 7, 1, 2, 5, 3];
console.log(mergeSortRec(test))

