d=[{name:'anju',age:28,place:'ktm'},
    {name:'ammu',age:27,place:'tvm'},
    {name:'anju',age:30,place:'kollam'},
    {name:'appu',age:31,place:'malappuram'},
    {name:'anu',age:22,place:'ekm'},
    {name:'manna',age:32,place:'palakad'}
]
// for (let i of d){
//     if(i['age']<=30){
//         console.log(i)
//     }
// }


// for (let i of d){
//     if(i['age']>=30){
//         console.log(i)
//     }
// }
u=[]
s=[]
for (let i of d){
    if(i['age']<=30){
        u.push(i)
    }
    else{
        s.push(i)
    }
}
console.log(d)