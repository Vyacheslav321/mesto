//карточки по-умолчанию
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
//селекторы и классы
const cardTemplate = '#card-template';
const popupOpenedClass = "popup_opened";
const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"};

//темплейт карточек
const elements = document.querySelector(".elements");
//объявляю все попапы
const popups = document.querySelectorAll('.popup');
//обьявляю попап изменения имени/работы (name)
const popupElementEditBio = document.querySelector(".popup_type_edit-bio");
//поля карточки изменения имени/работы (name)
const popupName = popupElementEditBio.querySelector(".popup__input_type_name");
const popupWork = popupElementEditBio.querySelector(".popup__input_type_work");
const formSaveName = popupElementEditBio.querySelector(".popup__form");  //форма изменения имени/работы (name)
//поля вывода имени/работы в форме (name)
const profileName = document.querySelector(".profile__name");
const profileWork = document.querySelector(".profile__work");
//обьявляю попап добавления карточки (pic)
const popupElementEditPic = document.querySelector(".popup_type_edit-pic");
//поля формы добавления карточки (pic)
const popupPicName = popupElementEditPic.querySelector(
  ".popup__input_type_picname"
);
const popupPicUrl = popupElementEditPic.querySelector(
  ".popup__input_type_picurl"
);
const formSavePic = popupElementEditPic.querySelector(".popup__form");  //фома добавления карточки (pic)
const saveButtonPic = popupElementEditPic.querySelector(settings.submitButtonSelector);  //кнопка сохранения в форме добавления карточки (pic)
//обьявляю попап фото
const popupBigPicture = document.querySelector(".popup_type_bigpicture");
//поля вывода просмотра фото
const pictureImg = popupBigPicture.querySelector(".popup__picture");
const pictureText = popupBigPicture.querySelector(".popup__text");

//кнопки открытия форм
const profileEdit = document.querySelector(".profile__button-edit");
const photoAdd = document.querySelector(".profile__button-add");


//функция генерации карточки и прослушки событий
import { Card } from './card.js';
import { FormValidator } from './FormValidator.js';

// Рисую в DOM карточки с фотографиями
function prependCard(element, Card) {
  element.prepend(Card);
}

//генерирую страницу из массива по умолчанию
initialCards.forEach((item) => {
  const cardElement = new Card (item.name, item.link, cardTemplate).generateCard();
  prependCard(elements, cardElement);
});

// выход по ESC
function handleEscape(event) {
  if (event.key === "Escape") {
    const activePopup = document.querySelector(".popup_opened");
    handleClosePopup(activePopup);
  }
}

//функция открытия попапа
function handleOpenPopup(popup) {
  popup.classList.add(popupOpenedClass);
  document.addEventListener("keyup", handleEscape);
}

//функция закрытия попапа
function handleClosePopup(popup) {
  popup.classList.remove(popupOpenedClass);
  document.removeEventListener("keyup", handleEscape);
}

//функция закрытия попапа по нажатию на оверлей и крестик
popups.forEach((popup) => {  //прохожу по всем найденным попапам
  popup.addEventListener('mousedown', (evt) => {  //вешаю прослушивание нажатия мыши на эти попапы
    //если элемент, на котором произошло событие
    //содержит класс popup_opened (пространство вне контейнера попапа)
    if (evt.target.classList.contains('popup_opened')) {
      handleClosePopup(popup);  //закрываю попап
    }
    if (evt.target.classList.contains('popup__close-button')) { //или содержит класс popup__close-button (сам крестик)
      handleClosePopup(popup);  //закрываю попап
    }
  });
});

//функция открытия попапа Name
function handleOpenPopupName() {
  //получаю значения полей попапа со страницы
  popupName.value = profileName.textContent;
  popupWork.value = profileWork.textContent;
  handleOpenPopup(popupElementEditBio);  //открываю попап
}

//функция попапа просмотра фото
export function handlePopupImage(picName, picUrl) {
  pictureImg.src = picUrl;
  pictureImg.alt = picName;
  pictureText.textContent = picName;
  handleOpenPopup(popupBigPicture);
}

//функция закрытия и сохранения форм ввода
function handleName(evt) {
  evt.preventDefault();  //сброс стандартной обработки события
  profileName.textContent = popupName.value;  //передаю значения полей попапа на страницу
  profileWork.textContent = popupWork.value;  //передаю значения полей попапа на страницу
  handleClosePopup(popupElementEditBio);  //закрываю попап
}

function handlePic(evt) {
  evt.preventDefault();  //сброс стандартной обработки события
  const currentForm = evt.target;  //выбираю текущую форму
  const cardElement = new Card(popupPicName.value, popupPicUrl.value, cardTemplate).generateCard();  //генерация новой карточки с прослушкой событий
  prependCard(elements, cardElement);  //добавляю карточку в ДОМ
  currentForm.reset();  //сбрасываю форму
  saveButtonPic.classList.add(settings.inactiveButtonClass);  //и деактевирую кнопку отправки
  saveButtonPic.disabled = true;                              //и деактевирую кнопку отправки
  handleClosePopup(popupElementEditPic);  //закрываю попап
}

//запускаю проверки форм ввода
new FormValidator(settings, formSaveName).enableValidation(); //для формы Name
new FormValidator(settings, formSavePic).enableValidation();  //длля формы Pic

//слушаю клики по кнопкам открыть окно
profileEdit.addEventListener("click", handleOpenPopupName); //для формы Name
photoAdd.addEventListener("click", () => {                  //для формы Pic
  handleOpenPopup(popupElementEditPic);
});

//слушаю клики на закрытие и сохранение
formSaveName.addEventListener("submit", handleName);
formSavePic.addEventListener("submit", handlePic);
