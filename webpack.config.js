var Encore = require('@symfony/webpack-encore');
//const { VueLoaderPlugin } = require('vue-loader');

Encore
	.setOutputPath('web/build')
	.setPublicPath('/build')
	.addEntry('app', './assets/js/app.js')
	.cleanupOutputBeforeBuild()
	//.addPlugin(new VueLoaderPlugin())
	.disableSingleRuntimeChunk()
	.enableVueLoader();

module.exports = Encore.getWebpackConfig();