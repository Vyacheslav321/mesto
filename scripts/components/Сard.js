import {handleCardClick} from '../utils/utils.js';  //импорт функции просмотра фото

export default class Card {
  constructor({picName, picUrl}) {
      this._picName = picName;
      this._picUrl = picUrl;
      this._handleCardClick= handleCardClick
  }

  _getTemplate() {
    const cardElement = document.querySelector("#card-template").content.querySelector('.element').cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    this._elementPic.addEventListener('click', () => {
      this._handleImageClick(this._picName, this._picUrl);
    });
    this._element.querySelector('.element__trash').addEventListener('click', () => {
      this._handleDeleteClick();
    });
    this._elementLike.addEventListener('click', () => {
      this._handleLikeClick();
    });
  }

 _handleImageClick() {
    this._handleCardClick(this._picName, this._picUrl);
  }

  _handleDeleteClick() {
    this._element.remove();
    this._element = null;  //при удалении карточки очистить ссылку на DOM-элемент
  }

  _handleLikeClick() {
    this._elementLike.classList.toggle("element__like_active");
  }

  generateCard() {
    this._element = this._getTemplate();
    this._elementPic = this._element.querySelector('.element__pic');
    this._elementLike = this._element.querySelector('.element__like');
    this._setEventListeners();
    this._elementPic.src = this._picUrl;
    this._elementPic.alt = this._picName;
    this._element.querySelector(".element__text").textContent = this._picName;
    return this._element;
  }
};
