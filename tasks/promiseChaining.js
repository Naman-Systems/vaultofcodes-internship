let p = new Promise((resolve,reject)=>{
    console.log("Promise1 is pending");
    setTimeout(()=>{
        console.log("Promise 1 is resolved after 2 sec");
        resolve(true);
    },2000);
});


p.then((value)=>{
    console.log(value);
    let p2 = new Promise((resolve,reject)=>{
        resolve("Promise 2");
    });
    return p2;
});

