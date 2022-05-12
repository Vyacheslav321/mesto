// Переменные и постоянные
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const popupOpenedClass = "popup_opened";
const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"};

//
//темплейт карточек
const cardTemplate = document.querySelector("#card-template").content;
const elements = document.querySelector(".elements");

//объявляю все попапы
const popups = document.querySelectorAll('.popup');

////обьявляю попап name
const popupElementEditBio = document.querySelector(".popup_type_edit-bio");
//поля карточки изменения имени/работы
const popupName = popupElementEditBio.querySelector(".popup__input_type_name");
const popupWork = popupElementEditBio.querySelector(".popup__input_type_work");
//обьявляю кнопки закрытия и сохранения формы
const formSaveName = popupElementEditBio.querySelector(".popup__form");
//поля вывода имени/работы
const profileName = document.querySelector(".profile__name");
const profileWork = document.querySelector(".profile__work");

////обьявляю попап pic
const popupElementEditPic = document.querySelector(".popup_type_edit-pic");
//поля карточки добавления фото
const popupPicName = popupElementEditPic.querySelector(
  ".popup__input_type_picname"
);
const popupPicUrl = popupElementEditPic.querySelector(
  ".popup__input_type_picurl"
);
//обьявляю кнопки закрытия и сохранения формы
const formSavePic = popupElementEditPic.querySelector(".popup__form");
const saveButtonPic = popupElementEditPic.querySelector(settings.submitButtonSelector);

////обьявляю попап фото
const popupBigPicture = document.querySelector(".popup_type_bigpicture");
//поля вывода просмотра фото
const pictureImg = popupBigPicture.querySelector(".popup__picture");
const pictureText = popupBigPicture.querySelector(".popup__text");

//обьявляю батоны открытия
const profileEdit = document.querySelector(".profile__button-edit");
const photoAdd = document.querySelector(".profile__button-add");
// //обьявляю батоны закрытия
const closeEdit = document.querySelector(".popup__close-button_type_edit-bio");
const closePic = document.querySelector(".popup__close-button_type_edit-pic");
const closePicture = document.querySelector(".popup__close-button_type_picture");

//функция генерации карточки и прослушки событий
import { Card } from './card.js';
import { FormValidator } from './FormValidator.js';

function prependCard(element, Card) {
  element.prepend(Card);
}

// Рисую в DOM карточки с фотографиями
//генерирую страницу из массива по умолчанию
initialCards.forEach((item) => {
  const cardElement = new Card (item.name, item.link, handlePopupImage).generateCard();
  prependCard(elements, cardElement);
});

// выход по ESC
function handleEscape(event) {
  if (event.key === "Escape") {
    const activePopup = document.querySelector(".popup_opened");
    handleclosePopup(activePopup);
  }
}

//функция открытия попапа
function handleOpenPopup(popup) {
  popup.classList.add(popupOpenedClass);
  document.addEventListener("keyup", handleEscape);
}

//функция закрытия попапа
function handleclosePopup(popup) {
  popup.classList.remove(popupOpenedClass);
  document.removeEventListener("keyup", handleEscape);
}

//функция закрытия попапа по нажатию на оверлей и крестик
//прохожу по всем найденным попапам
popups.forEach((popup) => {
  //вешаю прослушивание нажатия мыши на эти попапы
  popup.addEventListener('mousedown', (evt) => {
    //если элемент, на котором произошло событие
    //содержит класс popup_opened (пространство вне контейнера попапа)
    if (evt.target.classList.contains('popup_opened')) {
      //закрываю попап
      handleclosePopup(popup);
    }
    //или содержит класс popup__close-button (сам крестик)
    if (evt.target.classList.contains('popup__close-button')) {
      //закрываю попап
      handleclosePopup(popup);
    }
  });
});


//функция открытия попапа Name
function handleOpenPopupName() {
  //получаю значения полей попапа со страницы
  popupName.value = profileName.textContent;
  popupWork.value = profileWork.textContent;
  //открываю попап
  handleOpenPopup(popupElementEditBio);
}

export function handlePopupImage(picName, picUrl) {
  pictureImg.src = picUrl;
  pictureImg.alt = picName;
  pictureText.textContent = picName;
  handleOpenPopup(popupBigPicture);
}

//функция закрытия и сохранения попапа Name
function handleName(evt) {
  //сброс стандартной обработки события
  evt.preventDefault();
  //передаю значения полей попапа на страницу
  profileName.textContent = popupName.value;
  profileWork.textContent = popupWork.value;
  //закрываю попап
  handleclosePopup(popupElementEditBio);
}

//функция закрытия и сохранения попапа Pic
function handlePic(evt) {
  //сброс стандартной обработки события
  evt.preventDefault();
  //выбираю текущую форму
  const currentForm = evt.target;
  //генерация новой карточки с прослушкой событий
  const newCard = new Card(popupPicName.value, popupPicUrl.value);
  const cardElement = newCard.generateCard();
  //добавляю карточку в ДОМ
  prependCard(elements, cardElement);
  //сбрасываю форму
  currentForm.reset();
  //и деактевирую кнопку отправки
  saveButtonPic.classList.add(settings.inactiveButtonClass);
  saveButtonPic.disabled = true;
  //закрываю попап
  handleclosePopup(popupElementEditPic);
}

//запускаю проверки для форм Name и Pic
new FormValidator(settings, formSaveName).enableValidation();
new FormValidator(settings, formSavePic).enableValidation();

//слушаю клики по кнопкам открыть окно
profileEdit.addEventListener("click", handleOpenPopupName);
photoAdd.addEventListener("click", () => {
  handleOpenPopup(popupElementEditPic);
});

//слушаю клики на закрытие и сохранение
formSaveName.addEventListener("submit", handleName);
formSavePic.addEventListener("submit", handlePic);
