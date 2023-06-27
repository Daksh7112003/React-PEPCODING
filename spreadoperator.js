// first taking for the array . 


let arr = [1,2,3];


let arr2 =[...arr] // if we dont use this spread operator it will change in both the arrays .
arr2.push(4);

console.log(arr);
console.log(arr2);


// Now for the objects . 
let obj ={
    name: "carry",
    add: {
        country: "India",
        state : {

            DL : "DELHI",
            pin: " 1020",
        }

    }
}
//this is called as deap copy..
let obj2  ={...obj,add:{...obj.add,state:{...obj.add.state}}};        // same in this .....
obj2.add.state.code=10
obj2.add.country="abcdef"
obj2.name= "ajdncjd",
console.log(obj);
console.log(obj2);

// short cut method for this ..
let obj2 =JSON.parse(JSON.stringify(obj))
