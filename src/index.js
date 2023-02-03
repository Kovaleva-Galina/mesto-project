import './pages/index.css';
import { handleAddElement, addElementsAuto} from './components/cards';
import { openPopup, closePopup, closePopupsByClickOnSection, initEditProfile, handleEditProfile, profileName, profileVocation, handleEditAvatar } from './components/modal'
import { enableValidation, validateSaveButton, validateInputs } from './components/validate'
import { fetchCards, fetchProfile } from './components/api'
import {
  popupEditProfile,
  buttonEditProfile,
  buttonCloseEditProfile,
  formElementEditProfile,
  profileAvatarImg,
  popupAddElement,
  buttonAddElement,
  buttonCloseAddElement,
  formElementAddElement,
  popupImage,
  buttonCloseImage,
  popupEditAvatar,
  formElementEditAvatar,
  buttonCloseEditAatar,
  buttonEditAvatar,
  settings } from './components/config'


formElementAddElement.addEventListener('submit', handleAddElement);
formElementEditProfile.addEventListener('submit', handleEditProfile);
formElementEditAvatar.addEventListener('submit', handleEditAvatar);

buttonCloseImage.addEventListener('click', function () {
  closePopup(popupImage);
});

buttonEditProfile.addEventListener('click', function () {
  initEditProfile()
  validateInputs(formElementEditProfile, settings);
  validateSaveButton(formElementEditProfile, settings);
  openPopup(popupEditProfile);
});

buttonCloseEditProfile.addEventListener('click', function () {
  closePopup(popupEditProfile);
});

buttonAddElement.addEventListener('click', function () {
  validateSaveButton(formElementAddElement, settings);
  openPopup(popupAddElement);
});

buttonCloseAddElement.addEventListener('click', function () {
  closePopup(popupAddElement);
});

buttonEditAvatar.addEventListener('click', function() {
  validateSaveButton(formElementEditAvatar, settings);
  openPopup(popupEditAvatar);
});

buttonCloseEditAatar.addEventListener('click', function () {
  closePopup(popupEditAvatar);
});

//Карточки
const requestCards = (myId) => {
  return fetchCards()
  .then((array) => {
    addElementsAuto(array, myId);
  })
  .catch((err) => {
    console.log('Ошибка. Запрос не выполнен');
  });
}

//Пользователь
const requestProfile = () => {
  return fetchProfile()
  .then((obj) => {
    profileName.textContent = obj.name;
    profileVocation.textContent = obj.about;
    profileAvatarImg.src = obj.avatar;
    return obj;
  })
  .then((obj) => {
    return requestCards(obj._id);
  })
  .catch((err) => {
    console.log(err);
  });
}

requestProfile();
enableValidation(settings);
closePopupsByClickOnSection();
