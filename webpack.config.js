var path = require('path'),
    plugins = new Array,
    webpack = require('webpack');

if (process.env.NODE_ENV === 'production') {
    plugins.push(new webpack.optimize.UglifyJsPlugin({ compress: true }))
}

module.exports = {
	entry: './static_dev/index.js',
    output: {
        path: './static/javascripts',
        filename: 'react_meetup.bundle.js'
    },
    plugins: plugins,
    module: {
        loaders: [
            {
                test: [/\.jsx?$/, /\.js$/],
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            },
            {
                test: [/\.scss$/, /\.css$/],
                loaders: ["style", "css", "sass"]
            }
        ]
    }
}
