let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const progressBar = document.getElementById("progressBar");
const totalSlides = slides.length;

function updateProgress() {
  const progress = ((currentSlide + 1) / totalSlides) * 100;
  progressBar.style.width = progress + "%";
}

function changeSlide(direction) {
  slides[currentSlide].classList.remove("active");

  currentSlide += direction;

  if (currentSlide >= totalSlides) {
    currentSlide = 0; // Loop back to start
  } else if (currentSlide < 0) {
    currentSlide = totalSlides - 1; // Loop to end
  }

  slides[currentSlide].classList.add("active");
  updateProgress();
}

// Keyboard Navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" || e.key === " ") {
    changeSlide(1);
  } else if (e.key === "ArrowLeft") {
    changeSlide(-1);
  }
});

// Initialize
updateProgress();

// Fullscreen & Start Logic
const startBtn = document.getElementById("startBtn");
const overlay = document.getElementById("start-overlay");

startBtn.addEventListener("click", () => {
  // Request Fullscreen
  const elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }

  // Hide Overlay
  overlay.classList.add("hidden");
});
