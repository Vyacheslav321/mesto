//Для каждого попапа создавайте свой экземпляр класса PopupWithForm
//BigPicture
import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor (picName, picUrl, popupBigPicture) {
    super(popupSelector),
    this._picName = picName,
    this._picUrl = picUrl,
    this._popupBigPicture = popupBigPicture
  };
  open() {  //здесь вставлять в попап картинку с src изображения и подписью к картинке
    pictureImg.src = this._picUrl;
    pictureImg.alt = this._picName;
    pictureText.textContent = this._picName;
    super.open(this._popupBigPicture);
  };
}
