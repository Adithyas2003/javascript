d=[{ id:1,name:'anu',age:19},{ id:2,name:'anju',age:20},{ id:3,name:'sinu',age:21}]
function display(){
    const t_var=document.querySelector('#peopletable tbody')
    t_var.innerHTML=''
    d.forEach(element => {
        const t_row=document.createElement('tr')

        const t_id=document.createElement('td')
        t_id.textContent=element.id
        t_row.appendChild(t_id)


        const t_name=document.createElement('td')
        t_name.textContent=element.name
        t_row.appendChild(t_name)

        const t_age=document.createElement('td')
        t_age.textContent=element.age
        t_row.appendChild(t_age)


        t_var.appendChild(t_row)
    });
}
document.getElementById('submitform').addEventListener('submit',function(event) {
    event.preventDefault()
const id=document.getElementById('id').value
const name=document.getElementById('name').value
const age= parseInt(document.getElementById('age').value)
d.push({id:id,name:name,age:age})
document.getElementById('id').value=''
document.getElementById('name').value=''
document.getElementById('age').value=''
display()
})

document.getElementById('editform').addEventListener('edit',function(event) {
    event.preventDefault()
const id=document.getElementById('id').value
const name=document.getElementById('name').value
const age= parseInt(document.getElementById('age').value)
d.push({id:id,name:name,age:age})
document.getElementById('id').value=''
document.getElementById('name').value=''
document.getElementById('age').value=''
display()
})




display()