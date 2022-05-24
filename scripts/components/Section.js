export default class Section {
  constructor({items, renderer}) {
    this._renderedItems = items;//массив данных, которые нужно добавить на страницу при инициализации класса
    this._renderer = renderer;  //функция, которая отвечает за создание и отрисовку данных на странице
    this._elements = document.querySelector(".elements");  //селектор контейнера, в который нужно добавлять созданные элементы
  }

  addItem(cardElement) {  // Рисую в DOM карточки с фотографиями (function prependCard)
    this._elements.prepend(cardElement);
  }
  generateCard() {
    this._renderedItems.forEach((item) => {
      this._renderer(item);
      // this.addItem(item);
    });
  }
}
