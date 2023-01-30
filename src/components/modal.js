const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const nameInput = popupEditProfile.querySelector('.popup__input_type_name');
const jobInput = popupEditProfile.querySelector('.popup__input_type_job');
const profileVocation = document.querySelector('.profile__vocation');
const profileName = document.querySelector('.profile__name');

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

export function handleEditProfile(evt) {
  evt.preventDefault();
  profileVocation.textContent = jobInput.value;
  profileName.textContent = nameInput.value;
  closePopup(popupEditProfile);
}
