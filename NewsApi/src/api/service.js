import Request from './requests';

export class NewsService {
  getChannels() {
    return Request.send('sources');
  }

  getTopPosts() {
    return Request.send('top-headlines');
  }

  getPostsBySource(source) {
    return Request.send('top-headlines', `&sources=${source}`);
  }
}

export default new NewsService();