const target = document.querySelectorAll('.section, .footer');

function handleIntersection(entries) {
  entries.map(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('loaded');
    } else {
      entry.target.classList.remove('loaded');
    }
  });
}

const observer = new IntersectionObserver(handleIntersection);

//observer.observe(target);

target.forEach(el => observer.observe(el));
