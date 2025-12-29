
const form = document.querySelector('form');
    const allTask = document.getElementById('allTask');

form.addEventListener('submit',(e)=>{

    e.preventDefault();
    let text = document.getElementById('task').value;

    if(text == "")
        return;

    const parent = document.createElement('div');

    const task = document.createElement('span');
    task.textContent = text;
    task.style.color = 'white';
    task.style.marginRight = '10px';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style.width = '50px';


    const doneButton = document.createElement('button');
    doneButton.textContent = 'Done';
    doneButton.style.width = '50px'
    doneButton.style.marginRight = '10px';

    parent.append(task,doneButton,deleteButton);

    allTask.append(parent);

    deleteButton.addEventListener('click',()=>{
        parent.remove();
    });

    doneButton.addEventListener('click',()=>{
        task.style.textDecoration = 'through-line';
        task.style.color = 'grey';
    })

});