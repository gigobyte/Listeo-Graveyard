const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: {
        bundle: ['@babel/polyfill', 'react-hot-loader/patch', path.resolve(__dirname, 'src', 'index.tsx')]
    },
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    forceEnv: 'build',
                    cacheDirectory: true,
                    presets: [
                        ['@babel/preset-env', {
                            targets: {
                                browsers: ['> 5%']
                            }
                        }],
                        '@babel/preset-stage-0',
                        '@babel/preset-react',
                        '@babel/preset-typescript'
                    ],
                    plugins: ['react-hot-loader/babel']
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