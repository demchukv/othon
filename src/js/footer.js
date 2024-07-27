const form = document.getElementById('contact-us-form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const elements = form.elements;
  const data = {};
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    data[element.name] = element.value;
  }
  console.log(data);
  form.reset();
});
