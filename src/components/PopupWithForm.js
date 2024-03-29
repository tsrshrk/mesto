import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._popup.querySelectorAll('.popup__field');
  }

  _getInputValues() {
    this._formValues = {}; //готовим пустой объект
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value; //заносим в объект значения всех полей
    });
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this._form.reset();
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
