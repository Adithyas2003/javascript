function checkDivisibility() {
    let num = document.getElementById("number").value; 
    let lastDigit = Math.abs(num) % 10; 
    if (lastDigit % 3 === 0) {
        document.getElementById('result').innerText = `The last digit (${lastDigit}) is divisible by 3.`;
    } else {
        document.getElementById('result').innerText = `The last digit (${lastDigit}) is not divisible by 3.`;
    }
}

