import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import fetchPixabayAPI from './js/pixabay-api.js';
import renderGallery from './js/render-functions.js';

import icon from './img/icon-close.svg';

const optionsFetch = new URLSearchParams({
  key: '4348225-c90d49c3185e1d6dd0df9aa80',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 21,
});

const loader = '<span class="loader"></span>';

const gallery = document.querySelector('.gallery');

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const searchRequest = event.target.elements.input.value.trim();

  if (searchRequest) {
    gallery.innerHTML = loader;
    optionsFetch.set('q', searchRequest);

    fetchPixabayAPI(optionsFetch)
      .then(data => {
        if (data.hits.length === 0) {
          gallery.innerHTML = '';
          iziToast.error({
            position: 'topRight',
            maxWidth: '380px',
            progressBar: false,
            iconUrl: icon,
            transitionIn: 'fadeInLeft',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
          });
        } else {
          gallery.innerHTML = renderGallery(data.hits);
          const gallerySimple = new SimpleLightbox('.gallery a', {
            captionsData: 'alt',
            captionDelay: 250,
          });
          gallerySimple.refresh();
        }
      })
      .catch(err => {
        console.log(err);
      });
  } else {
    iziToast.show({
      progressBar: false,
      position: 'topRight',
      maxWidth: '380px',
      iconUrl: icon,
      transitionIn: 'fadeInLeft',
      message: 'Put the request!',
    });
  }
  form.reset();
});
