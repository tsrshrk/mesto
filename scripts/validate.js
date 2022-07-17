//ищем хотя бы одно невалидное поле, true - если находим
const hasInvalidInput = (inputList) => {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
}



// включение валидации вызовом enableValidation
// все настройки передаются при вызове

enableValidation({
  formSelector: '.popup__form',//форма
  inputSelector: '.popup__field',//input формы
  submitButtonSelector: '.popup__button-submit',//кнопка формы
  inactiveButtonClass: 'popup__button-submit_disabled',//кнопка неактивна
  inputErrorClass: 'popup__field_error',//стиль input при ошибке
  errorClass: 'popup__error_active'//отображение ошибки
});
