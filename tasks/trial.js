const gp = document.getElementById("grandparent");

gp.addEventListener("mouseover", (e)=>{
    console.log("Grandparents clicked");
    e.target.textContent = "Clicked";
});
const p = document.getElementById("parent");
p.addEventListener("click", ()=>{
    console.log("Parent clicked");
});

const c = document.getElementById("child");
c.addEventListener("click", ()=>{
    console.log("Child clicked");
});