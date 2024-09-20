function sample(){
    a=parseInt(document.getElementById("fno").value)
    b=parseInt(document.getElementById("eno").value)
    sum=0
    for(i=a;i<=b;i++){
        if(i%2!=0)
            console.log(i)
    }
    
}