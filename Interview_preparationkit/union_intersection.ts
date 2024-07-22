// find the union and intersectoion


const arr = [1, 3, 4, 5, 7]
const arr2= [2, 3, 5, 6]
const intersection = []
for(let i = 0; i<arr.length; i++){
    if(!arr2.includes(arr[i])){
        arr2.push(arr[i])
    }else{
         intersection.push(arr[i])
    }
}

for(let i = 0;i<arr2.length;i++ ){
    for(let j =0;j<arr2.length;j++){
        if(arr2[i]<arr2[j]){
            let temp = arr2[i];
            arr2[i]= arr2[j];
            arr2[j] = temp;
            
        }
    }
}
console.log({union:arr2,intersection})