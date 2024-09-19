function bonus() {
    const salary = parseFloat(document.getElementById("salary").value);
    const years = parseInt(document.getElementById("years").value, 10);
    
    let bonusAmount = 0;

    if (!isNaN(salary) && salary >= 0 && !isNaN(years) && years >= 0) {
        
        if (years > 5) {
            bonusAmount = salary * 0.05; 
        }
      
        
        document.getElementById('result').innerText = `Net bonus amount: Rs ${bonusAmount.toFixed(2)}`;
    } else {
        document.getElementById('result').innerText = "Please enter valid salary and years of service.";
    }
}
