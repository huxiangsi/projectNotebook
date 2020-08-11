//导入express
const express = require('express')
/* 导入 compression for gzip */
const compression = require('compression')
//调用express 创建服务器
const app = express()

/* 启动中间件 for gzip */
//compression（） 启用必须在托管静态资源前
app.use(compression())
/* 调用express的方法 注册中间件， 并托管静态资源 */
app.use(express.static('./dist'))

/* 启动服务器 在80端口*/
app.listen(80, () => {
    /* 提供一个响应消息的回调函数 */
    console.log('server running at http://127.0.01')
})
