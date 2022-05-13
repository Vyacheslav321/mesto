//карточки по-умолчанию
export const initialCards = [
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
export const cardTemplate = "#card-template";
export const popupOpenedClass = "popup_opened";
export const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

export const elements = document.querySelector(".elements"); //темплейт карточек
export const popups = document.querySelectorAll(".popup"); //объявляю все попапы
//обьявляю попап изменения имени/работы (name)
export const popupElementEditBio = document.querySelector(".popup_type_edit-bio");
//поля карточки изменения имени/работы (name)
export const popupName = popupElementEditBio.querySelector(".popup__input_type_name");
export const popupWork = popupElementEditBio.querySelector(".popup__input_type_work");
export const formSaveName = popupElementEditBio.querySelector(".popup__form"); //форма изменения имени/работы (name)
//поля вывода имени/работы в форме (name)
export const profileName = document.querySelector(".profile__name");
export const profileWork = document.querySelector(".profile__work");
//обьявляю попап добавления карточки (pic)
export const popupElementEditPic = document.querySelector(".popup_type_edit-pic");
//поля формы добавления карточки (pic)
export const popupPicName = popupElementEditPic.querySelector(
  ".popup__input_type_picname"
);
export const popupPicUrl = popupElementEditPic.querySelector(
  ".popup__input_type_picurl"
);
export const formSavePic = popupElementEditPic.querySelector(".popup__form"); //фома добавления карточки (pic)
//обьявляю попап фото
export const popupBigPicture = document.querySelector(".popup_type_bigpicture");
//поля вывода просмотра фото
export const pictureImg = popupBigPicture.querySelector(".popup__picture");
export const pictureText = popupBigPicture.querySelector(".popup__text");

//кнопки открытия форм
export const profileEdit = document.querySelector(".profile__button-edit");
export const photoAdd = document.querySelector(".profile__button-add");
