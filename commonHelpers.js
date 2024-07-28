(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function c(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=c(e);fetch(e.href,n)}})();document.addEventListener("scroll",function(){const s=document.querySelectorAll("header, section, footer"),t=document.querySelectorAll("nav a");let c="";s.forEach(o=>{const e=o.offsetTop;pageYOffset>=e-50&&(c=o.getAttribute("id"))}),t.forEach(o=>{o.classList.remove("active"),o.getAttribute("href").includes(c)&&o.classList.add("active")})});const b=document.getElementById("sound-btn");b.addEventListener("click",()=>{const s=document.getElementById("sound-icon");s.getAttribute("xlink:href")==="/img/icons.svg#icon-sound"?s.setAttribute("xlink:href","/img/icons.svg#icon-sound-off"):s.setAttribute("xlink:href","/img/icons.svg#icon-sound")});const u=document.querySelectorAll(".services-info__item"),l=document.querySelectorAll(".services-info__slide"),v=document.querySelectorAll(".services-info__text-item");let r=0;u.forEach((s,t)=>{s.addEventListener("click",c=>{c.preventDefault(),u[r].classList.remove("item-active"),u[t].classList.add("item-active"),v[r].classList.remove("text-active"),v[t].classList.add("text-active"),l[r].style.zIndex="1",l[t].style.zIndex="2",r<t&&l[t].animate([{transform:"translateX(-100%)"},{transform:"translateX(0)"}],{duration:400}),r>t&&l[t].animate([{transform:"translateX(100%)"},{transform:"translateX(0)"}],{duration:400}),setTimeout(()=>{l[r].classList.remove("slide-active"),l[t].classList.add("slide-active"),l[r].style.zIndex="0",r=t},500)})});const i=document.getElementById("contact-us-form"),A=document.getElementById("contact-us-confirm"),d=i.elements,y={};for(let s=0;s<d.length;s++){const t=d[s];y[t.name]=t.placeholder}i.addEventListener("submit",s=>{s.preventDefault();const t={};let c=!1;for(let o=0;o<d.length;o++){const e=d[o];e.nodeName==="INPUT"&&(!e.value||e.value.trim()===""?(c=!0,e.classList.add("error"),e.placeholder="This is a required field."):(e.classList.remove("error"),e.placeholder=y[e.name]),t[e.name]=e.value)}c||(console.log(t),i.reset(),i.style.display="none",A.style.display="block")});const p=document.getElementById("head"),m=document.getElementById("openMenu"),f=document.getElementById("closeMenu"),L=document.getElementById("menuBg"),g=document.getElementById("menu"),h=document.getElementById("contactBtn"),E=document.querySelector(".head-logo__icon"),B=document.querySelector("body"),S=document.querySelectorAll(".head-nav__link, .head-btn");S.forEach(s=>s.addEventListener("click",t=>I()));m.addEventListener("click",()=>q());f.addEventListener("click",()=>I());const q=()=>{p.classList.add("open"),E.style.fill="#ffffff",m.classList.add("hidden"),f.classList.remove("hidden"),L.classList.add("open"),B.classList.add("modal-open"),setTimeout(()=>{g.classList.add("open"),h.classList.add("open")},500)},I=()=>{p.classList.remove("open"),E.style.fill="",m.classList.remove("hidden"),f.classList.add("hidden"),L.classList.remove("open"),g.classList.remove("open"),h.classList.remove("open"),B.classList.remove("modal-open")};
//# sourceMappingURL=commonHelpers.js.map
