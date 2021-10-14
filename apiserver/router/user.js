const express = require('express')
const router = express.Router();
module.exports = router;

const db = require('../db')
const {
    formatData
} = require('../utils')

router.get('/list', async (req, res) => {
    const sql = `select * from student`
    const data = await db(sql)

    // res.send(formatData.success(data))
    res.send(formatData.success(data))
})