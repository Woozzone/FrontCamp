import { Model } from './models';
import { View } from './views';
import { Controller } from './controllers';

import './assets/stylesheets/style.scss';

const model = new Model();

// Need assistance with async data inside model...
setTimeout(function() {
  const view = new View(model);
  const controller = new Controller(model, view);
  view.render();
}, 1000);








