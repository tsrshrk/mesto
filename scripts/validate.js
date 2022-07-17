//ищем хотя бы одно невалидное поле, true - если находим
const hasInvalidInput = (inputList) => {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
}

const showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {
  const span = formElement.querySelector(`.popup__error-${inputElement.id}`);
  inputElement.classList.add(inputErrorClass);
  span.textContent = errorMessage;
  span.classList.add(errorClass);
}

const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
  const span = formElement.querySelector(`.popup__error-${inputElement.id}`);
  inputElement.classList.remove(inputErrorClass);
  span.classList.remove(errorClass);
  span.textContent = '';
}

const controlErrorVisibility = (evt, formElement, inputElement, inputErrorClass, errorClass) => {
  if (!evt.target.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
  } else {
    hideInputError(formElement, inputElement, inputErrorClass, errorClass);
  }
}

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.disabled = false;
  }
}

const setElementListeners = (formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);
  toggleButtonState(inputList, buttonElement, inactiveButtonClass);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', (evt) => {
      controlErrorVisibility(evt, formElement, inputElement, inputErrorClass, errorClass);
      toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    })
  })
}

const enableValidation = (options) => {
  const formList = Array.from(document.querySelectorAll(options.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    })
    setElementListeners(formElement, options.inputSelector, options.submitButtonSelector,
                options.inactiveButtonClass, options.inputErrorClass, options.errorClass);
  })
}

// включение валидации вызовом enableValidation
// все настройки передаются при вызове

enableValidation({
  formSelector: '.popup__form',//форма
  inputSelector: '.popup__field',//input формы
  submitButtonSelector: '.popup__button-submit',//кнопка формы
  inactiveButtonClass: 'popup__button-submit_disabled',//кнопка неактивна
  inputErrorClass: 'popup__field_error',//стиль input при ошибке
  errorClass: 'popup__error_active'//отображение ошибки
});
