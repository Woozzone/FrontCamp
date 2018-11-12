import { ChannelModel } from './models/channel';
import { ChannelView } from './views/channel';
import { PostModel } from './models/post';
import { PostView } from './views/post';
import { Controller } from './controllers';

import './assets/stylesheets/style.scss';

const channelModel = new ChannelModel();
const channelView = new ChannelView(channelModel);
const postModel = new PostModel();
const postView = new PostView(postModel);
const appController = new Controller(postModel, channelView);








