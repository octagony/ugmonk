(()=>{"use strict";(()=>{const e=document.querySelectorAll(".item__link"),t=document.querySelectorAll(".shop__card__item");for(let t of e)t.onclick=function(){event.preventDefault(),o(this.dataset.filter)};function o(o){for(let e of t)e.style.display="none",e.classList.contains(o)&&setTimeout((()=>{e.style.display="flex"}),0);for(let t of e)t.dataset.filter===o?t.classList.add("link--active"):t.classList.remove("link--active")}})(),(()=>{const e=document.querySelectorAll(".shop__card__img--main"),t=document.querySelectorAll(".shop__card__img--second");document.querySelectorAll(".shop__card__item").forEach(((o,l)=>{o.onmouseover=()=>{!function(o){for(let l of e){e[o].style.display="none";for(let e of t)t[o].style.display="flex"}}(l)},o.onmouseout=()=>{!function(o){for(let l of e){e[o].style.display="flex";for(let e of t)t[o].style.display="none"}}(l)}}))})(),(()=>{const e=document.querySelector(".menu__btn"),t=document.querySelector(".menu__list"),o=document.querySelector(".shop__btn"),l=document.querySelector(".shop__carousel__list");e.addEventListener("click",(()=>{t.classList.toggle("menu__list--active")})),o.addEventListener("click",(()=>{l.classList.toggle("shop__carousel__list--active")})),jQuery(document).ready((function(){jQuery("a.scrollto").click((function(){return elementClick=jQuery(this).attr("href"),destination=jQuery(elementClick).offset().top-50,jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop:destination},1e3),!1})),$((function(){$(document).width()>1200&&$(window).scroll((function(){$(this).scrollTop()>=187?$(".header__title").addClass("sticky slide-in-top"):$(".header__title").removeClass("sticky slide-in-top")}))}))}))})()})();