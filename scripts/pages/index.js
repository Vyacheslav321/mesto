import {
  initialCards,
  cardTemplate,
  popupOpenedClass,
  settings,
  elements,
  popupSelectorAll,
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
} from "../utils/constants.js";

import Section from "../components/Section.js";
import Card from "../components/Сard.js";
import Popup from "../components/Popup.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";

// константа класса реализации карточки в DOM
const cardElements = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const newCard = new Card({picName: item.name, picURL: item.link,
        handleCardClick: (picName, picUrl, popupBigPicture) => {
          const cardClick = new PopupWithImage(popupBigPicture);
          cardClick.open(picName, picUrl);
        }
      });
      const cardElement = newCard.generateCard();
      cardElements.addItem(cardElement)
    }
  },
  elements
);
//генерации карточки и прослушки событий
cardElements.generateCards();
// функция закрытия попапа по нажатию на оверлей и крестик
popupSelectorAll.forEach((popup) => {  //прохожу по всем найденным попапам
  popup.addEventListener('mousedown', (evt) => {  //вешаю прослушивание нажатия мыши на эти попапы
    const popupClass = new  Popup (popup);  //закрываю попап
    popupClass.setEventListeners()
  });
});

// открытие и закрытие формы Name
// const popupNameClass = new Popup(popupElementEditBio);
const popupNameClass = new PopupWithForm ({renderer: (data) => {handleSaveName (data)}}, popupElementEditBio);
//функция открытия
function handleOpenPopupName() {
  const userInfoClass = new UserInfo(profileName, profileWork, {popupName, popupWork});
  //получаю значения полей попапа со страницы
  userInfoClass.getUserInfo();
  popupNameClass.open(); //открываю попап
}
//функция закрытия
function handleSaveName (data) {
    const {popupName, popupWork} = data;
    const userInfo =  new UserInfo(profileName, profileWork, {popupName, popupWork});
    userInfo.setUserInfo();
    popupNameClass.close();
    formValidationName.resetValidator();
};

// открытие и закрытие формы Pic
// константа сласса реализации добавления новой карточки
const addNewCardClass = new PopupWithForm ({renderer: (data) => {handleSavePic(data)}}, popupElementEditPic);
//функция открытия
function handleOpenPopupPic() {
  addNewCardClass.open();
};
//функция закрытия
function handleSavePic(data) {
  const {picName, picURL} = data;
  const newCard = new Card({picName, picURL});
  const cardElement = newCard.generateCard();
  cardElements.addItem(cardElement);
  addNewCardClass.close();
  formValidationPic.resetValidator();
};

//запускаю проверки форм ввода
const formValidationName = new FormValidator(settings, formSaveName); //для формы Name
formValidationName.enableValidation();
const formValidationPic = new FormValidator(settings, formSavePic); //длля формы Pic
formValidationPic.enableValidation();

//слушаю клики по кнопкам открыть окно
profileEdit.addEventListener("click", handleOpenPopupName); //для формы Name
photoAdd.addEventListener("click", handleOpenPopupPic); //для формы Pic

//слушаю клики на закрытие и сохранение
popupNameClass.setEventListeners();
addNewCardClass.setEventListeners();
