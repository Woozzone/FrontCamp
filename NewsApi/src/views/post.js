import { BaseView } from './base';

export class PostView extends BaseView {
  constructor(model) {
    super(model);
    this.posts = document.getElementById("posts");
  }

  update = data => {
    this.posts.innerHTML = '';

    data.forEach(({ url, urlToImage, title, source }) => {
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
}
