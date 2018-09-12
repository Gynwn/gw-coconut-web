const ResultJson = (code, message, data) => {
  return {
    code: code,
    message: message,
    data: data
  }
}

const success = (data) => ResultJson(200, "成功", data);
const tokenError = (data) => ResultJson(401, "token认证失败", data);

const Result = {
  success,
  tokenError
}
module.exports = Result;