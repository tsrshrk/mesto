const editButton = document.querySelector('.profile__button-edit');
const closeButton = document.querySelector('.popup__button-close');
const submitButton = document.querySelector('.popup__button-submit');

let sectionPopup = document.querySelector('.popup');
let form = document.querySelector('.form-userdata');

let name = document.querySelector('.profile__username');
let profession = document.querySelector('.profile__userprofession');

let newName = document.querySelector('input[name="form-username"]');
let newProfession = document.querySelector('input[name="form-userprofession"]');

function openPopup() {
  sectionPopup.classList.add('popup_opened');
}

function closePopup() {
  sectionPopup.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
