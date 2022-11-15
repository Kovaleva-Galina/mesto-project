const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const buttonEditProfile = document.querySelector('.profile__edit');
const buttonCloseEditProfile = popupEditProfile.querySelector('.popup__close');
const popupAddElement = document.querySelector('.popup_type_add-element');
const buttonAddElement = document.querySelector('.profile__add-button');
const buttonCloseAddElement = popupAddElement.querySelector('.popup__close');
const formElementEditProfile = popupEditProfile.querySelector('.popup__form');
const formElementAddElement = popupAddElement.querySelector('.popup__form');
const popupImage = document.querySelector('.popup_type_image');
const buttonCloseImage = popupImage.querySelector('.popup__close');
const nameInput = popupEditProfile.querySelector('.popup__input_type_name');
const jobInput = popupEditProfile.querySelector('.popup__input_type_job');
const elementsList = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#card-template');
const popupImageText = document.querySelector('.popup__image_type_text');
const popupImagePhoto = document.querySelector('.popup__image_type_photo');
const profileName = document.querySelector('.profile__name');
const profileVocation = document.querySelector('.profile__vocation');
const titleInput = popupAddElement.querySelector('.popup__input_type_title');
const linkInput = popupAddElement.querySelector('.popup__input_type_link');

function openPopup(popupType) {
  popupType.classList.add('popup_opened');
}

function closePopup(popupType) {
  popupType.classList.remove('popup_opened');
}

function handleEditProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileVocation.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

function createCard(name, link) {
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
    popupImageText.textContent = name;
    popupImagePhoto.src = link;
    popupImagePhoto.alt = name;
    return openPopup(popupImage);
  });
  return cardElement;
};

function renderCard(name, link) {
  const element = createCard(name, link);
  elementsList.prepend(element);
}

function handleAddElement(evt) {
  evt.preventDefault();
  renderCard(titleInput.value, linkInput.value);
  linkInput.value = '';
  titleInput.value = '';
  closePopup(popupAddElement);
}

function addElementsAuto(initialCards) {
  initialCards.forEach(function (item) {
    renderCard(item.name, item.link);
  })
}

addElementsAuto(initialCards);

buttonEditProfile.addEventListener('click', function () {
  return openPopup(popupEditProfile);
});

buttonCloseEditProfile.addEventListener('click', function () {
  return closePopup(popupEditProfile);
});

buttonAddElement.addEventListener('click', function () {
  return openPopup(popupAddElement);
});

buttonCloseAddElement.addEventListener('click', function () {
  return closePopup(popupAddElement);
});

formElementAddElement.addEventListener('submit', handleAddElement);
formElementEditProfile.addEventListener('submit', handleEditProfile);

buttonCloseImage.addEventListener('click', function () {
  return closePopup(popupImage);
});
