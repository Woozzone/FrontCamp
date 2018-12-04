import BaseModel from '../';

export default class ExceptionsModel extends BaseModel {
  constructor() {
    super();
    this.exception = null;
  }

  getException() {
    return this.exception;
  }

  setException(exception) {
    this.exception = exception;
    this.notify(this.exception);
  }
}