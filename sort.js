const numbers = [54, 8, 87, 88, 100, 98, 17, 72, 67, 42, 40, 34, 55, 18, 33, 94, 59, 68, 92, 2];

const bubbleSort = (arr) => {
    let sorted = false;

    while (!sorted) {
        sorted = true;

        for (let i =0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;

                // flag as unsorted

                sorted = false;
            }
        }
    }

    return arr;
}

const quickSort = (arr) => {

    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[0];
    const left = [];
    const right = [];

    for(let i=1;i<arr.length; i++) {
        if (arr[i] <= pivot) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat(pivot, quickSort(right));
}

module.exports = {bubbleSort, quickSort};
// bubbleSort(numbers);