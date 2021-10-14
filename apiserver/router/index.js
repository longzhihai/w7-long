const express = require('express')
const router = express.Router()
module.exports = router;

const userRouter = require('./user')
const goodsRouter = require('./goods')
const loginRouter = require('./login')
const regRouter = require('./reg')

router.use('/user', userRouter)
router.use('/goods', goodsRouter)
router.use('/login', loginRouter)
router.use('/reg', regRouter)