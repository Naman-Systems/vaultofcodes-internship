let p = new Promise((resolve,reject)=>{
    console.log("Promise1 is pending");
    setTimeout(()=>{
        console.log("Promise 1 is resolved");
        resolve(true);
    },2000);
});

let p2 = new Promise((resolve,reject)=>{
    console.log("Promise2 is pending");
    setTimeout(()=>{
        console.log("Promise 2 is rejected");
        reject(new Error("i am an error"));
    },2000);
});

p.then((value)=>{
    console.log(value);
});

p2.catch((error)=>{
    console.log(error);
});