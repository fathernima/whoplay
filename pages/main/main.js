//logs.js
const util = require('../../utils/util.js')
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } 
  },
  onShareAppMessage: function () { }


  
})
