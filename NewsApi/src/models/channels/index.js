import NewsService from '../../api/service';
import BaseModel from '../';

export default class ChannelsModel extends BaseModel {
  constructor() {
    super();
    this.channels = null;
    this.setChannels.apply(this);
  }

  getChannels() {
    return this.channels;
  }

  async setChannels() {
    const data = await NewsService.getChannels();

    this.channels = data.sources;
    this.notify(this.channels);
  }
}