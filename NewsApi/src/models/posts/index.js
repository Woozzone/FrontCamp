import NewsService from '../../api/service';
import BaseModel from '..';

export default class PostsModel extends BaseModel {
  constructor() {
    super();
    this.posts = null;
    this.initialize();
  }

  async initialize() {
    const data = await NewsService.getTopPosts();

    this.posts = data.articles;
    this.notify(this.posts);
  }

  getPosts() {
    return this.posts;
  }

  async setPosts(source) {
    const data = await NewsService.getPostsBySource(source);

    this.posts = data.articles;
    this.notify(this.posts);
  }
}