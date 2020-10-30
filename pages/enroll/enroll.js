// miniprogram/pages/enroll/enroll.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:"",
    phonenumber:"",
    password:"",
    passwordack:"",
  },

  signin:function(e){
    wx.navigateBack({
      delta: 1,
    })
  },

  regist:function(e){
    var that=this
    var myreg= /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if(this.data.username ==''){
      wx.showModal({
        title: '提示',
        content: '请输入用户名',
        showCancel: false,
        success(res){}
      })
    }
    else if(this.data.phonenumber ==''){
      wx.showModal({
        title: '提示',
        content: '请输入手机号',
        showCancel: false,
        success(res){}
      })
    }
    else if(this.data.phonenumber.length != 11){
      wx.showModal({
        title: '提示',
        content: '手机号长度有误',
        showCancel: false,
        success(res){}
      })
    }
    else if(!myreg.test(this.data.phonenumber)){
      wx.showModal({
        title: '提示',
        content: '请输入正确手机号',
        showCancel: false,
        success(res){}
      })
    }
    else if(this.data.password ==''){
      wx.showModal({
        title: '提示',
        content: '请输入密码',
        showCancel: false,
        success(res){}
      })
    }
    else if(this.data.passwordack ==''){
      wx.showModal({
        title: '提示',
        content: '请再此输入密码',
        showCancel: false,
        success(res){}
      })
    }
    else if(this.data.passwordack != this.data.password){
      wx.showModal({
        title: '提示',
        content: '密码不相同',
        showCancel: false,
        success(res){}
      })
    }
    else{
      console.log("success")
      wx.request({
        url: getApp().globalData.server + '/index.php/Home/User/sign',
        data: {
          username: that.data.username,
          phone: that.data.phone,
          password: that.data.password,
          password_again: that.data.passwordack,
          face_url: getApp().globalData.userInfo.avatarUrl,
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success(res){
          console.log(res.data)
        }
      }

      )
    }
  },

  usernameInput:function(e){
    this.data.username=e.detail.value
    console.log(this.data.username)
  },
  phonenumberInput:function(e){
    this.data.phonenumber=e.detail.value
    console.log(this.data.phonenumber)
  },
  passwordInput:function(e){
    this.data.password=e.detail.value
    console.log(this.data.password)
  },
  passwordInputAck:function(e){
    this.data.passwordack=e.detail.value
    console.log(this.data.passwordack)
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

  }
})