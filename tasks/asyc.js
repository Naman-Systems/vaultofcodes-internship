
async function weather() {
    let delhiweather = new Promise((resolve,reject)=>{
        setTimeout((val)=>{
            resolve("27 deg")
        },1000);
    });

    let mumbaiWeather = new Promise((resolve,reject)=>{
        setTimeout((val)=>{
            resolve("22 deg")
        },5000);
    });
    console.log("Fetching Delhi Weather..");
    let dw = await delhiweather;
    console.log("Fetching Mumbai Weather...");
    let mw = await mumbaiWeather;
    console.log("Task Completed");
    return [dw,mw];
}
console.log("Weather forecast");
let w = weather();
w.then((val)=>{
    console.log(val)
});















