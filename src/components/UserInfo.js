export default class UserInfo {
  constructor({ nameSelector, profSelector }) {
    this._name = document.querySelector(nameSelector);
    this._prof = document.querySelector(profSelector);
    this.setUserInfo = this.setUserInfo.bind(this);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      prof: this._prof.textContent
    }
  }

  setUserInfo({ name, prof }) {
    this._name.textContent = name;
    this._prof.textContent = prof;
  }
}
