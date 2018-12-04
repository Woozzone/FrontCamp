const key = 'e048fec14ad14fa9a9f0d34d1542d786';

export class Request {
  constructor() {
    this.path = 'https://newsapi.org/v2/';
  }

  async send(endpoint = 'everything', source, lang = 'en') {
    source = source ? `&sources=${source}` : '';

    const response = await fetch(`${this.path}${endpoint}?language=${lang}${source}&apiKey=${key}`);

    return response.json();
  }
}

export default new Request();