import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor (popupSelector, confirmButtonSelector, handleRemoveCard) {
    super(popupSelector);
    this._handleRemoveCard = handleRemoveCard;
    this._confirmButton = this._popup.querySelector(confirmButtonSelector);
  }

  setEventListeners() {
    super.setEventListeners();
    this._confirmButton.addEventListener('click', () => {
      this._handleRemoveCard(this._idCard, this._card);
    })
  }

  open(item, idCard, card) {
    super.open();
    this._item = item;
    this._card = card;
    this._idCard = idCard;
  }
}
