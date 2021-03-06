import { BaseView } from '..';
import './style.scss';

export default class ExceptionsView extends BaseView {
  constructor(model) {
    super(model);
    this.popup = document.getElementById('popup');

    document.body.addEventListener('click', e => {
      e.target.parentNode.id === 'popup' && e.target.nodeName === 'BUTTON' && this.clearException();
    });
  }

  update = body => {
    if (!body) {
      this.popup = document.getElementById('popup');
      this.popup && this.popup.remove();

      return;
    }

    const view = `
      <aside class='popup' id='popup'>
        <button class='close'>x</button>
        <p>${body}</p>
      </aside>
    `;

    if (this.popup) {
      this.popup.children['P'].innerText = body;
    } else {
      document.getElementById('app').insertAdjacentHTML('beforeend', view);
    }
  }
}
