import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor (popupSelector) {
    super(popupSelector);
    this._truescaleImg = this._popup.querySelector('.popup__truscale-img');
    this._truescaleImgTitle = this._popup.querySelector('.popup__truscale-img-title');
  }

  open(name, link) {
    this._truescaleImg.src = link;
    this._truescaleImg.alt = name;
    this._truescaleImgTitle.textContent = name;
    super.open();
  }
}
