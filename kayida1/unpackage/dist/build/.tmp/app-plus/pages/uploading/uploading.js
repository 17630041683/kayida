(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/uploading/uploading"],{"0883":function(t,e,n){"use strict";var i,r=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))},"692d":function(t,e,n){"use strict";var i=n("fe03"),r=n.n(i);r.a},7696:function(t,e,n){"use strict";n.r(e);var i=n("0883"),r=n("f301");for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("692d");var u,c=n("f0c5"),a=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,"38f657b7",null,!1,i["a"],u);e["default"]=a.exports},a32a:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("2f62"),r=o(n("4dc3"));function o(t){return t&&t.__esModule?t:{default:t}}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s={computed:c({},(0,i.mapState)(["userInfo"])),data:function(){return{id:"",pic:"../../static/main/uploading.png",pic_m:0,task_tips:"",popup:0}},methods:{uploading:function(){var e=this;t.chooseImage({success:function(t){var n=t.tempFilePaths;e.pic=n[0],e.pic_m=1,e.popup=0}})},open:function(){this.popup=1},canceldown:function(){this.popup=0},uploadingSubmit:function(){if(0===this.pic_m)t.showToast({title:"请上传图片",icon:"none"});else{var e={id:this.id,task_image:this.pic,user_id:this.userInfo.user_id,token:this.userInfo.token,sign:(0,r.default)(this.userInfo.user_id+this.userInfo.token)};this.request.httpRequest("api/task/submit",e,"GET").then((function(e){t.showToast({title:e.data.msg,icon:"none"})}))}}},onLoad:function(t){var e=this;this.id=t.id,this.request.httpRequest("api/task/tips","GET").then((function(t){e.task_tips=t.data.retval.content}))}};e.default=s}).call(this,n("6e42")["default"])},c5fc:function(t,e,n){"use strict";(function(t){n("cb51"),n("921b");i(n("66fd"));var e=i(n("7696"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},f301:function(t,e,n){"use strict";n.r(e);var i=n("a32a"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},fe03:function(t,e,n){}},[["c5fc","common/runtime","common/vendor"]]]);