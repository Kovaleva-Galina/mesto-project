import { closePopup, openPopup } from './modal';

export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// создание карточек
export function createCard(name, link) {
  const cardTemplate = document.querySelector('#card-template');
  const cardTemplateContent = cardTemplate.content;
  const cardElement = cardTemplateContent.querySelector('.element').cloneNode(true);
  const elementImage = cardElement.querySelector('.element__image');

  elementImage.src = link;
  elementImage.alt = name;
  cardElement.querySelector('.element__text').textContent = name;

  const buttonDelete = cardElement.querySelector('.element__urn');
  buttonDelete.addEventListener('click', function () {
    cardElement.remove();
  });

  const buttonLike = cardElement.querySelector('.element__heart');
  buttonLike.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__heart_active');
  });

  elementImage.addEventListener('click', function () {
    const popupImage = document.querySelector('.popup_type_image');
    const popupImageText = document.querySelector('.popup__image_type_text');
    const popupImagePhoto = document.querySelector('.popup__image_type_photo');
    popupImageText.textContent = name;
    popupImagePhoto.src = link;
    popupImagePhoto.alt = name;
    return openPopup(popupImage);
  });
  return cardElement;
};

export function renderCard(name, link) {
  const elementsList = document.querySelector('.elements__list');
  const element = createCard(name, link);
  elementsList.prepend(element);
}

export function handleAddElement(evt) {
  const popupAddElement = document.querySelector('.popup_type_add-element');
  const titleInput = popupAddElement.querySelector('.popup__input_type_title');
  const linkInput = popupAddElement.querySelector('.popup__input_type_link');
  evt.preventDefault();
  renderCard(titleInput.value, linkInput.value);
  linkInput.value = '';
  titleInput.value = '';
  closePopup(popupAddElement);
}

export  function addElementsAuto(initialCards) {
  initialCards.forEach(function (item) {
    renderCard(item.name, item.link);
  })
}

