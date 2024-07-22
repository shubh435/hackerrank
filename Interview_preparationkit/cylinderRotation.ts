/**
 * Program to cyclically rotate an array by one
 * Given an array, the task is to cyclically rotate the array clockwise by one time. 

 * Input: arr[] = {1, 2, 3, 4, 5}
Output: arr[] = {5, 1, 2, 3, 4}

Input: arr[] = {2, 3, 4, 5, 1}
Output: {1, 2, 3, 4, 5}
 */


const cylindralRotaion = () => {
    const arr = [1, 2, 3, 4, 5]
    let arr1 = arr.unshift()
    let arr2 = arr.slice(0, arr.length - 1);
    let arr3 = [arr1, ...arr2]
    console.log(arr1);
    
   return arr3

}
console.log(cylindralRotaion());