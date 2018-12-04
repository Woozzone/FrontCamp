export default class ExceptionsController {
  constructor() {
    if (!ExceptionsController.instance) {
      ExceptionsController.instance = this;
    } else {
      throw new Error('Please use .getInstance() method instead of new operator.');
    }

    this.initialize();
  }

  async initialize() {
    const { default: ExceptionsModel } = await import(/* webpackChunkName: "exceptionsModel", webpackPrefetch: true */ '../models/exceptions');
    const { default: ExceptionsView } = await import(/* webpackChunkName: "exceptionsView", webpackPrefetch: true */ '../views/exceptions');

    this.exceptionsModel = await new ExceptionsModel();
    this.exceptionsView = await new ExceptionsView(this.exceptionsModel);
  }

  static getInstance() {
    return ExceptionsController.instance || new ExceptionsController();
  }
}
