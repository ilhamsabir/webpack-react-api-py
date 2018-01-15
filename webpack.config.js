'use strict'

const path = require('path')
const webpack = require('webpack')

module.exports = {
	entry: path.resolve(__dirname, 'src') + '/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main-bundle.js',
		publicPath: '/dist/',
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				// exclude: /node_modules/,
				include: path.resolve(__dirname, 'src'),
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015'],
				},
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader',
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)$/,
				loader: 'file-loader?limit=100000',
			},
		],
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
		}),
	],
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 8100,
	},
}
