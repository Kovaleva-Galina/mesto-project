(()=>{"use strict";var e=document.querySelector(".popup_type_edit-profile"),t=e.querySelector(".popup__input_type_name"),n=e.querySelector(".popup__input_type_job"),r=document.querySelector(".profile__vocation"),o=document.querySelector(".profile__name");function u(e){if("Escape"===e.key){var t=document.querySelector(".popup_opened");null!==t&&p(t)}}function c(e){e.classList.add("popup_opened"),document.addEventListener("keydown",u)}function p(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",u)}function l(){t.value=o.textContent,n.value=r.textContent}var a=document.querySelector("#card-template"),i=document.querySelector(".popup_type_image"),s=document.querySelector(".popup__image_type_text"),d=document.querySelector(".popup__image_type_photo"),_=document.querySelector(".elements__list"),m=document.querySelector(".popup_type_add-element"),y=m.querySelector(".popup__input_type_title"),v=m.querySelector(".popup__input_type_link");function f(e,t){var n=function(e,t){var n=a.content.querySelector(".element").cloneNode(!0),r=n.querySelector(".element__image");return r.src=t,r.alt=e,n.querySelector(".element__text").textContent=e,n.querySelector(".element__urn").addEventListener("click",(function(){n.remove()})),n.querySelector(".element__heart").addEventListener("click",(function(e){e.target.classList.toggle("element__heart_active")})),r.addEventListener("click",(function(){return s.textContent=e,d.src=t,d.alt=e,c(i)})),n}(e,t);_.prepend(n)}var S,q,k=function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)},E=function(e){return!e.dataset.reg||!new RegExp(e.dataset.reg).test(e.value)},L=function(e,t,n){!function(e){return e.some((function(e){return!E(e)||!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))},g=document.querySelector(".popup_type_edit-profile"),h=document.querySelector(".profile__edit"),x=g.querySelector(".popup__close"),C=g.querySelector(".popup__form"),b=document.querySelector(".popup_type_add-element"),A=document.querySelector(".profile__add-button"),j=b.querySelector(".popup__close"),B=b.querySelector(".popup__form"),w=document.querySelector(".popup_type_image"),D=w.querySelector(".popup__close");B.addEventListener("submit",(function(e){e.preventDefault(),f(y.value,v.value),v.value="",y.value="",p(m)})),C.addEventListener("submit",(function(u){u.preventDefault(),r.textContent=n.value,o.textContent=t.value,p(e)})),D.addEventListener("click",(function(){p(w)})),h.addEventListener("click",(function(){c(g),l()})),x.addEventListener("click",(function(){p(g)})),A.addEventListener("click",(function(){c(b)})),j.addEventListener("click",(function(){p(b)})),[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(e){f(e.name,e.link)})),l(),S={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button-save",inactiveButtonClass:"popup__button-save_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},Array.from(document.querySelectorAll(S.formSelector)).forEach((function(e){e.addEventListener("submit",(function(t){t.preventDefault();var n=Array.from(e.querySelectorAll(S.inputSelector)),r=e.querySelector(S.submitButtonSelector);L(n,r,S)})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);L(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){E(t)?t.validity.valid?function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""}(e,t,n):k(e,t,t.validationMessage,n):k(e,t,t.dataset.status,n)}(e,o,t),L(n,r,t)}))}))}(e,S)})),q=document.querySelectorAll(".popup"),Array.from(q).forEach((function(e){e.addEventListener("mousedown",(function(t){t.target===e&&p(e)}))}))})();