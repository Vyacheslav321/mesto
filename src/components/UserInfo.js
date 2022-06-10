//отвечает за управление отображением информации о пользователе на странице
export default class UserInfo {
  constructor(profileSelectors) {
    this._profileName = document.querySelector(profileSelectors.name),
    this._profileWork = document.querySelector(profileSelectors.work),
    this._profileAvatar = document.querySelector(profileSelectors.avatar),
    this._id = ''
  };
  getUserInfo() {
    return {
      name: this._profileName.textContent,
      work: this._profileWork.textContent,
      avatar: this._profileAvatar.src
    }
  };
  setUserInfo(userData) {
    this._profileName.textContent = userData.name;  //передаю значения полей попапа на страницу
    this._profileWork.textContent = userData.work;  //передаю значения полей попапа на страницу
    this._id = userData._id;
    this._profileAvatar.src = userData.avatar;
  };
  getId() {
    return this._id;
  }
};
