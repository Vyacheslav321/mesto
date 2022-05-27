//отвечает за управление отображением информации о пользователе на странице
export default class UserInfo {
  constructor(profileName, profileWork, {popupName, popupWork}) {
    this._profileName = profileName,
    this._profileWork = profileWork,
    this._popupName = popupName,
    this._popupWork = popupWork
  };
  getUserInfo() { //метод пригодится когда данные пользователя нужно будет подставить в форму при открытии
    this._popupName.value = this._profileName.textContent;
    this._popupWork.value = this._profileWork.textContent;
  };
  setUserInfo() {
    this._profileName.textContent = this._popupName;  //передаю значения полей попапа на страницу
    this._profileWork.textContent = this._popupWork;  //передаю значения полей попапа на страницу
  };
};