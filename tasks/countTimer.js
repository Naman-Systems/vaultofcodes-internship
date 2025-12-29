setInterval(()=>{
    

const result = document.getElementById("result");

const currentTime = Date.now();
const olympicDate = new Date(2028,6,14).getTime();

let timer = olympicDate - currentTime;

const days = Math.floor((timer)/(1000*60*60*24));
timer %= (1000*60*60*24);

const hour = Math.floor((timer)/(1000*60*60));
timer %= (1000*60*60);

const min = Math.floor((timer)/(1000*60));
timer %= (1000*60);

const sec = Math.floor((timer)/(1000));
timer %= 1000;
result.textContent= `${days} Days ${hour} Hours ${min} Minutes ${sec} Seconds Remaining`;
},1000);