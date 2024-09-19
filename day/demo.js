function getDay() {
    const a = parseInt(document.getElementById("dayNumber").value, 10);
   
    let dayName = "";

    if (a === 1) {
        dayName = "Sunday";
    } else if (a === 2) {
        dayName = "Monday";
    } else if (a === 3) {
        dayName = "Tuesday";
    } else if (a === 4) {
        dayName = "Wednesday";
    } else if (a === 5) {
        dayName = "Thursday";
    } else if (a === 6) {
        dayName = "Friday";
    } else if (a === 7) {
        dayName = "Saturday";
    } else {
        dayName = "Invalid input. Please enter a number between 1 and 7.";
    }

    document.getElementById('result').innerText = `Day: ${dayName}`;
}

