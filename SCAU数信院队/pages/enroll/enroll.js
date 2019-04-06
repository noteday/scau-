// pages/enroll/enroll.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: "00:00",
    date: "2019-00-00",
  },



  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  showdata: function (e){
    console.log(e.detail.value);
  },

  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    if (e.detail.value.name != '') {
    wx.request({
      url: 'https://www.zhjune.com/zhj/public/api/news', // 仅为示例，并非真实的接口地址
      method:'post',
      data: {
        id: e.detail.value.number,
        name: e.detail.value.name,
        grade:e.detail.value.class,
        num: e.detail.value.phone,
        wechat: e.detail.value.weixin,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        
        wx.showModal({
          title: '',
          content: '报名成功！',
          showCancel: false,
          confirmText: '确定'
        })
      }
    })
    }
  },

  /**
   * 用户点击右上角分享
   */

  onShareAppMessage: function () {
    return {

      title: 'SCAU数信排球院队',

      desc: '一起来打排球啊~',

      path: '/pages/index/index'

    }
  }
})