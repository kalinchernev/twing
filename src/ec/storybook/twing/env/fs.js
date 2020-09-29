const path = require('path');
const { TwingEnvironment, TwingLoaderFilesystem } = require('twing');

const ecAbsPath = path.resolve(__dirname, '../../../packages');
const loader = new TwingLoaderFilesystem(ecAbsPath);

if (typeof loader.addPath === 'function') {
  loader.addPath(ecAbsPath, 'ecl-twig');
}

module.exports = new TwingEnvironment(loader);
