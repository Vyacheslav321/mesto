export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector
  }
  handleOpenPopup() {  //открытие попапа
    this._popupSelector.classList.add(popupOpenedClass);
    document.addEventListener("keyup", this._handleEscClose);
  };
  handleClosePopup() { //закрытие попапа
    formValidationName.resetValidator();
    this._popupSelector.classList.remove(popupOpenedClass);
    document.removeEventListener("keyup", this._handleEscClose);
  };
  _handleEscClose(event) { //закрытие попапа по esc
    if (event.key === "Escape") {
      const activePopup = document.querySelector(".popup_opened");
      this.handleClosePopup(activePopup);
    }
  };
  setEventListeners() { //слушатель клика по крестику и серой области
    this._popupSelector.forEach((popup) => {  //прохожу по всем найденным попапам
      popup.addEventListener('mousedown', (evt) => {  //вешаю прослушивание нажатия мыши на эти попапы
        //если элемент, на котором произошло событие
        //содержит класс popup_opened (пространство вне контейнера попапа)
        //или содержит класс popup__close-button (сам крестик)
        if (evt.target.classList.contains(popupOpenedClass) || evt.target.classList.contains('popup__close-button')) {
          this.handleClosePopup(popup);  //закрываю попап
        }
      });
    });
  };
}
