const editButton = document.querySelector('.profile__button-edit');
const closeButton = document.querySelector('.popup__button-close');
const submitButton = document.querySelector('.popup__button-submit');

let sectionPopup = document.querySelector('.popup');
let form = document.querySelector('.form-userdata');

let nameDoc = document.querySelector('.profile__username');
let profession = document.querySelector('.profile__userprofession');

let newName = document.querySelector('input[name="form-username"]');
let newProfession = document.querySelector('input[name="form-userprofession"]');

function fieldsFull() {
  newName.value = nameDoc.textContent;
  newProfession.value = profession.textContent;
}

function openPopup() {
  sectionPopup.classList.add('popup_opened');
  fieldsFull();
}

function closePopup() {
  sectionPopup.classList.remove('popup_opened');
}

function fieldsSave (evt) { //для submit (!)
  evt.preventDefault();
  if (newName.value.trim() != '' && newProfession.value.trim() != '') {
  nameDoc.textContent = newName.value;
  profession.textContent = newProfession.value;
  closePopup();
  }
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
submitButton.addEventListener('click', fieldsSave); //переделать на submit в следующем спринте
