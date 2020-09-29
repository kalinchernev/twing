const path = require('path');
const { TwingLoaderWeb } = require('../loader');
const { TwingEnvironment } = require('twing');

const ecAbsPath = path.resolve(__dirname, '../../../packages');
const loader = new TwingLoaderWeb(ecAbsPath);

if (typeof loader.addPath === 'function') {
  loader.addPath(ecAbsPath, 'ecl-twig');
}

module.exports = new TwingEnvironment(loader);
