import iziToast from "izitoast"; 
import "izitoast/dist/css/iziToast.min.css"; 

import SimpleLightbox from "simplelightbox"; 
import "simplelightbox/dist/simple-lightbox.min.css"; 

import { fetchPhotosByQuery } from './js/pixabay-api.js'; 
import { createGalleryItemMarkup } from './js/render-functions.js'; 



// function submitForm() {np
//             // Отримати значення з текстового поля
//             var searchQuery = document.getElementById("searchQuery").value;

//             // Перевірити, чи не є текстове поле порожнім
//             if (searchQuery.trim() === "") {
//                 // Повідомити користувача про порожнє поле
//                 alert("Будь ласка, введіть пошуковий запит.");
//                 // Зупинити відправку форми
//                 return false;
//             }

//             // Якщо текстове поле не порожнє, відправити форму
//             // Якщо потрібно виконати HTTP-запит, це можна зробити тут

//             // Повернути true для відправки форми
//             return true;
//         }