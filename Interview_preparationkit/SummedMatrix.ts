










function SummedMatrix (n: number,q: number){
    let arr  = []
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
        arr.push(j+2+i);
        }
    }
  let count = 0;
  for(let i=0;i<arr.length;i++){
      if(arr[i]===q){
          count+=1
      }
  }
    return count
}

console.log(SummedMatrix(4,7));
