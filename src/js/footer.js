const form = document.getElementById('contact-us-form');
const confirmation = document.getElementById('contact-us-confirm');
const elements = form.elements;
const placeholders = {};
for (let i = 0; i < elements.length; i++) {
  const element = elements[i];
  placeholders[element.name] = element.placeholder;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const data = {};
  let error = false;
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (element.nodeName !== 'INPUT') {
      continue;
    }
    // put your validation here
    if (!element.value || element.value.trim() === '') {
      error = true;
      element.classList.add('error');
      element.placeholder = 'This is a required field.';
    } else {
      element.classList.remove('error');
      element.placeholder = placeholders[element.name];
    }
    data[element.name] = element.value;
  }
  if (!error) {
    console.log(data);
    form.reset();
    form.style.display = 'none';
    confirmation.style.display = 'block';
  }
});
