/**
 * Given two integers M and N, generate all primes between M and N including M and N.

Example 1:

Input:
M=1,N=10
Output:
2 3 5 7
Explanation:
The prime numbers between 1 and 10
are 2,3,5 and 7.
 */

function primeRange(M: number, N: number) {
    //your code here
    const start = M, num = N;
    let arr = [];
    for (let j = start; j <= num; j++) {
        let isPrime = true;
        if (j < 2) {
            isPrime = false;
        }
        const s = Math.sqrt(j);
        for (let i = 2; i <= s; i++) {
            if (j % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            arr.push(j);
        }
    }
    return arr;
}