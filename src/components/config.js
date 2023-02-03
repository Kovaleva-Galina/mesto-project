// переменные редактирования профиля
export const popupEditProfile = document.querySelector('.popup_type_edit-profile');
export const buttonEditProfile = document.querySelector('.profile__edit');
export const buttonCloseEditProfile = popupEditProfile.querySelector('.popup__close');
export const formElementEditProfile = popupEditProfile.querySelector('.popup__form');
export const profileAvatar = document.querySelector('.profile__avatar');
export const profileAvatarImg = profileAvatar.querySelector('.avatar');

// переменные добавления карточек
export const popupAddElement = document.querySelector('.popup_type_add-element');
export const buttonAddElement = document.querySelector('.profile__add-button');
export const buttonCloseAddElement = popupAddElement.querySelector('.popup__close');
export const formElementAddElement = popupAddElement.querySelector('.popup__form');

// переменные попапа изображений
export const popupImage = document.querySelector('.popup_type_image');
export const buttonCloseImage = popupImage.querySelector('.popup__close');

// переменные попапа редактирования аватарки
export const popupEditAvatar = document.querySelector('.popup_type_edit-avatar');
export const formElementEditAvatar = popupEditAvatar.querySelector('.popup__form');
export const buttonCloseEditAatar = popupEditAvatar.querySelector('.popup__close');
export const buttonEditAvatar = document.querySelector('.avatar__edit');

export const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

export const cardTemplate = document.querySelector('#card-template');
export const popupImageText = document.querySelector('.popup__image_type_text');
export const popupImagePhoto = document.querySelector('.popup__image_type_photo');
export const elementsList = document.querySelector('.elements__list');
export const addCardForm = document.forms.addCard;
export const addCardSave = addCardForm.querySelector('.popup__button-save');
export const titleInput = popupAddElement.querySelector('.popup__input_type_title');
export const linkInput = popupAddElement.querySelector('.popup__input_type_link');

export const editProfileForm = document.forms.editProfile;
export const editProfileSave = editProfileForm.querySelector('.popup__button-save');
export const nameInput = popupEditProfile.querySelector('.popup__input_type_name');
export const jobInput = popupEditProfile.querySelector('.popup__input_type_job');
export const editAvatarForm = document.forms.editAvatar;
export const editAvatarSave = editAvatarForm.querySelector('.popup__button-save');
