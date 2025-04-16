const findMaxDiff = (arr) => {
    let minVal = arr[0];
    let maxVal = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minVal) {
            minVal = arr[i]
        }
        if (arr[i] > maxVal) {
            maxVal = arr[i]
        }
    }
    return maxVal - minVal;

}


const findMaxDiffwithFor = (arr) => {
    let maxDiff = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (Math.abs(arr[j] - arr[i]) > maxDiff) {
                maxDiff = Math.abs(arr[j] - arr[i])
            }
        }
    }
    return maxDiff;
}


// The first method (findMaxDiff) is better in terms of performance because it has a time complexity of O(n).
// It only requires a single pass through the array to find the minimum and maximum values.

// The second method (findMaxDiffwithFor) has a time complexity of O(n^2) because it uses nested loops to compare every pair of elements in the array.
// This makes it significantly slower for large arrays.


console.log(findMaxDiffwithFor([1, 2, -3, 4, 5]))
console.log(findMaxDiff([1, 4, -3, 4, 15])) 