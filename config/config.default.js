exports.keys = 'recycle_1528170840915_9441'

exports.middleware = []

exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks'
  },
}

exports.mysql = {
  client: {
    host: '39.108.138.156',
    user: 'root',
    password: 'gaoxiong123.',
    database: 'mall',
    port: 3306
  },
  // 是否加载到 app 上，默认开启
  app: true,
  // 是否加载到 agent 上，默认关闭
  agent: false
}

exports.mongoose = {
  url: 'mongodb://39.108.138.156:27017',
  options: {}
}

exports.redis = {
  client: {
    host: `39.108.138.156`,
    port: '6379',
    password: 'gaoxiong123.',
    db: 0
  }
}

exports.news = {
  pageSize: 5,
  serverUrl: 'https://hacker-news.firebaseio.com/v0'
}