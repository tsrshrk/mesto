//profile
export const profilePopup = document.querySelector('.popup_user-data');
export const profileEditButton = document.querySelector('.profile__button-edit');
export const nameInput = document.querySelector('.popup__field_input_name');
export const professionInput = document.querySelector('.popup__field_input_profession');
export const nameField = document.querySelector('.profile__user-name');
export const professionField = document.querySelector('.profile__user-profession');
export const profileAvatar = document.querySelector('.popup_user-avatar');
export const profileAvatarButton = document.querySelector('.profile__button-edit-avatar');

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
