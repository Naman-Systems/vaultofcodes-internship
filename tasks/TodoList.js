let addBtn = document.getElementById("add");
addBtn.addEventListener('click', () => {
    let task_id = prompt("Enter task id:");
    let task = prompt("Enter the task:");

    localStorage.setItem(task_id, JSON.stringify({ text: task, status: "Not Done" }));
    alert("Task Added");
});

let deleteBtn = document.getElementById("delete");
deleteBtn.addEventListener('click', () => {
    let task_id = prompt("Enter task id to delete task:");

    if (localStorage.getItem(task_id) !== null) {
        localStorage.removeItem(task_id);
        alert("Task Deleted");
    } else {
        alert("Task id does not exist");
    }
});

let displayBtn = document.getElementById("display");
displayBtn.addEventListener('click', () => {
    let todolist = document.getElementsByClassName("todo");
    todolist.innerHTML = ""; // clear old list

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let data = JSON.parse(localStorage.getItem(key));

        let todo = document.createElement("div");
        todo.className = "todo";

        todo.innerHTML = `
            <span>${key}</span>
            <span>${data.text}</span>
            <span class="status">${data.status}</span>
        `;

        todolist.appendChild(todo);
    }
});

let editBtn = document.getElementById('edit');
editBtn.addEventListener('click', () => {
    let task_id = prompt("Enter task id to edit task:");

    if (localStorage.getItem(task_id) !== null) {
        let data = JSON.parse(localStorage.getItem(task_id));
        let status = prompt("Set Task Status: Done | Not Done", data.status);

        data.status = status;
        localStorage.setItem(task_id, JSON.stringify(data));

        alert("Task Updated");
    } else {
        alert("Task id does not exist");
    }
});
