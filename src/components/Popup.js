export default class Popup {
  constructor (popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._buttonSubmit = this._popup.querySelector('.popup__button-submit');
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__button-close')) {
        this.close();
      };
    });
  }

  loading(isLoading, message) {
    if (isLoading) {
      this._buttonSubmit.textContent = message;
    } else {
      this._buttonSubmit.textContent = message;
    }
  }
}
