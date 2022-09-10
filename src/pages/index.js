import './index.css';
import PopupWithImage from '../components/PopupWithImage.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {profilePopup, profileEditButton, nameInput, professionInput,
  cardAddButton, cardAddPopup, cardTemplate, options, profileEditAvatar, profileAvatarButton} from '../utils/constants.js';
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

const cardList = new Section((item) => {
  cardList.addItem(createCard(item, userInfo.Id));
}, '.gallery');

const profileEditForm = new PopupWithForm({
  popupSelector: '.popup_user-data',
  handleFormSubmit: (inputData) => {
    console.log(inputData);
    profileEditForm.loading(true, 'Сохранение...');
    api.patchUserInfo(inputData)
      .then((data) => {
        userInfo.setUserInfo(data);
        profileEditForm.close(); 
      })
      .catch(function(res) {
        console.log('Ошибка при сохранении данных: ' + res);
      })
      .finally(() => {
        profileEditForm.loading(false, 'Сохранить');
      });
  }
});

profileEditForm.setEventListeners();

profileEditButton.addEventListener('click', () => {
  profileEditForm.open();
  profilePopupValidator.hideValidationErrors();
  nameInput.value = userInfo.getUserInfo().name;
  professionInput.value = userInfo.getUserInfo().prof;
});

const cardAddForm = new PopupWithForm({
  popupSelector: '.popup_add-card',
  handleFormSubmit: (inputData) => {
    console.log(inputData);
    cardAddForm.loading(true, 'Создание...');
    api.addNewCard(inputData)
      .then((data) => {
        cardList.addItem(createCard(data, userInfo.Id));
        cardAddForm.close();
      })
      .catch(function(res) {
        console.log(`Ошибка при сохранении карты: ` + res);
      })
      .finally(() => {
        cardAddForm.loading(true, 'Создать');
      });
  }
});

cardAddForm.setEventListeners();

cardAddButton.addEventListener('click', () => {
  cardAddForm.open();
  cardAddPopupValidator.hideValidationErrors();
});

const imgPopup = new PopupWithImage('.popup_img');
imgPopup.setEventListeners();

const popupConfirmForm = new PopupWithConfirm('.popup_confirm', '.popup__button-submit', 
  (Idcard, card) => {
    api.removeCard(Idcard)
      .then(() => {
        card.removeItem();
        popupConfirmForm.close();
      })
      .catch(function(res) {
        console.log(`Ошибка при удалении карты: ` + res);
      });
});

popupConfirmForm.setEventListeners();

const profileEditAvatarForm = new PopupWithForm({
  popupSelector: '.popup_user-avatar',
  handleFormSubmit: (inputData) => {
    console.log(inputData);
    profileEditAvatarForm.loading(true, 'Сохранение...');
    api.patchUserAvatar(inputData)
      .then((data) => {
        userInfo.setUserInfo(data);
        profileEditAvatarForm.close();
      })
      .catch(function(res) {
        console.log('Ошибка при сохранении данных: ' + res);
      })
      .finally(() => {
        profileEditAvatarForm.loading(false, 'Сохранить');
      });
  }
});

profileEditAvatarForm.setEventListeners();

profileAvatarButton.addEventListener('click', () => {
  profileEditAvatarForm.open();
  profilePopupAvatarValidator.hideValidationErrors();
})

Promise.all([
    api.getUserInfo(), 
    api.getInitialCards()])
  .then(([userData, initialCards]) => { 
    userInfo.setUserInfo(userData);
    cardList.renderItems(initialCards);
})
  .catch((err) => {
    console.log(`Ошибка при загрузке данных: ` + err);
})

const profilePopupValidator = new FormValidator(options, profilePopup);
  profilePopupValidator.enableValidation();

const cardAddPopupValidator = new FormValidator(options, cardAddPopup);
  cardAddPopupValidator.enableValidation();

const profilePopupAvatarValidator = new FormValidator(options, profileEditAvatar);
  profilePopupAvatarValidator.enableValidation();

const createCard = (el, idUser) => {
  const card = new Card(el.name, el.link, el.like, el._id, el.Master._id, idUser, templateSelector, 
    () => {    
      imgPopup.open(el.name, el.link);
    }, () => {
      popupConfirmForm.open(newCard, card.idCard, card);
    }, () => {
      if (card.likeState()) {  
        api.makeDislike(card.idCard)
          .then((data) => {
            card.toggleLikes(data.likes);
        })
        .catch(function(res) {
          console.log(`Ошибка при удалении лайка: ` + res);
        });
      } else {
        api.makeLike(card.idCard)
            .then((data) => {
              card.toggleLikes(data.likes);
            })
            .catch(function(res) {
              console.log(`Ошибка при сохранении лайка: ` + res);
            });
      }
    }
  );

  const newCard = card.generateCard();
  return newCard;
}


