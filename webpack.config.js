var path = require('path');

module.exports={
	entry:"./app/index.js",
	output:{
		path:path.resolve(__dirname,'./dist'),
		filename:"bundle.js"
	},
	module:{
		loaders:[
			{
				test:/\.js?$/,
				exclude:/(node_modules|bower_components)/,
				loader:"babel-loader",
				query:{
					presets:['es2015','react']
				}
			},{
				test:/\.css$/,
				loader:'style-loader!css-loader'
			}
		]
	},
	devServer:{
		inline:true,
		port:8888
	}
}