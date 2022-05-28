import './index.css'; // добавьте импорт главного файла стилей
import {
  initialCards,
  settings,
  elementsSelector,
  popupElementNameSelector,
  popupElementPicSelector,
  popupName,
  popupWork,
  formSaveName,
  profileName,
  profileWork,
  formSavePic,
  profileEdit,
  photoAdd,
} from "../utils/constants.js";

import Section from "../components/Section.js";
import Card from "../components/Сard.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";


//функция сборки карточки и добавления ее в DOM
function handleGenerateCard({picName, picURL}) {
    const newCard = new Card(
    {
      picName,
      picURL,
      handleCardClick: (picName, picURL, popupBigPictureSelector) => {
        const cardClick = new PopupWithImage(popupBigPictureSelector);
        cardClick.open(picName, picURL);
        cardClick.setEventListeners();
      }
    }
  );
  const cardElement = newCard.generateCard();
  cardElements.addItem(cardElement);
  return cardElements
};


// реализациия карточки в DOM
//генерации карточки и прослушки событий
const cardElements = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      handleGenerateCard({picName: item.name, picURL: item.link});
    }
  },
  elementsSelector
);
cardElements.generateCards();


// открытие и закрытие формы Name
// константа сласса реализации изменения карточки
const popupNameClass = new PopupWithForm (
  {renderer: (data) => {handleSaveName (data)}},
  popupElementNameSelector
);
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
const addNewCardClass = new PopupWithForm ({renderer: (data) => {handleSavePic(data)}}, popupElementPicSelector);
//функция открытия
function handleOpenPopupPic() {
  addNewCardClass.open();
};
//функция закрытия
function handleSavePic(data) {
  const {picName, picURL} = data;
  handleGenerateCard({picName, picURL})
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
//слушаю клики на кнопку закрытия и сохранения
popupNameClass.setEventListeners();
addNewCardClass.setEventListeners();
