
let ulList = document.getElementById("ulList");
function addTask(){
    let task = prompt("Enter the task Name: ");
    let li = document.createElement("li");
    li.innerHTML = "<h3> >"+task+"</h3>";

    ulList.appendChild(li);
    alert("Added ...");
}

function removeTask(){
    let task = prompt("Enter the task Name: ");
    let item = ulList.getElementsByTagName("li");

    for(let i = 0; i < item.length; i++){
        if(task === item[i].textContent){
            item[i].remove();
            break;
        }
    }
    alert("Deleted..");
}

