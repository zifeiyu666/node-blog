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

/**
 * 配置应用模板
 * 定义当前应用所使用的的mubanyinqing
 * param1：模板引擎名称，就是模板文件的后缀名；
 * param2: 用于解析处理模板内容的方法
 */
app.engine('html', swig.renderFile)
// 设置模板文件存放目录，第一个参数必须是views，第二个参数是存放目录
app.set('views', './views')
// 注册所使用的模板引擎，第一个参数必须是view engine, 第二个是模板文件的名称，即后缀名
app.set('view engine', 'html')

app.get('/', function(req, res, next) {
  // res.send('欢迎光临')

  /**
   * 读取文件，解析并返回
   * 第一个参数：模板文件相对于views
   */
  res.render('index.html')
})

// 监听http请求
app.listen(8081);