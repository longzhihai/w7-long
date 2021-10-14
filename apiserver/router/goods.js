const express = require('express')
const router = express.Router();
module.exports = router;

const db=require('../db')

const {formatData}=require('../utils')



// get /api/user/list
router.get('/list',async (req,res)=>{
    const sql = `select * from goods`
    const data = await db(sql)
    // res.send(formatData({data}))
    res.send(formatData.success(data))
})
