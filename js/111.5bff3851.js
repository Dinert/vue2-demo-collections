"use strict";(self["webpackChunkvue2_template"]=self["webpackChunkvue2_template"]||[]).push([[111],{4111:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var a=function(){var e=this,n=e._self._c;return n("section",{staticClass:"map"},[n("div",{attrs:{id:"panel"}}),n("div",{attrs:{id:"map"}}),n("div",{staticClass:"map-search"},[n("span",[e._v("开始地点：")]),n("el-input",{attrs:{size:"small"},model:{value:e.lngLatsText[0],callback:function(n){e.$set(e.lngLatsText,0,n)},expression:"lngLatsText[0]"}}),n("span",[e._v("结束地点：")]),n("el-input",{attrs:{size:"small"},model:{value:e.lngLatsText[1],callback:function(n){e.$set(e.lngLatsText,1,n)},expression:"lngLatsText[1]"}}),n("div",[n("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-search"},on:{click:function(n){return e.searchFn()}}},[e._v("查询")])],1)],1),e._e(),n("ul",{staticClass:"line-list"},e._l(e.drivingMap,(function(t,a){return n("li",{key:a,on:{click:function(n){e.drivingShow(t,a.split("-"))}}},[n("el-link",{attrs:{type:"primary"}},[e._v(e._s(a))])],1)})),0)])},o=[],i=t(3317);let s=null,l=null;var p={name:"Region",async mounted(){s=await(0,i.Z)("map",{viewMode:"3D",center:[116.397428,39.90923]},{plugins:["AMap.DistrictSearch","AMap.Driving","AMap.PlaceSearch","AMap.Geocoder"]}),this.inputClick("dark"),l=new AMap.Geocoder({radius:1e3}),s.on("click",(e=>{2===this.index&&(this.index=0),this.$set(this.lngLats,this.index,e.lnglat),this.index++})),this.searchFn("广州","深圳"),this.searchFn("福建","广州")},data(){return{index:0,lngLats:[],lngLatsText:[],drivingMap:{}}},methods:{drivingShow(e,n){e.checked?e.search([{keyword:n[0]},{keyword:n[1]}]):e.clear(),e.checked=!e.checked},inputClick(e){const n="amap://styles/"+e;s.setMapStyle(n)},searchFn(e,n){const t=new AMap.Driving({map:s,ferry:1,panel:"panel"});e&&n?(t.search([{keyword:e},{keyword:n}],((e,n)=>{const t=n&&n.routes&&n.routes[0].steps;"complete"===e&&console.log(t,"settttttttttttt")})),this.$set(this.drivingMap,e+"-"+n,t)):(t.search(this.lngLats[0],this.lngLats[1],((e,n)=>{this.lngLats=[];const t=n&&n.routes&&n.routes[0].steps;"complete"===e&&console.log(t,"settttttttttttt")})),this.$set(this.drivingMap,this.lngLatsText.join("-"),t))}},watch:{lngLats:{handler(e){e[0]&&l.getAddress(e[0],((e,n)=>{if("complete"===e){const e=n.regeocode.formattedAddress;this.$set(this.lngLatsText,0,e)}})),e[1]&&l.getAddress(e[1],((e,n)=>{if("complete"===e){const e=n.regeocode.formattedAddress;console.log(e,"12312"),this.$set(this.lngLatsText,1,e)}}))}}}},c=p,r=t(3736),d=(0,r.Z)(c,a,o,!1,null,"e1fcc5ac",null),u=d.exports},6512:function(e,n,t){t(7658),t(1703),function(n,t){e.exports=t()}(0,(function(){function e(e){var a=[];return e.AMapUI&&a.push(n(e.AMapUI)),e.Loca&&a.push(t(e.Loca)),Promise.all(a)}function n(e){return new Promise((function(n,t){var l=[];if(e.plugins)for(var p=0;p<e.plugins.length;p+=1)-1==o.AMapUI.plugins.indexOf(e.plugins[p])&&l.push(e.plugins[p]);if(i.AMapUI===a.failed)t("前次请求 AMapUI 失败");else if(i.AMapUI===a.notload){i.AMapUI=a.loading,o.AMapUI.version=e.version||o.AMapUI.version,p=o.AMapUI.version;var c=document.body||document.head,r=document.createElement("script");r.type="text/javascript",r.src="https://webapi.amap.com/ui/"+p+"/main.js",r.onerror=function(e){i.AMapUI=a.failed,t("请求 AMapUI 失败")},r.onload=function(){if(i.AMapUI=a.loaded,l.length)window.AMapUI.loadUI(l,(function(){for(var e=0,t=l.length;e<t;e++){var a=l[e].split("/").slice(-1)[0];window.AMapUI[a]=arguments[e]}for(n();s.AMapUI.length;)s.AMapUI.splice(0,1)[0]()}));else for(n();s.AMapUI.length;)s.AMapUI.splice(0,1)[0]()},c.appendChild(r)}else i.AMapUI===a.loaded?e.version&&e.version!==o.AMapUI.version?t("不允许多个版本 AMapUI 混用"):l.length?window.AMapUI.loadUI(l,(function(){for(var e=0,t=l.length;e<t;e++){var a=l[e].split("/").slice(-1)[0];window.AMapUI[a]=arguments[e]}n()})):n():e.version&&e.version!==o.AMapUI.version?t("不允许多个版本 AMapUI 混用"):s.AMapUI.push((function(e){e?t(e):l.length?window.AMapUI.loadUI(l,(function(){for(var e=0,t=l.length;e<t;e++){var a=l[e].split("/").slice(-1)[0];window.AMapUI[a]=arguments[e]}n()})):n()}))}))}function t(e){return new Promise((function(n,t){if(i.Loca===a.failed)t("前次请求 Loca 失败");else if(i.Loca===a.notload){i.Loca=a.loading,o.Loca.version=e.version||o.Loca.version;var l=o.Loca.version,p=o.AMap.version.startsWith("2"),c=l.startsWith("2");if(p&&!c||!p&&c)t("JSAPI 与 Loca 版本不对应！！");else{p=o.key,c=document.body||document.head;var r=document.createElement("script");r.type="text/javascript",r.src="https://webapi.amap.com/loca?v="+l+"&key="+p,r.onerror=function(e){i.Loca=a.failed,t("请求 AMapUI 失败")},r.onload=function(){for(i.Loca=a.loaded,n();s.Loca.length;)s.Loca.splice(0,1)[0]()},c.appendChild(r)}}else i.Loca===a.loaded?e.version&&e.version!==o.Loca.version?t("不允许多个版本 Loca 混用"):n():e.version&&e.version!==o.Loca.version?t("不允许多个版本 Loca 混用"):s.Loca.push((function(e){e?t(e):t()}))}))}if(!window)throw Error("AMap JSAPI can only be used in Browser.");var a;(function(e){e.notload="notload",e.loading="loading",e.loaded="loaded",e.failed="failed"})(a||(a={}));var o={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},i={AMap:a.notload,AMapUI:a.notload,Loca:a.notload},s={AMap:[],AMapUI:[],Loca:[]},l=[],p=function(e){"function"==typeof e&&(i.AMap===a.loaded?e(window.AMap):l.push(e))};return{load:function(n){return new Promise((function(t,s){if(i.AMap==a.failed)s("");else if(i.AMap==a.notload){var c=n.key,r=n.version,d=n.plugins;c?(window.AMap&&"lbs.amap.com"!==location.host&&s("禁止多种API加载方式混用"),o.key=c,o.AMap.version=r||o.AMap.version,o.AMap.plugins=d||o.AMap.plugins,i.AMap=a.loading,r=document.body||document.head,window.___onAPILoaded=function(o){if(delete window.___onAPILoaded,o)i.AMap=a.failed,s(o);else for(i.AMap=a.loaded,e(n).then((function(){t(window.AMap)}))["catch"](s);l.length;)l.splice(0,1)[0]()},d=document.createElement("script"),d.type="text/javascript",d.src="https://webapi.amap.com/maps?callback=___onAPILoaded&v="+o.AMap.version+"&key="+c+"&plugin="+o.AMap.plugins.join(","),d.onerror=function(e){i.AMap=a.failed,s(e)},r.appendChild(d)):s("请填写key")}else if(i.AMap==a.loaded)if(n.key&&n.key!==o.key)s("多个不一致的 key");else if(n.version&&n.version!==o.AMap.version)s("不允许多个版本 JSAPI 混用");else{if(c=[],n.plugins)for(r=0;r<n.plugins.length;r+=1)-1==o.AMap.plugins.indexOf(n.plugins[r])&&c.push(n.plugins[r]);c.length?window.AMap.plugin(c,(function(){e(n).then((function(){t(window.AMap)}))["catch"](s)})):e(n).then((function(){t(window.AMap)}))["catch"](s)}else if(n.key&&n.key!==o.key)s("多个不一致的 key");else if(n.version&&n.version!==o.AMap.version)s("不允许多个版本 JSAPI 混用");else{var u=[];if(n.plugins)for(r=0;r<n.plugins.length;r+=1)-1==o.AMap.plugins.indexOf(n.plugins[r])&&u.push(n.plugins[r]);p((function(){u.length?window.AMap.plugin(u,(function(){e(n).then((function(){t(window.AMap)}))["catch"](s)})):e(n).then((function(){t(window.AMap)}))["catch"](s)}))}}))},reset:function(){delete window.AMap,delete window.AMapUI,delete window.Loca,o={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},i={AMap:a.notload,AMapUI:a.notload,Loca:a.notload},s={AMap:[],AMapUI:[],Loca:[]}}}}))},3317:function(e,n,t){var a=t(1579),o=t.n(a),i=t(6512),s=t.n(i);let l={};window._AMapSecurityConfig={securityJsCode:"530231bc60a6258f7fa6b84d5d532761"};const p=(e,n,t)=>{s().reset&&s().reset();const a={zoom:5,center:[105.602725,37.076636]};return new Promise(((i,p)=>{const c=o().defaultsDeep(o().cloneDeep(n),a),r=o().defaultsDeep(o().cloneDeep(t),{key:"720d49e9651522b9b4661195147dc067",version:"2.0",plugins:[]});s().load(r).then((n=>{l=r,console.log(l,"lastMapOptions");const t=new n.Map(e,c);i(t)})).catch((e=>{p(e)}))}))};n["Z"]=p}}]);