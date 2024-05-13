import iziToast from "izitoast"; 
import "izitoast/dist/css/iziToast.min.css"; 

import SimpleLightbox from "simplelightbox"; 
import "simplelightbox/dist/simple-lightbox.min.css"; 

import { fetchPhotosByQuery } from './js/pixabay-api.js'; 
import { createGalleryItemMarkup } from './js/render-functions.js'; 


const searchForm = document.querySelector('.js-search-form'); 
const searchInput = document.querySelector('.js-search-input'); 
const searchBtn = document.querySelector('.search-btn'); 
const listGallery = document.querySelector('.gallery-list'); 
const loader = document.querySelector('.loader');

let lightbox;

function onSearchFormSubmit(event) {
    event.preventDefault();
    const searchQuery = event.target.elements.searchKeyword.value.trim();

    if (searchQuery === '') {
        listGallery.innerHTML = '';
        event.target.reset();
        iziToast.show({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
            timeout: 2000,
            color: 'red',
        });
        return;
    }

    listGallery.innerHTML = '';
    loader.classList.remove('is-hidden');

    fetchPhotosByQuery(searchQuery)
        .then(imagesData => {
            if (imagesData.hits.length === 0) {
                iziToast.show({
                    message: 'Sorry, there are no images for this query',
                    position: 'topRight',
                    timeout: 2000,
                    color: 'red',
                });

                listGallery.innerHTML = '';
                return;
            }

            listGallery.innerHTML = createGalleryItemMarkup(imagesData);

            if (lightbox) {
                lightbox.destroy();
            }
            lightbox = new SimpleLightbox('.js-gallery a', {
                captionDelay: 250,
            });

            event.target.reset();
        
        })

        .catch(error => {
            console.error('Error fetching photos:', error);
            iziToast.show({
                message: 'An error occurred while fetching photos',
                position: 'topRight',
                timeout: 2000,
                color: 'red',
            });
            event.target.reset();
        })

        .finally(() => {
            event.target.reset();
            loader.classList.add('is-hidden');
        });
    
}

searchForm.addEventListener('submit', onSearchFormSubmit);
