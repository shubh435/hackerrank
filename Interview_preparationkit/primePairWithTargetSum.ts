/**
 * Given a number n, find out if n can be expressed as a+b, where both a and b are prime numbers. If such a pair exists, return the values of a and b, otherwise return [-1,-1] as an array of size 2.
 * Note: If [a, b] is one solution with a <= b, and [c, d] is another solution with c <= d, and a < c then  [a, b] is considered as our answer.
 * Examples

* Input: n = 10
Output: 3 7
Explanation: There are two possiblities 3, 7 & 5, 5 are both prime & their sum is 10, but we'll pick 3, 7 as 3 < 5.

* Input: n = 3
Output: -1 -1
Explanation: There are no solutions to the number 3.
 */
function sieveOfEratosthenes(max:number) {
    const isPrime:boolean[] = new Array(max + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    for (let i = 2; i * i <= max; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= max; j += i) {
                isPrime[j] = false;
            }
        }
    }
    const primes:number [] = [];
    for (let i = 2; i <= max; i++) {
        if (isPrime[i]) {
            primes.push(i);
        }
    }
    return primes;
    }

function getPrimes(n:number) {
  
    // code here
     if (n < 4) {
    return [-1, -1];
}

const primes = sieveOfEratosthenes(n);

const primeSet = new Set(primes);

for (let i = 0; i < primes.length; i++) {
    const a = primes[i];
    const b = n - a;
    if (primeSet.has(b)) {
        return [a, b];
    }
}

return [-1, -1];
    
}

console.log(getPrimes(10));
