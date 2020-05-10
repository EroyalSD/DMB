const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: "none",
	entry: [
		"./assets/javascript/index.js",
		"./assets/scss/index.scss"
	],
	output: {
        path: path.resolve( __dirname, 'assets' ),
        filename: 'main.js',
    },
	module: {
		rules: [{
			test: /index\.s(a|c)ss$/,
			use: [{
				loader: MiniCssExtractPlugin.loader
			},
			{
				loader: 'css-loader',
				options: {
					importLoaders: 2,
					sourceMap: true
				}
			},
			{
				loader: 'sass-loader',
				options: {
					sourceMap: true
				}
			}]
		},
		{
			test: /\.s(a|c)ss$/,
			exclude: /index.(s(a|c)ss)$/,
			loader: [
				MiniCssExtractPlugin.loader,
				'css-loader',
				{
					loader: 'sass-loader',
					options: {
						sourceMap: true
					}
				}
			]
		}]
	},
	resolve: {
		extensions: ['.js', '.scss'],
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		}),
		new MiniCssExtractPlugin({
			filename: 'site.mini.css',
            chunkFilename: 'site.mini.css'
		})
	],
}
