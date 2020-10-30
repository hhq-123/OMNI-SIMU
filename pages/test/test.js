Page({
  data: {
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

  onLoad: function (options) {
    var that = this
    //调用微信登录接口
    wx.login({
        success: function () {
            wx.getUserInfo({
                success: function (res) {
                    console.log(res)
                    app.globalData.userInfo = res.userInfo
                    that.setData({
                        canIUse: false
                    })
                    wx.switchTab({
                        url: '../index/index'
                    })
                },
                fail: function (res) {
                    that.setData({
                        canIUse: true
                    })
                }
            })
        }
    })
},

bindGetUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
        canIUse: false
    })
    wx.switchTab({
        url: '../index/index'
    })
},

  onShow: function() {

  },

  onPullDownRefresh: function() {

  },

  tab_button_select1: function(event) {
    console.log(event.detail)
  },

  tab_button_select2: function(event) {
    console.log(event.detail)
  },
})
