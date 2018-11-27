import { ChannelsModel } from './models/channels';
import { ChannelsView } from './views/channels';
import { ChannelsController } from './controllers/channels';

import './assets/stylesheets/style.scss';

async function loadPosts() {
  const { PostsModel } = await import('./models/posts');
  const { PostsView } = await import('./views/posts');
  
  return {
    PostsModel: PostsModel,
    PostsView: PostsView
  }
}

const channelsModel = new ChannelsModel();
const channelsView = new ChannelsView(channelsModel);
const channelsController = new ChannelsController(channelsModel, channelsView);

const togglePostsButton = document.getElementById('toggle-posts');
togglePostsButton.addEventListener('click', function() {
  loadPosts().then(({ PostsModel, PostsView }) => {
    const postsModel = new PostsModel();
    const postsView = new PostsView(postsModel);
  
    channelsController.assignModel(postsModel);
  });
})