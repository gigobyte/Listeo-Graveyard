const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    //devtool: 'inline-sourcemap',
    entry: path.resolve(__dirname, 'client-src', 'app.js'),
    output: {
        path: path.resolve(__dirname, 'client-dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader?singleton',
                    loader: 'css-loader?modules&minimize!sass-loader'
                })
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader?singleton',
                    loader: 'css-loader!sass-loader'
                })
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {publicPath: '/', limit: 5000}
                    },
                    {
                        loader: 'img-loader',
                        options: {progressive: true}
                    }
                ]
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            }
        ]
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'client-src')
        },
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new ExtractTextPlugin('bundle.css'),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'client-src', 'index.html'),
                to: path.resolve(__dirname, 'client-dist', 'index.html')
            },
            {
                from: path.resolve(__dirname, 'client-src', 'images', 'favicon.ico'),
                to: path.resolve(__dirname, 'client-dist', 'favicon.ico')
            }
        ]),
        new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),
        new webpack.DefinePlugin({'process.env': {'NODE_ENV': JSON.stringify('production')}}),
        new webpack.optimize.AggressiveMergingPlugin()
    ]
}
