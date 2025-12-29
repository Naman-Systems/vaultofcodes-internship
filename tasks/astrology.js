const astrologySigns = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces"
];
 
const goodPredictions = [
  "You will achieve a major personal goal soon.",
  "A positive financial opportunity will appear in your life.",
  "Someone unexpected will support you in an important moment.",
  "Your confidence will grow stronger in the coming months.",
  "You will gain new skills that elevate your career.",
  "A long-standing problem will finally be resolved.",
  "You will experience meaningful personal growth.",
  "A joyful event will bring you happiness.",
  "New friendships will enrich your life.",
  "You will find clarity in a confusing situation.",
  "Your hard work will finally be recognized.",
  "Luck will favor you in an important decision.",
  "A new beginning will bring exciting opportunities.",
  "You will feel emotionally stronger and more stable.",
  "Someone will appreciate your kindness deeply.",
  "Your creativity will open new possibilities.",
  "You will achieve something you once thought impossible.",
  "A dream you forgot about will come closer to reality.",
  "Positive energy will attract good people around you.",
  "You will take a step forward in your career or studies.",
  "Your relationships will grow deeper and more meaningful.",
  "You will discover a hidden talent in yourself.",
  "An opportunity to travel or explore will arise.",
  "You will make a decision that improves your life significantly.",
  "Unexpected happiness will come your way soon."
];

const victimCard = [
  "A small misunderstanding may create temporary stress.",
  "You might face a minor setback in your plans.",
  "A delay could push your goals further by a few days.",
  "Someone might misjudge your intentions.",
  "You may lose something small but important.",
  "A plan may not work the way you expected.",
  "You might feel unmotivated for a short period.",
  "A decision could cause brief confusion.",
  "Someone may cancel a plan last minute.",
  "You might face a temporary financial inconvenience.",
  "A friend may disagree with you unexpectedly.",
  "You may doubt your choices for a while.",
  "A routine task might become unexpectedly difficult.",
  "You could miss an important message or call.",
  "You may feel left out in a small group activity.",
  "There could be an unexpected delay in results.",
  "You might feel overwhelmed due to workload.",
  "Someone may disappoint you unintentionally.",
  "An unexpected expense could arise.",
  "You may need to redo a task you already completed.",
  "Someone might forget something important you told them.",
  "A minor conflict could occur with someone close.",
  "You might feel tired or drained temporarily.",
  "A decision you make may not give immediate results.",
  "You may have to wait longer than expected for something."
];
const recommendations = [
  "Focus on one goal at a time for better progress.",
  "Take short breaks to refresh your mind.",
  "Stay consistent — small efforts daily create big results.",
  "Talk to someone you trust when you feel confused.",
  "Keep your workspace clean to improve focus.",
  "Start journaling your thoughts and goals.",
  "Practice gratitude every morning.",
  "Learn one new skill every month.",
  "Spend more time with positive people.",
  "Organize your tasks using a planner.",
  "Try meditation or deep breathing exercises.",
  "Reduce screen time before sleeping.",
  "Read at least 10 pages of a good book daily.",
  "Drink more water throughout the day.",
  "Avoid overthinking situations you can’t control.",
  "Exercise at least 20 minutes a day.",
  "Focus on building long-term habits.",
  "Celebrate small achievements.",
  "Be kind to yourself when things go wrong.",
  "Avoid comparing yourself to others.",
  "Take responsibility for your decisions.",
  "Try learning new technologies or tools.",
  "Stay away from negative environments.",
  "Give yourself time to rest and recharge.",
  "Be open to new opportunities and ideas."
];

const form = document.querySelector('form');

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;

    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    
    const text = `Hi ${name} ${surname}, Your sign is ${astrologySigns[month-1]}, 
    ${goodPredictions[year%24]} ,${victimCard[(month*year)%24]} ${recommendations[day%24]} . `;

    const txt = document.getElementById('txt');
    txt.textContent = ""+text;
});