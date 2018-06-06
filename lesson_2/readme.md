# 搭建基本的前端开发环境

###需求
* 构建需要的 `html` `css` `js`等文件
* 使用 `less`或 `sass` 写 `css`
* 处理、压缩图片
* 使用`ES6`
* 提供静态服务器
* 编写代码工程化

### [html-webpack-plugin](https://webpack.docschina.org/plugins/html-webpack-plugin/)

[html-webpack-plugin](https://webpack.docschina.org/plugins/html-webpack-plugin/)简化了HTML文件的创建，以便为你的webpack包提供服务

```javacript
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var webpackConfig = {
  entry: 'index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js'
  },
  plugins: [new HtmlWebpackPlugin()]
};
```

### `style-loader`
 
### `css-loader`
 
### `less-loader`

### `postcss-loader`

### `autoprefixer`
使用autoprefixer自动补上浏览器兼容

### `postcss-px2rem `
移动端多屏适配rem方案

### [ExtractTextWebpackPlugin](https://webpack.docschina.org/plugins/extract-text-webpack-plugin/)
因为 `style-loader`会将`css-loader`解析的结果转成JS代码，运行时动态的插入 `style`标签让CSS生效，既CSS代码会转变成JS和index.js一起打包，我们需要将CSS从JS中分离出来

### `webpack-dev-start`
```bash
npm install webpack-dev-server --save-dev
```