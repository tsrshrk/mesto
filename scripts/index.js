const initialCards = [
  {
    name: 'Ольхон',
    link: 'https://images.unsplash.com/photo-1548130516-2ca6aaeb84b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
  },
  {
    name: 'Карелия',
    link: 'https://images.unsplash.com/photo-1573156667495-f14c98bc2ebc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  },
  {
    name: 'Эльбрус',
    link: 'https://images.unsplash.com/photo-1534371404968-9b0eec515b5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80'
  },
  {
    name: 'Крым',
    link: 'https://images.unsplash.com/photo-1546628122-2ff107f2d27f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
  },
  {
    name: 'Таганай',
    link: 'https://images.unsplash.com/photo-1624128929438-5334bddffcbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80'
  },
  {
    name: 'Казанский собор',
    link: 'https://images.unsplash.com/photo-1594397394907-096148b9d1c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  }
];

//profile
const profilePopup = document.querySelector('.popup_user-data');
const profileEditButton = document.querySelector('.profile__button-edit');
const profilePopupCloseButton = document.querySelector('.popup__button-close-profile');
const profileUserName = document.querySelector('.profile__user-name');
const profileUserProfession = document.querySelector('.profile__user-profession');
const profileForm = document.querySelector('.popup__form-data');
const nameInput = document.querySelector('.popup__field_input_name');
const professionInput = document.querySelector('.popup__field_input_profession');

//add
const cardAddButton = document.querySelector('.profile__button-add');
const cardAddPopup = document.querySelector('.popup_add-card');
const cardAddPopupCloseButton = document.querySelector('.popup__button-close-add-card');
const cardAddForm = document.querySelector('.popup__form-add-card');
const cardTitleInput = document.querySelector('.popup__field_input_card-title');
const cardImageInput = document.querySelector('.popup__field_input_card-image');

//img
const imgPopup = document.querySelector('.popup_img');
const imgPopupCloseButton = document.querySelector('.popup__button-close-img');
const truescaleImg = document.querySelector('.popup__truscale-img');
const truescaleImgTitle = document.querySelector('.popup__truscale-img-title');

const cardsGallery = document.querySelector('.gallery');
const cardTemplate = document.querySelector('#template').content;

const popupList = Array.from(document.querySelectorAll('.popup'));

const renderCards = () => {
  initialCards.forEach(el => {   //для каждого элемента (card/el/item) входного массива
    const markup = createCard(el.link, el.name); //генерим карточку с содержимым элемента массива
    cardsGallery.append(markup); //добавляем в DOM
  });
}

const removeCard = (event) => {
  const cardRemoved = event.target.closest('.gallery__card');
  cardRemoved.remove();
}

const handleLikeButton = (event) => {
  event.target.classList.toggle('gallery__button-like_active');
}

const fillInputs = () => {
  nameInput.value = profileUserName.textContent;
  professionInput.value = profileUserProfession.textContent;
}

const fillImgPopup = (link, name) => {
  truescaleImg.src = link;
  truescaleImg.alt = name;
  truescaleImgTitle.textContent = name;
}

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  window.addEventListener('keydown', handleEscape);
}

//кнопка всегда неактивна при открытии
const disableButton = (popup) => {
  const buttonElement = popup.querySelector('.popup__button-submit');
  buttonElement.classList.add('popup__button-submit_disabled');
  buttonElement.disabled = true;
}

const handleEditProfile = () => {
  fillInputs();
  disableButton(profilePopup);
  openPopup(profilePopup);
}

const handleAddCard = () => {
  cardAddForm.reset();
  disableButton(cardAddPopup);
  openPopup(cardAddPopup);
}

const handleShowImg = (link, name) => {
  fillImgPopup(link, name);
  openPopup(imgPopup);
}

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  window.removeEventListener('keydown', handleEscape);
}

const handleEscape = (evt) => {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    handleCloseOverlay(popupOpened);
  }
}

const handleCloseProfile = () => {
  closePopup(profilePopup);
}

const handleCloseAddCard = () => {
  closePopup(cardAddPopup);
}

const handleCloseImgPopup = () => {
  closePopup(imgPopup);
}

const createCard = (link, name) => {
  const card = cardTemplate.querySelector('.gallery__card').cloneNode(true);
    card.querySelector('.gallery__title').textContent = name;
  const cardImage = card.querySelector('.gallery__image');
    cardImage.src = link;
    cardImage.alt = name;
    cardImage.addEventListener('click', () => handleShowImg(link, name));
  const buttonDelete = card.querySelector('.gallery__button-delete');
    buttonDelete.addEventListener('click', removeCard);
  const buttonLike = card.querySelector('.gallery__button-like');
    buttonLike.addEventListener('click', handleLikeButton);
  return card;
}

const saveInputs = () => {
  profileUserName.textContent = nameInput.value;
  profileUserProfession.textContent = professionInput.value;
}

const profileFormSubmitHandler = () => {
  saveInputs();
  handleCloseProfile();
}

const addCardFormSubmitHandler = () => {
  const link = cardImageInput.value;
  const name = cardTitleInput.value;
  const markup = createCard(link, name);
  cardsGallery.prepend(markup);
  handleCloseAddCard();
}

const handleCloseOverlay = (popup) => {
  if (popup.classList.contains('popup_img')) {
    handleCloseImgPopup();
  } else if (popup.classList.contains('popup_add-card')) {
    handleCloseAddCard();
  } else {
    handleCloseProfile();
  }
}

popupList.forEach((listElement) => {
  listElement.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      handleCloseOverlay(listElement);
    }
  })
})

profileEditButton.addEventListener('click', handleEditProfile);
profilePopupCloseButton.addEventListener('click', handleCloseProfile);
profileForm.addEventListener('submit', profileFormSubmitHandler);

cardAddButton.addEventListener('click', handleAddCard);
cardAddPopupCloseButton.addEventListener('click', handleCloseAddCard);
cardAddForm.addEventListener('submit', addCardFormSubmitHandler);

imgPopupCloseButton.addEventListener('click', handleCloseImgPopup);

renderCards();
