/*
* Created by Vincent on 18/6/6
* Email:438419787@qq.com
* Github:https://github.com/VincentCWLOVE/
*/

const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')


/*
* 750px(iphone6)宽度为基准，所以remUnit为75
* */
const remUnit = 75
const baseDpr = 2

module.exports = {
    //入口配置
    entry: {
        index:'./src/index.js'
    },

    // 使用 loader 处理代码
    module:{
        rules: [
            //css 文件
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use:[
                        { loader: 'css-loader', options: { importLoaders: 1 } },
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                plugins: (loader) => [
                                    require('autoprefixer')({
                                        browsers: [
                                            // 加这个后可以出现额外的兼容性前缀
                                            "> 0.01%"
                                        ]
                                    }),
                                    require('postcss-px2rem')({
                                        remUnit: remUnit,
                                        baseDpr:2
                                    })
                                ]
                            }
                        }
                    ]
                })
            },
            // less 文件
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use:[
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                plugins: (loader) => [
                                    require('autoprefixer')({
                                        browsers: [
                                            // 加这个后可以出现额外的兼容性前缀
                                            "> 0.01%"
                                        ]
                                    }),
                                    require('postcss-px2rem')({
                                        remUnit: remUnit,
                                        baseDpr:baseDpr
                                    })
                                ]
                            }
                        },
                        'less-loader'
                    ]
                })
            },
            // js 文件
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015'],
                        plugins: [
                            "transform-runtime"
                        ]
                    }
                }
            }
        ]
    },

    // 使用 plugin 处理 工程文件分割、合并
    plugins: [
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./src/assets/index.html'
        }),
        new ExtractTextPlugin('index.css')
    ],

    // 输出配置
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "[name].js"
    }
}