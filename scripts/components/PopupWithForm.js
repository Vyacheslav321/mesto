//Для каждого попапа создавайте свой экземпляр класса PopupWithForm
//PIC
import Popup from "./Popup.js"
export default class PopupWithForm extends Popup {
  constructor (колбэк_сабмита_формы) {
    super(popupSelector)
  };
  open() {  //здесь вставлять в попап картинку с src изображения и подписью к картинке

  };
  _getInputValues() { //собирает данные всех полей формы

  };
  setEventListeners() {
    //добавляю обработчик клика иконке закрытия
    //добавляю обработчик сабмита формы
  };
  close() {
    //при закрытии попапа форма должна сбрасываться
  };
}
