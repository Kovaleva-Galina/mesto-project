import './pages/index.css';
import { handleAddElement, addElementsAuto} from './components/cards';
import { openPopup, closePopup, closePopupsByClickOnSection, initEditProfile, handleEditProfile, profileName, profileVocation, handleEditAvatar, initEditAvatar } from './components/modal'
import { enableValidation, toggleButtonState } from './components/validate'
import { fetchCards, fetchProfile } from './components/api'

// переменные редактирования профиля
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const buttonEditProfile = document.querySelector('.profile__edit');
const buttonCloseEditProfile = popupEditProfile.querySelector('.popup__close');
const formElementEditProfile = popupEditProfile.querySelector('.popup__form');
const profileAvatar = document.querySelector('.profile__avatar');
const profileAvatarImg = profileAvatar.querySelector('.avatar');

// переменные добавления карточек
const popupAddElement = document.querySelector('.popup_type_add-element');
const buttonAddElement = document.querySelector('.profile__add-button');
const buttonCloseAddElement = popupAddElement.querySelector('.popup__close');
const formElementAddElement = popupAddElement.querySelector('.popup__form');

// переменные попапа изображений
const popupImage = document.querySelector('.popup_type_image');
const buttonCloseImage = popupImage.querySelector('.popup__close');

// переменные попапа редактирования аватарки
const popupEditAvatar = document.querySelector('.popup_type_edit-avatar');
const formElementEditAvatar = popupEditAvatar.querySelector('.popup__form');
const buttonCloseEditAatar = popupEditAvatar.querySelector('.popup__close');
const buttonEditAvatar = document.querySelector('.avatar__edit');

const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};


formElementAddElement.addEventListener('submit', handleAddElement);
formElementEditProfile.addEventListener('submit', handleEditProfile);
formElementEditAvatar.addEventListener('submit', handleEditAvatar);

buttonCloseImage.addEventListener('click', function () {
  closePopup(popupImage);
});

buttonEditProfile.addEventListener('click', function () {
  openPopup(popupEditProfile);
  initEditProfile();
});

buttonCloseEditProfile.addEventListener('click', function () {
  closePopup(popupEditProfile);
});

buttonAddElement.addEventListener('click', function () {
  openPopup(popupAddElement);
});

buttonCloseAddElement.addEventListener('click', function () {
  closePopup(popupAddElement);
});

buttonEditAvatar.addEventListener('click', function() {
  initEditAvatar();
  const inputList = Array.from(formElementEditAvatar.querySelectorAll(settings.inputSelector));
  const buttonSave = formElementEditAvatar.querySelector(settings.submitButtonSelector);
  toggleButtonState(inputList, buttonSave, settings);
  openPopup(popupEditAvatar);
});

buttonCloseEditAatar.addEventListener('click', function () {
  closePopup(popupEditAvatar);
});

//Карточки
const updateCards = (myId) => {
  return fetchCards()
  .then((array) => {
    addElementsAuto(array, myId);
  })
  .catch((err) => {
    console.log('Ошибка. Запрос не выполнен');
  });
}

//Пользователь
const updateProfile = () => {
  return fetchProfile()
  .then((obj) => {
    profileName.textContent = obj.name;
    profileVocation.textContent = obj.about;
    profileAvatarImg.src = obj.avatar;
    return obj;
  })
  .catch((err) => {
    console.log(err);
  });
}

updateProfile()
  .then((obj) => {
    return updateCards(obj._id);
  });

initEditAvatar();
initEditProfile();
enableValidation(settings);
closePopupsByClickOnSection();
