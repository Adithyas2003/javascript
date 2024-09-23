function valid() {
    name = document.getElementById('name').value;
    phno = document.getElementById('phno').value;
    email = document.getElementById('email').value;
    pincode = document.getElementById('pincode').value;
    isValid = true;

    document.getElementById('phno_error').textContent = '';
    document.getElementById('email_error').textContent = '';
    document.getElementById('pincode_error').textContent = '';

    
    if (!name) {
        alert('Please enter your name.');
        isValid = false;
    }

  
     phonePattern = /^[6-9][0-9]{9}$/;
    if (!phonePattern.test(phno)) {
        document.getElementById('phno_error').textContent = 'Please enter a valid 10-digit phone number.';
        isValid = false;
    }

   
     emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        // alert('Please enter a valid email address.');
        document.getElementById('email_error').textContent = 'Please enter a valid Email ID.';
        isValid = false;
    }

     pincodePattern = /^[0-9]{6}$/;
    if (!pincodePattern.test(pincode)) {
        // alert('Please enter a valid 6-digit pincode.');
        document.getElementById('pincode_error').textContent = 'Please enter six digit pincode.';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
       
    }
}
