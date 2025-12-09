
const btngroup = document.getElementById("btngroup");

btngroup.addEventListener("click",changeBodyColor);


function changeBodyColor(e){
    let body = document.querySelector("body");
    body.style.backgroundColor = e.target.id;
}