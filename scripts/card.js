import { handlePopupImage } from './index.js';

export class Card {
  constructor(picName, picUrl) {
      this._picName = picName;
      this._picUrl = picUrl;
      this._handlePopupImage = handlePopupImage;
  }

  _getTemplate() {
    const cardElement = document.querySelector("#card-template").content.querySelector('.element').cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    this._element.querySelector('.element__pic').addEventListener('click', () => {
      this._handleImageClick(this._picName, this._picUrl);
    });
    this._element.querySelector('.element__trash').addEventListener('click', () => {
      this._handleDeleteClick();
    });
    this._element.querySelector('.element__like').addEventListener('click', () => {
      this._handleLikeClick();
    });
  }

 _handleImageClick() {
    handlePopupImage(this._picName, this._picUrl);
  }

  _handleDeleteClick() {
    this._element.remove();
  }

  _handleLikeClick() {
    this._element.querySelector(".element__like").classList.toggle("element__like_active");
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector(".element__pic").src = this._picUrl;
    this._element.querySelector(".element__pic").alt = this._picName;
    this._element.querySelector(".element__text").textContent = this._picName;
    return this._element;
  }
}
