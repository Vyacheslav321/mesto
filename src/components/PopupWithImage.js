//отвечает за открытие большого фото
//BigPicture
import {pictureImg, pictureText} from '../utils/constants.js';
import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor (popupElement) {
    super(popupElement),
    this._pictureImg = pictureImg,
    this._pictureText = pictureText
  }

  open(name, link) {  //здесь вставлять в попап картинку с src изображения и подписью к картинке
    super.open();
    this._pictureImg.src = link;
    this._pictureImg.alt = name;
    this._pictureText.textContent = name;
  }
}
