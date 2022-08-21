export default class Section {
  constructor ({ items, renderer }, containerSelector) {
    this._renderer = renderer;
    this._items = items;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._items.forEach(item => this._renderer(item));
  }

  addItem(el) {
    this._container.prepend(el);
  }
}
