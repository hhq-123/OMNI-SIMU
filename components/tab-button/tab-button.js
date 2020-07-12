// components/tab_button/tab-button.js
Component({
  properties: {
    margin_right: {
      type: Number,
      value: 15
    },
    h: {
      type: Number,
      value: 30
    },
    w: {
      type: Number,
      value: 50
    },
    display: {
      type: String,
      value: 'block'
    },
    margin_left: {
      type: Number,
      value: 15
    },
    options: {
      type: [],
      value: [{
        value: '全部'
      },
      {
        value: '未发布'
      },
      {
        value: '已发布'
      }
      ],
    }
  },
  
  data: {
    tab_button_active: 0,
  },

  methods: {
    tab_button_select: function (event) {
      //this.setData()将数据从逻辑层更新到视图层，带动样式的改变
      this.setData({
        tab_button_active: event.currentTarget.dataset.id
      })
      this.triggerEvent('tab_button_select', event.currentTarget.dataset.id)
    },
  }
})
