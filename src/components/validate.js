export const showError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
 };

 // функция скрытия ошибки
export const hideError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup__input-error_active');
  errorElement.textContent = '';
 };

// функция проверки на валидность
export const checkInputValidity = (formElement, inputElement) => {
  if (inputElement.dataset.reg && new RegExp(inputElement.dataset.reg).test(inputElement.value)) {
    showError(formElement, inputElement, inputElement.dataset.status);
  } else if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideError(formElement, inputElement);
  }
};

// функция проверки на валидность
export const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}

// функция изменения активности кнопки "Сохранить"
export const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    buttonElement.disabled = true;
    buttonElement.classList.add('popup__button-save_disabled');
  } else {
    // иначе сделай кнопку активной
    buttonElement.disabled = false;
    buttonElement.classList.remove('popup__button-save_disabled');
  }
}

// функция проверки на валидность всех полей каждый клик
export const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonSave = formElement.querySelector('.popup__button-save');
  toggleButtonState(inputList, buttonSave);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonSave);
    });
  });
}

// функция проверки на валидность введенного поля
export const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
}
