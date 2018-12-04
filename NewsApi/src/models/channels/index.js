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
    const response = await Request.send('sources');

    if (response.isError) {
      return;
    }

    this.channels = response.data.sources;
    this.notify(this.channels);
  }
}