let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Value1")
    },1000);
});


let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Value2")
    },2000);
});

let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Value3")
    },3000);
});
/*
p1.then((val)=>{
    console.log(val);
});


p2.then((val)=>{
    console.log(val);
});

p3.then((val)=>{
    console.log(val);
});
*/

let promiseAll = Promise.all([p1,p2,p3]);
promiseAll.then((val)=>{
    console.log(val);
});