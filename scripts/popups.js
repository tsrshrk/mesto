const imgPopup = document.querySelector('.popup_img');
const truescaleImg = document.querySelector('.popup__truscale-img');
const truescaleImgTitle = document.querySelector('.popup__truscale-img-title');

const fillImgPopup = (link, name) => {
  truescaleImg.src = link;
  truescaleImg.alt = name;
  truescaleImgTitle.textContent = name;
}

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  window.addEventListener('keydown', handleEscape);
}

export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  window.removeEventListener('keydown', handleEscape);
}

const handleEscape = (evt) => {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

export function handleShowImg(link, name) {
  fillImgPopup(link, name);
  openPopup(imgPopup);
}

const popupList = Array.from(document.querySelectorAll('.popup'));

popupList.forEach((listElement) => {
  listElement.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(listElement);
    }
    if (evt.target.classList.contains('popup__button-close')) {
      closePopup(listElement);
    }
  })
})
