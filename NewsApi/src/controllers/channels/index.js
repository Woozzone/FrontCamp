import { BaseController } from '../';

export class ChannelsController extends BaseController {
  constructor(model, view) {
    super(model, view);

    this.view.updatePosts = this.updatePosts.bind(this);
  }

  setCurrent = source => {
    this.model.current = source;
  }

  updatePosts(e) {
    e.preventDefault();

    if (e.target && e.target.nodeName == "A") {
      const source = e.target.getAttribute('data-id');

      this.setCurrent(source);
      
      if (this.model.setPosts) {
        this.model.setPosts(source);
      }
    }
  }
}
