/**
 * You are given a string str containing two fractions a/b and c/d,
 * compare them and return the greater. If they are equal, then return "equal".
 * Note: The string str contains "a/b, c/d" (fractions are separated by comma(,) & space( )).
 * 
 * Input: str = "5/6, 11/45"
 * Output: 5/6
 * Explanation: 5/6=0.8333 and 11/45=0.2444, So 5/6 is greater fraction.
 * 
 * Input: str = "8/1, 8/1"
 * Output: equal
 * Explanation: We can see that both the fractions are same, so we'll return a string "equal".
 * 
 * Input: str = "10/17, 9/10"
 * Output: 9/10
 * Explanation: 10/17 = 0.588 & 9/10 = 0.9, so the greater fraction is "9/10".
 */

function compareFrac(str: string) {
    let answer = "";
    const [fraction1, fraction2] = str.split(",").map(s => s.trim());
    
    const [numerator1, denominator1] = fraction1.split("/").map(Number);
    const [numerator2, denominator2] = fraction2.split("/").map(Number);
    
    const value1 = numerator1 / denominator1;
    const value2 = numerator2 / denominator2;
    
    if (value1 < value2) {
        answer = fraction2;
    } else if (value1 === value1) {
        answer = "equal";
    } else {
        answer = fraction1;
    }

    return answer;
}

// Test examples
console.log(compareFrac("5/6, 11/45")); // Output: 5/6
console.log(compareFrac("8/1, 8/1")); // Output: equal
console.log(compareFrac("10/17, 9/10")); // Output: 9/10