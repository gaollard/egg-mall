const Service = require('egg').Service
const utility = require('utility')

const utils = {
  // 加密加盐
  md5Encode (pwd) {
    return utility.md5(`${pwd}&salt=WK1hg2d90l`)
  },
  // 参数校验
  checkParams (params) {
    for(let key in params) {
      if (key === '' || key === 'undefined' || key === null) {
        return false;
      }
    }
  },
  // 获取n个随机数
  getRandoms(n = 5) {
    let ret = '';
    for(let i = 0; i < n; i++) {
      ret += Math.floor(Math.random() * 10);
    }
    return ret;
  },
  // 生成用户登录token
  createLoginToken (mobile) {
    let randoms = this.getRandoms(5);
    return this.md5Encode(`userkey_${mobile}_${randoms}`);
  },
  // 混淆用户密码
  encodePwd (str) {
    return this.md5Encode(str);
  }
}

const errCodeMap = {
  SUCCESS: {
    code: '0',
    msg: 'ok'
  },
  MOBILE_EXIST: {
    code: '10001',
    msg: '该手机号已经注册过了'
  },
  USER_NOT_LOGIN: {
    code: '10002',
    msg: '用户未登录'
  },
  USER_NOT_REGISTER: {
    code: '10003',
    msg: '用户未注册'
  },
  LOGIN_PWD_ERROR: {
    code: '10004',
    msg: '登录密码错误'
  },
  ADD_CATE_ERROR: {
    code: '10005',
    msg: '新增类目失败'
  },
  ADD_POST_ERROR: {
    code: '10006',
    msg: '添加失败'
  },
  POST_NOT_EXIST: {
   code: '10007',
   msg: '不存在'
  }
}

class UserService extends Service {

  /**
   * 创建并设置登录token
   * @param {*} mobile 手机号码
   */
  async _createAndSetLoginToken (mobile) {
    const loginToken = utils.createLoginToken(mobile);
    await this.app.redis.set(loginToken, mobile);
    return loginToken
  }

  /**
   * 判断密码是否正确
   */
  async _isPwdCorrect (mobile, password) {
    let findList = await this.app.model.User.find({ mobile, password: utils.encodePwd(password) })
    return findList.length !== 0
  }

  /**
   * 用户注册
   * @param username 用户昵称
   * @param mobile 手机号码
   * @param password 用户密码
   * @param {*} param0
   */
  async register ({username, mobile, password}) {
    let userExist = await this.app.model.User.find({ mobile })
    if (userExist.length) {
      // 用户不存在
      return errCodeMap.MOBILE_EXIST
    }
    // 创建用户
    const userCreator = new this.app.model.User({username, mobile, password: utils.encodePwd(password)})
    const userCreatorResult = await userCreator.save()
    const loginToken = await this._createAndSetLoginToken(mobile)
    return Object.assign({
      data: {
        token: loginToken
      }
    }, errCodeMap.SUCCESS)
  }

  /**
   * 用户登录
   * @param mobile 手机号码
   * @param password 登录密码
   * @param {*} param0
   */
  async login ({mobile, password}) {
    let existFind = await this.app.model.User.find({ mobile })
    if (existFind.length === 0) {
      // 用户未注册
      return errCodeMap.USER_NOT_REGISTER
    }
    const isPwdCorrent = await this._isPwdCorrect(mobile, password)
    if (!isPwdCorrent) {
      // 密码不正确
      return errCodeMap.LOGIN_PWD_ERROR
    }
    const loginToken = await this._createAndSetLoginToken(mobile)
    return Object.assign({
      data: {
        loginToken,
        userInfo: existFind[0]
      }
    }, errCodeMap.SUCCESS)
  }

  /**
   * 获取用户信息
   * @param {*} param0
   */
  async getUserInfo ({ loginToken }) {
    let mobile = await this.app.redis.get(loginToken);
    if (!mobile) {
      // 用户未登录
      return errCodeMap.USER_NOT_LOGIN
    }
    let userInfo = await this.app.model.User.find({ mobile })
    return Object.assign({
      data: userInfo[0]
    }, errCodeMap.SUCCESS);
  }

  /**
   * 更新用户信息
   * @param {*} param0
   */
  async updateUserInfo ({loginToken, username, avatarUrl}) {

  }
}

module.exports = UserService;