import { openPopup, closePopup } from './popups.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';

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
const profileUserName = document.querySelector('.profile__user-name');
const profileUserProfession = document.querySelector('.profile__user-profession');
const profileForm = document.querySelector('.popup__form-data');
const nameInput = document.querySelector('.popup__field_input_name');
const professionInput = document.querySelector('.popup__field_input_profession');

//add
const cardAddButton = document.querySelector('.profile__button-add');
const cardAddPopup = document.querySelector('.popup_add-card');
const cardAddForm = document.querySelector('.popup__form-add-card');
const cardTitleInput = document.querySelector('.popup__field_input_card-title');
const cardImageInput = document.querySelector('.popup__field_input_card-image');

const cardsGallery = document.querySelector('.gallery');
const cardTemplate = '#template';

const options = {
  formSelector: '.popup__form',//форма
  inputSelector: '.popup__field',//input формы
  submitButtonSelector: '.popup__button-submit',//кнопка формы
  inactiveButtonClass: 'popup__button-submit_disabled',//кнопка неактивна
  inputErrorClass: 'popup__field_error',//стиль input при ошибке
  errorClass: 'popup__error_active'//отображение ошибки
}

const fillInputs = () => {
  nameInput.value = profileUserName.textContent;
  professionInput.value = profileUserProfession.textContent;
}

const handleEditProfile = () => {
  profileForm.reset();
  startValidation();
  fillInputs();
  openPopup(profilePopup);
}

const handleAddCard = () => {
  cardAddForm.reset();
  startValidation();
  openPopup(cardAddPopup);
}

const createCard = (el) => {
  const card = new Card(el.name, el.link, cardTemplate);
  return card.generateCard();
}

initialCards.forEach((el) => {
  cardsGallery.append(createCard(el));
});

const saveInputs = () => {
  profileUserName.textContent = nameInput.value;
  profileUserProfession.textContent = professionInput.value;
}

const preventSubmit = (evt) => {
  evt.preventDefault();
}

const profileFormSubmitHandler = (evt) => {
  preventSubmit(evt);
  saveInputs();
  closePopup(profilePopup);
}

const addCardFormSubmitHandler = (evt) => {
  preventSubmit(evt);
  cardsGallery.prepend(createCard({name: cardTitleInput.value, link: cardImageInput.value}));
  closePopup(cardAddPopup);
}

profileEditButton.addEventListener('click', handleEditProfile);
profileForm.addEventListener('submit', profileFormSubmitHandler);

cardAddButton.addEventListener('click', handleAddCard);
cardAddForm.addEventListener('submit', addCardFormSubmitHandler);

const formList = Array.from(document.querySelectorAll(options.formSelector));

const startValidation = () => {
  formList.forEach((formElement) => {
    const form = new FormValidator(options, formElement);
    form.hideValidationErrors();
    form.enableValidation();
  });
}
