import { BaseModel } from '../';

export class ErrorsModel extends BaseModel {
  constructor() {
    super();
    this.errors = null;
  }

  // getChannels() {
  //   return this.channels;
  // }

  // async setChannels() {
  //   const response = await fetch(`https://newsapi.org/v2/sources?language=en&apiKey=${this.key}`);
  //   const data = await response.json();
  //   this.channels = data.sources;
  //   this.notify(this.channels);
  // }
}