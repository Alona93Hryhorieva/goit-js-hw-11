const API_KEY = '43820023 - fa202629be5215ad836dbfc98';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchPhotosByQuery = (query = 'cat') => {
    
    const searchParams = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });

    return fetch(`${BASE_URL}?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error('Sorry, there are no images matching your search query. Please try again!');
    }

    return response.json();
  });

}
