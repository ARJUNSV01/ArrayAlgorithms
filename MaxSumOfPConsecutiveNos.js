//BRUTE FORCE 

const arr=[2,4,6,1,-2,9,0]
let l=arr.length;
let maxSum=0
let p=3
for(let i=0;i<=l-p;i++){
    let sum=0
  for(let j=i;j<i+p;j++){
      sum+=arr[j]
  }
   maxSum=Math.max(sum,maxSum) 
}
console.log(maxSum)

//SLIDING WINDOW
const array=[2,4,6,1,-2,9,0]
function maxSumOfElememts(arr,p){
    let max=0;sum=0;
    let i=0
    while(i<p){
        sum=sum+arr[i]
        i++;
    }
    max=sum;
    
    while(i<arr.length){
        sum = sum + arr[i] - arr[i-p]
        max=Math.max(sum,max)
        i++;
    }
    return max
}
console.log(maxSumOfElememts(array,3))