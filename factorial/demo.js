// function sample() {
//      i = parseInt(document.getElementById("enterno").value);
//     result = 1;

//     if (i < 0) {
//         console.log("Factorial is not defined for negative numbers.");
//         return; 
//     } else if (i === 0) {
//         console.log("Factorial of 0 is 1.");
//         return; 
//     }

    
//     do {
//         result *= i; 
//         console.log(i);
//         i--;
//     } while (i > 0);

    
//     console.log(result);
// }
function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    } else if (n === 0) {
        return 1; 
    }

     result = 1;
     i = n;

    
    do {
        result *= i; 
        i--; 
    } while (i > 0);

    return result; 
}

function sample() {
    let i = parseInt(document.getElementById("enterno").value);
    let result = factorial(i);
    console.log(result);
}

