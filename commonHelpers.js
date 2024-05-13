import{i as n,S as d}from"./assets/vendor-8c59ed88.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const h="43820023 - fa202629be5215ad836dbfc98",u="https://pixabay.com/api/",g=(r="cat")=>{const i=new URLSearchParams({key:h,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${u}?${i}`).then(s=>{if(!s.ok)throw new Error(s.statusText);return s.json()})},f=r=>r.map(({webformatURL:i,largeImageURL:s,tags:l,likes:e,view:t,comments:o,downloads:L})=>`<li class="gallery-item">
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
      </li>`).join(""),p=document.querySelector(".js-search-form");document.querySelector(".js-search-input");document.querySelector(".search-btn");const a=document.querySelector(".gallery-list"),m=document.querySelector(".loader");let c;function y(r){r.preventDefault();const i=r.target.elements.searchKeyword.value.trim();if(i===""){a.innerHTML="",r.target.reset(),n.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,color:"red"});return}a.innerHTML="",m.classList.remove("is-hidden"),g(i).then(s=>{if(s.hits.length===0){n.show({message:"Sorry, there are no images for this query",position:"topRight",timeout:2e3,color:"red"}),a.innerHTML="";return}a.innerHTML=f(s),c&&c.destroy(),c=new d(".js-gallery a",{captionDelay:250}),r.target.reset()}).catch(s=>{console.error("Error fetching photos:",s),n.show({message:"An error occurred while fetching photos",position:"topRight",timeout:2e3,color:"red"}),r.target.reset()}).finally(()=>{r.target.reset(),m.classList.add("is-hidden")})}p.addEventListener("submit",y);
//# sourceMappingURL=commonHelpers.js.map
