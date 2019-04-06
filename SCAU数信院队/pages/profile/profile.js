// pages/profile/profile.js
Page({

  data: {
    background: ['../../images/background1.jpg', '../../images/background2.jpg', '../../images/background3.jpg'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,

    list: [
      {
        id: 'view',
        name: '院队简介',
        src:'https://mp.weixin.qq.com/s/eBYqNe0gG_p2L9QT-040cw',
        open: false,
        pages: [['院队简介', 'web']]
      }, {
        id: 'content',
        name: '队员简介',
        src: 'https://mp.weixin.qq.com/s/TovYNTTarE0ILgkXdDYuYw',
        open: false,
        pages: [['男队、女队', 'web']]
      }, {
        id: 'adress',
        name: '联系我们',
        open: false,
        pages: [['电话/微信:13926716819', ''], ['地址:华南农业大学', ''], ['详情', 'adress']]
      }, {
        id: 'enroll',
        name: '加入我们',
        open: false,
        pages: [['一起来打排球啊~', 'enroll']]
      }
    ]
  },

  kindToggle(e) {
    const id = e.currentTarget.id
    const list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list
    })
    wx.reportAnalytics('click_view_programmatically', {})
  },

  onShareAppMessage: function () {

    return {

      title: 'SCAU数信排球院队',

      desc: '一起来打排球啊~',

      path: '/pages/index/index'

    }

  }
})