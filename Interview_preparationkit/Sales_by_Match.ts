
const sockMerchant=(n: number, arr: number[]): number=> {
    let count = 0
    const sortedArr = arr.sort((a, b) => a - b);
    for (let i = 0; i < n - 1; i++) {
        if (sortedArr[i] === sortedArr[i + 1]) {
            count++;
            i++;
        }
    }
    return count
}
console.log("======>>>>>.Result", sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))
