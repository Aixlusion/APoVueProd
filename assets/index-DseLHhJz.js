(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ls(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const K={},_e=[],Rt=()=>{},ea=()=>!1,In=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ds=t=>t.startsWith("onUpdate:"),tt=Object.assign,js=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},na=Object.prototype.hasOwnProperty,z=(t,e)=>na.call(t,e),k=Array.isArray,we=t=>Mn(t)==="[object Map]",gi=t=>Mn(t)==="[object Set]",L=t=>typeof t=="function",J=t=>typeof t=="string",Zt=t=>typeof t=="symbol",q=t=>t!==null&&typeof t=="object",bi=t=>(q(t)||L(t))&&L(t.then)&&L(t.catch),yi=Object.prototype.toString,Mn=t=>yi.call(t),sa=t=>Mn(t).slice(8,-1),vi=t=>Mn(t)==="[object Object]",Hs=t=>J(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,$e=Ls(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Nn=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ra=/-(\w)/g,vt=Nn(t=>t.replace(ra,(e,n)=>n?n.toUpperCase():"")),ia=/\B([A-Z])/g,ge=Nn(t=>t.replace(ia,"-$1").toLowerCase()),Fn=Nn(t=>t.charAt(0).toUpperCase()+t.slice(1)),Yn=Nn(t=>t?`on${Fn(t)}`:""),ce=(t,e)=>!Object.is(t,e),Gn=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},xi=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},oa=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let yr;const Rn=()=>yr||(yr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function zs(t){if(k(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=J(s)?fa(s):zs(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(J(t)||q(t))return t}const aa=/;(?![^(]*\))/g,la=/:([^]+)/,ca=/\/\*[^]*?\*\//g;function fa(t){const e={};return t.replace(ca,"").split(aa).forEach(n=>{if(n){const s=n.split(la);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function kn(t){let e="";if(J(t))e=t;else if(k(t))for(let n=0;n<t.length;n++){const s=kn(t[n]);s&&(e+=s+" ")}else if(q(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ua="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",da=Ls(ua);function _i(t){return!!t||t===""}const wi=t=>!!(t&&t.__v_isRef===!0),je=t=>J(t)?t:t==null?"":k(t)||q(t)&&(t.toString===yi||!L(t.toString))?wi(t)?je(t.value):JSON.stringify(t,Ai,2):String(t),Ai=(t,e)=>wi(e)?Ai(t,e.value):we(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[Xn(s,i)+" =>"]=r,n),{})}:gi(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Xn(n))}:Zt(e)?Xn(e):q(e)&&!k(e)&&!vi(e)?String(e):e,Xn=(t,e="")=>{var n;return Zt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ht;class pa{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ht,!e&&ht&&(this.index=(ht.scopes||(ht.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=ht;try{return ht=this,e()}finally{ht=n}}}on(){ht=this}off(){ht=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function ha(){return ht}let B;const qn=new WeakSet;class Si{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ht&&ht.active&&ht.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,qn.has(this)&&(qn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ci(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,vr(this),Oi(this);const e=B,n=wt;B=this,wt=!0;try{return this.fn()}finally{Ti(this),B=e,wt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ws(e);this.deps=this.depsTail=void 0,vr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?qn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){fs(this)&&this.run()}get dirty(){return fs(this)}}let Ei=0,We,Ve;function Ci(t,e=!1){if(t.flags|=8,e){t.next=Ve,Ve=t;return}t.next=We,We=t}function Us(){Ei++}function $s(){if(--Ei>0)return;if(Ve){let e=Ve;for(Ve=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;We;){let e=We;for(We=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Oi(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ti(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Ws(s),ma(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function fs(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Pi(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Pi(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===qe))return;t.globalVersion=qe;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!fs(t)){t.flags&=-3;return}const n=B,s=wt;B=t,wt=!0;try{Oi(t);const r=t.fn(t._value);(e.version===0||ce(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{B=n,wt=s,Ti(t),t.flags&=-3}}function Ws(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ws(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function ma(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let wt=!0;const Ii=[];function Qt(){Ii.push(wt),wt=!1}function te(){const t=Ii.pop();wt=t===void 0?!0:t}function vr(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=B;B=void 0;try{e()}finally{B=n}}}let qe=0;class ga{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Mi{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!B||!wt||B===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==B)n=this.activeLink=new ga(B,this),B.deps?(n.prevDep=B.depsTail,B.depsTail.nextDep=n,B.depsTail=n):B.deps=B.depsTail=n,Ni(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=B.depsTail,n.nextDep=void 0,B.depsTail.nextDep=n,B.depsTail=n,B.deps===n&&(B.deps=s)}return n}trigger(e){this.version++,qe++,this.notify(e)}notify(e){Us();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{$s()}}}function Ni(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Ni(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const us=new WeakMap,fe=Symbol(""),ds=Symbol(""),Je=Symbol("");function nt(t,e,n){if(wt&&B){let s=us.get(t);s||us.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new Mi),r.map=s,r.key=n),r.track()}}function Ht(t,e,n,s,r,i){const o=us.get(t);if(!o){qe++;return}const a=l=>{l&&l.trigger()};if(Us(),e==="clear")o.forEach(a);else{const l=k(t),d=l&&Hs(n);if(l&&n==="length"){const f=Number(s);o.forEach((p,g)=>{(g==="length"||g===Je||!Zt(g)&&g>=f)&&a(p)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),d&&a(o.get(Je)),e){case"add":l?d&&a(o.get("length")):(a(o.get(fe)),we(t)&&a(o.get(ds)));break;case"delete":l||(a(o.get(fe)),we(t)&&a(o.get(ds)));break;case"set":we(t)&&a(o.get(fe));break}}$s()}function be(t){const e=$(t);return e===t?e:(nt(e,"iterate",Je),At(t)?e:e.map(lt))}function Ln(t){return nt(t=$(t),"iterate",Je),t}const ba={__proto__:null,[Symbol.iterator](){return Jn(this,Symbol.iterator,lt)},concat(...t){return be(this).concat(...t.map(e=>k(e)?be(e):e))},entries(){return Jn(this,"entries",t=>(t[1]=lt(t[1]),t))},every(t,e){return Dt(this,"every",t,e,void 0,arguments)},filter(t,e){return Dt(this,"filter",t,e,n=>n.map(lt),arguments)},find(t,e){return Dt(this,"find",t,e,lt,arguments)},findIndex(t,e){return Dt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Dt(this,"findLast",t,e,lt,arguments)},findLastIndex(t,e){return Dt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Dt(this,"forEach",t,e,void 0,arguments)},includes(...t){return Zn(this,"includes",t)},indexOf(...t){return Zn(this,"indexOf",t)},join(t){return be(this).join(t)},lastIndexOf(...t){return Zn(this,"lastIndexOf",t)},map(t,e){return Dt(this,"map",t,e,void 0,arguments)},pop(){return Le(this,"pop")},push(...t){return Le(this,"push",t)},reduce(t,...e){return xr(this,"reduce",t,e)},reduceRight(t,...e){return xr(this,"reduceRight",t,e)},shift(){return Le(this,"shift")},some(t,e){return Dt(this,"some",t,e,void 0,arguments)},splice(...t){return Le(this,"splice",t)},toReversed(){return be(this).toReversed()},toSorted(t){return be(this).toSorted(t)},toSpliced(...t){return be(this).toSpliced(...t)},unshift(...t){return Le(this,"unshift",t)},values(){return Jn(this,"values",lt)}};function Jn(t,e,n){const s=Ln(t),r=s[e]();return s!==t&&!At(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const ya=Array.prototype;function Dt(t,e,n,s,r,i){const o=Ln(t),a=o!==t&&!At(t),l=o[e];if(l!==ya[e]){const p=l.apply(t,i);return a?lt(p):p}let d=n;o!==t&&(a?d=function(p,g){return n.call(this,lt(p),g,t)}:n.length>2&&(d=function(p,g){return n.call(this,p,g,t)}));const f=l.call(o,d,s);return a&&r?r(f):f}function xr(t,e,n,s){const r=Ln(t);let i=n;return r!==t&&(At(t)?n.length>3&&(i=function(o,a,l){return n.call(this,o,a,l,t)}):i=function(o,a,l){return n.call(this,o,lt(a),l,t)}),r[e](i,...s)}function Zn(t,e,n){const s=$(t);nt(s,"iterate",Je);const r=s[e](...n);return(r===-1||r===!1)&&Ys(n[0])?(n[0]=$(n[0]),s[e](...n)):r}function Le(t,e,n=[]){Qt(),Us();const s=$(t)[e].apply(t,n);return $s(),te(),s}const va=Ls("__proto__,__v_isRef,__isVue"),Fi=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Zt));function xa(t){Zt(t)||(t=String(t));const e=$(this);return nt(e,"has",t),e.hasOwnProperty(t)}class Ri{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?Ia:ji:i?Di:Li).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=k(e);if(!r){let l;if(o&&(l=ba[n]))return l;if(n==="hasOwnProperty")return xa}const a=Reflect.get(e,n,at(e)?e:s);return(Zt(n)?Fi.has(n):va(n))||(r||nt(e,"get",n),i)?a:at(a)?o&&Hs(n)?a:a.value:q(a)?r?Hi(a):Bs(a):a}}class ki extends Ri{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const l=Oe(i);if(!At(s)&&!Oe(s)&&(i=$(i),s=$(s)),!k(e)&&at(i)&&!at(s))return l?!1:(i.value=s,!0)}const o=k(e)&&Hs(n)?Number(n)<e.length:z(e,n),a=Reflect.set(e,n,s,at(e)?e:r);return e===$(r)&&(o?ce(s,i)&&Ht(e,"set",n,s):Ht(e,"add",n,s)),a}deleteProperty(e,n){const s=z(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&Ht(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!Zt(n)||!Fi.has(n))&&nt(e,"has",n),s}ownKeys(e){return nt(e,"iterate",k(e)?"length":fe),Reflect.ownKeys(e)}}class _a extends Ri{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const wa=new ki,Aa=new _a,Sa=new ki(!0);const ps=t=>t,pn=t=>Reflect.getPrototypeOf(t);function Ea(t,e,n){return function(...s){const r=this.__v_raw,i=$(r),o=we(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,d=r[t](...s),f=n?ps:e?hs:lt;return!e&&nt(i,"iterate",l?ds:fe),{next(){const{value:p,done:g}=d.next();return g?{value:p,done:g}:{value:a?[f(p[0]),f(p[1])]:f(p),done:g}},[Symbol.iterator](){return this}}}}function hn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ca(t,e){const n={get(r){const i=this.__v_raw,o=$(i),a=$(r);t||(ce(r,a)&&nt(o,"get",r),nt(o,"get",a));const{has:l}=pn(o),d=e?ps:t?hs:lt;if(l.call(o,r))return d(i.get(r));if(l.call(o,a))return d(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&nt($(r),"iterate",fe),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=$(i),a=$(r);return t||(ce(r,a)&&nt(o,"has",r),nt(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,l=$(a),d=e?ps:t?hs:lt;return!t&&nt(l,"iterate",fe),a.forEach((f,p)=>r.call(i,d(f),d(p),o))}};return tt(n,t?{add:hn("add"),set:hn("set"),delete:hn("delete"),clear:hn("clear")}:{add(r){!e&&!At(r)&&!Oe(r)&&(r=$(r));const i=$(this);return pn(i).has.call(i,r)||(i.add(r),Ht(i,"add",r,r)),this},set(r,i){!e&&!At(i)&&!Oe(i)&&(i=$(i));const o=$(this),{has:a,get:l}=pn(o);let d=a.call(o,r);d||(r=$(r),d=a.call(o,r));const f=l.call(o,r);return o.set(r,i),d?ce(i,f)&&Ht(o,"set",r,i):Ht(o,"add",r,i),this},delete(r){const i=$(this),{has:o,get:a}=pn(i);let l=o.call(i,r);l||(r=$(r),l=o.call(i,r)),a&&a.call(i,r);const d=i.delete(r);return l&&Ht(i,"delete",r,void 0),d},clear(){const r=$(this),i=r.size!==0,o=r.clear();return i&&Ht(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Ea(r,t,e)}),n}function Vs(t,e){const n=Ca(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(z(n,r)&&r in s?n:s,r,i)}const Oa={get:Vs(!1,!1)},Ta={get:Vs(!1,!0)},Pa={get:Vs(!0,!1)};const Li=new WeakMap,Di=new WeakMap,ji=new WeakMap,Ia=new WeakMap;function Ma(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Na(t){return t.__v_skip||!Object.isExtensible(t)?0:Ma(sa(t))}function Bs(t){return Oe(t)?t:Ks(t,!1,wa,Oa,Li)}function Fa(t){return Ks(t,!1,Sa,Ta,Di)}function Hi(t){return Ks(t,!0,Aa,Pa,ji)}function Ks(t,e,n,s,r){if(!q(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Na(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Ae(t){return Oe(t)?Ae(t.__v_raw):!!(t&&t.__v_isReactive)}function Oe(t){return!!(t&&t.__v_isReadonly)}function At(t){return!!(t&&t.__v_isShallow)}function Ys(t){return t?!!t.__v_raw:!1}function $(t){const e=t&&t.__v_raw;return e?$(e):t}function Ra(t){return!z(t,"__v_skip")&&Object.isExtensible(t)&&xi(t,"__v_skip",!0),t}const lt=t=>q(t)?Bs(t):t,hs=t=>q(t)?Hi(t):t;function at(t){return t?t.__v_isRef===!0:!1}function ka(t){return at(t)?t.value:t}const La={get:(t,e,n)=>e==="__v_raw"?t:ka(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return at(r)&&!at(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function zi(t){return Ae(t)?t:new Proxy(t,La)}class Da{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Mi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=qe-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&B!==this)return Ci(this,!0),!0}get value(){const e=this.dep.track();return Pi(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ja(t,e,n=!1){let s,r;return L(t)?s=t:(s=t.get,r=t.set),new Da(s,r,n)}const mn={},An=new WeakMap;let oe;function Ha(t,e=!1,n=oe){if(n){let s=An.get(n);s||An.set(n,s=[]),s.push(t)}}function za(t,e,n=K){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:l}=n,d=O=>r?O:At(O)||r===!1||r===0?Yt(O,1):Yt(O);let f,p,g,A,R=!1,N=!1;if(at(t)?(p=()=>t.value,R=At(t)):Ae(t)?(p=()=>d(t),R=!0):k(t)?(N=!0,R=t.some(O=>Ae(O)||At(O)),p=()=>t.map(O=>{if(at(O))return O.value;if(Ae(O))return d(O);if(L(O))return l?l(O,2):O()})):L(t)?e?p=l?()=>l(t,2):t:p=()=>{if(g){Qt();try{g()}finally{te()}}const O=oe;oe=f;try{return l?l(t,3,[A]):t(A)}finally{oe=O}}:p=Rt,e&&r){const O=p,j=r===!0?1/0:r;p=()=>Yt(O(),j)}const H=ha(),x=()=>{f.stop(),H&&js(H.effects,f)};if(i&&e){const O=e;e=(...j)=>{O(...j),x()}}let E=N?new Array(t.length).fill(mn):mn;const M=O=>{if(!(!(f.flags&1)||!f.dirty&&!O))if(e){const j=f.run();if(r||R||(N?j.some((ct,Z)=>ce(ct,E[Z])):ce(j,E))){g&&g();const ct=oe;oe=f;try{const Z=[j,E===mn?void 0:N&&E[0]===mn?[]:E,A];l?l(e,3,Z):e(...Z),E=j}finally{oe=ct}}}else f.run()};return a&&a(M),f=new Si(p),f.scheduler=o?()=>o(M,!1):M,A=O=>Ha(O,!1,f),g=f.onStop=()=>{const O=An.get(f);if(O){if(l)l(O,4);else for(const j of O)j();An.delete(f)}},e?s?M(!0):E=f.run():o?o(M.bind(null,!0),!0):f.run(),x.pause=f.pause.bind(f),x.resume=f.resume.bind(f),x.stop=x,x}function Yt(t,e=1/0,n){if(e<=0||!q(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,at(t))Yt(t.value,e,n);else if(k(t))for(let s=0;s<t.length;s++)Yt(t[s],e,n);else if(gi(t)||we(t))t.forEach(s=>{Yt(s,e,n)});else if(vi(t)){for(const s in t)Yt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Yt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function sn(t,e,n,s){try{return s?t(...s):t()}catch(r){Dn(r,e,n)}}function kt(t,e,n,s){if(L(t)){const r=sn(t,e,n,s);return r&&bi(r)&&r.catch(i=>{Dn(i,e,n)}),r}if(k(t)){const r=[];for(let i=0;i<t.length;i++)r.push(kt(t[i],e,n,s));return r}}function Dn(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||K;if(e){let a=e.parent;const l=e.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const f=a.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,d)===!1)return}a=a.parent}if(i){Qt(),sn(i,null,10,[t,l,d]),te();return}}Ua(t,n,r,s,o)}function Ua(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const ot=[];let Pt=-1;const Se=[];let Bt=null,ye=0;const Ui=Promise.resolve();let Sn=null;function $a(t){const e=Sn||Ui;return t?e.then(this?t.bind(this):t):e}function Wa(t){let e=Pt+1,n=ot.length;for(;e<n;){const s=e+n>>>1,r=ot[s],i=Ze(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function Gs(t){if(!(t.flags&1)){const e=Ze(t),n=ot[ot.length-1];!n||!(t.flags&2)&&e>=Ze(n)?ot.push(t):ot.splice(Wa(e),0,t),t.flags|=1,$i()}}function $i(){Sn||(Sn=Ui.then(Vi))}function Va(t){k(t)?Se.push(...t):Bt&&t.id===-1?Bt.splice(ye+1,0,t):t.flags&1||(Se.push(t),t.flags|=1),$i()}function _r(t,e,n=Pt+1){for(;n<ot.length;n++){const s=ot[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;ot.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Wi(t){if(Se.length){const e=[...new Set(Se)].sort((n,s)=>Ze(n)-Ze(s));if(Se.length=0,Bt){Bt.push(...e);return}for(Bt=e,ye=0;ye<Bt.length;ye++){const n=Bt[ye];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Bt=null,ye=0}}const Ze=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Vi(t){try{for(Pt=0;Pt<ot.length;Pt++){const e=ot[Pt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),sn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Pt<ot.length;Pt++){const e=ot[Pt];e&&(e.flags&=-2)}Pt=-1,ot.length=0,Wi(),Sn=null,(ot.length||Se.length)&&Vi()}}let _t=null,Bi=null;function En(t){const e=_t;return _t=t,Bi=t&&t.type.__scopeId||null,e}function Ba(t,e=_t,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Ir(-1);const i=En(e);let o;try{o=t(...r)}finally{En(i),s._d&&Ir(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function re(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(Qt(),kt(l,n,8,[t.el,a,t,e]),te())}}const Ka=Symbol("_vte"),Ya=t=>t.__isTeleport;function Xs(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Xs(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ki(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function ms(t,e,n,s,r=!1){if(k(t)){t.forEach((R,N)=>ms(R,e&&(k(e)?e[N]:e),n,s,r));return}if(Be(s)&&!r)return;const i=s.shapeFlag&4?Qs(s.component):s.el,o=r?null:i,{i:a,r:l}=t,d=e&&e.r,f=a.refs===K?a.refs={}:a.refs,p=a.setupState,g=$(p),A=p===K?()=>!1:R=>z(g,R);if(d!=null&&d!==l&&(J(d)?(f[d]=null,A(d)&&(p[d]=null)):at(d)&&(d.value=null)),L(l))sn(l,a,12,[o,f]);else{const R=J(l),N=at(l);if(R||N){const H=()=>{if(t.f){const x=R?A(l)?p[l]:f[l]:l.value;r?k(x)&&js(x,i):k(x)?x.includes(i)||x.push(i):R?(f[l]=[i],A(l)&&(p[l]=f[l])):(l.value=[i],t.k&&(f[t.k]=l.value))}else R?(f[l]=o,A(l)&&(p[l]=o)):N&&(l.value=o,t.k&&(f[t.k]=o))};o?(H.id=-1,pt(H,n)):H()}}}Rn().requestIdleCallback;Rn().cancelIdleCallback;const Be=t=>!!t.type.__asyncLoader,Yi=t=>t.type.__isKeepAlive;function Ga(t,e){Gi(t,"a",e)}function Xa(t,e){Gi(t,"da",e)}function Gi(t,e,n=st){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(jn(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Yi(r.parent.vnode)&&qa(s,e,n,r),r=r.parent}}function qa(t,e,n,s){const r=jn(e,t,s,!0);Xi(()=>{js(s[e],r)},n)}function jn(t,e,n=st,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Qt();const a=rn(n),l=kt(e,n,t,o);return a(),te(),l});return s?r.unshift(i):r.push(i),i}}const $t=t=>(e,n=st)=>{(!tn||t==="sp")&&jn(t,(...s)=>e(...s),n)},Ja=$t("bm"),Za=$t("m"),Qa=$t("bu"),tl=$t("u"),el=$t("bum"),Xi=$t("um"),nl=$t("sp"),sl=$t("rtg"),rl=$t("rtc");function il(t,e=st){jn("ec",t,e)}const ol="components";function al(t,e){return cl(ol,t,!0,e)||t}const ll=Symbol.for("v-ndc");function cl(t,e,n=!0,s=!1){const r=_t||st;if(r){const i=r.type;{const a=tc(i,!1);if(a&&(a===e||a===vt(e)||a===Fn(vt(e))))return i}const o=wr(r[t]||i[t],e)||wr(r.appContext[t],e);return!o&&s?i:o}}function wr(t,e){return t&&(t[e]||t[vt(e)]||t[Fn(vt(e))])}function fl(t,e,n,s){let r;const i=n,o=k(t);if(o||J(t)){const a=o&&Ae(t);let l=!1;a&&(l=!At(t),t=Ln(t)),r=new Array(t.length);for(let d=0,f=t.length;d<f;d++)r[d]=e(l?lt(t[d]):t[d],d,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,i)}else if(q(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,i));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,d=a.length;l<d;l++){const f=a[l];r[l]=e(t[f],f,l,i)}}else r=[];return r}const gs=t=>t?yo(t)?Qs(t):gs(t.parent):null,Ke=tt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>gs(t.parent),$root:t=>gs(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>qs(t),$forceUpdate:t=>t.f||(t.f=()=>{Gs(t.update)}),$nextTick:t=>t.n||(t.n=$a.bind(t.proxy)),$watch:t=>Nl.bind(t)}),Qn=(t,e)=>t!==K&&!t.__isScriptSetup&&z(t,e),ul={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=t;let d;if(e[0]!=="$"){const A=o[e];if(A!==void 0)switch(A){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Qn(s,e))return o[e]=1,s[e];if(r!==K&&z(r,e))return o[e]=2,r[e];if((d=t.propsOptions[0])&&z(d,e))return o[e]=3,i[e];if(n!==K&&z(n,e))return o[e]=4,n[e];bs&&(o[e]=0)}}const f=Ke[e];let p,g;if(f)return e==="$attrs"&&nt(t.attrs,"get",""),f(t);if((p=a.__cssModules)&&(p=p[e]))return p;if(n!==K&&z(n,e))return o[e]=4,n[e];if(g=l.config.globalProperties,z(g,e))return g[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Qn(r,e)?(r[e]=n,!0):s!==K&&z(s,e)?(s[e]=n,!0):z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==K&&z(t,o)||Qn(e,o)||(a=i[0])&&z(a,o)||z(s,o)||z(Ke,o)||z(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:z(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ar(t){return k(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let bs=!0;function dl(t){const e=qs(t),n=t.proxy,s=t.ctx;bs=!1,e.beforeCreate&&Sr(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:d,created:f,beforeMount:p,mounted:g,beforeUpdate:A,updated:R,activated:N,deactivated:H,beforeDestroy:x,beforeUnmount:E,destroyed:M,unmounted:O,render:j,renderTracked:ct,renderTriggered:Z,errorCaptured:Et,serverPrefetch:ln,expose:ee,inheritAttrs:Ne,components:cn,directives:fn,filters:Bn}=e;if(d&&pl(d,s,null),o)for(const X in o){const W=o[X];L(W)&&(s[X]=W.bind(n))}if(r){const X=r.call(n,n);q(X)&&(t.data=Bs(X))}if(bs=!0,i)for(const X in i){const W=i[X],ne=L(W)?W.bind(n,n):L(W.get)?W.get.bind(n,n):Rt,un=!L(W)&&L(W.set)?W.set.bind(n):Rt,se=nc({get:ne,set:un});Object.defineProperty(s,X,{enumerable:!0,configurable:!0,get:()=>se.value,set:Ct=>se.value=Ct})}if(a)for(const X in a)qi(a[X],s,n,X);if(l){const X=L(l)?l.call(n):l;Reflect.ownKeys(X).forEach(W=>{vl(W,X[W])})}f&&Sr(f,t,"c");function rt(X,W){k(W)?W.forEach(ne=>X(ne.bind(n))):W&&X(W.bind(n))}if(rt(Ja,p),rt(Za,g),rt(Qa,A),rt(tl,R),rt(Ga,N),rt(Xa,H),rt(il,Et),rt(rl,ct),rt(sl,Z),rt(el,E),rt(Xi,O),rt(nl,ln),k(ee))if(ee.length){const X=t.exposed||(t.exposed={});ee.forEach(W=>{Object.defineProperty(X,W,{get:()=>n[W],set:ne=>n[W]=ne})})}else t.exposed||(t.exposed={});j&&t.render===Rt&&(t.render=j),Ne!=null&&(t.inheritAttrs=Ne),cn&&(t.components=cn),fn&&(t.directives=fn),ln&&Ki(t)}function pl(t,e,n=Rt){k(t)&&(t=ys(t));for(const s in t){const r=t[s];let i;q(r)?"default"in r?i=bn(r.from||s,r.default,!0):i=bn(r.from||s):i=bn(r),at(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Sr(t,e,n){kt(k(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function qi(t,e,n,s){let r=s.includes(".")?fo(n,s):()=>n[s];if(J(t)){const i=e[t];L(i)&&es(r,i)}else if(L(t))es(r,t.bind(n));else if(q(t))if(k(t))t.forEach(i=>qi(i,e,n,s));else{const i=L(t.handler)?t.handler.bind(n):e[t.handler];L(i)&&es(r,i,t)}}function qs(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!r.length&&!n&&!s?l=e:(l={},r.length&&r.forEach(d=>Cn(l,d,o,!0)),Cn(l,e,o)),q(e)&&i.set(e,l),l}function Cn(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Cn(t,i,n,!0),r&&r.forEach(o=>Cn(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=hl[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const hl={data:Er,props:Cr,emits:Cr,methods:He,computed:He,beforeCreate:it,created:it,beforeMount:it,mounted:it,beforeUpdate:it,updated:it,beforeDestroy:it,beforeUnmount:it,destroyed:it,unmounted:it,activated:it,deactivated:it,errorCaptured:it,serverPrefetch:it,components:He,directives:He,watch:gl,provide:Er,inject:ml};function Er(t,e){return e?t?function(){return tt(L(t)?t.call(this,this):t,L(e)?e.call(this,this):e)}:e:t}function ml(t,e){return He(ys(t),ys(e))}function ys(t){if(k(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function it(t,e){return t?[...new Set([].concat(t,e))]:e}function He(t,e){return t?tt(Object.create(null),t,e):e}function Cr(t,e){return t?k(t)&&k(e)?[...new Set([...t,...e])]:tt(Object.create(null),Ar(t),Ar(e??{})):e}function gl(t,e){if(!t)return e;if(!e)return t;const n=tt(Object.create(null),t);for(const s in e)n[s]=it(t[s],e[s]);return n}function Ji(){return{app:null,config:{isNativeTag:ea,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let bl=0;function yl(t,e){return function(s,r=null){L(s)||(s=tt({},s)),r!=null&&!q(r)&&(r=null);const i=Ji(),o=new WeakSet,a=[];let l=!1;const d=i.app={_uid:bl++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:sc,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&L(f.install)?(o.add(f),f.install(d,...p)):L(f)&&(o.add(f),f(d,...p))),d},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),d},component(f,p){return p?(i.components[f]=p,d):i.components[f]},directive(f,p){return p?(i.directives[f]=p,d):i.directives[f]},mount(f,p,g){if(!l){const A=d._ceVNode||St(s,r);return A.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),p&&e?e(A,f):t(A,f,g),l=!0,d._container=f,f.__vue_app__=d,Qs(A.component)}},onUnmount(f){a.push(f)},unmount(){l&&(kt(a,d._instance,16),t(null,d._container),delete d._container.__vue_app__)},provide(f,p){return i.provides[f]=p,d},runWithContext(f){const p=Ee;Ee=d;try{return f()}finally{Ee=p}}};return d}}let Ee=null;function vl(t,e){if(st){let n=st.provides;const s=st.parent&&st.parent.provides;s===n&&(n=st.provides=Object.create(s)),n[t]=e}}function bn(t,e,n=!1){const s=st||_t;if(s||Ee){const r=Ee?Ee._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&L(e)?e.call(s&&s.proxy):e}}const Zi={},Qi=()=>Object.create(Zi),to=t=>Object.getPrototypeOf(t)===Zi;function xl(t,e,n,s=!1){const r={},i=Qi();t.propsDefaults=Object.create(null),eo(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Fa(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function _l(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=$(r),[l]=t.propsOptions;let d=!1;if((s||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(Hn(t.emitsOptions,g))continue;const A=e[g];if(l)if(z(i,g))A!==i[g]&&(i[g]=A,d=!0);else{const R=vt(g);r[R]=vs(l,a,R,A,t,!1)}else A!==i[g]&&(i[g]=A,d=!0)}}}else{eo(t,e,r,i)&&(d=!0);let f;for(const p in a)(!e||!z(e,p)&&((f=ge(p))===p||!z(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(r[p]=vs(l,a,p,void 0,t,!0)):delete r[p]);if(i!==a)for(const p in i)(!e||!z(e,p))&&(delete i[p],d=!0)}d&&Ht(t.attrs,"set","")}function eo(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if($e(l))continue;const d=e[l];let f;r&&z(r,f=vt(l))?!i||!i.includes(f)?n[f]=d:(a||(a={}))[f]=d:Hn(t.emitsOptions,l)||(!(l in s)||d!==s[l])&&(s[l]=d,o=!0)}if(i){const l=$(n),d=a||K;for(let f=0;f<i.length;f++){const p=i[f];n[p]=vs(r,l,p,d[p],t,!z(d,p))}}return o}function vs(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=z(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&L(l)){const{propsDefaults:d}=r;if(n in d)s=d[n];else{const f=rn(r);s=d[n]=l.call(null,e),f()}}else s=l;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===ge(n))&&(s=!0))}return s}const wl=new WeakMap;function no(t,e,n=!1){const s=n?wl:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let l=!1;if(!L(t)){const f=p=>{l=!0;const[g,A]=no(p,e,!0);tt(o,g),A&&a.push(...A)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return q(t)&&s.set(t,_e),_e;if(k(i))for(let f=0;f<i.length;f++){const p=vt(i[f]);Or(p)&&(o[p]=K)}else if(i)for(const f in i){const p=vt(f);if(Or(p)){const g=i[f],A=o[p]=k(g)||L(g)?{type:g}:tt({},g),R=A.type;let N=!1,H=!0;if(k(R))for(let x=0;x<R.length;++x){const E=R[x],M=L(E)&&E.name;if(M==="Boolean"){N=!0;break}else M==="String"&&(H=!1)}else N=L(R)&&R.name==="Boolean";A[0]=N,A[1]=H,(N||z(A,"default"))&&a.push(p)}}const d=[o,a];return q(t)&&s.set(t,d),d}function Or(t){return t[0]!=="$"&&!$e(t)}const so=t=>t[0]==="_"||t==="$stable",Js=t=>k(t)?t.map(Mt):[Mt(t)],Al=(t,e,n)=>{if(e._n)return e;const s=Ba((...r)=>Js(e(...r)),n);return s._c=!1,s},ro=(t,e,n)=>{const s=t._ctx;for(const r in t){if(so(r))continue;const i=t[r];if(L(i))e[r]=Al(r,i,s);else if(i!=null){const o=Js(i);e[r]=()=>o}}},io=(t,e)=>{const n=Js(e);t.slots.default=()=>n},oo=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},Sl=(t,e,n)=>{const s=t.slots=Qi();if(t.vnode.shapeFlag&32){const r=e._;r?(oo(s,e,n),n&&xi(s,"_",r,!0)):ro(e,s)}else e&&io(t,e)},El=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=K;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:oo(r,e,n):(i=!e.$stable,ro(e,r)),o=e}else e&&(io(t,e),o={default:1});if(i)for(const a in r)!so(a)&&o[a]==null&&delete r[a]},pt=Hl;function Cl(t){return Ol(t)}function Ol(t,e){const n=Rn();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:d,setElementText:f,parentNode:p,nextSibling:g,setScopeId:A=Rt,insertStaticContent:R}=t,N=(c,u,h,y=null,m=null,b=null,S=void 0,w=null,_=!!u.dynamicChildren)=>{if(c===u)return;c&&!De(c,u)&&(y=dn(c),Ct(c,m,b,!0),c=null),u.patchFlag===-2&&(_=!1,u.dynamicChildren=null);const{type:v,ref:I,shapeFlag:C}=u;switch(v){case zn:H(c,u,h,y);break;case pe:x(c,u,h,y);break;case yn:c==null&&E(u,h,y,S);break;case It:cn(c,u,h,y,m,b,S,w,_);break;default:C&1?j(c,u,h,y,m,b,S,w,_):C&6?fn(c,u,h,y,m,b,S,w,_):(C&64||C&128)&&v.process(c,u,h,y,m,b,S,w,_,Re)}I!=null&&m&&ms(I,c&&c.ref,b,u||c,!u)},H=(c,u,h,y)=>{if(c==null)s(u.el=a(u.children),h,y);else{const m=u.el=c.el;u.children!==c.children&&d(m,u.children)}},x=(c,u,h,y)=>{c==null?s(u.el=l(u.children||""),h,y):u.el=c.el},E=(c,u,h,y)=>{[c.el,c.anchor]=R(c.children,u,h,y,c.el,c.anchor)},M=({el:c,anchor:u},h,y)=>{let m;for(;c&&c!==u;)m=g(c),s(c,h,y),c=m;s(u,h,y)},O=({el:c,anchor:u})=>{let h;for(;c&&c!==u;)h=g(c),r(c),c=h;r(u)},j=(c,u,h,y,m,b,S,w,_)=>{u.type==="svg"?S="svg":u.type==="math"&&(S="mathml"),c==null?ct(u,h,y,m,b,S,w,_):ln(c,u,m,b,S,w,_)},ct=(c,u,h,y,m,b,S,w)=>{let _,v;const{props:I,shapeFlag:C,transition:P,dirs:F}=c;if(_=c.el=o(c.type,b,I&&I.is,I),C&8?f(_,c.children):C&16&&Et(c.children,_,null,y,m,ts(c,b),S,w),F&&re(c,null,y,"created"),Z(_,c,c.scopeId,S,y),I){for(const V in I)V!=="value"&&!$e(V)&&i(_,V,null,I[V],b,y);"value"in I&&i(_,"value",null,I.value,b),(v=I.onVnodeBeforeMount)&&Tt(v,y,c)}F&&re(c,null,y,"beforeMount");const D=Tl(m,P);D&&P.beforeEnter(_),s(_,u,h),((v=I&&I.onVnodeMounted)||D||F)&&pt(()=>{v&&Tt(v,y,c),D&&P.enter(_),F&&re(c,null,y,"mounted")},m)},Z=(c,u,h,y,m)=>{if(h&&A(c,h),y)for(let b=0;b<y.length;b++)A(c,y[b]);if(m){let b=m.subTree;if(u===b||po(b.type)&&(b.ssContent===u||b.ssFallback===u)){const S=m.vnode;Z(c,S,S.scopeId,S.slotScopeIds,m.parent)}}},Et=(c,u,h,y,m,b,S,w,_=0)=>{for(let v=_;v<c.length;v++){const I=c[v]=w?Kt(c[v]):Mt(c[v]);N(null,I,u,h,y,m,b,S,w)}},ln=(c,u,h,y,m,b,S)=>{const w=u.el=c.el;let{patchFlag:_,dynamicChildren:v,dirs:I}=u;_|=c.patchFlag&16;const C=c.props||K,P=u.props||K;let F;if(h&&ie(h,!1),(F=P.onVnodeBeforeUpdate)&&Tt(F,h,u,c),I&&re(u,c,h,"beforeUpdate"),h&&ie(h,!0),(C.innerHTML&&P.innerHTML==null||C.textContent&&P.textContent==null)&&f(w,""),v?ee(c.dynamicChildren,v,w,h,y,ts(u,m),b):S||W(c,u,w,null,h,y,ts(u,m),b,!1),_>0){if(_&16)Ne(w,C,P,h,m);else if(_&2&&C.class!==P.class&&i(w,"class",null,P.class,m),_&4&&i(w,"style",C.style,P.style,m),_&8){const D=u.dynamicProps;for(let V=0;V<D.length;V++){const U=D[V],ft=C[U],et=P[U];(et!==ft||U==="value")&&i(w,U,ft,et,m,h)}}_&1&&c.children!==u.children&&f(w,u.children)}else!S&&v==null&&Ne(w,C,P,h,m);((F=P.onVnodeUpdated)||I)&&pt(()=>{F&&Tt(F,h,u,c),I&&re(u,c,h,"updated")},y)},ee=(c,u,h,y,m,b,S)=>{for(let w=0;w<u.length;w++){const _=c[w],v=u[w],I=_.el&&(_.type===It||!De(_,v)||_.shapeFlag&70)?p(_.el):h;N(_,v,I,null,y,m,b,S,!0)}},Ne=(c,u,h,y,m)=>{if(u!==h){if(u!==K)for(const b in u)!$e(b)&&!(b in h)&&i(c,b,u[b],null,m,y);for(const b in h){if($e(b))continue;const S=h[b],w=u[b];S!==w&&b!=="value"&&i(c,b,w,S,m,y)}"value"in h&&i(c,"value",u.value,h.value,m)}},cn=(c,u,h,y,m,b,S,w,_)=>{const v=u.el=c?c.el:a(""),I=u.anchor=c?c.anchor:a("");let{patchFlag:C,dynamicChildren:P,slotScopeIds:F}=u;F&&(w=w?w.concat(F):F),c==null?(s(v,h,y),s(I,h,y),Et(u.children||[],h,I,m,b,S,w,_)):C>0&&C&64&&P&&c.dynamicChildren?(ee(c.dynamicChildren,P,h,m,b,S,w),(u.key!=null||m&&u===m.subTree)&&ao(c,u,!0)):W(c,u,h,I,m,b,S,w,_)},fn=(c,u,h,y,m,b,S,w,_)=>{u.slotScopeIds=w,c==null?u.shapeFlag&512?m.ctx.activate(u,h,y,S,_):Bn(u,h,y,m,b,S,_):ur(c,u,_)},Bn=(c,u,h,y,m,b,S)=>{const w=c.component=Xl(c,y,m);if(Yi(c)&&(w.ctx.renderer=Re),ql(w,!1,S),w.asyncDep){if(m&&m.registerDep(w,rt,S),!c.el){const _=w.subTree=St(pe);x(null,_,u,h)}}else rt(w,c,u,h,m,b,S)},ur=(c,u,h)=>{const y=u.component=c.component;if(Dl(c,u,h))if(y.asyncDep&&!y.asyncResolved){X(y,u,h);return}else y.next=u,y.update();else u.el=c.el,y.vnode=u},rt=(c,u,h,y,m,b,S)=>{const w=()=>{if(c.isMounted){let{next:C,bu:P,u:F,parent:D,vnode:V}=c;{const ut=lo(c);if(ut){C&&(C.el=V.el,X(c,C,S)),ut.asyncDep.then(()=>{c.isUnmounted||w()});return}}let U=C,ft;ie(c,!1),C?(C.el=V.el,X(c,C,S)):C=V,P&&Gn(P),(ft=C.props&&C.props.onVnodeBeforeUpdate)&&Tt(ft,D,C,V),ie(c,!0);const et=ns(c),xt=c.subTree;c.subTree=et,N(xt,et,p(xt.el),dn(xt),c,m,b),C.el=et.el,U===null&&jl(c,et.el),F&&pt(F,m),(ft=C.props&&C.props.onVnodeUpdated)&&pt(()=>Tt(ft,D,C,V),m)}else{let C;const{el:P,props:F}=u,{bm:D,m:V,parent:U,root:ft,type:et}=c,xt=Be(u);if(ie(c,!1),D&&Gn(D),!xt&&(C=F&&F.onVnodeBeforeMount)&&Tt(C,U,u),ie(c,!0),P&&mr){const ut=()=>{c.subTree=ns(c),mr(P,c.subTree,c,m,null)};xt&&et.__asyncHydrate?et.__asyncHydrate(P,c,ut):ut()}else{ft.ce&&ft.ce._injectChildStyle(et);const ut=c.subTree=ns(c);N(null,ut,h,y,c,m,b),u.el=ut.el}if(V&&pt(V,m),!xt&&(C=F&&F.onVnodeMounted)){const ut=u;pt(()=>Tt(C,U,ut),m)}(u.shapeFlag&256||U&&Be(U.vnode)&&U.vnode.shapeFlag&256)&&c.a&&pt(c.a,m),c.isMounted=!0,u=h=y=null}};c.scope.on();const _=c.effect=new Si(w);c.scope.off();const v=c.update=_.run.bind(_),I=c.job=_.runIfDirty.bind(_);I.i=c,I.id=c.uid,_.scheduler=()=>Gs(I),ie(c,!0),v()},X=(c,u,h)=>{u.component=c;const y=c.vnode.props;c.vnode=u,c.next=null,_l(c,u.props,y,h),El(c,u.children,h),Qt(),_r(c),te()},W=(c,u,h,y,m,b,S,w,_=!1)=>{const v=c&&c.children,I=c?c.shapeFlag:0,C=u.children,{patchFlag:P,shapeFlag:F}=u;if(P>0){if(P&128){un(v,C,h,y,m,b,S,w,_);return}else if(P&256){ne(v,C,h,y,m,b,S,w,_);return}}F&8?(I&16&&Fe(v,m,b),C!==v&&f(h,C)):I&16?F&16?un(v,C,h,y,m,b,S,w,_):Fe(v,m,b,!0):(I&8&&f(h,""),F&16&&Et(C,h,y,m,b,S,w,_))},ne=(c,u,h,y,m,b,S,w,_)=>{c=c||_e,u=u||_e;const v=c.length,I=u.length,C=Math.min(v,I);let P;for(P=0;P<C;P++){const F=u[P]=_?Kt(u[P]):Mt(u[P]);N(c[P],F,h,null,m,b,S,w,_)}v>I?Fe(c,m,b,!0,!1,C):Et(u,h,y,m,b,S,w,_,C)},un=(c,u,h,y,m,b,S,w,_)=>{let v=0;const I=u.length;let C=c.length-1,P=I-1;for(;v<=C&&v<=P;){const F=c[v],D=u[v]=_?Kt(u[v]):Mt(u[v]);if(De(F,D))N(F,D,h,null,m,b,S,w,_);else break;v++}for(;v<=C&&v<=P;){const F=c[C],D=u[P]=_?Kt(u[P]):Mt(u[P]);if(De(F,D))N(F,D,h,null,m,b,S,w,_);else break;C--,P--}if(v>C){if(v<=P){const F=P+1,D=F<I?u[F].el:y;for(;v<=P;)N(null,u[v]=_?Kt(u[v]):Mt(u[v]),h,D,m,b,S,w,_),v++}}else if(v>P)for(;v<=C;)Ct(c[v],m,b,!0),v++;else{const F=v,D=v,V=new Map;for(v=D;v<=P;v++){const dt=u[v]=_?Kt(u[v]):Mt(u[v]);dt.key!=null&&V.set(dt.key,v)}let U,ft=0;const et=P-D+1;let xt=!1,ut=0;const ke=new Array(et);for(v=0;v<et;v++)ke[v]=0;for(v=F;v<=C;v++){const dt=c[v];if(ft>=et){Ct(dt,m,b,!0);continue}let Ot;if(dt.key!=null)Ot=V.get(dt.key);else for(U=D;U<=P;U++)if(ke[U-D]===0&&De(dt,u[U])){Ot=U;break}Ot===void 0?Ct(dt,m,b,!0):(ke[Ot-D]=v+1,Ot>=ut?ut=Ot:xt=!0,N(dt,u[Ot],h,null,m,b,S,w,_),ft++)}const gr=xt?Pl(ke):_e;for(U=gr.length-1,v=et-1;v>=0;v--){const dt=D+v,Ot=u[dt],br=dt+1<I?u[dt+1].el:y;ke[v]===0?N(null,Ot,h,br,m,b,S,w,_):xt&&(U<0||v!==gr[U]?se(Ot,h,br,2):U--)}}},se=(c,u,h,y,m=null)=>{const{el:b,type:S,transition:w,children:_,shapeFlag:v}=c;if(v&6){se(c.component.subTree,u,h,y);return}if(v&128){c.suspense.move(u,h,y);return}if(v&64){S.move(c,u,h,Re);return}if(S===It){s(b,u,h);for(let C=0;C<_.length;C++)se(_[C],u,h,y);s(c.anchor,u,h);return}if(S===yn){M(c,u,h);return}if(y!==2&&v&1&&w)if(y===0)w.beforeEnter(b),s(b,u,h),pt(()=>w.enter(b),m);else{const{leave:C,delayLeave:P,afterLeave:F}=w,D=()=>s(b,u,h),V=()=>{C(b,()=>{D(),F&&F()})};P?P(b,D,V):V()}else s(b,u,h)},Ct=(c,u,h,y=!1,m=!1)=>{const{type:b,props:S,ref:w,children:_,dynamicChildren:v,shapeFlag:I,patchFlag:C,dirs:P,cacheIndex:F}=c;if(C===-2&&(m=!1),w!=null&&ms(w,null,h,c,!0),F!=null&&(u.renderCache[F]=void 0),I&256){u.ctx.deactivate(c);return}const D=I&1&&P,V=!Be(c);let U;if(V&&(U=S&&S.onVnodeBeforeUnmount)&&Tt(U,u,c),I&6)ta(c.component,h,y);else{if(I&128){c.suspense.unmount(h,y);return}D&&re(c,null,u,"beforeUnmount"),I&64?c.type.remove(c,u,h,Re,y):v&&!v.hasOnce&&(b!==It||C>0&&C&64)?Fe(v,u,h,!1,!0):(b===It&&C&384||!m&&I&16)&&Fe(_,u,h),y&&dr(c)}(V&&(U=S&&S.onVnodeUnmounted)||D)&&pt(()=>{U&&Tt(U,u,c),D&&re(c,null,u,"unmounted")},h)},dr=c=>{const{type:u,el:h,anchor:y,transition:m}=c;if(u===It){Qo(h,y);return}if(u===yn){O(c);return}const b=()=>{r(h),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(c.shapeFlag&1&&m&&!m.persisted){const{leave:S,delayLeave:w}=m,_=()=>S(h,b);w?w(c.el,b,_):_()}else b()},Qo=(c,u)=>{let h;for(;c!==u;)h=g(c),r(c),c=h;r(u)},ta=(c,u,h)=>{const{bum:y,scope:m,job:b,subTree:S,um:w,m:_,a:v}=c;Tr(_),Tr(v),y&&Gn(y),m.stop(),b&&(b.flags|=8,Ct(S,c,u,h)),w&&pt(w,u),pt(()=>{c.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Fe=(c,u,h,y=!1,m=!1,b=0)=>{for(let S=b;S<c.length;S++)Ct(c[S],u,h,y,m)},dn=c=>{if(c.shapeFlag&6)return dn(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const u=g(c.anchor||c.el),h=u&&u[Ka];return h?g(h):u};let Kn=!1;const pr=(c,u,h)=>{c==null?u._vnode&&Ct(u._vnode,null,null,!0):N(u._vnode||null,c,u,null,null,null,h),u._vnode=c,Kn||(Kn=!0,_r(),Wi(),Kn=!1)},Re={p:N,um:Ct,m:se,r:dr,mt:Bn,mc:Et,pc:W,pbc:ee,n:dn,o:t};let hr,mr;return{render:pr,hydrate:hr,createApp:yl(pr,hr)}}function ts({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ie({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Tl(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ao(t,e,n=!1){const s=t.children,r=e.children;if(k(s)&&k(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Kt(r[i]),a.el=o.el),!n&&a.patchFlag!==-2&&ao(o,a)),a.type===zn&&(a.el=o.el)}}function Pl(t){const e=t.slice(),n=[0];let s,r,i,o,a;const l=t.length;for(s=0;s<l;s++){const d=t[s];if(d!==0){if(r=n[n.length-1],t[r]<d){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<d?i=a+1:o=a;d<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function lo(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:lo(e)}function Tr(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Il=Symbol.for("v-scx"),Ml=()=>bn(Il);function es(t,e,n){return co(t,e,n)}function co(t,e,n=K){const{immediate:s,deep:r,flush:i,once:o}=n,a=tt({},n),l=e&&s||!e&&i!=="post";let d;if(tn){if(i==="sync"){const A=Ml();d=A.__watcherHandles||(A.__watcherHandles=[])}else if(!l){const A=()=>{};return A.stop=Rt,A.resume=Rt,A.pause=Rt,A}}const f=st;a.call=(A,R,N)=>kt(A,f,R,N);let p=!1;i==="post"?a.scheduler=A=>{pt(A,f&&f.suspense)}:i!=="sync"&&(p=!0,a.scheduler=(A,R)=>{R?A():Gs(A)}),a.augmentJob=A=>{e&&(A.flags|=4),p&&(A.flags|=2,f&&(A.id=f.uid,A.i=f))};const g=za(t,e,a);return tn&&(d?d.push(g):l&&g()),g}function Nl(t,e,n){const s=this.proxy,r=J(t)?t.includes(".")?fo(s,t):()=>s[t]:t.bind(s,s);let i;L(e)?i=e:(i=e.handler,n=e);const o=rn(this),a=co(r,i.bind(s),n);return o(),a}function fo(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const Fl=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${vt(e)}Modifiers`]||t[`${ge(e)}Modifiers`];function Rl(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||K;let r=n;const i=e.startsWith("update:"),o=i&&Fl(s,e.slice(7));o&&(o.trim&&(r=n.map(f=>J(f)?f.trim():f)),o.number&&(r=n.map(oa)));let a,l=s[a=Yn(e)]||s[a=Yn(vt(e))];!l&&i&&(l=s[a=Yn(ge(e))]),l&&kt(l,t,6,r);const d=s[a+"Once"];if(d){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,kt(d,t,6,r)}}function uo(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!L(t)){const l=d=>{const f=uo(d,e,!0);f&&(a=!0,tt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(q(t)&&s.set(t,null),null):(k(i)?i.forEach(l=>o[l]=null):tt(o,i),q(t)&&s.set(t,o),o)}function Hn(t,e){return!t||!In(e)?!1:(e=e.slice(2).replace(/Once$/,""),z(t,e[0].toLowerCase()+e.slice(1))||z(t,ge(e))||z(t,e))}function ns(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:l,render:d,renderCache:f,props:p,data:g,setupState:A,ctx:R,inheritAttrs:N}=t,H=En(t);let x,E;try{if(n.shapeFlag&4){const O=r||s,j=O;x=Mt(d.call(j,O,f,p,A,g,R)),E=a}else{const O=e;x=Mt(O.length>1?O(p,{attrs:a,slots:o,emit:l}):O(p,null)),E=e.props?a:kl(a)}}catch(O){Ye.length=0,Dn(O,t,1),x=St(pe)}let M=x;if(E&&N!==!1){const O=Object.keys(E),{shapeFlag:j}=M;O.length&&j&7&&(i&&O.some(Ds)&&(E=Ll(E,i)),M=Te(M,E,!1,!0))}return n.dirs&&(M=Te(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&Xs(M,n.transition),x=M,En(H),x}const kl=t=>{let e;for(const n in t)(n==="class"||n==="style"||In(n))&&((e||(e={}))[n]=t[n]);return e},Ll=(t,e)=>{const n={};for(const s in t)(!Ds(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Dl(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:l}=e,d=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Pr(s,o,d):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(o[g]!==s[g]&&!Hn(d,g))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Pr(s,o,d):!0:!!o;return!1}function Pr(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Hn(n,i))return!0}return!1}function jl({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const po=t=>t.__isSuspense;function Hl(t,e){e&&e.pendingBranch?k(t)?e.effects.push(...t):e.effects.push(t):Va(t)}const It=Symbol.for("v-fgt"),zn=Symbol.for("v-txt"),pe=Symbol.for("v-cmt"),yn=Symbol.for("v-stc"),Ye=[];let mt=null;function ae(t=!1){Ye.push(mt=t?null:[])}function zl(){Ye.pop(),mt=Ye[Ye.length-1]||null}let Qe=1;function Ir(t){Qe+=t,t<0&&mt&&(mt.hasOnce=!0)}function ho(t){return t.dynamicChildren=Qe>0?mt||_e:null,zl(),Qe>0&&mt&&mt.push(t),t}function ve(t,e,n,s,r,i){return ho(Q(t,e,n,s,r,i,!0))}function Ul(t,e,n,s,r){return ho(St(t,e,n,s,r,!0))}function mo(t){return t?t.__v_isVNode===!0:!1}function De(t,e){return t.type===e.type&&t.key===e.key}const go=({key:t})=>t??null,vn=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?J(t)||at(t)||L(t)?{i:_t,r:t,k:e,f:!!n}:t:null);function Q(t,e=null,n=null,s=0,r=null,i=t===It?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&go(e),ref:e&&vn(e),scopeId:Bi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:_t};return a?(Zs(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=J(n)?8:16),Qe>0&&!o&&mt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&mt.push(l),l}const St=$l;function $l(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===ll)&&(t=pe),mo(t)){const a=Te(t,e,!0);return n&&Zs(a,n),Qe>0&&!i&&mt&&(a.shapeFlag&6?mt[mt.indexOf(t)]=a:mt.push(a)),a.patchFlag=-2,a}if(ec(t)&&(t=t.__vccOpts),e){e=Wl(e);let{class:a,style:l}=e;a&&!J(a)&&(e.class=kn(a)),q(l)&&(Ys(l)&&!k(l)&&(l=tt({},l)),e.style=zs(l))}const o=J(t)?1:po(t)?128:Ya(t)?64:q(t)?4:L(t)?2:0;return Q(t,e,n,s,r,o,i,!0)}function Wl(t){return t?Ys(t)||to(t)?tt({},t):t:null}function Te(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:l}=t,d=e?Kl(r||{},e):r,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:d,key:d&&go(d),ref:e&&e.ref?n&&i?k(i)?i.concat(vn(e)):[i,vn(e)]:vn(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==It?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Te(t.ssContent),ssFallback:t.ssFallback&&Te(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&Xs(f,l.clone(f)),f}function bo(t=" ",e=0){return St(zn,null,t,e)}function Vl(t,e){const n=St(yn,null,t);return n.staticCount=e,n}function Bl(t="",e=!1){return e?(ae(),Ul(pe,null,t)):St(pe,null,t)}function Mt(t){return t==null||typeof t=="boolean"?St(pe):k(t)?St(It,null,t.slice()):mo(t)?Kt(t):St(zn,null,String(t))}function Kt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Te(t)}function Zs(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(k(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Zs(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!to(e)?e._ctx=_t:r===3&&_t&&(_t.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else L(e)?(e={default:e,_ctx:_t},n=32):(e=String(e),s&64?(n=16,e=[bo(e)]):n=8);t.children=e,t.shapeFlag|=n}function Kl(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=kn([e.class,s.class]));else if(r==="style")e.style=zs([e.style,s.style]);else if(In(r)){const i=e[r],o=s[r];o&&i!==o&&!(k(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Tt(t,e,n,s=null){kt(t,e,7,[n,s])}const Yl=Ji();let Gl=0;function Xl(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Yl,i={uid:Gl++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new pa(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:no(s,r),emitsOptions:uo(s,r),emit:null,emitted:null,propsDefaults:K,inheritAttrs:s.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Rl.bind(null,i),t.ce&&t.ce(i),i}let st=null,On,xs;{const t=Rn(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};On=e("__VUE_INSTANCE_SETTERS__",n=>st=n),xs=e("__VUE_SSR_SETTERS__",n=>tn=n)}const rn=t=>{const e=st;return On(t),t.scope.on(),()=>{t.scope.off(),On(e)}},Mr=()=>{st&&st.scope.off(),On(null)};function yo(t){return t.vnode.shapeFlag&4}let tn=!1;function ql(t,e=!1,n=!1){e&&xs(e);const{props:s,children:r}=t.vnode,i=yo(t);xl(t,s,i,e),Sl(t,r,n);const o=i?Jl(t,e):void 0;return e&&xs(!1),o}function Jl(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,ul);const{setup:s}=n;if(s){Qt();const r=t.setupContext=s.length>1?Ql(t):null,i=rn(t),o=sn(s,t,0,[t.props,r]),a=bi(o);if(te(),i(),(a||t.sp)&&!Be(t)&&Ki(t),a){if(o.then(Mr,Mr),e)return o.then(l=>{Nr(t,l,e)}).catch(l=>{Dn(l,t,0)});t.asyncDep=o}else Nr(t,o,e)}else vo(t,e)}function Nr(t,e,n){L(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:q(e)&&(t.setupState=zi(e)),vo(t,n)}let Fr;function vo(t,e,n){const s=t.type;if(!t.render){if(!e&&Fr&&!s.render){const r=s.template||qs(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,d=tt(tt({isCustomElement:i,delimiters:a},o),l);s.render=Fr(r,d)}}t.render=s.render||Rt}{const r=rn(t);Qt();try{dl(t)}finally{te(),r()}}}const Zl={get(t,e){return nt(t,"get",""),t[e]}};function Ql(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Zl),slots:t.slots,emit:t.emit,expose:e}}function Qs(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(zi(Ra(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ke)return Ke[n](t)},has(e,n){return n in e||n in Ke}})):t.proxy}function tc(t,e=!0){return L(t)?t.displayName||t.name:t.name||e&&t.__name}function ec(t){return L(t)&&"__vccOpts"in t}const nc=(t,e)=>ja(t,e,tn),sc="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _s;const Rr=typeof window<"u"&&window.trustedTypes;if(Rr)try{_s=Rr.createPolicy("vue",{createHTML:t=>t})}catch{}const xo=_s?t=>_s.createHTML(t):t=>t,rc="http://www.w3.org/2000/svg",ic="http://www.w3.org/1998/Math/MathML",jt=typeof document<"u"?document:null,kr=jt&&jt.createElement("template"),oc={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?jt.createElementNS(rc,t):e==="mathml"?jt.createElementNS(ic,t):n?jt.createElement(t,{is:n}):jt.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>jt.createTextNode(t),createComment:t=>jt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>jt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{kr.innerHTML=xo(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=kr.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ac=Symbol("_vtc");function lc(t,e,n){const s=t[ac];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Lr=Symbol("_vod"),cc=Symbol("_vsh"),fc=Symbol(""),uc=/(^|;)\s*display\s*:/;function dc(t,e,n){const s=t.style,r=J(n);let i=!1;if(n&&!r){if(e)if(J(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&xn(s,a,"")}else for(const o in e)n[o]==null&&xn(s,o,"");for(const o in n)o==="display"&&(i=!0),xn(s,o,n[o])}else if(r){if(e!==n){const o=s[fc];o&&(n+=";"+o),s.cssText=n,i=uc.test(n)}}else e&&t.removeAttribute("style");Lr in t&&(t[Lr]=i?s.display:"",t[cc]&&(s.display="none"))}const Dr=/\s*!important$/;function xn(t,e,n){if(k(n))n.forEach(s=>xn(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=pc(t,e);Dr.test(n)?t.setProperty(ge(s),n.replace(Dr,""),"important"):t[s]=n}}const jr=["Webkit","Moz","ms"],ss={};function pc(t,e){const n=ss[e];if(n)return n;let s=vt(e);if(s!=="filter"&&s in t)return ss[e]=s;s=Fn(s);for(let r=0;r<jr.length;r++){const i=jr[r]+s;if(i in t)return ss[e]=i}return e}const Hr="http://www.w3.org/1999/xlink";function zr(t,e,n,s,r,i=da(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Hr,e.slice(6,e.length)):t.setAttributeNS(Hr,e,n):n==null||i&&!_i(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Zt(n)?String(n):n)}function Ur(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?xo(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=_i(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function hc(t,e,n,s){t.addEventListener(e,n,s)}function mc(t,e,n,s){t.removeEventListener(e,n,s)}const $r=Symbol("_vei");function gc(t,e,n,s,r=null){const i=t[$r]||(t[$r]={}),o=i[e];if(s&&o)o.value=s;else{const[a,l]=bc(e);if(s){const d=i[e]=xc(s,r);hc(t,a,d,l)}else o&&(mc(t,a,o,l),i[e]=void 0)}}const Wr=/(?:Once|Passive|Capture)$/;function bc(t){let e;if(Wr.test(t)){e={};let s;for(;s=t.match(Wr);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ge(t.slice(2)),e]}let rs=0;const yc=Promise.resolve(),vc=()=>rs||(yc.then(()=>rs=0),rs=Date.now());function xc(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;kt(_c(s,n.value),e,5,[s])};return n.value=t,n.attached=vc(),n}function _c(t,e){if(k(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Vr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,wc=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?lc(t,s,o):e==="style"?dc(t,n,s):In(e)?Ds(e)||gc(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ac(t,e,s,o))?(Ur(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&zr(t,e,s,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!J(s))?Ur(t,vt(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),zr(t,e,s,o))};function Ac(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Vr(e)&&L(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Vr(e)&&J(n)?!1:e in t}const Sc=tt({patchProp:wc},oc);let Br;function Ec(){return Br||(Br=Cl(Sc))}const Cc=(...t)=>{const e=Ec().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Tc(s);if(!r)return;const i=e._component;!L(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,Oc(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Oc(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Tc(t){return J(t)?document.querySelector(t):t}const Kr=()=>{};let tr={},_o={},wo=null,Ao={mark:Kr,measure:Kr};try{typeof window<"u"&&(tr=window),typeof document<"u"&&(_o=document),typeof MutationObserver<"u"&&(wo=MutationObserver),typeof performance<"u"&&(Ao=performance)}catch{}const{userAgent:Yr=""}=tr.navigator||{},Xt=tr,Y=_o,Gr=wo,gn=Ao;Xt.document;const Wt=!!Y.documentElement&&!!Y.head&&typeof Y.addEventListener=="function"&&typeof Y.createElement=="function",So=~Yr.indexOf("MSIE")||~Yr.indexOf("Trident/");var G="classic",Eo="duotone",gt="sharp",bt="sharp-duotone",Pc=[G,Eo,gt,bt],Ic={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Xr={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Mc=["kit"],Nc=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,Fc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Rc={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},kc={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Lc={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},Dc={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},jc={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},Hc={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},Co={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},zc=["solid","regular","light","thin","duotone","brands"],Oo=[1,2,3,4,5,6,7,8,9,10],Uc=Oo.concat([11,12,13,14,15,16,17,18,19,20]),ze={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},$c=[...Object.keys(Dc),...zc,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ze.GROUP,ze.SWAP_OPACITY,ze.PRIMARY,ze.SECONDARY].concat(Oo.map(t=>"".concat(t,"x"))).concat(Uc.map(t=>"w-".concat(t))),Wc={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Vc={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Bc={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},qr={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const zt="___FONT_AWESOME___",ws=16,To="fa",Po="svg-inline--fa",he="data-fa-i2svg",As="data-fa-pseudo-element",Kc="data-fa-pseudo-element-pending",er="data-prefix",nr="data-icon",Jr="fontawesome-i2svg",Yc="async",Gc=["HTML","HEAD","STYLE","SCRIPT"],Io=(()=>{try{return!0}catch{return!1}})(),Mo=[G,gt,bt];function on(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[G]}})}const No={...Co};No[G]={...Co[G],...Xr.kit,...Xr["kit-duotone"]};const ue=on(No),Ss={...Hc};Ss[G]={...Ss[G],...qr.kit,...qr["kit-duotone"]};const en=on(Ss),Es={...jc};Es[G]={...Es[G],...Bc.kit};const de=on(Es),Cs={...Lc};Cs[G]={...Cs[G],...Vc.kit};const Xc=on(Cs),qc=Nc,Fo="fa-layers-text",Jc=Fc,Zc={...Ic};on(Zc);const Qc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],is=ze,Pe=new Set;Object.keys(en[G]).map(Pe.add.bind(Pe));Object.keys(en[gt]).map(Pe.add.bind(Pe));Object.keys(en[bt]).map(Pe.add.bind(Pe));const tf=[...Mc,...$c],Ge=Xt.FontAwesomeConfig||{};function ef(t){var e=Y.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function nf(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}Y&&typeof Y.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,s]=e;const r=nf(ef(n));r!=null&&(Ge[s]=r)});const Ro={styleDefault:"solid",familyDefault:"classic",cssPrefix:To,replacementClass:Po,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ge.familyPrefix&&(Ge.cssPrefix=Ge.familyPrefix);const Ie={...Ro,...Ge};Ie.autoReplaceSvg||(Ie.observeMutations=!1);const T={};Object.keys(Ro).forEach(t=>{Object.defineProperty(T,t,{enumerable:!0,set:function(e){Ie[t]=e,Xe.forEach(n=>n(T))},get:function(){return Ie[t]}})});Object.defineProperty(T,"familyPrefix",{enumerable:!0,set:function(t){Ie.cssPrefix=t,Xe.forEach(e=>e(T))},get:function(){return Ie.cssPrefix}});Xt.FontAwesomeConfig=T;const Xe=[];function sf(t){return Xe.push(t),()=>{Xe.splice(Xe.indexOf(t),1)}}const Vt=ws,Nt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function rf(t){if(!t||!Wt)return;const e=Y.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=Y.head.childNodes;let s=null;for(let r=n.length-1;r>-1;r--){const i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(s=i)}return Y.head.insertBefore(e,s),t}const of="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function nn(){let t=12,e="";for(;t-- >0;)e+=of[Math.random()*62|0];return e}function Me(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function sr(t){return t.classList?Me(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function ko(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function af(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(ko(t[n]),'" '),"").trim()}function Un(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function rr(t){return t.size!==Nt.size||t.x!==Nt.x||t.y!==Nt.y||t.rotate!==Nt.rotate||t.flipX||t.flipY}function lf(t){let{transform:e,containerWidth:n,iconWidth:s}=t;const r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(a)},d={transform:"translate(".concat(s/2*-1," -256)")};return{outer:r,inner:l,path:d}}function cf(t){let{transform:e,width:n=ws,height:s=ws,startCentered:r=!1}=t,i="";return r&&So?i+="translate(".concat(e.x/Vt-n/2,"em, ").concat(e.y/Vt-s/2,"em) "):r?i+="translate(calc(-50% + ".concat(e.x/Vt,"em), calc(-50% + ").concat(e.y/Vt,"em)) "):i+="translate(".concat(e.x/Vt,"em, ").concat(e.y/Vt,"em) "),i+="scale(".concat(e.size/Vt*(e.flipX?-1:1),", ").concat(e.size/Vt*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var ff=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Lo(){const t=To,e=Po,n=T.cssPrefix,s=T.replacementClass;let r=ff;if(n!==t||s!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(s))}return r}let Zr=!1;function os(){T.autoAddCss&&!Zr&&(rf(Lo()),Zr=!0)}var uf={mixout(){return{dom:{css:Lo,insertCss:os}}},hooks(){return{beforeDOMElementCreation(){os()},beforeI2svg(){os()}}}};const Ut=Xt||{};Ut[zt]||(Ut[zt]={});Ut[zt].styles||(Ut[zt].styles={});Ut[zt].hooks||(Ut[zt].hooks={});Ut[zt].shims||(Ut[zt].shims=[]);var Ft=Ut[zt];const Do=[],jo=function(){Y.removeEventListener("DOMContentLoaded",jo),Tn=1,Do.map(t=>t())};let Tn=!1;Wt&&(Tn=(Y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Y.readyState),Tn||Y.addEventListener("DOMContentLoaded",jo));function df(t){Wt&&(Tn?setTimeout(t,0):Do.push(t))}function an(t){const{tag:e,attributes:n={},children:s=[]}=t;return typeof t=="string"?ko(t):"<".concat(e," ").concat(af(n),">").concat(s.map(an).join(""),"</").concat(e,">")}function Qr(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var as=function(e,n,s,r){var i=Object.keys(e),o=i.length,a=n,l,d,f;for(s===void 0?(l=1,f=e[i[0]]):(l=0,f=s);l<o;l++)d=i[l],f=a(f,e[d],d,e);return f};function pf(t){const e=[];let n=0;const s=t.length;for(;n<s;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<s){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Os(t){const e=pf(t);return e.length===1?e[0].toString(16):null}function hf(t,e){const n=t.length;let s=t.charCodeAt(e),r;return s>=55296&&s<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(s-55296)*1024+r-56320+65536:s}function ti(t){return Object.keys(t).reduce((e,n)=>{const s=t[n];return!!s.icon?e[s.iconName]=s.icon:e[n]=s,e},{})}function Ts(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:s=!1}=n,r=ti(e);typeof Ft.hooks.addPack=="function"&&!s?Ft.hooks.addPack(t,ti(e)):Ft.styles[t]={...Ft.styles[t]||{},...r},t==="fas"&&Ts("fa",e)}const{styles:le,shims:mf}=Ft,gf={[G]:Object.values(de[G]),[gt]:Object.values(de[gt]),[bt]:Object.values(de[bt])};let ir=null,Ho={},zo={},Uo={},$o={},Wo={};const bf={[G]:Object.keys(ue[G]),[gt]:Object.keys(ue[gt]),[bt]:Object.keys(ue[bt])};function yf(t){return~tf.indexOf(t)}function vf(t,e){const n=e.split("-"),s=n[0],r=n.slice(1).join("-");return s===t&&r!==""&&!yf(r)?r:null}const Vo=()=>{const t=s=>as(le,(r,i,o)=>(r[o]=as(i,s,{}),r),{});Ho=t((s,r,i)=>(r[3]&&(s[r[3]]=i),r[2]&&r[2].filter(a=>typeof a=="number").forEach(a=>{s[a.toString(16)]=i}),s)),zo=t((s,r,i)=>(s[i]=i,r[2]&&r[2].filter(a=>typeof a=="string").forEach(a=>{s[a]=i}),s)),Wo=t((s,r,i)=>{const o=r[2];return s[i]=i,o.forEach(a=>{s[a]=i}),s});const e="far"in le||T.autoFetchSvg,n=as(mf,(s,r)=>{const i=r[0];let o=r[1];const a=r[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(s.names[i]={prefix:o,iconName:a}),typeof i=="number"&&(s.unicodes[i.toString(16)]={prefix:o,iconName:a}),s},{names:{},unicodes:{}});Uo=n.names,$o=n.unicodes,ir=$n(T.styleDefault,{family:T.familyDefault})};sf(t=>{ir=$n(t.styleDefault,{family:T.familyDefault})});Vo();function or(t,e){return(Ho[t]||{})[e]}function xf(t,e){return(zo[t]||{})[e]}function Gt(t,e){return(Wo[t]||{})[e]}function Bo(t){return Uo[t]||{prefix:null,iconName:null}}function _f(t){const e=$o[t],n=or("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function qt(){return ir}const ar=()=>({prefix:null,iconName:null,rest:[]});function $n(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=G}=e,s=ue[n][t],r=en[n][t]||en[n][s],i=t in Ft.styles?t:null;return r||i||null}const wf={[G]:Object.keys(de[G]),[gt]:Object.keys(de[gt]),[bt]:Object.keys(de[bt])};function Wn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,s={[G]:"".concat(T.cssPrefix,"-").concat(G),[gt]:"".concat(T.cssPrefix,"-").concat(gt),[bt]:"".concat(T.cssPrefix,"-").concat(bt)};let r=null,i=G;const o=Pc.filter(l=>l!==Eo);o.forEach(l=>{(t.includes(s[l])||t.some(d=>wf[l].includes(d)))&&(i=l)});const a=t.reduce((l,d)=>{const f=vf(T.cssPrefix,d);if(le[d]?(d=gf[i].includes(d)?Xc[i][d]:d,r=d,l.prefix=d):bf[i].indexOf(d)>-1?(r=d,l.prefix=$n(d,{family:i})):f?l.iconName=f:d!==T.replacementClass&&!o.some(p=>d===s[p])&&l.rest.push(d),!n&&l.prefix&&l.iconName){const p=r==="fa"?Bo(l.iconName):{},g=Gt(l.prefix,l.iconName);p.prefix&&(r=null),l.iconName=p.iconName||g||l.iconName,l.prefix=p.prefix||l.prefix,l.prefix==="far"&&!le.far&&le.fas&&!T.autoFetchSvg&&(l.prefix="fas")}return l},ar());return(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(a.prefix="fad"),!a.prefix&&i===gt&&(le.fass||T.autoFetchSvg)&&(a.prefix="fass",a.iconName=Gt(a.prefix,a.iconName)||a.iconName),!a.prefix&&i===bt&&(le.fasds||T.autoFetchSvg)&&(a.prefix="fasds",a.iconName=Gt(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||r==="fa")&&(a.prefix=qt()||"fas"),a}class Af{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]={...this.definitions[i]||{},...r[i]},Ts(i,r[i]);const o=de[G][i];o&&Ts(o,r[i]),Vo()})}reset(){this.definitions={}}_pullDefinitions(e,n){const s=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(s).map(r=>{const{prefix:i,iconName:o,icon:a}=s[r],l=a[2];e[i]||(e[i]={}),l.length>0&&l.forEach(d=>{typeof d=="string"&&(e[i][d]=a)}),e[i][o]=a}),e}}let ei=[],xe={};const Ce={},Sf=Object.keys(Ce);function Ef(t,e){let{mixoutsTo:n}=e;return ei=t,xe={},Object.keys(Ce).forEach(s=>{Sf.indexOf(s)===-1&&delete Ce[s]}),ei.forEach(s=>{const r=s.mixout?s.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(n[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=r[i][o]})}),s.hooks){const i=s.hooks();Object.keys(i).forEach(o=>{xe[o]||(xe[o]=[]),xe[o].push(i[o])})}s.provides&&s.provides(Ce)}),n}function Ps(t,e){for(var n=arguments.length,s=new Array(n>2?n-2:0),r=2;r<n;r++)s[r-2]=arguments[r];return(xe[t]||[]).forEach(o=>{e=o.apply(null,[e,...s])}),e}function me(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),s=1;s<e;s++)n[s-1]=arguments[s];(xe[t]||[]).forEach(i=>{i.apply(null,n)})}function Jt(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ce[t]?Ce[t].apply(null,e):void 0}function Is(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||qt();if(e)return e=Gt(n,e)||e,Qr(Ko.definitions,n,e)||Qr(Ft.styles,n,e)}const Ko=new Af,Cf=()=>{T.autoReplaceSvg=!1,T.observeMutations=!1,me("noAuto")},Of={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Wt?(me("beforeI2svg",t),Jt("pseudoElements2svg",t),Jt("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,df(()=>{Pf({autoReplaceSvgRoot:e}),me("watch",t)})}},Tf={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Gt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=$n(t[0]);return{prefix:n,iconName:Gt(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(T.cssPrefix,"-"))>-1||t.match(qc))){const e=Wn(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||qt(),iconName:Gt(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=qt();return{prefix:e,iconName:Gt(e,t)||t}}}},yt={noAuto:Cf,config:T,dom:Of,parse:Tf,library:Ko,findIconDefinition:Is,toHtml:an},Pf=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=Y}=t;(Object.keys(Ft.styles).length>0||T.autoFetchSvg)&&Wt&&T.autoReplaceSvg&&yt.dom.i2svg({node:e})};function Vn(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>an(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Wt)return;const n=Y.createElement("div");return n.innerHTML=t.html,n.children}}),t}function If(t){let{children:e,main:n,mask:s,attributes:r,styles:i,transform:o}=t;if(rr(o)&&n.found&&!s.found){const{width:a,height:l}=n,d={x:a/l/2,y:.5};r.style=Un({...i,"transform-origin":"".concat(d.x+o.x/16,"em ").concat(d.y+o.y/16,"em")})}return[{tag:"svg",attributes:r,children:e}]}function Mf(t){let{prefix:e,iconName:n,children:s,attributes:r,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(T.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...r,id:o},children:s}]}]}function lr(t){const{icons:{main:e,mask:n},prefix:s,iconName:r,transform:i,symbol:o,title:a,maskId:l,titleId:d,extra:f,watchable:p=!1}=t,{width:g,height:A}=n.found?n:e,R=s==="fak",N=[T.replacementClass,r?"".concat(T.cssPrefix,"-").concat(r):""].filter(j=>f.classes.indexOf(j)===-1).filter(j=>j!==""||!!j).concat(f.classes).join(" ");let H={children:[],attributes:{...f.attributes,"data-prefix":s,"data-icon":r,class:N,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(A)}};const x=R&&!~f.classes.indexOf("fa-fw")?{width:"".concat(g/A*16*.0625,"em")}:{};p&&(H.attributes[he]=""),a&&(H.children.push({tag:"title",attributes:{id:H.attributes["aria-labelledby"]||"title-".concat(d||nn())},children:[a]}),delete H.attributes.title);const E={...H,prefix:s,iconName:r,main:e,mask:n,maskId:l,transform:i,symbol:o,styles:{...x,...f.styles}},{children:M,attributes:O}=n.found&&e.found?Jt("generateAbstractMask",E)||{children:[],attributes:{}}:Jt("generateAbstractIcon",E)||{children:[],attributes:{}};return E.children=M,E.attributes=O,o?Mf(E):If(E)}function ni(t){const{content:e,width:n,height:s,transform:r,title:i,extra:o,watchable:a=!1}=t,l={...o.attributes,...i?{title:i}:{},class:o.classes.join(" ")};a&&(l[he]="");const d={...o.styles};rr(r)&&(d.transform=cf({transform:r,startCentered:!0,width:n,height:s}),d["-webkit-transform"]=d.transform);const f=Un(d);f.length>0&&(l.style=f);const p=[];return p.push({tag:"span",attributes:l,children:[e]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Nf(t){const{content:e,title:n,extra:s}=t,r={...s.attributes,...n?{title:n}:{},class:s.classes.join(" ")},i=Un(s.styles);i.length>0&&(r.style=i);const o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:ls}=Ft;function Ms(t){const e=t[0],n=t[1],[s]=t.slice(4);let r=null;return Array.isArray(s)?r={tag:"g",attributes:{class:"".concat(T.cssPrefix,"-").concat(is.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(is.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(is.PRIMARY),fill:"currentColor",d:s[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:r}}const Ff={found:!1,width:512,height:512};function Rf(t,e){!Io&&!T.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ns(t,e){let n=e;return e==="fa"&&T.styleDefault!==null&&(e=qt()),new Promise((s,r)=>{if(n==="fa"){const i=Bo(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&ls[e]&&ls[e][t]){const i=ls[e][t];return s(Ms(i))}Rf(t,e),s({...Ff,icon:T.showMissingIcons&&t?Jt("missingIconAbstract")||{}:{}})})}const si=()=>{},Fs=T.measurePerformance&&gn&&gn.mark&&gn.measure?gn:{mark:si,measure:si},Ue='FA "6.6.0"',kf=t=>(Fs.mark("".concat(Ue," ").concat(t," begins")),()=>Yo(t)),Yo=t=>{Fs.mark("".concat(Ue," ").concat(t," ends")),Fs.measure("".concat(Ue," ").concat(t),"".concat(Ue," ").concat(t," begins"),"".concat(Ue," ").concat(t," ends"))};var cr={begin:kf,end:Yo};const _n=()=>{};function ri(t){return typeof(t.getAttribute?t.getAttribute(he):null)=="string"}function Lf(t){const e=t.getAttribute?t.getAttribute(er):null,n=t.getAttribute?t.getAttribute(nr):null;return e&&n}function Df(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(T.replacementClass)}function jf(){return T.autoReplaceSvg===!0?wn.replace:wn[T.autoReplaceSvg]||wn.replace}function Hf(t){return Y.createElementNS("http://www.w3.org/2000/svg",t)}function zf(t){return Y.createElement(t)}function Go(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Hf:zf}=e;if(typeof t=="string")return Y.createTextNode(t);const s=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){s.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){s.appendChild(Go(i,{ceFn:n}))}),s}function Uf(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const wn={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Go(n),e)}),e.getAttribute(he)===null&&T.keepOriginalSource){let n=Y.createComment(Uf(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~sr(e).indexOf(T.replacementClass))return wn.replace(t);const s=new RegExp("".concat(T.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,a)=>(a===T.replacementClass||a.match(s)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const r=n.map(i=>an(i)).join(`
`);e.setAttribute(he,""),e.innerHTML=r}};function ii(t){t()}function Xo(t,e){const n=typeof e=="function"?e:_n;if(t.length===0)n();else{let s=ii;T.mutateApproach===Yc&&(s=Xt.requestAnimationFrame||ii),s(()=>{const r=jf(),i=cr.begin("mutate");t.map(r),i(),n()})}}let fr=!1;function qo(){fr=!0}function Rs(){fr=!1}let Pn=null;function oi(t){if(!Gr||!T.observeMutations)return;const{treeCallback:e=_n,nodeCallback:n=_n,pseudoElementsCallback:s=_n,observeMutationsRoot:r=Y}=t;Pn=new Gr(i=>{if(fr)return;const o=qt();Me(i).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!ri(a.addedNodes[0])&&(T.searchPseudoElements&&s(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&T.searchPseudoElements&&s(a.target.parentNode),a.type==="attributes"&&ri(a.target)&&~Qc.indexOf(a.attributeName))if(a.attributeName==="class"&&Lf(a.target)){const{prefix:l,iconName:d}=Wn(sr(a.target));a.target.setAttribute(er,l||o),d&&a.target.setAttribute(nr,d)}else Df(a.target)&&n(a.target)})}),Wt&&Pn.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function $f(){Pn&&Pn.disconnect()}function Wf(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((s,r)=>{const i=r.split(":"),o=i[0],a=i.slice(1);return o&&a.length>0&&(s[o]=a.join(":").trim()),s},{})),n}function Vf(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),s=t.innerText!==void 0?t.innerText.trim():"";let r=Wn(sr(t));return r.prefix||(r.prefix=qt()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&s.length>0&&(r.iconName=xf(r.prefix,t.innerText)||or(r.prefix,Os(t.innerText))),!r.iconName&&T.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Bf(t){const e=Me(t.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),n=t.getAttribute("title"),s=t.getAttribute("data-fa-title-id");return T.autoA11y&&(n?e["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(s||nn()):(e["aria-hidden"]="true",e.focusable="false")),e}function Kf(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Nt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ai(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:s,rest:r}=Vf(t),i=Bf(t),o=Ps("parseNodeAttributes",{},t);let a=e.styleParser?Wf(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:s,transform:Nt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:a,attributes:i},...o}}const{styles:Yf}=Ft;function Jo(t){const e=T.autoReplaceSvg==="nest"?ai(t,{styleParser:!1}):ai(t);return~e.extra.classes.indexOf(Fo)?Jt("generateLayersText",t,e):Jt("generateSvgReplacementMutation",t,e)}let Lt=new Set;Mo.map(t=>{Lt.add("fa-".concat(t))});Object.keys(ue[G]).map(Lt.add.bind(Lt));Object.keys(ue[gt]).map(Lt.add.bind(Lt));Object.keys(ue[bt]).map(Lt.add.bind(Lt));Lt=[...Lt];function li(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Wt)return Promise.resolve();const n=Y.documentElement.classList,s=f=>n.add("".concat(Jr,"-").concat(f)),r=f=>n.remove("".concat(Jr,"-").concat(f)),i=T.autoFetchSvg?Lt:Mo.map(f=>"fa-".concat(f)).concat(Object.keys(Yf));i.includes("fa")||i.push("fa");const o=[".".concat(Fo,":not([").concat(he,"])")].concat(i.map(f=>".".concat(f,":not([").concat(he,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=Me(t.querySelectorAll(o))}catch{}if(a.length>0)s("pending"),r("complete");else return Promise.resolve();const l=cr.begin("onTree"),d=a.reduce((f,p)=>{try{const g=Jo(p);g&&f.push(g)}catch(g){Io||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise((f,p)=>{Promise.all(d).then(g=>{Xo(g,()=>{s("active"),s("complete"),r("pending"),typeof e=="function"&&e(),l(),f()})}).catch(g=>{l(),p(g)})})}function Gf(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Jo(t).then(n=>{n&&Xo([n],e)})}function Xf(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const s=(e||{}).icon?e:Is(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Is(r||{})),t(s,{...n,mask:r})}}const qf=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Nt,symbol:s=!1,mask:r=null,maskId:i=null,title:o=null,titleId:a=null,classes:l=[],attributes:d={},styles:f={}}=e;if(!t)return;const{prefix:p,iconName:g,icon:A}=t;return Vn({type:"icon",...t},()=>(me("beforeDOMElementCreation",{iconDefinition:t,params:e}),T.autoA11y&&(o?d["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(a||nn()):(d["aria-hidden"]="true",d.focusable="false")),lr({icons:{main:Ms(A),mask:r?Ms(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:g,transform:{...Nt,...n},symbol:s,title:o,maskId:i,titleId:a,extra:{attributes:d,styles:f,classes:l}})))};var Jf={mixout(){return{icon:Xf(qf)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=li,t.nodeCallback=Gf,t}}},provides(t){t.i2svg=function(e){const{node:n=Y,callback:s=()=>{}}=e;return li(n,s)},t.generateSvgReplacementMutation=function(e,n){const{iconName:s,title:r,titleId:i,prefix:o,transform:a,symbol:l,mask:d,maskId:f,extra:p}=n;return new Promise((g,A)=>{Promise.all([Ns(s,o),d.iconName?Ns(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(R=>{let[N,H]=R;g([e,lr({icons:{main:N,mask:H},prefix:o,iconName:s,transform:a,symbol:l,maskId:f,title:r,titleId:i,extra:p,watchable:!0})])}).catch(A)})},t.generateAbstractIcon=function(e){let{children:n,attributes:s,main:r,transform:i,styles:o}=e;const a=Un(o);a.length>0&&(s.style=a);let l;return rr(i)&&(l=Jt("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(l||r.icon),{children:n,attributes:s}}}},Zf={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Vn({type:"layer"},()=>{me("beforeDOMElementCreation",{assembler:t,params:e});let s=[];return t(r=>{Array.isArray(r)?r.map(i=>{s=s.concat(i.abstract)}):s=s.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(T.cssPrefix,"-layers"),...n].join(" ")},children:s}]})}}}},Qf={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:s=[],attributes:r={},styles:i={}}=e;return Vn({type:"counter",content:t},()=>(me("beforeDOMElementCreation",{content:t,params:e}),Nf({content:t.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(T.cssPrefix,"-layers-counter"),...s]}})))}}}},tu={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Nt,title:s=null,classes:r=[],attributes:i={},styles:o={}}=e;return Vn({type:"text",content:t},()=>(me("beforeDOMElementCreation",{content:t,params:e}),ni({content:t,transform:{...Nt,...n},title:s,extra:{attributes:i,styles:o,classes:["".concat(T.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:s,transform:r,extra:i}=n;let o=null,a=null;if(So){const l=parseInt(getComputedStyle(e).fontSize,10),d=e.getBoundingClientRect();o=d.width/l,a=d.height/l}return T.autoA11y&&!s&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,ni({content:e.innerHTML,width:o,height:a,transform:r,title:s,extra:i,watchable:!0})])}}};const eu=new RegExp('"',"ug"),ci=[1105920,1112319],fi={FontAwesome:{normal:"fas",400:"fas"},...kc,...Rc,...Wc},ks=Object.keys(fi).reduce((t,e)=>(t[e.toLowerCase()]=fi[e],t),{}),nu=Object.keys(ks).reduce((t,e)=>{const n=ks[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function su(t){const e=t.replace(eu,""),n=hf(e,0),s=n>=ci[0]&&n<=ci[1],r=e.length===2?e[0]===e[1]:!1;return{value:Os(r?e[0]:e),isSecondary:s||r}}function ru(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),s=parseInt(e),r=isNaN(s)?"normal":s;return(ks[n]||{})[r]||nu[n]}function ui(t,e){const n="".concat(Kc).concat(e.replace(":","-"));return new Promise((s,r)=>{if(t.getAttribute(n)!==null)return s();const o=Me(t.children).filter(g=>g.getAttribute(As)===e)[0],a=Xt.getComputedStyle(t,e),l=a.getPropertyValue("font-family"),d=l.match(Jc),f=a.getPropertyValue("font-weight"),p=a.getPropertyValue("content");if(o&&!d)return t.removeChild(o),s();if(d&&p!=="none"&&p!==""){const g=a.getPropertyValue("content");let A=ru(l,f);const{value:R,isSecondary:N}=su(g),H=d[0].startsWith("FontAwesome");let x=or(A,R),E=x;if(H){const M=_f(R);M.iconName&&M.prefix&&(x=M.iconName,A=M.prefix)}if(x&&!N&&(!o||o.getAttribute(er)!==A||o.getAttribute(nr)!==E)){t.setAttribute(n,E),o&&t.removeChild(o);const M=Kf(),{extra:O}=M;O.attributes[As]=e,Ns(x,A).then(j=>{const ct=lr({...M,icons:{main:j,mask:ar()},prefix:A,iconName:E,extra:O,watchable:!0}),Z=Y.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(Z,t.firstChild):t.appendChild(Z),Z.outerHTML=ct.map(Et=>an(Et)).join(`
`),t.removeAttribute(n),s()}).catch(r)}else s()}else s()})}function iu(t){return Promise.all([ui(t,"::before"),ui(t,"::after")])}function ou(t){return t.parentNode!==document.head&&!~Gc.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(As)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function di(t){if(Wt)return new Promise((e,n)=>{const s=Me(t.querySelectorAll("*")).filter(ou).map(iu),r=cr.begin("searchPseudoElements");qo(),Promise.all(s).then(()=>{r(),Rs(),e()}).catch(()=>{r(),Rs(),n()})})}var au={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=di,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=Y}=e;T.searchPseudoElements&&di(n)}}};let pi=!1;var lu={mixout(){return{dom:{unwatch(){qo(),pi=!0}}}},hooks(){return{bootstrap(){oi(Ps("mutationObserverCallbacks",{}))},noAuto(){$f()},watch(t){const{observeMutationsRoot:e}=t;pi?Rs():oi(Ps("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const hi=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,s)=>{const r=s.toLowerCase().split("-"),i=r[0];let o=r.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var cu={mixout(){return{parse:{transform:t=>hi(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=hi(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:s,containerWidth:r,iconWidth:i}=e;const o={transform:"translate(".concat(r/2," 256)")},a="translate(".concat(s.x*32,", ").concat(s.y*32,") "),l="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),d="rotate(".concat(s.rotate," 0 0)"),f={transform:"".concat(a," ").concat(l," ").concat(d)},p={transform:"translate(".concat(i/2*-1," -256)")},g={outer:o,inner:f,path:p};return{tag:"g",attributes:{...g.outer},children:[{tag:"g",attributes:{...g.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...g.path}}]}]}}}};const cs={x:0,y:0,width:"100%",height:"100%"};function mi(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function fu(t){return t.tag==="g"?t.children:[t]}var uu={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),s=n?Wn(n.split(" ").map(r=>r.trim())):ar();return s.prefix||(s.prefix=qt()),t.mask=s,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:s,main:r,mask:i,maskId:o,transform:a}=e;const{width:l,icon:d}=r,{width:f,icon:p}=i,g=lf({transform:a,containerWidth:f,iconWidth:l}),A={tag:"rect",attributes:{...cs,fill:"white"}},R=d.children?{children:d.children.map(mi)}:{},N={tag:"g",attributes:{...g.inner},children:[mi({tag:d.tag,attributes:{...d.attributes,...g.path},...R})]},H={tag:"g",attributes:{...g.outer},children:[N]},x="mask-".concat(o||nn()),E="clip-".concat(o||nn()),M={tag:"mask",attributes:{...cs,id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[A,H]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:fu(p)},M]};return n.push(O,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(x,")"),...cs}}),{children:n,attributes:s}}}},du={provides(t){let e=!1;Xt.matchMedia&&(e=Xt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],s={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...s,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const i={...r,attributeName:"opacity"},o={tag:"circle",attributes:{...s,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...r,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...i,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...s,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...i,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...s,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...i,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},pu={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),s=n===null?!1:n===""?!0:n;return t.symbol=s,t}}}},hu=[uf,Jf,Zf,Qf,tu,au,lu,cu,uu,du,pu];Ef(hu,{mixoutsTo:yt});yt.noAuto;yt.config;yt.library;yt.dom;yt.parse;yt.findIconDefinition;yt.toHtml;yt.icon;yt.layer;yt.text;yt.counter;var mu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},gu={exports:{}};(function(t){(function(e){var n=function(x,E,M){if(!d(E)||p(E)||g(E)||A(E)||l(E))return E;var O,j=0,ct=0;if(f(E))for(O=[],ct=E.length;j<ct;j++)O.push(n(x,E[j],M));else{O={};for(var Z in E)Object.prototype.hasOwnProperty.call(E,Z)&&(O[x(Z,M)]=n(x,E[Z],M))}return O},s=function(x,E){E=E||{};var M=E.separator||"_",O=E.split||/(?=[A-Z])/;return x.split(O).join(M)},r=function(x){return R(x)?x:(x=x.replace(/[\-_\s]+(.)?/g,function(E,M){return M?M.toUpperCase():""}),x.substr(0,1).toLowerCase()+x.substr(1))},i=function(x){var E=r(x);return E.substr(0,1).toUpperCase()+E.substr(1)},o=function(x,E){return s(x,E).toLowerCase()},a=Object.prototype.toString,l=function(x){return typeof x=="function"},d=function(x){return x===Object(x)},f=function(x){return a.call(x)=="[object Array]"},p=function(x){return a.call(x)=="[object Date]"},g=function(x){return a.call(x)=="[object RegExp]"},A=function(x){return a.call(x)=="[object Boolean]"},R=function(x){return x=x-0,x===x},N=function(x,E){var M=E&&"process"in E?E.process:E;return typeof M!="function"?x:function(O,j){return M(O,x,j)}},H={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(x,E){return n(N(r,E),x)},decamelizeKeys:function(x,E){return n(N(o,E),x,E)},pascalizeKeys:function(x,E){return n(N(i,E),x)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=H:e.humps=H})(mu)})(gu);var bu=!1;try{bu=!0}catch{}const Zo=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},yu={name:"Profile",data(){return{user:{name:"Aixlusion",title:"Also khown as FZVN",bio:"I do coding when inspired, currently progressing in C++/Java/VueJS/HTML/CSS",image:"../src/assets/pfp.jpg",socialLinks:[{platform:"Discord",url:"https://discord.com/users/422016649793765377",icon:"fa-brands fa-discord"},{platform:"GitHub",url:"https://github.com/Aixlusion",icon:"fab fa-github"},{platform:"Twitter",url:"https://twitter.com/Aixlusion",icon:"fab fa-x-twitter"}],media:"./src/assets/gif1.gif",mediaType:"gif"}}}},vu={class:"profile-page"},xu={class:"profile-header"},_u={class:"profile-info"},wu=["src"],Au={class:"user-title"},Su={class:"bio"},Eu={class:"social-links"},Cu=["href"],Ou={class:"media-section"},Tu=["src"],Pu=["src"];function Iu(t,e,n,s,r,i){return ae(),ve("div",vu,[e[3]||(e[3]=Q("p",null,"Currently Not Support For Mobile View. 😭",-1)),Q("header",xu,[Q("div",_u,[Q("img",{src:r.user.image,alt:"Profile Picture",class:"profile-picture"},null,8,wu),Q("h1",null,je(r.user.name),1),Q("p",Au,je(r.user.title),1)]),e[0]||(e[0]=Vl('<div class="programming-icons"><p class="programming-title">Programming Languages</p><div class="icons"><i class="fab fa-java" title="Java"></i><i class="fab fa-js" title="JavaScript"></i><i class="fab fa-vuejs" title="Vue.js"></i><i class="fab fa-html5" title="HTML5"></i><i class="fab fa-css3-alt" title="CSS3"></i></div></div>',1))]),Q("section",Su,[e[1]||(e[1]=Q("h2",null,"About Me",-1)),Q("p",null,je(r.user.bio),1)]),Q("section",Eu,[e[2]||(e[2]=Q("h2",null,"My Social Links",-1)),Q("ul",null,[(ae(!0),ve(It,null,fl(r.user.socialLinks,o=>(ae(),ve("li",{key:o.platform},[Q("a",{href:o.url,target:"_blank"},[Q("i",{class:kn(o.icon),"aria-hidden":"true"},null,2),bo(" "+je(o.platform),1)],8,Cu)]))),128))])]),Q("section",Ou,[r.user.mediaType==="video"?(ae(),ve("video",{key:0,src:r.user.media,controls:""},null,8,Tu)):r.user.mediaType==="gif"?(ae(),ve("img",{key:1,src:r.user.media,alt:"Profile Media"},null,8,Pu)):Bl("",!0)])])}const Mu=Zo(yu,[["render",Iu]]),Nu={components:{Profile:Mu}},Fu={id:"app"};function Ru(t,e,n,s,r,i){const o=al("Profile");return ae(),ve("div",Fu,[St(o)])}const ku=Zo(Nu,[["render",Ru]]);Cc(ku).mount("#app");
