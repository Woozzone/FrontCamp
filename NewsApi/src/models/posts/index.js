import Request from '../../api/requests';
import BaseModel from '..';

export default class PostsModel extends BaseModel {
  constructor() {
    super();
    this.posts = null;
    this.setPosts.apply(this);
  }

  getPosts() {
    return this.posts;
  }

  async setPosts(source) {
    const data = await Request.send('top-headlines', source);
    this.posts = data.articles;
    this.notify(this.posts);
  }
}