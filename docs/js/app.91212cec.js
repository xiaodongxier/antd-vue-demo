(function(e){function t(t){for(var n,l,r=t[0],i=t[1],c=t[2],d=0,m=[];d<r.length;d++)l=r[d],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&m.push(s[l][0]),s[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);u&&u(t);while(m.length)m.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,r=1;r<a.length;r++){var i=a[r];0!==s[i]&&(n=!1)}n&&(o.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},s={app:0},o=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=i;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=o,e.exports=s,s.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);var n=a("2b0e"),s=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},o=[],l={name:"App",components:{}},r=l,i=a("2877"),c=Object(i["a"])(r,s,o,!1,null,null,null),u=c.exports,d=a("f23d"),m=(a("202f"),a("8c4f")),f=(a("14d9"),function(){var e=this,t=e._self._c;return t("a-layout",{attrs:{id:"components-layout-demo-custom-trigger"}},[t("a-layout-sider",{attrs:{trigger:null,collapsible:""},model:{value:e.collapsed,callback:function(t){e.collapsed=t},expression:"collapsed"}},[t("div",{staticClass:"logo"}),t("a-menu",{attrs:{theme:"dark",mode:"inline","default-selected-keys":["1"]}},e._l(e.menuDate,(function(a){return t("a-menu-item",{key:a.name,on:{click:function(t){return e.$router.push(a.path)}}},[t("a-icon",{attrs:{type:"home"}}),t("span",[e._v(e._s(a.name))])],1)})),1)],1),t("a-layout",[t("a-layout-header",{staticStyle:{background:"#fff",padding:"0"}},[t("a-icon",{staticClass:"trigger",attrs:{type:e.collapsed?"menu-unfold":"menu-fold"},on:{click:()=>e.collapsed=!e.collapsed}})],1),t("a-layout-content",{style:{margin:"24px 16px",padding:"24px",background:"#fff",minHeight:"280px"}},[t("router-view")],1)],1)],1)}),p=[],b={data(){return{collapsed:!1,menuDate:[]}},methods:{},mounted(){var e=Ie.options.routes[0].children;this.menuDate=e}},v=b,j=(a("6b53"),Object(i["a"])(v,f,p,!1,null,null,null)),h=j.exports,y=function(){var e=this;e._self._c;return e._m(0)},g=[function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("home")]),t("h2",[e._v("关于打包yarn build")]),t("pre",[e._v("    参考：vue-cli vue.config.js全剧配置\n    https://cli.vuejs.org/zh/config/#vue-config-js\n  ")])])}],k={name:"home",data(){return{}}},_=k,x=Object(i["a"])(_,y,g,!1,null,"5b47dace",null),w=x.exports,C=function(){var e=this,t=e._self._c;return t("a-form-model",{attrs:{model:e.form,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[t("a-form-model-item",{attrs:{label:"Activity name"}},[t("a-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),t("a-form-model-item",{attrs:{label:"Activity zone"}},[t("a-select",{attrs:{placeholder:"please select your zone"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[t("a-select-option",{attrs:{value:"shanghai"}},[e._v(" Zone one ")]),t("a-select-option",{attrs:{value:"beijing"}},[e._v(" Zone two ")])],1)],1),t("a-form-model-item",{attrs:{label:"Activity time"}},[t("a-date-picker",{staticStyle:{width:"100%"},attrs:{"show-time":"",type:"date",placeholder:"Pick a date"},model:{value:e.form.date1,callback:function(t){e.$set(e.form,"date1",t)},expression:"form.date1"}})],1),t("a-form-model-item",{attrs:{label:"Instant delivery"}},[t("a-switch",{model:{value:e.form.delivery,callback:function(t){e.$set(e.form,"delivery",t)},expression:"form.delivery"}})],1),t("a-form-model-item",{attrs:{label:"Activity type"}},[t("a-checkbox-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[t("a-checkbox",{attrs:{value:"1",name:"type"}},[e._v(" Online ")]),t("a-checkbox",{attrs:{value:"2",name:"type"}},[e._v(" Promotion ")]),t("a-checkbox",{attrs:{value:"3",name:"type"}},[e._v(" Offline ")])],1)],1),t("a-form-model-item",{attrs:{label:"Resources"}},[t("a-radio-group",{model:{value:e.form.resource,callback:function(t){e.$set(e.form,"resource",t)},expression:"form.resource"}},[t("a-radio",{attrs:{value:"1"}},[e._v(" Sponsor ")]),t("a-radio",{attrs:{value:"2"}},[e._v(" Venue ")])],1)],1),t("a-form-model-item",{attrs:{label:"Activity form"}},[t("a-input",{attrs:{type:"textarea"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),t("a-form-model-item",{attrs:{"wrapper-col":{span:14,offset:4}}},[t("a-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v(" Create ")]),t("a-button",{staticStyle:{"margin-left":"10px"}},[e._v(" Cancel ")])],1)],1)},O=[],z={data(){return{labelCol:{span:4},wrapperCol:{span:14},form:{name:"",region:void 0,date1:void 0,delivery:!1,type:[],resource:"",desc:""}}},methods:{onSubmit(){console.log("submit!",this.form)}}},S=z,T=Object(i["a"])(S,C,O,!1,null,null,null),P=T.exports,N=function(){var e=this;e._self._c;return e._m(0)},D=[function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("table1")])])}],I={name:"table1",data(){return{}}},A=I,J=Object(i["a"])(A,N,D,!1,null,"4cf2cb80",null),$=J.exports,K=function(){var e=this,t=e._self._c;return t("a-table",{attrs:{columns:e.columns,"data-source":e.data},scopedSlots:e._u([{key:"tags",fn:function(a){return t("span",{},e._l(a,(function(a){return t("a-tag",{key:a,attrs:{color:"loser"===a?"volcano":a.length>5?"geekblue":"green"}},[e._v(" "+e._s(a.toUpperCase())+" ")])})),1)}},{key:"action",fn:function(a,n){return t("span",{},[t("a",[e._v("Invite 一 "+e._s(n.name))]),t("a-divider",{attrs:{type:"vertical"}}),t("a",[e._v("Delete")]),t("a-divider",{attrs:{type:"vertical"}}),t("a",{staticClass:"ant-dropdown-link"},[e._v(" More actions "),t("a-icon",{attrs:{type:"down"}})],1)],1)}}])},[t("span",{attrs:{slot:"customTitle"},slot:"customTitle"},[t("a-icon",{attrs:{type:"smile-o"}}),e._v(" Name")],1)])},L=[];const M=[{dataIndex:"name",key:"name",slots:{title:"customTitle"}},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"},{title:"Tags",key:"tags",dataIndex:"tags",scopedSlots:{customRender:"tags"}},{title:"Action",key:"action",scopedSlots:{customRender:"action"}}],q=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["loser"]},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]}];var Z={data(){return{data:q,columns:M}}},B=Z,R=Object(i["a"])(B,K,L,!1,null,null,null),U=R.exports,E=function(){var e=this,t=e._self._c;return t("div",{staticClass:"FuelCycleCalculation"},[t("a-card",{staticClass:"seach-no-padding-bottom",attrs:{bordered:!1}},[t("a-select",{staticStyle:{width:"120px"},attrs:{"default-value":e.provinceData[0]},on:{change:e.handleProvinceChange}},e._l(e.provinceData,(function(a){return t("a-select-option",{key:a},[e._v(" "+e._s(a)+" ")])})),1),t("a-select",{staticStyle:{width:"120px"},model:{value:e.secondCity,callback:function(t){e.secondCity=t},expression:"secondCity"}},e._l(e.cities,(function(a){return t("a-select-option",{key:a},[e._v(" "+e._s(a)+" ")])})),1),t("a-select",{staticStyle:{width:"120px"},model:{value:e.secondCity,callback:function(t){e.secondCity=t},expression:"secondCity"}},e._l(e.cities,(function(a){return t("a-select-option",{key:a},[e._v(" "+e._s(a)+" ")])})),1)],1),t("a-list",{staticClass:"projectList",attrs:{grid:{gutter:20,column:4},dataSource:e.data},scopedSlots:e._u([{key:"renderItem",fn:function(a,n){return t("a-list-item",{},[t("a-card",[t("div",{staticClass:"itemTop"},[t("div",{staticClass:"title"},[e._v(e._s(a.title))]),t("div",{staticClass:"type"},[e._v("项目类型"+e._s(n)+"："),t("span",[e._v("xxxxx")])]),t("a-tag",{staticClass:"state",attrs:{color:"green"}},[e._v("已启动")])],1),t("div",{staticClass:"itemBottom"},[t("div",[t("a-icon",{attrs:{type:"home"}}),e._v(" "),t("span",[e._v("xxxx电厂")])],1),t("div",[t("a-icon",{attrs:{type:"home"}}),e._v(" "),t("span",[e._v("xxxx反应堆")])],1),t("a-row",[t("a-col",{attrs:{span:16}},[t("div",[t("a-icon",{attrs:{type:"home"}}),e._v(" "),t("span",[e._v("xxxx反应堆")])],1)]),t("a-col",{attrs:{span:8}},[t("a-button",{staticStyle:{"font-size":"12px",margin:"-3px"},attrs:{type:"primary",icon:"home",size:"small"}},[e._v(" 进 入 ")])],1)],1)],1)])],1)}}])})],1)},F=[];const H=[{title:"项目1"},{title:"项目2"},{title:"项目3"},{title:"项目4"}],G=["Zhejiang","Jiangsu"],Q={Zhejiang:["Hangzhou","Ningbo","Wenzhou"],Jiangsu:["Nanjing","Suzhou","Zhenjiang"]};var V={data(){return{data:H,provinceData:G,cityData:Q,cities:Q[G[0]],secondCity:Q[G[0]][0]}},mounted(){console.log(this.data.title)},methods:{handleProvinceChange(e){this.cities=Q[e],this.secondCity=Q[e][0]}}},W=V,Y=(a("c681"),Object(i["a"])(W,E,F,!1,null,"a6e53ebc",null)),X=Y.exports,ee=function(){var e=this;e._self._c;return e._m(0)},te=[function(){var e=this,t=e._self._c;return t("div",[t("h2",[e._v("card2")])])}],ae={name:"test",data(){return{}}},ne=ae,se=Object(i["a"])(ne,ee,te,!1,null,"77613b12",null),oe=se.exports,le=function(){var e=this,t=e._self._c;return t("div",[t("a-menu",{staticStyle:{width:"256px"},attrs:{"default-selected-keys":["3"],"open-keys":e.openKeys,mode:"inline"},on:{"update:openKeys":function(t){e.openKeys=t},"update:open-keys":function(t){e.openKeys=t},click:e.handleClick}},[t("a-sub-menu",{key:"sub1",on:{titleClick:e.titleClick}},[t("span",{attrs:{slot:"title"},slot:"title"},[t("a-icon",{attrs:{type:"mail"}}),t("span",[e._v("Navigation One")])],1),t("a-menu-item-group",{key:"g1"},[t("template",{slot:"title"},[t("a-icon",{attrs:{type:"qq"}}),t("span",[e._v("Item 1")])],1),t("a-menu-item",{key:"1"},[e._v(" Option 1 ")]),t("a-menu-item",{key:"2"},[e._v(" Option 2 ")])],2),t("a-menu-item-group",{key:"g2",attrs:{title:"Item 2"}},[t("a-menu-item",{key:"3"},[e._v(" Option 3 ")]),t("a-menu-item",{key:"4"},[e._v(" Option 4 ")])],1)],1),t("a-sub-menu",{key:"sub2",on:{titleClick:e.titleClick}},[t("span",{attrs:{slot:"title"},slot:"title"},[t("a-icon",{attrs:{type:"appstore"}}),t("span",[e._v("Navigation Two")])],1),t("a-menu-item",{key:"5"},[e._v(" Option 5 ")]),t("a-menu-item",{key:"6"},[e._v(" Option 6 ")]),t("a-sub-menu",{key:"sub3",attrs:{title:"Submenu"}},[t("a-menu-item",{key:"7"},[e._v(" Option 7 ")]),t("a-menu-item",{key:"8"},[e._v(" Option 8 ")])],1)],1),t("a-sub-menu",{key:"sub4"},[t("span",{attrs:{slot:"title"},slot:"title"},[t("a-icon",{attrs:{type:"setting"}}),t("span",[e._v("Navigation Three")])],1),t("a-menu-item",{key:"9"},[e._v(" Option 9 ")]),t("a-menu-item",{key:"10"},[e._v(" Option 10 ")]),t("a-menu-item",{key:"11"},[e._v(" Option 11 ")]),t("a-menu-item",{key:"12"},[e._v(" Option 12 ")])],1)],1)],1)},re=[],ie={data(){return{current:["mail"],openKeys:["sub1","sub2"]}},watch:{openKeys(e){console.log("openKeys",e)}},methods:{handleClick(e){console.log("click",e)},titleClick(e){console.log("titleClick",e)}}},ce=ie,ue=Object(i["a"])(ce,le,re,!1,null,null,null),de=ue.exports,me=function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("过滤器")]),t("p",[e._v(e._s(e._f("rmb")(88)))])])},fe=[],pe={name:"test",data(){return{}},filters:{rmb:function(e){return"¥"+e}}},be=pe,ve=Object(i["a"])(be,me,fe,!1,null,"4a3e4abe",null),je=ve.exports,he=function(){var e=this,t=e._self._c;return t("a-list",{attrs:{grid:{gutter:16,xs:1,sm:2,md:4,lg:4,xl:6,xxl:3},"data-source":e.data,pagination:e.pagination},scopedSlots:e._u([{key:"renderItem",fn:function(a){return t("a-list-item",{},[t("a-card",{attrs:{title:a.title}},[e._v(" Card content ")])],1)}}])})},ye=[];const ge=[{title:"Title 1"},{title:"Title 2"},{title:"Title 3"},{title:"Title 4"},{title:"Title 5"},{title:"Title 6"},{title:"Title 1"},{title:"Title 2"},{title:"Title 3"},{title:"Title 4"},{title:"Title 5"},{title:"Title 6"}];var ke={data(){return{data:ge,pagination:{onChange:e=>{console.log(e)},position:"bottom",showTotal:(e,t)=>t[0]+"-"+t[1]+" 共"+e+"条",showQuickJumper:!0,showSizeChanger:!0,pageSizeOptions:["10","20","30","40","1000"]}}}},_e=ke,xe=Object(i["a"])(_e,he,ye,!1,null,null,null),we=xe.exports,Ce=function(){var e=this,t=e._self._c;return t("a-select",{staticStyle:{width:"120px"},attrs:{"label-in-value":"","default-value":{key:"lucy"}},on:{change:e.handleChange}},[t("a-select-option",{attrs:{value:"jack"}},[e._v(" Jack (100) ")]),t("a-select-option",{attrs:{value:"lucy"}},[e._v(" Lucy (101) ")])],1)},Oe=[],ze={methods:{handleChange(e){console.log(e)}}},Se=ze,Te=Object(i["a"])(Se,Ce,Oe,!1,null,null,null),Pe=Te.exports;n["a"].use(m["a"]);const Ne=[{path:"/",component:h,redirect:"/home",children:[{path:"/home",name:"home",component:w},{path:"/from1",name:"基础表单",component:P},{path:"/table1",name:"table1",component:$},{path:"/table2",name:"table2",component:U},{path:"/card1",name:"card1",component:X},{path:"/card2",name:"card2",component:oe},{path:"/menu1",name:"menu1",component:de},{path:"/guolvqi1",name:"过滤器",component:je},{path:"/alist1",name:"alist页面",component:we},{path:"/Select1",name:"Select 选择器",component:Pe}]}],De=new m["a"]({routes:Ne});console.log(De.options.routes[0]);var Ie=De;n["a"].config.productionTip=!1,n["a"].use(d["a"]),n["a"].use(m["a"]),new n["a"]({render:e=>e(u),router:Ie}).$mount("#app")},"6b53":function(e,t,a){"use strict";a("bd1f")},a076:function(e,t,a){},bd1f:function(e,t,a){},c681:function(e,t,a){"use strict";a("a076")}});
//# sourceMappingURL=app.91212cec.js.map