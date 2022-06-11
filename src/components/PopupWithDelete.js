import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup {
  constructor({deleteCards}, settings, popupElement) {
    super(popupElement),  //элемент  - попап подтверждения удаления карточки
    this._deleteCards = deleteCards, //колбэк
    // this._popupElement = popupElement,
    this._formElement = this._popupElement.querySelector(settings.formSelector),
    this._submitButton = this._popupElement.querySelector(settings.submitButtonSelector),
    this._dataCard = ''
  }

  renderLoadingDelete(loading) {
    if (loading) {
      this._submitButton.textContent = 'Удаление...';
    } else {
      this._submitButton.textContent = 'Да';
    }
  };

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._deleteCards(this._dataCard._id);
    });
  };

  setCard(data) {
    this._dataCard = data
  };

  getCard() {
    return this._dataCard
  };
}

