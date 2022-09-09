export default class UserInfo {
  constructor(nameSelector, professionSelector, avatarSelector) {
    this._name = document.querySelector(nameSelector);
    this._profession = document.querySelector(professionSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      prof: this._profession.textContent
    }
  }

  setUserInfo(obj) {
    this._name.textContent = obj.name;
    this._profession.textContent = obj.profession;
    this._avatar.src = obj.avatar;
    this.Id = obj._id;
  }
}
