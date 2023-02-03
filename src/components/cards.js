import { closePopup, openPopup, renderLoading } from './modal';
import { fetchElement, fetchDelete, putLike, deleteLike } from './api';
import {
  cardTemplate,
  popupImage,
  popupImageText,
  popupImagePhoto,
  elementsList,
  popupAddElement,
  addCardForm,
  addCardSave,
  titleInput,
  linkInput } from './config';

// создание карточек
export function createCard(props) {
  const { name, link, counter, showUrn, cardId, showLike } = props;
  const cardTemplateContent = cardTemplate.content;
  const cardElement = cardTemplateContent.querySelector('.element').cloneNode(true);
  const elementImage = cardElement.querySelector('.element__image');
  const elementCounter = cardElement.querySelector('.element__counter');
  const buttonDelete = cardElement.querySelector('.element__urn');
  const buttonLike = cardElement.querySelector('.element__heart');
  const elementText = cardElement.querySelector('.element__text');
  let showLikeChanged = showLike;

  if (showUrn) {
    buttonDelete.classList.add('element__urn_active');
  }

  if (showLikeChanged) {
    buttonLike.classList.add('element__heart_active');
  }

  elementImage.src = link;
  elementImage.alt = name;

  elementText.textContent = name;

  elementCounter.textContent = counter;

  buttonDelete.addEventListener('click', function () {
    fetchDelete(cardId)
      .then(() => {
        cardElement.remove();
      })
      .catch((err) => {
        console.log(err);
      });
  });

  buttonLike.addEventListener('click', function (evt) {
    if (!showLikeChanged) {
      putLike(cardId)
        .then((obj) => {
          elementCounter.textContent = obj.likes.length;
          evt.target.classList.toggle('element__heart_active');
          showLikeChanged = true;
        })
    } else {
      deleteLike(cardId)
        .then((obj) => {
          elementCounter.textContent = obj.likes.length;
          evt.target.classList.toggle('element__heart_active');
          showLikeChanged = false;
        })
    }
  });

  elementImage.addEventListener('click', function () {
    popupImageText.textContent = name;
    popupImagePhoto.src = link;
    popupImagePhoto.alt = name;
    openPopup(popupImage);
  });

  return cardElement;
};

export function renderCard(props) {
  const element = createCard(props);
  elementsList.prepend(element);
}

export function handleAddElement(evt) {
  evt.preventDefault();
  renderLoading(true, addCardSave);
  fetchElement(addCardForm.elements.name.value, addCardForm.elements.link.value)
  .then((obj) => {
    renderCard({
      name: titleInput.value,
      link: linkInput.value,
      counter: 0,
      showUrn: true,
      cardId: obj._id
    });
    closePopup(popupAddElement);
    addCardForm.reset();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    renderLoading(false, addCardSave);
  })
}

export  function addElementsAuto(initialCards, myId) {
  initialCards.forEach(function (item) {
    const counter = item.likes.length;
    const showUrn = item.owner._id === myId;
    const showLike = item.likes.some((like) => {
      if (like._id === myId) {
        return true;
      }
      return false;
    })
    renderCard({
      name: item.name,
      link: item.link,
      counter: counter,
      showUrn: showUrn,
      cardId: item._id,
      showLike: showLike
    })
  })
}

