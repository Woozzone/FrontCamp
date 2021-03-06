import { BaseView } from '..';
import './style.scss';

export default class ChannelsView extends BaseView {
  constructor(model) {
    super(model);
    this.channels = document.getElementById("channels");

    this.channels.addEventListener('click', e => {
      this.updatePosts(e);
    });
  }

  update = data => {
    data.forEach(({ id, name }) => {
      const view = `
        <a class="channel" href=${id} data-id=${id}>
          ${name}
        </a>
      `;

      this.channels.insertAdjacentHTML('beforeend', view);
    });
  }
}
