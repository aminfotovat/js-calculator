// this function just get number
function numbers(a){
    var num1= document.getElementById("monitor").value+=a;
}
// this is equal button
function equal(){
    var result =document.getElementById("monitor").value;
    var output=document.getElementById("monitor").value= "="+ eval(result)
}
//  AC button
function clr(){
    document.getElementById("monitor").value=''
}

