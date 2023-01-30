import './pages/index.css';
import { initialCards, handleAddElement, addElementsAuto} from './components/cards';
import { openPopup, closePopup, closePopupsByClickOnSection, initEditProfile, handleEditProfile } from './components/modal'
import { enableValidation } from './components/validate'

// переменные редактирования профиля
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const buttonEditProfile = document.querySelector('.profile__edit');
const buttonCloseEditProfile = popupEditProfile.querySelector('.popup__close');
const formElementEditProfile = popupEditProfile.querySelector('.popup__form');

// переменные добавления карточек
const popupAddElement = document.querySelector('.popup_type_add-element');
const buttonAddElement = document.querySelector('.profile__add-button');
const buttonCloseAddElement = popupAddElement.querySelector('.popup__close');
const formElementAddElement = popupAddElement.querySelector('.popup__form');

// переменные попапа изображений
const popupImage = document.querySelector('.popup_type_image');
const buttonCloseImage = popupImage.querySelector('.popup__close');

formElementAddElement.addEventListener('submit', handleAddElement);
formElementEditProfile.addEventListener('submit', handleEditProfile);

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

addElementsAuto(initialCards);
initEditProfile();
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
});
closePopupsByClickOnSection();

