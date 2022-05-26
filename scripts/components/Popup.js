//отвечает за открытие и закрытие попапа
export default class Popup {
  constructor(popupElement) {
    (this.popupElement = popupElement),
      //фиксирую функцию _handleEscClose для обработки
      // в addEventListener и removeEventListener
      (this._handleEscClose = this._handleEscClose.bind(this));
  }

  open() {
    //открытие попапа
    this.popupElement.classList.add("popup_opened");
    document.addEventListener("keyup", this._handleEscClose);
  }

  close() {
    //закрытие попапа
    this.popupElement.classList.remove("popup_opened");
    document.removeEventListener("keyup", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    //слушатель клика по крестику и серой области
    this.popupElement.addEventListener("mousedown", (evt) => {
      //если элемент, на котором произошло событие
      if (
        //содержит класс popup_opened (пространство вне контейнера попапа)
        evt.target.classList.contains("popup_opened") ||
        //или содержит класс popup__close-button (сам крестик)
        evt.target.classList.contains("popup__close-button")
      ) {
        this.close();
      }
    });
  }
}
