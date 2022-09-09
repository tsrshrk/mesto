export default class Api {
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._headers = config.headers;
  }

  _checkRes(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers
      })
      .then(res => {
        return this._checkRes(res);
      })
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
      })
      .then(res => {
        return this._checkRes(res);
      })
  }

  patchUserInfo(info) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: info.name,
        about: info.about
      })
      })
      .then(res => {
        return this._checkRes(res);
      })
  }

  patchUserAvatar(obj)  {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
        body: JSON.stringify({
          avatar: obj.link
        })
      })
      .then(res => {
        return this._checkRes(res);
      })
  }

  makeLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers,
      })
      .then(res => {
        return this._checkRes(res);
      })
  }

  makeDislike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers,
      })
      .then(res => {
        return this._checkRes(res);
      })
  }

  addNewCard(obj) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: obj.name,
        link: obj.link
      })
      })
      .then(res => {
        return this._checkRes(res);
      })
  }

  removeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
      })
      .then(res => {
        return this._checkRes(res);
      })
  }
}
