import{i as l,S as d}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();let f=o=>fetch(`https://pixabay.com/api/?${o}`).then(s=>s.ok?s.json():new Error(`Error: ${s.status}`));function g(o){return o.reduce((s,t)=>s+=`<div class="image-box">
                        <a href="${t.largeImageURL}">
                       <img class="image" src=${t.webformatURL} alt="" sizes=""  height="200" width="360"/>
                        <div class="image-discr">
                        <p class="text"><span class="image-title">Likes</span>${t.likes}</p>
                        <p class="text"><span class="image-title">Views</span>${t.views}</p>
                        <p class="text"><span class="image-title">Comments</span>${t.comments}</p>
                        <p class="text"><span class="image-title">Downloads</span>${t.downloads}</p> 
                        </div>
                        </a>
                    </div>`,"")}const c="/goit-js-hw-11/assets/icon-close-6c427745.svg",p=new URLSearchParams({key:"4348225-c90d49c3185e1d6dd0df9aa80",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:21}),m='<span class="loader"></span>',n=document.querySelector(".gallery"),u=document.querySelector(".form");u.addEventListener("submit",o=>{o.preventDefault();const s=o.target.elements.input.value.trim();s?(n.innerHTML=m,p.set("q",s),f(p).then(t=>{t.hits.length===0?(n.innerHTML="",l.error({position:"topRight",maxWidth:"380px",progressBar:!1,iconUrl:c,transitionIn:"fadeInLeft",message:"Sorry, there are no images matching your search query. Please try again!"})):(n.innerHTML=g(t.hits),new d(".gallery a",{captionsData:"alt",captionDelay:250}).refresh())}).catch(t=>{console.log(t)})):(console.log("Put the request!"),l.show({progressBar:!1,position:"topRight",maxWidth:"380px",iconUrl:c,transitionIn:"fadeInLeft",message:"Put the request!"})),u.reset()});
//# sourceMappingURL=commonHelpers.js.map