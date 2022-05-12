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
const cardTemplate = "#card-template";
const popupOpenedClass = "popup_opened";
const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const elements = document.querySelector(".elements"); //темплейт карточек
const popups = document.querySelectorAll(".popup"); //объявляю все попапы
//обьявляю попап изменения имени/работы (name)
const popupElementEditBio = document.querySelector(".popup_type_edit-bio");
//поля карточки изменения имени/работы (name)
const popupName = popupElementEditBio.querySelector(".popup__input_type_name");
const popupWork = popupElementEditBio.querySelector(".popup__input_type_work");
const formSaveName = popupElementEditBio.querySelector(".popup__form"); //форма изменения имени/работы (name)
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
const formSavePic = popupElementEditPic.querySelector(".popup__form"); //фома добавления карточки (pic)
//обьявляю попап фото
const popupBigPicture = document.querySelector(".popup_type_bigpicture");
//поля вывода просмотра фото
const pictureImg = popupBigPicture.querySelector(".popup__picture");
const pictureText = popupBigPicture.querySelector(".popup__text");

//кнопки открытия форм
const profileEdit = document.querySelector(".profile__button-edit");
const photoAdd = document.querySelector(".profile__button-add");

export {
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
  popupBigPicture,
  pictureImg,
  pictureText,
  profileEdit,
  photoAdd
};
