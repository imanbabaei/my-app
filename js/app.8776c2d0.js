(function(){"use strict";var t={2537:function(t,e,a){var i=a(144),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("AppBar")],1)},s=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-app",[a("div",[a("v-app-bar",{staticClass:"ma-4",staticStyle:{"border-radius":"6px"},attrs:{elevation:"4"}},[a("v-menu",{attrs:{left:"",bottom:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,n=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",n,!1),i),[a("v-icon",[t._v("mdi-menu")])],1)]}}])},[a("v-list",[a("v-list-item",[a("v-icon",{staticClass:"mr-2"},[t._v("mdi-folder-search-outline")]),t._v(" Load a Worksheet ")],1),a("v-list-item",[a("v-icon",{staticClass:"mr-2"},[t._v("mdi-book")]),t._v(" User Guide ")],1),a("v-list-item",[a("v-icon",{staticClass:"mr-2"},[t._v("mdi-github")]),t._v(" GitHub ")],1),a("v-list-item",[a("v-icon",{staticClass:"mr-2"},[t._v("mdi-help-circle")]),t._v(" Support ")],1)],1)],1),a("v-app-bar-title",{staticClass:"d-flex align-center ml-2"},[t._v(" System Identification ")]),a("v-spacer"),a("v-tabs",{attrs:{centered:"",color:"blue darken-4"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("v-tabs-slider"),t._l(t.appbar_tabs,(function(e){return a("v-tab",{key:e,staticStyle:{"font-size":"10pt","font-weight":"bold"}},[t._v(" "+t._s(e)+" ")])}))],2),a("v-spacer")],1),a("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.appbar_tabs,(function(t){return a("v-tab-item",{key:t},[a("LeftPanel")],1)})),1)],1)])],1)},r=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{staticClass:"ma-1"},[a("v-card",{staticClass:"mx-3 pa-4",staticStyle:{background:"seagreen",width:"15%","min-width":"350px","min-height":"870px","border-radius":"10pt"},attrs:{flat:"",elevation:"4",dark:""}},[a("v-card-title",[a("v-icon",{staticClass:"mr-3"},[t._v(" mdi-tools ")]),t._v(" Settings ")],1),a("v-select",{staticClass:"mx-4",attrs:{label:"Select MV",items:t.items,multiple:"",clearable:"","item-color":"#00008b",solo:"",light:""}}),a("v-select",{staticClass:"mx-4",attrs:{label:"Select CV",items:t.items,multiple:"",clearable:"","item-color":"#00008b",solo:"",light:""}}),a("v-expansion-panels",{staticClass:"px-4"},[a("v-expansion-panel",{staticClass:"mb-8 mt-0"},[a("v-expansion-panel-header",{staticStyle:{"font-weight":"bold","font-size":"12pt"}},[t._v(" Model Structure ")]),a("v-expansion-panel-content",[a("v-row",{staticClass:"d-flex justify-start align-center ma-0 pa-0",staticStyle:{"font-size":"11pt"}},[t._v(" Auto-Regressive (n_a) "),a("v-spacer"),a("v-text-field",{staticClass:"justify-center mx-2",staticStyle:{"max-width":"35px"},attrs:{label:"min"}}),a("v-text-field",{staticClass:"justify-center",staticStyle:{"max-width":"35px"},attrs:{label:"max"}})],1),a("v-row",{staticClass:"d-flex justify-start align-center ma-0 pa-0",staticStyle:{"font-size":"11pt"}},[t._v(" Exogenous Input(n_b): "),a("v-spacer"),a("v-text-field",{staticClass:"justify-center mx-2",staticStyle:{"max-width":"35px"},attrs:{label:"min"}}),a("v-text-field",{staticClass:"justify-center",staticStyle:{"max-width":"35px"},attrs:{label:"max"}})],1),a("v-row",{staticClass:"d-flex justify-start align-center ma-0 pa-0",staticStyle:{"font-size":"11pt"}},[t._v(" Input delay (n_c) "),a("v-spacer"),a("v-text-field",{staticClass:"justify-center mx-2",staticStyle:{"max-width":"35px"},attrs:{label:"min"}}),a("v-text-field",{staticClass:"justify-center",staticStyle:{"max-width":"35px"},attrs:{label:"max"}})],1)],1)],1)],1),a("v-select",{staticClass:"mx-4",attrs:{label:"Training Condition",items:t.items,multiple:"",clearable:"","item-color":"#00008b",solo:"",light:"",rounded:""}}),a("v-select",{staticClass:"mx-4",attrs:{label:"Validation Condition",items:t.items,multiple:"",clearable:"","item-color":"#00008b",solo:"",light:"",rounded:""}}),a("v-divider",{staticClass:"d-flex align-center justify-center mt-0 pb-4 mx-4"}),a("v-row",{staticClass:"d-flex justify-center align-center mx-3 my-2"},[a("v-btn",{staticClass:"mx-1",staticStyle:{color:"darkslategrey",width:"27%","font-size":"10pt"},attrs:{light:""}},[t._v(" Identify ")]),a("v-btn",{staticClass:"mx-1",staticStyle:{color:"darkslategrey",width:"27%","font-size":"10pt"},attrs:{light:""}},[t._v(" Validate ")]),a("v-btn",{staticClass:"mx-1",staticStyle:{color:"darkslategrey",width:"35%","font-size":"10pt"},attrs:{light:""}},[t._v(" Push Model ")])],1)],1),a("v-card",{staticStyle:{"border-radius":"7pt"},attrs:{width:"61%"}})],1)},c=[],u={name:"LeftPanel",data:()=>({items:["Foo","Bar","Fizz","Buzz","iman","ehsan"]})},p=u,v=a(1001),f=a(3453),d=a.n(f),m=a(680),b=a(3237),x=a(7118),y=a(1418),h=a(6845),_=a(2443),g=a(1192),C=a(5630),S=a(6428),Z=a(5788),V=a(6628),w=a(3631),j=a(5978),k=(0,v.Z)(p,o,c,!1,null,null,null),T=k.exports;d()(k,{VBtn:m.Z,VCard:b.Z,VCardTitle:x.EB,VDivider:y.Z,VExpansionPanel:h.Z,VExpansionPanelContent:_.Z,VExpansionPanelHeader:g.Z,VExpansionPanels:C.Z,VIcon:S.Z,VRow:Z.Z,VSelect:V.Z,VSpacer:w.Z,VTextField:j.Z});var O={name:"AppBar",components:{LeftPanel:T},data(){return{tab:null,appbar_tabs:["ARX","SubSpace","Nerual Network","Transfer Function"]}}},z=O,P=a(7524),A=a(7199),B=a(7905),E=a(6816),I=a(7620),M=a(9904),L=a(4227),F=a(1759),$=a(4319),R=a(5547),G=a(1208),H=(0,v.Z)(z,l,r,!1,null,null,null),N=H.exports;d()(H,{VApp:P.Z,VAppBar:A.Z,VAppBarTitle:B.Z,VBtn:m.Z,VIcon:S.Z,VList:E.Z,VListItem:I.Z,VMenu:M.Z,VSpacer:w.Z,VTab:L.Z,VTabItem:F.Z,VTabs:$.Z,VTabsItems:R.Z,VTabsSlider:G.Z});var D={name:"App",components:{AppBar:N},data:()=>({})},U=D,W=(0,v.Z)(U,n,s,!1,null,null,null),X=W.exports;d()(W,{VApp:P.Z});var q=a(9132);i.Z.use(q.Z);var J=new q.Z({});i.Z.config.productionTip=!1,new i.Z({vuetify:J,render:t=>t(X)}).$mount("#app")}},e={};function a(i){var n=e[i];if(void 0!==n)return n.exports;var s=e[i]={exports:{}};return t[i](s,s.exports,a),s.exports}a.m=t,function(){var t=[];a.O=function(e,i,n,s){if(!i){var l=1/0;for(u=0;u<t.length;u++){i=t[u][0],n=t[u][1],s=t[u][2];for(var r=!0,o=0;o<i.length;o++)(!1&s||l>=s)&&Object.keys(a.O).every((function(t){return a.O[t](i[o])}))?i.splice(o--,1):(r=!1,s<l&&(l=s));if(r){t.splice(u--,1);var c=n();void 0!==c&&(e=c)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[i,n,s]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var i in e)a.o(e,i)&&!a.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,i){var n,s,l=i[0],r=i[1],o=i[2],c=0;if(l.some((function(e){return 0!==t[e]}))){for(n in r)a.o(r,n)&&(a.m[n]=r[n]);if(o)var u=o(a)}for(e&&e(i);c<l.length;c++)s=l[c],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(u)},i=self["webpackChunkmy_app"]=self["webpackChunkmy_app"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(2537)}));i=a.O(i)})();
//# sourceMappingURL=app.8776c2d0.js.map