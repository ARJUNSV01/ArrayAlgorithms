const words = ['hi','alpha','moon','bye','hi','mars','moon']

//BruteForce

function find(arr,w1,w2){
    let result=arr.length
    for(let i=0;i<arr.length;i++){
        if(arr[i]===w1){
            for(let j=0;j<arr.length;j++){
                if(arr[j]===w2){
                    result=Math.min(Math.abs(j-i))
            }
        }
    }
    }
    return result
}
console.log(find(words,'hi','bye'))



//SLIDING WINDOW APPROACH

function shortestDistance(arr,w1,w2){
let i=null,j=null,ans=arr.length;
    for(let x=0;x<arr.length;x++){
        if(arr[x]===w1){
            i=x
        }
        if(arr[x]===w2){
            j=x
        }
        if(i!==null && j!==null){
            ans=Math.min(ans,Math.abs(j-i))
        }
    }
    return ans
}

console.log(shortestDistance(words,'hi','bye'));