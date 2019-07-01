const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')

const connection = require('./../db/db')

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' })
})

// 获取首页轮播图数据
router.get('/api/homecasual', (req, res, next) => {
    // 1.1 sql查询语句
    let sqlStr = 'SELECT * FROM pdd_homecasual';
    connection.query(sqlStr, (error, results, fields) => {
        if(error) {
            res.json({err_code: 0, message: '请求数据失败'})
        }else {
            res.json({err_code: 200, message: results})
        }
    })
})

// 获取首页热销商品列表数据
router.get('/api/homenav', (req, res, next) => {
    var file = path.join(__dirname + '/../data/homenav.json')
    fs.readFile(file, 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
        }
        res.send(data)
    })
})
module.exports = router
