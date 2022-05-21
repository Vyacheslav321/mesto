//Для каждого попапа создавайте свой экземпляр класса PopupWithForm
//PIC
class PopupWithForm extends Popup {
  constructor (popupSelector, колбэк_сабмита_формы) {
    super(popupSelector)
  };
  handleOpenPopup() {  //здесь вставлять в попап картинку с src изображения и подписью к картинке

  };
  _getInputValues() { //собирает данные всех полей формы

  };
  setEventListeners() {
    //добавляю обработчик клика иконке закрытия
    //добавляю обработчик сабмита формы
  };
  handleClosePopup() {
    //при закрытии попапа форма должна сбрасываться
  };
}
