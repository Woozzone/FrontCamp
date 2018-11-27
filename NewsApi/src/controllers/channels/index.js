import { BaseController } from '../';

export class ChannelsController extends BaseController {
  constructor(model, view) {
    super(model, view);

    this.view.updatePosts = this.updatePosts.bind(this);
  }

  updatePosts(e) {
    e.preventDefault();

    if (e.target && e.target.nodeName == "A") {
      const source = e.target.getAttribute('data-id');
      
      if (this.model.setPosts) {
        this.model.setPosts(source);
      }
    }
  }
}
