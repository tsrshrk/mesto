const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
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

const cardsGallery = document.querySelector('.gallery');
const cardTemplate = document.querySelector('#template').content;

const render = () => {
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
  cardRemoved.remove();
}

const likeHandler = (event) => {
  event.target.classList.toggle('gallery__button-like_active');
}

const fillInputs = () => {
  nameInput.value = profileUserName.textContent;
  professionInput.value = profileUserProfession.textContent;
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

const createCard = (link, name) => {
  const card = cardTemplate.querySelector('.gallery__card').cloneNode(true);
    card.querySelector('.gallery__title').textContent = name;//the same //клонируем содержимое темплейта
  const cardImage = card.querySelector('.gallery__image');
    cardImage.src = link;//по идее должны класть содержимое
    cardImage.alt = name;
  const deleteButton = card.querySelector('.gallery__button-delete');
    deleteButton.addEventListener('click', removeCard);
  const likeButton = card.querySelector('.gallery__button-like');
    likeButton.addEventListener('click', likeHandler);
  return card;//возвращаем готовую карточку
}

const profileFormSubmitHandler = (event) => {
  event.preventDefault();
  if (nameInput.value.trim() != '' && professionInput.value.trim() != '') {
    profileUserName.textContent = nameInput.value;
    profileUserProfession.textContent = professionInput.value;
    handleCloseProfile();
  }
}

profileEditButton.addEventListener('click', handleEditProfile);
profilePopupCloseButton.addEventListener('click', handleCloseProfile);
profileForm.addEventListener('submit', profileFormSubmitHandler);

addCardButton.addEventListener('click', handleAddCard);
addCardPopupCloseButton.addEventListener('click', handleCloseAddCard);
render();
