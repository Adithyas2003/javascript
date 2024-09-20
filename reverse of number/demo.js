function sample() {
    a = parseInt(document.getElementById("enter_number").value);
    rev = 0;

    if (a === 0) {
        rev = 0; 
    } else {
        do {
            d = a % 10; 
            rev = (rev * 10) + d; 
            a = (a - d) / 10; 
        } while (a > 0);
    }

    console.log(rev)
}


