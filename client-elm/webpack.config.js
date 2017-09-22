const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src', 'index.js')
    },
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.elm$/,
                exclude: [/elm-stuff/, /node_modules/],
                use: [
                    {
                        loader: 'elm-webpack-loader',
                        options: {
                            verbose: true,
                            warn: true
                        }
                    },
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg|ttf|woff2?|eot)(\?.+)?$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            publicPath:  path.resolve(__dirname, '..', 'dist'),
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
        ],
        noParse: /\.elm$/
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html')
        })
    ],
    devServer: {
        inline: true,
        stats: { colors: true },
    }
}
