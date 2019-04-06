// pages/activity/activity.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    border_bottom: ['solid', '', ''],
    colors: ["#000000", "#6680F5"],
    lineText: " -- 我们是有底线的 <(￣︶￣)> -- ",
    data: [
      {
        id: 'https://mp.weixin.qq.com/s/meMOlLwKcjYwxvNS-mOhhQ',
        image:'../../images/2018.12.22.jpg', 
        title: '看，数信打下的江山！',
        text_content:'2018年12月16日',
      },{
        id: 'https://mp.weixin.qq.com/s/bqgC-Ps9S1lgBCAZ2hO0YA',
        image: '../../images/2017.11.29.jpg',
        title: '决赛，你看了吗！',
        text_content: '2017年11月29日',
      }, {
        id: 'https://mp.weixin.qq.com/s/XdbgaRqXYPs2bvk8DmaXMw',
        image: '../../images/2017.11.29.jpg',
        title: '赢了一起狂',
        text_content: '2017年11月23日',
      },
    ]
  },

  onItemClick: function (event) {
    var url = ""
    var flag = event.currentTarget.dataset.flag
    url = "../web/web?flag=" + flag
    console.log(url);
    wx.navigateTo({
      url: url
    })
  },


  touchstart(e) {
    this.weswiper.touchstart(e)
  },
  touchmove(e) {
    this.weswiper.touchmove(e)
  },
  touchend(e) {
    this.weswiper.touchend(e)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.setNavigationBarTitle({
      title: '关于我们',
    })

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

    return {

      title: 'SCAU数信排球院队',

      desc: '一起来打排球啊~',

      path: '/pages/index/index'

    }

  }
})