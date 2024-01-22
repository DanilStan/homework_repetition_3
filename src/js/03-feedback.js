import throttle from 'lodash.throttle';

const form = document.querySelector('form');
let emptyObject = {};

form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(event) {
  emptyObject[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(emptyObject));
}

function onLoadPage() {
  const localValue = localStorage.getItem('feedback-form-state');

  if (localValue) {
  }
}
