// find the prime in range

function findPrimesInRange(L: number, R: number) {
    if (R < 2) return 0; 
    if (L < 2) L = 2; 

    let isPrime = new Array(R + 1).fill(true);

    for (let p = 2; p * p <= R; p++) {
        if (isPrime[p] === true) {
            for (let i = p * p; i <= R; i += p) {
                isPrime[i] = false;
            }
        }
    }

    let count = 0;
    for (let i = L; i <= R; i++) {
        if (isPrime[i] === true) {
            count++;
        }
    }

    return count;
}