const fs = require('fs')
const path = require('path')
const Controller = require('egg').Controller

class CommonController extends Controller {
  getSfCityList () {
    var uri = path.resolve(__dirname, '../../data/city.json')
    var data = fs.readFileSync(uri, 'utf-8')
    this.ctx.body = data
  }
}

module.exports = CommonController