const webpack = require('webpack');
var HTMLWebpackPlugin = require("html-webpack-plugin");
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + "/public/index.html",
	filename: "index.html",
	inject: "body"
});

module.exports = {
	entry: __dirname + "/src/index.js",
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	},
	output: {
		filename: "transformed.js",
		path: __dirname + "/build"
	},
	plugins: [
		HTMLWebpackPluginConfig, 
		new webpack.HotModuleReplacementPlugin(
			{     multiStep: true   }
		)
	],

	mode : 'development',
	devServer: {
		historyApiFallback: true, 	 
		hot: true, 	  
		inline: true, 	  
		host: 'localhost', 
		// Defaults to `localhost` 	  
		port: 8080, // Defaults to 8080 	  
		proxy: { 	    
			'^/api/*': { 	      
				target: 'http://localhost:5000/api/', 	      
				secure: false 	    
			}	 	  
		} 	
	}
};


