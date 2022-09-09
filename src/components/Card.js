export default class Card {
  constructor(text, image, like, idCard, idMaster, idUser, templateSelector, handleCardClick, handleCardRemove, handleCardLike) {
    this._text = text;
    this._image = image;
    this._like = like;
    this.idCard = idCard;
    this._idMaster = idMaster;
    this._idUser = idUser;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardRemove = handleCardRemove;
    this._handleCardLike = handleCardLike;
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
    this._elementLikeCounter = this._element.querySelector('.gallery__like-counter');
    this._elementLikeButton = this._element.querySelector('.gallery__button-like');
    this._elementDeleteButton = this._element.querySelector('.gallery__button-delete');

    this._elementImage.src = this._image;
    this._elementImage.alt = this._text;
    this._elementTitle.textContent = this._text;
    this._elementLikeCounter.textContent = this._like.length;

    if(this._idMaster != this.idUser) {
      this._elementDeleteButton.classList.add('gallery__button-delete_hidden');
    }

    if(this._like.some((item) => {
      item._id === this._idUser
    })) {
      this._elementLikeButton.classList.add('gallery__button-like_active');
    }

    this._setEventListeners();
    return this._element;
  }

  toggleLikes() {
    this._elementLikeButton.classList.toggle('gallery__button-like_active');
    this._elementLikeCounter.textContent = like.length;
  }

  removeCard() {
    this._element.remove();
    this._element = null;
  }

  likeState() {
    return this._elementLikeButton.classList.contains('gallery__button-like_active');
  }

  _setEventListeners() {
    this._elementImage.addEventListener('click', () => {
      this._handleCardClick();
    });
    this._elementLikeButton.addEventListener('click', () => {
      this._handleCardLike();
    });
    this._elementDeleteButton.addEventListener('click', () => {
      this._handleCardRemove();
    });
  }
}
