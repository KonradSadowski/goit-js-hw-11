// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Opisany w dokumentacji
import SimpleLightbox from 'simplelightbox';
// Dodatkowy import stylów
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEL = document.querySelector('.gallery');
for (const image of galleryItems) {
  const imgEl = `<a class="gallery__item" href=${image.original}>
  <img class="gallery__image" src=${image.preview} alt=${image.description} />
</a>`;

  galleryEL.insertAdjacentHTML('afterbegin', imgEl);
}
var lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

const imgClickHandler = event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
};
galleryEL.addEventListener('click', imgClickHandler);
