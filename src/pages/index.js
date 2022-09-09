import './index.css';
import PopupWithImage from '../components/PopupWithImage.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {profilePopup, profileEditButton, nameInput, professionInput,
  cardAddButton, cardAddPopup, cardTemplate, options, nameField, professionField, profileAvatar, profileAvatarButton} from '../utils/constants.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import Api from '../components/Api.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-49',
  headers: {
    authorization: '66dba6b5-333b-43ce-bfad-80e11ad70514',
    'Content-Type': 'application/json'
  }
});

const userInfo = new UserInfo('.profile__user-name', '.profile__user-profession', '.profile__user-avatar');

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

const userData = new UserInfo(
  nameField.textContent,
  professionField.textContent
);

const imgPopup = new PopupWithImage('.popup_img');

const profileEditForm = new PopupWithForm({
  popupSelector: '.popup_user-data',
  handleFormSubmit: (inputData) => {
    console.log(inputData);
    userData.setUserInfo(inputData);
    profileEditForm.close();
    profilePopupValidator.hideValidationErrors();
  }
});

const cardAddForm = new PopupWithForm({
  popupSelector: '.popup_add-card',
  handleFormSubmit: (inputData) => {
    console.log(inputData);
    cardList.addItem(createCard(inputData));
    cardAddForm.close();
  }
});

const cardList = new Section({
  items: initialCards.reverse(),
  renderer: (item) => {
    cardList.addItem(createCard(item));
  }}, '.gallery');

imgPopup.setEventListeners();
profileEditForm.setEventListeners();
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

cardList.renderItems();
