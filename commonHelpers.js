import{i as n}from"./assets/vendor-8e8cd629.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const c="43820023 - fa202629be5215ad836dbfc98",m="https://pixabay.com/api/",u=(i="cat")=>{const r=new URLSearchParams({key:c,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${m}?${r}`).then(s=>{if(!s.ok)throw new Error(s.statusText);return s.json()})},d=i=>i.map(({webformatURL:r,largeImageURL:s,tags:a,likes:e,view:t,comments:o,downloads:p})=>`<li class="gallery-item">
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
      </li>`).join(""),h=document.querySelector(".js-search-form");document.querySelector(".js-search-input");document.querySelector(".search-btn");const l=document.querySelector(".gallery-list"),f=document.querySelector(".loader");function g(i){i.preventDefault();const r=i.target.elements.searchKeyword.value.trim();if(r===""){l.innerHTML="",i.target.reset(),n.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,color:"red"});return}l.innerHTML="",f.classList.remove("is-hidden"),u(r).then(s=>{s.hits.length===0&&n.show({message:"Sorry, there are no images for this query",position:"topRight",timeout:2e3,color:"red"}),l.innerHTML=d(s.results)})}h.addEventListener("submit",g);
//# sourceMappingURL=commonHelpers.js.map
