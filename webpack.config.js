const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        }, compress: true,
        port: 9000,
    },
}