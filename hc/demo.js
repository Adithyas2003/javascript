// function demo(){
//     let b='hai hello'
//     console.log(b);
//     const main=document.querySelector('.main')
//     const div=document.createElement('div')
//     // div.innerHTML=`<h2 style="color:blue">novavi ${b}</h2>`
//     div.innerHTML=`<p style="color:green">novavi asafvgvgbbbbbblm ${b}</p>`

//     main.appendChild(div)

// }
// demo()

// function demo(){
//     let b='hai hello'
//     console.log(b);
//     const main=document.querySelector('.main')
//     const div=document.createElement('div')
//     let count=59
//     let c=setInterval(function(){
//     div.innerHTML=`<p style="color:green">00:${count}</p>`
//     count--
//     if(count==0){
//         clearInterval(c)
//         console.log('completed');
//         div.innerHTML=`<h2 style="color:green"> completed</h2>`
//     }
//     },1000)
        
   
   
    

//     main.appendChild(div)

// }
// demo()

function demo(){
    let b='hai hello'
    console.log(b);
    const main=document.querySelector('.main')
    const div=document.createElement('div')
    let count=59
    let count1=59
    
    let c=setInterval(function(){
    div.innerHTML=`<p style="color:green">03:${count}</p>`
    div.innerHTML=`<p style="color:green">02:${count}</p>`
    

    count--
    if(count==0){
        clearInterval(c)
        console.log('completed');
        div.innerHTML=`<h2 style="color:green"> completed</h2>`
        
        
    }
    },1000)
    if(count1==2){
        clearInterval(c)
        console.log('completed');
        div.innerHTML=`<h2 style="color:green"> completed</h2>`
        
        
    }
    },1000)

        
   
   
    

    main.appendChild(div)

}
demo()

