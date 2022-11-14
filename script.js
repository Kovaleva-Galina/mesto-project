const popupEditProfile = document.querySelector('.popup__edit-profile');
const editButton = document.querySelector('.profile__edit');
const closeEditProfileButton = popupEditProfile.querySelector('.popup__close');
const popupAddElement = document.querySelector('.popup__add-element');
const addButton = document.querySelector('.profile__add-button');
const closeAddElementButton = popupAddElement.querySelector('.popup__close');
const formElementEditProfile = popupEditProfile.querySelector('.popup__form');
const formElementAddElement = popupAddElement.querySelector('.popup__form');
const popupImage = document.querySelector('.popup__image');
const closeImageButton = popupImage.querySelector('.popup__close');

function editProfile() {
  popupEditProfile.classList.add('popup_opened');
}

function closeEditProfilePopup() {
  popupEditProfile.classList.remove('popup_opened');
}

function showPopupAddElement() {
  popupAddElement.classList.add('popup_opened');
}

function closeAddElementPopup() {
  popupAddElement.classList.remove('popup_opened');
}

function closeImage() {
  popupImage.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  const nameInput = popupEditProfile.querySelector('.popup__input__type_name');
  const jobInput = popupEditProfile.querySelector('.popup__input__type_job');

  const profileName = document.querySelector('.profile__name');
  const profileVocation = document.querySelector('.profile__vocation');

  profileName.textContent = nameInput.value;
  profileVocation.textContent = jobInput.value;

  closeEditProfilePopup();
}

function addElement (name, link) {
  const elementsList = document.querySelector('.elements__list');
  elementsList.insertAdjacentHTML('afterbegin', `
    <li class="element">
      <img class="element__image" src="${link}">
      <div class="element__description">
        <p class="element__text">${name}</p>
        <button class="element__heart" type="button"></button>
      </div>
      <button class="element__urn" type="button"></button>
    </li>
  `);
  const element = elementsList.querySelector('.element');
  const deleteButton = element.querySelector('.element__urn');
  deleteButton.addEventListener('click', function () {
    element.remove();
  });
  const likeButton = element.querySelector('.element__heart');
  likeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__heart_active');
  });
  const elementImage = element.querySelector('.element__image');
  elementImage.addEventListener('click', function() {
    popupImage.classList.add('popup_opened');
    const popupImageText = document.querySelector('.popup__image__text');
    const popupImagePhoto = document.querySelector('.popup__image__photo');
    popupImageText.textContent = name;
    popupImagePhoto.src = link;
  });
  };


function addElementFromPopup (evt) {
  evt.preventDefault();
  const name = popupAddElement.querySelector('.popup__input__type_title');
  const link = popupAddElement.querySelector('.popup__input__type_link');
  addElement(name.value, link.value);
  link.value = '';
  name.value = '';
  closeAddElementPopup();
}

const initialCards = [
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

function addElementsAuto (initialCards) {
  for (i = 0; i < initialCards.length; i++) {
    addElement(initialCards[i].name, initialCards[i].link);
  }
}
addElementsAuto(initialCards);

editButton.addEventListener('click', editProfile);
closeEditProfileButton.addEventListener('click', closeEditProfilePopup);
addButton.addEventListener('click', showPopupAddElement);
closeAddElementButton.addEventListener('click', closeAddElementPopup);
formElementAddElement.addEventListener('submit', addElementFromPopup);
formElementEditProfile.addEventListener('submit', handleFormSubmit);
closeImageButton.addEventListener('click', closeImage);
