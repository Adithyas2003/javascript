l=[1,2,3,4,6]
for (let i in l){
    console.log(i)
    console.log(l[i]);
}
for(let i of l){
    console.log(i)
}
for (let i of l){
    console.log(i);
    if(i==4){
        break
    }
    }
