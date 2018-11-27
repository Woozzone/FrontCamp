export class BaseModel {
  constructor() {
    this.key = 'e048fec14ad14fa9a9f0d34d1542d786';
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  notify(data) {
    this.observers.forEach(observer => {
      observer.update(data);
    })
  }
}