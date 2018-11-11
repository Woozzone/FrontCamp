export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.updatePosts = this.updatePosts.bind(this);
  }

  updatePosts(e) {
    e.preventDefault();

    if (e.target && e.target.nodeName == "A") {
      const source = e.target.getAttribute('data-id');
      this.model.setPosts(source, this.view.renderPosts);
    }
  }
}
