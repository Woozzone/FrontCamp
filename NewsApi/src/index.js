import { ChannelsModel } from './models/channels';
import { ChannelsView } from './views/channels';
import { PostsModel } from './models/posts';
import { PostsView } from './views/posts';
import { ChannelsController } from './controllers/channels';

import './assets/stylesheets/style.scss';

const channelsModel = new ChannelsModel();
const channelsView = new ChannelsView(channelsModel);
const postsModel = new PostsModel();
const postsView = new PostsView(postsModel);
const channelsController = new ChannelsController(postsModel, channelsView);








