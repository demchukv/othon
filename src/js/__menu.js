document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.gradient-container');
  let startTime;

  function animateGradient(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / 1000, 5); // Progress from 0 to 1 over 1 second
    const color1 = `rgba(255, 255, 255, ${1 - progress})`; // White to transparent
    const color2 = `rgba(0, 0, 255, ${progress})`; // Transparent to blue
    container.style.background = `radial-gradient(circle at 30px 30px, ${color1} 50%, ${color2} 50%)`;

    if (progress < 1) {
      requestAnimationFrame(animateGradient);
    }
  }

  requestAnimationFrame(animateGradient);
});
