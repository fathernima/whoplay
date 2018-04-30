const app = getApp()

Page({
  data: {
    parameter:100,
    array: ['暴雪', 'Steam', '腾讯', '其他'],
    index: 0,
    blizzard: [
      { name: 'OW', value: '守望先锋' },
      { name: 'WOW', value: '魔兽世界'},
      { name: 'DB', value: '暗黑破坏神Ⅲ'},
      { name: 'SC', value: '星际争霸Ⅱ'},
      { name: 'SH', value: '炉石传说'},
      { name: 'HS', value: '风暴英雄'},
    ],
    steam: [
      { name: '1', value: 'CSGO'},
      { name: '2', value: 'NBA2K18'},
      { name: '3', value: 'DOTA2'},
      { name: '4', value: '绝地求生'},
      { name: '5', value: '巫师3'},
      { name: '6', value: '方舟：生存进化'},
    ],
    tencent: [
      { name: 'OW', value: 'dnf' },
      { name: 'WOW', value: 'cf' },
      { name: 'DB', value: 'btw' },
      { name: 'SC', value: 'ffo' },
      { name: 'SH', value: 'hbo' },
      { name: 'HS', value: 'qq' },
    ], 
    others: [
      { name: 'OW', value: '1' },
      { name: 'WOW', value: '2' },
      { name: 'DB', value: '3' },
      { name: 'SC', value: '4' },
      { name: 'SH', value: '5' },
      { name: 'HS', value: '6' },
    ]
  },
  onLoad: function () {
    if (app.globalData.parameter) {
      this.setData({
        parameter: app.globalData.parameter
      })
    }
  },
  Blizzard: function (e) {
    this.setData({
      index: 0
    })
  },
  Steam: function (e) {
    this.setData({
      index: 1
    })
  },
  Tencent: function (e) {
    this.setData({
      index: 2
    })
  },
  Others: function (e) {
    this.setData({
      index: 3
    })
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    var checked = e.detail.value
    var changed = {}
    
    if(this.data.index==0){
      for (var i = 0; i < this.data.blizzard.length; i++) {
        if (checked.indexOf(this.data.blizzard[i].name) !== -1) {
          changed['blizzard[' + i + '].checked'] = true
        } else {
          changed['blizzard[' + i + '].checked'] = false
        }
      }
      this.setData(changed)
    }
    else if (this.data.index==1){
      for (var i = 0; i < this.data.steam.length; i++) {
        if (checked.indexOf(this.data.steam[i].name) !== -1) {
          changed['steam[' + i + '].checked'] = true
        } else {
          changed['steam[' + i + '].checked'] = false
        }
      }
      this.setData(changed)
    }
    else if (this.data.index==2){
      for (var i = 0; i < this.data.tencent.length; i++) {
        if (checked.indexOf(this.data.tencent[i].name) !== -1) {
          changed['tencent[' + i + '].checked'] = true
        } else {
          changed['tencent[' + i + '].checked'] = false
        }
      }
      this.setData(changed)
    }
    else{
      for (var i = 0; i < this.data.others.length; i++) {
        if (checked.indexOf(this.data.others[i].name) !== -1) {
          changed['others[' + i + '].checked'] = true
        } else {
          changed['others[' + i + '].checked'] = false
        }
      }
      this.setData(changed)
    }
    
  },
  Submit: function (e) {
    this.setData({

    })
  }
})