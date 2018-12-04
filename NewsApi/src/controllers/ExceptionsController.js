import ERRORS from '../api/errors';

class ExceptionsController {
  constructor() {
    this.handleExceptions = this.handleExceptions.bind(this);
  }

  async initialize() {
    const { default: ExceptionsModel } = await import(/* webpackChunkName: "exceptionsModel", webpackPrefetch: true */ '../models/exceptions');
    this.model = new ExceptionsModel();

    const { default: ExceptionsView } = await import(/* webpackChunkName: "exceptionsView", webpackPrefetch: true */ '../views/exceptions');
    this.view = new ExceptionsView(this.model);
    this.view.clearException = this.clearException.bind(this);
  }

  setException(exception) {
    this.model.setException(exception);
  }

  clearException() {
    this.model.clearException();
  }

  async handleExceptions(response) {
    if (!response.ok) {
      await this.initialize();
      this.setException(ERRORS[response.status]);
    }

    return response;
  }
}

export default new ExceptionsController();
