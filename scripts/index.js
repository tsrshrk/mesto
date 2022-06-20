const profileEditButton = document.querySelector('.profile__button-edit');
const popupCloseButton = document.querySelector('.popup__button-close');
const popupSubmitButton = document.querySelector('.popup__button-submit');

const popup = document.querySelector('.popup');
const form = document.querySelector('.popup__form');

const profileUserName = document.querySelector('.profile__user-name');
const profileUserProfession = document.querySelector('.profile__user-profession');

const nameInput = document.querySelector('.popup__field_input_name');
const professionInput = document.querySelector('.popup__field_input_profession');

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
