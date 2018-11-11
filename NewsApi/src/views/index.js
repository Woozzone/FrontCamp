export class View {
  constructor(model) {
    this.model = model;
    this.channels = document.getElementById("channels");
    this.posts = document.getElementById("posts");

    this.renderChannels = this.renderChannels.bind(this);
    this.renderPosts = this.renderPosts.bind(this);
    this.render = this.render.bind(this);

    this.channels.addEventListener('click', e => {
      this.updatePosts(e);
    });
  }

  renderChannels() {
    this.model.channels.forEach(({ id, name }) => {
      const view = `
        <a class="channel" href=${id} data-id=${id}>
          ${name}
        </a>
      `;

      this.channels.insertAdjacentHTML('beforeend', view);
    });
  }

  renderPosts() {
    this.posts.innerHTML = '';

    this.model.posts.forEach(({ url, urlToImage, title, source }) => {
      const view = `
        <a class="post" href=${url}>
          <article>
            <figure>
              <img src=${urlToImage ? urlToImage : 'https://via.placeholder.com/500'} alt=${title} />
              <figcaption>${title}</figcaption>
            </figure>
            <span class="source">${source.name}</span>
          </article>
        </a>
      `;

      this.posts.insertAdjacentHTML('beforeend', view);
    });
  }

  render() {
    this.renderChannels();
    this.renderPosts();
  }
}
