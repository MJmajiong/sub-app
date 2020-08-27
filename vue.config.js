// const packageName = require('./package.json').name;
module.exports = {
  devServer:{
		port: 8099,
		headers:{
			"Access-Control-Allow-Origin":"*"
		}
	},
	configureWebpack:{
		output: {
			library: `sub-app`,
			libraryTarget: 'umd',
			jsonpFunction: `webpackJsonp_sub-app`,
		},
	}
  
};