const options = {
  key: 'e048fec14ad14fa9a9f0d34d1542d786'
}

export class Model {
  constructor() {
    this.channels = null;
    this.posts = null;

    this.setChannels.apply(this);
    this.setPosts.apply(this);
  }

  getChannels() {
    return this.channels;
  }

  setChannels() {
    fetch(`https://newsapi.org/v2/sources?language=en&apiKey=${options.key}`)
      .then(response => response.json())
      .then(data => this.channels = data.sources);
  }

  getPosts() {
    return this.posts;
  }

  setPosts(source, cb) {
    fetch(`https://newsapi.org/v2/top-headlines?${source ? `sources=${source}&` : ''}language=en&apiKey=${options.key}`)
      .then(response => response.json())
      .then(data => {
        this.posts = data.articles;

        if (cb) cb();
      });
  }
}