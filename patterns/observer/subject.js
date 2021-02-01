class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers.splice(
      this.observers.findIndex((e) => e === observer),
      1
    );
  }

  containsObserver(observer) {
    return this.observers.includes(observer);
  }

  observersCount() {
    return this.observers.length;
  }

  notifyObservers(notification) {
    this.observers.forEach((observer) => {
      observer.update(notification);
    });
  }
}

export default Subject;
