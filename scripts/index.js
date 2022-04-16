;
// Переменные и постоянные
const formSelector = '.popup__form' // ++класс для в закрытии попапа

const submitButtonSelector = '.popup__save-button'; //+++класс кнопки
const inactiveButtonClass = 'popup__save-button_invalid'; //+++класс которым делаю кнопку неактивной

const errorClass = 'popup__error'; //
//
//темплейт карточек
const cardTemplate = document.querySelector("#card-template").content;
const elements = document.querySelector(".elements");

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
const popupPicName = popupElementEditPic.querySelector(".popup__input_type_picname");
const popupPicUrl = popupElementEditPic.querySelector(".popup__input_type_picurl");
//обьявляю кнопки закрытия и сохранения формы
const formSavePic = popupElementEditPic.querySelector(".popup__form");


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
    popupBigPicture.classList.add("popup_opened");
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
};

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
function onDocumentKeyUp(event) {
  if (event.key === "Escape") {
    const activePopup = document.querySelector('.popup_opened');
    closePopup(activePopup);
  };
};

//функция открытия попапа
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keyup", onDocumentKeyUp);
};
//функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keyup", onDocumentKeyUp);
};
//функция закрытия попапа кликом по оверлею
function ovrlayClose (evt, popup) {
  // если клик был выполнен за пределами popup__form
  // закрываем его
  if (!evt.target.closest(formSelector)) {
    closePopup(popup);
    }
  }

//функция открытия попапа Name
function openPopupName() {
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
  //выбираю текущую форму
  const currentForm = evt.target;
  //проверяю, что форма валидка
  if (currentForm.checkValidity) {
    //пердаю значения полей попапа на страницу
    profileName.textContent = popupName.value;
    profileWork.textContent = popupWork.value;
    //закрываю попап
    closePopup(popupElementEditBio);
    //сбрасываю форму
    currentForm.reset();
    }
};

//функция закрытия и сохранения попапа Pic
function handlePic(evt) {
  //сброс стандартной обработки события
  evt.preventDefault();
  //выбираю текущую форму
  const currentForm = evt.target;
  //проверяю, что форма валидка
  if (currentForm.checkValidity) {
    //генерация новой карточки с прослушкой событий
    const newCard = createCards(popupPicName.value, popupPicUrl.value);
    //добавляю карточку в ДОМ
    prependCard(elements, newCard);
    //обнуляю значения
    pictureText.value = "";
    pictureImg.value = "";
    //закрываю попап
    closePopup(popupElementEditPic);
    //сбрасываю форму
    currentForm.reset();
  }
};

enableValidation (formSelector, submitButtonSelector, inactiveButtonClass, errorClass);

//слушаю клики по кнопкам открыть окно
profileEdit.addEventListener("click", openPopupName);
photoAdd.addEventListener("click", () => {openPopup(popupElementEditPic)});
// //слушаю клики по кнопкам закрыть окно
closeEdit.addEventListener("click", () => {closePopup(popupElementEditBio)});
closePic.addEventListener("click", () => {closePopup(popupElementEditPic)});
closePicture.addEventListener("click", () => {closePopup(popupBigPicture);});
//слушаю клики по оверлею
popupElementEditBio.addEventListener("click", (evt) => {ovrlayClose (evt, popupElementEditBio)});
popupElementEditPic.addEventListener("click", (evt) => {ovrlayClose (evt, popupElementEditPic)});
popupBigPicture.addEventListener("click", (evt) => {ovrlayClose (evt, popupBigPicture);});

//слушаю клики на закрытие и сохранение
formSaveName.addEventListener("submit", handleName);
formSavePic.addEventListener("submit", handlePic);
