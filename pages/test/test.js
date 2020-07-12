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

  onLoad: function(options) {

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
