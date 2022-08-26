export default class UserInfo {
  constructor(name, profession) {
    this._name = name;
    this._profession = profession;
    this.setUserInfo = this.setUserInfo.bind(this);
    this._nameField = document.querySelector('.profile__user-name');
    this._professionField = document.querySelector('.profile__user-profession');
  }

  getUserInfo() {
    return {
      name: this._name,
      prof: this._profession
    }
  }

  setUserInfo(obj) {
    this._name = obj.name;
    this._profession = obj.profession;
    this._nameField.textContent = obj.name;
    this._professionField.textContent = obj.profession;
  }
}
