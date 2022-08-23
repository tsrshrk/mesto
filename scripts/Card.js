export default class Card {
  constructor(text, image, templateSelector, handleCardClick) {
    this._text = text;
    this._image = image;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector)
    .content.querySelector('.gallery__card').cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._elementTitle = this._element.querySelector('.gallery__title');
    this._elementImage = this._element.querySelector('.gallery__image');
    this._elementLikeButton = this._element.querySelector('.gallery__button-like');
    this._elementDeleteButton = this._element.querySelector('.gallery__button-delete');

    this._elementImage.src = this._image;
    this._elementImage.alt = this._text;
    this._elementTitle.textContent = this._text;

    this._setEventListeners();

    return this._element;
  }

  _handleLikeClick() {
    this._elementLikeButton.classList.toggle('gallery__button-like_active');
  }

  _handleDeleteClick() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._elementImage.addEventListener('click', () => {
      this._handleCardClick();
    });
    this._elementLikeButton.addEventListener('click', () => {
      this._handleLikeClick();
    });
    this._elementDeleteButton.addEventListener('click', () => {
      this._handleDeleteClick();
    });
  }
}
