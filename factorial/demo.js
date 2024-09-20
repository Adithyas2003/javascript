function sample(){
    i=parseInt(document.getElementById("enterno").value)
    result=1
    if(i<=0){
        console.log(i)
    }
    do{
        result*=i
        console.log(i);
        i--
    }
    while(i>0){

}