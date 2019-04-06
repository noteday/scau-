// pages/adress/adress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    event: {
      time: '周六早上',
      adress: '华南农业大学',
      email: '1224001817@qq.com',
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  handlePhone: function (event) {
    var phone = event.currentTarget.dataset.phone;
    console.log(phone);
    wx.makePhoneCall({
      phoneNumber: phone,
      success: function (res) {
        // success
      }
    });
  },

  /** 查看地图 */
  handleMap: function (event) {
    wx.openLocation({
      latitude: 23.099994,
      longitude: 23.099994,
      name: "",
    });

  },
  onShareAppMessage: function () {

    return {

      title: 'SCAU数信排球院队',

      desc: '一起来打排球啊~',

      path: '/pages/index/index'

    }

  }
})