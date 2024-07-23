/**
 * Find the Missing Number
 * Input: arr[] = {1, 2, 4, 6, 3, 7, 8} , N = 8
 Output: 5
Explanation: Here the size of the array is 8, so the range will be [1, 8]. The missing number between 1 to 8 is 5



* Input: arr[] = {1, 2, 3, 5}, N = 5
Output: 4
Explanation: Here the size of the array is 4, so the range will be [1, 5]. The missing number between 1 to 5 is 4
 */

// https://www.youtube.com/watch?v=6KHW7ZQwtCA

function findeMissingNumber(arr: number[], n: number) {
    let xorArray = 0;
    let xorArray1 = 0;
    const sortedArr = arr.sort((a: number, b: number) => a - b)
    for (let i = 1; i <= n; i++) {
        xorArray ^= i;
    }
    for (let i = 0; i < sortedArr.length; i++) {
        xorArray1 ^= sortedArr[i];
    }

    return xorArray1 ^ xorArray
}


console.log(findeMissingNumber([1, 2, 4, 6, 3, 7, 8], 8));
