function valid() {
    const name = document.getElementById('name').value;
    const phno = document.getElementById('phno').value;
    const email = document.getElementById('email').value;
    const pincode = document.getElementById('pincode').value;
    let isValid = true;

    document.getElementById('phno_error').textContent = '';

    
    if (!name) {
        alert('Please enter your name.');
        isValid = false;
    }

  
     phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phno)) {
        document.getElementById('phno_error').textContent = 'Please enter a valid 10-digit phone number.';
        isValid = false;
    }

   
     emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        isValid = false;
    }

     pincodePattern = /^[0-9]{6}$/;
    if (!pincodePattern.test(pincode)) {
        alert('Please enter a valid 6-digit pincode.');
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
       
    }
}
