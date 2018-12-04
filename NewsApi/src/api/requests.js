import ExceptionController from '../controllers/ExceptionsController';
const key = 'e048fec14ad14fa9a9f0d34d1542d787';

export class Request {
  constructor() {
    this.path = 'https://newsapi.org/v2/';
  }

  async send(endpoint = 'everything', source, lang = 'en') {
    source = source ? `&sources=${source}` : '';
    const response = await fetch(`${this.path}${endpoint}?language=${lang}${source}&apiKey=${key}`);
    const data = await response.json();
    const isError = response.status !== 200;
    let exceptionController;

    if (isError) {
      exceptionController = await new ExceptionController();
    }

    return {
      isError,
      data
    };
  }
}

export default new Request();