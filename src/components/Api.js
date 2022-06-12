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
      .then((defaultCards) => {
        return defaultCards;
      });
  }

  getUserInfo() {
    return fetch(`${this._defaultUrl}users/me`, {
      method: "GET",
      headers: this._headers,
    })
      .then(this._checkResOk)
      .then((defaultUsers) => {
        return defaultUsers;
      });
  }

  //ЛАЙКИ
  setLike(id) {
    return fetch(`${this._defaultUrl}cards/${id}/likes`, {
      method: "PUT",
      headers: this._headers,
    })
    .then(this._checkResOk)
    .then((data) =>{
      return data;
    })
  }

  setDislike(id) {
    return fetch(`${this._defaultUrl}cards/${id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    })
    .then(this._checkResOk)
    .then((data) =>{
      return data;
    })
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
      .then((data) => {
        return data;
      });
  }

  deleteUserCard(idCard) {
    return fetch(`${this._defaultUrl}cards/${idCard}`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then(this._checkResOk)
      .then((data) => {
        return data;
      });
  }
  // Редактирование инфо о пользователе
  editUserInfo(userData) {
    return fetch(`${this._defaultUrl}users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: userData.popupName,
        about: userData.popupWork,
      }),
    })
      .then(this._checkResOk)
      .then((data) => {
        return data;
      });
  }
  // Редактирование аватара пользователя
  editAvatar(userData) {
    return fetch(`${this._defaultUrl}users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: userData.avatarURL,
      }),
    })
      .then(this._checkResOk)
      .then((data) => {
        return data;
      });
  }
}
