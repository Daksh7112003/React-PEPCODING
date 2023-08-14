console.log(this);           //windows
function fn(){
    console.log(this);    // windows

}
fn()

let obj={
    name:"udai",
    func :fn
}
obj.func()  //self obj
















