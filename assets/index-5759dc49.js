(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Mc(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function Lc(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Re(s)?ey(s):Lc(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Re(t))return t;if(de(t))return t}}const Xm=/;(?![^(]*\))/g,Jm=/:([^]+)/,Zm=/\/\*.*?\*\//gs;function ey(t){const e={};return t.replace(Zm,"").split(Xm).forEach(n=>{if(n){const s=n.split(Jm);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Uc(t){let e="";if(Re(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const s=Uc(t[n]);s&&(e+=s+" ")}else if(de(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ty="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ny=Mc(ty);function xf(t){return!!t||t===""}function sy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Eo(t[s],e[s]);return n}function Eo(t,e){if(t===e)return!0;let n=_l(t),s=_l(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=gr(t),s=gr(e),n||s)return t===e;if(n=H(t),s=H(e),n||s)return n&&s?sy(t,e):!1;if(n=de(t),s=de(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Eo(t[o],e[o]))return!1}}return String(t)===String(e)}function ry(t,e){return t.findIndex(n=>Eo(n,e))}const iy=t=>Re(t)?t:t==null?"":H(t)||de(t)&&(t.toString===Lf||!Y(t.toString))?JSON.stringify(t,Pf,2):String(t),Pf=(t,e)=>e&&e.__v_isRef?Pf(t,e.value):fs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:To(e)?{[`Set(${e.size})`]:[...e.values()]}:de(e)&&!H(e)&&!Uf(e)?String(e):e,pe={},hs=[],yt=()=>{},oy=()=>!1,ay=/^on[^a-z]/,Io=t=>ay.test(t),Fc=t=>t.startsWith("onUpdate:"),Ye=Object.assign,Vc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},cy=Object.prototype.hasOwnProperty,se=(t,e)=>cy.call(t,e),H=Array.isArray,fs=t=>Fr(t)==="[object Map]",To=t=>Fr(t)==="[object Set]",_l=t=>Fr(t)==="[object Date]",Y=t=>typeof t=="function",Re=t=>typeof t=="string",gr=t=>typeof t=="symbol",de=t=>t!==null&&typeof t=="object",Mf=t=>de(t)&&Y(t.then)&&Y(t.catch),Lf=Object.prototype.toString,Fr=t=>Lf.call(t),uy=t=>Fr(t).slice(8,-1),Uf=t=>Fr(t)==="[object Object]",$c=t=>Re(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ai=Mc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),bo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ly=/-(\w)/g,Mt=bo(t=>t.replace(ly,(e,n)=>n?n.toUpperCase():"")),hy=/\B([A-Z])/g,Yn=bo(t=>t.replace(hy,"-$1").toLowerCase()),So=bo(t=>t.charAt(0).toUpperCase()+t.slice(1)),ga=bo(t=>t?`on${So(t)}`:""),mr=(t,e)=>!Object.is(t,e),ki=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ji=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},qi=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let El;const fy=()=>El||(El=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let dt;class Ff{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=dt,!e&&dt&&(this.index=(dt.scopes||(dt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=dt;try{return dt=this,e()}finally{dt=n}}}on(){dt=this}off(){dt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function dy(t){return new Ff(t)}function py(t,e=dt){e&&e.active&&e.effects.push(t)}function gy(){return dt}const Bc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Vf=t=>(t.w&pn)>0,$f=t=>(t.n&pn)>0,my=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=pn},yy=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Vf(r)&&!$f(r)?r.delete(t):e[n++]=r,r.w&=~pn,r.n&=~pn}e.length=n}},Ba=new WeakMap;let Js=0,pn=1;const ja=30;let gt;const Ln=Symbol(""),qa=Symbol("");class jc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,py(this,s)}run(){if(!this.active)return this.fn();let e=gt,n=an;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=gt,gt=this,an=!0,pn=1<<++Js,Js<=ja?my(this):Il(this),this.fn()}finally{Js<=ja&&yy(this),pn=1<<--Js,gt=this.parent,an=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){gt===this?this.deferStop=!0:this.active&&(Il(this),this.onStop&&this.onStop(),this.active=!1)}}function Il(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let an=!0;const Bf=[];function Ms(){Bf.push(an),an=!1}function Ls(){const t=Bf.pop();an=t===void 0?!0:t}function tt(t,e,n){if(an&&gt){let s=Ba.get(t);s||Ba.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Bc()),jf(r)}}function jf(t,e){let n=!1;Js<=ja?$f(t)||(t.n|=pn,n=!Vf(t)):n=!t.has(gt),n&&(t.add(gt),gt.deps.push(t))}function jt(t,e,n,s,r,i){const o=Ba.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&H(t)){const c=Number(s);o.forEach((u,l)=>{(l==="length"||l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":H(t)?$c(n)&&a.push(o.get("length")):(a.push(o.get(Ln)),fs(t)&&a.push(o.get(qa)));break;case"delete":H(t)||(a.push(o.get(Ln)),fs(t)&&a.push(o.get(qa)));break;case"set":fs(t)&&a.push(o.get(Ln));break}if(a.length===1)a[0]&&Ha(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);Ha(Bc(c))}}function Ha(t,e){const n=H(t)?t:[...t];for(const s of n)s.computed&&Tl(s);for(const s of n)s.computed||Tl(s)}function Tl(t,e){(t!==gt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const vy=Mc("__proto__,__v_isRef,__isVue"),qf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(gr)),wy=qc(),_y=qc(!1,!0),Ey=qc(!0),bl=Iy();function Iy(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ie(this);for(let i=0,o=this.length;i<o;i++)tt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ie)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ms();const s=ie(this)[e].apply(this,n);return Ls(),s}}),t}function Ty(t){const e=ie(this);return tt(e,"has",t),e.hasOwnProperty(t)}function qc(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Vy:Gf:e?Wf:zf).get(s))return s;const o=H(s);if(!t){if(o&&se(bl,r))return Reflect.get(bl,r,i);if(r==="hasOwnProperty")return Ty}const a=Reflect.get(s,r,i);return(gr(r)?qf.has(r):vy(r))||(t||tt(s,"get",r),e)?a:je(a)?o&&$c(r)?a:a.value:de(a)?t?Qf(a):Vr(a):a}}const by=Hf(),Sy=Hf(!0);function Hf(t=!1){return function(n,s,r,i){let o=n[s];if(Es(o)&&je(o)&&!je(r))return!1;if(!t&&(!Hi(r)&&!Es(r)&&(o=ie(o),r=ie(r)),!H(n)&&je(o)&&!je(r)))return o.value=r,!0;const a=H(n)&&$c(s)?Number(s)<n.length:se(n,s),c=Reflect.set(n,s,r,i);return n===ie(i)&&(a?mr(r,o)&&jt(n,"set",s,r):jt(n,"add",s,r)),c}}function Cy(t,e){const n=se(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&jt(t,"delete",e,void 0),s}function Ay(t,e){const n=Reflect.has(t,e);return(!gr(e)||!qf.has(e))&&tt(t,"has",e),n}function ky(t){return tt(t,"iterate",H(t)?"length":Ln),Reflect.ownKeys(t)}const Kf={get:wy,set:by,deleteProperty:Cy,has:Ay,ownKeys:ky},Ry={get:Ey,set(t,e){return!0},deleteProperty(t,e){return!0}},Dy=Ye({},Kf,{get:_y,set:Sy}),Hc=t=>t,Co=t=>Reflect.getPrototypeOf(t);function di(t,e,n=!1,s=!1){t=t.__v_raw;const r=ie(t),i=ie(e);n||(e!==i&&tt(r,"get",e),tt(r,"get",i));const{has:o}=Co(r),a=s?Hc:n?Gc:yr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function pi(t,e=!1){const n=this.__v_raw,s=ie(n),r=ie(t);return e||(t!==r&&tt(s,"has",t),tt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function gi(t,e=!1){return t=t.__v_raw,!e&&tt(ie(t),"iterate",Ln),Reflect.get(t,"size",t)}function Sl(t){t=ie(t);const e=ie(this);return Co(e).has.call(e,t)||(e.add(t),jt(e,"add",t,t)),this}function Cl(t,e){e=ie(e);const n=ie(this),{has:s,get:r}=Co(n);let i=s.call(n,t);i||(t=ie(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?mr(e,o)&&jt(n,"set",t,e):jt(n,"add",t,e),this}function Al(t){const e=ie(this),{has:n,get:s}=Co(e);let r=n.call(e,t);r||(t=ie(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&jt(e,"delete",t,void 0),i}function kl(){const t=ie(this),e=t.size!==0,n=t.clear();return e&&jt(t,"clear",void 0,void 0),n}function mi(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ie(o),c=e?Hc:t?Gc:yr;return!t&&tt(a,"iterate",Ln),o.forEach((u,l)=>s.call(r,c(u),c(l),i))}}function yi(t,e,n){return function(...s){const r=this.__v_raw,i=ie(r),o=fs(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),l=n?Hc:e?Gc:yr;return!e&&tt(i,"iterate",c?qa:Ln),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[l(h[0]),l(h[1])]:l(h),done:d}},[Symbol.iterator](){return this}}}}function Xt(t){return function(...e){return t==="delete"?!1:this}}function Ny(){const t={get(i){return di(this,i)},get size(){return gi(this)},has:pi,add:Sl,set:Cl,delete:Al,clear:kl,forEach:mi(!1,!1)},e={get(i){return di(this,i,!1,!0)},get size(){return gi(this)},has:pi,add:Sl,set:Cl,delete:Al,clear:kl,forEach:mi(!1,!0)},n={get(i){return di(this,i,!0)},get size(){return gi(this,!0)},has(i){return pi.call(this,i,!0)},add:Xt("add"),set:Xt("set"),delete:Xt("delete"),clear:Xt("clear"),forEach:mi(!0,!1)},s={get(i){return di(this,i,!0,!0)},get size(){return gi(this,!0)},has(i){return pi.call(this,i,!0)},add:Xt("add"),set:Xt("set"),delete:Xt("delete"),clear:Xt("clear"),forEach:mi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=yi(i,!1,!1),n[i]=yi(i,!0,!1),e[i]=yi(i,!1,!0),s[i]=yi(i,!0,!0)}),[t,n,e,s]}const[Oy,xy,Py,My]=Ny();function Kc(t,e){const n=e?t?My:Py:t?xy:Oy;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(se(n,r)&&r in s?n:s,r,i)}const Ly={get:Kc(!1,!1)},Uy={get:Kc(!1,!0)},Fy={get:Kc(!0,!1)},zf=new WeakMap,Wf=new WeakMap,Gf=new WeakMap,Vy=new WeakMap;function $y(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function By(t){return t.__v_skip||!Object.isExtensible(t)?0:$y(uy(t))}function Vr(t){return Es(t)?t:zc(t,!1,Kf,Ly,zf)}function jy(t){return zc(t,!1,Dy,Uy,Wf)}function Qf(t){return zc(t,!0,Ry,Fy,Gf)}function zc(t,e,n,s,r){if(!de(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=By(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function ds(t){return Es(t)?ds(t.__v_raw):!!(t&&t.__v_isReactive)}function Es(t){return!!(t&&t.__v_isReadonly)}function Hi(t){return!!(t&&t.__v_isShallow)}function Yf(t){return ds(t)||Es(t)}function ie(t){const e=t&&t.__v_raw;return e?ie(e):t}function Wc(t){return ji(t,"__v_skip",!0),t}const yr=t=>de(t)?Vr(t):t,Gc=t=>de(t)?Qf(t):t;function Xf(t){an&&gt&&(t=ie(t),jf(t.dep||(t.dep=Bc())))}function Jf(t,e){t=ie(t);const n=t.dep;n&&Ha(n)}function je(t){return!!(t&&t.__v_isRef===!0)}function Ki(t){return Zf(t,!1)}function qy(t){return Zf(t,!0)}function Zf(t,e){return je(t)?t:new Hy(t,e)}class Hy{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ie(e),this._value=n?e:yr(e)}get value(){return Xf(this),this._value}set value(e){const n=this.__v_isShallow||Hi(e)||Es(e);e=n?e:ie(e),mr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:yr(e),Jf(this))}}function ps(t){return je(t)?t.value:t}const Ky={get:(t,e,n)=>ps(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return je(r)&&!je(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function ed(t){return ds(t)?t:new Proxy(t,Ky)}var td;class zy{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[td]=!1,this._dirty=!0,this.effect=new jc(e,()=>{this._dirty||(this._dirty=!0,Jf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ie(this);return Xf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}td="__v_isReadonly";function Wy(t,e,n=!1){let s,r;const i=Y(t);return i?(s=t,r=yt):(s=t.get,r=t.set),new zy(s,r,i||!r,n)}function cn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Ao(i,e,n)}return r}function vt(t,e,n,s){if(Y(t)){const i=cn(t,e,n,s);return i&&Mf(i)&&i.catch(o=>{Ao(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(vt(t[i],e,n,s));return r}function Ao(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){cn(c,null,10,[t,o,a]);return}}Gy(t,n,r,s)}function Gy(t,e,n,s=!0){console.error(t)}let vr=!1,Ka=!1;const $e=[];let kt=0;const gs=[];let Ft=null,kn=0;const nd=Promise.resolve();let Qc=null;function sd(t){const e=Qc||nd;return t?e.then(this?t.bind(this):t):e}function Qy(t){let e=kt+1,n=$e.length;for(;e<n;){const s=e+n>>>1;wr($e[s])<t?e=s+1:n=s}return e}function Yc(t){(!$e.length||!$e.includes(t,vr&&t.allowRecurse?kt+1:kt))&&(t.id==null?$e.push(t):$e.splice(Qy(t.id),0,t),rd())}function rd(){!vr&&!Ka&&(Ka=!0,Qc=nd.then(od))}function Yy(t){const e=$e.indexOf(t);e>kt&&$e.splice(e,1)}function Xy(t){H(t)?gs.push(...t):(!Ft||!Ft.includes(t,t.allowRecurse?kn+1:kn))&&gs.push(t),rd()}function Rl(t,e=vr?kt+1:0){for(;e<$e.length;e++){const n=$e[e];n&&n.pre&&($e.splice(e,1),e--,n())}}function id(t){if(gs.length){const e=[...new Set(gs)];if(gs.length=0,Ft){Ft.push(...e);return}for(Ft=e,Ft.sort((n,s)=>wr(n)-wr(s)),kn=0;kn<Ft.length;kn++)Ft[kn]();Ft=null,kn=0}}const wr=t=>t.id==null?1/0:t.id,Jy=(t,e)=>{const n=wr(t)-wr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function od(t){Ka=!1,vr=!0,$e.sort(Jy);const e=yt;try{for(kt=0;kt<$e.length;kt++){const n=$e[kt];n&&n.active!==!1&&cn(n,null,14)}}finally{kt=0,$e.length=0,id(),vr=!1,Qc=null,($e.length||gs.length)&&od()}}function Zy(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||pe;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[l]||pe;d&&(r=n.map(g=>Re(g)?g.trim():g)),h&&(r=n.map(qi))}let a,c=s[a=ga(e)]||s[a=ga(Mt(e))];!c&&i&&(c=s[a=ga(Yn(e))]),c&&vt(c,t,6,r);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,vt(u,t,6,r)}}function ad(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!Y(t)){const c=u=>{const l=ad(u,e,!0);l&&(a=!0,Ye(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(de(t)&&s.set(t,null),null):(H(i)?i.forEach(c=>o[c]=null):Ye(o,i),de(t)&&s.set(t,o),o)}function ko(t,e){return!t||!Io(e)?!1:(e=e.slice(2).replace(/Once$/,""),se(t,e[0].toLowerCase()+e.slice(1))||se(t,Yn(e))||se(t,e))}let at=null,Ro=null;function zi(t){const e=at;return at=t,Ro=t&&t.type.__scopeId||null,e}function ev(t){Ro=t}function tv(){Ro=null}function cs(t,e=at,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Fl(-1);const i=zi(e);let o;try{o=t(...r)}finally{zi(i),s._d&&Fl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ma(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:d,setupState:g,ctx:y,inheritAttrs:I}=t;let k,R;const P=zi(t);try{if(n.shapeFlag&4){const X=r||s;k=At(l.call(X,X,h,i,g,d,y)),R=c}else{const X=e;k=At(X.length>1?X(i,{attrs:c,slots:a,emit:u}):X(i,null)),R=e.props?c:nv(c)}}catch(X){or.length=0,Ao(X,t,1),k=qe(jn)}let U=k;if(R&&I!==!1){const X=Object.keys(R),{shapeFlag:me}=U;X.length&&me&7&&(o&&X.some(Fc)&&(R=sv(R,o)),U=Is(U,R))}return n.dirs&&(U=Is(U),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&(U.transition=n.transition),k=U,zi(P),k}const nv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Io(n))&&((e||(e={}))[n]=t[n]);return e},sv=(t,e)=>{const n={};for(const s in t)(!Fc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function rv(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Dl(s,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const d=l[h];if(o[d]!==s[d]&&!ko(u,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Dl(s,o,u):!0:!!o;return!1}function Dl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!ko(n,i))return!0}return!1}function iv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const ov=t=>t.__isSuspense;function av(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):Xy(t)}function Ri(t,e){if(be){let n=be.provides;const s=be.parent&&be.parent.provides;s===n&&(n=be.provides=Object.create(s)),n[t]=e}}function Dt(t,e,n=!1){const s=be||at;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Y(e)?e.call(s.proxy):e}}const vi={};function Di(t,e,n){return cd(t,e,n)}function cd(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=pe){const a=gy()===(be==null?void 0:be.scope)?be:null;let c,u=!1,l=!1;if(je(t)?(c=()=>t.value,u=Hi(t)):ds(t)?(c=()=>t,s=!0):H(t)?(l=!0,u=t.some(U=>ds(U)||Hi(U)),c=()=>t.map(U=>{if(je(U))return U.value;if(ds(U))return Nn(U);if(Y(U))return cn(U,a,2)})):Y(t)?e?c=()=>cn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),vt(t,a,3,[d])}:c=yt,e&&s){const U=c;c=()=>Nn(U())}let h,d=U=>{h=R.onStop=()=>{cn(U,a,4)}},g;if(Er)if(d=yt,e?n&&vt(e,a,3,[c(),l?[]:void 0,d]):c(),r==="sync"){const U=ew();g=U.__watcherHandles||(U.__watcherHandles=[])}else return yt;let y=l?new Array(t.length).fill(vi):vi;const I=()=>{if(R.active)if(e){const U=R.run();(s||u||(l?U.some((X,me)=>mr(X,y[me])):mr(U,y)))&&(h&&h(),vt(e,a,3,[U,y===vi?void 0:l&&y[0]===vi?[]:y,d]),y=U)}else R.run()};I.allowRecurse=!!e;let k;r==="sync"?k=I:r==="post"?k=()=>Je(I,a&&a.suspense):(I.pre=!0,a&&(I.id=a.uid),k=()=>Yc(I));const R=new jc(c,k);e?n?I():y=R.run():r==="post"?Je(R.run.bind(R),a&&a.suspense):R.run();const P=()=>{R.stop(),a&&a.scope&&Vc(a.scope.effects,R)};return g&&g.push(P),P}function cv(t,e,n){const s=this.proxy,r=Re(t)?t.includes(".")?ud(s,t):()=>s[t]:t.bind(s,s);let i;Y(e)?i=e:(i=e.handler,n=e);const o=be;Ts(this);const a=cd(r,i.bind(s),n);return o?Ts(o):Fn(),a}function ud(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Nn(t,e){if(!de(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),je(t))Nn(t.value,e);else if(H(t))for(let n=0;n<t.length;n++)Nn(t[n],e);else if(To(t)||fs(t))t.forEach(n=>{Nn(n,e)});else if(Uf(t))for(const n in t)Nn(t[n],e);return t}function ld(t){return Y(t)?{setup:t,name:t.name}:t}const Ni=t=>!!t.type.__asyncLoader,hd=t=>t.type.__isKeepAlive;function uv(t,e){fd(t,"a",e)}function lv(t,e){fd(t,"da",e)}function fd(t,e,n=be){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Do(e,s,n),n){let r=n.parent;for(;r&&r.parent;)hd(r.parent.vnode)&&hv(s,e,n,r),r=r.parent}}function hv(t,e,n,s){const r=Do(e,t,s,!0);pd(()=>{Vc(s[e],r)},n)}function Do(t,e,n=be,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ms(),Ts(n);const a=vt(e,n,t,o);return Fn(),Ls(),a});return s?r.unshift(i):r.push(i),i}}const Gt=t=>(e,n=be)=>(!Er||t==="sp")&&Do(t,(...s)=>e(...s),n),fv=Gt("bm"),dd=Gt("m"),dv=Gt("bu"),pv=Gt("u"),gv=Gt("bum"),pd=Gt("um"),mv=Gt("sp"),yv=Gt("rtg"),vv=Gt("rtc");function wv(t,e=be){Do("ec",t,e)}function CA(t,e){const n=at;if(n===null)return t;const s=xo(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=pe]=e[i];o&&(Y(o)&&(o={mounted:o,updated:o}),o.deep&&Nn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function bn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Ms(),vt(c,n,8,[t.el,a,t,e]),Ls())}}const gd="components";function Wi(t,e){return Ev(gd,t,!0,e)||t}const _v=Symbol();function Ev(t,e,n=!0,s=!1){const r=at||be;if(r){const i=r.type;if(t===gd){const a=Xv(i,!1);if(a&&(a===e||a===Mt(e)||a===So(Mt(e))))return i}const o=Nl(r[t]||i[t],e)||Nl(r.appContext[t],e);return!o&&s?i:o}}function Nl(t,e){return t&&(t[e]||t[Mt(e)]||t[So(Mt(e))])}function Iv(t,e,n,s){let r;const i=n&&n[s];if(H(t)||Re(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(de(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];r[a]=e(t[u],u,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const za=t=>t?Cd(t)?xo(t)||t.proxy:za(t.parent):null,ir=Ye(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>za(t.parent),$root:t=>za(t.root),$emit:t=>t.emit,$options:t=>Xc(t),$forceUpdate:t=>t.f||(t.f=()=>Yc(t.update)),$nextTick:t=>t.n||(t.n=sd.bind(t.proxy)),$watch:t=>cv.bind(t)}),ya=(t,e)=>t!==pe&&!t.__isScriptSetup&&se(t,e),Tv={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(ya(s,e))return o[e]=1,s[e];if(r!==pe&&se(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&se(u,e))return o[e]=3,i[e];if(n!==pe&&se(n,e))return o[e]=4,n[e];Wa&&(o[e]=0)}}const l=ir[e];let h,d;if(l)return e==="$attrs"&&tt(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==pe&&se(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,se(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return ya(r,e)?(r[e]=n,!0):s!==pe&&se(s,e)?(s[e]=n,!0):se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==pe&&se(t,o)||ya(e,o)||(a=i[0])&&se(a,o)||se(s,o)||se(ir,o)||se(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Wa=!0;function bv(t){const e=Xc(t),n=t.proxy,s=t.ctx;Wa=!1,e.beforeCreate&&Ol(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:d,beforeUpdate:g,updated:y,activated:I,deactivated:k,beforeDestroy:R,beforeUnmount:P,destroyed:U,unmounted:X,render:me,renderTracked:Ce,renderTriggered:Ue,errorCaptured:ut,serverPrefetch:It,expose:it,inheritAttrs:Yt,components:Tt,directives:ts,filters:In}=e;if(u&&Sv(u,s,null,t.appContext.config.unwrapInjectedRef),o)for(const le in o){const ce=o[le];Y(ce)&&(s[le]=ce.bind(n))}if(r){const le=r.call(n,n);de(le)&&(t.data=Vr(le))}if(Wa=!0,i)for(const le in i){const ce=i[le],lt=Y(ce)?ce.bind(n,n):Y(ce.get)?ce.get.bind(n,n):yt,Tn=!Y(ce)&&Y(ce.set)?ce.set.bind(n):yt,ht=ot({get:lt,set:Tn});Object.defineProperty(s,le,{enumerable:!0,configurable:!0,get:()=>ht.value,set:Xe=>ht.value=Xe})}if(a)for(const le in a)md(a[le],s,n,le);if(c){const le=Y(c)?c.call(n):c;Reflect.ownKeys(le).forEach(ce=>{Ri(ce,le[ce])})}l&&Ol(l,t,"c");function _e(le,ce){H(ce)?ce.forEach(lt=>le(lt.bind(n))):ce&&le(ce.bind(n))}if(_e(fv,h),_e(dd,d),_e(dv,g),_e(pv,y),_e(uv,I),_e(lv,k),_e(wv,ut),_e(vv,Ce),_e(yv,Ue),_e(gv,P),_e(pd,X),_e(mv,It),H(it))if(it.length){const le=t.exposed||(t.exposed={});it.forEach(ce=>{Object.defineProperty(le,ce,{get:()=>n[ce],set:lt=>n[ce]=lt})})}else t.exposed||(t.exposed={});me&&t.render===yt&&(t.render=me),Yt!=null&&(t.inheritAttrs=Yt),Tt&&(t.components=Tt),ts&&(t.directives=ts)}function Sv(t,e,n=yt,s=!1){H(t)&&(t=Ga(t));for(const r in t){const i=t[r];let o;de(i)?"default"in i?o=Dt(i.from||r,i.default,!0):o=Dt(i.from||r):o=Dt(i),je(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Ol(t,e,n){vt(H(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function md(t,e,n,s){const r=s.includes(".")?ud(n,s):()=>n[s];if(Re(t)){const i=e[t];Y(i)&&Di(r,i)}else if(Y(t))Di(r,t.bind(n));else if(de(t))if(H(t))t.forEach(i=>md(i,e,n,s));else{const i=Y(t.handler)?t.handler.bind(n):e[t.handler];Y(i)&&Di(r,i,t)}}function Xc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>Gi(c,u,o,!0)),Gi(c,e,o)),de(e)&&i.set(e,c),c}function Gi(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Gi(t,i,n,!0),r&&r.forEach(o=>Gi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Cv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Cv={data:xl,props:Cn,emits:Cn,methods:Cn,computed:Cn,beforeCreate:Ge,created:Ge,beforeMount:Ge,mounted:Ge,beforeUpdate:Ge,updated:Ge,beforeDestroy:Ge,beforeUnmount:Ge,destroyed:Ge,unmounted:Ge,activated:Ge,deactivated:Ge,errorCaptured:Ge,serverPrefetch:Ge,components:Cn,directives:Cn,watch:kv,provide:xl,inject:Av};function xl(t,e){return e?t?function(){return Ye(Y(t)?t.call(this,this):t,Y(e)?e.call(this,this):e)}:e:t}function Av(t,e){return Cn(Ga(t),Ga(e))}function Ga(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ge(t,e){return t?[...new Set([].concat(t,e))]:e}function Cn(t,e){return t?Ye(Ye(Object.create(null),t),e):e}function kv(t,e){if(!t)return e;if(!e)return t;const n=Ye(Object.create(null),t);for(const s in e)n[s]=Ge(t[s],e[s]);return n}function Rv(t,e,n,s=!1){const r={},i={};ji(i,Oo,1),t.propsDefaults=Object.create(null),yd(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:jy(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Dv(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ie(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let d=l[h];if(ko(t.emitsOptions,d))continue;const g=e[d];if(c)if(se(i,d))g!==i[d]&&(i[d]=g,u=!0);else{const y=Mt(d);r[y]=Qa(c,a,y,g,t,!1)}else g!==i[d]&&(i[d]=g,u=!0)}}}else{yd(t,e,r,i)&&(u=!0);let l;for(const h in a)(!e||!se(e,h)&&((l=Yn(h))===h||!se(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(r[h]=Qa(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!se(e,h))&&(delete i[h],u=!0)}u&&jt(t,"set","$attrs")}function yd(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ai(c))continue;const u=e[c];let l;r&&se(r,l=Mt(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:ko(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=ie(n),u=a||pe;for(let l=0;l<i.length;l++){const h=i[l];n[h]=Qa(r,c,h,u[h],t,!se(u,h))}}return o}function Qa(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=se(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&Y(c)){const{propsDefaults:u}=r;n in u?s=u[n]:(Ts(r),s=u[n]=c.call(null,e),Fn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Yn(n))&&(s=!0))}return s}function vd(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!Y(t)){const l=h=>{c=!0;const[d,g]=vd(h,e,!0);Ye(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return de(t)&&s.set(t,hs),hs;if(H(i))for(let l=0;l<i.length;l++){const h=Mt(i[l]);Pl(h)&&(o[h]=pe)}else if(i)for(const l in i){const h=Mt(l);if(Pl(h)){const d=i[l],g=o[h]=H(d)||Y(d)?{type:d}:Object.assign({},d);if(g){const y=Ul(Boolean,g.type),I=Ul(String,g.type);g[0]=y>-1,g[1]=I<0||y<I,(y>-1||se(g,"default"))&&a.push(h)}}}const u=[o,a];return de(t)&&s.set(t,u),u}function Pl(t){return t[0]!=="$"}function Ml(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Ll(t,e){return Ml(t)===Ml(e)}function Ul(t,e){return H(e)?e.findIndex(n=>Ll(n,t)):Y(e)&&Ll(e,t)?0:-1}const wd=t=>t[0]==="_"||t==="$stable",Jc=t=>H(t)?t.map(At):[At(t)],Nv=(t,e,n)=>{if(e._n)return e;const s=cs((...r)=>Jc(e(...r)),n);return s._c=!1,s},_d=(t,e,n)=>{const s=t._ctx;for(const r in t){if(wd(r))continue;const i=t[r];if(Y(i))e[r]=Nv(r,i,s);else if(i!=null){const o=Jc(i);e[r]=()=>o}}},Ed=(t,e)=>{const n=Jc(e);t.slots.default=()=>n},Ov=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ie(e),ji(e,"_",n)):_d(e,t.slots={})}else t.slots={},e&&Ed(t,e);ji(t.slots,Oo,1)},xv=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=pe;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ye(r,e),!n&&a===1&&delete r._):(i=!e.$stable,_d(e,r)),o=e}else e&&(Ed(t,e),o={default:1});if(i)for(const a in r)!wd(a)&&!(a in o)&&delete r[a]};function Id(){return{app:null,config:{isNativeTag:oy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Pv=0;function Mv(t,e){return function(s,r=null){Y(s)||(s=Object.assign({},s)),r!=null&&!de(r)&&(r=null);const i=Id(),o=new Set;let a=!1;const c=i.app={_uid:Pv++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:tw,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&Y(u.install)?(o.add(u),u.install(c,...l)):Y(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,h){if(!a){const d=qe(s,r);return d.appContext=i,l&&e?e(d,u):t(d,u,h),a=!0,c._container=u,u.__vue_app__=c,xo(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function Ya(t,e,n,s,r=!1){if(H(t)){t.forEach((d,g)=>Ya(d,e&&(H(e)?e[g]:e),n,s,r));return}if(Ni(s)&&!r)return;const i=s.shapeFlag&4?xo(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===pe?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(Re(u)?(l[u]=null,se(h,u)&&(h[u]=null)):je(u)&&(u.value=null)),Y(c))cn(c,a,12,[o,l]);else{const d=Re(c),g=je(c);if(d||g){const y=()=>{if(t.f){const I=d?se(h,c)?h[c]:l[c]:c.value;r?H(I)&&Vc(I,i):H(I)?I.includes(i)||I.push(i):d?(l[c]=[i],se(h,c)&&(h[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else d?(l[c]=o,se(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(l[t.k]=o))};o?(y.id=-1,Je(y,n)):y()}}}const Je=av;function Lv(t){return Uv(t)}function Uv(t,e){const n=fy();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:d,setScopeId:g=yt,insertStaticContent:y}=t,I=(f,p,m,v=null,E=null,C=null,N=!1,S=null,A=!!p.dynamicChildren)=>{if(f===p)return;f&&!Ws(f,p)&&(v=D(f),Xe(f,E,C,!0),f=null),p.patchFlag===-2&&(A=!1,p.dynamicChildren=null);const{type:T,ref:B,shapeFlag:M}=p;switch(T){case No:k(f,p,m,v);break;case jn:R(f,p,m,v);break;case va:f==null&&P(p,m,v,N);break;case pt:Tt(f,p,m,v,E,C,N,S,A);break;default:M&1?me(f,p,m,v,E,C,N,S,A):M&6?ts(f,p,m,v,E,C,N,S,A):(M&64||M&128)&&T.process(f,p,m,v,E,C,N,S,A,ne)}B!=null&&E&&Ya(B,f&&f.ref,C,p||f,!p)},k=(f,p,m,v)=>{if(f==null)s(p.el=a(p.children),m,v);else{const E=p.el=f.el;p.children!==f.children&&u(E,p.children)}},R=(f,p,m,v)=>{f==null?s(p.el=c(p.children||""),m,v):p.el=f.el},P=(f,p,m,v)=>{[f.el,f.anchor]=y(f.children,p,m,v,f.el,f.anchor)},U=({el:f,anchor:p},m,v)=>{let E;for(;f&&f!==p;)E=d(f),s(f,m,v),f=E;s(p,m,v)},X=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=d(f),r(f),f=m;r(p)},me=(f,p,m,v,E,C,N,S,A)=>{N=N||p.type==="svg",f==null?Ce(p,m,v,E,C,N,S,A):It(f,p,E,C,N,S,A)},Ce=(f,p,m,v,E,C,N,S)=>{let A,T;const{type:B,props:M,shapeFlag:j,transition:W,dirs:Z}=f;if(A=f.el=o(f.type,C,M&&M.is,M),j&8?l(A,f.children):j&16&&ut(f.children,A,null,v,E,C&&B!=="foreignObject",N,S),Z&&bn(f,null,v,"created"),Ue(A,f,f.scopeId,N,v),M){for(const ue in M)ue!=="value"&&!Ai(ue)&&i(A,ue,null,M[ue],C,f.children,v,E,O);"value"in M&&i(A,"value",null,M.value),(T=M.onVnodeBeforeMount)&&St(T,v,f)}Z&&bn(f,null,v,"beforeMount");const he=(!E||E&&!E.pendingBranch)&&W&&!W.persisted;he&&W.beforeEnter(A),s(A,p,m),((T=M&&M.onVnodeMounted)||he||Z)&&Je(()=>{T&&St(T,v,f),he&&W.enter(A),Z&&bn(f,null,v,"mounted")},E)},Ue=(f,p,m,v,E)=>{if(m&&g(f,m),v)for(let C=0;C<v.length;C++)g(f,v[C]);if(E){let C=E.subTree;if(p===C){const N=E.vnode;Ue(f,N,N.scopeId,N.slotScopeIds,E.parent)}}},ut=(f,p,m,v,E,C,N,S,A=0)=>{for(let T=A;T<f.length;T++){const B=f[T]=S?en(f[T]):At(f[T]);I(null,B,p,m,v,E,C,N,S)}},It=(f,p,m,v,E,C,N)=>{const S=p.el=f.el;let{patchFlag:A,dynamicChildren:T,dirs:B}=p;A|=f.patchFlag&16;const M=f.props||pe,j=p.props||pe;let W;m&&Sn(m,!1),(W=j.onVnodeBeforeUpdate)&&St(W,m,p,f),B&&bn(p,f,m,"beforeUpdate"),m&&Sn(m,!0);const Z=E&&p.type!=="foreignObject";if(T?it(f.dynamicChildren,T,S,m,v,Z,C):N||ce(f,p,S,null,m,v,Z,C,!1),A>0){if(A&16)Yt(S,p,M,j,m,v,E);else if(A&2&&M.class!==j.class&&i(S,"class",null,j.class,E),A&4&&i(S,"style",M.style,j.style,E),A&8){const he=p.dynamicProps;for(let ue=0;ue<he.length;ue++){const Ee=he[ue],ft=M[Ee],ss=j[Ee];(ss!==ft||Ee==="value")&&i(S,Ee,ft,ss,E,f.children,m,v,O)}}A&1&&f.children!==p.children&&l(S,p.children)}else!N&&T==null&&Yt(S,p,M,j,m,v,E);((W=j.onVnodeUpdated)||B)&&Je(()=>{W&&St(W,m,p,f),B&&bn(p,f,m,"updated")},v)},it=(f,p,m,v,E,C,N)=>{for(let S=0;S<p.length;S++){const A=f[S],T=p[S],B=A.el&&(A.type===pt||!Ws(A,T)||A.shapeFlag&70)?h(A.el):m;I(A,T,B,null,v,E,C,N,!0)}},Yt=(f,p,m,v,E,C,N)=>{if(m!==v){if(m!==pe)for(const S in m)!Ai(S)&&!(S in v)&&i(f,S,m[S],null,N,p.children,E,C,O);for(const S in v){if(Ai(S))continue;const A=v[S],T=m[S];A!==T&&S!=="value"&&i(f,S,T,A,N,p.children,E,C,O)}"value"in v&&i(f,"value",m.value,v.value)}},Tt=(f,p,m,v,E,C,N,S,A)=>{const T=p.el=f?f.el:a(""),B=p.anchor=f?f.anchor:a("");let{patchFlag:M,dynamicChildren:j,slotScopeIds:W}=p;W&&(S=S?S.concat(W):W),f==null?(s(T,m,v),s(B,m,v),ut(p.children,m,B,E,C,N,S,A)):M>0&&M&64&&j&&f.dynamicChildren?(it(f.dynamicChildren,j,m,E,C,N,S),(p.key!=null||E&&p===E.subTree)&&Td(f,p,!0)):ce(f,p,m,B,E,C,N,S,A)},ts=(f,p,m,v,E,C,N,S,A)=>{p.slotScopeIds=S,f==null?p.shapeFlag&512?E.ctx.activate(p,m,v,N,A):In(p,m,v,E,C,N,A):Ks(f,p,A)},In=(f,p,m,v,E,C,N)=>{const S=f.component=zv(f,v,E);if(hd(f)&&(S.ctx.renderer=ne),Wv(S),S.asyncDep){if(E&&E.registerDep(S,_e),!f.el){const A=S.subTree=qe(jn);R(null,A,p,m)}return}_e(S,f,p,m,E,C,N)},Ks=(f,p,m)=>{const v=p.component=f.component;if(rv(f,p,m))if(v.asyncDep&&!v.asyncResolved){le(v,p,m);return}else v.next=p,Yy(v.update),v.update();else p.el=f.el,v.vnode=p},_e=(f,p,m,v,E,C,N)=>{const S=()=>{if(f.isMounted){let{next:B,bu:M,u:j,parent:W,vnode:Z}=f,he=B,ue;Sn(f,!1),B?(B.el=Z.el,le(f,B,N)):B=Z,M&&ki(M),(ue=B.props&&B.props.onVnodeBeforeUpdate)&&St(ue,W,B,Z),Sn(f,!0);const Ee=ma(f),ft=f.subTree;f.subTree=Ee,I(ft,Ee,h(ft.el),D(ft),f,E,C),B.el=Ee.el,he===null&&iv(f,Ee.el),j&&Je(j,E),(ue=B.props&&B.props.onVnodeUpdated)&&Je(()=>St(ue,W,B,Z),E)}else{let B;const{el:M,props:j}=p,{bm:W,m:Z,parent:he}=f,ue=Ni(p);if(Sn(f,!1),W&&ki(W),!ue&&(B=j&&j.onVnodeBeforeMount)&&St(B,he,p),Sn(f,!0),M&&J){const Ee=()=>{f.subTree=ma(f),J(M,f.subTree,f,E,null)};ue?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Ee()):Ee()}else{const Ee=f.subTree=ma(f);I(null,Ee,m,v,f,E,C),p.el=Ee.el}if(Z&&Je(Z,E),!ue&&(B=j&&j.onVnodeMounted)){const Ee=p;Je(()=>St(B,he,Ee),E)}(p.shapeFlag&256||he&&Ni(he.vnode)&&he.vnode.shapeFlag&256)&&f.a&&Je(f.a,E),f.isMounted=!0,p=m=v=null}},A=f.effect=new jc(S,()=>Yc(T),f.scope),T=f.update=()=>A.run();T.id=f.uid,Sn(f,!0),T()},le=(f,p,m)=>{p.component=f;const v=f.vnode.props;f.vnode=p,f.next=null,Dv(f,p.props,v,m),xv(f,p.children,m),Ms(),Rl(),Ls()},ce=(f,p,m,v,E,C,N,S,A=!1)=>{const T=f&&f.children,B=f?f.shapeFlag:0,M=p.children,{patchFlag:j,shapeFlag:W}=p;if(j>0){if(j&128){Tn(T,M,m,v,E,C,N,S,A);return}else if(j&256){lt(T,M,m,v,E,C,N,S,A);return}}W&8?(B&16&&O(T,E,C),M!==T&&l(m,M)):B&16?W&16?Tn(T,M,m,v,E,C,N,S,A):O(T,E,C,!0):(B&8&&l(m,""),W&16&&ut(M,m,v,E,C,N,S,A))},lt=(f,p,m,v,E,C,N,S,A)=>{f=f||hs,p=p||hs;const T=f.length,B=p.length,M=Math.min(T,B);let j;for(j=0;j<M;j++){const W=p[j]=A?en(p[j]):At(p[j]);I(f[j],W,m,null,E,C,N,S,A)}T>B?O(f,E,C,!0,!1,M):ut(p,m,v,E,C,N,S,A,M)},Tn=(f,p,m,v,E,C,N,S,A)=>{let T=0;const B=p.length;let M=f.length-1,j=B-1;for(;T<=M&&T<=j;){const W=f[T],Z=p[T]=A?en(p[T]):At(p[T]);if(Ws(W,Z))I(W,Z,m,null,E,C,N,S,A);else break;T++}for(;T<=M&&T<=j;){const W=f[M],Z=p[j]=A?en(p[j]):At(p[j]);if(Ws(W,Z))I(W,Z,m,null,E,C,N,S,A);else break;M--,j--}if(T>M){if(T<=j){const W=j+1,Z=W<B?p[W].el:v;for(;T<=j;)I(null,p[T]=A?en(p[T]):At(p[T]),m,Z,E,C,N,S,A),T++}}else if(T>j)for(;T<=M;)Xe(f[T],E,C,!0),T++;else{const W=T,Z=T,he=new Map;for(T=Z;T<=j;T++){const nt=p[T]=A?en(p[T]):At(p[T]);nt.key!=null&&he.set(nt.key,T)}let ue,Ee=0;const ft=j-Z+1;let ss=!1,yl=0;const zs=new Array(ft);for(T=0;T<ft;T++)zs[T]=0;for(T=W;T<=M;T++){const nt=f[T];if(Ee>=ft){Xe(nt,E,C,!0);continue}let bt;if(nt.key!=null)bt=he.get(nt.key);else for(ue=Z;ue<=j;ue++)if(zs[ue-Z]===0&&Ws(nt,p[ue])){bt=ue;break}bt===void 0?Xe(nt,E,C,!0):(zs[bt-Z]=T+1,bt>=yl?yl=bt:ss=!0,I(nt,p[bt],m,null,E,C,N,S,A),Ee++)}const vl=ss?Fv(zs):hs;for(ue=vl.length-1,T=ft-1;T>=0;T--){const nt=Z+T,bt=p[nt],wl=nt+1<B?p[nt+1].el:v;zs[T]===0?I(null,bt,m,wl,E,C,N,S,A):ss&&(ue<0||T!==vl[ue]?ht(bt,m,wl,2):ue--)}}},ht=(f,p,m,v,E=null)=>{const{el:C,type:N,transition:S,children:A,shapeFlag:T}=f;if(T&6){ht(f.component.subTree,p,m,v);return}if(T&128){f.suspense.move(p,m,v);return}if(T&64){N.move(f,p,m,ne);return}if(N===pt){s(C,p,m);for(let M=0;M<A.length;M++)ht(A[M],p,m,v);s(f.anchor,p,m);return}if(N===va){U(f,p,m);return}if(v!==2&&T&1&&S)if(v===0)S.beforeEnter(C),s(C,p,m),Je(()=>S.enter(C),E);else{const{leave:M,delayLeave:j,afterLeave:W}=S,Z=()=>s(C,p,m),he=()=>{M(C,()=>{Z(),W&&W()})};j?j(C,Z,he):he()}else s(C,p,m)},Xe=(f,p,m,v=!1,E=!1)=>{const{type:C,props:N,ref:S,children:A,dynamicChildren:T,shapeFlag:B,patchFlag:M,dirs:j}=f;if(S!=null&&Ya(S,null,m,f,!0),B&256){p.ctx.deactivate(f);return}const W=B&1&&j,Z=!Ni(f);let he;if(Z&&(he=N&&N.onVnodeBeforeUnmount)&&St(he,p,f),B&6)w(f.component,m,v);else{if(B&128){f.suspense.unmount(m,v);return}W&&bn(f,null,p,"beforeUnmount"),B&64?f.type.remove(f,p,m,E,ne,v):T&&(C!==pt||M>0&&M&64)?O(T,p,m,!1,!0):(C===pt&&M&384||!E&&B&16)&&O(A,p,m),v&&ns(f)}(Z&&(he=N&&N.onVnodeUnmounted)||W)&&Je(()=>{he&&St(he,p,f),W&&bn(f,null,p,"unmounted")},m)},ns=f=>{const{type:p,el:m,anchor:v,transition:E}=f;if(p===pt){fi(m,v);return}if(p===va){X(f);return}const C=()=>{r(m),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(f.shapeFlag&1&&E&&!E.persisted){const{leave:N,delayLeave:S}=E,A=()=>N(m,C);S?S(f.el,C,A):A()}else C()},fi=(f,p)=>{let m;for(;f!==p;)m=d(f),r(f),f=m;r(p)},w=(f,p,m)=>{const{bum:v,scope:E,update:C,subTree:N,um:S}=f;v&&ki(v),E.stop(),C&&(C.active=!1,Xe(N,f,p,m)),S&&Je(S,p),Je(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},O=(f,p,m,v=!1,E=!1,C=0)=>{for(let N=C;N<f.length;N++)Xe(f[N],p,m,v,E)},D=f=>f.shapeFlag&6?D(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),V=(f,p,m)=>{f==null?p._vnode&&Xe(p._vnode,null,null,!0):I(p._vnode||null,f,p,null,null,null,m),Rl(),id(),p._vnode=f},ne={p:I,um:Xe,m:ht,r:ns,mt:In,mc:ut,pc:ce,pbc:it,n:D,o:t};let ve,J;return e&&([ve,J]=e(ne)),{render:V,hydrate:ve,createApp:Mv(V,ve)}}function Sn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Td(t,e,n=!1){const s=t.children,r=e.children;if(H(s)&&H(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=en(r[i]),a.el=o.el),n||Td(o,a)),a.type===No&&(a.el=o.el)}}function Fv(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Vv=t=>t.__isTeleport,pt=Symbol(void 0),No=Symbol(void 0),jn=Symbol(void 0),va=Symbol(void 0),or=[];let mt=null;function Ct(t=!1){or.push(mt=t?null:[])}function $v(){or.pop(),mt=or[or.length-1]||null}let _r=1;function Fl(t){_r+=t}function bd(t){return t.dynamicChildren=_r>0?mt||hs:null,$v(),_r>0&&mt&&mt.push(t),t}function Oi(t,e,n,s,r,i){return bd(Un(t,e,n,s,r,i,!0))}function us(t,e,n,s,r){return bd(qe(t,e,n,s,r,!0))}function Xa(t){return t?t.__v_isVNode===!0:!1}function Ws(t,e){return t.type===e.type&&t.key===e.key}const Oo="__vInternal",Sd=({key:t})=>t??null,xi=({ref:t,ref_key:e,ref_for:n})=>t!=null?Re(t)||je(t)||Y(t)?{i:at,r:t,k:e,f:!!n}:t:null;function Un(t,e=null,n=null,s=0,r=null,i=t===pt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Sd(e),ref:e&&xi(e),scopeId:Ro,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:at};return a?(Zc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Re(n)?8:16),_r>0&&!o&&mt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&mt.push(c),c}const qe=Bv;function Bv(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===_v)&&(t=jn),Xa(t)){const a=Is(t,e,!0);return n&&Zc(a,n),_r>0&&!i&&mt&&(a.shapeFlag&6?mt[mt.indexOf(t)]=a:mt.push(a)),a.patchFlag|=-2,a}if(Jv(t)&&(t=t.__vccOpts),e){e=jv(e);let{class:a,style:c}=e;a&&!Re(a)&&(e.class=Uc(a)),de(c)&&(Yf(c)&&!H(c)&&(c=Ye({},c)),e.style=Lc(c))}const o=Re(t)?1:ov(t)?128:Vv(t)?64:de(t)?4:Y(t)?2:0;return Un(t,e,n,s,r,o,i,!0)}function jv(t){return t?Yf(t)||Oo in t?Ye({},t):t:null}function Is(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?qv(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Sd(a),ref:e&&e.ref?n&&r?H(r)?r.concat(xi(e)):[r,xi(e)]:xi(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==pt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Is(t.ssContent),ssFallback:t.ssFallback&&Is(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function ms(t=" ",e=0){return qe(No,null,t,e)}function wi(t="",e=!1){return e?(Ct(),us(jn,null,t)):qe(jn,null,t)}function At(t){return t==null||typeof t=="boolean"?qe(jn):H(t)?qe(pt,null,t.slice()):typeof t=="object"?en(t):qe(No,null,String(t))}function en(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Is(t)}function Zc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Zc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Oo in e)?e._ctx=at:r===3&&at&&(at.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Y(e)?(e={default:e,_ctx:at},n=32):(e=String(e),s&64?(n=16,e=[ms(e)]):n=8);t.children=e,t.shapeFlag|=n}function qv(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Uc([e.class,s.class]));else if(r==="style")e.style=Lc([e.style,s.style]);else if(Io(r)){const i=e[r],o=s[r];o&&i!==o&&!(H(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function St(t,e,n,s=null){vt(t,e,7,[n,s])}const Hv=Id();let Kv=0;function zv(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Hv,i={uid:Kv++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ff(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vd(s,r),emitsOptions:ad(s,r),emit:null,emitted:null,propsDefaults:pe,inheritAttrs:s.inheritAttrs,ctx:pe,data:pe,props:pe,attrs:pe,slots:pe,refs:pe,setupState:pe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Zy.bind(null,i),t.ce&&t.ce(i),i}let be=null;const Ts=t=>{be=t,t.scope.on()},Fn=()=>{be&&be.scope.off(),be=null};function Cd(t){return t.vnode.shapeFlag&4}let Er=!1;function Wv(t,e=!1){Er=e;const{props:n,children:s}=t.vnode,r=Cd(t);Rv(t,n,r,e),Ov(t,s);const i=r?Gv(t,e):void 0;return Er=!1,i}function Gv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Wc(new Proxy(t.ctx,Tv));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Yv(t):null;Ts(t),Ms();const i=cn(s,t,0,[t.props,r]);if(Ls(),Fn(),Mf(i)){if(i.then(Fn,Fn),e)return i.then(o=>{Vl(t,o,e)}).catch(o=>{Ao(o,t,0)});t.asyncDep=i}else Vl(t,i,e)}else Ad(t,e)}function Vl(t,e,n){Y(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:de(e)&&(t.setupState=ed(e)),Ad(t,n)}let $l;function Ad(t,e,n){const s=t.type;if(!t.render){if(!e&&$l&&!s.render){const r=s.template||Xc(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,u=Ye(Ye({isCustomElement:i,delimiters:a},o),c);s.render=$l(r,u)}}t.render=s.render||yt}Ts(t),Ms(),bv(t),Ls(),Fn()}function Qv(t){return new Proxy(t.attrs,{get(e,n){return tt(t,"get","$attrs"),e[n]}})}function Yv(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Qv(t))},slots:t.slots,emit:t.emit,expose:e}}function xo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ed(Wc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ir)return ir[n](t)},has(e,n){return n in e||n in ir}}))}function Xv(t,e=!0){return Y(t)?t.displayName||t.name:t.name||e&&t.__name}function Jv(t){return Y(t)&&"__vccOpts"in t}const ot=(t,e)=>Wy(t,e,Er);function kd(t,e,n){const s=arguments.length;return s===2?de(e)&&!H(e)?Xa(e)?qe(t,null,[e]):qe(t,e):qe(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Xa(n)&&(n=[n]),qe(t,e,n))}const Zv=Symbol(""),ew=()=>Dt(Zv),tw="3.2.47",nw="http://www.w3.org/2000/svg",Rn=typeof document<"u"?document:null,Bl=Rn&&Rn.createElement("template"),sw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Rn.createElementNS(nw,t):Rn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Rn.createTextNode(t),createComment:t=>Rn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Rn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Bl.innerHTML=s?`<svg>${t}</svg>`:t;const a=Bl.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function rw(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function iw(t,e,n){const s=t.style,r=Re(n);if(n&&!r){if(e&&!Re(e))for(const i in e)n[i]==null&&Ja(s,i,"");for(const i in n)Ja(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const jl=/\s*!important$/;function Ja(t,e,n){if(H(n))n.forEach(s=>Ja(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=ow(t,e);jl.test(n)?t.setProperty(Yn(s),n.replace(jl,""),"important"):t[s]=n}}const ql=["Webkit","Moz","ms"],wa={};function ow(t,e){const n=wa[e];if(n)return n;let s=Mt(e);if(s!=="filter"&&s in t)return wa[e]=s;s=So(s);for(let r=0;r<ql.length;r++){const i=ql[r]+s;if(i in t)return wa[e]=i}return e}const Hl="http://www.w3.org/1999/xlink";function aw(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Hl,e.slice(6,e.length)):t.setAttributeNS(Hl,e,n);else{const i=ny(e);n==null||i&&!xf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function cw(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=xf(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Dn(t,e,n,s){t.addEventListener(e,n,s)}function uw(t,e,n,s){t.removeEventListener(e,n,s)}function lw(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=hw(e);if(s){const u=i[e]=pw(s,r);Dn(t,a,u,c)}else o&&(uw(t,a,o,c),i[e]=void 0)}}const Kl=/(?:Once|Passive|Capture)$/;function hw(t){let e;if(Kl.test(t)){e={};let s;for(;s=t.match(Kl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Yn(t.slice(2)),e]}let _a=0;const fw=Promise.resolve(),dw=()=>_a||(fw.then(()=>_a=0),_a=Date.now());function pw(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;vt(gw(s,n.value),e,5,[s])};return n.value=t,n.attached=dw(),n}function gw(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const zl=/^on[a-z]/,mw=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?rw(t,s,r):e==="style"?iw(t,n,s):Io(e)?Fc(e)||lw(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):yw(t,e,s,r))?cw(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),aw(t,e,s,r))};function yw(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&zl.test(e)&&Y(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||zl.test(e)&&Re(n)?!1:e in t}const Qi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>ki(e,n):e};function vw(t){t.target.composing=!0}function Wl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const AA={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Qi(r);const i=s||r.props&&r.props.type==="number";Dn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=qi(a)),t._assign(a)}),n&&Dn(t,"change",()=>{t.value=t.value.trim()}),e||(Dn(t,"compositionstart",vw),Dn(t,"compositionend",Wl),Dn(t,"change",Wl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Qi(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&qi(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},kA={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=To(e);Dn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?qi(Yi(o)):Yi(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=Qi(s)},mounted(t,{value:e}){Gl(t,e)},beforeUpdate(t,e,n){t._assign=Qi(n)},updated(t,{value:e}){Gl(t,e)}};function Gl(t,e){const n=t.multiple;if(!(n&&!H(e)&&!To(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=Yi(i);if(n)H(e)?i.selected=ry(e,o)>-1:i.selected=e.has(o);else if(Eo(Yi(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Yi(t){return"_value"in t?t._value:t.value}const ww=["ctrl","shift","alt","meta"],_w={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>ww.some(n=>t[`${n}Key`]&&!e.includes(n))},RA=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=_w[e[r]];if(i&&i(n,e))return}return t(n,...s)},Ew={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},DA=(t,e)=>n=>{if(!("key"in n))return;const s=Yn(n.key);if(e.some(r=>r===s||Ew[r]===s))return t(n)},NA={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Gs(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Gs(t,!0),s.enter(t)):s.leave(t,()=>{Gs(t,!1)}):Gs(t,e))},beforeUnmount(t,{value:e}){Gs(t,e)}};function Gs(t,e){t.style.display=e?t._vod:"none"}const Iw=Ye({patchProp:mw},sw);let Ql;function Tw(){return Ql||(Ql=Lv(Iw))}const bw=(...t)=>{const e=Tw().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Sw(s);if(!r)return;const i=e._component;!Y(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Sw(t){return Re(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Cw=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Dd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(d=64)),s.push(n[l],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Rd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Cw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),u!==64){const g=a<<4&240|u>>2;if(s.push(g),h!==64){const y=u<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Aw=function(t){const e=Rd(t);return Dd.encodeByteArray(e,!0)},Xi=function(t){return Aw(t).replace(/\./g,"")},Nd=function(t){try{return Dd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw=()=>kw().__FIREBASE_DEFAULTS__,Dw=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Nw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Nd(t[1]);return e&&JSON.parse(e)},eu=()=>{try{return Rw()||Dw()||Nw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Od=t=>{var e,n;return(n=(e=eu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ow=t=>{const e=Od(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},xw=()=>{var t;return(t=eu())===null||t===void 0?void 0:t.config},xd=t=>{var e;return(e=eu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Xi(JSON.stringify(n)),Xi(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Lw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function Uw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Fw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Vw(){const t=ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $w(){try{return typeof indexedDB=="object"}catch{return!1}}function Bw(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw="FirebaseError";class Qt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=jw,Object.setPrototypeOf(this,Qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$r.prototype.create)}}class $r{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?qw(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Qt(r,a,s)}}function qw(t,e){return t.replace(Hw,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Hw=/\{\$([^}]+)}/g;function Kw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ji(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Yl(i)&&Yl(o)){if(!Ji(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Yl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Zs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function er(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function zw(t,e){const n=new Ww(t,e);return n.subscribe.bind(n)}class Ww{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Gw(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Ea),r.error===void 0&&(r.error=Ea),r.complete===void 0&&(r.complete=Ea);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ea(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(t){return t&&t._delegate?t._delegate:t}class qn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Pw;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xw(e))try{this.getOrInitializeService({instanceIdentifier:An})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=An){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=An){return this.instances.has(e)}getOptions(e=An){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Yw(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=An){return this.component?this.component.multipleInstances?e:An:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yw(t){return t===An?void 0:t}function Xw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Qw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const Zw={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},e_=re.INFO,t_={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},n_=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=t_[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class tu{constructor(e){this.name=e,this._logLevel=e_,this._logHandler=n_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const s_=(t,e)=>e.some(n=>t instanceof n);let Xl,Jl;function r_(){return Xl||(Xl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function i_(){return Jl||(Jl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pd=new WeakMap,Za=new WeakMap,Md=new WeakMap,Ia=new WeakMap,nu=new WeakMap;function o_(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(un(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Pd.set(n,t)}).catch(()=>{}),nu.set(e,t),e}function a_(t){if(Za.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Za.set(t,e)}let ec={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Za.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Md.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return un(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function c_(t){ec=t(ec)}function u_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ta(this),e,...n);return Md.set(s,e.sort?e.sort():[e]),un(s)}:i_().includes(t)?function(...e){return t.apply(Ta(this),e),un(Pd.get(this))}:function(...e){return un(t.apply(Ta(this),e))}}function l_(t){return typeof t=="function"?u_(t):(t instanceof IDBTransaction&&a_(t),s_(t,r_())?new Proxy(t,ec):t)}function un(t){if(t instanceof IDBRequest)return o_(t);if(Ia.has(t))return Ia.get(t);const e=l_(t);return e!==t&&(Ia.set(t,e),nu.set(e,t)),e}const Ta=t=>nu.get(t);function h_(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=un(o);return s&&o.addEventListener("upgradeneeded",c=>{s(un(o.result),c.oldVersion,c.newVersion,un(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const f_=["get","getKey","getAll","getAllKeys","count"],d_=["put","add","delete","clear"],ba=new Map;function Zl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ba.get(e))return ba.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=d_.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||f_.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return ba.set(e,i),i}c_(t=>({...t,get:(e,n,s)=>Zl(e,n)||t.get(e,n,s),has:(e,n)=>!!Zl(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(g_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function g_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const tc="@firebase/app",eh="0.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=new tu("@firebase/app"),m_="@firebase/app-compat",y_="@firebase/analytics-compat",v_="@firebase/analytics",w_="@firebase/app-check-compat",__="@firebase/app-check",E_="@firebase/auth",I_="@firebase/auth-compat",T_="@firebase/database",b_="@firebase/database-compat",S_="@firebase/functions",C_="@firebase/functions-compat",A_="@firebase/installations",k_="@firebase/installations-compat",R_="@firebase/messaging",D_="@firebase/messaging-compat",N_="@firebase/performance",O_="@firebase/performance-compat",x_="@firebase/remote-config",P_="@firebase/remote-config-compat",M_="@firebase/storage",L_="@firebase/storage-compat",U_="@firebase/firestore",F_="@firebase/firestore-compat",V_="firebase",$_="9.17.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc="[DEFAULT]",B_={[tc]:"fire-core",[m_]:"fire-core-compat",[v_]:"fire-analytics",[y_]:"fire-analytics-compat",[__]:"fire-app-check",[w_]:"fire-app-check-compat",[E_]:"fire-auth",[I_]:"fire-auth-compat",[T_]:"fire-rtdb",[b_]:"fire-rtdb-compat",[S_]:"fire-fn",[C_]:"fire-fn-compat",[A_]:"fire-iid",[k_]:"fire-iid-compat",[R_]:"fire-fcm",[D_]:"fire-fcm-compat",[N_]:"fire-perf",[O_]:"fire-perf-compat",[x_]:"fire-rc",[P_]:"fire-rc-compat",[M_]:"fire-gcs",[L_]:"fire-gcs-compat",[U_]:"fire-fst",[F_]:"fire-fst-compat","fire-js":"fire-js",[V_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=new Map,sc=new Map;function j_(t,e){try{t.container.addComponent(e)}catch(n){Hn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function bs(t){const e=t.name;if(sc.has(e))return Hn.debug(`There were multiple attempts to register component ${e}.`),!1;sc.set(e,t);for(const n of Zi.values())j_(n,t);return!0}function su(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ln=new $r("app","Firebase",q_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ln.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=$_;function Ld(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:nc,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw ln.create("bad-app-name",{appName:String(r)});if(n||(n=xw()),!n)throw ln.create("no-options");const i=Zi.get(r);if(i){if(Ji(n,i.options)&&Ji(s,i.config))return i;throw ln.create("duplicate-app",{appName:r})}const o=new Jw(r);for(const c of sc.values())o.addComponent(c);const a=new H_(n,s,o);return Zi.set(r,a),a}function Ud(t=nc){const e=Zi.get(t);if(!e&&t===nc)return Ld();if(!e)throw ln.create("no-app",{appName:t});return e}function hn(t,e,n){var s;let r=(s=B_[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Hn.warn(a.join(" "));return}bs(new qn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_="firebase-heartbeat-database",z_=1,Ir="firebase-heartbeat-store";let Sa=null;function Fd(){return Sa||(Sa=h_(K_,z_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ir)}}}).catch(t=>{throw ln.create("idb-open",{originalErrorMessage:t.message})})),Sa}async function W_(t){try{return(await Fd()).transaction(Ir).objectStore(Ir).get(Vd(t))}catch(e){if(e instanceof Qt)Hn.warn(e.message);else{const n=ln.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Hn.warn(n.message)}}}async function th(t,e){try{const s=(await Fd()).transaction(Ir,"readwrite");return await s.objectStore(Ir).put(e,Vd(t)),s.done}catch(n){if(n instanceof Qt)Hn.warn(n.message);else{const s=ln.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Hn.warn(s.message)}}}function Vd(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_=1024,Q_=30*24*60*60*1e3;class Y_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new J_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=nh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Q_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=nh(),{heartbeatsToSend:n,unsentEntries:s}=X_(this._heartbeatsCache.heartbeats),r=Xi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function nh(){return new Date().toISOString().substring(0,10)}function X_(t,e=G_){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),sh(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),sh(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class J_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $w()?Bw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await W_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return th(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return th(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function sh(t){return Xi(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z_(t){bs(new qn("platform-logger",e=>new p_(e),"PRIVATE")),bs(new qn("heartbeat",e=>new Y_(e),"PRIVATE")),hn(tc,eh,t),hn(tc,eh,"esm2017"),hn("fire-js","")}Z_("");var eE="firebase",tE="9.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hn(eE,tE,"app");function ru(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function $d(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nE=$d,Bd=new $r("auth","Firebase",$d());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh=new tu("@firebase/auth");function Pi(t,...e){rh.logLevel<=re.ERROR&&rh.error(`Auth (${jr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t,...e){throw iu(t,...e)}function Nt(t,...e){return iu(t,...e)}function jd(t,e,n){const s=Object.assign(Object.assign({},nE()),{[e]:n});return new $r("auth","Firebase",s).create(e,{appName:t.name})}function sE(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&ct(t,"argument-error"),jd(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function iu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Bd.create(t,...e)}function q(t,e,...n){if(!t)throw iu(e,...n)}function Vt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Pi(e),new Error(e)}function qt(t,e){t||Vt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih=new Map;function $t(t){qt(t instanceof Function,"Expected a class definition");let e=ih.get(t);return e?(qt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ih.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(t,e){const n=su(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Ji(i,e??{}))return r;ct(r,"already-initialized")}return n.initialize({options:e})}function iE(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map($t);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function oE(){return oh()==="http:"||oh()==="https:"}function oh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(oE()||Uw()||"connection"in navigator)?navigator.onLine:!0}function cE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,n){this.shortDelay=e,this.longDelay=n,qt(n>e,"Short delay should be less than long delay!"),this.isMobile=Lw()||Fw()}get(){return aE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(t,e){qt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Vt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Vt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Vt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE=new qr(3e4,6e4);function Hr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Kr(t,e,n,s,r={}){return Hd(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Br(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),qd.fetch()(Kd(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Hd(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},uE),e);try{const r=new hE(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw _i(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw _i(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw _i(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw _i(t,"user-disabled",o);const l=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw jd(t,l,u);ct(t,l)}}catch(r){if(r instanceof Qt)throw r;ct(t,"network-request-failed")}}async function zr(t,e,n,s,r={}){const i=await Kr(t,e,n,s,r);return"mfaPendingCredential"in i&&ct(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Kd(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?ou(t.config,r):`${t.config.apiScheme}://${r}`}class hE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Nt(this.auth,"network-request-failed")),lE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _i(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Nt(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fE(t,e){return Kr(t,"POST","/v1/accounts:delete",e)}async function dE(t,e){return Kr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pE(t,e=!1){const n=De(t),s=await n.getIdToken(e),r=au(s);q(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:ar(Ca(r.auth_time)),issuedAtTime:ar(Ca(r.iat)),expirationTime:ar(Ca(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ca(t){return Number(t)*1e3}function au(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Pi("JWT malformed, contained fewer than 3 sections"),null;try{const r=Nd(n);return r?JSON.parse(r):(Pi("Failed to decode base64 JWT payload"),null)}catch(r){return Pi("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function gE(t){const e=au(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Qt&&mE(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function mE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ar(this.lastLoginAt),this.creationTime=ar(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eo(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Tr(t,dE(n,{idToken:s}));q(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?_E(i.providerUserInfo):[],a=wE(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new zd(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function vE(t){const e=De(t);await eo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function wE(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function _E(t){return t.map(e=>{var{providerId:n}=e,s=ru(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EE(t,e){const n=await Hd(t,{},async()=>{const s=Br({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Kd(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",qd.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await EE(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new br;return s&&(q(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(q(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new br,this.toJSON())}_performRefresh(){return Vt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Vn{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=ru(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new zd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Tr(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return pE(this,e)}reload(){return vE(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Vn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await eo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Tr(this,fE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,u,l;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,R=(u=n.createdAt)!==null&&u!==void 0?u:void 0,P=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:U,emailVerified:X,isAnonymous:me,providerData:Ce,stsTokenManager:Ue}=n;q(U&&Ue,e,"internal-error");const ut=br.fromJSON(this.name,Ue);q(typeof U=="string",e,"internal-error"),Jt(h,e.name),Jt(d,e.name),q(typeof X=="boolean",e,"internal-error"),q(typeof me=="boolean",e,"internal-error"),Jt(g,e.name),Jt(y,e.name),Jt(I,e.name),Jt(k,e.name),Jt(R,e.name),Jt(P,e.name);const It=new Vn({uid:U,auth:e,email:d,emailVerified:X,displayName:h,isAnonymous:me,photoURL:y,phoneNumber:g,tenantId:I,stsTokenManager:ut,createdAt:R,lastLoginAt:P});return Ce&&Array.isArray(Ce)&&(It.providerData=Ce.map(it=>Object.assign({},it))),k&&(It._redirectEventId=k),It}static async _fromIdTokenResponse(e,n,s=!1){const r=new br;r.updateFromServerResponse(n);const i=new Vn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await eo(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Wd.type="NONE";const ah=Wd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(t,e,n){return`firebase:${t}:${e}:${n}`}class ys{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Mi(this.userKey,r.apiKey,i),this.fullPersistenceKey=Mi("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ys($t(ah),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||$t(ah);const o=Mi(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=Vn._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ys(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ys(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Yd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Gd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jd(e))return"Blackberry";if(Zd(e))return"Webos";if(cu(e))return"Safari";if((e.includes("chrome/")||Qd(e))&&!e.includes("edge/"))return"Chrome";if(Xd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Gd(t=ze()){return/firefox\//i.test(t)}function cu(t=ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qd(t=ze()){return/crios\//i.test(t)}function Yd(t=ze()){return/iemobile/i.test(t)}function Xd(t=ze()){return/android/i.test(t)}function Jd(t=ze()){return/blackberry/i.test(t)}function Zd(t=ze()){return/webos/i.test(t)}function Po(t=ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function IE(t=ze()){var e;return Po(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function TE(){return Vw()&&document.documentMode===10}function ep(t=ze()){return Po(t)||Xd(t)||Zd(t)||Jd(t)||/windows phone/i.test(t)||Yd(t)}function bE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(t,e=[]){let n;switch(t){case"Browser":n=ch(ze());break;case"Worker":n=`${ch(ze())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${jr}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uh(this),this.idTokenSubscription=new uh(this),this.beforeStateQueue=new SE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bd,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=$t(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await ys.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await eo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=cE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?De(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence($t(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $r("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&$t(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await ys.create(this,[$t(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return q(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Us(t){return De(t)}class uh{constructor(e){this.auth=e,this.observer=null,this.addObserver=zw(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function AE(t,e,n){const s=Us(t);q(s._canInitEmulator,s,"emulator-config-failed"),q(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=np(e),{host:o,port:a}=kE(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||RE()}function np(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function kE(t){const e=np(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:lh(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:lh(o)}}}function lh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function RE(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Vt("not implemented")}_getIdTokenResponse(e){return Vt("not implemented")}_linkToIdToken(e,n){return Vt("not implemented")}_getReauthenticationResolver(e){return Vt("not implemented")}}async function DE(t,e){return Kr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NE(t,e){return zr(t,"POST","/v1/accounts:signInWithPassword",Hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OE(t,e){return zr(t,"POST","/v1/accounts:signInWithEmailLink",Hr(t,e))}async function xE(t,e){return zr(t,"POST","/v1/accounts:signInWithEmailLink",Hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends uu{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Sr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Sr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return NE(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return OE(e,{email:this._email,oobCode:this._password});default:ct(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return DE(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return xE(e,{idToken:n,email:this._email,oobCode:this._password});default:ct(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vs(t,e){return zr(t,"POST","/v1/accounts:signInWithIdp",Hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE="http://localhost";class Kn extends uu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Kn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=ru(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Kn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return vs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,vs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vs(e,n)}buildRequest(){const e={requestUri:PE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Br(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function LE(t){const e=Zs(er(t)).link,n=e?Zs(er(e)).deep_link_id:null,s=Zs(er(t)).deep_link_id;return(s?Zs(er(s)).link:null)||s||n||e||t}class lu{constructor(e){var n,s,r,i,o,a;const c=Zs(er(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(s=c.oobCode)!==null&&s!==void 0?s:null,h=ME((r=c.mode)!==null&&r!==void 0?r:null);q(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=LE(e);try{return new lu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(){this.providerId=Fs.PROVIDER_ID}static credential(e,n){return Sr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=lu.parseLink(n);return q(s,"argument-error"),Sr._fromEmailAndCode(e,s.code,s.tenantId)}}Fs.PROVIDER_ID="password";Fs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr extends hu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends Wr{constructor(){super("facebook.com")}static credential(e){return Kn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nn.credential(e.oauthAccessToken)}catch{return null}}}nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";nn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends Wr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Kn._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return sn.credential(n,s)}catch{return null}}}sn.GOOGLE_SIGN_IN_METHOD="google.com";sn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends Wr{constructor(){super("github.com")}static credential(e){return Kn._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rn.credential(e.oauthAccessToken)}catch{return null}}}rn.GITHUB_SIGN_IN_METHOD="github.com";rn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends Wr{constructor(){super("twitter.com")}static credential(e,n){return Kn._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return on.credential(n,s)}catch{return null}}}on.TWITTER_SIGN_IN_METHOD="twitter.com";on.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UE(t,e){return zr(t,"POST","/v1/accounts:signUp",Hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Vn._fromIdTokenResponse(e,s,r),o=hh(s);return new zn({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=hh(s);return new zn({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function hh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to extends Qt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,to.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new to(e,n,s,r)}}function sp(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?to._fromErrorAndOperation(t,i,e,s):i})}async function FE(t,e,n=!1){const s=await Tr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return zn._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VE(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await Tr(t,sp(s,r,e,t),n);q(i.idToken,s,"internal-error");const o=au(i.idToken);q(o,s,"internal-error");const{sub:a}=o;return q(t.uid===a,s,"user-mismatch"),zn._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ct(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rp(t,e,n=!1){const s="signIn",r=await sp(t,s,e),i=await zn._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function $E(t,e){return rp(Us(t),e)}async function OA(t,e,n){const s=Us(t),r=await UE(s,{returnSecureToken:!0,email:e,password:n}),i=await zn._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function xA(t,e,n){return $E(De(t),Fs.credential(e,n))}function BE(t,e,n,s){return De(t).onIdTokenChanged(e,n,s)}function jE(t,e,n){return De(t).beforeAuthStateChanged(e,n)}function qE(t,e,n,s){return De(t).onAuthStateChanged(e,n,s)}function HE(t){return De(t).signOut()}const no="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(no,"1"),this.storage.removeItem(no),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KE(){const t=ze();return cu(t)||Po(t)}const zE=1e3,WE=10;class op extends ip{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=KE()&&bE(),this.fallbackToPolling=ep(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);TE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,WE):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},zE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}op.type="LOCAL";const GE=op;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap extends ip{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ap.type="SESSION";const cp=ap;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Mo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await QE(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Mo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=fu("",20);r.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(){return window}function XE(t){Ot().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(){return typeof Ot().WorkerGlobalScope<"u"&&typeof Ot().importScripts=="function"}async function JE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ZE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function e0(){return up()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp="firebaseLocalStorageDb",t0=1,so="firebaseLocalStorage",hp="fbase_key";class Gr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Lo(t,e){return t.transaction([so],e?"readwrite":"readonly").objectStore(so)}function n0(){const t=indexedDB.deleteDatabase(lp);return new Gr(t).toPromise()}function ic(){const t=indexedDB.open(lp,t0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(so,{keyPath:hp})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(so)?e(s):(s.close(),await n0(),e(await ic()))})})}async function fh(t,e,n){const s=Lo(t,!0).put({[hp]:e,value:n});return new Gr(s).toPromise()}async function s0(t,e){const n=Lo(t,!1).get(e),s=await new Gr(n).toPromise();return s===void 0?null:s.value}function dh(t,e){const n=Lo(t,!0).delete(e);return new Gr(n).toPromise()}const r0=800,i0=3;class fp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ic(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>i0)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return up()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mo._getInstance(e0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await JE(),!this.activeServiceWorker)return;this.sender=new YE(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ZE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ic();return await fh(e,no,"1"),await dh(e,no),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>fh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>s0(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>dh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Lo(r,!1).getAll();return new Gr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),r0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fp.type="LOCAL";const o0=fp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function c0(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Nt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",a0().appendChild(s)})}function u0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new qr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(t,e){return e?$t(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du extends uu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return vs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return vs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function l0(t){return rp(t.auth,new du(t),t.bypassAuthState)}function h0(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),VE(n,new du(t),t.bypassAuthState)}async function f0(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),FE(n,new du(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return l0;case"linkViaPopup":case"linkViaRedirect":return f0;case"reauthViaPopup":case"reauthViaRedirect":return h0;default:ct(this.auth,"internal-error")}}resolve(e){qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0=new qr(2e3,1e4);async function PA(t,e,n){const s=Us(t);sE(t,e,hu);const r=dp(s,n);return new On(s,"signInViaPopup",e,r).executeNotNull()}class On extends pp{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,On.currentPopupAction&&On.currentPopupAction.cancel(),On.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){qt(this.filter.length===1,"Popup operations only handle one event");const e=fu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,On.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,d0.get())};e()}}On.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0="pendingRedirect",Li=new Map;class g0 extends pp{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Li.get(this.auth._key());if(!e){try{const s=await m0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Li.set(this.auth._key(),e)}return this.bypassAuthState||Li.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function m0(t,e){const n=w0(e),s=v0(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function y0(t,e){Li.set(t._key(),e)}function v0(t){return $t(t._redirectPersistence)}function w0(t){return Mi(p0,t.config.apiKey,t.name)}async function _0(t,e,n=!1){const s=Us(t),r=dp(s,e),o=await new g0(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0=10*60*1e3;class I0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!T0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!gp(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Nt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=E0&&this.cachedEventUids.clear(),this.cachedEventUids.has(ph(e))}saveEventToCache(e){this.cachedEventUids.add(ph(e)),this.lastProcessedEventTime=Date.now()}}function ph(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function gp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function T0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gp(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b0(t,e={}){return Kr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,C0=/^https?/;async function A0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await b0(t);for(const n of e)try{if(k0(n))return}catch{}ct(t,"unauthorized-domain")}function k0(t){const e=rc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!C0.test(n))return!1;if(S0.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0=new qr(3e4,6e4);function gh(){const t=Ot().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function D0(t){return new Promise((e,n)=>{var s,r,i;function o(){gh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gh(),n(Nt(t,"network-request-failed"))},timeout:R0.get()})}if(!((r=(s=Ot().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Ot().gapi)===null||i===void 0)&&i.load)o();else{const a=u0("iframefcb");return Ot()[a]=()=>{gapi.load?o():n(Nt(t,"network-request-failed"))},c0(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Ui=null,e})}let Ui=null;function N0(t){return Ui=Ui||D0(t),Ui}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O0=new qr(5e3,15e3),x0="__/auth/iframe",P0="emulator/auth/iframe",M0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},L0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function U0(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ou(e,P0):`https://${t.config.authDomain}/${x0}`,s={apiKey:e.apiKey,appName:t.name,v:jr},r=L0.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Br(s).slice(1)}`}async function F0(t){const e=await N0(t),n=Ot().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:U0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:M0,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Nt(t,"network-request-failed"),a=Ot().setTimeout(()=>{i(o)},O0.get());function c(){Ot().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$0=500,B0=600,j0="_blank",q0="http://localhost";class mh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function H0(t,e,n,s=$0,r=B0){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},V0),{width:s.toString(),height:r.toString(),top:i,left:o}),u=ze().toLowerCase();n&&(a=Qd(u)?j0:n),Gd(u)&&(e=e||q0,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[g,y])=>`${d}${g}=${y},`,"");if(IE(u)&&a!=="_self")return K0(e||"",a),new mh(null);const h=window.open(e||"",a,l);q(h,t,"popup-blocked");try{h.focus()}catch{}return new mh(h)}function K0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0="__/auth/handler",W0="emulator/auth/handler";function yh(t,e,n,s,r,i){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:jr,eventId:r};if(e instanceof hu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Kw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof Wr){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${G0(t)}?${Br(a).slice(1)}`}function G0({config:t}){return t.emulator?ou(t,W0):`https://${t.authDomain}/${z0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa="webStorageSupport";class Q0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cp,this._completeRedirectFn=_0,this._overrideRedirectResult=y0}async _openPopup(e,n,s,r){var i;qt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=yh(e,n,s,rc(),r);return H0(e,o,fu())}async _openRedirect(e,n,s,r){return await this._originValidation(e),XE(yh(e,n,s,rc(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(qt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await F0(e),s=new I0(e);return n.register("authEvent",r=>(q(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Aa,{type:Aa},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Aa];o!==void 0&&n(!!o),ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=A0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ep()||cu()||Po()}}const Y0=Q0;var vh="@firebase/auth",wh="0.21.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Z0(t){bs(new qn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{q(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),q(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tp(t)},l=new CE(a,c,u);return iE(l,n),l})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),bs(new qn("auth-internal",e=>{const n=Us(e.getProvider("auth").getImmediate());return(s=>new X0(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hn(vh,wh,J0(t)),hn(vh,wh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI=5*60,tI=xd("authIdTokenMaxAge")||eI;let _h=null;const nI=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>tI)return;const r=n==null?void 0:n.token;_h!==r&&(_h=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function sI(t=Ud()){const e=su(t,"auth");if(e.isInitialized())return e.getImmediate();const n=rE(t,{popupRedirectResolver:Y0,persistence:[o0,GE,cp]}),s=xd("authTokenSyncURL");if(s){const i=nI(s);jE(n,i,()=>i(n.currentUser)),BE(n,o=>i(o))}const r=Od("auth");return r&&AE(n,`http://${r}`),n}Z0("Browser");var rI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L,pu=pu||{},z=rI||self;function ro(){}function Uo(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Qr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function iI(t){return Object.prototype.hasOwnProperty.call(t,ka)&&t[ka]||(t[ka]=++oI)}var ka="closure_uid_"+(1e9*Math.random()>>>0),oI=0;function aI(t,e,n){return t.call.apply(t.bind,arguments)}function cI(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function He(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?He=aI:He=cI,He.apply(null,arguments)}function Ei(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Le(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function vn(){this.s=this.s,this.o=this.o}var uI=0;vn.prototype.s=!1;vn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),uI!=0)&&iI(this)};vn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const mp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function gu(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Eh(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Uo(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Ke(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ke.prototype.h=function(){this.defaultPrevented=!0};var lI=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{z.addEventListener("test",ro,e),z.removeEventListener("test",ro,e)}catch{}return t}();function io(t){return/^[\s\xa0]*$/.test(t)}var Ih=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ra(t,e){return t<e?-1:t>e?1:0}function Fo(){var t=z.navigator;return t&&(t=t.userAgent)?t:""}function Rt(t){return Fo().indexOf(t)!=-1}function mu(t){return mu[" "](t),t}mu[" "]=ro;function hI(t){var e=pI;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var fI=Rt("Opera"),Ss=Rt("Trident")||Rt("MSIE"),yp=Rt("Edge"),oc=yp||Ss,vp=Rt("Gecko")&&!(Fo().toLowerCase().indexOf("webkit")!=-1&&!Rt("Edge"))&&!(Rt("Trident")||Rt("MSIE"))&&!Rt("Edge"),dI=Fo().toLowerCase().indexOf("webkit")!=-1&&!Rt("Edge");function wp(){var t=z.document;return t?t.documentMode:void 0}var oo;e:{var Da="",Na=function(){var t=Fo();if(vp)return/rv:([^\);]+)(\)|;)/.exec(t);if(yp)return/Edge\/([\d\.]+)/.exec(t);if(Ss)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(dI)return/WebKit\/(\S+)/.exec(t);if(fI)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Na&&(Da=Na?Na[1]:""),Ss){var Oa=wp();if(Oa!=null&&Oa>parseFloat(Da)){oo=String(Oa);break e}}oo=Da}var pI={};function gI(){return hI(function(){let t=0;const e=Ih(String(oo)).split("."),n=Ih("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Ra(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Ra(r[2].length==0,i[2].length==0)||Ra(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var ac;if(z.document&&Ss){var Th=wp();ac=Th||parseInt(oo,10)||void 0}else ac=void 0;var mI=ac;function Cr(t,e){if(Ke.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(vp){e:{try{mu(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:yI[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Cr.X.h.call(this)}}Le(Cr,Ke);var yI={2:"touch",3:"pen",4:"mouse"};Cr.prototype.h=function(){Cr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Yr="closure_listenable_"+(1e6*Math.random()|0),vI=0;function wI(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++vI,this.ba=this.ea=!1}function Vo(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function yu(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function _p(t){const e={};for(const n in t)e[n]=t[n];return e}const bh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ep(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<bh.length;i++)n=bh[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function $o(t){this.src=t,this.g={},this.h=0}$o.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=uc(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new wI(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function cc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=mp(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Vo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function uc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var vu="closure_lm_"+(1e6*Math.random()|0),xa={};function Ip(t,e,n,s,r){if(s&&s.once)return bp(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ip(t,e[i],n,s,r);return null}return n=Eu(n),t&&t[Yr]?t.N(e,n,Qr(s)?!!s.capture:!!s,r):Tp(t,e,n,!1,s,r)}function Tp(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Qr(r)?!!r.capture:!!r,a=_u(t);if(a||(t[vu]=a=new $o(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=_I(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)lI||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Cp(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function _I(){function t(n){return e.call(t.src,t.listener,n)}const e=EI;return t}function bp(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)bp(t,e[i],n,s,r);return null}return n=Eu(n),t&&t[Yr]?t.O(e,n,Qr(s)?!!s.capture:!!s,r):Tp(t,e,n,!0,s,r)}function Sp(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Sp(t,e[i],n,s,r);else s=Qr(s)?!!s.capture:!!s,n=Eu(n),t&&t[Yr]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=uc(i,n,s,r),-1<n&&(Vo(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=_u(t))&&(e=t.g[e.toString()],t=-1,e&&(t=uc(e,n,s,r)),(n=-1<t?e[t]:null)&&wu(n))}function wu(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Yr])cc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Cp(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=_u(e))?(cc(n,t),n.h==0&&(n.src=null,e[vu]=null)):Vo(t)}}}function Cp(t){return t in xa?xa[t]:xa[t]="on"+t}function EI(t,e){if(t.ba)t=!0;else{e=new Cr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&wu(t),t=n.call(s,e)}return t}function _u(t){return t=t[vu],t instanceof $o?t:null}var Pa="__closure_events_fn_"+(1e9*Math.random()>>>0);function Eu(t){return typeof t=="function"?t:(t[Pa]||(t[Pa]=function(e){return t.handleEvent(e)}),t[Pa])}function xe(){vn.call(this),this.i=new $o(this),this.P=this,this.I=null}Le(xe,vn);xe.prototype[Yr]=!0;xe.prototype.removeEventListener=function(t,e,n,s){Sp(this,t,e,n,s)};function Me(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Ke(e,t);else if(e instanceof Ke)e.target=e.target||t;else{var r=e;e=new Ke(s,t),Ep(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Ii(o,s,!0,e)&&r}if(o=e.g=t,r=Ii(o,s,!0,e)&&r,r=Ii(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Ii(o,s,!1,e)&&r}xe.prototype.M=function(){if(xe.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Vo(n[s]);delete t.g[e],t.h--}}this.I=null};xe.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};xe.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Ii(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&cc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Iu=z.JSON.stringify;function II(){var t=Rp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class TI{constructor(){this.h=this.g=null}add(e,n){const s=Ap.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Ap=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new bI,t=>t.reset());class bI{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function SI(t){z.setTimeout(()=>{throw t},0)}function kp(t,e){lc||CI(),hc||(lc(),hc=!0),Rp.add(t,e)}var lc;function CI(){var t=z.Promise.resolve(void 0);lc=function(){t.then(AI)}}var hc=!1,Rp=new TI;function AI(){for(var t;t=II();){try{t.h.call(t.g)}catch(n){SI(n)}var e=Ap;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}hc=!1}function Bo(t,e){xe.call(this),this.h=t||1,this.g=e||z,this.j=He(this.lb,this),this.l=Date.now()}Le(Bo,xe);L=Bo.prototype;L.ca=!1;L.R=null;L.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Me(this,"tick"),this.ca&&(Tu(this),this.start()))}};L.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Tu(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}L.M=function(){Bo.X.M.call(this),Tu(this),delete this.g};function bu(t,e,n){if(typeof t=="function")n&&(t=He(t,n));else if(t&&typeof t.handleEvent=="function")t=He(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:z.setTimeout(t,e||0)}function Dp(t){t.g=bu(()=>{t.g=null,t.i&&(t.i=!1,Dp(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class kI extends vn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Dp(this)}M(){super.M(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ar(t){vn.call(this),this.h=t,this.g={}}Le(Ar,vn);var Sh=[];function Np(t,e,n,s){Array.isArray(n)||(n&&(Sh[0]=n.toString()),n=Sh);for(var r=0;r<n.length;r++){var i=Ip(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Op(t){yu(t.g,function(e,n){this.g.hasOwnProperty(n)&&wu(e)},t),t.g={}}Ar.prototype.M=function(){Ar.X.M.call(this),Op(this)};Ar.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function jo(){this.g=!0}jo.prototype.Aa=function(){this.g=!1};function RI(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function DI(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function ls(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+OI(t,n)+(s?" "+s:"")})}function NI(t,e){t.info(function(){return"TIMEOUT: "+e})}jo.prototype.info=function(){};function OI(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Iu(n)}catch{return e}}var Xn={},Ch=null;function qo(){return Ch=Ch||new xe}Xn.Pa="serverreachability";function xp(t){Ke.call(this,Xn.Pa,t)}Le(xp,Ke);function kr(t){const e=qo();Me(e,new xp(e))}Xn.STAT_EVENT="statevent";function Pp(t,e){Ke.call(this,Xn.STAT_EVENT,t),this.stat=e}Le(Pp,Ke);function Qe(t){const e=qo();Me(e,new Pp(e,t))}Xn.Qa="timingevent";function Mp(t,e){Ke.call(this,Xn.Qa,t),this.size=e}Le(Mp,Ke);function Xr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){t()},e)}var Ho={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Lp={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Su(){}Su.prototype.h=null;function Ah(t){return t.h||(t.h=t.i())}function Up(){}var Jr={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Cu(){Ke.call(this,"d")}Le(Cu,Ke);function Au(){Ke.call(this,"c")}Le(Au,Ke);var fc;function Ko(){}Le(Ko,Su);Ko.prototype.g=function(){return new XMLHttpRequest};Ko.prototype.i=function(){return{}};fc=new Ko;function Zr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Ar(this),this.O=xI,t=oc?125:void 0,this.T=new Bo(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Fp}function Fp(){this.i=null,this.g="",this.h=!1}var xI=45e3,dc={},ao={};L=Zr.prototype;L.setTimeout=function(t){this.O=t};function pc(t,e,n){t.K=1,t.v=Wo(Ht(e)),t.s=n,t.P=!0,Vp(t,null)}function Vp(t,e){t.F=Date.now(),ei(t),t.A=Ht(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Wp(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Fp,t.g=pg(t.l,n?e:null,!t.s),0<t.N&&(t.L=new kI(He(t.La,t,t.g),t.N)),Np(t.S,t.g,"readystatechange",t.ib),e=t.H?_p(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),kr(),RI(t.j,t.u,t.A,t.m,t.U,t.s)}L.ib=function(t){t=t.target;const e=this.L;e&&Bt(t)==3?e.l():this.La(t)};L.La=function(t){try{if(t==this.g)e:{const l=Bt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||oc||this.g&&(this.h.h||this.g.fa()||Nh(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?kr(3):kr(2)),zo(this);var n=this.g.aa();this.Y=n;t:if($p(this)){var s=Nh(this.g);t="";var r=s.length,i=Bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){xn(this),cr(this);var o="";break t}this.h.i=new z.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,DI(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!io(a)){var u=a;break t}}u=null}if(n=u)ls(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,gc(this,n);else{this.i=!1,this.o=3,Qe(12),xn(this),cr(this);break e}}this.P?(Bp(this,l,o),oc&&this.i&&l==3&&(Np(this.S,this.T,"tick",this.hb),this.T.start())):(ls(this.j,this.m,o,null),gc(this,o)),l==4&&xn(this),this.i&&!this.I&&(l==4?lg(this.l,this):(this.i=!1,ei(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Qe(12)):(this.o=0,Qe(13)),xn(this),cr(this)}}}catch{}finally{}};function $p(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Bp(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=PI(t,n),r==ao){e==4&&(t.o=4,Qe(14),s=!1),ls(t.j,t.m,null,"[Incomplete Response]");break}else if(r==dc){t.o=4,Qe(15),ls(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else ls(t.j,t.m,r,null),gc(t,r);$p(t)&&r!=ao&&r!=dc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Qe(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Pu(e),e.K=!0,Qe(11))):(ls(t.j,t.m,n,"[Invalid Chunked Response]"),xn(t),cr(t))}L.hb=function(){if(this.g){var t=Bt(this.g),e=this.g.fa();this.C<e.length&&(zo(this),Bp(this,t,e),this.i&&t!=4&&ei(this))}};function PI(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?ao:(n=Number(e.substring(n,s)),isNaN(n)?dc:(s+=1,s+n>e.length?ao:(e=e.substr(s,n),t.C=s+n,e)))}L.cancel=function(){this.I=!0,xn(this)};function ei(t){t.V=Date.now()+t.O,jp(t,t.O)}function jp(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Xr(He(t.gb,t),e)}function zo(t){t.B&&(z.clearTimeout(t.B),t.B=null)}L.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(NI(this.j,this.A),this.K!=2&&(kr(),Qe(17)),xn(this),this.o=2,cr(this)):jp(this,this.V-t)};function cr(t){t.l.G==0||t.I||lg(t.l,t)}function xn(t){zo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Tu(t.T),Op(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function gc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||mc(n.h,t))){if(!t.J&&mc(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)lo(n),Yo(n);else break e;xu(n),Qe(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Xr(He(n.cb,n),6e3));if(1>=Yp(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Pn(n,11)}else if((t.J||n.g==t)&&lo(n),!io(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=s.h;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(ku(i,i.h),i.h=null))}if(s.D){const I=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(s.za=I,ye(s.F,s.D,I))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=dg(s,s.H?s.ka:null,s.V),o.J){Xp(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(zo(a),ei(a)),s.g=o}else cg(s);0<n.i.length&&Xo(n)}else u[0]!="stop"&&u[0]!="close"||Pn(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Pn(n,7):Ou(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}kr(4)}catch{}}function MI(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Uo(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function LI(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Uo(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function qp(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Uo(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=LI(t),s=MI(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Hp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function UI(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function $n(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof $n){this.h=e!==void 0?e:t.h,co(this,t.j),this.s=t.s,this.g=t.g,uo(this,t.m),this.l=t.l,e=t.i;var n=new Rr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),kh(this,n),this.o=t.o}else t&&(n=String(t).match(Hp))?(this.h=!!e,co(this,n[1]||"",!0),this.s=tr(n[2]||""),this.g=tr(n[3]||"",!0),uo(this,n[4]),this.l=tr(n[5]||"",!0),kh(this,n[6]||"",!0),this.o=tr(n[7]||"")):(this.h=!!e,this.i=new Rr(null,this.h))}$n.prototype.toString=function(){var t=[],e=this.j;e&&t.push(nr(e,Rh,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(nr(e,Rh,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(nr(n,n.charAt(0)=="/"?$I:VI,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",nr(n,jI)),t.join("")};function Ht(t){return new $n(t)}function co(t,e,n){t.j=n?tr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function uo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function kh(t,e,n){e instanceof Rr?(t.i=e,qI(t.i,t.h)):(n||(e=nr(e,BI)),t.i=new Rr(e,t.h))}function ye(t,e,n){t.i.set(e,n)}function Wo(t){return ye(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function tr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function nr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,FI),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function FI(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Rh=/[#\/\?@]/g,VI=/[#\?:]/g,$I=/[#\?]/g,BI=/[#\?@]/g,jI=/#/g;function Rr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function wn(t){t.g||(t.g=new Map,t.h=0,t.i&&UI(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}L=Rr.prototype;L.add=function(t,e){wn(this),this.i=null,t=Vs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Kp(t,e){wn(t),e=Vs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function zp(t,e){return wn(t),e=Vs(t,e),t.g.has(e)}L.forEach=function(t,e){wn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};L.oa=function(){wn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};L.W=function(t){wn(this);let e=[];if(typeof t=="string")zp(this,t)&&(e=e.concat(this.g.get(Vs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};L.set=function(t,e){return wn(this),this.i=null,t=Vs(this,t),zp(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};L.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Wp(t,e,n){Kp(t,e),0<n.length&&(t.i=null,t.g.set(Vs(t,e),gu(n)),t.h+=n.length)}L.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Vs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function qI(t,e){e&&!t.j&&(wn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Kp(this,s),Wp(this,r,n))},t)),t.j=e}var HI=class{constructor(e,n){this.h=e,this.g=n}};function Gp(t){this.l=t||KI,z.PerformanceNavigationTiming?(t=z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(z.g&&z.g.Ga&&z.g.Ga()&&z.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var KI=10;function Qp(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Yp(t){return t.h?1:t.g?t.g.size:0}function mc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ku(t,e){t.g?t.g.add(e):t.h=e}function Xp(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Gp.prototype.cancel=function(){if(this.i=Jp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Jp(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return gu(t.i)}function Ru(){}Ru.prototype.stringify=function(t){return z.JSON.stringify(t,void 0)};Ru.prototype.parse=function(t){return z.JSON.parse(t,void 0)};function zI(){this.g=new Ru}function WI(t,e,n){const s=n||"";try{qp(t,function(r,i){let o=r;Qr(r)&&(o=Iu(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function GI(t,e){const n=new jo;if(z.Image){const s=new Image;s.onload=Ei(Ti,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Ei(Ti,n,s,"TestLoadImage: error",!1,e),s.onabort=Ei(Ti,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Ei(Ti,n,s,"TestLoadImage: timeout",!1,e),z.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Ti(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function ti(t){this.l=t.ac||null,this.j=t.jb||!1}Le(ti,Su);ti.prototype.g=function(){return new Go(this.l,this.j)};ti.prototype.i=function(t){return function(){return t}}({});function Go(t,e){xe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Du,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Le(Go,xe);var Du=0;L=Go.prototype;L.open=function(t,e){if(this.readyState!=Du)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Dr(this)};L.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||z).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};L.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ni(this)),this.readyState=Du};L.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Dr(this)),this.g&&(this.readyState=3,Dr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Zp(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Zp(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}L.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ni(this):Dr(this),this.readyState==3&&Zp(this)}};L.Va=function(t){this.g&&(this.response=this.responseText=t,ni(this))};L.Ua=function(t){this.g&&(this.response=t,ni(this))};L.ga=function(){this.g&&ni(this)};function ni(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Dr(t)}L.setRequestHeader=function(t,e){this.v.append(t,e)};L.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};L.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Dr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Go.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var QI=z.JSON.parse;function we(t){xe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=eg,this.K=this.L=!1}Le(we,xe);var eg="",YI=/^https?$/i,XI=["POST","PUT"];L=we.prototype;L.Ka=function(t){this.L=t};L.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():fc.g(),this.C=this.u?Ah(this.u):Ah(fc),this.g.onreadystatechange=He(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Dh(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=z.FormData&&t instanceof z.FormData,!(0<=mp(XI,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{sg(this),0<this.B&&((this.K=JI(this.g))?(this.g.timeout=this.B,this.g.ontimeout=He(this.qa,this)):this.A=bu(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Dh(this,i)}};function JI(t){return Ss&&gI()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}L.qa=function(){typeof pu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Me(this,"timeout"),this.abort(8))};function Dh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,tg(t),Qo(t)}function tg(t){t.D||(t.D=!0,Me(t,"complete"),Me(t,"error"))}L.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Me(this,"complete"),Me(this,"abort"),Qo(this))};L.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Qo(this,!0)),we.X.M.call(this)};L.Ha=function(){this.s||(this.F||this.v||this.l?ng(this):this.fb())};L.fb=function(){ng(this)};function ng(t){if(t.h&&typeof pu<"u"&&(!t.C[1]||Bt(t)!=4||t.aa()!=2)){if(t.v&&Bt(t)==4)bu(t.Ha,0,t);else if(Me(t,"readystatechange"),Bt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Hp)[1]||null;if(!r&&z.self&&z.self.location){var i=z.self.location.protocol;r=i.substr(0,i.length-1)}s=!YI.test(r?r.toLowerCase():"")}n=s}if(n)Me(t,"complete"),Me(t,"success");else{t.m=6;try{var o=2<Bt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",tg(t)}}finally{Qo(t)}}}}function Qo(t,e){if(t.g){sg(t);const n=t.g,s=t.C[0]?ro:null;t.g=null,t.C=null,e||Me(t,"ready");try{n.onreadystatechange=s}catch{}}}function sg(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(z.clearTimeout(t.A),t.A=null)}function Bt(t){return t.g?t.g.readyState:0}L.aa=function(){try{return 2<Bt(this)?this.g.status:-1}catch{return-1}};L.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};L.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),QI(e)}};function Nh(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case eg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}L.Ea=function(){return this.m};L.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function rg(t){let e="";return yu(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Nu(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=rg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ye(t,e,n))}function Qs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ig(t){this.Ca=0,this.i=[],this.j=new jo,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Qs("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Qs("baseRetryDelayMs",5e3,t),this.bb=Qs("retryDelaySeedMs",1e4,t),this.$a=Qs("forwardChannelMaxRetries",2,t),this.ta=Qs("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Gp(t&&t.concurrentRequestLimit),this.Fa=new zI,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}L=ig.prototype;L.ma=8;L.G=1;function Ou(t){if(og(t),t.G==3){var e=t.U++,n=Ht(t.F);ye(n,"SID",t.I),ye(n,"RID",e),ye(n,"TYPE","terminate"),si(t,n),e=new Zr(t,t.j,e,void 0),e.K=2,e.v=Wo(Ht(n)),n=!1,z.navigator&&z.navigator.sendBeacon&&(n=z.navigator.sendBeacon(e.v.toString(),"")),!n&&z.Image&&(new Image().src=e.v,n=!0),n||(e.g=pg(e.l,null),e.g.da(e.v)),e.F=Date.now(),ei(e)}fg(t)}function Yo(t){t.g&&(Pu(t),t.g.cancel(),t.g=null)}function og(t){Yo(t),t.u&&(z.clearTimeout(t.u),t.u=null),lo(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&z.clearTimeout(t.m),t.m=null)}function Xo(t){Qp(t.h)||t.m||(t.m=!0,kp(t.Ja,t),t.C=0)}function ZI(t,e){return Yp(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Xr(He(t.Ja,t,e),hg(t,t.C)),t.C++,!0)}L.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Zr(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=_p(i),Ep(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ag(this,r,e),n=Ht(this.F),ye(n,"RID",t),ye(n,"CVER",22),this.D&&ye(n,"X-HTTP-Session-Id",this.D),si(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(rg(i)))+"&"+e:this.o&&Nu(n,this.o,i)),ku(this.h,r),this.Ya&&ye(n,"TYPE","init"),this.O?(ye(n,"$req",e),ye(n,"SID","null"),r.Z=!0,pc(r,n,null)):pc(r,n,e),this.G=2}}else this.G==3&&(t?Oh(this,t):this.i.length==0||Qp(this.h)||Oh(this))};function Oh(t,e){var n;e?n=e.m:n=t.U++;const s=Ht(t.F);ye(s,"SID",t.I),ye(s,"RID",n),ye(s,"AID",t.T),si(t,s),t.o&&t.s&&Nu(s,t.o,t.s),n=new Zr(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=ag(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),ku(t.h,n),pc(n,s,e)}function si(t,e){t.ia&&yu(t.ia,function(n,s){ye(e,s,n)}),t.l&&qp({},function(n,s){ye(e,s,n)})}function ag(t,e,n){n=Math.min(t.i.length,n);var s=t.l?He(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{WI(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function cg(t){t.g||t.u||(t.Z=1,kp(t.Ia,t),t.A=0)}function xu(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Xr(He(t.Ia,t),hg(t,t.A)),t.A++,!0)}L.Ia=function(){if(this.u=null,ug(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Xr(He(this.eb,this),t)}};L.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Qe(10),Yo(this),ug(this))};function Pu(t){t.B!=null&&(z.clearTimeout(t.B),t.B=null)}function ug(t){t.g=new Zr(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Ht(t.sa);ye(e,"RID","rpc"),ye(e,"SID",t.I),ye(e,"CI",t.L?"0":"1"),ye(e,"AID",t.T),ye(e,"TYPE","xmlhttp"),si(t,e),t.o&&t.s&&Nu(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Wo(Ht(e)),n.s=null,n.P=!0,Vp(n,t)}L.cb=function(){this.v!=null&&(this.v=null,Yo(this),xu(this),Qe(19))};function lo(t){t.v!=null&&(z.clearTimeout(t.v),t.v=null)}function lg(t,e){var n=null;if(t.g==e){lo(t),Pu(t),t.g=null;var s=2}else if(mc(t.h,e))n=e.D,Xp(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=qo(),Me(s,new Mp(s,n)),Xo(t)}else cg(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&ZI(t,e)||s==2&&xu(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Pn(t,5);break;case 4:Pn(t,10);break;case 3:Pn(t,6);break;default:Pn(t,2)}}}function hg(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Pn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=He(t.kb,t);n||(n=new $n("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||co(n,"https"),Wo(n)),GI(n.toString(),s)}else Qe(2);t.G=0,t.l&&t.l.va(e),fg(t),og(t)}L.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Qe(2)):(this.j.info("Failed to ping google.com"),Qe(1))};function fg(t){if(t.G=0,t.la=[],t.l){const e=Jp(t.h);(e.length!=0||t.i.length!=0)&&(Eh(t.la,e),Eh(t.la,t.i),t.h.i.length=0,gu(t.i),t.i.length=0),t.l.ua()}}function dg(t,e,n){var s=n instanceof $n?Ht(n):new $n(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),uo(s,s.m);else{var r=z.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new $n(null,void 0);s&&co(i,s),e&&(i.g=e),r&&uo(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&ye(s,n,e),ye(s,"VER",t.ma),si(t,s),s}function pg(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new we(new ti({jb:!0})):new we(t.ra),e.Ka(t.H),e}function gg(){}L=gg.prototype;L.xa=function(){};L.wa=function(){};L.va=function(){};L.ua=function(){};L.Ra=function(){};function ho(){if(Ss&&!(10<=Number(mI)))throw Error("Environmental error: no available transport.")}ho.prototype.g=function(t,e){return new rt(t,e)};function rt(t,e){xe.call(this),this.g=new ig(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!io(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!io(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new $s(this)}Le(rt,xe);rt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Qe(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=dg(t,null,t.V),Xo(t)};rt.prototype.close=function(){Ou(this.g)};rt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Iu(t),t=n);e.i.push(new HI(e.ab++,t)),e.G==3&&Xo(e)};rt.prototype.M=function(){this.g.l=null,delete this.j,Ou(this.g),delete this.g,rt.X.M.call(this)};function mg(t){Cu.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Le(mg,Cu);function yg(){Au.call(this),this.status=1}Le(yg,Au);function $s(t){this.g=t}Le($s,gg);$s.prototype.xa=function(){Me(this.g,"a")};$s.prototype.wa=function(t){Me(this.g,new mg(t))};$s.prototype.va=function(t){Me(this.g,new yg)};$s.prototype.ua=function(){Me(this.g,"b")};ho.prototype.createWebChannel=ho.prototype.g;rt.prototype.send=rt.prototype.u;rt.prototype.open=rt.prototype.m;rt.prototype.close=rt.prototype.close;Ho.NO_ERROR=0;Ho.TIMEOUT=8;Ho.HTTP_ERROR=6;Lp.COMPLETE="complete";Up.EventType=Jr;Jr.OPEN="a";Jr.CLOSE="b";Jr.ERROR="c";Jr.MESSAGE="d";xe.prototype.listen=xe.prototype.N;we.prototype.listenOnce=we.prototype.O;we.prototype.getLastError=we.prototype.Oa;we.prototype.getLastErrorCode=we.prototype.Ea;we.prototype.getStatus=we.prototype.aa;we.prototype.getResponseJson=we.prototype.Sa;we.prototype.getResponseText=we.prototype.fa;we.prototype.send=we.prototype.da;we.prototype.setWithCredentials=we.prototype.Ka;var eT=function(){return new ho},tT=function(){return qo()},Ma=Ho,nT=Lp,sT=Xn,xh={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},rT=ti,bi=Up,iT=we;const Ph="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Fe.UNAUTHENTICATED=new Fe(null),Fe.GOOGLE_CREDENTIALS=new Fe("google-credentials-uid"),Fe.FIRST_PARTY=new Fe("first-party-uid"),Fe.MOCK_USER=new Fe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bs="9.17.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=new tu("@firebase/firestore");function Mh(){return Wn.logLevel}function F(t,...e){if(Wn.logLevel<=re.DEBUG){const n=e.map(Mu);Wn.debug(`Firestore (${Bs}): ${t}`,...n)}}function Kt(t,...e){if(Wn.logLevel<=re.ERROR){const n=e.map(Mu);Wn.error(`Firestore (${Bs}): ${t}`,...n)}}function yc(t,...e){if(Wn.logLevel<=re.WARN){const n=e.map(Mu);Wn.warn(`Firestore (${Bs}): ${t}`,...n)}}function Mu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t="Unexpected state"){const e=`FIRESTORE (${Bs}) INTERNAL ASSERTION FAILED: `+t;throw Kt(e),new Error(e)}function fe(t,e){t||K()}function Q(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends Qt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class oT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Fe.UNAUTHENTICATED))}shutdown(){}}class aT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class cT{constructor(e){this.t=e,this.currentUser=Fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new fn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new fn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new fn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(fe(typeof s.accessToken=="string"),new vg(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return fe(e===null||typeof e=="string"),new Fe(e)}}class uT{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=Fe.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(fe(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class lT{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new uT(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Fe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fT{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(fe(typeof n.token=="string"),this.A=n.token,new hT(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dT(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=dT(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function oe(t,e){return t<e?-1:t>e?1:0}function Cs(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new x(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new x(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new x(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ae.fromMillis(Date.now())}static fromDate(e){return Ae.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ae(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.timestamp=e}static fromTimestamp(e){return new G(e)}static min(){return new G(new Ae(0,0))}static max(){return new G(new Ae(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,n,s){n===void 0?n=0:n>e.length&&K(),s===void 0?s=e.length-n:s>e.length-n&&K(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Nr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Nr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ge extends Nr{construct(e,n,s){return new ge(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new x(_.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new ge(n)}static emptyPath(){return new ge([])}}const pT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Be extends Nr{construct(e,n,s){return new Be(e,n,s)}static isValidIdentifier(e){return pT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Be(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new x(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new x(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new x(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new x(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Be(n)}static emptyPath(){return new Be([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(ge.fromString(e))}static fromName(e){return new $(ge.fromString(e).popFirst(5))}static empty(){return new $(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new ge(e.slice()))}}function gT(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=G.fromTimestamp(s===1e9?new Ae(n+1,0):new Ae(n,s));return new gn(r,$.empty(),e)}function mT(t){return new gn(t.readTime,t.key,-1)}class gn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new gn(G.min(),$.empty(),-1)}static max(){return new gn(G.max(),$.empty(),-1)}}function yT(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=$.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ri(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==vT)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,s)=>{n(e)})}static reject(e){return new b((n,s)=>{s(e)})}static waitFor(e){return new b((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=b.resolve(!1);for(const s of e)n=n.next(r=>r?b.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new b((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(e,n){return new b((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function ii(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Lu.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Or{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Or("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Or&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Jn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function _g(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(t){return t==null}function fo(t){return t===0&&1/t==-1/0}function ET(t){return typeof t=="number"&&Number.isInteger(t)&&!fo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new We(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new We(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}We.EMPTY_BYTE_STRING=new We("");const IT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mn(t){if(fe(!!t),typeof t=="string"){let e=0;const n=IT.exec(t);if(fe(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Te(t.seconds),nanos:Te(t.nanos)}}function Te(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function As(t){return typeof t=="string"?We.fromBase64String(t):We.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ig(t){const e=t.mapValue.fields.__previous_value__;return Eg(e)?Ig(e):e}function xr(t){const e=mn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ae(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Gn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Eg(t)?4:TT(t)?9007199254740991:10:K()}function Lt(t,e){if(t===e)return!0;const n=Gn(t);if(n!==Gn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return xr(t).isEqual(xr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=mn(s.timestampValue),o=mn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return As(s.bytesValue).isEqual(As(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Te(s.geoPointValue.latitude)===Te(r.geoPointValue.latitude)&&Te(s.geoPointValue.longitude)===Te(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Te(s.integerValue)===Te(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Te(s.doubleValue),o=Te(r.doubleValue);return i===o?fo(i)===fo(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Cs(t.arrayValue.values||[],e.arrayValue.values||[],Lt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Lh(i)!==Lh(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Lt(i[a],o[a])))return!1;return!0}(t,e);default:return K()}}function Pr(t,e){return(t.values||[]).find(n=>Lt(n,e))!==void 0}function ks(t,e){if(t===e)return 0;const n=Gn(t),s=Gn(e);if(n!==s)return oe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Te(r.integerValue||r.doubleValue),a=Te(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Uh(t.timestampValue,e.timestampValue);case 4:return Uh(xr(t),xr(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(r,i){const o=As(r),a=As(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=oe(o[c],a[c]);if(u!==0)return u}return oe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=oe(Te(r.latitude),Te(i.latitude));return o!==0?o:oe(Te(r.longitude),Te(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=ks(o[c],a[c]);if(u)return u}return oe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Si.mapValue&&i===Si.mapValue)return 0;if(r===Si.mapValue)return 1;if(i===Si.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=oe(a[l],u[l]);if(h!==0)return h;const d=ks(o[a[l]],c[u[l]]);if(d!==0)return d}return oe(a.length,u.length)}(t.mapValue,e.mapValue);default:throw K()}}function Uh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=mn(t),s=mn(e),r=oe(n.seconds,s.seconds);return r!==0?r:oe(n.nanos,s.nanos)}function Rs(t){return vc(t)}function vc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=mn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?As(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,$.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=vc(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${vc(s.fields[a])}`;return i+"}"}(t.mapValue):K();var e,n}function Fh(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function wc(t){return!!t&&"integerValue"in t}function Uu(t){return!!t&&"arrayValue"in t}function Vh(t){return!!t&&"nullValue"in t}function $h(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Fi(t){return!!t&&"mapValue"in t}function ur(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Jn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=ur(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ur(t.arrayValue.values[n]);return e}return Object.assign({},t)}function TT(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,n){this.position=e,this.inclusive=n}}function Bh(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=$.comparator($.fromName(o.referenceValue),n.key):s=ks(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function jh(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Lt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{}class Se extends Tg{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new ST(e,n,s):n==="array-contains"?new kT(e,s):n==="in"?new RT(e,s):n==="not-in"?new DT(e,s):n==="array-contains-any"?new NT(e,s):new Se(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new CT(e,s):new AT(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ks(n,this.value)):n!==null&&Gn(this.value)===Gn(n)&&this.matchesComparison(ks(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class _t extends Tg{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new _t(e,n)}matches(e){return bg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function bg(t){return t.op==="and"}function Sg(t){return bT(t)&&bg(t)}function bT(t){for(const e of t.filters)if(e instanceof _t)return!1;return!0}function _c(t){if(t instanceof Se)return t.field.canonicalString()+t.op.toString()+Rs(t.value);if(Sg(t))return t.filters.map(e=>_c(e)).join(",");{const e=t.filters.map(n=>_c(n)).join(",");return`${t.op}(${e})`}}function Cg(t,e){return t instanceof Se?function(n,s){return s instanceof Se&&n.op===s.op&&n.field.isEqual(s.field)&&Lt(n.value,s.value)}(t,e):t instanceof _t?function(n,s){return s instanceof _t&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Cg(i,s.filters[o]),!0):!1}(t,e):void K()}function Ag(t){return t instanceof Se?function(e){return`${e.field.canonicalString()} ${e.op} ${Rs(e.value)}`}(t):t instanceof _t?function(e){return e.op.toString()+" {"+e.getFilters().map(Ag).join(" ,")+"}"}(t):"Filter"}class ST extends Se{constructor(e,n,s){super(e,n,s),this.key=$.fromName(s.referenceValue)}matches(e){const n=$.comparator(e.key,this.key);return this.matchesComparison(n)}}class CT extends Se{constructor(e,n){super(e,"in",n),this.keys=kg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class AT extends Se{constructor(e,n){super(e,"not-in",n),this.keys=kg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function kg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>$.fromName(s.referenceValue))}class kT extends Se{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Uu(n)&&Pr(n.arrayValue,this.value)}}class RT extends Se{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Pr(this.value.arrayValue,n)}}class DT extends Se{constructor(e,n){super(e,"not-in",n)}matches(e){if(Pr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Pr(this.value.arrayValue,n)}}class NT extends Se{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Uu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Pr(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,n="asc"){this.field=e,this.dir=n}}function OT(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,n){this.comparator=e,this.root=n||Pe.EMPTY}insert(e,n){return new Ne(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Pe.BLACK,null,null))}remove(e){return new Ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ci(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ci(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ci(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ci(this.root,e,this.comparator,!0)}}class Ci{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pe{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Pe.RED,this.left=r??Pe.EMPTY,this.right=i??Pe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Pe(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Pe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Pe.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}Pe.EMPTY=null,Pe.RED=!0,Pe.BLACK=!1;Pe.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Pe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.comparator=e,this.data=new Ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new qh(this.data.getIterator())}getIteratorFrom(e){return new qh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ke(this.comparator);return n.data=e,n}}class qh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.fields=e,e.sort(Be.comparator)}static empty(){return new st([])}unionWith(e){let n=new ke(Be.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new st(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Cs(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.value=e}static empty(){return new Ze({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Fi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ur(n)}setAll(e){let n=Be.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=ur(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Fi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Lt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Fi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Jn(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Ze(ur(this.value))}}function Rg(t){const e=[];return Jn(t.fields,(n,s)=>{const r=new Be([n]);if(Fi(s)){const i=Rg(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new st(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ve(e,0,G.min(),G.min(),G.min(),Ze.empty(),0)}static newFoundDocument(e,n,s,r){return new Ve(e,1,n,G.min(),s,r,0)}static newNoDocument(e,n){return new Ve(e,2,n,G.min(),G.min(),Ze.empty(),0)}static newUnknownDocument(e,n){return new Ve(e,3,n,G.min(),G.min(),Ze.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ze.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ze.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ve&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ve(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function Hh(t,e=null,n=[],s=[],r=null,i=null,o=null){return new xT(t,e,n,s,r,i,o)}function Fu(t){const e=Q(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>_c(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Jo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Rs(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Rs(s)).join(",")),e.ft=n}return e.ft}function Vu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!OT(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Cg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!jh(t.startAt,e.startAt)&&jh(t.endAt,e.endAt)}function Ec(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function PT(t,e,n,s,r,i,o,a){return new oi(t,e,n,s,r,i,o,a)}function $u(t){return new oi(t)}function Kh(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Dg(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Bu(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Ng(t){return t.collectionGroup!==null}function ws(t){const e=Q(t);if(e.dt===null){e.dt=[];const n=Bu(e),s=Dg(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new lr(n)),e.dt.push(new lr(Be.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new lr(Be.keyField(),i))}}}return e.dt}function zt(t){const e=Q(t);if(!e._t)if(e.limitType==="F")e._t=Hh(e.path,e.collectionGroup,ws(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of ws(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new lr(i.field,o))}const s=e.endAt?new po(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new po(e.startAt.position,e.startAt.inclusive):null;e._t=Hh(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function Ic(t,e){e.getFirstInequalityField(),Bu(t);const n=t.filters.concat([e]);return new oi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Tc(t,e,n){return new oi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Zo(t,e){return Vu(zt(t),zt(e))&&t.limitType===e.limitType}function Og(t){return`${Fu(zt(t))}|lt:${t.limitType}`}function bc(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Ag(s)).join(", ")}]`),Jo(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Rs(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Rs(s)).join(",")),`Target(${n})`}(zt(t))}; limitType=${t.limitType})`}function ea(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):$.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of ws(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Bh(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,ws(n),s)||n.endAt&&!function(r,i,o){const a=Bh(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,ws(n),s))}(t,e)}function MT(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function xg(t){return(e,n)=>{let s=!1;for(const r of ws(t)){const i=LT(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function LT(t,e,n){const s=t.field.isKeyField()?$.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?ks(a,c):K()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return K()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fo(e)?"-0":e}}function Mg(t){return{integerValue:""+t}}function UT(t,e){return ET(e)?Mg(e):Pg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(){this._=void 0}}function FT(t,e,n){return t instanceof go?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Mr?Ug(t,e):t instanceof Lr?Fg(t,e):function(s,r){const i=Lg(s,r),o=zh(i)+zh(s.gt);return wc(i)&&wc(s.gt)?Mg(o):Pg(s.yt,o)}(t,e)}function VT(t,e,n){return t instanceof Mr?Ug(t,e):t instanceof Lr?Fg(t,e):n}function Lg(t,e){return t instanceof mo?wc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class go extends ta{}class Mr extends ta{constructor(e){super(),this.elements=e}}function Ug(t,e){const n=Vg(e);for(const s of t.elements)n.some(r=>Lt(r,s))||n.push(s);return{arrayValue:{values:n}}}class Lr extends ta{constructor(e){super(),this.elements=e}}function Fg(t,e){let n=Vg(e);for(const s of t.elements)n=n.filter(r=>!Lt(r,s));return{arrayValue:{values:n}}}class mo extends ta{constructor(e,n){super(),this.yt=e,this.gt=n}}function zh(t){return Te(t.integerValue||t.doubleValue)}function Vg(t){return Uu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function $T(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Mr&&s instanceof Mr||n instanceof Lr&&s instanceof Lr?Cs(n.elements,s.elements,Lt):n instanceof mo&&s instanceof mo?Lt(n.gt,s.gt):n instanceof go&&s instanceof go}(t.transform,e.transform)}class BT{constructor(e,n){this.version=e,this.transformResults=n}}class wt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new wt}static exists(e){return new wt(void 0,e)}static updateTime(e){return new wt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class na{}function $g(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ju(t.key,wt.none()):new ai(t.key,t.data,wt.none());{const n=t.data,s=Ze.empty();let r=new ke(Be.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new _n(t.key,s,new st(r.toArray()),wt.none())}}function jT(t,e,n){t instanceof ai?function(s,r,i){const o=s.value.clone(),a=Gh(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof _n?function(s,r,i){if(!Vi(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Gh(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Bg(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function hr(t,e,n,s){return t instanceof ai?function(r,i,o,a){if(!Vi(r.precondition,i))return o;const c=r.value.clone(),u=Qh(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof _n?function(r,i,o,a){if(!Vi(r.precondition,i))return o;const c=Qh(r.fieldTransforms,a,i),u=i.data;return u.setAll(Bg(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(t,e,n,s):function(r,i,o){return Vi(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function qT(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Lg(s.transform,r||null);i!=null&&(n===null&&(n=Ze.empty()),n.set(s.field,i))}return n||null}function Wh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Cs(n,s,(r,i)=>$T(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ai extends na{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class _n extends na{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Bg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Gh(t,e,n){const s=new Map;fe(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,VT(o,a,n[r]))}return s}function Qh(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,FT(i,o,e))}return s}class ju extends na{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class HT extends na{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie,te;function zT(t){switch(t){default:return K();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function jg(t){if(t===void 0)return Kt("GRPC error has no .code"),_.UNKNOWN;switch(t){case Ie.OK:return _.OK;case Ie.CANCELLED:return _.CANCELLED;case Ie.UNKNOWN:return _.UNKNOWN;case Ie.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case Ie.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case Ie.INTERNAL:return _.INTERNAL;case Ie.UNAVAILABLE:return _.UNAVAILABLE;case Ie.UNAUTHENTICATED:return _.UNAUTHENTICATED;case Ie.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case Ie.NOT_FOUND:return _.NOT_FOUND;case Ie.ALREADY_EXISTS:return _.ALREADY_EXISTS;case Ie.PERMISSION_DENIED:return _.PERMISSION_DENIED;case Ie.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case Ie.ABORTED:return _.ABORTED;case Ie.OUT_OF_RANGE:return _.OUT_OF_RANGE;case Ie.UNIMPLEMENTED:return _.UNIMPLEMENTED;case Ie.DATA_LOSS:return _.DATA_LOSS;default:return K()}}(te=Ie||(Ie={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Jn(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return _g(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT=new Ne($.comparator);function Wt(){return WT}const qg=new Ne($.comparator);function sr(...t){let e=qg;for(const n of t)e=e.insert(n.key,n);return e}function Hg(t){let e=qg;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Mn(){return fr()}function Kg(){return fr()}function fr(){return new js(t=>t.toString(),(t,e)=>t.isEqual(e))}const GT=new Ne($.comparator),QT=new ke($.comparator);function ee(...t){let e=QT;for(const n of t)e=e.add(n);return e}const YT=new ke(oe);function zg(){return YT}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,ci.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new sa(G.min(),r,zg(),Wt(),ee())}}class ci{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new ci(s,n,ee(),ee(),ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,n,s,r){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=r}}class Wg{constructor(e,n){this.targetId=e,this.Et=n}}class Gg{constructor(e,n,s=We.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Yh{constructor(){this.At=0,this.Rt=Jh(),this.bt=We.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=ee(),n=ee(),s=ee();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:K()}}),new ci(this.bt,this.Pt,e,n,s)}xt(){this.vt=!1,this.Rt=Jh()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class XT{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Wt(),this.qt=Xh(),this.Ut=new ke(oe)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const s=this.Wt(n);switch(e.state){case 0:this.zt(n)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.zt(r)&&n(r)})}Jt(e){const n=e.targetId,s=e.Et.count,r=this.Yt(n);if(r){const i=r.target;if(Ec(i))if(s===0){const o=new $(i.path);this.Qt(n,o,Ve.newNoDocument(o,G.min()))}else fe(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&Ec(a.target)){const c=new $(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,Ve.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=ee();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new sa(e,n,this.Ut,this.Lt,s);return this.Lt=Wt(),this.qt=Xh(),this.Ut=new ke(oe),r}Gt(e,n){if(!this.zt(e))return;const s=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.zt(e))return;const r=this.Wt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new Yh,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new ke(oe),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Yh),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function Xh(){return new Ne($.comparator)}function Jh(){return new Ne($.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),ZT=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),eb=(()=>({and:"AND",or:"OR"}))();class tb{constructor(e,n){this.databaseId=e,this.wt=n}}function yo(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Qg(t,e){return t.wt?e.toBase64():e.toUint8Array()}function nb(t,e){return yo(t,e.toTimestamp())}function xt(t){return fe(!!t),G.fromTimestamp(function(e){const n=mn(e);return new Ae(n.seconds,n.nanos)}(t))}function qu(t,e){return function(n){return new ge(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Yg(t){const e=ge.fromString(t);return fe(em(e)),e}function Sc(t,e){return qu(t.databaseId,e.path)}function La(t,e){const n=Yg(e);if(n.get(1)!==t.databaseId.projectId)throw new x(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new x(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $(Xg(n))}function Cc(t,e){return qu(t.databaseId,e)}function sb(t){const e=Yg(t);return e.length===4?ge.emptyPath():Xg(e)}function Ac(t){return new ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Xg(t){return fe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Zh(t,e,n){return{name:Sc(t,e),fields:n.value.mapValue.fields}}function rb(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.wt?(fe(u===void 0||typeof u=="string"),We.fromBase64String(u||"")):(fe(u===void 0||u instanceof Uint8Array),We.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?_.UNKNOWN:jg(c.code);return new x(u,c.message||"")}(o);n=new Gg(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=La(t,s.document.name),i=xt(s.document.updateTime),o=s.document.createTime?xt(s.document.createTime):G.min(),a=new Ze({mapValue:{fields:s.document.fields}}),c=Ve.newFoundDocument(r,i,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new $i(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=La(t,s.document),i=s.readTime?xt(s.readTime):G.min(),o=Ve.newNoDocument(r,i),a=s.removedTargetIds||[];n=new $i([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=La(t,s.document),i=s.removedTargetIds||[];n=new $i([],i,r,null)}else{if(!("filter"in e))return K();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new KT(r),o=s.targetId;n=new Wg(o,i)}}return n}function ib(t,e){let n;if(e instanceof ai)n={update:Zh(t,e.key,e.value)};else if(e instanceof ju)n={delete:Sc(t,e.key)};else if(e instanceof _n)n={update:Zh(t,e.key,e.data),updateMask:pb(e.fieldMask)};else{if(!(e instanceof HT))return K();n={verify:Sc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof go)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Mr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Lr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof mo)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw K()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:nb(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:K()}(t,e.precondition)),n}function ob(t,e){return t&&t.length>0?(fe(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?xt(s.updateTime):xt(r);return i.isEqual(G.min())&&(i=xt(r)),new BT(i,s.transformResults||[])}(n,e))):[]}function ab(t,e){return{documents:[Cc(t,e.path)]}}function cb(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Cc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Cc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Zg(_t.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:is(l.field),direction:hb(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.wt||Jo(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function ub(t){let e=sb(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){fe(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=function(l){const h=Jg(l);return h instanceof _t&&Sg(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new lr(os(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Jo(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new po(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new po(d,h)}(n.endAt)),PT(e,r,o,i,a,"F",c,u)}function lb(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return K()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Jg(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=os(e.unaryFilter.field);return Se.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=os(e.unaryFilter.field);return Se.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=os(e.unaryFilter.field);return Se.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=os(e.unaryFilter.field);return Se.create(i,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(e){return Se.create(os(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return _t.create(e.compositeFilter.filters.map(n=>Jg(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return K()}}(e.compositeFilter.op))}(t):K()}function hb(t){return JT[t]}function fb(t){return ZT[t]}function db(t){return eb[t]}function is(t){return{fieldPath:t.canonicalString()}}function os(t){return Be.fromServerFormat(t.fieldPath)}function Zg(t){return t instanceof Se?function(e){if(e.op==="=="){if($h(e.value))return{unaryFilter:{field:is(e.field),op:"IS_NAN"}};if(Vh(e.value))return{unaryFilter:{field:is(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if($h(e.value))return{unaryFilter:{field:is(e.field),op:"IS_NOT_NAN"}};if(Vh(e.value))return{unaryFilter:{field:is(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:is(e.field),op:fb(e.op),value:e.value}}}(t):t instanceof _t?function(e){const n=e.getFilters().map(s=>Zg(s));return n.length===1?n[0]:{compositeFilter:{op:db(e.op),filters:n}}}(t):K()}function pb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function em(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&jT(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=hr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=hr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Kg();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=$g(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(G.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ee())}isEqual(e){return this.batchId===e.batchId&&Cs(this.mutations,e.mutations,(n,s)=>Wh(n,s))&&Cs(this.baseMutations,e.baseMutations,(n,s)=>Wh(n,s))}}class Hu{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){fe(e.mutations.length===s.length);let r=GT;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Hu(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,n,s,r,i=G.min(),o=G.min(),a=We.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Bn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(e){this.ie=e}}function vb(t){const e=ub({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Tc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(){this.Je=new _b}addToCollectionParentIndex(e,n){return this.Je.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(gn.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(gn.min())}updateCollectionGroup(e,n,s){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class _b{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new ke(ge.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ke(ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Ds(0)}static vn(){return new Ds(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(){this.changes=new js(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ve.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?b.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&hr(s.mutation,r,st.empty(),Ae.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ee()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ee()){const r=Mn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=sr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Mn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ee()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Wt();const o=fr(),a=fr();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof _n)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),hr(l.mutation,u,l.mutation.getFieldMask(),Ae.now())):o.set(u.key,st.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new Ib(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=fr();let r=new Ne((o,a)=>o-a),i=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||st.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(r.get(a.batchId)||ee()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Kg();l.forEach(d=>{if(!i.has(d)){const g=$g(n.get(d),s.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return b.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return $.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Ng(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):b.resolve(Mn());let a=-1,c=i;return o.next(u=>b.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?b.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,ee())).next(l=>({batchId:a,changes:Hg(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new $(n)).next(s=>{let r=sr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=sr();return this.indexManager.getCollectionParents(e,r).next(o=>b.forEach(o,a=>{const c=function(u,l){return new oi(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,Ve.newInvalidDocument(u)))});let o=sr();return i.forEach((a,c)=>{const u=r.get(a);u!==void 0&&hr(u.mutation,c,st.empty(),Ae.now()),ea(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return b.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:xt(s.createTime)}),b.resolve()}getNamedQuery(e,n){return b.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:vb(s.bundledQuery),readTime:xt(s.readTime)}}(n)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(){this.overlays=new Ne($.comparator),this.es=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Mn();return b.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.oe(e,n,i)}),b.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),b.resolve()}getOverlaysForCollection(e,n,s){const r=Mn(),i=n.length+1,o=new $(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return b.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Ne((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=Mn(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Mn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return b.resolve(a)}oe(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new mb(n,s));let i=this.es.get(n);i===void 0&&(i=ee(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(){this.ns=new ke(Oe.ss),this.rs=new ke(Oe.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new Oe(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new Oe(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new $(new ge([])),s=new Oe(n,e),r=new Oe(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new $(new ge([])),s=new Oe(n,e),r=new Oe(n,e+1);let i=ee();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Oe(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Oe{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return $.comparator(e.key,n.key)||oe(e._s,n._s)}static os(e,n){return oe(e._s,n._s)||$.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new ke(Oe.ss)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new gb(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new Oe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return b.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Oe(n,0),r=new Oe(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),b.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ke(oe);return n.forEach(r=>{const i=new Oe(r,0),o=new Oe(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),b.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;$.isDocumentKey(i)||(i=i.child(""));const o=new Oe(new $(i),0);let a=new ke(oe);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c._s)),!0)},o),b.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){fe(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return b.forEach(n.mutations,r=>{const i=new Oe(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new Oe(n,0),r=this.gs.firstAfterOrEqual(s);return b.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e){this.Es=e,this.docs=new Ne($.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return b.resolve(s?s.document.mutableCopy():Ve.newInvalidDocument(n))}getEntries(e,n){let s=Wt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Ve.newInvalidDocument(r))}),b.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Wt();const o=n.path,a=new $(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||yT(mT(l),s)<=0||(r.has(l.key)||ea(n,l))&&(i=i.insert(l.key,l.mutableCopy()))}return b.resolve(i)}getAllFromCollectionGroup(e,n,s,r){K()}As(e,n){return b.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new kb(this)}getSize(e){return b.resolve(this.size)}}class kb extends Eb{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),b.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e){this.persistence=e,this.Rs=new js(n=>Fu(n),Vu),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Ku,this.targetCount=0,this.vs=Ds.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),b.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Ds(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Dn(n),b.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),b.waitFor(i).next(()=>r)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return b.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),b.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),b.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),b.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return b.resolve(s)}containsKey(e,n){return b.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Lu(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new Rb(this),this.indexManager=new wb,this.remoteDocumentCache=function(s){return new Ab(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new yb(n),this.Ns=new bb(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Sb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new Cb(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){F("MemoryPersistence","Starting transaction:",e);const r=new Nb(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,n){return b.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class Nb extends wT{constructor(e){super(),this.currentSequenceNumber=e}}class zu{constructor(e){this.persistence=e,this.Fs=new Ku,this.$s=null}static Bs(e){return new zu(e)}get Ls(){if(this.$s)return this.$s;throw K()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),b.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),b.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Ls,s=>{const r=$.fromPath(s);return this.qs(e,r).next(i=>{i||n.removeEntry(r,G.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return b.or([()=>b.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=ee(),r=ee();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Wu(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Mi(e,n))}ki(e,n){if(Kh(n))return b.resolve(null);let s=zt(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Tc(n,null,"F"),s=zt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ee(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.Fi(n,a);return this.$i(n,u,o,c.readTime)?this.ki(e,Tc(n,null,"F")):this.Bi(e,u,n,c)}))})))}Oi(e,n,s,r){return Kh(n)||r.isEqual(G.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(e,n):(Mh()<=re.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),bc(n)),this.Bi(e,o,n,gT(r,-1)))})}Fi(e,n){let s=new ke(xg(e));return n.forEach((r,i)=>{ea(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,n){return Mh()<=re.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",bc(n)),this.Ni.getDocumentsMatchingQuery(e,n,gn.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.yt=r,this.qi=new Ne(oe),this.Ui=new js(i=>Fu(i),Vu),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Tb(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function Pb(t,e,n,s){return new xb(t,e,n,s)}async function tm(t,e){const n=Q(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ee();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function Mb(t,e){const n=Q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=b.resolve();return h.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(y=>{const I=c.docVersions.get(g);fe(I!==null),y.version.compareTo(I)<0&&(l.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),u.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ee();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function nm(t){const e=Q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function Lb(t,e){const n=Q(t),s=e.snapshotVersion;let r=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.qi;const a=[];e.targetChanges.forEach((l,h)=>{const d=r.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,l.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(We.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,s)),r=r.insert(h,g),function(y,I,k){return y.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(d,g,l)&&a.push(n.Cs.updateTargetData(i,g))});let c=Wt(),u=ee();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(Ub(i,o,e.documentUpdates).next(l=>{c=l.Wi,u=l.zi})),!s.isEqual(G.min())){const l=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return b.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.qi=r,i))}function Ub(t,e,n){let s=ee(),r=ee();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Wt();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(G.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):F("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function Fb(t,e){const n=Q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Vb(t,e){const n=Q(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,b.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new Bn(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.qi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(e,s.targetId)),s})}async function kc(t,e,n){const s=Q(t),r=s.qi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!ii(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(r.target)}function ef(t,e,n){const s=Q(t);let r=G.min(),i=ee();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=Q(a),h=l.Ui.get(u);return h!==void 0?b.resolve(l.qi.get(h)):l.Cs.getTargetData(c,u)}(s,o,zt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:G.min(),n?i:ee())).next(a=>($b(s,MT(e),a),{documents:a,Hi:i})))}function $b(t,e,n){let s=t.Ki.get(e)||G.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class tf{constructor(){this.activeTargetIds=zg()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Bb{constructor(){this.Lr=new tf,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new tf,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,r,i){const o=this.ho(e,n);F("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>(F("RestConnection","Received: ",c),c),c=>{throw yc("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,r,i,o){return this.ao(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Bs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=qb[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new iT;a.setWithCredentials(!0),a.listenOnce(nT.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ma.NO_ERROR:const u=a.getResponseJson();F("Connection","XHR received:",JSON.stringify(u)),i(u);break;case Ma.TIMEOUT:F("Connection",'RPC "'+e+'" timed out'),o(new x(_.DEADLINE_EXCEEDED,"Request time out"));break;case Ma.HTTP_ERROR:const l=a.getStatus();if(F("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const g=function(y){const I=y.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(I)>=0?I:_.UNKNOWN}(d.status);o(new x(g,d.message))}else o(new x(_.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new x(_.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{F("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=eT(),o=tT(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new rT({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");F("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const d=new Hb({Hr:y=>{h?F("Connection","Not sending because WebChannel is closed:",y):(l||(F("Connection","Opening WebChannel transport."),u.open(),l=!0),F("Connection","WebChannel sending:",y),u.send(y))},Jr:()=>u.close()}),g=(y,I,k)=>{y.listen(I,R=>{try{k(R)}catch(P){setTimeout(()=>{throw P},0)}})};return g(u,bi.EventType.OPEN,()=>{h||F("Connection","WebChannel transport opened.")}),g(u,bi.EventType.CLOSE,()=>{h||(h=!0,F("Connection","WebChannel transport closed"),d.io())}),g(u,bi.EventType.ERROR,y=>{h||(h=!0,yc("Connection","WebChannel transport errored:",y),d.io(new x(_.UNAVAILABLE,"The operation could not be completed")))}),g(u,bi.EventType.MESSAGE,y=>{var I;if(!h){const k=y.data[0];fe(!!k);const R=k,P=R.error||((I=R[0])===null||I===void 0?void 0:I.error);if(P){F("Connection","WebChannel received error:",P);const U=P.status;let X=function(Ce){const Ue=Ie[Ce];if(Ue!==void 0)return jg(Ue)}(U),me=P.message;X===void 0&&(X=_.INTERNAL,me="Unknown error status: "+U+" with message "+P.message),h=!0,d.io(new x(X,me)),u.close()}else F("Connection","WebChannel received:",k),d.ro(k)}}),g(o,sT.STAT_EVENT,y=>{y.stat===xh.PROXY?F("Connection","Detected buffering proxy"):y.stat===xh.NOPROXY&&F("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Ua(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(t){return new tb(t,!0)}class sm{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&F("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new sm(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(Kt(n.toString()),Kt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new x(_.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class zb extends rm{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.yt=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=rb(this.yt,e),s=function(r){if(!("targetChange"in r))return G.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?G.min():i.readTime?xt(i.readTime):G.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=Ac(this.yt),n.addTarget=function(r,i){let o;const a=i.target;return o=Ec(a)?{documents:ab(r,a)}:{query:cb(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Qg(r,i.resumeToken):i.snapshotVersion.compareTo(G.min())>0&&(o.readTime=yo(r,i.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=lb(this.yt,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=Ac(this.yt),n.removeTarget=e,this.Bo(n)}}class Wb extends rm{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=ob(e.writeResults,e.commitTime),s=xt(e.commitTime);return this.listener.Zo(s,n)}return fe(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Ac(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>ib(this.yt,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.yt=r,this.nu=!1}su(){if(this.nu)throw new x(_.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new x(_.UNKNOWN,r.toString())})}_o(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new x(_.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class Qb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Kt(n),this.ou=!1):F("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{Zn(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Q(a);c._u.add(4),await ui(c),c.gu.set("Unknown"),c._u.delete(4),await ia(c)}(this))})}),this.gu=new Qb(s,r)}}async function ia(t){if(Zn(t))for(const e of t.wu)await e(!0)}async function ui(t){for(const e of t.wu)await e(!1)}function im(t,e){const n=Q(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Yu(n)?Qu(n):qs(n).ko()&&Gu(n,e))}function om(t,e){const n=Q(t),s=qs(n);n.du.delete(e),s.ko()&&am(n,e),n.du.size===0&&(s.ko()?s.Fo():Zn(n)&&n.gu.set("Unknown"))}function Gu(t,e){t.yu.Ot(e.targetId),qs(t).zo(e)}function am(t,e){t.yu.Ot(e),qs(t).Ho(e)}function Qu(t){t.yu=new XT({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),qs(t).start(),t.gu.uu()}function Yu(t){return Zn(t)&&!qs(t).No()&&t.du.size>0}function Zn(t){return Q(t)._u.size===0}function cm(t){t.yu=void 0}async function Xb(t){t.du.forEach((e,n)=>{Gu(t,e)})}async function Jb(t,e){cm(t),Yu(t)?(t.gu.hu(e),Qu(t)):t.gu.set("Unknown")}async function Zb(t,e,n){if(t.gu.set("Online"),e instanceof Gg&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await vo(t,s)}else if(e instanceof $i?t.yu.Kt(e):e instanceof Wg?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(G.min()))try{const s=await nm(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.Zt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.du.get(c);u&&r.du.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(We.EMPTY_BYTE_STRING,c.snapshotVersion)),am(r,a);const u=new Bn(c.target,a,1,c.sequenceNumber);Gu(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){F("RemoteStore","Failed to raise snapshot:",s),await vo(t,s)}}async function vo(t,e,n){if(!ii(e))throw e;t._u.add(1),await ui(t),t.gu.set("Offline"),n||(n=()=>nm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await ia(t)})}function um(t,e){return e().catch(n=>vo(t,n,e))}async function oa(t){const e=Q(t),n=yn(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;eS(e);)try{const r=await Fb(e.localStore,s);if(r===null){e.fu.length===0&&n.Fo();break}s=r.batchId,tS(e,r)}catch(r){await vo(e,r)}lm(e)&&hm(e)}function eS(t){return Zn(t)&&t.fu.length<10}function tS(t,e){t.fu.push(e);const n=yn(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function lm(t){return Zn(t)&&!yn(t).No()&&t.fu.length>0}function hm(t){yn(t).start()}async function nS(t){yn(t).eu()}async function sS(t){const e=yn(t);for(const n of t.fu)e.Xo(n.mutations)}async function rS(t,e,n){const s=t.fu.shift(),r=Hu.from(s,e,n);await um(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await oa(t)}async function iS(t,e){e&&yn(t).Yo&&await async function(n,s){if(r=s.code,zT(r)&&r!==_.ABORTED){const i=n.fu.shift();yn(n).Mo(),await um(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await oa(n)}var r}(t,e),lm(t)&&hm(t)}async function sf(t,e){const n=Q(t);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const s=Zn(n);n._u.add(3),await ui(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await ia(n)}async function oS(t,e){const n=Q(t);e?(n._u.delete(2),await ia(n)):e||(n._u.add(2),await ui(n),n.gu.set("Unknown"))}function qs(t){return t.pu||(t.pu=function(e,n,s){const r=Q(e);return r.su(),new zb(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:Xb.bind(null,t),Zr:Jb.bind(null,t),Wo:Zb.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Yu(t)?Qu(t):t.gu.set("Unknown")):(await t.pu.stop(),cm(t))})),t.pu}function yn(t){return t.Iu||(t.Iu=function(e,n,s){const r=Q(e);return r.su(),new Wb(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:nS.bind(null,t),Zr:iS.bind(null,t),tu:sS.bind(null,t),Zo:rS.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await oa(t)):(await t.Iu.stop(),t.fu.length>0&&(F("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new fn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Xu(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ju(t,e){if(Kt("AsyncQueue",`${e}: ${t}`),ii(t))return new x(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e){this.comparator=e?(n,s)=>e(n,s)||$.comparator(n.key,s.key):(n,s)=>$.comparator(n.key,s.key),this.keyedMap=sr(),this.sortedSet=new Ne(this.comparator)}static emptySet(e){return new _s(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof _s)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new _s;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(){this.Tu=new Ne($.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):K():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Ns{constructor(e,n,s,r,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ns(e,n,_s.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(){this.Au=void 0,this.listeners=[]}}class cS{constructor(){this.queries=new js(e=>Og(e),Zo),this.onlineState="Unknown",this.Ru=new Set}}async function fm(t,e){const n=Q(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new aS),r)try{i.Au=await n.onListen(s)}catch(o){const a=Ju(o,`Initialization of query '${bc(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&Zu(n)}async function dm(t,e){const n=Q(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function uS(t,e){const n=Q(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&Zu(n)}function lS(t,e,n){const s=Q(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Zu(t){t.Ru.forEach(e=>{e.next()})}class pm{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Ns(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Ns.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e){this.key=e}}class mm{constructor(e){this.key=e}}class hS{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=ee(),this.mutatedKeys=ee(),this.Gu=xg(e),this.Qu=new _s(this.Gu)}get ju(){return this.qu}Wu(e,n){const s=n?n.zu:new rf,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,h)=>{const d=r.get(l),g=ea(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),I=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let k=!1;d&&g?d.data.isEqual(g.data)?y!==I&&(s.track({type:3,doc:g}),k=!0):this.Hu(d,g)||(s.track({type:2,doc:g}),k=!0,(c&&this.Gu(g,c)>0||u&&this.Gu(g,u)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),k=!0):d&&!g&&(s.track({type:1,doc:d}),k=!0,(c||u)&&(a=!0)),k&&(g?(o=o.add(g),i=I?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((u,l)=>function(h,d){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return g(h)-g(d)}(u.type,l.type)||this.Gu(u.doc,l.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new Ns(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new rf,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=ee(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new mm(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new gm(s))}),n}tc(e){this.qu=e.Hi,this.Ku=ee();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Ns.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class fS{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class dS{constructor(e){this.key=e,this.nc=!1}}class pS{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new js(a=>Og(a),Zo),this.rc=new Map,this.oc=new Set,this.uc=new Ne($.comparator),this.cc=new Map,this.ac=new Ku,this.hc={},this.lc=new Map,this.fc=Ds.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function gS(t,e){const n=SS(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await Vb(n.localStore,zt(e));n.isPrimaryClient&&im(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await mS(n,e,s,a==="current",o.resumeToken)}return r}async function mS(t,e,n,s,r){t._c=(h,d,g)=>async function(y,I,k,R){let P=I.view.Wu(k);P.$i&&(P=await ef(y.localStore,I.query,!1).then(({documents:me})=>I.view.Wu(me,P)));const U=R&&R.targetChanges.get(I.targetId),X=I.view.applyChanges(P,y.isPrimaryClient,U);return af(y,I.targetId,X.Xu),X.snapshot}(t,h,d,g);const i=await ef(t.localStore,e,!0),o=new hS(e,i.Hi),a=o.Wu(i.documents),c=ci.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(a,t.isPrimaryClient,c);af(t,n,u.Xu);const l=new fS(e,n,o);return t.ic.set(e,l),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function yS(t,e){const n=Q(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!Zo(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await kc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),om(n.remoteStore,s.targetId),Rc(n,s.targetId)}).catch(ri)):(Rc(n,s.targetId),await kc(n.localStore,s.targetId,!0))}async function vS(t,e,n){const s=CS(t);try{const r=await function(i,o){const a=Q(i),c=Ae.now(),u=o.reduce((d,g)=>d.add(g.key),ee());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=Wt(),y=ee();return a.Gi.getEntries(d,u).next(I=>{g=I,g.forEach((k,R)=>{R.isValidDocument()||(y=y.add(k))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(I=>{l=I;const k=[];for(const R of o){const P=qT(R,l.get(R.key).overlayedDocument);P!=null&&k.push(new _n(R.key,P,Rg(P.value.mapValue),wt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,k,o)}).next(I=>{h=I;const k=I.applyToLocalDocumentSet(l,y);return a.documentOverlayCache.saveOverlays(d,I.batchId,k)})}).then(()=>({batchId:h.batchId,changes:Hg(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new Ne(oe)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(s,r.batchId,n),await li(s,r.changes),await oa(s.remoteStore)}catch(r){const i=Ju(r,"Failed to persist write");n.reject(i)}}async function ym(t,e){const n=Q(t);try{const s=await Lb(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(fe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?fe(o.nc):r.removedDocuments.size>0&&(fe(o.nc),o.nc=!1))}),await li(n,s,e)}catch(s){await ri(s)}}function of(t,e,n){const s=Q(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=Q(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.bu(o)&&(c=!0)}),c&&Zu(a)}(s.eventManager,e),r.length&&s.sc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function wS(t,e,n){const s=Q(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new Ne($.comparator);o=o.insert(i,Ve.newNoDocument(i,G.min()));const a=ee().add(i),c=new sa(G.min(),new Map,new ke(oe),o,a);await ym(s,c),s.uc=s.uc.remove(i),s.cc.delete(e),el(s)}else await kc(s.localStore,e,!1).then(()=>Rc(s,e,n)).catch(ri)}async function _S(t,e){const n=Q(t),s=e.batch.batchId;try{const r=await Mb(n.localStore,e);wm(n,s,null),vm(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await li(n,r)}catch(r){await ri(r)}}async function ES(t,e,n){const s=Q(t);try{const r=await function(i,o){const a=Q(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(fe(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);wm(s,e,n),vm(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await li(s,r)}catch(r){await ri(r)}}function vm(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function wm(t,e,n){const s=Q(t);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.hc[s.currentUser.toKey()]=r}}function Rc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||_m(t,s)})}function _m(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(om(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),el(t))}function af(t,e,n){for(const s of n)s instanceof gm?(t.ac.addReference(s.key,e),IS(t,s)):s instanceof mm?(F("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||_m(t,s.key)):K()}function IS(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(F("SyncEngine","New document in limbo: "+n),t.oc.add(s),el(t))}function el(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new $(ge.fromString(e)),s=t.fc.next();t.cc.set(s,new dS(n)),t.uc=t.uc.insert(n,s),im(t.remoteStore,new Bn(zt($u(n.path)),s,2,Lu.at))}}async function li(t,e,n){const s=Q(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const l=Wu.Ci(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,c){const u=Q(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>b.forEach(c,h=>b.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>b.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!ii(l))throw l;F("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.qi.get(h),g=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(g);u.qi=u.qi.insert(h,y)}}}(s.localStore,i))}async function TS(t,e){const n=Q(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const s=await tm(n.localStore,e);n.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new x(_.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await li(n,s.ji)}}function bS(t,e){const n=Q(t),s=n.cc.get(e);if(s&&s.nc)return ee().add(s.key);{let r=ee();const i=n.rc.get(e);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function SS(t){const e=Q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ym.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wS.bind(null,e),e.sc.Wo=uS.bind(null,e.eventManager),e.sc.wc=lS.bind(null,e.eventManager),e}function CS(t){const e=Q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=_S.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ES.bind(null,e),e}class AS{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=ra(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return Pb(this.persistence,new Ob,e.initialUser,this.yt)}yc(e){return new Db(zu.Bs,this.yt)}gc(e){return new Bb}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class kS{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>of(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=TS.bind(null,this.syncEngine),await oS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new cS}createDatastore(e){const n=ra(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new Kb(r));var r;return function(i,o,a,c){return new Gb(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>of(this.syncEngine,a,0),o=nf.C()?new nf:new jb,new Yb(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,u){const l=new pS(s,r,i,o,a,c);return u&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Q(e);F("RemoteStore","RemoteStore shutting down."),n._u.add(5),await ui(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(t,e,n){if(!n)throw new x(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function RS(t,e,n,s){if(e===!0&&s===!0)throw new x(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function cf(t){if(!$.isDocumentKey(t))throw new x(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function uf(t){if($.isDocumentKey(t))throw new x(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function aa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function Pt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new x(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=aa(t);throw new x(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf=new Map;class hf{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new x(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,RS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new x(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new x(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hf(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new oT;switch(n.type){case"gapi":const s=n.client;return new lT(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new x(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=lf.get(e);n&&(F("ComponentProvider","Removing Datastore"),lf.delete(e),n.terminate())}(this),Promise.resolve()}}function DS(t,e,n,s={}){var r;const i=(t=Pt(t,ca))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&yc("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Fe.MOCK_USER;else{o=Mw(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new x(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Fe(c)}t._authCredentials=new aT(new vg(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new et(this.firestore,e,this._key)}}class es{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new es(this.firestore,e,this._query)}}class dn extends es{constructor(e,n,s){super(e,n,$u(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new et(this.firestore,null,new $(e))}withConverter(e){return new dn(this.firestore,e,this._path)}}function Hs(t,e,...n){if(t=De(t),Em("collection","path",e),t instanceof ca){const s=ge.fromString(e,...n);return uf(s),new dn(t,null,s)}{if(!(t instanceof et||t instanceof dn))throw new x(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ge.fromString(e,...n));return uf(s),new dn(t.firestore,null,s)}}function tl(t,e,...n){if(t=De(t),arguments.length===1&&(e=wg.R()),Em("doc","path",e),t instanceof ca){const s=ge.fromString(e,...n);return cf(s),new et(t,null,new $(s))}{if(!(t instanceof et||t instanceof dn))throw new x(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ge.fromString(e,...n));return cf(s),new et(t.firestore,t instanceof dn?t.converter:null,new $(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Kt("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Fe.UNAUTHENTICATED,this.clientId=wg.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{F("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(F("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Ju(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function OS(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await tm(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function xS(t,e){t.asyncQueue.verifyOperationInProgress();const n=await PS(t);F("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>sf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>sf(e.remoteStore,i)),t.onlineComponents=e}async function PS(t){return t.offlineComponents||(F("FirestoreClient","Using default OfflineComponentProvider"),await OS(t,new AS)),t.offlineComponents}async function Tm(t){return t.onlineComponents||(F("FirestoreClient","Using default OnlineComponentProvider"),await xS(t,new kS)),t.onlineComponents}function MS(t){return Tm(t).then(e=>e.syncEngine)}async function Dc(t){const e=await Tm(t),n=e.eventManager;return n.onListen=gS.bind(null,e.syncEngine),n.onUnlisten=yS.bind(null,e.syncEngine),n}function LS(t,e,n={}){const s=new fn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new Im({next:h=>{i.enqueueAndForget(()=>dm(r,l)),h.fromCache&&a.source==="server"?c.reject(new x(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new pm(o,u,{includeMetadataChanges:!0,Nu:!0});return fm(r,l)}(await Dc(t),t.asyncQueue,e,n,s)),s.promise}class US{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new sm(this,"async_queue_retry"),this.Wc=()=>{const n=Ua();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Ua();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=Ua();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new fn;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!ii(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Kt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const r=Xu.createAndSchedule(this,e,n,s,i=>this.Yc(i));return this.Uc.push(r),r}zc(){this.Kc&&K()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function ff(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Qn extends ca{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new US,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||bm(this),this._firestoreClient.terminate()}}function FS(t,e){const n=typeof t=="object"?t:Ud(),s=typeof t=="string"?t:e||"(default)",r=su(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Ow("firestore");i&&DS(r,...i)}return r}function nl(t){return t._firestoreClient||bm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function bm(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new _T(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new NS(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Os(We.fromBase64String(e))}catch(n){throw new x(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Os(We.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new x(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new x(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new x(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS=/^__.*__$/;class $S{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new _n(e,this.data,this.fieldMask,n,this.fieldTransforms):new ai(e,this.data,n,this.fieldTransforms)}}class Sm{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new _n(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Cm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class il{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new il(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.ua(e),r}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return wo(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Cm(this.sa)&&VS.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class BS{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=s||ra(e)}da(e,n,s,r=!1){return new il({sa:e,methodName:n,fa:s,path:Be.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function ol(t){const e=t._freezeSettings(),n=ra(t._databaseId);return new BS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function jS(t,e,n,s,r,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,r);al("Data must be an object, but it was:",o,s);const a=Am(s,o);let c,u;if(i.merge)c=new st(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=Nc(e,h,n);if(!o.contains(d))throw new x(_.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Rm(l,d)||l.push(d)}c=new st(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new $S(new Ze(a),c,u)}class la extends sl{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof la}}function qS(t,e,n,s){const r=t.da(1,e,n);al("Data must be an object, but it was:",r,s);const i=[],o=Ze.empty();Jn(s,(c,u)=>{const l=cl(e,c,n);u=De(u);const h=r.ca(l);if(u instanceof la)i.push(l);else{const d=hi(u,h);d!=null&&(i.push(l),o.set(l,d))}});const a=new st(i);return new Sm(o,a,r.fieldTransforms)}function HS(t,e,n,s,r,i){const o=t.da(1,e,n),a=[Nc(e,s,n)],c=[r];if(i.length%2!=0)throw new x(_.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Nc(e,i[d])),c.push(i[d+1]);const u=[],l=Ze.empty();for(let d=a.length-1;d>=0;--d)if(!Rm(u,a[d])){const g=a[d];let y=c[d];y=De(y);const I=o.ca(g);if(y instanceof la)u.push(g);else{const k=hi(y,I);k!=null&&(u.push(g),l.set(g,k))}}const h=new st(u);return new Sm(l,h,o.fieldTransforms)}function KS(t,e,n,s=!1){return hi(n,t.da(s?4:3,e))}function hi(t,e){if(km(t=De(t)))return al("Unsupported field value:",e,t),Am(t,e);if(t instanceof sl)return function(n,s){if(!Cm(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=hi(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=De(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return UT(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Ae.fromDate(n);return{timestampValue:yo(s.yt,r)}}if(n instanceof Ae){const r=new Ae(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:yo(s.yt,r)}}if(n instanceof rl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Os)return{bytesValue:Qg(s.yt,n._byteString)};if(n instanceof et){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:qu(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${aa(n)}`)}(t,e)}function Am(t,e){const n={};return _g(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Jn(t,(s,r)=>{const i=hi(r,e.ra(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function km(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ae||t instanceof rl||t instanceof Os||t instanceof et||t instanceof sl)}function al(t,e,n){if(!km(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=aa(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function Nc(t,e,n){if((e=De(e))instanceof ua)return e._internalPath;if(typeof e=="string")return cl(t,e);throw wo("Field path arguments must be of type string or ",t,!1,void 0,n)}const zS=new RegExp("[~\\*/\\[\\]]");function cl(t,e,n){if(e.search(zS)>=0)throw wo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ua(...e.split("."))._internalPath}catch{throw wo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function wo(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new x(_.INVALID_ARGUMENT,a+t+c)}function Rm(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new WS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ul("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class WS extends Dm{data(){return super.data()}}function ul(t,e){return typeof e=="string"?cl(t,e):e instanceof ua?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new x(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ll{}class GS extends ll{}function hl(t,e,...n){let s=[];e instanceof ll&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof dl).length,o=r.filter(a=>a instanceof ha).length;if(i>1||i>0&&o>0)throw new x(_.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class ha extends GS{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new ha(e,n,s)}_apply(e){const n=this._parse(e);return Om(e._query,n),new es(e.firestore,e.converter,Ic(e._query,n))}_parse(e){const n=ol(e.firestore);return function(r,i,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new x(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){pf(l,u);const d=[];for(const g of l)d.push(df(a,r,g));h={arrayValue:{values:d}}}else h=df(a,r,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||pf(l,u),h=KS(o,i,l,u==="in"||u==="not-in");return Se.create(c,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function fl(t,e,n){const s=e,r=ul("where",t);return ha._create(r,s,n)}class dl extends ll{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new dl(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:_t.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)Om(i,a),i=Ic(i,a)}(e._query,n),new es(e.firestore,e.converter,Ic(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function df(t,e,n){if(typeof(n=De(n))=="string"){if(n==="")throw new x(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ng(e)&&n.indexOf("/")!==-1)throw new x(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(ge.fromString(n));if(!$.isDocumentKey(s))throw new x(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Fh(t,new $(s))}if(n instanceof et)return Fh(t,n._key);throw new x(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${aa(n)}.`)}function pf(t,e){if(!Array.isArray(t)||t.length===0)throw new x(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new x(_.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Om(t,e){if(e.isInequality()){const s=Bu(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new x(_.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=Dg(t);i!==null&&QS(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new x(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new x(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function QS(t,e,n){if(!n.isEqual(e))throw new x(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class YS{convertValue(e,n="none"){switch(Gn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Te(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(As(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){const s={};return Jn(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new rl(Te(e.latitude),Te(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Ig(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(xr(e));default:return null}}convertTimestamp(e){const n=mn(e);return new Ae(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ge.fromString(e);fe(em(s));const r=new Or(s.get(1),s.get(3)),i=new $(s.popFirst(5));return r.isEqual(n)||Kt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XS(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xm extends Dm{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Bi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(ul("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Bi extends xm{data(e={}){return super.data(e)}}class Pm{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new rr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Bi(this._firestore,this._userDataWriter,s.key,s,new rr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new x(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Bi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new rr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Bi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new rr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:JS(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function JS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}class pl extends YS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Os(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new et(this.firestore,null,n)}}function fa(t){t=Pt(t,es);const e=Pt(t.firestore,Qn),n=nl(e),s=new pl(e);return Nm(t._query),LS(n,t._query).then(r=>new Pm(e,s,t,r))}function Mm(t,e,n,...s){t=Pt(t,et);const r=Pt(t.firestore,Qn),i=ol(r);let o;return o=typeof(e=De(e))=="string"||e instanceof ua?HS(i,"updateDoc",t._key,e,n,s):qS(i,"updateDoc",t._key,e),gl(r,[o.toMutation(t._key,wt.exists(!0))])}function Lm(t){return gl(Pt(t.firestore,Qn),[new ju(t._key,wt.none())])}function ZS(t,e){const n=Pt(t.firestore,Qn),s=tl(t),r=XS(t.converter,e);return gl(n,[jS(ol(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,wt.exists(!1))]).then(()=>s)}function eC(t,...e){var n,s,r;t=De(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ff(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(ff(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,u,l;if(t instanceof et)u=Pt(t.firestore,Qn),l=$u(t._key.path),c={next:h=>{e[o]&&e[o](tC(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Pt(t,es);u=Pt(h.firestore,Qn),l=h._query;const d=new pl(u);c={next:g=>{e[o]&&e[o](new Pm(u,d,h,g))},error:e[o+1],complete:e[o+2]},Nm(t._query)}return function(h,d,g,y){const I=new Im(y),k=new pm(d,I,g);return h.asyncQueue.enqueueAndForget(async()=>fm(await Dc(h),k)),()=>{I.bc(),h.asyncQueue.enqueueAndForget(async()=>dm(await Dc(h),k))}}(nl(u),l,a,c)}function gl(t,e){return function(n,s){const r=new fn;return n.asyncQueue.enqueueAndForget(async()=>vS(await MS(n),s,r)),r.promise}(nl(t),e)}function tC(t,e,n){const s=n.docs.get(e._key),r=new pl(t);return new xm(t,r,e._key,s,new rr(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Bs=n})(jr),bs(new qn("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Qn(new cT(n.getProvider("auth-internal")),new fT(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new x(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Or(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),hn(Ph,"3.8.3",t),hn(Ph,"3.8.3","esm2017")})();const nC={apiKey:"AIzaSyBHMpeiDdc3nTXz_xXhMTAchwLPAT5B54E",authDomain:"easy-automation-e4326.firebaseapp.com",projectId:"easy-automation-e4326",storageBucket:"easy-automation-e4326.appspot.com",messagingSenderId:"545105394712",appId:"1:545105394712:web:fe8a4128d5efe110ed576d",measurementId:"G-Q9P0VHY45S"},sC=Ld(nC),rC=sI(sC),En=FS(),LA=t=>fa(Hs(En,t)),UA=async(t,e,n)=>{const s=await fa(hl(Hs(En,t),fl(e,"==",n)));return s.empty?[]:s.docs.map(r=>r.data())},FA=async(t,e,n,s)=>{(await fa(hl(Hs(En,t),fl(e,"==",n)))).forEach(i=>{Mm(i.ref,s)})},VA=async(t,e,n)=>{(await fa(hl(Hs(En,t),fl(e,"==",n)))).forEach(r=>{Lm(r.ref)})},$A=(t,e)=>eC(Hs(En,t),e),BA=(t,e)=>ZS(Hs(En,t),e),jA=(t,e)=>Lm(tl(En,t,e)),qA=(t,e,n)=>Mm(tl(En,t,e),n),iC="modulepreload",oC=function(t){return"/Easy-Automation-Dashboard/"+t},gf={},Ys=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=oC(i),i in gf)return;gf[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let l=r.length-1;l>=0;l--){const h=r[l];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":iC,o||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),o)return new Promise((l,h)=>{u.addEventListener("load",l),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const as=typeof window<"u";function aC(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ae=Object.assign;function Fa(t,e){const n={};for(const s in e){const r=e[s];n[s]=Et(r)?r.map(t):t(r)}return n}const dr=()=>{},Et=Array.isArray,cC=/\/$/,uC=t=>t.replace(cC,"");function Va(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=dC(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function lC(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function mf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function hC(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&xs(e.matched[s],n.matched[r])&&Um(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function xs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Um(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!fC(t[n],e[n]))return!1;return!0}function fC(t,e){return Et(t)?yf(t,e):Et(e)?yf(e,t):t===e}function yf(t,e){return Et(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function dC(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Ur;(function(t){t.pop="pop",t.push="push"})(Ur||(Ur={}));var pr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(pr||(pr={}));function pC(t){if(!t)if(as){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),uC(t)}const gC=/^[^#]+#/;function mC(t,e){return t.replace(gC,"#")+e}function yC(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const da=()=>({left:window.pageXOffset,top:window.pageYOffset});function vC(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=yC(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function vf(t,e){return(history.state?history.state.position-e:-1)+t}const Oc=new Map;function wC(t,e){Oc.set(t,e)}function _C(t){const e=Oc.get(t);return Oc.delete(t),e}let EC=()=>location.protocol+"//"+location.host;function Fm(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),mf(c,"")}return mf(n,t)+s+r}function IC(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const g=Fm(t,location),y=n.value,I=e.value;let k=0;if(d){if(n.value=g,e.value=d,o&&o===y){o=null;return}k=I?d.position-I.position:0}else s(g);r.forEach(R=>{R(n.value,y,{delta:k,type:Ur.pop,direction:k?k>0?pr.forward:pr.back:pr.unknown})})};function c(){o=n.value}function u(d){r.push(d);const g=()=>{const y=r.indexOf(d);y>-1&&r.splice(y,1)};return i.push(g),g}function l(){const{history:d}=window;d.state&&d.replaceState(ae({},d.state,{scroll:da()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function wf(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?da():null}}function TC(t){const{history:e,location:n}=window,s={value:Fm(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:EC()+t+c;try{e[l?"replaceState":"pushState"](u,"",d),r.value=u}catch(g){console.error(g),n[l?"replace":"assign"](d)}}function o(c,u){const l=ae({},e.state,wf(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,l,!0),s.value=c}function a(c,u){const l=ae({},r.value,e.state,{forward:c,scroll:da()});i(l.current,l,!0);const h=ae({},wf(s.value,c,null),{position:l.position+1},u);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function bC(t){t=pC(t);const e=TC(t),n=IC(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ae({location:"",base:t,go:s,createHref:mC.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function SC(t){return typeof t=="string"||t&&typeof t=="object"}function Vm(t){return typeof t=="string"||typeof t=="symbol"}const Zt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},$m=Symbol("");var _f;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(_f||(_f={}));function Ps(t,e){return ae(new Error,{type:t,[$m]:!0},e)}function Ut(t,e){return t instanceof Error&&$m in t&&(e==null||!!(t.type&e))}const Ef="[^/]+?",CC={sensitive:!1,strict:!1,start:!0,end:!0},AC=/[.+*?^${}()[\]/\\]/g;function kC(t,e){const n=ae({},CC,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let h=0;h<u.length;h++){const d=u[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(AC,"\\$&"),g+=40;else if(d.type===1){const{value:y,repeatable:I,optional:k,regexp:R}=d;i.push({name:y,repeatable:I,optional:k});const P=R||Ef;if(P!==Ef){g+=10;try{new RegExp(`(${P})`)}catch(X){throw new Error(`Invalid custom RegExp for param "${y}" (${P}): `+X.message)}}let U=I?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;h||(U=k&&u.length<2?`(?:/${U})`:"/"+U),k&&(U+="?"),r+=U,g+=20,k&&(g+=-8),I&&(g+=-20),P===".*"&&(g+=-50)}l.push(g)}s.push(l)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let d=1;d<l.length;d++){const g=l[d]||"",y=i[d-1];h[y.name]=g&&y.repeatable?g.split("/"):g}return h}function c(u){let l="",h=!1;for(const d of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const g of d)if(g.type===0)l+=g.value;else if(g.type===1){const{value:y,repeatable:I,optional:k}=g,R=y in u?u[y]:"";if(Et(R)&&!I)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const P=Et(R)?R.join("/"):R;if(!P)if(k)d.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);l+=P}}return l||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function RC(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function DC(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=RC(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(If(s))return 1;if(If(r))return-1}return r.length-s.length}function If(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const NC={type:0,value:""},OC=/[a-zA-Z0-9_]/;function xC(t){if(!t)return[[]];if(t==="/")return[[NC]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,u="",l="";function h(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:OC.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),r}function PC(t,e,n){const s=kC(xC(t.path),n),r=ae(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function MC(t,e){const n=[],s=new Map;e=Sf({strict:!1,end:!0,sensitive:!1},e);function r(l){return s.get(l)}function i(l,h,d){const g=!d,y=LC(l);y.aliasOf=d&&d.record;const I=Sf(e,l),k=[y];if("alias"in l){const U=typeof l.alias=="string"?[l.alias]:l.alias;for(const X of U)k.push(ae({},y,{components:d?d.record.components:y.components,path:X,aliasOf:d?d.record:y}))}let R,P;for(const U of k){const{path:X}=U;if(h&&X[0]!=="/"){const me=h.record.path,Ce=me[me.length-1]==="/"?"":"/";U.path=h.record.path+(X&&Ce+X)}if(R=PC(U,h,I),d?d.alias.push(R):(P=P||R,P!==R&&P.alias.push(R),g&&l.name&&!bf(R)&&o(l.name)),y.children){const me=y.children;for(let Ce=0;Ce<me.length;Ce++)i(me[Ce],R,d&&d.children[Ce])}d=d||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&c(R)}return P?()=>{o(P)}:dr}function o(l){if(Vm(l)){const h=s.get(l);h&&(s.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&s.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&DC(l,n[h])>=0&&(l.record.path!==n[h].record.path||!Bm(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!bf(l)&&s.set(l.record.name,l)}function u(l,h){let d,g={},y,I;if("name"in l&&l.name){if(d=s.get(l.name),!d)throw Ps(1,{location:l});I=d.record.name,g=ae(Tf(h.params,d.keys.filter(P=>!P.optional).map(P=>P.name)),l.params&&Tf(l.params,d.keys.map(P=>P.name))),y=d.stringify(g)}else if("path"in l)y=l.path,d=n.find(P=>P.re.test(y)),d&&(g=d.parse(y),I=d.record.name);else{if(d=h.name?s.get(h.name):n.find(P=>P.re.test(h.path)),!d)throw Ps(1,{location:l,currentLocation:h});I=d.record.name,g=ae({},h.params,l.params),y=d.stringify(g)}const k=[];let R=d;for(;R;)k.unshift(R.record),R=R.parent;return{name:I,path:y,params:g,matched:k,meta:FC(k)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Tf(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function LC(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:UC(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function UC(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function bf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function FC(t){return t.reduce((e,n)=>ae(e,n.meta),{})}function Sf(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Bm(t,e){return e.children.some(n=>n===t||Bm(t,n))}const jm=/#/g,VC=/&/g,$C=/\//g,BC=/=/g,jC=/\?/g,qm=/\+/g,qC=/%5B/g,HC=/%5D/g,Hm=/%5E/g,KC=/%60/g,Km=/%7B/g,zC=/%7C/g,zm=/%7D/g,WC=/%20/g;function ml(t){return encodeURI(""+t).replace(zC,"|").replace(qC,"[").replace(HC,"]")}function GC(t){return ml(t).replace(Km,"{").replace(zm,"}").replace(Hm,"^")}function xc(t){return ml(t).replace(qm,"%2B").replace(WC,"+").replace(jm,"%23").replace(VC,"%26").replace(KC,"`").replace(Km,"{").replace(zm,"}").replace(Hm,"^")}function QC(t){return xc(t).replace(BC,"%3D")}function YC(t){return ml(t).replace(jm,"%23").replace(jC,"%3F")}function XC(t){return t==null?"":YC(t).replace($C,"%2F")}function _o(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function JC(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(qm," "),o=i.indexOf("="),a=_o(o<0?i:i.slice(0,o)),c=o<0?null:_o(i.slice(o+1));if(a in e){let u=e[a];Et(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function Cf(t){let e="";for(let n in t){const s=t[n];if(n=QC(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Et(s)?s.map(i=>i&&xc(i)):[s&&xc(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function ZC(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Et(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const eA=Symbol(""),Af=Symbol(""),pa=Symbol(""),Wm=Symbol(""),Pc=Symbol("");function Xs(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function tn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Ps(4,{from:n,to:e})):h instanceof Error?a(h):SC(h)?a(Ps(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(s&&s.instances[r],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function $a(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(tA(a)){const u=(a.__vccOpts||a)[e];u&&r.push(tn(u,n,s,i,o))}else{let c=a();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=aC(u)?u.default:u;i.components[o]=l;const d=(l.__vccOpts||l)[e];return d&&tn(d,n,s,i,o)()}))}}return r}function tA(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function kf(t){const e=Dt(pa),n=Dt(Wm),s=ot(()=>e.resolve(ps(t.to))),r=ot(()=>{const{matched:c}=s.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const d=h.findIndex(xs.bind(null,l));if(d>-1)return d;const g=Rf(c[u-2]);return u>1&&Rf(l)===g&&h[h.length-1].path!==g?h.findIndex(xs.bind(null,c[u-2])):d}),i=ot(()=>r.value>-1&&iA(n.params,s.value.params)),o=ot(()=>r.value>-1&&r.value===n.matched.length-1&&Um(n.params,s.value.params));function a(c={}){return rA(c)?e[ps(t.replace)?"replace":"push"](ps(t.to)).catch(dr):Promise.resolve()}return{route:s,href:ot(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const nA=ld({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:kf,setup(t,{slots:e}){const n=Vr(kf(t)),{options:s}=Dt(pa),r=ot(()=>({[Df(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Df(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:kd("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),sA=nA;function rA(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function iA(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Et(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Rf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Df=(t,e,n)=>t??e??n,oA=ld({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Dt(Pc),r=ot(()=>t.route||s.value),i=Dt(Af,0),o=ot(()=>{let u=ps(i);const{matched:l}=r.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=ot(()=>r.value.matched[o.value]);Ri(Af,ot(()=>o.value+1)),Ri(eA,a),Ri(Pc,r);const c=Ki();return Di(()=>[c.value,a.value,t.name],([u,l,h],[d,g,y])=>{l&&(l.instances[h]=u,g&&g!==l&&u&&u===d&&(l.leaveGuards.size||(l.leaveGuards=g.leaveGuards),l.updateGuards.size||(l.updateGuards=g.updateGuards))),u&&l&&(!g||!xs(l,g)||!d)&&(l.enterCallbacks[h]||[]).forEach(I=>I(u))},{flush:"post"}),()=>{const u=r.value,l=t.name,h=a.value,d=h&&h.components[l];if(!d)return Nf(n.default,{Component:d,route:u});const g=h.props[l],y=g?g===!0?u.params:typeof g=="function"?g(u):g:null,k=kd(d,ae({},y,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return Nf(n.default,{Component:k,route:u})||k}}});function Nf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const aA=oA;function cA(t){const e=MC(t.routes,t),n=t.parseQuery||JC,s=t.stringifyQuery||Cf,r=t.history,i=Xs(),o=Xs(),a=Xs(),c=qy(Zt);let u=Zt;as&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Fa.bind(null,w=>""+w),h=Fa.bind(null,XC),d=Fa.bind(null,_o);function g(w,O){let D,V;return Vm(w)?(D=e.getRecordMatcher(w),V=O):V=w,e.addRoute(V,D)}function y(w){const O=e.getRecordMatcher(w);O&&e.removeRoute(O)}function I(){return e.getRoutes().map(w=>w.record)}function k(w){return!!e.getRecordMatcher(w)}function R(w,O){if(O=ae({},O||c.value),typeof w=="string"){const f=Va(n,w,O.path),p=e.resolve({path:f.path},O),m=r.createHref(f.fullPath);return ae(f,p,{params:d(p.params),hash:_o(f.hash),redirectedFrom:void 0,href:m})}let D;if("path"in w)D=ae({},w,{path:Va(n,w.path,O.path).path});else{const f=ae({},w.params);for(const p in f)f[p]==null&&delete f[p];D=ae({},w,{params:h(w.params)}),O.params=h(O.params)}const V=e.resolve(D,O),ne=w.hash||"";V.params=l(d(V.params));const ve=lC(s,ae({},w,{hash:GC(ne),path:V.path})),J=r.createHref(ve);return ae({fullPath:ve,hash:ne,query:s===Cf?ZC(w.query):w.query||{}},V,{redirectedFrom:void 0,href:J})}function P(w){return typeof w=="string"?Va(n,w,c.value.path):ae({},w)}function U(w,O){if(u!==w)return Ps(8,{from:O,to:w})}function X(w){return Ue(w)}function me(w){return X(ae(P(w),{replace:!0}))}function Ce(w){const O=w.matched[w.matched.length-1];if(O&&O.redirect){const{redirect:D}=O;let V=typeof D=="function"?D(w):D;return typeof V=="string"&&(V=V.includes("?")||V.includes("#")?V=P(V):{path:V},V.params={}),ae({query:w.query,hash:w.hash,params:"path"in V?{}:w.params},V)}}function Ue(w,O){const D=u=R(w),V=c.value,ne=w.state,ve=w.force,J=w.replace===!0,f=Ce(D);if(f)return Ue(ae(P(f),{state:typeof f=="object"?ae({},ne,f.state):ne,force:ve,replace:J}),O||D);const p=D;p.redirectedFrom=O;let m;return!ve&&hC(s,V,D)&&(m=Ps(16,{to:p,from:V}),Tn(V,V,!0,!1)),(m?Promise.resolve(m):It(p,V)).catch(v=>Ut(v)?Ut(v,2)?v:lt(v):le(v,p,V)).then(v=>{if(v){if(Ut(v,2))return Ue(ae({replace:J},P(v.to),{state:typeof v.to=="object"?ae({},ne,v.to.state):ne,force:ve}),O||p)}else v=Yt(p,V,!0,J,ne);return it(p,V,v),v})}function ut(w,O){const D=U(w,O);return D?Promise.reject(D):Promise.resolve()}function It(w,O){let D;const[V,ne,ve]=uA(w,O);D=$a(V.reverse(),"beforeRouteLeave",w,O);for(const f of V)f.leaveGuards.forEach(p=>{D.push(tn(p,w,O))});const J=ut.bind(null,w,O);return D.push(J),rs(D).then(()=>{D=[];for(const f of i.list())D.push(tn(f,w,O));return D.push(J),rs(D)}).then(()=>{D=$a(ne,"beforeRouteUpdate",w,O);for(const f of ne)f.updateGuards.forEach(p=>{D.push(tn(p,w,O))});return D.push(J),rs(D)}).then(()=>{D=[];for(const f of w.matched)if(f.beforeEnter&&!O.matched.includes(f))if(Et(f.beforeEnter))for(const p of f.beforeEnter)D.push(tn(p,w,O));else D.push(tn(f.beforeEnter,w,O));return D.push(J),rs(D)}).then(()=>(w.matched.forEach(f=>f.enterCallbacks={}),D=$a(ve,"beforeRouteEnter",w,O),D.push(J),rs(D))).then(()=>{D=[];for(const f of o.list())D.push(tn(f,w,O));return D.push(J),rs(D)}).catch(f=>Ut(f,8)?f:Promise.reject(f))}function it(w,O,D){for(const V of a.list())V(w,O,D)}function Yt(w,O,D,V,ne){const ve=U(w,O);if(ve)return ve;const J=O===Zt,f=as?history.state:{};D&&(V||J?r.replace(w.fullPath,ae({scroll:J&&f&&f.scroll},ne)):r.push(w.fullPath,ne)),c.value=w,Tn(w,O,D,J),lt()}let Tt;function ts(){Tt||(Tt=r.listen((w,O,D)=>{if(!fi.listening)return;const V=R(w),ne=Ce(V);if(ne){Ue(ae(ne,{replace:!0}),V).catch(dr);return}u=V;const ve=c.value;as&&wC(vf(ve.fullPath,D.delta),da()),It(V,ve).catch(J=>Ut(J,12)?J:Ut(J,2)?(Ue(J.to,V).then(f=>{Ut(f,20)&&!D.delta&&D.type===Ur.pop&&r.go(-1,!1)}).catch(dr),Promise.reject()):(D.delta&&r.go(-D.delta,!1),le(J,V,ve))).then(J=>{J=J||Yt(V,ve,!1),J&&(D.delta&&!Ut(J,8)?r.go(-D.delta,!1):D.type===Ur.pop&&Ut(J,20)&&r.go(-1,!1)),it(V,ve,J)}).catch(dr)}))}let In=Xs(),Ks=Xs(),_e;function le(w,O,D){lt(w);const V=Ks.list();return V.length?V.forEach(ne=>ne(w,O,D)):console.error(w),Promise.reject(w)}function ce(){return _e&&c.value!==Zt?Promise.resolve():new Promise((w,O)=>{In.add([w,O])})}function lt(w){return _e||(_e=!w,ts(),In.list().forEach(([O,D])=>w?D(w):O()),In.reset()),w}function Tn(w,O,D,V){const{scrollBehavior:ne}=t;if(!as||!ne)return Promise.resolve();const ve=!D&&_C(vf(w.fullPath,0))||(V||!D)&&history.state&&history.state.scroll||null;return sd().then(()=>ne(w,O,ve)).then(J=>J&&vC(J)).catch(J=>le(J,w,O))}const ht=w=>r.go(w);let Xe;const ns=new Set,fi={currentRoute:c,listening:!0,addRoute:g,removeRoute:y,hasRoute:k,getRoutes:I,resolve:R,options:t,push:X,replace:me,go:ht,back:()=>ht(-1),forward:()=>ht(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Ks.add,isReady:ce,install(w){const O=this;w.component("RouterLink",sA),w.component("RouterView",aA),w.config.globalProperties.$router=O,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>ps(c)}),as&&!Xe&&c.value===Zt&&(Xe=!0,X(r.location).catch(ne=>{}));const D={};for(const ne in Zt)D[ne]=ot(()=>c.value[ne]);w.provide(pa,O),w.provide(Wm,Vr(D)),w.provide(Pc,c);const V=w.unmount;ns.add(w),w.unmount=function(){ns.delete(w),ns.size<1&&(u=Zt,Tt&&Tt(),Tt=null,c.value=Zt,Xe=!1,_e=!1),V()}}};return fi}function rs(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function uA(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>xs(u,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>xs(u,c))||r.push(c))}return[n,s,r]}function HA(){return Dt(pa)}const Gm=cA({history:bC("/Easy-Automation-Dashboard/"),routes:[{path:"/",name:"Home",component:()=>Ys(()=>import("./Home-bb2954d2.js"),["assets/Home-bb2954d2.js","assets/Home-65568e70.css"])},{path:"/register",name:"Register",component:()=>Ys(()=>import("./Register-bd85ed3b.js"),[])},{path:"/sign-in",name:"SignIn",component:()=>Ys(()=>import("./SignIn-a7f0bcf1.js"),["assets/SignIn-a7f0bcf1.js","assets/SignIn-c38e9342.css"])},{path:"/Dashboard",name:"Dashboard",component:()=>Ys(()=>import("./DashBoard-613a52e1.js"),["assets/DashBoard-613a52e1.js","assets/DashBoard-6ea1febb.css"])},{path:"/:pathMatch(.*)*",component:()=>Ys(()=>import("./NoPageFound-24976390.js"),[])}]}),Qm=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},lA={props:{link:{type:Object,required:!0}}};function hA(t,e,n,s,r,i){const o=Wi("router-link");return Ct(),us(o,{to:n.link.to,class:"px-3 py-2 rounded-full text-blue-500 hover:bg-gray-200 hover:text-indigo-500"},{default:cs(()=>[ms(iy(n.link.name),1)]),_:1},8,["to"])}const fA=Qm(lA,[["render",hA]]);const dA=t=>(ev("data-v-52eb4737"),t=t(),tv(),t),pA={class:"shadow-lg fixed w-full z-10 top-0 bg-white"},gA={class:"container mx-auto flex items-center justify-between p-4"},mA={class:"flex items-center text-lg font-medium text-indigo-500"},yA={class:"flex items-center"},vA=dA(()=>Un("span",{class:"text-white"},[Un("i",{class:"fas fa-square fa-lg mr-2 animate-pulse"}),ms(" Dashboard ")],-1)),wA={__name:"Navbar",setup(t){const e=Ki(!1),n=Ki([{to:"/",name:"Home"}]);let s;dd(()=>{s=rC,console.log(s),qE(s,i=>{i?e.value=!0:e.value=!1})});const r=()=>{HE(s).then(()=>{Gm.push({name:"Home"})})};return(i,o)=>{const a=Wi("router-link"),c=Wi("RouterLink");return Ct(),Oi("header",pA,[Un("nav",gA,[Un("h1",mA,[qe(a,{class:"hover:text-indigo-800",to:{name:"Home"}},{default:cs(()=>[ms(" Easy Automation ")]),_:1})]),Un("div",yA,[(Ct(!0),Oi(pt,null,Iv(n.value,u=>(Ct(),us(fA,{key:u.to,link:u,class:"mx-4 text-gray-500 hover:text-indigo-500"},null,8,["link"]))),128)),e.value?wi("",!0):(Ct(),us(c,{key:0,to:{name:"SignIn"},class:"px-4 py-2 rounded-md bg-indigo-500 text-white hover:bg-indigo-600"},{default:cs(()=>[ms(" Sign In ")]),_:1})),e.value?wi("",!0):(Ct(),us(c,{key:1,to:{name:"Register"},class:"px-4 py-2 rounded-md border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white"},{default:cs(()=>[ms(" Register ")]),_:1})),e.value?(Ct(),us(a,{key:2,to:"/dashboard",class:"bg-blue-500 hover:bg-blue-600 rounded-lg p-2 transition duration-300 ease-in-out"},{default:cs(()=>[vA]),_:1})):wi("",!0),e.value?(Ct(),Oi("button",{key:3,onClick:r,class:"px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-700"}," Sign Out ")):wi("",!0)])])])}}},_A=Qm(wA,[["__scopeId","data-v-52eb4737"]]),EA={__name:"App",setup(t){return(e,n)=>{const s=Wi("router-view");return Ct(),Oi(pt,null,[qe(_A),qe(s)],64)}}};var IA=!1;/*!
  * pinia v2.0.32
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const TA=Symbol();var Of;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Of||(Of={}));function bA(){const t=dy(!0),e=t.run(()=>Ki({}));let n=[],s=[];const r=Wc({install(i){r._a=i,i.provide(TA,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!IA?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const SA=bA(),Ym=bw(EA);Ym.use(Gm).use(SA);Ym.mount("#app");export{kA as A,UA as B,BA as C,NA as D,DA as E,pt as F,sn as G,Iv as H,us as I,VA as J,FA as K,LA as L,dd as M,$A as N,ot as O,ps as P,Qm as _,Un as a,qe as b,Oi as c,Ki as d,CA as e,OA as f,sI as g,xA as h,rC as i,tv as j,ms as k,Vr as l,Uc as m,Lc as n,Ct as o,ev as p,wi as q,Wi as r,PA as s,iy as t,HA as u,AA as v,cs as w,qA as x,jA as y,RA as z};
