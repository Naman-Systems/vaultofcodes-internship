

let btn = document.getElementById('btn');
function play(){
    var audio = new Audio('https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3');
    audio.play();
}
btn.addEventListener('click',()=>{
    setTimeout(()=>{
        play();
    },3000);
})



