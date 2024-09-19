function calculateTax() {
    let costPrice = parseFloat(document.getElementById("costPrice").value); 
    let tax;

    if (costPrice > 100000) {
        tax = costPrice * 0.15; 
    } else if (costPrice > 50000 && costPrice <= 100000) {
        tax = costPrice * 0.10; 
    } else {
        tax = costPrice * 0.05; 
    }

    document.getElementById('result').innerText = `Road Tax to be paid: Rs ${tax.toFixed(2)}`;
}
