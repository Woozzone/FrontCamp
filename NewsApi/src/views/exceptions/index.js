import { BaseView } from '..';
import './style.scss';

export default class ExceptionsView extends BaseView {
  constructor(model) {
    super(model);
  }

  update = body => {
    const view = `
      <aside class="popup">
        <p>${body}</p>
      </aside>
    `;

    document.getElementsById('app').insertAdjacentHTML('beforeend', view);
  }
}
