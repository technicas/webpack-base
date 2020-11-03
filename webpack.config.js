const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname, './src/index.html'),
    filename: 'index.html'
})


module.exports = {
    mode: 'development', //development production
    plugins: [
        htmlPlugin
    ],
    module: {//webpack默认只能打包处理.js后缀类型的文件
        //所有第三方模块的配置规则
        rules: [//第三方匹配规则
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ },
            // { test: /\.css$/, use: ['style-loader', 'css-loader?modules']} //打包处理css样式表第三方loader
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[path][name]-[local]',
                            },
                        }
                    }
                ]
            },
            {test: /\.ttf|woff|woff2|eot|svg$/, use: 'url-loader'} //打包处理字体文件的loader
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'], //这几个文件的后缀名可以不写，自动补全
        alias: { //表示别名
            '@': path.join(__dirname, './src') //这样，@符号表示项目根目录中src这一层路径
        }
    }
}