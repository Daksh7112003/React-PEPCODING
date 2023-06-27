
//Destructing in arrays

let arr =["HI","ji","AM","LI"];
//let[a,b,c,d]= arr
//let[a,b,,d]= arr
let[a,b,c,d,extra='hhlo']=arr


console.log(a,b,c,d,extra)


//destructing in objects

 

let obj={
    name:"Udai",
    state:"delhi",
    country:"India",



}







//let {name,state,country} =obj

let{name, state,country,new:newValue="deafult value"} =obj 

console.log(name,state,country, newValue);



//destructing in nested

let hi={
    nam:"Udai",
    add:{
        country:"India",
        state:{
            code:"DL",
            pin:"11111"
        }
    }
}
let {nam}= obj;
let{add:{state:{code:cd}}}=hi;
console.log(cd)