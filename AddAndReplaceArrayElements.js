//this fn adds one to the last element in the array and modifies the array accordingly

function addOneAndReplace(){
    let carry;
    for(let i=arr.length-1;i>=0;i--){
        // if(arr[i]!==9 && arr[i]===arr.length-1){
        //     arr[i]++
        //     carry=0
        //     break;
        // }
      if(arr[i]!==9){
            arr[i]++
            carry=0
            break;
        }else{
            arr[i]=0;
            carry=1
            
        }
    }
    if(carry===1){
        arr.unshift(1)
    }
    return arr
    }
    let arr=[9,9,9]
    console.log(addOneAndReplace(arr))