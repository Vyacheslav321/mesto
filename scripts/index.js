// Переменные и постоянные
//
//темплейт карточек
const cardTemplate = document.querySelector("#card-template").content;
const elements = document.querySelector(".elements");
//обьявляю попапы
const popupElementEditBio = document.querySelector(".popup_type_edit-bio");
const popupElementEditPic = document.querySelector(".popup_type_edit-pic");
const popupBigPicture = document.querySelector(".popup_type_bigpicture");
//обьявляю батоны открытия
const profileEdit = document.querySelector(".profile__button-edit");
const photoAdd = document.querySelector(".profile__button-add");
//обьявляю батоны закрытия
const closeEdit = document.querySelector(".popup__close-button_type_edit-bio");
const closePic = document.querySelector(".popup__close-button_type_edit-pic");
const closePicture = document.querySelector(".popup__close-button_type_picture");
//обьявляю кнопки закрытия и сохранения форм
const closeSaveName = popupElementEditBio.querySelector(".popup__form");
const closeSavePic = popupElementEditPic.querySelector(".popup__form");
//поля вывода просмотра фото
const pictureImg = popupBigPicture.querySelector(".popup__picture");
const pictureText = popupBigPicture.querySelector(".popup__text");
//поля вывода имени/работы
const profileName = document.querySelector(".profile__name");
const profileWork = document.querySelector(".profile__work");
//поля карточки изменения имени/работы
const popupName = popupElementEditBio.querySelector(".popup__input_type_name");
const popupWork = popupElementEditBio.querySelector(".popup__input_type_work");
//поля карточки добавления фото
const popupPicName = popupElementEditPic.querySelector(".popup__input_type_picname");
const popupPicUrl = popupElementEditPic.querySelector(".popup__input_type_picurl");



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

// Рисую в DOM карточки с фотографиями
//генерирую страницу из массива по умолчанию
initialCards.forEach((item) => {
  // const newCard = createCards(item.name, item.link);
  const newCard = createCards(item.name, item.link);
  elements.append(newCard);
});

//выход по ESC
// function onDocumentKeyUp(event) {
//   if (event.key === "ESC") {
//     const activePopup = document.querySelector('.popup_opened');
//     closePopup(activePopup);
//   };
// };

//функция открытия попапа
function openPopup(popup) {
  popup.classList.add("popup_opened");
  // document.addEventListener("keyup", onDocumentKeyUp);
};
//функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  // document.removeEventListener("keyup", onDocumentKeyUp);
};
//функция закрыти просмотра фото
function closeBigPicture() {
  popupBigPicture.classList.remove("popup_opened");
};


//функция открытия попапа Name
function openPopupName() {
  //получаю значения полей попапа со страницы
  popupName.value = profileName.innerHTML;
  popupWork.value = profileWork.innerHTML;
  //открываю попап
  openPopup(popupElementEditBio);
}

//функция закрытия и сохранения попапа Name
function closeAndSaveName() {
  //сброс стандартной обработки события
  event.preventDefault();
  //пердаю значения полей попапа на страницу
  profileName.textContent = popupName.value;
  profileWork.textContent = popupWork.value;
  //закрываю попап
  closePopup(popupElementEditBio);
};

//функция закрытия и сохранения попапа Pic
function closeAndSavePic(evt) {
  //сброс стандартной обработки события
  evt.preventDefault();
  //генерация новой карточки с прослушкой событий
  const newCard = createCards(popupPicName.value, popupPicUrl.value);
  //добавляю карточку в ДОМ
  elements.prepend(newCard);
  //обнуляю значения
  pictureText.value = "";
  pictureImg.value = "";
  //закрываю попап
  closePopup(popupElementEditPic);
};


//слушаю клики по кнопкам открыть окно
profileEdit.addEventListener("click", openPopupName);
photoAdd.addEventListener("click", () => {openPopup(popupElementEditPic)});
//слушаю клики по кнопкам закрыть окно
closeEdit.addEventListener("click", () => {closePopup(popupElementEditBio)});
closePic.addEventListener("click", () => {closePopup(popupElementEditPic)});
closePicture.addEventListener("click", closeBigPicture);
//слушаю клики на закрытие и сохранение
closeSaveName.addEventListener("submit", closeAndSaveName);
closeSavePic.addEventListener("submit", closeAndSavePic);
