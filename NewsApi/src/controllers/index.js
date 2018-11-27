export class BaseController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  assignModel = model => {
    this.model = model;
  }
}
