import { ChannelsModel } from './models/channels';
import { ChannelsView } from './views/channels';
import { ChannelsController } from './controllers/channels';

import './assets/stylesheets/style.scss';

const exampleJSON = require('./example.json');

// Channels.
const channelsModel = new ChannelsModel();
const channelsView = new ChannelsView(channelsModel);
const channelsController = new ChannelsController(channelsModel, channelsView);

async function loadPosts() {
  const { PostsModel } = await import(/* webpackChunkName: "postsModel", webpackPrefetch: true */ './models/posts');
  const { PostsView } = await import(/* webpackChunkName: "postsView", webpackPrefetch: true */ './views/posts');
  
  return {
    PostsModel: PostsModel,
    PostsView: PostsView
  }
}

const showPostsButton = document.getElementById('show-posts');
showPostsButton.addEventListener('click', () => {
  loadPosts().then(({ PostsModel, PostsView }) => {
    const postsModel = new PostsModel();
    const postsView = new PostsView(postsModel);

    channelsController.assignModel(postsModel);
    showPostsButton.remove();
  });
})