import { fetchEditProfile, fetchEditAvatar } from './api';

const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const editProfileForm = document.forms.editProfile;
const nameInput = popupEditProfile.querySelector('.popup__input_type_name');
const jobInput = popupEditProfile.querySelector('.popup__input_type_job');

const popupEditAvatar = document.querySelector('.popup_type_edit-avatar');
const editAvatarForm = document.forms.editAvatar;
const linkImageInput = popupEditAvatar.querySelector('.popup__input_type_link-image');

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

export function initEditAvatar() {
  linkImageInput.value = avatar.src;
}

export function renderLoading(isLoading, form) {
  const saving = form.querySelector('.popup__button-save');
  if(isLoading) {
    saving.textContent = 'Сохранение...' ;
  } else {
    saving.textContent = 'Сохранить';
  }
}

export function handleEditProfile(evt) {
  evt.preventDefault();
  renderLoading(true, editProfileForm);
  return fetchEditProfile(editProfileForm.elements.name.value, editProfileForm.elements.about.value)
    .then((obj) => {
      profileVocation.textContent = obj.name;
      profileName.textContent = obj.about;
      closePopup(popupEditProfile);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, editProfileForm);
    })
}

export function handleEditAvatar(evt) {
  evt.preventDefault();
  renderLoading(true, editAvatarForm);
  return fetchEditAvatar(editAvatarForm.elements.linkImage.value)
  .then((obj) => {
      avatar.src = obj.avatar;
      closePopup(popupEditAvatar);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    renderLoading(false, editAvatarForm);
  })
}


