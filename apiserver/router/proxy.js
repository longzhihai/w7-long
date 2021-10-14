const express = require('express')
const router = express.Router();
module.exports = router;

const {
    createProxyMiddleware
} = require('http-proxy-middleware');


// /proxy/offer
const offerProxy = createProxyMiddleware({
    //目标服务器
    target: 'https://offer.qfh5.cn',
    changeOrigin: true,
    // 重写路径：过滤掉多余的路径
    pathRewrite: {
        '^/proxy/offer': ''
    }

})

router.use('/offer', offerProxy)