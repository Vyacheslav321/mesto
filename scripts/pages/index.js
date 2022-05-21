import {
  initialCards,
  cardTemplate,
  popupOpenedClass,
  settings,
  elements,
  popupSelector,
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
  photoAdd
} from '../utils/constants.js';

import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Card from '../components/Сard.js';
import FormValidator from '../components/FormValidator.js';

//функция генерации карточки и прослушки событий
const cardElements = new Section(
  items: initialCards,
  renderer: (item) => {
    const newCard = new Card(
      picName: item.name,
      picUrl: item.link,
      cardTemplate
    );
    newCard.generateCard();
  },
  elements);
cardElements.addItem(cardElement);

// const handleClosePopup = new Popup(popupSelector)
// handleClosePopup.setEventListeners()

// //функция открытия попапа Name
// function handleOpenPopupName() {
//   //получаю значения полей попапа со страницы
//   const getNameWork = new UserInfo ({profileName, profileWork}, popupName, popupWork);
//   getNameWork.getUserInfo(popupElementEditBio); //открываю попап
// };


// //функции закрытия и сохранения форм ввода
// //для формы Name
// function handleSaveName(evt) {
//   evt.preventDefault();  //сброс стандартной обработки события
//   const setNameWork = new UserInfo ({profileName, profileWork}, popupName, popupWork);
//   setNameWork.setUserInfo(popupElementEditBio); //закрываю попап
// };

// //для формы Pic
// function handleSavePic(evt) {
//   evt.preventDefault();  //сброс стандартной обработки события
//     const currentForm = evt.target;  //выбираю текущую форму
//   const cardElement = new Card(popupPicName.value, popupPicUrl.value, cardTemplate).generateCard();  //генерация новой карточки с прослушкой событий
//   prependCard(elements, cardElement);  //добавляю карточку в ДОМ
//   currentForm.reset();  //сбрасываю форму
//   formValidationPic.disableSubmitButton();  //и деактевирую кнопку отправки
//   handleClosePopup(popupElementEditPic);  //закрываю попап
// }







//   //запускаю проверки форм ввода
// const formValidationName = new FormValidator(settings, formSaveName); //для формы Name
// const formValidationPic = new FormValidator(settings, formSavePic);  //длля формы Pic
// formValidationName.enableValidation();
// formValidationPic.enableValidation();

// //слушаю клики по кнопкам открыть окно
// profileEdit.addEventListener("click", handleOpenPopupName); //для формы Name
// photoAdd.addEventListener("click", () => {                  //для формы Pic
//   handleOpenPopup(popupElementEditPic);
// });

// //слушаю клики на закрытие и сохранение
// formSaveName.addEventListener("submit", handleSaveName);
// formSavePic.addEventListener("submit", handleSavePic);
