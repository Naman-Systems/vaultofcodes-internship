let p = fetch("http://goweather.xyz/weather/Pn");

p.then((response1)=>{ return response1.json();
}).then((respone2)=>{
    console.log(respone2);
});