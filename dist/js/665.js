"use strict";(self["webpackChunkportofolio_tmslpm"]=self["webpackChunkportofolio_tmslpm"]||[]).push([[665],{665:function(t,e,a){a.r(e),a.d(e,{default:function(){return K}});var s,n=a(252),l=a(262),o=a(577),i=a(155);(function(t){t[t["DARK_THEME"]=0]="DARK_THEME"})(s||(s={}));class r{static setItem(t,e,a){t.setItem(s[e],a)}static setItemInLocalStorage(t,e){r.setItem(localStorage,t,e)}static setItemInSessionStorage(t,e){r.setItem(sessionStorage,t,e)}static getItem(t,e,a){let n=t.getItem(s[e]);return null===n?a:n}static getItemInLocalStorage(t,e){return r.getItem(localStorage,t,e)}static getItemInSessionStorage(t,e){return r.getItem(sessionStorage,t,e)}}function c(){const t=(0,l.iH)("true"===r.getItemInLocalStorage(s.DARK_THEME,"false"));return document.documentElement.setAttribute("data-theme",t.value?"dark":"light"),{isDark:t,switchTheme:()=>{t.value=!t.value,document.documentElement.setAttribute("data-theme",t.value?"dark":"light"),r.setItemInLocalStorage(s.DARK_THEME,t.value?"true":"false")}}}const u=["title"],m={class:"material-symbols-outlined pointer"};var d=(0,n.aZ)({__name:"SwitchTheme",setup(t){const{isDark:e,switchTheme:a}=c();return(t,s)=>((0,n.wg)(),(0,n.iD)("a",{onClick:s[0]||(s[0]=(...t)=>(0,l.SU)(a)&&(0,l.SU)(a)(...t)),href:"javascript:void(0);",class:"pointer",title:(0,l.SU)(e)?"Select light theme":"Select dark theme"},[(0,n._)("i",m,(0,o.zw)((0,l.SU)(e)?"wb_sunny":"nightlight"),1)],8,u))}}),v=a(744);const _=(0,v.Z)(d,[["__scopeId","data-v-169c9fd4"]]);var g=_;const p=t=>((0,n.dD)("data-v-9b35205c"),t=t(),(0,n.Cn)(),t),h=p((()=>(0,n._)("i",{class:"material-symbols-outlined"},"apps",-1))),I=p((()=>(0,n._)("i",{class:"material-symbols-outlined"},"expand",-1))),S=[I];var f=(0,n.aZ)({__name:"TopNavigation",setup(t){const e=(0,l.iH)(null),a=()=>e.value.classList.contains("responsive")?e.value.classList.remove("responsive"):e.value.classList.add("responsive"),s=()=>e.value.classList.contains("responsive")?a():()=>{};return(t,r)=>{const c=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("nav",{ref_key:"menu",ref:e,class:"col-12"},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,l.SU)(i.Z),(t=>((0,n.wg)(),(0,n.iD)(n.HY,null,[t.hidden?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(c,{key:0,to:t.path,id:t.name,onClick:s},{default:(0,n.w5)((()=>[h,(0,n._)("span",null,(0,o.zw)(t.name),1)])),_:2},1032,["to","id"]))],64)))),256)),(0,n.Wm)(g,{class:"btnSwitchTheme floatRight"}),(0,n._)("b",{onClick:r[0]||(r[0]=t=>a()),class:"icon"},S)],512)}}});const w=(0,v.Z)(f,[["__scopeId","data-v-9b35205c"]]);var k=w;const D=t=>((0,n.dD)("data-v-63f5656e"),t=t(),(0,n.Cn)(),t),b=D((()=>(0,n._)("b",null,"tmslpm",-1))),H=[b];var E=(0,n.aZ)({__name:"MyFooter",setup(t){return(t,e)=>((0,n.wg)(),(0,n.iD)("footer",null,H))}});const T=(0,v.Z)(E,[["__scopeId","data-v-63f5656e"]]);var Z=T;const C=t=>((0,n.dD)("data-v-da0d9e2e"),t=t(),(0,n.Cn)(),t),L=C((()=>(0,n._)("main",{class:"col-12"},[(0,n._)("h1",null,"Hello World")],-1)));var y=(0,n.aZ)({__name:"Home",setup(t){return(t,e)=>((0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(k),L,(0,n.Wm)(Z)],64))}});const A=(0,v.Z)(y,[["__scopeId","data-v-da0d9e2e"]]);var K=A}}]);
//# sourceMappingURL=665.js.map