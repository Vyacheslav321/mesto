//Для каждого попапа создавайте свой экземпляр класса PopupWithForm
import { popupPicName, popupPicUrl, settings } from "../utils/constants.js";
import Popup from "./Popup.js"
export default class PopupWithForm extends Popup {
  constructor ({renderer}, popupElement) {
    super(popupElement),
    this._renderer = renderer,
    // this._popupPicName = popupPicName,
    // this._popupPicUrl = popupPicUrl,
    this._inputList - this._popupElement.querySelectorAll(settings.inputSelector);
    this._submitButton = this._popupElement.querySelector(settings.submitButtonSelector);
    this._currentForm = this._popupElement.querySelector(settings.formSelector);
  };
  open() {  //здесь вставлять в попап картинку с src изображения и подписью к картинке

    super.open()
  };
  _getInputValues() { //собирает данные всех полей формы
    this.formValues = {};
    this._inputList.forEach((input) => {this.formValues[item.name] = input.value});
    return this._formValues
  };
  setEventListeners() {
    //добавляю обработчик клика иконке закрытия
    super.setEventListeners();
    //добавляю обработчик сабмита формы
    formSavePic.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._renderer( this._getInputValues(), this._submitButton );
    });
  };
  close() {
    super.close()
    this._currentForm.reset(); //сбрасываю форму
  };
}
