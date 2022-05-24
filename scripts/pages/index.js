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
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import FormValidator from "../components/FormValidator.js";

//функция генерации карточки и прослушки событий
const cardElements = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const newCard = new Card(
        {
          picName: item.name,
          picUrl: item.link
        }
      );
      const cardElement = newCard.generateCard();
      cardElements.addItem(cardElement)
    }
  }
);
cardElements.generateCard();




// функция закрытия попапа по нажатию на оверлей и крестик
popupSelectorAll.forEach((popup) => {  //прохожу по всем найденным попапам
  popup.addEventListener('mousedown', (evt) => {  //вешаю прослушивание нажатия мыши на эти попапы
    const popupClass = new  Popup (popup);  //закрываю попап
    popupClass.setEventListeners()
  });
});

// открытие и закрытие формы Name
//функция открытия
const popupNameClass = new Popup(popupElementEditBio);
const userInfoClass = new UserInfo({ profileName, profileWork }, popupName, popupWork);
function handleOpenPopupName() {
  //получаю значения полей попапа со страницы
  userInfoClass.getUserInfo();
  // const openPopup = new Popup(popupElementEditBio);
  popupNameClass.open(); //открываю попап
}
//функции закрытия и сохранения
function handleSaveName(evt) {
  evt.preventDefault(); //сброс стандартной обработки события
  userInfoClass.setUserInfo(); //записываю введенные данные
  // const closePopup = new Popup(popupElementEditBio);
  popupNameClass.close(); //закрываю попап
  formValidationName.resetValidator(); //сброс состояния формы
}

//для формы Pic


// function handleSavePic(evt) {
//   evt.preventDefault(); //сброс стандартной обработки события
//   const currentForm = evt.target; //выбираю текущую форму
//   const cardElement = new Card(
//     popupPicName.value,
//     popupPicUrl.value,
//     cardTemplate
//   ).generateCard(); //генерация новой карточки с прослушкой событий
//   prependCard(elements, cardElement); //добавляю карточку в ДОМ
//   currentForm.reset(); //сбрасываю форму
//   formValidationPic.disableSubmitButton(); //и деактевирую кнопку отправки
//   handleClosePopup(popupElementEditPic); //закрываю попап
// }

//запускаю проверки форм ввода
const formValidationName = new FormValidator(settings, formSaveName); //для формы Name
const formValidationPic = new FormValidator(settings, formSavePic); //длля формы Pic
formValidationName.enableValidation();
formValidationPic.enableValidation();

//слушаю клики по кнопкам открыть окно
profileEdit.addEventListener("click", handleOpenPopupName); //для формы Name
photoAdd.addEventListener("click", () => {
  //для формы Pic
  // handleOpenPopup(popupElementEditPic);
  const openPopupPic = new Popup(popupElementEditPic); //открываю попап
  openPopupPic.open();
});

//слушаю клики на закрытие и сохранение
formSaveName.addEventListener("submit", handleSaveName);
formSavePic.addEventListener("submit", handleSavePic);
