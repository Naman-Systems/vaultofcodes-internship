// console.log("JS file loaded");

const body = document.querySelector('body');

body.addEventListener('click',(e)=>{
    const circleElement = document.createElement('div');
    circleElement.classList.add('circle');

    const colors = [
      "red","blue","green","yellow","purple","orange","pink","brown",
      "black","white","gray","cyan","magenta","lime","teal","indigo",
      "violet","gold","silver","maroon","navy","olive","turquoise",
      "coral","beige","lavender","peach","skyblue","chocolate","crimson"
    ];

    circleElement.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    circleElement.style.top = `${e.clientY}px`;
    circleElement.style.left = `${e.clientX}px`;

    body.append(circleElement);
});
