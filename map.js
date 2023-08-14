let arr= [1,2,3,4,5]
let narr=[]
//by normal method...
for(let i=0; i<arr.length;i++){
    narr[i]=arr[i]*2;

}


//bymap method...

narr=arr.map((value,idx)=>{
console.log(value,idx) //to print the value and the index of it 

return value*2;
})

console.log(arr)
console.log(narr)
