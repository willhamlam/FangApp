/* 'use strict'; */

var dataForWeixin = {
  appId: "",
  shareImg: "",
  url: document.URL,
  title: "",
  desc: "",
  callback: function(res) {

  }
};

var onBridgeReady = function() {
    WeixinJSBridge.on('menu:share:appmessage', function(argv) {
        WeixinJSBridge.invoke('sendAppMessage', {
            "appid": dataForWeixin.appId,
            "img_url": dataForWeixin.shareImg,
            "img_width": "120",
            "img_height": "120",
            "link": dataForWeixin.url,
            "desc": dataForWeixin.desc,
            "title": dataForWeixin.title
        }, function(res) {
            (dataForWeixin.callback)(res);
        });
    });
    WeixinJSBridge.on('menu:share:timeline', function(argv) {
        WeixinJSBridge.invoke('shareTimeline', {
            "img_url": dataForWeixin.shareImg,
            "img_width": "120",
            "img_height": "120",
            "link": dataForWeixin.url,
            "desc": dataForWeixin.desc,
            "title": dataForWeixin.desc
        }, function(res) {
            (dataForWeixin.callback)(res);
        });
    });
};
if (document.addEventListener) {
    document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
} else if (document.attachEvent) {
    document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
    document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
}