function sockMerchant(n, arr) {
    var count = 0;
    var sortedArr = arr.sort(function (a, b) { return a - b; });
    for (var i = 0; i < n - 1; i++) {
        if (sortedArr[i] === sortedArr[i + 1]) {
            count++;
            i++;
        }
    }
    return count;
}
console.log("======>>>>>.Result", sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
