//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },
  onLoad: function () {
   

  },
  onShareAppMessage: function () {

    return {

      title: 'SCAU数信排球院队',

      desc: '一起来打排球啊~',

      path: '/pages/index/index'

    }

  }
})
