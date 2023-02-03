import { fetchEditProfile, fetchEditAvatar } from './api';
import {
  popupEditProfile,
  editProfileForm,
  editProfileSave,
  nameInput,
  jobInput,
  popupEditAvatar,
  editAvatarForm,
  editAvatarSave } from './config';

export const avatar = document.querySelector('.avatar');
export const profileVocation = document.querySelector('.profile__vocation');
export const profileName = document.querySelector('.profile__name');

export function closePopupByEsc(evt) {
  if (evt.key === 'Escape') {
    const popupOpen = document.querySelector('.popup_opened');
    if (popupOpen !== null) {
      closePopup(popupOpen);
    }
  };
}

export function openPopup(popupType) {
  popupType.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
}

export function closePopup(popupType) {
  popupType.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
}

export const closePopupsByClickOnSection = () => {
  const popupsElements = document.querySelectorAll('.popup');
  Array.from(popupsElements).forEach((popup) => {
    popup.addEventListener('mousedown', function(evt) {
      if (evt.target === popup) {
        closePopup(popup);
      }
    });
  })
}

export function initEditProfile() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileVocation.textContent;
}

export function renderLoading(isLoading, saving) {
  if(isLoading) {
    saving.textContent = 'Сохранение...' ;
  } else {
    saving.textContent = 'Сохранить';
  }
}

export function handleEditProfile(evt) {
  evt.preventDefault();
  renderLoading(true, editProfileSave);
  return fetchEditProfile(editProfileForm.elements.name.value, editProfileForm.elements.about.value)
    .then((obj) => {
      profileVocation.textContent = obj.about;
      profileName.textContent = obj.name;
      closePopup(popupEditProfile);
      editProfileForm.reset();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, editProfileSave);
    })
}

export function handleEditAvatar(evt) {
  evt.preventDefault();
  renderLoading(true, editAvatarSave);
  return fetchEditAvatar(editAvatarForm.elements.linkImage.value)
  .then((obj) => {
      avatar.src = obj.avatar;
      closePopup(popupEditAvatar);
      editAvatarForm.reset();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    renderLoading(false, editAvatarSave);
  })
}


