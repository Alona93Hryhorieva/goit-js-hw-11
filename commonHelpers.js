import{i as l,S as d}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f="43820023-fa202629be5215ad836dbfc98",p="https://pixabay.com/api/",m=(i="cat")=>{const s=new URLSearchParams({key:f,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${p}?${s}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})},y=i=>i.map(({webformatURL:s,largeImageURL:r,tags:o,likes:e,view:t,comments:a,downloads:u})=>`<li class="gallery-item">
                       <a class="gallery-link js-gallery-link" href='${r}'>
                         <img src='${s}' alt='${o}' title='${o}'>
                      </a>

                      <div class="image-details">
                         <ul class="details-title">
                             <li class="details-title-det">
                                  <h3 class="title-info">Likes:</h3>
                                  <p class="paragraph-info">'${e}'</p>
                                </li>
                                <li class="details-title-det">
                                 <h3 class="title-info">Views:</h3>
                                 <p class="paragraph-info">'${t}'</p>
                               </li>  
                             <li class="details-title-det">
                                 <h3 class="title-info">Comments:</h3>
                                 <p class="paragraph-info">'${a}'</p>
                             </li>  
                              <li class="details-title-det">
                                  <h3 class="title-info">Downloads:</h3>
                                  <p class="paragraph-info">'${u}'</p>
                              </li>
                 
                            </ul>
                      </div>
                  </li>`).join(""),g=document.querySelector(".js-search-form"),c=document.querySelector(".gallery-list"),h=document.querySelector(".loader");let n;function L(i){i.preventDefault();const s=i.target.elements.searchKeyword.value.trim();if(s===""){l.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,color:"red"});return}c.innerHTML="",h.classList.remove("is-hidden"),m(s).then(r=>{if(r.hits.length===0){l.show({message:"Sorry, there are no images for this query",position:"topRight",timeout:2e3,color:"red"});return}c.innerHTML=y(r),n&&n.destroy(),n=new d(".js-gallery a",{captionDelay:250})}).catch(r=>{l.show({message:"An error occurred while fetching photos",position:"topRight",timeout:2e3,color:"red"})}).finally(()=>{h.classList.add("is-hidden")})}g.addEventListener("submit",L);
//# sourceMappingURL=commonHelpers.js.map
