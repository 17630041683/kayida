(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-become-become"],{"14f6":function(e,t,a){"use strict";var i=a("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("cebc")),s=a("2f62"),o=i(a("4dc3")),c={computed:(0,n.default)({},(0,s.mapState)(["userInfo"])),data:function(){return{share:0,pic:""}},methods:{shareBecome:function(){this.share=1},shareCancel:function(){this.share=0}},onLoad:function(){var e=this,t={user_id:this.userInfo.user_id,token:this.userInfo.token,sign:(0,o.default)(this.userInfo.user_id+this.userInfo.token)};this.request.httpRequest("api/bind/index",t,"GET").then(function(t){console.log(t.data),e.pic=t.data.retval.poster})}};t.default=c},3582:function(e,t,a){"use strict";a.r(t);var i=a("14f6"),n=a.n(i);for(var s in i)"default"!==s&&function(e){a.d(t,e,function(){return i[e]})}(s);t["default"]=n.a},"458e4":function(e,t,a){"use strict";var i=a("9935"),n=a.n(i);n.a},"5aff":function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,".con .promote[data-v-4ecff68a]{width:100%;height:100%}.con .promote uni-image[data-v-4ecff68a]{width:100%;height:100%;margin-bottom:%?78?%}.con .become[data-v-4ecff68a]{height:%?88?%;line-height:%?88?%;background:#00abfa;text-align:center;position:fixed;bottom:0;width:100%;color:#fff;font-size:%?30?%}.con .share-mask[data-v-4ecff68a]{position:fixed;top:0;background:#8f8f94;opacity:.4;height:100%;width:%?750?%;z-index:998}.con .share[data-v-4ecff68a]{position:fixed;bottom:0;width:100%;height:%?450?%;text-align:center;background:#f2f2f2;color:#333;z-index:999}.con .share .share-text[data-v-4ecff68a]{font-size:%?30?%;margin-top:%?70?%}.con .share .share-btn[data-v-4ecff68a]{-webkit-justify-content:space-around;justify-content:space-around;margin-top:%?60?%;font-size:%?26?%}.con .share .share-btn uni-image[data-v-4ecff68a]{width:%?100?%;height:%?100?%}.con .share .share-cancel[data-v-4ecff68a]{width:100%;height:%?88?%;font-size:%?26?%;color:#666;background:#fff;line-height:%?88?%;margin-top:%?60?%}",""])},"61b0":function(e,t,a){"use strict";a.r(t);var i=a("79c9"),n=a("3582");for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);a("458e4");var o,c=a("f0c5"),r=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"4ecff68a",null,!1,i["a"],o);t["default"]=r.exports},"79c9":function(e,t,a){"use strict";var i,n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"con"},[a("v-uni-view",{staticClass:"promote top"},[a("v-uni-image",{attrs:{src:e.pic,mode:"scaleToFill"}})],1),a("v-uni-view",{staticClass:"become",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.shareBecome.apply(void 0,arguments)}}},[e._v("邀请成为推卡客")]),e.share?a("v-uni-view",{staticClass:"share"},[a("v-uni-view",{staticClass:"share-text"},[e._v("选择要分享到的平台")]),a("v-uni-view",{staticClass:"share-btn flex"},[a("v-uni-view",{staticClass:"share-weixin",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.shareWeixin.apply(void 0,arguments)}}},[a("v-uni-image",{attrs:{src:"../../static/img/share_weixin.png",mode:""}}),a("v-uni-view",[e._v("微信")])],1),a("v-uni-view",{staticClass:"share-friends",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.shareFriends.apply(void 0,arguments)}}},[a("v-uni-image",{attrs:{src:"../../static/img/share_friends.png",mode:""}}),a("v-uni-view",[e._v("朋友圈")])],1)],1),a("v-uni-view",{staticClass:"share-cancel",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.shareCancel.apply(void 0,arguments)}}},[e._v("取消分享")])],1):e._e(),e.share?a("v-uni-view",{staticClass:"share-mask"}):e._e()],1)},s=[];a.d(t,"b",function(){return n}),a.d(t,"c",function(){return s}),a.d(t,"a",function(){return i})},9935:function(e,t,a){var i=a("5aff");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("5097fec9",i,!0,{sourceMap:!1,shadowMode:!1})}}]);