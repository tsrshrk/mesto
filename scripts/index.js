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

const profileEditButton = document.querySelector('.profile__button-edit');
const popupCloseButton = document.querySelector('.popup__button-close');

const popup = document.querySelector('.popup');
const form = document.querySelector('.popup__form');

const profileUserName = document.querySelector('.profile__user-name');
const profileUserProfession = document.querySelector('.profile__user-profession');

const nameInput = document.querySelector('.popup__field_input_name');
const professionInput = document.querySelector('.popup__field_input_profession');

const cardsGallery = document.querySelector('.gallery');
const cardTemplate = document.querySelector('#template').content;

const createCard = (link, name) => {
  const card = cardTemplate.querySelector('.gallery__card').cloneNode(true); //клонируем содержимое темплейта
  const cardImage = card.querySelector('.gallery__image');
    cardImage.src = link;//по идее должны класть содержимое
    cardImage.alt = name;
    card.querySelector('.gallery__title').textContent = name;//the same
    const deleteButton = card.querySelector('.gallery__button-delete');
    deleteButton.addEventListener('click', removeCard);
    const likeButton = card.querySelector('.gallery__button-like');
    likeButton.addEventListener('click', likeHandler);
    console.log(card);
  return card;//возвращаем готовую карточку
}

const render = () => {
  initialCards.forEach(el => {   //для каждого элемента (card/el/item) входного массива
    const markup = createCard(el.link, el.name); //генерим карточку с содержимым элемента массива
    cardsGallery.append(markup); //добавляем в DOM
  });
}

function removeCard(event) {
  const cardRemoved = event.target.closest('.gallery__card');
  const deleteButton = cardRemoved.querySelector('.gallery__button-delete');
  deleteButton.removeEventListener('click', removeCard);
  const likeButton = cardRemoved.querySelector('.gallery__button-like');
  likeButton.removeEventListener('click', likeHandler);
  cardRemoved.remove();
}

function likeHandler(event) {
  event.target.classList.toggle('gallery__button-like_active');
}

function fillInputs() {
  nameInput.value = profileUserName.textContent;
  professionInput.value = profileUserProfession.textContent;
}

function openPopup() {
  fillInputs();
  popup.classList.add('popup_opened');
}

function closePopup() {//TODO clear popup
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(event) {
  event.preventDefault();
  if (nameInput.value.trim() != '' && professionInput.value.trim() != '') {
    profileUserName.textContent = nameInput.value;
    profileUserProfession.textContent = professionInput.value;
    closePopup();
  }
}

profileEditButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
form.addEventListener('submit', formSubmitHandler);
render();
