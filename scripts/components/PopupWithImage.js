//Для каждого попапа создавайте свой экземпляр класса PopupWithForm
//BigPicture
class PopupWithForm extends Popup {
  constructor (popupSelector, picName, picUrl, popupBigPicture) {
    super(popupSelector),
    this._picName = picName,
    this._picUrl = picUrl,
    this._popupBigPicture = popupBigPicture
  };
  handleOpenPopup() {  //здесь вставлять в попап картинку с src изображения и подписью к картинке
    pictureImg.src = this._picUrl;
    pictureImg.alt = this._picName;
    pictureText.textContent = this._picName;
    handleOpenPopup(this._popupBigPicture);
  };
}
