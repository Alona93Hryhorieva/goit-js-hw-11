import{i as l,S as d}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const h="43820023 - fa202629be5215ad836dbfc98",u="https://pixabay.com/api/",f=(i="cat")=>{const s=new URLSearchParams({key:h,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${u}?${s}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})},g=i=>i.map(({webformatURL:s,largeImageURL:r,tags:a,likes:e,view:t,comments:o,downloads:w})=>`<li class="gallery-item">
         <a class="gallery-link js-gallery-link" href='${image.largeImageURL}'>
              <img src='${image.webformatURL}' alt='${image.tags}' title='${image.tags}'>
         </a>
         <div class="image-details">
              <ul class="details-title">
                 <li class="details-title-det">
                     <h3 class="title-info">Likes:</h3>
                     <p class="paragraph-info">'${image.likes}'</p>
                  </li>
                 <li class="details-title-det">
                     <h3 class="title-info">Views:</h3>
                     <p class="paragraph-info">'${image.views}'</p>
                 </li>  
                 <li class="details-title-det">
                     <h3 class="title-info">Comments:</h3>
                      <p class="paragraph-info">'${image.comments}'</p>
                  </li>  
                  <li class="details-title-det">
                      <h3 class="title-info">Downloads:</h3>
                      <p class="paragraph-info">'${image.downloads}'</p>
                  </li>
             </ul>
         </div>
      </li>`).join(""),p=document.querySelector(".js-search-form"),c=document.querySelector(".gallery-list"),m=document.querySelector(".loader");let n;function y(i){i.preventDefault();const s=i.target.elements.searchKeyword.value.trim();if(s===""){l.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,color:"red"});return}c.innerHTML="",m.classList.remove("is-hidden"),f(s).then(r=>{if(r.hits.length===0){l.show({message:"Sorry, there are no images for this query",position:"topRight",timeout:2e3,color:"red"});return}c.innerHTML=g(r),n&&n.destroy(),n=new d(".js-gallery a",{captionDelay:250})}).catch(r=>{console.error("Error fetching photos:",r),l.show({message:"An error occurred while fetching photos",position:"topRight",timeout:2e3,color:"red"})}).finally(()=>{m.classList.add("is-hidden")})}p.addEventListener("submit",y);
//# sourceMappingURL=commonHelpers.js.map
