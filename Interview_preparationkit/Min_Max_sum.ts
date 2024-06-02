/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
*/

function miniMaxSum(arr: number[]): void {
    arr.sort((a, b) => a - b);
    const minSum = arr.slice(0, 4).reduce((acc, curr) => acc + curr, 0);
    const maxSum = arr.slice(1).reduce((acc, curr) => acc + curr, 0); 
    console.log(minSum,maxSum)
}