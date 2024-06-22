function isPrime(num: number) {
    if (num <= 1) return false;

    
    for (let i = 2; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    
    return true;
}

function findPrimesInRange(start: number, end: number) {
    let primes = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

let start = 10;
let end = 100;

if (isNaN(start) || isNaN(end) || start > end) {
    console.log("Invalid range. Please enter valid numbers.");
} else {
    let primes = findPrimesInRange(start, end);
    console.log("Prime numbers in range:", primes);
}