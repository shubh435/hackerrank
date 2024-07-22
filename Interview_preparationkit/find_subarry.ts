/**
 * Find Subarray with given Sum from Array of non-negative Numbers
 
 * Input: arr[] = { 15, 2, 4, 8, 9, 5, 10, 23}, sum = 23
Output: 2 5
Explanation: Sum of elements between indices 2 and 5 is 2 + 4 + 8 + 9 = 23

* Input: arr[] = {1, 4, 0, 0, 3, 10, 5}, sum = 7
Output: 2 5
Explanation: Sum of elements between indices 1 and 4 is 4 + 0 + 0 + 3 = 7

* Input: arr[] = {1, 4}, sum = 0
Output: -1
Explanation: There is no subarray with 0 sum
 */


const subArrayFind = (arr: Array<number>, sum: number) => {

    let index1 = -1, index2 = -1;
    for (let i = 0; i < arr.length; i++) {
        let sum2 = 0
        for (let j = i; j < arr.length; j++) {

            sum2 += arr[j];
            if (sum === sum2) {
                index1 = i;
                index2 = j;
                break;
            }
        }

        if (index1 !== -1 && index2 !== -1) {
            break;
        }
    }

    return index1 !== -1 ? { index1: index1 + 1, index2: index2 + 1 } : -1
}


console.log("answer", subArrayFind([15, 2, 4, 8, 9, 5, 10, 23], 23))