
/** 
 * @shubh435 Comparison Sorting
Quicksort usually has a running time of , but is there an algorithm that can sort even faster? In general, this is not possible. Most sorting algorithms are comparison sorts, i.e. they sort a list just by comparing the elements to one another. A comparison sort algorithm cannot beat  (worst-case) running time, since  represents the minimum number of comparisons needed to know where to place each element. For more details, you can see these notes (PDF).

Alternative Sorting
Another sorting method, the counting sort, does not require comparison. Instead, you create an integer array whose index range covers the entire range of values in your array to sort. Each time a value occurs in the original array, you increment the counter at that index. At the end, run through your counting array, printing the value of each non-zero valued index that number of times.
 * 
 * 
*/





function countingSort(arr: number[]): number[] {
const n = arr.length;
    const frequency = Array(n).fill(0);
    
    for (let i = 0; i < n; i++) {
        frequency[arr[i]] += 1;
    }

    return frequency.slice(0, 100);
}
