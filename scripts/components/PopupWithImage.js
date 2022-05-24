//Для каждого попапа создавайте свой экземпляр класса PopupWithForm
//BigPicture
import {pictureImg, pictureText} from '../utils/constants.js';
import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor (picName, picUrl, popupBigPicture) {
    super(popupElement),
    popupElement = popupBigPicture,
    this._picName = picName,
    this._picUrl = picUrl
  };
  open() {  //здесь вставлять в попап картинку с src изображения и подписью к картинке
    super.open();
    pictureImg.src = this._picUrl;
    pictureImg.alt = this._picName;
    pictureText.textContent = this._picName;

  };
}
