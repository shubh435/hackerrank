/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9  
The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .




*/




function diagonalDifference(arr: number[][]): number {
    let digonal1 = 0;
  let digonal2 = 0;
  const n = arr.length;
   for(let i=0;i< n ;i++){
            digonal1 +=arr[i][i];
            digonal2 +=arr[n-1-i][i];
        }
  return  Math.abs(digonal2 - digonal1 ) 

}