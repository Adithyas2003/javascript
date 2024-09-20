function sample(){
    a=parseInt(document.getElementById("first no").value)
    b=parseInt(document.getElementById("second no").value)
    c=parseInt(document.getElementById("third no").value)
    d=parseInt(document.getElementById("fourth no").value)
    if(a>b){
        document.getElementById("h1").innerHTML=a
    }
    else if(b>c){
        document.getElementById("h1").innerHTML=b
    }
    else if(c>d){
        document.getElementById("h1").innerHTML=c
    }
    
    else{
        document.getElementById("h1").innerHTML=d
    }
   
}