
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
        let itemText = item[i].textContent.replace(">","").trim();
        if(task === itemText){
            item[i].remove();
            alert("Deleted..")
            return;
        }
    }
    alert("Not Found..");
}

function markTask(){
    let task = prompt("Enter the task Name: ");
    let item = ulList.getElementsByTagName("li");

    for(let i = 0; i < item.length; i++){
        let itemText = item[i].textContent.replace(">","").trim();
        if(itemText.includes(task)){
            item[i].remove();
            let li = document.createElement("li");
            let mark = "Completed";
            if(itemText.includes("Completed")){
                itemText.replace("Completed","");
                mark = "Not";
            }
            else if(itemText.includes("Not")){
                itemText.replace("Not","");
            }

            li.innerHTML = "<h3> >"+itemText+" : "+mark+"</h3>";

            ulList.appendChild(li);
            alert("Marked to "+mark+" ...");
            return;
        }
    }
    alert("Not Found..");
}
