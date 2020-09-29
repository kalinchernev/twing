const { TwingLoaderArray, TwingSource } = require('twing');

// @see https://nightlycommit.github.io/twing/api.html#create-your-own-loader
class TwingLoaderWeb extends TwingLoaderArray {
  constructor() {
    super([]);
  }
  getSourceContext(name, from) {
    return new TwingSource(localStorage.getItem(name), name);
  }
  exists(name, from) {
    return localStorage.getItem(name) !== null;
  }
}

exports.TwingLoaderWeb = TwingLoaderWeb;
