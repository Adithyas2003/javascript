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

        const edit_id=document.createElement('td')
        const edit_btn=document.createElement('button')
        edit_btn.textContent='edit'
        edit_btn.onclick=function(){
            edit_frm(element.id)
        }
        edit_id.appendChild(edit_btn)
        t_row.appendChild(edit_id)
        const del_id=document.createElement('td')
        const del_btn=document.createElement('button')
        del_btn.textContent='delete'
        del_btn.onclick=function(){
            delete_data(element.id)
        }
        del_id.appendChild(del_btn)
        t_row.appendChild(del_id)

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
let editid=''
function edit_frm(id){
    console.log('editing',id);
    document.getElementById('editform').style.display='block'
    document.getElementById('submitform').style.display='none'
    const edit_data=d.find(user=>user.id==id)
    document.getElementById('e_id').value=edit_data.id
    document.getElementById('e_name').value=edit_data.name
    document.getElementById('e_age').value=edit_data.age
    editid=id
}

document.getElementById('editform').addEventListener('submit',function(event){
    event.preventDefault()
    const e_id=document.getElementById('e_id').value
    const e_name=document.getElementById('e_name').value
    const e_age=document.getElementById('e_age').value
    d=d.map(user=>{
        if(user.id==editid){
            return {...user,id:e_id,name:e_name,age:e_age}

        }
        return user
    })
    document.getElementById('editform').style.display='none'
    document.getElementById('submitform').style.display='block'
    display()

})
function delete_data(id){
    d=d.filter(user=>{
        if(user.id!=id){
            return user
        }
    })
    display()
}



display()