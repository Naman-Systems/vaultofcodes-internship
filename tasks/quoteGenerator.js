const quotes = [
  "Success is the sum of small efforts repeated daily.",
  "Do it now. Sometimes ‘later’ becomes ‘never’.",
  "Believe you can, and you’re halfway there.",
  "Dream big. Start small. Act now.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Don’t stop until you’re proud.",
  "Your only limit is your mind.",
  "Small steps every day lead to big results.",
  "Failure is not opposite of success; it’s part of success.",
  "Push yourself, because no one else will do it for you."
];


const lbl = document.querySelector("h2");
const btn = document.querySelector("button");

btn.addEventListener("click",()=>{
    let index = Math.floor(Math.random()*10)+1;
    lbl.textContent = ""+quotes[index];
});