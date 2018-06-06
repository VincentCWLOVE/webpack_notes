
### 环境配置
```bash
# 安装 node ，请自行到官网配置

npm install webpack -g
npm install webpack-command -g
npm install webpack-cli -g

```

### 开始第一个程序

```bash
#创建一个工程目录
mkdir lesson_1
cd lesson_1
npm init
npm install webpack --save-dev

#使用IDE开始编写代码
mkdir src
webpack ./src/app.js

```

### 

```bash
# 最基本的启动webpack的方法
webpack
# 提供watch方法；实时进行打包更新
webpack -w   
# 对打包后的文件进行压缩  webpack -production
webpack -p
# 提供source map，方便调式代码 webpack -development     
webpack -d      
