import { BaseModel } from '../base';

export class PostsModel extends BaseModel {
  constructor() {
    super();
    this.posts = null;
    this.setPosts.apply(this);
  }

  getPosts() {
    return this.posts;
  }

  async setPosts(source) {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?${source ? `sources=${source}&` : ''}language=en&apiKey=${this.key}`);
    const data = await response.json();
    this.posts = data.articles;
    this.notify(this.posts);
  }
}