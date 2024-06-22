// find the prime in range

function findPrimesInRange(L: number, R: number) {
    const start=L,num=R;
         let arr = [];
  for(let j = start; j <= num; j++) {
    let isPrime = true;
    if (j < 2) { 
      isPrime = false;
    }
    const s = Math.sqrt(j); 
    for(let i = 2; i <= s; i++) { 
      if(j % i === 0) {
        isPrime = false;
        break;
      }
    }
    if(isPrime) {
      arr.push(j);
    }
  }
  return arr;
}