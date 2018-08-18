const Service = require('egg').Service;

class UserService extends Service {

  // 用户注册
  async register (ctx) {
    const { username, mobile, password } = this.ctx.request.body
    let ret = await this.app.model.User.register({username, mobile, password})
    ctx.body = ret;
  },

  // 用戶登錄
  async login (ctx) {
    const { mobile, password } = this.ctx.request.body
    let ret = await this.app.model.User.login({mobile, password})
    ctx.body = ret;
  },

  // 获取用户信息
  async getUserInfo (ctx) {
    let { loginToken } = this.ctx.request.body
    let ret = await this.app.model.User.getUserInfo({ loginToken })
    ctx.body = ret;
  }
}

module.exports = UserService;