export default class Api {
  constructor({ defaultUrl, headers }) {
    (this._defaultUrl = defaultUrl), (this._headers = headers);
  }

  _checkResOk(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  //Получение информаци о карточках и пользователе
  getCards() {
    return fetch(`${this._defaultUrl}cards`, {
      method: "GET",
      headers: this._headers,
    })
      .then(this._checkResOk)
  }

  getUserInfo() {
    return fetch(`${this._defaultUrl}users/me`, {
      method: "GET",
      headers: this._headers,
    })
      .then(this._checkResOk)
  }

  //ЛАЙКИ
  setLike(id) {
    return fetch(`${this._defaultUrl}cards/${id}/likes`, {
      method: "PUT",
      headers: this._headers,
    })
    .then(this._checkResOk)
  }

  setDislike(id) {
    return fetch(`${this._defaultUrl}cards/${id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    })
    .then(this._checkResOk)
  }

  //  Добавление/Удаление карточки пользователя
  createUserCard(cardItem) {
    return fetch(`${this._defaultUrl}cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: cardItem.picName,
        link: cardItem.picURL,
      })
    })
      .then(this._checkResOk)
  }

  deleteUserCard(idCard) {
    return fetch(`${this._defaultUrl}cards/${idCard}`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then(this._checkResOk)
  }
  // Редактирование инфо о пользователе
  editUserInfo(userData) {
    return fetch(`${this._defaultUrl}users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: userData.name,
        about: userData.about,
      }),
    })
      .then(this._checkResOk)
  }
  // Редактирование аватара пользователя
  editAvatar(userData) {
    return fetch(`${this._defaultUrl}users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: userData.avatar,
      }),
    })
      .then(this._checkResOk)
  }
}
