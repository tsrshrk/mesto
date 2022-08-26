import PopupWithImage from '../components/PopupWithImage.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {initialCards, profilePopup, profileEditButton, nameInput, professionInput,
  cardAddButton, cardAddPopup, cardTemplate, options} from '../utils/constants.js';

const profilePopupValidator = new FormValidator(options, profilePopup);
  profilePopupValidator.enableValidation();

const cardAddPopupValidator = new FormValidator(options, cardAddPopup);
  cardAddPopupValidator.enableValidation();

const createCard = (el) => {
  const card = new Card(el.name, el.link, cardTemplate, () => {
    imgPopup.open(el.name, el.link);
  });
  return card.generateCard();
}

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    cardList.addItem(createCard(item));
  }}, '.gallery');

cardList.renderItems();

const userData = new UserInfo(
  document.querySelector('.profile__user-name').textContent,
  document.querySelector('.profile__user-profession').textContent
);

const imgPopup = new PopupWithImage('.popup_img');
imgPopup.setEventListeners();

const profileEditForm = new PopupWithForm({
  popupSelector: '.popup_user-data',
  handleFormSubmit: (inputData) => {
    console.log(inputData);
    userData.setUserInfo(inputData);
    profileEditForm.close();
    profilePopupValidator.hideValidationErrors();
  }
});

profileEditForm.setEventListeners();

const cardAddForm = new PopupWithForm({
  popupSelector: '.popup_add-card',
  handleFormSubmit: (inputData) => {
    console.log(inputData);
    cardList.addItem(createCard(inputData));
    cardAddForm.close();
  }
});

cardAddForm.setEventListeners();

profileEditButton.addEventListener('click', () => {
  profileEditForm.open();
  nameInput.value = userData.getUserInfo().name;
  professionInput.value = userData.getUserInfo().prof;
});

cardAddButton.addEventListener('click', () => {
  cardAddForm.open();
  cardAddPopupValidator.hideValidationErrors();
});
