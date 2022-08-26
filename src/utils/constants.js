export const initialCards = [
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
export const profilePopup = document.querySelector('.popup_user-data');
export const profileEditButton = document.querySelector('.profile__button-edit');
export const nameInput = document.querySelector('.popup__field_input_name');
export const professionInput = document.querySelector('.popup__field_input_profession');
export const nameField = document.querySelector('.profile__user-name');
export const professionField = document.querySelector('.profile__user-profession');

//add
export const cardAddButton = document.querySelector('.profile__button-add');
export const cardAddPopup = document.querySelector('.popup_add-card');

export const cardTemplate = '#template';

export const options = {
  formSelector: '.popup__form',//форма
  inputSelector: '.popup__field',//input формы
  submitButtonSelector: '.popup__button-submit',//кнопка формы
  inactiveButtonClass: 'popup__button-submit_disabled',//кнопка неактивна
  inputErrorClass: 'popup__field_error',//стиль input при ошибке
  errorClass: 'popup__error_active'//отображение ошибки
}
