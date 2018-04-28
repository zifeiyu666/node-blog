/**
 * Created by zifeiyu on 2018/4/28
 * 应用程序的启动入口文件
 */

//  加载express
var express = require('express')
// 加载模板处理模块
var swig = require('swig')
// 创建app应用 
var app = express();

app.get('/', function(req, res, next) {
  res.send('欢迎光临')
})

// 监听http请求
app.listen(8081);