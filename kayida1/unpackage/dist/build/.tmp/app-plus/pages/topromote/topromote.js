(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/topromote/topromote"],{"11b3":function(t,e,n){"use strict";var i=n("b3a7"),o=n.n(i);o.a},"1fc7":function(t,e,n){"use strict";var i,o=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},"3fcb":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("2f62"),o=r(n("4dc3"));function r(t){return t&&t.__esModule?t:{default:t}}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u={computed:a({},(0,i.mapState)(["userInfo"])),data:function(){return{url:"",pic:"",share:0,popup:0,describe:"",type:""}},methods:{downPromote:function(){this.popup=1},copyText:function(){t.setClipboardData({data:this.text,success:function(){t.showToast({title:"复制成功",duration:2e3,icon:"none"})}})},downPic:function(){t.downloadFile({url:this.pic,success:function(e){200===e.statusCode&&t.saveImageToPhotosAlbum({filePath:e.tempFilePath,success:function(){t.showToast({title:"保存成功",icon:"none"})},fail:function(){t.showToast({title:"保存失败，请稍后重试",icon:"none"})}})}}),this.popup=0},canceldown:function(){this.popup=0},shareWeixin:function(){t.share({provider:"weixin",scene:"WXSceneSession",type:2,imageUrl:this.pic,success:function(e){t.showToast({title:"分享成功",icon:"none"})},fail:function(e){t.showToast({title:"分享失败",icon:"none"})}}),this.share=0},shareFriends:function(){t.share({provider:"weixin",scene:"WXSenceTimeline",type:2,imageUrl:this.pic,success:function(e){t.showToast({title:"分享成功",icon:"none"})},fail:function(e){t.showToast({title:"分享失败",icon:"none"})}}),this.share=0},shareCancel:function(){this.share=0},copy:function(){t.setClipboardData({data:this.url,success:function(){t.showToast({title:"复制成功",duration:2e3,icon:"none"})},fail:function(t){}})},shareDetail:function(){this.share=1,t.setClipboardData({data:this.describe,success:function(){t.showToast({title:"复制成功",duration:2e3,icon:"none"})},fail:function(t){}}),f(this.pic_list)}},onLoad:function(t){var e=this;this.type=t.type,this.id=t.id;var n={id:t.id,user_id:this.userInfo.user_id,token:this.userInfo.token,sign:(0,o.default)(this.userInfo.user_id+this.userInfo.token)};if("apply"==this.type)this.request.httpRequest("api/card/poster",n,"GET").then((function(t){e.pic=t.data.retval.poster,e.url=t.data.retval.short_url,e.describe=t.data.retval.describe}));else if("loan"==this.type){var i=t.loan;0==i?this.request.httpRequest("api/loan/poster",n,"GET").then((function(t){e.pic=t.data.retval.poster,e.url=t.data.retval.short_url,e.describe=t.data.retval.describe})):this.request.httpRequest("api/loan".concat(i,"/poster"),n,"GET").then((function(t){e.pic=t.data.retval.poster,e.url=t.data.retval.short_url,e.describe=t.data.retval.describe}))}else if("credit"==this.type){var r={user_id:this.userInfo.user_id,token:this.userInfo.token,sign:(0,o.default)(this.userInfo.user_id+this.userInfo.token)};this.request.httpRequest("api/credit/poster",r,"GET").then((function(t){e.pic=t.data.retval.poster,e.url=t.data.retval.short_url,e.describe=t.data.retval.describe}))}}};function f(t){switch(plus.os.name){case"Android":var e=function(t){};e(t);break;case"iOS":break;default:break}}e.default=u}).call(this,n("6e42")["default"])},b1be:function(t,e,n){"use strict";n.r(e);var i=n("1fc7"),o=n("da6c");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("11b3");var s,a=n("f0c5"),c=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"2dcd079e",null,!1,i["a"],s);e["default"]=c.exports},b3a7:function(t,e,n){},da6c:function(t,e,n){"use strict";n.r(e);var i=n("3fcb"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},e536:function(t,e,n){"use strict";(function(t){n("cb51"),n("921b");i(n("66fd"));var e=i(n("b1be"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["e536","common/runtime","common/vendor"]]]);