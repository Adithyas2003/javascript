let data = [
    { id: 1, name: 'anu', age: 19, email: 'anu@gmail.com', course: 'sksk', date: '30/05/2020' },
    { id: 2, name: 'anju', age: 20, email: 'anju@gmail.com', course: 'mnmn', date: '03/05/2020' },
    { id: 3, name: 'sinu', age: 21, email: 'sinu@gmail.com', course: 'plpl', date: '06/08/2020' }
];

let editingIndex = null; 

function display() {
    const tableBody = document.querySelector('#studenttable tbody');
    tableBody.innerHTML = ''; 

    data.forEach((element, index) => {
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

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => editStudent(index); 
        row.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteStudent(index); 
        row.appendChild(deleteButton);

        tableBody.appendChild(row);
    });
}

function editStudent(index) {
    editingIndex = index;
    const student = data[index];

    document.getElementById('id').value = student.id;
    document.getElementById('name').value = student.name;
    document.getElementById('age').value = student.age;
    document.getElementById('email').value = student.email;
    document.getElementById('course').value = student.course;

    const dateParts = student.date.split('/');
    const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`; 
    document.getElementById('date').value = formattedDate;
}

function deleteStudent(index) {
    
    data = data.filter((_, i) => i !== index);
    display(); 
}

document.getElementById('submitform').addEventListener('submit', function (event) {
    event.preventDefault();

    const id = parseInt(document.getElementById('id').value.trim());
    const name = document.getElementById('name').value.trim();
    const age = parseInt(document.getElementById('age').value);
    const email = document.getElementById('email').value.trim();
    const course = document.getElementById('course').value.trim();
    const date = document.getElementById('date').value;

    if (editingIndex !== null) {
        data[editingIndex] = { id, name, age, email, course, date };
        editingIndex = null; 
    } else {
        data.push({ id, name, age, email, course, date });
    }

    document.getElementById('submitform').reset();
    display();
});

display();






