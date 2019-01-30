class Observable {
  constructor() {
    this.value = null;
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    var index = this.observers.indexOf(observer);
    this.observers.splice(index, 1);
  }

  updateValue(value) {
    this.oldValue = this.value;
    this.value = value || 0;
    this.notify({ value: value, oldValue: this.oldValue, message: 'value updated' });
  }

  getValue() {
    return this.value;
  }

  notify(payload) {
    this.observers.forEach(function (observer) {
      observer.update(payload);
    });
  }
}