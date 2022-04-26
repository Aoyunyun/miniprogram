// pages/wxml/index.ts

Page({
  // var appInstance = getApp()
  /**
   * 页面的初始数据
   */
  data: {
    time: (new Date()).toString(),
    a: 0,
    b: 2,
    array: [{ message: 'foo' }, { message: 'bar' }, { message: 'cat' }],
    objectArray: [
      { id: 5, unique: 'unique_5' },
      { id: 4, unique: 'unique_4' },
      { id: 3, unique: 'unique_3' },
      { id: 2, unique: 'unique_2' },
      { id: 1, unique: 'unique_1' }
    ],
    numberArray: [1, 2, 3, 4],
    obj: {
      index: 0,
      msg: 'hahahha',
      time: '2022-4-25'
    }
  },

  //打乱排序
  switch: function () {
    var thisp = this
    //让用户确认操作-模态对话框
    wx.showModal({
      title: '打乱',
      content: '确定要乱序排列吗',
      confirmText: '确定',
      cancelText: '取消',
      success: function (res) {
        if (res.confirm) {
          thisp.noname()
        } else if (res.cancel) {

        }
      }
    })
  },

  noname: function() {
    const length = this.data.objectArray.length
    for(let i = 0; i < length; i++){
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.objectArray[x]
      this.data.objectArray[x] = this.data.objectArray[y]
      this.data.objectArray[y] = temp
    }
    this.setData ({
      objectArray : this.data.objectArray
    })
  },

  addToFront: function () {
    const length = this.data.objectArray.length
    this.data.objectArray = [{ id: length, unique: 'unique_' + length }].concat(this.data.objectArray)
    this.setData({
      objectArray: this.data.objectArray
    })
  },

  addNumberToFront: function () {
    const length = this.data.numberArray.length
    this.data.numberArray = [length + 1].concat(this.data.numberArray)
    this.setData({
      numberArray: this.data.numberArray
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

    //显示toast
    wx.showToast({
      title: '已发送',
      icon: 'success',
      duration: 1500
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})