// SPLASH SCREEN
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('splash').style.display = 'none';
    document.getElementById('home').style.display = 'block';
  }, 3000); // 3 sekunde
});

// NAVIGACIJA
function goTimeline() {
  document.getElementById('home').style.display = 'none';
  document.getElementById('timeline').style.display = 'block';
}

function goIdeas() {
  document.getElementById('home').style.display = 'none';
  document.getElementById('ideas').style.display = 'block';
}

function goReasons() {
  document.getElementById('home').style.display = 'none';
  document.getElementById('reasons').style.display = 'block';
}

function backHome(from) {
  document.getElementById(from).style.display = 'none';
  document.getElementById('home').style.display = 'block';
}

// TIMELINE
function showYear(year) {
  const content = document.getElementById('year-content');
  content.innerHTML = ""; // očisti prethodno
Super! 😄 Evo ti gotova funkcija showYear() za 2018–2026 koju možeš staviti u svoj script.js.

Svaka godina ima blok gdje možeš dodavati slike i opis

Samo ubaciš svoje slike u folder images/ i napišeš opis unutar <p>

function showYear(year) {
  const content = document.getElementById('year-content');
  content.innerHTML = ""; // očisti prethodno

  if (year === '2018') {
    content.innerHTML += `<img src="images/20181223_200035.jpg" alt="Memory 1" style="width:200px"><p>Opis slike 1</p>`;
  } 
  else if (year === '2019') {
    // slike za 2019
  } 
  else if (year === '2020') {
    // slike za 2020
  } 
  else if (year === '2021') {
    // slike za 2021
  } 
  else if (year === '2022') {
    // slike za 2022
  } 
  else if (year === '2023') {
    content.innerHTML += `<img src="images/2023_photo1.jpg" alt="Memory 1" style="width:200px"><p>Prvi zajednički putovanje</p>`;
    content.innerHTML += `<img src="images/2023_photo2.jpg" alt="Memory 2" style="width:200px"><p>Naš prvi film</p>`;
  } 
  else if (year === '2024') {
    content.innerHTML += `<img src="images/2024_photo1.jpg" alt="Memory 1" style="width:200px"><p>Naša avantura</p>`;
  } 
  else if (year === '2025') {
    content.innerHTML += `<p>Tek počinjemo stvarati uspomene!</p>`;
    
  }
  else if (year === '2026') {
    content.innerHTML += `<p>Tek počinjemo stvarati uspomene!</p>`;
  }
}

// REASONS - Random reason
const reasons = [
  "Volim tvoj osmijeh 😄",
  "Volim kako me uvijek nasmiješ",
  "Volim tvoju strpljivost",
  "Volim naše zajedničke avanture"
];

function showRandomReason() {
  const randomIndex = Math.floor(Math.random() * reasons.length);
  document.getElementById('random-reason').innerText = reasons[randomIndex];
}