const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')


module.exports = {
    mode: 'development',
    entry: ['babel-polyfill',path.resolve(__dirname, '../src/index.js')],
    output: {
        filename: 'client-bundle.js',
        path: path.resolve(__dirname, '../dist')

    },
    devServer: {
        publicPath: '/',
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                }, 'less-loader']
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                exclude: [/\.(js|mjs|jsx)$/, /\.html$/, /\.json$/,/\.(less|css)$/],
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'static/images/',  //指定图片路径
                            name: '[name].[ext]',
                            publicPath: 'static/images/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '../')
        }),
        new HtmlWebpackPlugin({
            title: 'react-ssr',
            template: path.resolve(__dirname, '../index.html')
        })

    ]

}