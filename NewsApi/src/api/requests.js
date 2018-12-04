import exceptionController from '../controllers/ExceptionsController';

const API_KEY = 'e048fec14ad14fa9a9f0d34d1542d787';
const BASE_PATH = 'https://newsapi.org/v2/';

export class Request {
  async send(endpoint = 'everything', query = '') {
    const response = await fetch(`${BASE_PATH}${endpoint}?language=en&apiKey=${API_KEY}${query}`).then(exceptionController.handleExceptions);
    const data = await response.json();

    return data;
  }
}

export default new Request();