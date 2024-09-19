function sample(){
    a=parseInt(document.getElementById("no charge").value)
    b=parseInt(document.getElementById("RS 5 per unit").value)
    c=parseInt(document.getElementById("RS 10 per unit").value)
    if (a>=100){
        document.getElementById("h1").innerHTML=a  
    }
    else if(100<a>=200){
        document.getElementById("h1").innerHTML=b
    }
    else(charge=200*10){
        document.getElementById("h1").innerHTML=b
    }
}