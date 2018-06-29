//app.js
App({
  onLaunch: function () {
        wx.getSystemInfo({
            success: (function (res) {
                console.log(res.windowWidth);
                console.log(res.windowHeight);
                this.width=res.windowWidth;
                this.height=res.windowHeight;
            }).bind(this),
        })
    }
})