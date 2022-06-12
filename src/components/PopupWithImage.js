//отвечает за открытие большого фото
//BigPicture
import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor (popupElement, popupPictureSelectors) {
    super(popupElement),
    this._pictureImg = document.querySelector(popupPictureSelectors.pictureImgSelector),
    this._pictureText = document.querySelector(popupPictureSelectors.pictureTextSelector)
  }

  open(name, link) {  //здесь вставлять в попап картинку с src изображения и подписью к картинке
    this._pictureImg.src = link;
    this._pictureImg.alt = name;
    this._pictureText.textContent = name;
    super.open();
  }
}
