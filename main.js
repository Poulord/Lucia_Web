document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".carousel-item");
  const indicatorsContainer = document.getElementById("carousel-indicators");

  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"));
    if (slides[index]) {
      slides[index].classList.add("active");
    }
    updateIndicators(index);
  }

  function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    if (currentSlide >= slides.length) currentSlide = 0;
    showSlide(currentSlide);
  }

  function createIndicators() {
    slides.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.addEventListener("click", () => {
        currentSlide = i;
        showSlide(currentSlide);
      });
      if (i === 0) dot.classList.add("active");
      indicatorsContainer.appendChild(dot);
    });
  }

  function updateIndicators(index) {
    const dots = document.querySelectorAll(".carousel-indicators span");
    dots.forEach((dot, i) => {
      dot.classList.remove("active");
      if (i === index) dot.classList.add("active");
    });
  }

  // Autoplay
  setInterval(() => {
    changeSlide(1);
  }, 5000);

  // Inicializar
  if (slides.length > 0) {
    createIndicators();
    showSlide(currentSlide);
  }
});