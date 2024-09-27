// l=[1,2,3,4]
// l1=[...l,5,6]
// console.log(l1);

// d={name:'anu',age:23}
// d1={...d,place:'ktm',name:'manu',age:22}
// console.log(d1);

// l=[1,2,3,4]
// const [a,...b]=l
// console.log(a);
// console.log('b=',b);


// d={name:'anu',age:12,place:'ktm'}
// const {name,...d1}=d
// console.log(name);
// console.log(d1);

// synchronous:

// console.log('start');
// function display(callback){
//     console.log('hai');
//     console.log('hello');
//     console.log('welcome');
//     setTimeout(function(){
//         console.log('inside fun');
//         callback()
//     },4000)
    
    
// }
// function display1(){
//     console.log('dis1');
//     console.log('dis2');
//     console.log('dis3');
    
    
    
// }
// console.log('before');
// display(display1)
// console.log('end');


// setInterval:

// function display(){
//     console.log('display');
    
// }
// const a=setInterval(display,2000)


// countdown:

let count=10
let c=setInterval(function(){
    console.log(count);
    count--
    if(count==0){
        clearInterval(c)
        console.log('complete');
        
    }
    
},2000)