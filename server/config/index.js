const config = {
  // 应用端口
  port: 8081,
  // token加密密钥
  jwt_secretOrPrivateKey: 'gw-coconut-web',
  // token超时时间
  jwt_expiresIn: 60 * 60 * 1
}
module.exports = config;