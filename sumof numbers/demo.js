function sample(){
    a=parseInt(document.getElementById("startingno").value)
    b=parseInt(document.getElementById("endingno").value)
    sum=0
    for(i=a;i<=b;i++){
        sum+=i
    }
    console.log(sum)
}