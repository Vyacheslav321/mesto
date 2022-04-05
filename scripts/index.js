// Переменные и постоянные
//
//темплейт карточек
const cardTemplate = document.querySelector("#card-template").content;
const elements = document.querySelector(".elements");
//обьявляю попапы
const popupElement = document.querySelectorAll(".popup");
const popupElementEdit = popupElement[0];
const popupElementPic = popupElement[1];
const popupPicture = popupElement[2];
//обьявляю батоны открытия
const profileEdit = document.querySelector(".profile__button-edit");
const photoAdd = document.querySelector(".profile__button-add");
//обьявляю батоны закрытия
const profileEditClose = document.querySelectorAll(".popup__close-button");
const closeEdit = profileEditClose[0];
const closePic = profileEditClose[1];
const closePicture = profileEditClose[2];
//обьявляю кнопки закрытия и сохранения форм
const profileForm = document.querySelectorAll(".popup__form");
//поля вывода просмотра фото
const pictureImg = document.querySelector(".popup__picture");
const pictureText = document.querySelector(".popup__text");
//поля вывода имени/работы
let profileName = document.querySelector(".profile__name");
let profileWork = document.querySelector(".profile__work");
//поля карточки изменения имени/работы
let popupName = document.querySelector(".popup__input_type_name");
let popupWork = document.querySelector(".popup__input_type_work");
//поля карточки добавления фото
let popupPicName = document.querySelector(".popup__input_type_picname");
let popupPicUrl = document.querySelector(".popup__input_type_picurl");

// Рисую в DOM карточки с фотографиями
//
//массив карточек по умолчанию
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

//генерирую страницу из массива по умолчанию
initialCards.forEach((item) => {
  const newCard = createCards(item.name, item.link);
  elements.append(newCard);
});

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
  //передаю данные о фото в попап фото и открываю его
  cardItemImage.addEventListener("click", () => {
    pictureImg.src = picUrl;
    pictureImg.alt = picName;
    pictureText.textContent = picName;
    popupPicture.classList.add("popup_opened");
  });
  //слушаю клик на закрытие карточки фото и обрабатываю его
  closePicture.addEventListener("click", () => {
    popupPicture.classList.remove("popup_opened");
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

//попап pic - добавляю фото
//
//слушаю клики по кнопкам открыть закрыть и сохранить
photoAdd.addEventListener("click", openPopupPic);
closePic.addEventListener("click", closePopupPic);
profileForm[1].addEventListener("submit", closeAndSavePic);
//функция открытия попапа добавления фото
function openPopupPic() {
  popupElementPic.classList.add("popup_opened");
  document.addEventListener("keyup", onDocumentKeyUp);
}
//функция закрытия попапа добавления фото
function closePopupPic() {
  popupElementPic.classList.remove("popup_opened");
  document.removeEventListener("keyup", onDocumentKeyUp);
}

//функция добавления новой карточки
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
  //закрываю попап с добавлением фото
  closePopupPic();
}

//попап name - меняю имя и должность
//
//слушаю клики на открытие закрытие и сохранение
profileEdit.addEventListener("click", openPopup);
closeEdit.addEventListener("click", closePopup);
profileForm[0].addEventListener("submit", closeAndSave);
//функция открытия попапа
function openPopup() {
  popupName.value = profileName.innerHTML;
  popupWork.value = profileWork.innerHTML;
  popupElementEdit.classList.add("popup_opened");
  document.addEventListener("keyup", onDocumentKeyUp);
}
//функция закрытия попапа
function closePopup() {
  popupElementEdit.classList.remove("popup_opened");
  document.removeEventListener("keyup", onDocumentKeyUp);
}
//функция закрытия и сохранения попапа и данных
function closeAndSave() {
  event.preventDefault();
  profileName.textContent = popupName.value;
  profileWork.textContent = popupWork.value;
  closePopup();
}

