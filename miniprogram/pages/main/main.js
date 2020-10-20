// miniprogram/pages/main/main.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        pageinfo: null
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let itemname = options.itemid;
        wx.getStorage({
            key: itemname,
            success: res => {
                this.setData({
                    pageinfo: res.data
                });
                wx.setNavigationBarTitle({
                    title: res.data.head.main.name,
                })
            }
        })
    },

    navigate_tag: function (event) {
        console.log("tag跳转参数:", event.currentTarget.dataset);
    },

    scroll: function (event) {
        let where = event.currentTarget.dataset;
        let id = "";
        if ("second" in where) {
            id = "shead_" + where.first + "_" + where.second;
        } else {
            id = "fhead_" + where.first;
        }

        wx.pageScrollTo({
            selector: "#" + id,
            duration: 0,
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

    }
})