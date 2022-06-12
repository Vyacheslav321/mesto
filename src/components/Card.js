export default class Card {
  constructor({item, userId, like, dislike, handleCardClick, deleteCardClick}) {
      this._picName = item.name,
      this._picUrl = item.link,
      this._likes = item.likes,
      this._id = item._id,  //  ID - карточки
      this._ownerId = item.owner._id, //  ID - владелец карточки
      this._userId = userId,  //  ID - мой
      this._like = like,  //  колбэк лайков
      this._dislike = dislike,  //  колбэк дизлайков
      this._handleCardClick = handleCardClick,  //  колбэк просмотра карточки
      this._deleteCardClick = deleteCardClick,  //колбэк удаления карточки
      this._handleLikeClick = this._handleLikeClick.bind(this);
  }

  _getTemplate() {
    const cardElement = document.querySelector("#card-template").content.querySelector('.element').cloneNode(true);
    return cardElement;
  }

  _deleteButton() {
    if (this._userId !== this._ownerId) {
      this._elementTrash.style.display = 'none';
    }
  }

  _checkId() {
    const isLikeUser = this._likes.find(user => user._id === this._userId)
    return isLikeUser
  }

  _handleLikeCard() {
    if (this._checkId()) {  //если мой ID есть в лайках
      this._likeCounter.textContent = this._likes.length;
      this._elementLike.classList.add("element__like_active");
    } else {
      this._likeCounter.textContent = this._likes.length;
      this._elementLike.classList.remove("element__like_active");
    }
  }

  _toggleLikeButton() {
    if (this._checkId()) {  //если мой ID есть в лайках
      this._dislike(this._id, this._handleLikeClick);
    } else {
      this._like(this._id, this._handleLikeClick);
    }
  };

  _handleLikeClick(like) {
    this._likes = like;
    this._handleLikeCard();
  };

  _setEventListeners() {
    this._elementPic.addEventListener('click', () => {
      this._handleCardClick(this._picName, this._picUrl);
    });
    this._elementTrash.addEventListener('click', () => {
      this._deleteCardClick(this);
    });
    this._elementLike.addEventListener('click', () => {
      this._toggleLikeButton();
    });

    this._deleteButton();
    this._handleLikeCard();
  }

  generateCard() {
    this._element = this._getTemplate();
    this._elementPic = this._element.querySelector('.element__pic');
    this._elementLike = this._element.querySelector('.element__like');
    this._likeCounter = this._element.querySelector('.element__like-counter');
    this._elementTrash = this._element.querySelector('.element__trash');
    this._setEventListeners();
    this._elementPic.src = this._picUrl;
    this._elementPic.alt = this._picName;
    this._element.querySelector(".element__text").textContent = this._picName;
    return this._element;
  }

  deleteCard() {
    this._element.remove();
  }
};
