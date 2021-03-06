const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: {
        bundle: ['babel-polyfill', 'react-hot-loader/patch', path.resolve(__dirname, 'src', 'index.jsx')]
    },
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    forceEnv: 'build',
                    cacheDirectory: true,
                    presets: [
                        ['env', {
                            targets: {
                                browsers: ['> 5%']
                            }
                        }],
                        'stage-0',
                        'react'
                    ]
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg|ttf|woff2?|eot)(\?.+)?$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
        ]
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'node_modules')
        ],
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html')
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': "'debug'"
        })
    ],
    devServer: {
        hot: true
    }
}