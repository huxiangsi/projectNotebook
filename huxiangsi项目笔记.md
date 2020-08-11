### 胡相思 项目开发

#### 树形结构渲染数据插件

**vue-table-with-tree-grid**![image-20200805095522633](C:\Users\Matebook 13\AppData\Roaming\Typora\typora-user-images\image-20200805095522633.png)

**使用**

https://github.com/MisterTaki/vue-table-with-tree-grid![image-20200805100948038](C:\Users\Matebook 13\AppData\Roaming\Typora\typora-user-images\image-20200805100948038.png)

#### 富文本编辑器

**vue-quill-editor**

#### 深拷贝插件

lodash

www.lodashjs.cn

#### Echarts

https://echarts.apache.org/zh/index.html

#### vue项目优化策略

##### 生成打包报告

1. 通过vue-cli命令选项生成打包报告

````
// --report 选项可以生成 report.html以帮助分析包内容
vue-cli-service build --report

在package.json 中配置
````

2. 通过可视化UI面板直接查看报告（推荐）

   在可视化的UI面板中，通过**控制台**和**分析**面板，可以方便地看到项目中所存在的问题

##### 第三方库启用CDN

![image-20200811142825521](C:\Users\Matebook 13\AppData\Roaming\Typora\typora-user-images\image-20200811142825521.png)

- 配置![image-20200811142933387](C:\Users\Matebook 13\AppData\Roaming\Typora\typora-user-images\image-20200811142933387.png)
- ![image-20200811143238782](C:\Users\Matebook 13\AppData\Roaming\Typora\typora-user-images\image-20200811143238782.png)![image-20200811143431551](C:\Users\Matebook 13\AppData\Roaming\Typora\typora-user-images\image-20200811143431551.png)

Element-UI组件按需加载

#####　路由懒加载

![image-20200811153911088](C:\Users\Matebook 13\AppData\Roaming\Typora\typora-user-images\image-20200811153911088.png)

首页内容自定制

#### 为页面添加进度条

**nProgress**

#### 移除开发时console代码 

**babel-plugin-transform-remove-console**

https://www.npmjs.com/package/babel-plugin-transform-remove-console

#### 通过 vue.config.js 修改webpack的默认配置

![image-20200811135747086](C:\Users\Matebook 13\AppData\Roaming\Typora\typora-user-images\image-20200811135747086.png)

![image-20200811135756328](C:\Users\Matebook 13\AppData\Roaming\Typora\typora-user-images\image-20200811135756328.png)

![image-20200811135924774](C:\Users\Matebook 13\AppData\Roaming\Typora\typora-user-images\image-20200811135924774.png)

#### 开发模式与发布模式 指定不同的打包入口

默认情况下，vue项目的**开发模式**与**发布模式**，共用同一个打包的入口文件***src/main.js***。为了将项目的开发过程与发布过程分离，可以分为两种模式，各自指定打包的入口文件：，即

**1. 发开模式的入口文件：src/main-dev.js**

**2.发布模式的入口文件：src/main-prod.js**

![image-20200811141624045](C:\Users\Matebook 13\AppData\Roaming\Typora\typora-user-images\image-20200811141624045.png)

![image-20200811141647494](C:\Users\Matebook 13\AppData\Roaming\Typora\typora-user-images\image-20200811141647494.png)

**chainWebpack 自定义打包入口**![image-20200811141958996](C:\Users\Matebook 13\AppData\Roaming\Typora\typora-user-images\image-20200811141958996.png)

#### node 创建 express 本地服务器

1. 创建文件夹 vue_shop_server

2. VScode打开vue_shop_server

3. 初始化包管理配置文件

   ```javascript
   npm init -y
   ```

4. 安装express第三方包

   ```
   npm install express -S
   ```

5. 将打包后的项目 dist文件夹 赋值到 vue_shop_server 中![image-20200811161340949](C:\Users\Matebook 13\AppData\Roaming\Typora\typora-user-images\image-20200811161340949.png)

6. 创建入口文件 app.js

7. 导入express - 注册中间件 - 托管静态资源 - 启动服务器

   ```javascript
   //导入express
   const express = require('express')
   //调用express 创建服务器
   const app = express()
   
   /* 调用express的方法 注册中间件， 并托管静态资源 */
   app.use(express.static('./dist'))
   
   /* 启动服务器 */
   app.listen(80, () => {
       /* 提供一个响应消息的回调函数 */
       console.log('server running at http://127.0.01')
   })
   ```

8. 运行项目

   ```javascript
   node ./app.js
   ```

   ![image-20200811162432604](C:\Users\Matebook 13\AppData\Roaming\Typora\typora-user-images\image-20200811162432604.png)

#### 开启gzip配置

使用**gzip**可以减小文件体积,使传输速度更快![image-20200811162813797](C:\Users\Matebook 13\AppData\Roaming\Typora\typora-user-images\image-20200811162813797.png)

1. 安装包

   ```
   npm i compression -D
   ```

2. 导入包

   ```
   const compression = require('compression')
   ```

3. 启用中间件 (必须在静态资源托管之前)

   ```
   app.use(compression());
   ```

   ![image-20200811163639747](C:\Users\Matebook 13\AppData\Roaming\Typora\typora-user-images\image-20200811163639747.png)

#### 配置HTTPS服务

申请SSL证书(https://freessl.org)![image-20200811164151808](C:\Users\Matebook 13\AppData\Roaming\Typora\typora-user-images\image-20200811164151808.png)

![image-20200811164247469](C:\Users\Matebook 13\AppData\Roaming\Typora\typora-user-images\image-20200811164247469.png)

#### 使用pm2管理应用

![image-20200811164639548](C:\Users\Matebook 13\AppData\Roaming\Typora\typora-user-images\image-20200811164639548.png)

![image-20200811164726628](C:\Users\Matebook 13\AppData\Roaming\Typora\typora-user-images\image-20200811164726628.png)

![image-20200811164837913](C:\Users\Matebook 13\AppData\Roaming\Typora\typora-user-images\image-20200811164837913.png)