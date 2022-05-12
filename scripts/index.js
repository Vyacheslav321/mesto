import {
  initialCards,
  cardTemplate,
  popupOpenedClass,
  settings,
  elements,
  popups,
  popupElementEditBio,
  popupName,
  popupWork,
  formSaveName,
  profileName,
  profileWork,
  popupElementEditPic,
  popupPicName,
  popupPicUrl,
  formSavePic,
  profileEdit,
  photoAdd,
} from './constants.js';

//функция генерации карточки и прослушки событий
import { Card } from './Card.js';
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
export function handleOpenPopup(popup) {
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
    //или содержит класс popup__close-button (сам крестик)
    if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-button')) {
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

//функции закрытия и сохранения форм ввода
//для формы Name
function handleSaveName(evt) {
  evt.preventDefault();  //сброс стандартной обработки события
  profileName.textContent = popupName.value;  //передаю значения полей попапа на страницу
  profileWork.textContent = popupWork.value;  //передаю значения полей попапа на страницу
  handleClosePopup(popupElementEditBio);  //закрываю попап
}
//для формы Pic
function handleSavePic(evt) {
  evt.preventDefault();  //сброс стандартной обработки события
  const currentForm = evt.target;  //выбираю текущую форму
  const cardElement = new Card(popupPicName.value, popupPicUrl.value, cardTemplate).generateCard();  //генерация новой карточки с прослушкой событий
  prependCard(elements, cardElement);  //добавляю карточку в ДОМ
  currentForm.reset();  //сбрасываю форму
  new FormValidator(settings, currentForm).toggleButtonDisable();  //и деактевирую кнопку отправки
  handleClosePopup(popupElementEditPic);  //закрываю попап
}

//запускаю проверки форм ввода
const formValidationName = new FormValidator(settings, formSaveName); //для формы Name
const formValidationPic = new FormValidator(settings, formSavePic);  //длля формы Pic
formValidationName.enableValidation();
formValidationPic.enableValidation();

//слушаю клики по кнопкам открыть окно
profileEdit.addEventListener("click", handleOpenPopupName); //для формы Name
photoAdd.addEventListener("click", () => {                  //для формы Pic
  handleOpenPopup(popupElementEditPic);
});

//слушаю клики на закрытие и сохранение
formSaveName.addEventListener("submit", handleSaveName);
formSavePic.addEventListener("submit", handleSavePic);
