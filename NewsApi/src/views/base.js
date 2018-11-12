export class BaseView {
  constructor(model) {
    this.model = model;
    this.model.subscribe(this);
  }
}
