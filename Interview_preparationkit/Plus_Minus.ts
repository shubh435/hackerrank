
function plusMinus(arr: number[]): void {
    // Write your code here
    let positiveNumber=0;
    let nagetiveNumber=0;
    let zeroNumber=0;
    
    for(let i=0;i<arr.length;i++){
            if(arr[i]>0){
                 positiveNumber +=1;   
            }else if(arr[i]<0){
                  nagetiveNumber +=1;    
            }else{
                    zeroNumber+=1;
            }
    }

console.log((positiveNumber/arr.length).toFixed(6))
console.log((nagetiveNumber/arr.length).toFixed(6))
console.log((zeroNumber/arr.length).toFixed(6))
}