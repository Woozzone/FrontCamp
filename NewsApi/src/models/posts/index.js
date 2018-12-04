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
    const response = await Request.send('top-headlines', source);

    if (response.isError) {
      return;
    }

    this.posts = response.data.articles;
    this.notify(this.posts);
  }
}