const express = require('express')
const router = require('./router')
const proxyRouter = require('./router/proxy')
//创建一个应用
const app = express()

//创建静态资源服务器
app.use(express.static('../src'))

//数据接口
app.use('/api', router)

//代理服务器
app.use('proxy', proxyRouter)


app.listen(5200, function () {
    console.log('server is running');
})