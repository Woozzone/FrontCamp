import Request from '../../api/requests';
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
    const data = await Request.send('sources');
    this.channels = data.sources;
    this.notify(this.channels);
  }
}