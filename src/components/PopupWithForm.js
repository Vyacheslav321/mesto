//отвечает за открытие попапа для каждой формы
import {settings } from "../utils/constants.js";
import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor ({renderer}, popupElement, popupInputSelectors) {
    super(popupElement),
    this._renderer = renderer,
    this._popupElement = document.querySelector(popupElement),
    this._currentForm = this._popupElement.querySelector(settings.formSelector),
    this._inputList = this._popupElement.querySelectorAll(settings.inputSelector),
    this._submitButton = this._popupElement.querySelector(settings.submitButtonSelector),
    this._getInputValues = this._getInputValues.bind(this)
    this._popupName = document.querySelector(popupInputSelectors.popupNameSelector),
    this._popupWork = document.querySelector(popupInputSelectors.popupWorkSelector),
    this._popupAvatar = document.querySelector(popupInputSelectors.popupAvatarSelector)
  };

  _getInputValues() { //собирает данные всех полей формы
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value
    })
    console.log(this._formValues)
    return this._formValues
  };

  setEventListeners() {
    //добавляю обработчик клика иконке закрытия
    super.setEventListeners();
    //добавляю обработчик сабмита формы
    this._currentForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._renderer(this._getInputValues());
    });
  };

  close() {
    super.close();
    this._currentForm.reset(); //сбрасываю форму
  };

setInputValues(userData) { //передаю значения о пользователе в попап
  this._popupName.value = userData.name;
  this._popupWork.value = userData.about;
  this._popupAvatar.value = userData.avatar;
};

  processLoading(loading) {
    if (loading) {
      this._submitButton.textContent = 'Сохранение...';
    } else {
      this._submitButton.textContent = 'Да';
    };
  }
}
