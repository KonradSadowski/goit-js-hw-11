import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector(`input[name="email"]`);
const messageEl = document.querySelector(`textarea[name="message"]`);
const buttonEl = document.querySelector(`button`);

// Pobieranie wartości inputów do local storage
const dataDownload = () => {
  const formStorage = {
    email: emailEl.value,
    message: messageEl.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formStorage));
};

emailEl.addEventListener('input', throttle(dataDownload, 500));
messageEl.addEventListener('input', throttle(dataDownload, 500));

// ładowanie wartości z local storage do ich inputów
const dataLoad = () => {
  const formStorage =
    JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  emailEl.value = formStorage.email || '';
  messageEl.value = formStorage.message || '';
};
document.addEventListener('DOMContentLoaded', dataLoad);

// czyszczenie storage bo submicie

const clearStorage = () => {
  const formStorage =
    JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  localStorage.removeItem('feedback-form-state');
  emailEl.value = '';
  messageEl.value = '';
  console.log('Form data cleared:', formStorage);
};

formEl.addEventListener('submit', event => {
  event.preventDefault();
  clearStorage();
});
