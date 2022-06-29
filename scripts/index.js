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

function render() {
  initialCards.forEach(function(item) {
    const card = cardTemplate.querySelector('.gallery__card').cloneNode(true);
    card.querySelector('.gallery__image').src = item.link;
    card.querySelector('.gallery__title').textContent = item.name;
    const deleteButton = card.querySelector('.gallery__button-delete');
    deleteButton.addEventListener('click', removeCard);
    cardsGallery.append(card);
  });
}

function removeCard(event) {
  event.target.closest('.gallery__card').remove();
}

function fillInputs() {
  nameInput.value = profileUserName.textContent;
  professionInput.value = profileUserProfession.textContent;
}

function openPopup() {
  fillInputs();
  popup.classList.add('popup_opened');
}

function closePopup() {
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
