export default class UserInfo {
  constructor(name, profession) {
    this._name = name;
    this._profession = profession;
    this.setUserInfo = this.setUserInfo.bind(this);
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
    document.querySelector('.profile__user-name').textContent = obj.name;
    document.querySelector('.profile__user-profession').textContent = obj.profession;
  }
}
