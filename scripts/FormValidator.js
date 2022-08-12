export default class FormValidator {
  constructor (options, formElement) {
    this._formSelector = options.formSelector,
    this._inputSelector = options.inputSelector,
    this._submitButtonSelector = options.submitButtonSelector,
    this._inactiveButtonClass = options.inactiveButtonClass,
    this._inputErrorClass = options.inputErrorClass,
    this._errorClass = options.errorClass,

    this._formElement = formElement,
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector)),
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector)
  }

  _hasInvalidInput() {
    return this._inputList.some((input) => {
      return !input.validity.valid;
    });
  }

  _showInputError = (inputElement, errorMessage) => {
    const span = this._formElement.querySelector(`.popup__error-${inputElement.id}`);
    inputElement.classList.add(this._inputErrorClass);
    span.textContent = errorMessage;
    span.classList.add(this._errorClass);
  }

  _hideInputError = (inputElement) => {
    const span = this._formElement.querySelector(`.popup__error-${inputElement.id}`);
    inputElement.classList.remove(this._inputErrorClass);
    span.classList.remove(this._errorClass);
    span.textContent = '';
  }

  _controlErrorVisibility = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _disableButton = () => {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.disabled = true;
  }

  _enableButton = ()  => {
    this._buttonElement.classList.remove(this._inactiveButtonClass);
    this._buttonElement.disabled = false;
  }

  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this._disableButton();
    } else {
      this._enableButton();
    }
  }

  _setElementListeners = () => {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._controlErrorVisibility(inputElement);
        this._toggleButtonState();
      })
    })
  }

  hideValidationErrors() {
    this._inputList.forEach((el) => {
      this._hideInputError(el);
    });
  }

  enableValidation() {
    this._setElementListeners(
      this._formElement,
      this._inputSelector,
      this._submitButtonSelector,
      this._inputErrorClass,
      this._errorClass,
      this._inactiveButtonClass
      );
  }
}
