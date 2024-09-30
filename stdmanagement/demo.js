const data = []; 

function display() {  
    const tableBody = document.querySelector('#studenttable tbody');
    tableBody.innerHTML = ''; // Clear existing rows

    data.forEach(element => {
        const row = document.createElement('tr');

        const stdId = document.createElement('td');
        stdId.textContent = element.id;
        row.appendChild(stdId);

        const stdName = document.createElement('td');
        stdName.textContent = element.name;
        row.appendChild(stdName);  

        const stdAge = document.createElement('td');
        stdAge.textContent = element.age;
        row.appendChild(stdAge);

        const stdEmail = document.createElement('td');  
        stdEmail.textContent = element.email;
        row.appendChild(stdEmail);

        const stdCourse = document.createElement('td'); 
        stdCourse.textContent = element.course;
        row.appendChild(stdCourse);

        const stdDate = document.createElement('td');  
        stdDate.textContent = element.date;
        row.appendChild(stdDate);

        tableBody.appendChild(row);
    });
}


document.getElementById('submitform').addEventListener('submit', function (event) {
    event.preventDefault();

    const id = document.getElementById('id').value.trim();
    const name = document.getElementById('name').value.trim();
    const age = parseInt(document.getElementById('age').value);
    const email = document.getElementById('email').value.trim();
    const course = document.getElementById('course').value.trim();
    const date = document.getElementById('date').value;

   
    // console.log({ id, name, age, email, course, date });

    
    data.push({ id, name, age, email, course, date });

  
    document.getElementById('submitform').reset();

    
    display();
});


display();



