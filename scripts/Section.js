class Section {
  constructor({items, renderer}, elements) {
    this._items = items;  //массив данных, которые нужно добавить на страницу при инициализации класса
    this._renderer = renderer;  //функция, которая отвечает за создание и отрисовку данных на странице
    this._elements = elements;  //селектор контейнера, в который нужно добавлять созданные элементы
  }
  generateCard() {
    // this._element = this._getTemplate();
    // this._elementPic = this._element.querySelector('.element__pic');
    // this._elementLike = this._element.querySelector('.element__like');
    // this._setEventListeners();
    // this._elementPic.src = this._picUrl;
    // this._elementPic.alt = this._picName;
    // this._element.querySelector(".element__text").textContent = this._picName;
    // return this._element;
  }
  addItem(elements, cardElement) {  // Рисую в DOM карточки с фотографиями (function prependCard)
    elements.prepend(cardElement);
  }
}
