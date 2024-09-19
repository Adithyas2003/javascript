function sample(){
    a=parseInt(document.getElementById("first no").value)
    b=parseInt(document.getElementById("second no").value)
    c=parseInt(document.getElementById("third no").value)
    if(a>b){
        document.getElementById("h1").innerHTML=a
    }
    else if(b>c){
        document.getElementById("h1").innerHTML=b
    }
    else{
        document.getElementById("h1").innerHTML=c
    }
   
}