import axios from 'axios';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';

const formEl = document.querySelector('.search-form');
const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const loadButtonEl = document.querySelector('.load-button');

const API_URL = `https://pixabay.com/api/`;
const API_KEY = '35858797-639b225fbbec7c1b27496629b';

let picturesShown = 40;
let currentPage = 1;

async function getPhotos() {
  const response = await axios.get(API_URL, {
    params: {
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      q: inputEl.value,
      per_page: picturesShown,
      page: currentPage,
    },
  });
  console.log(response);
}

buttonEl.addEventListener('click', e => {
  e.preventDefault();
  console.log(getPhotos());
  loadButtonEl.style.display = 'flex';
});
