const mysql = require('mysql')

let connection = mysql.createConnection({
    host: '127.0.0.1',  // 数据库的地址
    user: 'root',    // 账号
    password: '',      // 密码
    database: 'pdd'    // 数据库名称
})

connection.connect();

module.exports = connection;