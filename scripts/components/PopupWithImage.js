//Для каждого попапа создавайте свой экземпляр класса PopupWithForm
//BigPicture
import {pictureImg, pictureText} from '../utils/constants.js';
import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor (popupElement) {
    super(popupElement)
    // this._picName = picName,
    // this._picUrl = picUrl
  };
  open(name, link) {  //здесь вставлять в попап картинку с src изображения и подписью к картинке
    super.open();
    pictureImg.src = link;
    pictureImg.alt = name;
    pictureText.textContent = name;

  };
}
