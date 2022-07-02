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
    name: 'Камчатка',
    link: 'https://images.unsplash.com/photo-1536080733419-74ac2ba1d039?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1830&q=80'
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
const addCardButton = document.querySelector('.profile__button-add');
const addCardPopup = document.querySelector('.popup_add-card');
const addCardPopupCloseButton = document.querySelector('.popup__button-close-add-card');
const addCardForm = document.querySelector('.popup__form-add-card');
const cardTitleInput = document.querySelector('.popup__field_input_card_title');
const cardImageInput = document.querySelector('.popup__field_input_card_image');

//img
const imgPopup = document.querySelector('.popup_img');
const imgPopupCloseButton = document.querySelector('.popup__button-close-img');
const truescaleImg = document.querySelector('.popup__truscale-img');
const truescaleImgTitle = document.querySelector('.popup__truscale-img-title');

const cardsGallery = document.querySelector('.gallery');
const cardTemplate = document.querySelector('#template').content;

const renderCards = () => {
  initialCards.forEach(el => {   //для каждого элемента (card/el/item) входного массива
    const markup = createCard(el.link, el.name); //генерим карточку с содержимым элемента массива
    cardsGallery.append(markup); //добавляем в DOM
  });
}

const removeCard = (event) => {
  const cardRemoved = event.target.closest('.gallery__card');
  const deleteButton = cardRemoved.querySelector('.gallery__button-delete');
    deleteButton.removeEventListener('click', removeCard);
  const likeButton = cardRemoved.querySelector('.gallery__button-like');
    likeButton.removeEventListener('click', likeHandler);
  const cardImage = cardRemoved.querySelector('.gallery__image');
    cardImage.removeEventListener('click', handleShowImg);
  cardRemoved.remove();
}

const likeHandler = (event) => {
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
}

const handleEditProfile = () => {
  fillInputs();
  openPopup(profilePopup);
}

const handleAddCard = () => {
  openPopup(addCardPopup);
}

const handleShowImg = (link, name) => {
  fillImgPopup(link, name);
  openPopup(imgPopup);
}

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
}

const handleCloseProfile = () => {
  nameInput.value = '';
  professionInput.value = '';
  closePopup(profilePopup);
}

const handleCloseAddCard = () => {
  cardTitleInput.value = '';
  cardImageInput.value = '';
  closePopup(addCardPopup);
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
  const deleteButton = card.querySelector('.gallery__button-delete');
    deleteButton.addEventListener('click', removeCard);
  const likeButton = card.querySelector('.gallery__button-like');
    likeButton.addEventListener('click', likeHandler);
  return card;
}

const profileFormSubmitHandler = (event) => {
  event.preventDefault();
  if (nameInput.value.trim() != '' && professionInput.value.trim() != '') {
    profileUserName.textContent = nameInput.value;
    profileUserProfession.textContent = professionInput.value;
    handleCloseProfile();
  }
}

const addCardFormSubmitHandler = (event) => {
  event.preventDefault();
  if (cardTitleInput.value.trim() != '' && cardImageInput.value.trim() != '') {
    const link = cardImageInput.value;
    const name = cardTitleInput.value;
    const markup = createCard(link, name);
    cardsGallery.prepend(markup);
    handleCloseAddCard();
  }
}

profileEditButton.addEventListener('click', handleEditProfile);
profilePopupCloseButton.addEventListener('click', handleCloseProfile);
profileForm.addEventListener('submit', profileFormSubmitHandler);

addCardButton.addEventListener('click', handleAddCard);
addCardPopupCloseButton.addEventListener('click', handleCloseAddCard);
addCardForm.addEventListener('submit', addCardFormSubmitHandler);

imgPopupCloseButton.addEventListener('click', handleCloseImgPopup);

renderCards();
