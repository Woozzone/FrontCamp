import ChannelsModel from '../models/channels';
import ChannelsView from '../views/channels';

export default class AppController {
  constructor() {
    if (!AppController.instance) {
      AppController.instance = this;
    } else {
      throw new Error('Please use .getInstance() method instead of new operator.');
    }

    this.channelsModel = new ChannelsModel();
    this.channelsView = new ChannelsView(this.channelsModel);

    this.channelsView.updatePosts = this.updatePosts.bind(this);
  }

  async initializePosts() {
    const { default: PostsModel } = await import(/* webpackChunkName: "postsModel", webpackPrefetch: true */ '../models/posts');
    const { default: PostsView } = await import(/* webpackChunkName: "postsView", webpackPrefetch: true */ '../views/posts');

    this.postsModel = new PostsModel();
    this.postsView = new PostsView(this.postsModel);
  }

  updatePosts(e) {
    e.preventDefault();

    if (!this.postsModel) {
      return;
    }

    if (e.target && e.target.nodeName === 'A') {
      const source = e.target.getAttribute('data-id');
      this.postsModel.setPosts(source);
    }
  }

  static getInstance() {
    return AppController.instance || new AppController();
  }
}
