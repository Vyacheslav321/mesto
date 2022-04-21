// Переменные и постоянные
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
const saveButtonPic = popupElementEditPic.querySelector(settings.submitButtonSelector)

////обьявляю попап фото
const popupBigPicture = document.querySelector(".popup_type_bigpicture");
//поля вывода просмотра фото
const pictureImg = popupBigPicture.querySelector(".popup__picture");
const pictureText = popupBigPicture.querySelector(".popup__text");

//обьявляю батоны открытия
const profileEdit = document.querySelector(".profile__button-edit");
const photoAdd = document.querySelector(".profile__button-add");
//обьявляю батоны закрытия
const closeEdit = document.querySelector(".popup__close-button_type_edit-bio");
const closePic = document.querySelector(".popup__close-button_type_edit-pic");
const closePicture = document.querySelector(".popup__close-button_type_picture");

//функция генерации карточки и прослушки событий
function createCards(picName, picUrl) {
  //клонирую из темплейт див element
  //присваиваю ему значения name и link из массива
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
  const cardItemImage = cardElement.querySelector(".element__pic");
  cardItemImage.src = picUrl;
  cardItemImage.alt = picName;
  cardElement.querySelector(".element__text").textContent = picName;
  //слушаю клик на открытие карточки фото
  cardItemImage.addEventListener("click", () => {
    //передаю данные о фото в попап фото и открываю его
    pictureImg.src = picUrl;
    pictureImg.alt = picName;
    pictureText.textContent = picName;
    openPopup(popupBigPicture);
  });
  //слушаю клик на лайк и обрабатываю его
  const addLike = cardElement.querySelector(".element__like");
  addLike.addEventListener("click", () => {
    addLike.classList.toggle("element__like_active");
  });
  //слушаю клик на удаление и обрабатываю его
  const trash = cardElement.querySelector(".element__trash");
  trash.addEventListener("click", () => {
    cardElement.remove();
  });
  //возвращаю результат
  return cardElement;
}

function prependCard(element, Card) {
  element.prepend(Card);
}

// Рисую в DOM карточки с фотографиями
//генерирую страницу из массива по умолчанию
initialCards.forEach((item) => {
  const newCard = createCards(item.name, item.link);
  prependCard(elements, newCard);
});

// выход по ESC
function handleEscape(event) {
  if (event.key === "Escape") {
    const activePopup = document.querySelector(".popup_opened");
    closePopup(activePopup);
  }
}

//функция открытия попапа
function openPopup(popup) {
  popup.classList.add(popupOpenedClass);
  document.addEventListener("keyup", handleEscape);
}

//функция закрытия попапа
function closePopup(popup) {
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
      closePopup(popup);
    }
    //или содержит класс popup__close-button (сам крестик)
    if (evt.target.classList.contains('popup__close-button')) {
      //закрываю попап
      closePopup(popup);
    }
  })
})


//функция открытия попапа Name
function handleOpenPopupName() {
  //получаю значения полей попапа со страницы
  popupName.value = profileName.textContent;
  popupWork.value = profileWork.textContent;
  //открываю попап
  openPopup(popupElementEditBio);
}

//функция закрытия и сохранения попапа Name
function handleName(evt) {
  //сброс стандартной обработки события
  evt.preventDefault();
  //передаю значения полей попапа на страницу
  profileName.textContent = popupName.value;
  profileWork.textContent = popupWork.value;
  //закрываю попап
  closePopup(popupElementEditBio);
}

//функция закрытия и сохранения попапа Pic
function handlePic(evt) {
  //сброс стандартной обработки события
  evt.preventDefault();
  //выбираю текущую форму
  const currentForm = evt.target;
  //генерация новой карточки с прослушкой событий
  const newCard = createCards(popupPicName.value, popupPicUrl.value);
  //добавляю карточку в ДОМ
  prependCard(elements, newCard);
  //сбрасываю форму
  currentForm.reset();
  //и деактевирую кнопку отправки
  saveButtonPic.classList.add(settings.inactiveButtonClass);
  saveButtonPic.disabled = true;
  //закрываю попап
  closePopup(popupElementEditPic);
}

enableValidation(settings);

//слушаю клики по кнопкам открыть окно
profileEdit.addEventListener("click", handleOpenPopupName);
photoAdd.addEventListener("click", () => {openPopup(popupElementEditPic)});

//слушаю клики на закрытие и сохранение
formSaveName.addEventListener("submit", handleName);
formSavePic.addEventListener("submit", handlePic);
