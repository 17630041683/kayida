(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/newsdetail/newsdetail"],{"109e":function(e,t,n){"use strict";n.r(t);var i=n("8240"),r=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=r.a},3842:function(e,t,n){},"41fb":function(e,t,n){"use strict";var i=n("3842"),r=n.n(i);r.a},"5a53":function(e,t,n){"use strict";n.r(t);var i=n("b9d7"),r=n("109e");for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);n("41fb");var u,a=n("f0c5"),c=Object(a["a"])(r["default"],i["b"],i["c"],!1,null,"87abd42e",null,!1,i["a"],u);t["default"]=c.exports},"80e2":function(e,t,n){"use strict";(function(e){n("cb51"),n("921b");i(n("66fd"));var t=i(n("5a53"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},8240:function(e,t,n){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("2f62"),o=a(n("4dc3")),u=a(n("84b5"));function a(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=null,d={computed:s({menus:function(){var t=this;return[{icon:"/static/img/share_weixin.png",label:"微信",onClick:function(){e.share({provider:"weixin",scene:"WXSceneSession",type:0,href:t.url,title:t.title,imageUrl:t.thumb,summary:t.descr,success:function(t){e.showToast({title:"分享成功",icon:"none"}),f.close()},fail:function(t){i("log","fail:"+JSON.stringify(t)," at pages\\newsdetail\\newsdetail.vue:40"),e.showToast({title:"分享失败",icon:"none"})}})}},{icon:"/static/img/share_friends.png",label:"朋友圈",onClick:function(){e.share({provider:"weixin",scene:"WXSenceTimeline",type:0,href:t.url,title:t.title,imageUrl:t.thumb,summary:t.descr,success:function(t){e.showToast({title:"分享成功",icon:"none"}),f.close()},fail:function(t){e.showToast({title:"分享失败",icon:"none"})}})}}]}},(0,r.mapState)(["userInfo"])),data:function(){return{url:"",index:"",title:"",descr:"",thumb:""}},methods:{},onNavigationBarButtonTap:function(e){f.show()},onLoad:function(e){var t=this;f=new u.default(this.menus),this.index=e.index;var n={nav_id:e.infor,user_id:this.userInfo.user_id,token:this.userInfo.token,sign:(0,o.default)(this.userInfo.user_id+this.userInfo.token)};this.request.httpRequest("api/news/index",n,"GET").then((function(e){t.url=e.data.retval[t.index].url,t.title=e.data.retval[t.index].title,t.descr=e.data.retval[t.index].descr,t.thumb=e.data.retval[t.index].thumb}))},onReady:function(){},onUnload:function(){f.close()}};t.default=d}).call(this,n("6e42")["default"],n("0de9")["default"])},b9d7:function(e,t,n){"use strict";var i,r=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}))}},[["80e2","common/runtime","common/vendor"]]]);