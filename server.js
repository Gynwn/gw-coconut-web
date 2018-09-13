const express = require('express');
const app = express();
const expressJWT = require('express-jwt');
const config = require('./server/config');
const result = require('./server/infrastructure/result');
const jwt = require('jsonwebtoken');

//加密token 校验token时要使用
const secretOrPrivateKey = config.jwt_secretOrPrivateKey;

// token超时时间。单位：秒。
const expiresIn = config.jwt_expiresIn

// 拦截器，校验token
app.use(expressJWT({
  secret: secretOrPrivateKey
}).unless({
  path: ['/login']  //除了这个地址，其他的URL都需要验证
}));

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    if (err.inner.name === "TokenExpiredError") {
      res.json(Object.assign({}, result.tokenError("token超时")));
    }
    if (err.inner.name === "JsonWebTokenError") {
      res.json(Object.assign({}, result.tokenError("token错误")));
    }
  }
});

//登陆接口
app.get('/login', function (req, res) {
  if (req.query.userId === "admin" && req.query.password === "123456") {
    res.json(Object.assign({}, result.success(), { userId: req.query.userId }, {
      token: jwt.sign(
        { userId: req.query.userId },
        secretOrPrivateKey,
        { expiresIn: expiresIn }
      )
    }))
  } else {
    res.json(Object.assign({}, result.authenError(), { userId: req.query.userId }));
  }
})

app.get('/aaa', function (req, res) {
  send(req, res, result.success("Hello nnn"));
});

const send = (req, res, result) => {
  res.json(Object.assign({}, result, { userId: req.user.userId }, {
    token: jwt.sign(
      { userId: req.user.userId },
      secretOrPrivateKey,
      { expiresIn: expiresIn }
    )
  }))
}


var server = app.listen(config.port, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Gw-Coconut-Web已成功启动，访问地址为 http://%s:%s", host, port);
})