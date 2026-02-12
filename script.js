// SPLASH SCREEN - odmah nestaje nakon 1.5 sekunde
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.getElementById('splash').style.display = 'none';
    document.getElementById('home').style.display = 'block';
  }, 1500);
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

  // Sve slike učitava lazy
  if (year === '2018') {
    content.innerHTML += `<img src="images/20181223_200035.jpg" alt="Memory 1" style="width:200px" loading="lazy"><p>Opis slike 1</p>`;
  }
  if (year === '2019') {
    content.innerHTML += `<img src="images/20190121_015846.jpg" alt="Memory 2" style="width:200px" loading="lazy"><p>Opis slike 1</p>`;
      content.innerHTML += `<img src="images/20190429_212712.jpg" alt="Memory 3" style="width:200px" loading="lazy"><p>Opis slike 1</p>`;
  }

  else if (year === '2023') {
    content.innerHTML += `<img src="images/2023_photo1.jpg" alt="Memory 1" style="width:200px" loading="lazy"><p>Prvi zajednički putovanje</p>`;
    content.innerHTML += `<img src="images/2023_photo2.jpg" alt="Memory 2" style="width:200px" loading="lazy"><p>Naš prvi film</p>`;
  }
  else if (year === '2024') {
    content.innerHTML += `<img src="images/2024_photo1.jpg" alt="Memory 1" style="width:200px" loading="lazy"><p>Naša avantura</p>`;
  }
  else if (year === '2025') {
    content.innerHTML += `<p>Tek počinjemo stvarati uspomene!</p>`;
  }
  else if (year === '2026') {
    content.innerHTML += `<p>Tek počinjemo stvarati uspomene!</p>`;
  }
}

// REASONS
const reasons = [
  "Volim tvoj osmijeh 😄",
  "Volim kako me uvijek nasmiješ",
  "Volim tvoju strpljivost",
  "Volim naše zajedničke avanture"
];
let currentSlides = [];
let currentIndex = 0;

function showYear(year) {
  const content = document.getElementById('year-content');
  content.innerHTML = ""; 

  // Niz slika za ovu godinu
  if (year === '2018') {
    currentSlides = [
      {src:"images/20181223_200035.jpg", caption:"Opis slike 1"}
    ];
  } else if (year === '2023') {
    currentSlides = [
      {src:"images/2023_photo1.jpg", caption:"Prvi zajednički putovanje"},
      {src:"images/2023_photo2.jpg", caption:"Naš prvi film"}
    ];
  } else if (year === '2024') {
    currentSlides = [
      {src:"images/2024_photo1.jpg", caption:"Naša avantura"}
    ];
  } else {
    currentSlides = [];
  }

  // Kreiraj thumbnail-e
  currentSlides.forEach((slide, i) => {
    const img = document.createElement('img');
    img.src = slide.src;
    img.alt = slide.caption;
    img.style.width = "200px";
    img.loading = "lazy";
    img.style.margin = "5px";
    img.onclick = () => openSlideshow(i);
    content.appendChild(img);
  });
}

// Otvori modal na određenoj slici
function openSlideshow(index) {
  currentIndex = index;
  const modal = document.getElementById('slideshow-modal');
  modal.style.display = 'flex';
  updateSlide();
}

// Zatvori modal
function closeSlideshow() {
  document.getElementById('slideshow-modal').style.display = 'none';
}

// Promijeni slide
function changeSlide(n) {
  currentIndex += n;
  if(currentIndex < 0) currentIndex = currentSlides.length - 1;
  if(currentIndex >= currentSlides.length) currentIndex = 0;
  updateSlide();
}

// Update slike u modal
function updateSlide() {
  const slide = currentSlides[currentIndex];
  document.getElementById('slideshow-img').src = slide.src;
  document.getElementById('slideshow-caption').innerText = slide.caption;
}

function showRandomReason() {
  const randomIndex = Math.floor(Math.random() * reasons.length);
  document.getElementById('random-reason').innerText = reasons[randomIndex];
}
