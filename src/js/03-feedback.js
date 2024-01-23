import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const inputForm = document.querySelector('input[type="email"]');
const areaForm = document.querySelector('textarea');
let emptyObject = {};

form.addEventListener('input', throttle(onFormInput, 500));
onLoadPage();

function onFormInput(event) {
  emptyObject[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(emptyObject));
}

function onLoadPage() {
  const localValue = localStorage.getItem('feedback-form-state');
  const parseLocalValue = JSON.parse(localValue);
  if (parseLocalValue.email) {
    inputForm.value = parseLocalValue.email;
    if (parseLocalValue.message) {
      areaForm.value = parseLocalValue.message;
    }
  }
}
