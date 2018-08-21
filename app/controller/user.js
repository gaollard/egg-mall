const Controller = require('egg').Controller

class UserController extends Controller {

  async login () {
    const { mobile, password } = this.ctx.request.body
    let ret = await this.service.user.login({mobile, password})
    this.ctx.body = ret
  }

  async register () {
    const { username, mobile, password } = this.ctx.request.body
    let ret = await this.service.user.register({ username, mobile, password })
    this.ctx.body = ret
  }

  async getUserInfo () {
    let { loginToken } = this.ctx.request.body
    let ret = await this.service.user.getUserInfo({ loginToken })
    this.ctx.body = ret
  }
}

module.exports = UserController;