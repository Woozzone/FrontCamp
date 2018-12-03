import AppController from './controllers/AppController';
import './assets/stylesheets/style.scss';

// Redundant file for testing loaders.
const exampleJSON = require('./example.json');

const appController = new AppController();

const showPostsButton = document.getElementById('show-posts');
showPostsButton.addEventListener('click', () => {
  appController.initializePosts().then(() => {
    showPostsButton.remove();
  });
});
