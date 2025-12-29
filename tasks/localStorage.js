let key = prompt("Enter the key: ");
let val = prompt("Enter the value : ");

localStorage.setItem(key,val);

console.log(`The value ${val} is of ${key}`);

if(key == "red" || key == "blue"){
    localStorage.removeItem(key);
}