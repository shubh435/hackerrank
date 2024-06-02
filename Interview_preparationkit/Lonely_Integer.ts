/* 
Given an array of integers, where all elements but one occur twice, find the unique element.

*/



function lonelyinteger(a: number[]): number {
    // Write your code here
    let result = 0
    for (const num of a) {
        result = result ^ num;
        console.log({num,result })
    }
    
    return result;

}


// Example input:
const inputStrings: number[] = [1,2,3,4,3,2,1];
console.log(lonelyinteger(inputStrings));