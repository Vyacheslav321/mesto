import './index.css'; // добавьте импорт главного файла стилей
import {
  // initialCards,
  settings,
  elementsSelector,
  popupElementNameSelector,
  popupElementPicSelector,
  popupName,
  popupWork,
  formSaveName,
  formSavePic,
  profileEdit,
  photoAdd,
  popupBigPictureSelector,
  profileAvatar,
  formSaveAvatar,
  popupElementAvatarSelector,
  profileSelectors,
  popupElementDelete,
} from "../utils/constants.js";

import Api from "../components/Api.js";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithDelete from '../components/PopupWithDelete';

//КОНСТАНТЫ КЛАССОВ
//
const userInfoClass =  new UserInfo(profileSelectors);
//просмотра изображения
const bigImage = new PopupWithImage(popupBigPictureSelector);
//запрос карточек с сервера
const apiClass = new Api({
  defaultUrl: 'https://mesto.nomoreparties.co/v1/cohort-42/',
  headers: {authorization: 'a60c123e-be9f-453f-be98-1b1679621350', 'Content-Type': 'application/json'}
});


//функция(колбэк) добавления лайка на сервере
function like(idCard, likeCard) {
  return apiClass.setLike(idCard)
  .then((data) => {
    likeCard(data.likes);
  })
  .catch((err) => {
    console.log(`like ошибка: ${err}`)
  })
};

//функция(колбэк) удаления лайка на сервере
function dislike(idCard, likeCard) {
  return apiClass.setDislike(idCard)
  .then((data) => {
    likeCard(data.likes);
  })
  .catch((err) => {
    console.log(`disLike ошибка: ${err}`)
  })
};

//удаления карточки
const popupDeleteClass = new PopupWithDelete({deleteCard}, settings, popupElementDelete);
//функция(колбэк) удаления лайка на сервере
function deleteCard(idCard) {
  popupDeleteClass.renderLoadingDelete(true);
  apiClass.deleteUserCard(idCard)
  .then(() => {
    const cardItem = popupDeleteClass.getCard();
    cardItem.deleteCard();
    popupDeleteClass.close();
  })
  .catch((err) => {
    console.log(`ошибка удаления карточки ${err}`);
  })
  .finally(() => {
    popupDeleteClass.renderLoadingDelete(false);
  })
}

//
function deletePopup(cardItem) {
  popupDeleteClass.setCard(cardItem);
  popupDeleteClass.open();
};


//функция(колбэк) сборки карточки
// const handleGenerateCard = ({picName, picURL}) => {
const handleGenerateCard = (item, defaultUsers) => {
  const myId = defaultUsers._id
  const newCard = new Card(
    {
      item,
      myId,
      like: like,
      dislike: dislike,
      handleCardClick: (picName, picURL) => {
        bigImage.open(picName, picURL);
        bigImage.setEventListeners();
      },
      deleteCardClick: deletePopup
    }
  );
  const cardElement = newCard.generateCard();
  return cardElement
};



// реализациия карточки в DOM
Promise.all([apiClass.getUserInfo(), apiClass.getCards()])
  .then(([defaultUsers, defaultCards]) => {
    userInfoClass.setUserInfo(defaultUsers);
    //генерации карточки и прослушки событий
    const cardElements = new Section(
      {
        items: defaultCards,
        renderer: (item) => {
          const cardElement = handleGenerateCard(item, defaultUsers);
          cardElements.addItem(cardElement);
        }
      },
      elementsSelector
    );
    cardElements.generateCards();
  })
  .catch((err) => {
    console.log(err);
  });


  //добавление аватара на страницу
const addAvatar = (avatarURL) => {
  addNewAvatarClass.setEventListeners();
}


// открытие и закрытие формы Name
// константа сласса реализации изменения карточки
const popupNameClass = new PopupWithForm (
  {renderer: (data) => {handleSaveName (data)}},
  popupElementNameSelector
);
//функция открытия
function handleOpenPopupName() {
  // const userInfoClass = new UserInfo(profileSelectors);
  //получаю значения полей попапа со страницы
  userInfoClass.getUserInfo();
  popupNameClass.open(); //открываю попап
}
//функция закрытия
function handleSaveName (data) {
    const {popupName, popupWork} = data;
    // const userInfo =  new UserInfo(profileSelectors);
    userInfoClass.setUserInfo({popupName, popupWork});
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
  const cardElement = handleGenerateCard({picName, picURL});
  cardElements.addItem(cardElement);
  addNewCardClass.close();
  formValidationPic.resetValidator();
};


//открытие и закрытие редактирования аватара
const addNewAvatarClass = new PopupWithForm({renderer: (data) => {handleSaveAvatar(data)}}, popupElementAvatarSelector);
//открытие попапа
function handleOpenPopupAvatar() {
  addNewAvatarClass.open();
};
//закрытие попапа
function handleSaveAvatar(data) {
  const {avatarURL} = data;
  addAvatar({avatarURL});
  addNewAvatarClass.close();
  formValidationAvatar.resetValidator();
};


//запускаю проверки форм ввода
const formValidationName = new FormValidator(settings, formSaveName); //для формы Name
formValidationName.enableValidation();
const formValidationPic = new FormValidator(settings, formSavePic); //длля формы Pic
formValidationPic.enableValidation();
const formValidationAvatar = new FormValidator(settings, formSaveAvatar); //длля формы Avatar
formValidationAvatar.enableValidation();


//слушаю клики по кнопкам открыть окно
profileEdit.addEventListener("click", handleOpenPopupName); //для формы Name
photoAdd.addEventListener("click", handleOpenPopupPic); //для формы Pic
profileAvatar.addEventListener("click", handleOpenPopupAvatar); //для формы  Avatar
//слушаю клики на кнопку закрытия и сохранения
popupNameClass.setEventListeners();
addNewCardClass.setEventListeners();
addNewAvatarClass.setEventListeners();
popupDeleteClass.setEventListeners();
