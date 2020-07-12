// miniprogram/pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    advertisementList:[
      {
        imagePath: "/images/1.jpg",
      },
      {
        imagePath: "/images/2.png",
      },
      {
        imagePath: "/images/3.jpg",
      }
    ],

    option1: [{
      value: '资产'
    },
    {
      value: '支付'
    }
  ],
    option2: [{
        value: '全部'
     },
     {
       value: '未发布'
     },
     {
       value: '已发布'
     }
  ],
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

  goTosimulation: function () {
    wx.navigateTo({
      url: '/pages/simulation/simulation',      
    })
  },

  goTorecord: function () {
    wx.navigateTo({
      url: '/pages/simulation/simulation',      
    })
  },

  tab_button_select1: function(event) {
    console.log(event.detail)
  },

  tab_button_select2: function(event) {
    console.log(event.detail)
  },
})