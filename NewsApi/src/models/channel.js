import { BaseModel } from './base';

export class ChannelModel extends BaseModel {
  constructor() {
    super();
    this.channels = null;
    this.setChannels.apply(this);
  }

  getChannels() {
    return this.channels;
  }

  async setChannels() {
    const response = await fetch(`https://newsapi.org/v2/sources?language=en&apiKey=${this.key}`);
    const data = await response.json();
    this.channels = data.sources;
    this.notify(this.channels);
  }
}