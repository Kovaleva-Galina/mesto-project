export const showError = (formElement, inputElement, errorMessage, setting) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(setting.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(setting.errorClass);
 };

 // функция скрытия ошибки
export const hideError = (formElement, inputElement, setting) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(setting.inputErrorClass);
  errorElement.classList.remove(setting.errorClass);
  errorElement.textContent = '';
 };

const hasInputValidRegExp = (inputElement) => {
  if (inputElement.dataset.reg && new RegExp(inputElement.dataset.reg).test(inputElement.value)) {
    return false;
  }
  return true;
}

// функция проверки на валидность
export const checkInputValidity = (formElement, inputElement, setting) => {
  if (!hasInputValidRegExp(inputElement)) {
    showError(formElement, inputElement, inputElement.dataset.status, setting);
  } else if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage, setting);
  } else {
    hideError(formElement, inputElement, setting);
  }
};

// функция проверки на валидность
export const hasInvalidInputs = (inputList) => {
  return inputList.some((inputElement) => {
    return !hasInputValidRegExp(inputElement) || !inputElement.validity.valid;
  });
}

// функция изменения активности кнопки "Сохранить"
export const validateSaveButton = (formElement, settings) => {
  const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
  const buttonElement = formElement.querySelector(settings.submitButtonSelector);
  if (hasInvalidInputs(inputList)) {
    // сделай кнопку неактивной
    buttonElement.disabled = true;
    buttonElement.classList.add(settings.inactiveButtonClass);
  } else {
    // иначе сделай кнопку активной
    buttonElement.disabled = false;
    buttonElement.classList.remove(settings.inactiveButtonClass);
  }
}

// функция проверки на валидность всех полей каждый клик
export const setEventListeners = (formElement, settings) => {
  const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
  validateSaveButton(formElement, settings);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, settings);
      validateSaveButton(formElement, settings);
    });
  });
}

export const validateInputs = (formElement, settings) => {
  const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
  inputList.forEach((inputElement) => {
    checkInputValidity(formElement, inputElement, settings);
  });
}

// функция проверки на валидность введенного поля
export const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      validateSaveButton(formElement, settings);
    });
    setEventListeners(formElement, settings);
  });
}
