
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
//生成内存html 根据提供的template html 不需要再template html中引入js 会自动引入output 的bundle.js
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module: { //配置第三方模块加载器
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.(jpg|png|jpeg|gif|bmp|svg|eot|ttf|woff|woff2)$/, use: 'url-loader?limit=5000&name=[hash:8]-[name].[ext]' },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.vue$/, loader: 'vue-loader' },
            {
                test: /\.css$/, use: ['vue-style-loader', 'css-loader']
            }

        ]
    }
}