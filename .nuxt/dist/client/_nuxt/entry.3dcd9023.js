function Na(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Ig="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Cg=Na(Ig);function yf(t){return!!t||t===""}function Ir(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Re(s)?Rg(s):Ir(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Re(t))return t;if(be(t))return t}}const Tg=/;(?![^(]*\))/g,Sg=/:(.+)/;function Rg(t){const e={};return t.split(Tg).forEach(n=>{if(n){const s=n.split(Sg);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Cr(t){let e="";if(Re(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const s=Cr(t[n]);s&&(e+=s+" ")}else if(be(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function AR(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Re(e)&&(t.class=Cr(e)),n&&(t.style=Ir(n)),t}const kR=t=>Re(t)?t:t==null?"":G(t)||be(t)&&(t.toString===wf||!Q(t.toString))?JSON.stringify(t,vf,2):String(t),vf=(t,e)=>e&&e.__v_isRef?vf(t,e.value):ns(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:bf(e)?{[`Set(${e.size})`]:[...e.values()]}:be(e)&&!G(e)&&!If(e)?String(e):e,_e={},ts=[],gt=()=>{},Ag=()=>!1,kg=/^on[^a-z]/,gi=t=>kg.test(t),Oa=t=>t.startsWith("onUpdate:"),Me=Object.assign,Pa=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ng=Object.prototype.hasOwnProperty,ne=(t,e)=>Ng.call(t,e),G=Array.isArray,ns=t=>Tr(t)==="[object Map]",bf=t=>Tr(t)==="[object Set]",Q=t=>typeof t=="function",Re=t=>typeof t=="string",xa=t=>typeof t=="symbol",be=t=>t!==null&&typeof t=="object",Ef=t=>be(t)&&Q(t.then)&&Q(t.catch),wf=Object.prototype.toString,Tr=t=>wf.call(t),Og=t=>Tr(t).slice(8,-1),If=t=>Tr(t)==="[object Object]",Ma=t=>Re(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ws=Na(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Sr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Pg=/-(\w)/g,At=Sr(t=>t.replace(Pg,(e,n)=>n?n.toUpperCase():"")),xg=/\B([A-Z])/g,Is=Sr(t=>t.replace(xg,"-$1").toLowerCase()),Rr=Sr(t=>t.charAt(0).toUpperCase()+t.slice(1)),eo=Sr(t=>t?`on${Rr(t)}`:""),ti=(t,e)=>!Object.is(t,e),qs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Yi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Da=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Vl;const Mg=()=>Vl||(Vl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let bt;class Dg{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&bt&&(this.parent=bt,this.index=(bt.scopes||(bt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=bt;try{return bt=this,e()}finally{bt=n}}}on(){bt=this}off(){bt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function Lg(t,e=bt){e&&e.active&&e.effects.push(t)}const La=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Cf=t=>(t.w&un)>0,Tf=t=>(t.n&un)>0,Fg=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=un},Ug=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Cf(i)&&!Tf(i)?i.delete(t):e[n++]=i,i.w&=~un,i.n&=~un}e.length=n}},Lo=new WeakMap;let Hs=0,un=1;const Fo=30;let ht;const Cn=Symbol(""),Uo=Symbol("");class Fa{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Lg(this,s)}run(){if(!this.active)return this.fn();let e=ht,n=on;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ht,ht=this,on=!0,un=1<<++Hs,Hs<=Fo?Fg(this):Kl(this),this.fn()}finally{Hs<=Fo&&Ug(this),un=1<<--Hs,ht=this.parent,on=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ht===this?this.deferStop=!0:this.active&&(Kl(this),this.onStop&&this.onStop(),this.active=!1)}}function Kl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let on=!0;const Sf=[];function Cs(){Sf.push(on),on=!1}function Ts(){const t=Sf.pop();on=t===void 0?!0:t}function et(t,e,n){if(on&&ht){let s=Lo.get(t);s||Lo.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=La()),Rf(i)}}function Rf(t,e){let n=!1;Hs<=Fo?Tf(t)||(t.n|=un,n=!Cf(t)):n=!t.has(ht),n&&(t.add(ht),ht.deps.push(t))}function Bt(t,e,n,s,i,r){const o=Lo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&G(t))o.forEach((l,c)=>{(c==="length"||c>=s)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":G(t)?Ma(n)&&a.push(o.get("length")):(a.push(o.get(Cn)),ns(t)&&a.push(o.get(Uo)));break;case"delete":G(t)||(a.push(o.get(Cn)),ns(t)&&a.push(o.get(Uo)));break;case"set":ns(t)&&a.push(o.get(Cn));break}if(a.length===1)a[0]&&Bo(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Bo(La(l))}}function Bo(t,e){const n=G(t)?t:[...t];for(const s of n)s.computed&&zl(s);for(const s of n)s.computed||zl(s)}function zl(t,e){(t!==ht||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Bg=Na("__proto__,__v_isRef,__isVue"),Af=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(xa)),Hg=Ua(),$g=Ua(!1,!0),jg=Ua(!0),Gl=Wg();function Wg(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ae(this);for(let r=0,o=this.length;r<o;r++)et(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(ae)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Cs();const s=ae(this)[e].apply(this,n);return Ts(),s}}),t}function Ua(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?r_:xf:e?Pf:Of).get(s))return s;const o=G(s);if(!t&&o&&ne(Gl,i))return Reflect.get(Gl,i,r);const a=Reflect.get(s,i,r);return(xa(i)?Af.has(i):Bg(i))||(t||et(s,"get",i),e)?a:Se(a)?o&&Ma(i)?a:a.value:be(a)?t?Mf(a):kt(a):a}}const qg=kf(),Vg=kf(!0);function kf(t=!1){return function(n,s,i,r){let o=n[s];if(hs(o)&&Se(o)&&!Se(i))return!1;if(!t&&(!Qi(i)&&!hs(i)&&(o=ae(o),i=ae(i)),!G(n)&&Se(o)&&!Se(i)))return o.value=i,!0;const a=G(n)&&Ma(s)?Number(s)<n.length:ne(n,s),l=Reflect.set(n,s,i,r);return n===ae(r)&&(a?ti(i,o)&&Bt(n,"set",s,i):Bt(n,"add",s,i)),l}}function Kg(t,e){const n=ne(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Bt(t,"delete",e,void 0),s}function zg(t,e){const n=Reflect.has(t,e);return(!xa(e)||!Af.has(e))&&et(t,"has",e),n}function Gg(t){return et(t,"iterate",G(t)?"length":Cn),Reflect.ownKeys(t)}const Nf={get:Hg,set:qg,deleteProperty:Kg,has:zg,ownKeys:Gg},Yg={get:jg,set(t,e){return!0},deleteProperty(t,e){return!0}},Qg=Me({},Nf,{get:$g,set:Vg}),Ba=t=>t,Ar=t=>Reflect.getPrototypeOf(t);function ki(t,e,n=!1,s=!1){t=t.__v_raw;const i=ae(t),r=ae(e);n||(e!==r&&et(i,"get",e),et(i,"get",r));const{has:o}=Ar(i),a=s?Ba:n?Wa:ni;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Ni(t,e=!1){const n=this.__v_raw,s=ae(n),i=ae(t);return e||(t!==i&&et(s,"has",t),et(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Oi(t,e=!1){return t=t.__v_raw,!e&&et(ae(t),"iterate",Cn),Reflect.get(t,"size",t)}function Yl(t){t=ae(t);const e=ae(this);return Ar(e).has.call(e,t)||(e.add(t),Bt(e,"add",t,t)),this}function Ql(t,e){e=ae(e);const n=ae(this),{has:s,get:i}=Ar(n);let r=s.call(n,t);r||(t=ae(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?ti(e,o)&&Bt(n,"set",t,e):Bt(n,"add",t,e),this}function Jl(t){const e=ae(this),{has:n,get:s}=Ar(e);let i=n.call(e,t);i||(t=ae(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Bt(e,"delete",t,void 0),r}function Xl(){const t=ae(this),e=t.size!==0,n=t.clear();return e&&Bt(t,"clear",void 0,void 0),n}function Pi(t,e){return function(s,i){const r=this,o=r.__v_raw,a=ae(o),l=e?Ba:t?Wa:ni;return!t&&et(a,"iterate",Cn),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function xi(t,e,n){return function(...s){const i=this.__v_raw,r=ae(i),o=ns(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Ba:e?Wa:ni;return!e&&et(r,"iterate",l?Uo:Cn),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Kt(t){return function(...e){return t==="delete"?!1:this}}function Jg(){const t={get(r){return ki(this,r)},get size(){return Oi(this)},has:Ni,add:Yl,set:Ql,delete:Jl,clear:Xl,forEach:Pi(!1,!1)},e={get(r){return ki(this,r,!1,!0)},get size(){return Oi(this)},has:Ni,add:Yl,set:Ql,delete:Jl,clear:Xl,forEach:Pi(!1,!0)},n={get(r){return ki(this,r,!0)},get size(){return Oi(this,!0)},has(r){return Ni.call(this,r,!0)},add:Kt("add"),set:Kt("set"),delete:Kt("delete"),clear:Kt("clear"),forEach:Pi(!0,!1)},s={get(r){return ki(this,r,!0,!0)},get size(){return Oi(this,!0)},has(r){return Ni.call(this,r,!0)},add:Kt("add"),set:Kt("set"),delete:Kt("delete"),clear:Kt("clear"),forEach:Pi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=xi(r,!1,!1),n[r]=xi(r,!0,!1),e[r]=xi(r,!1,!0),s[r]=xi(r,!0,!0)}),[t,n,e,s]}const[Xg,Zg,e_,t_]=Jg();function Ha(t,e){const n=e?t?t_:e_:t?Zg:Xg;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ne(n,i)&&i in s?n:s,i,r)}const n_={get:Ha(!1,!1)},s_={get:Ha(!1,!0)},i_={get:Ha(!0,!1)},Of=new WeakMap,Pf=new WeakMap,xf=new WeakMap,r_=new WeakMap;function o_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function a_(t){return t.__v_skip||!Object.isExtensible(t)?0:o_(Og(t))}function kt(t){return hs(t)?t:$a(t,!1,Nf,n_,Of)}function l_(t){return $a(t,!1,Qg,s_,Pf)}function Mf(t){return $a(t,!0,Yg,i_,xf)}function $a(t,e,n,s,i){if(!be(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=a_(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function ss(t){return hs(t)?ss(t.__v_raw):!!(t&&t.__v_isReactive)}function hs(t){return!!(t&&t.__v_isReadonly)}function Qi(t){return!!(t&&t.__v_isShallow)}function Df(t){return ss(t)||hs(t)}function ae(t){const e=t&&t.__v_raw;return e?ae(e):t}function ja(t){return Yi(t,"__v_skip",!0),t}const ni=t=>be(t)?kt(t):t,Wa=t=>be(t)?Mf(t):t;function Lf(t){on&&ht&&(t=ae(t),Rf(t.dep||(t.dep=La())))}function Ff(t,e){t=ae(t),t.dep&&Bo(t.dep)}function Se(t){return!!(t&&t.__v_isRef===!0)}function Tn(t){return Uf(t,!1)}function Ji(t){return Uf(t,!0)}function Uf(t,e){return Se(t)?t:new c_(t,e)}class c_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ae(e),this._value=n?e:ni(e)}get value(){return Lf(this),this._value}set value(e){const n=this.__v_isShallow||Qi(e)||hs(e);e=n?e:ae(e),ti(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ni(e),Ff(this))}}function Je(t){return Se(t)?t.value:t}const u_={get:(t,e,n)=>Je(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Se(i)&&!Se(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Bf(t){return ss(t)?t:new Proxy(t,u_)}class f_{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Hf(t,e,n){const s=t[e];return Se(s)?s:new f_(t,e,n)}var $f;class h_{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[$f]=!1,this._dirty=!0,this.effect=new Fa(e,()=>{this._dirty||(this._dirty=!0,Ff(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=ae(this);return Lf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}$f="__v_isReadonly";function d_(t,e,n=!1){let s,i;const r=Q(t);return r?(s=t,i=gt):(s=t.get,i=t.set),new h_(s,i,r||!i,n)}function an(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Ss(r,e,n)}return i}function rt(t,e,n,s){if(Q(t)){const r=an(t,e,n,s);return r&&Ef(r)&&r.catch(o=>{Ss(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(rt(t[r],e,n,s));return i}function Ss(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){an(l,null,10,[t,o,a]);return}}p_(t,n,i,s)}function p_(t,e,n,s=!0){console.error(t)}let si=!1,Ho=!1;const Be=[];let wt=0;const is=[];let Mt=null,bn=0;const jf=Promise.resolve();let qa=null;function Va(t){const e=qa||jf;return t?e.then(this?t.bind(this):t):e}function g_(t){let e=wt+1,n=Be.length;for(;e<n;){const s=e+n>>>1;ii(Be[s])<t?e=s+1:n=s}return e}function kr(t){(!Be.length||!Be.includes(t,si&&t.allowRecurse?wt+1:wt))&&(t.id==null?Be.push(t):Be.splice(g_(t.id),0,t),Wf())}function Wf(){!si&&!Ho&&(Ho=!0,qa=jf.then(Vf))}function __(t){const e=Be.indexOf(t);e>wt&&Be.splice(e,1)}function qf(t){G(t)?is.push(...t):(!Mt||!Mt.includes(t,t.allowRecurse?bn+1:bn))&&is.push(t),Wf()}function Zl(t,e=si?wt+1:0){for(;e<Be.length;e++){const n=Be[e];n&&n.pre&&(Be.splice(e,1),e--,n())}}function Xi(t){if(is.length){const e=[...new Set(is)];if(is.length=0,Mt){Mt.push(...e);return}for(Mt=e,Mt.sort((n,s)=>ii(n)-ii(s)),bn=0;bn<Mt.length;bn++)Mt[bn]();Mt=null,bn=0}}const ii=t=>t.id==null?1/0:t.id,m_=(t,e)=>{const n=ii(t)-ii(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Vf(t){Ho=!1,si=!0,Be.sort(m_);const e=gt;try{for(wt=0;wt<Be.length;wt++){const n=Be[wt];n&&n.active!==!1&&an(n,null,14)}}finally{wt=0,Be.length=0,Xi(),si=!1,qa=null,(Be.length||is.length)&&Vf()}}function y_(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||_e;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=s[u]||_e;h&&(i=n.map(p=>p.trim())),f&&(i=n.map(Da))}let a,l=s[a=eo(e)]||s[a=eo(At(e))];!l&&r&&(l=s[a=eo(Is(e))]),l&&rt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,rt(c,t,6,i)}}function Kf(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!Q(t)){const l=c=>{const u=Kf(c,e,!0);u&&(a=!0,Me(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(be(t)&&s.set(t,null),null):(G(r)?r.forEach(l=>o[l]=null):Me(o,r),be(t)&&s.set(t,o),o)}function Nr(t,e){return!t||!gi(e)?!1:(e=e.slice(2).replace(/Once$/,""),ne(t,e[0].toLowerCase()+e.slice(1))||ne(t,Is(e))||ne(t,e))}let We=null,Or=null;function Zi(t){const e=We;return We=t,Or=t&&t.type.__scopeId||null,e}function NR(t){Or=t}function OR(){Or=null}function Ka(t,e=We,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&hc(-1);const r=Zi(e),o=t(...i);return Zi(r),s._d&&hc(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function to(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:p,ctx:m,inheritAttrs:E}=t;let S,y;const g=Zi(t);try{if(n.shapeFlag&4){const I=i||s;S=nt(u.call(I,I,f,r,p,h,m)),y=l}else{const I=e;S=nt(I.length>1?I(r,{attrs:l,slots:a,emit:c}):I(r,null)),y=e.props?l:b_(l)}}catch(I){Ks.length=0,Ss(I,t,1),S=we(qe)}let v=S;if(y&&E!==!1){const I=Object.keys(y),{shapeFlag:O}=v;I.length&&O&7&&(o&&I.some(Oa)&&(y=E_(y,o)),v=Ht(v,y))}return n.dirs&&(v=Ht(v),v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&(v.transition=n.transition),S=v,Zi(g),S}function v_(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(ps(s)){if(s.type!==qe||s.children==="v-if"){if(e)return;e=s}}else return}return e}const b_=t=>{let e;for(const n in t)(n==="class"||n==="style"||gi(n))&&((e||(e={}))[n]=t[n]);return e},E_=(t,e)=>{const n={};for(const s in t)(!Oa(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function w_(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?ec(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==s[h]&&!Nr(c,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?ec(s,o,c):!0:!!o;return!1}function ec(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Nr(n,r))return!0}return!1}function za({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const zf=t=>t.__isSuspense,I_={name:"Suspense",__isSuspense:!0,process(t,e,n,s,i,r,o,a,l,c){t==null?C_(e,n,s,i,r,o,a,l,c):T_(t,e,n,s,i,o,a,l,c)},hydrate:S_,create:Ga,normalize:R_},Gf=I_;function ri(t,e){const n=t.props&&t.props[e];Q(n)&&n()}function C_(t,e,n,s,i,r,o,a,l){const{p:c,o:{createElement:u}}=l,f=u("div"),h=t.suspense=Ga(t,i,s,e,f,n,r,o,a,l);c(null,h.pendingBranch=t.ssContent,f,null,s,h,r,o),h.deps>0?(ri(t,"onPending"),ri(t,"onFallback"),c(null,t.ssFallback,e,n,s,null,r,o),rs(h,t.ssFallback)):h.resolve()}function T_(t,e,n,s,i,r,o,a,{p:l,um:c,o:{createElement:u}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const h=e.ssContent,p=e.ssFallback,{activeBranch:m,pendingBranch:E,isInFallback:S,isHydrating:y}=f;if(E)f.pendingBranch=h,It(h,E)?(l(E,h,f.hiddenContainer,null,i,f,r,o,a),f.deps<=0?f.resolve():S&&(l(m,p,n,s,i,null,r,o,a),rs(f,p))):(f.pendingId++,y?(f.isHydrating=!1,f.activeBranch=E):c(E,i,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),S?(l(null,h,f.hiddenContainer,null,i,f,r,o,a),f.deps<=0?f.resolve():(l(m,p,n,s,i,null,r,o,a),rs(f,p))):m&&It(h,m)?(l(m,h,n,s,i,f,r,o,a),f.resolve(!0)):(l(null,h,f.hiddenContainer,null,i,f,r,o,a),f.deps<=0&&f.resolve()));else if(m&&It(h,m))l(m,h,n,s,i,f,r,o,a),rs(f,h);else if(ri(e,"onPending"),f.pendingBranch=h,f.pendingId++,l(null,h,f.hiddenContainer,null,i,f,r,o,a),f.deps<=0)f.resolve();else{const{timeout:g,pendingId:v}=f;g>0?setTimeout(()=>{f.pendingId===v&&f.fallback(p)},g):g===0&&f.fallback(p)}}function Ga(t,e,n,s,i,r,o,a,l,c,u=!1){const{p:f,m:h,um:p,n:m,o:{parentNode:E,remove:S}}=c,y=Da(t.props&&t.props.timeout),g={vnode:t,parent:e,parentComponent:n,isSVG:o,container:s,hiddenContainer:i,anchor:r,deps:0,pendingId:0,timeout:typeof y=="number"?y:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(v=!1){const{vnode:I,activeBranch:O,pendingBranch:M,pendingId:L,effects:R,parentComponent:H,container:$}=g;if(g.isHydrating)g.isHydrating=!1;else if(!v){const X=O&&M.transition&&M.transition.mode==="out-in";X&&(O.transition.afterLeave=()=>{L===g.pendingId&&h(M,$,j,0)});let{anchor:j}=g;O&&(j=m(O),p(O,H,g,!0)),X||h(M,$,j,0)}rs(g,M),g.pendingBranch=null,g.isInFallback=!1;let z=g.parent,U=!1;for(;z;){if(z.pendingBranch){z.effects.push(...R),U=!0;break}z=z.parent}U||qf(R),g.effects=[],ri(I,"onResolve")},fallback(v){if(!g.pendingBranch)return;const{vnode:I,activeBranch:O,parentComponent:M,container:L,isSVG:R}=g;ri(I,"onFallback");const H=m(O),$=()=>{!g.isInFallback||(f(null,v,L,H,M,null,R,a,l),rs(g,v))},z=v.transition&&v.transition.mode==="out-in";z&&(O.transition.afterLeave=$),g.isInFallback=!0,p(O,M,null,!0),z||$()},move(v,I,O){g.activeBranch&&h(g.activeBranch,v,I,O),g.container=v},next(){return g.activeBranch&&m(g.activeBranch)},registerDep(v,I){const O=!!g.pendingBranch;O&&g.deps++;const M=v.vnode.el;v.asyncDep.catch(L=>{Ss(L,v,0)}).then(L=>{if(v.isUnmounted||g.isUnmounted||g.pendingId!==v.suspenseId)return;v.asyncResolved=!0;const{vnode:R}=v;Ko(v,L,!1),M&&(R.el=M);const H=!M&&v.subTree.el;I(v,R,E(M||v.subTree.el),M?null:m(v.subTree),g,o,l),H&&S(H),za(v,R.el),O&&--g.deps===0&&g.resolve()})},unmount(v,I){g.isUnmounted=!0,g.activeBranch&&p(g.activeBranch,n,v,I),g.pendingBranch&&p(g.pendingBranch,n,v,I)}};return g}function S_(t,e,n,s,i,r,o,a,l){const c=e.suspense=Ga(e,s,n,t.parentNode,document.createElement("div"),null,i,r,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,r,o);return c.deps===0&&c.resolve(),u}function R_(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=tc(s?n.default:n),t.ssFallback=s?tc(n.fallback):we(qe)}function tc(t){let e;if(Q(t)){const n=ds&&t._c;n&&(t._d=!1,An()),t=t(),n&&(t._d=!0,e=st,_h())}return G(t)&&(t=v_(t)),t=nt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Yf(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):qf(t)}function rs(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t,i=n.el=e.el;s&&s.subTree===n&&(s.vnode.el=i,za(s,i))}function Sn(t,e){if(Ce){let n=Ce.provides;const s=Ce.parent&&Ce.parent.provides;s===n&&(n=Ce.provides=Object.create(s)),n[t]=e}}function Tt(t,e,n=!1){const s=Ce||We;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Q(e)?e.call(s.proxy):e}}function nc(t,e){return Ya(t,null,e)}const sc={};function Vs(t,e,n){return Ya(t,e,n)}function Ya(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=_e){const a=Ce;let l,c=!1,u=!1;if(Se(t)?(l=()=>t.value,c=Qi(t)):ss(t)?(l=()=>t,s=!0):G(t)?(u=!0,c=t.some(y=>ss(y)||Qi(y)),l=()=>t.map(y=>{if(Se(y))return y.value;if(ss(y))return Jn(y);if(Q(y))return an(y,a,2)})):Q(t)?e?l=()=>an(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),rt(t,a,3,[h])}:l=gt,e&&s){const y=l;l=()=>Jn(y())}let f,h=y=>{f=S.onStop=()=>{an(y,a,4)}};if(_s)return h=gt,e?n&&rt(e,a,3,[l(),u?[]:void 0,h]):l(),gt;let p=u?[]:sc;const m=()=>{if(!!S.active)if(e){const y=S.run();(s||c||(u?y.some((g,v)=>ti(g,p[v])):ti(y,p)))&&(f&&f(),rt(e,a,3,[y,p===sc?void 0:p,h]),p=y)}else S.run()};m.allowRecurse=!!e;let E;i==="sync"?E=m:i==="post"?E=()=>Pe(m,a&&a.suspense):(m.pre=!0,a&&(m.id=a.uid),E=()=>kr(m));const S=new Fa(l,E);return e?n?m():p=S.run():i==="post"?Pe(S.run.bind(S),a&&a.suspense):S.run(),()=>{S.stop(),a&&a.scope&&Pa(a.scope.effects,S)}}function A_(t,e,n){const s=this.proxy,i=Re(t)?t.includes(".")?Qf(s,t):()=>s[t]:t.bind(s,s);let r;Q(e)?r=e:(r=e.handler,n=e);const o=Ce;gs(this);const a=Ya(i,r.bind(s),n);return o?gs(o):kn(),a}function Qf(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Jn(t,e){if(!be(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Se(t))Jn(t.value,e);else if(G(t))for(let n=0;n<t.length;n++)Jn(t[n],e);else if(bf(t)||ns(t))t.forEach(n=>{Jn(n,e)});else if(If(t))for(const n in t)Jn(t[n],e);return t}function k_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return xr(()=>{t.isMounted=!0}),mi(()=>{t.isUnmounting=!0}),t}const tt=[Function,Array],N_={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:tt,onEnter:tt,onAfterEnter:tt,onEnterCancelled:tt,onBeforeLeave:tt,onLeave:tt,onAfterLeave:tt,onLeaveCancelled:tt,onBeforeAppear:tt,onAppear:tt,onAfterAppear:tt,onAppearCancelled:tt},setup(t,{slots:e}){const n=Rs(),s=k_();let i;return()=>{const r=e.default&&Zf(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const E of r)if(E.type!==qe){o=E;break}}const a=ae(t),{mode:l}=a;if(s.isLeaving)return no(o);const c=ic(o);if(!c)return no(o);const u=$o(c,a,s,n);er(c,u);const f=n.subTree,h=f&&ic(f);let p=!1;const{getTransitionKey:m}=c.type;if(m){const E=m();i===void 0?i=E:E!==i&&(i=E,p=!0)}if(h&&h.type!==qe&&(!It(c,h)||p)){const E=$o(h,a,s,n);if(er(h,E),l==="out-in")return s.isLeaving=!0,E.afterLeave=()=>{s.isLeaving=!1,n.update()},no(o);l==="in-out"&&c.type!==qe&&(E.delayLeave=(S,y,g)=>{const v=Xf(s,h);v[String(h.key)]=h,S._leaveCb=()=>{y(),S._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=g})}return o}}},Jf=N_;function Xf(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function $o(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:E,onAppear:S,onAfterAppear:y,onAppearCancelled:g}=e,v=String(t.key),I=Xf(n,t),O=(R,H)=>{R&&rt(R,s,9,H)},M=(R,H)=>{const $=H[1];O(R,H),G(R)?R.every(z=>z.length<=1)&&$():R.length<=1&&$()},L={mode:r,persisted:o,beforeEnter(R){let H=a;if(!n.isMounted)if(i)H=E||a;else return;R._leaveCb&&R._leaveCb(!0);const $=I[v];$&&It(t,$)&&$.el._leaveCb&&$.el._leaveCb(),O(H,[R])},enter(R){let H=l,$=c,z=u;if(!n.isMounted)if(i)H=S||l,$=y||c,z=g||u;else return;let U=!1;const X=R._enterCb=j=>{U||(U=!0,j?O(z,[R]):O($,[R]),L.delayedLeave&&L.delayedLeave(),R._enterCb=void 0)};H?M(H,[R,X]):X()},leave(R,H){const $=String(t.key);if(R._enterCb&&R._enterCb(!0),n.isUnmounting)return H();O(f,[R]);let z=!1;const U=R._leaveCb=X=>{z||(z=!0,H(),X?O(m,[R]):O(p,[R]),R._leaveCb=void 0,I[$]===t&&delete I[$])};I[$]=t,h?M(h,[R,U]):U()},clone(R){return $o(R,e,n,s)}};return L}function no(t){if(_i(t))return t=Ht(t),t.children=null,t}function ic(t){return _i(t)?t.children?t.children[0]:void 0:t}function er(t,e){t.shapeFlag&6&&t.component?er(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Zf(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===ze?(o.patchFlag&128&&i++,s=s.concat(Zf(o.children,e,a))):(e||o.type!==qe)&&s.push(a!=null?Ht(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function Oe(t){return Q(t)?{setup:t,name:t.name}:t}const Rn=t=>!!t.type.__asyncLoader;function eh(t){Q(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:s,delay:i=200,timeout:r,suspensible:o=!0,onError:a}=t;let l=null,c,u=0;const f=()=>(u++,l=null,h()),h=()=>{let p;return l||(p=l=e().catch(m=>{if(m=m instanceof Error?m:new Error(String(m)),a)return new Promise((E,S)=>{a(m,()=>E(f()),()=>S(m),u+1)});throw m}).then(m=>p!==l&&l?l:(m&&(m.__esModule||m[Symbol.toStringTag]==="Module")&&(m=m.default),c=m,m)))};return Oe({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return c},setup(){const p=Ce;if(c)return()=>so(c,p);const m=g=>{l=null,Ss(g,p,13,!s)};if(o&&p.suspense||_s)return h().then(g=>()=>so(g,p)).catch(g=>(m(g),()=>s?we(s,{error:g}):null));const E=Tn(!1),S=Tn(),y=Tn(!!i);return i&&setTimeout(()=>{y.value=!1},i),r!=null&&setTimeout(()=>{if(!E.value&&!S.value){const g=new Error(`Async component timed out after ${r}ms.`);m(g),S.value=g}},r),h().then(()=>{E.value=!0,p.parent&&_i(p.parent.vnode)&&kr(p.parent.update)}).catch(g=>{m(g),S.value=g}),()=>{if(E.value&&c)return so(c,p);if(S.value&&s)return we(s,{error:S.value});if(n&&!y.value)return we(n)}}})}function so(t,{vnode:{ref:e,props:n,children:s,shapeFlag:i},parent:r}){const o=we(t,n,s);return o.ref=e,o}const _i=t=>t.type.__isKeepAlive,O_={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Rs(),s=n.ctx;if(!s.renderer)return()=>{const g=e.default&&e.default();return g&&g.length===1?g[0]:g};const i=new Map,r=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:f}}}=s,h=f("div");s.activate=(g,v,I,O,M)=>{const L=g.component;c(g,v,I,0,a),l(L.vnode,g,v,I,L,a,O,g.slotScopeIds,M),Pe(()=>{L.isDeactivated=!1,L.a&&qs(L.a);const R=g.props&&g.props.onVnodeMounted;R&&Ke(R,L.parent,g)},a)},s.deactivate=g=>{const v=g.component;c(g,h,null,1,a),Pe(()=>{v.da&&qs(v.da);const I=g.props&&g.props.onVnodeUnmounted;I&&Ke(I,v.parent,g),v.isDeactivated=!0},a)};function p(g){io(g),u(g,n,a,!0)}function m(g){i.forEach((v,I)=>{const O=zo(v.type);O&&(!g||!g(O))&&E(I)})}function E(g){const v=i.get(g);!o||v.type!==o.type?p(v):o&&io(o),i.delete(g),r.delete(g)}Vs(()=>[t.include,t.exclude],([g,v])=>{g&&m(I=>$s(g,I)),v&&m(I=>!$s(v,I))},{flush:"post",deep:!0});let S=null;const y=()=>{S!=null&&i.set(S,ro(n.subTree))};return xr(y),nh(y),mi(()=>{i.forEach(g=>{const{subTree:v,suspense:I}=n,O=ro(v);if(g.type===O.type){io(O);const M=O.component.da;M&&Pe(M,I);return}p(g)})}),()=>{if(S=null,!e.default)return null;const g=e.default(),v=g[0];if(g.length>1)return o=null,g;if(!ps(v)||!(v.shapeFlag&4)&&!(v.shapeFlag&128))return o=null,v;let I=ro(v);const O=I.type,M=zo(Rn(I)?I.type.__asyncResolved||{}:O),{include:L,exclude:R,max:H}=t;if(L&&(!M||!$s(L,M))||R&&M&&$s(R,M))return o=I,v;const $=I.key==null?O:I.key,z=i.get($);return I.el&&(I=Ht(I),v.shapeFlag&128&&(v.ssContent=I)),S=$,z?(I.el=z.el,I.component=z.component,I.transition&&er(I,I.transition),I.shapeFlag|=512,r.delete($),r.add($)):(r.add($),H&&r.size>parseInt(H,10)&&E(r.values().next().value)),I.shapeFlag|=256,o=I,zf(v.type)?v:I}}},P_=O_;function $s(t,e){return G(t)?t.some(n=>$s(n,e)):Re(t)?t.split(",").includes(e):t.test?t.test(e):!1}function x_(t,e){th(t,"a",e)}function M_(t,e){th(t,"da",e)}function th(t,e,n=Ce){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Pr(e,s,n),n){let i=n.parent;for(;i&&i.parent;)_i(i.parent.vnode)&&D_(s,e,n,i),i=i.parent}}function D_(t,e,n,s){const i=Pr(e,t,s,!0);sh(()=>{Pa(s[e],i)},n)}function io(t){let e=t.shapeFlag;e&256&&(e-=256),e&512&&(e-=512),t.shapeFlag=e}function ro(t){return t.shapeFlag&128?t.ssContent:t}function Pr(t,e,n=Ce,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Cs(),gs(n);const a=rt(e,n,t,o);return kn(),Ts(),a});return s?i.unshift(r):i.push(r),r}}const Wt=t=>(e,n=Ce)=>(!_s||t==="sp")&&Pr(t,(...s)=>e(...s),n),L_=Wt("bm"),xr=Wt("m"),F_=Wt("bu"),nh=Wt("u"),mi=Wt("bum"),sh=Wt("um"),U_=Wt("sp"),B_=Wt("rtg"),H_=Wt("rtc");function ih(t,e=Ce){Pr("ec",t,e)}function Et(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Cs(),rt(l,n,8,[t.el,a,t,e]),Ts())}}const rh="components";function Qa(t,e){return j_(rh,t,!0,e)||t}const $_=Symbol();function j_(t,e,n=!0,s=!1){const i=We||Ce;if(i){const r=i.type;if(t===rh){const a=zo(r,!1);if(a&&(a===e||a===At(e)||a===Rr(At(e))))return r}const o=rc(i[t]||r[t],e)||rc(i.appContext[t],e);return!o&&s?r:o}}function rc(t,e){return t&&(t[e]||t[At(e)]||t[Rr(At(e))])}function PR(t,e,n={},s,i){if(We.isCE||We.parent&&Rn(We.parent)&&We.parent.isCE)return we("slot",e==="default"?null:{name:e},s&&s());let r=t[e];r&&r._c&&(r._d=!1),An();const o=r&&oh(r(n)),a=os(ze,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function oh(t){return t.some(e=>ps(e)?!(e.type===qe||e.type===ze&&!oh(e.children)):!0)?t:null}const jo=t=>t?Eh(t)?el(t)||t.proxy:jo(t.parent):null,tr=Me(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>jo(t.parent),$root:t=>jo(t.root),$emit:t=>t.emit,$options:t=>Ja(t),$forceUpdate:t=>t.f||(t.f=()=>kr(t.update)),$nextTick:t=>t.n||(t.n=Va.bind(t.proxy)),$watch:t=>A_.bind(t)}),W_={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(s!==_e&&ne(s,e))return o[e]=1,s[e];if(i!==_e&&ne(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&ne(c,e))return o[e]=3,r[e];if(n!==_e&&ne(n,e))return o[e]=4,n[e];Wo&&(o[e]=0)}}const u=tr[e];let f,h;if(u)return e==="$attrs"&&et(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==_e&&ne(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,ne(h,e))return h[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return i!==_e&&ne(i,e)?(i[e]=n,!0):s!==_e&&ne(s,e)?(s[e]=n,!0):ne(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==_e&&ne(t,o)||e!==_e&&ne(e,o)||(a=r[0])&&ne(a,o)||ne(s,o)||ne(tr,o)||ne(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ne(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Wo=!0;function q_(t){const e=Ja(t),n=t.proxy,s=t.ctx;Wo=!1,e.beforeCreate&&oc(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:m,activated:E,deactivated:S,beforeDestroy:y,beforeUnmount:g,destroyed:v,unmounted:I,render:O,renderTracked:M,renderTriggered:L,errorCaptured:R,serverPrefetch:H,expose:$,inheritAttrs:z,components:U,directives:X,filters:j}=e;if(c&&V_(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const pe in o){const ue=o[pe];Q(ue)&&(s[pe]=ue.bind(n))}if(i){const pe=i.call(n,n);be(pe)&&(t.data=kt(pe))}if(Wo=!0,r)for(const pe in r){const ue=r[pe],ct=Q(ue)?ue.bind(n,n):Q(ue.get)?ue.get.bind(n,n):gt,dn=!Q(ue)&&Q(ue.set)?ue.set.bind(n):gt,ut=Te({get:ct,set:dn});Object.defineProperty(s,pe,{enumerable:!0,configurable:!0,get:()=>ut.value,set:Ve=>ut.value=Ve})}if(a)for(const pe in a)ah(a[pe],s,n,pe);if(l){const pe=Q(l)?l.call(n):l;Reflect.ownKeys(pe).forEach(ue=>{Sn(ue,pe[ue])})}u&&oc(u,t,"c");function re(pe,ue){G(ue)?ue.forEach(ct=>pe(ct.bind(n))):ue&&pe(ue.bind(n))}if(re(L_,f),re(xr,h),re(F_,p),re(nh,m),re(x_,E),re(M_,S),re(ih,R),re(H_,M),re(B_,L),re(mi,g),re(sh,I),re(U_,H),G($))if($.length){const pe=t.exposed||(t.exposed={});$.forEach(ue=>{Object.defineProperty(pe,ue,{get:()=>n[ue],set:ct=>n[ue]=ct})})}else t.exposed||(t.exposed={});O&&t.render===gt&&(t.render=O),z!=null&&(t.inheritAttrs=z),U&&(t.components=U),X&&(t.directives=X)}function V_(t,e,n=gt,s=!1){G(t)&&(t=qo(t));for(const i in t){const r=t[i];let o;be(r)?"default"in r?o=Tt(r.from||i,r.default,!0):o=Tt(r.from||i):o=Tt(r),Se(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function oc(t,e,n){rt(G(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function ah(t,e,n,s){const i=s.includes(".")?Qf(n,s):()=>n[s];if(Re(t)){const r=e[t];Q(r)&&Vs(i,r)}else if(Q(t))Vs(i,t.bind(n));else if(be(t))if(G(t))t.forEach(r=>ah(r,e,n,s));else{const r=Q(t.handler)?t.handler.bind(n):e[t.handler];Q(r)&&Vs(i,r,t)}}function Ja(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>nr(l,c,o,!0)),nr(l,e,o)),be(e)&&r.set(e,l),l}function nr(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&nr(t,r,n,!0),i&&i.forEach(o=>nr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=K_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const K_={data:ac,props:mn,emits:mn,methods:mn,computed:mn,beforeCreate:je,created:je,beforeMount:je,mounted:je,beforeUpdate:je,updated:je,beforeDestroy:je,beforeUnmount:je,destroyed:je,unmounted:je,activated:je,deactivated:je,errorCaptured:je,serverPrefetch:je,components:mn,directives:mn,watch:G_,provide:ac,inject:z_};function ac(t,e){return e?t?function(){return Me(Q(t)?t.call(this,this):t,Q(e)?e.call(this,this):e)}:e:t}function z_(t,e){return mn(qo(t),qo(e))}function qo(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function je(t,e){return t?[...new Set([].concat(t,e))]:e}function mn(t,e){return t?Me(Me(Object.create(null),t),e):e}function G_(t,e){if(!t)return e;if(!e)return t;const n=Me(Object.create(null),t);for(const s in e)n[s]=je(t[s],e[s]);return n}function Y_(t,e,n,s=!1){const i={},r={};Yi(r,Mr,1),t.propsDefaults=Object.create(null),lh(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:l_(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Q_(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ae(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Nr(t.emitsOptions,h))continue;const p=e[h];if(l)if(ne(r,h))p!==r[h]&&(r[h]=p,c=!0);else{const m=At(h);i[m]=Vo(l,a,m,p,t,!1)}else p!==r[h]&&(r[h]=p,c=!0)}}}else{lh(t,e,i,r)&&(c=!0);let u;for(const f in a)(!e||!ne(e,f)&&((u=Is(f))===f||!ne(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=Vo(l,a,f,void 0,t,!0)):delete i[f]);if(r!==a)for(const f in r)(!e||!ne(e,f)&&!0)&&(delete r[f],c=!0)}c&&Bt(t,"set","$attrs")}function lh(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ws(l))continue;const c=e[l];let u;i&&ne(i,u=At(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Nr(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=ae(n),c=a||_e;for(let u=0;u<r.length;u++){const f=r[u];n[f]=Vo(i,l,f,c[f],t,!ne(c,f))}}return o}function Vo(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=ne(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&Q(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(gs(i),s=c[n]=l.call(null,e),kn())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Is(n))&&(s=!0))}return s}function ch(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!Q(t)){const u=f=>{l=!0;const[h,p]=ch(f,e,!0);Me(o,h),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return be(t)&&s.set(t,ts),ts;if(G(r))for(let u=0;u<r.length;u++){const f=At(r[u]);lc(f)&&(o[f]=_e)}else if(r)for(const u in r){const f=At(u);if(lc(f)){const h=r[u],p=o[f]=G(h)||Q(h)?{type:h}:h;if(p){const m=fc(Boolean,p.type),E=fc(String,p.type);p[0]=m>-1,p[1]=E<0||m<E,(m>-1||ne(p,"default"))&&a.push(f)}}}const c=[o,a];return be(t)&&s.set(t,c),c}function lc(t){return t[0]!=="$"}function cc(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function uc(t,e){return cc(t)===cc(e)}function fc(t,e){return G(e)?e.findIndex(n=>uc(n,t)):Q(e)&&uc(e,t)?0:-1}const uh=t=>t[0]==="_"||t==="$stable",Xa=t=>G(t)?t.map(nt):[nt(t)],J_=(t,e,n)=>{if(e._n)return e;const s=Ka((...i)=>Xa(e(...i)),n);return s._c=!1,s},fh=(t,e,n)=>{const s=t._ctx;for(const i in t){if(uh(i))continue;const r=t[i];if(Q(r))e[i]=J_(i,r,s);else if(r!=null){const o=Xa(r);e[i]=()=>o}}},hh=(t,e)=>{const n=Xa(e);t.slots.default=()=>n},X_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ae(e),Yi(e,"_",n)):fh(e,t.slots={})}else t.slots={},e&&hh(t,e);Yi(t.slots,Mr,1)},Z_=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=_e;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Me(i,e),!n&&a===1&&delete i._):(r=!e.$stable,fh(e,i)),o=e}else e&&(hh(t,e),o={default:1});if(r)for(const a in i)!uh(a)&&!(a in o)&&delete i[a]};function dh(){return{app:null,config:{isNativeTag:Ag,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let em=0;function tm(t,e){return function(s,i=null){Q(s)||(s=Object.assign({},s)),i!=null&&!be(i)&&(i=null);const r=dh(),o=new Set;let a=!1;const l=r.app={_uid:em++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:ym,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&Q(c.install)?(o.add(c),c.install(l,...u)):Q(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,f){if(!a){const h=we(s,i);return h.appContext=r,u&&e?e(h,c):t(h,c,f),a=!0,l._container=c,c.__vue_app__=l,el(h.component)||h.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function sr(t,e,n,s,i=!1){if(G(t)){t.forEach((h,p)=>sr(h,e&&(G(e)?e[p]:e),n,s,i));return}if(Rn(s)&&!i)return;const r=s.shapeFlag&4?el(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===_e?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(Re(c)?(u[c]=null,ne(f,c)&&(f[c]=null)):Se(c)&&(c.value=null)),Q(l))an(l,a,12,[o,u]);else{const h=Re(l),p=Se(l);if(h||p){const m=()=>{if(t.f){const E=h?u[l]:l.value;i?G(E)&&Pa(E,r):G(E)?E.includes(r)||E.push(r):h?(u[l]=[r],ne(f,l)&&(f[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else h?(u[l]=o,ne(f,l)&&(f[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Pe(m,n)):m()}}}let zt=!1;const Mi=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",Di=t=>t.nodeType===8;function nm(t){const{mt:e,p:n,o:{patchProp:s,createText:i,nextSibling:r,parentNode:o,remove:a,insert:l,createComment:c}}=t,u=(y,g)=>{if(!g.hasChildNodes()){n(null,y,g),Xi(),g._vnode=y;return}zt=!1,f(g.firstChild,y,null,null,null),Xi(),g._vnode=y,zt&&console.error("Hydration completed but contains mismatches.")},f=(y,g,v,I,O,M=!1)=>{const L=Di(y)&&y.data==="[",R=()=>E(y,g,v,I,O,L),{type:H,ref:$,shapeFlag:z,patchFlag:U}=g;let X=y.nodeType;g.el=y,U===-2&&(M=!1,g.dynamicChildren=null);let j=null;switch(H){case oi:X!==3?g.children===""?(l(g.el=i(""),o(y),y),j=y):j=R():(y.data!==g.children&&(zt=!0,y.data=g.children),j=r(y));break;case qe:X!==8||L?j=R():j=r(y);break;case Wi:if(L&&(y=r(y),X=y.nodeType),X===1||X===3){j=y;const Le=!g.children.length;for(let re=0;re<g.staticCount;re++)Le&&(g.children+=j.nodeType===1?j.outerHTML:j.data),re===g.staticCount-1&&(g.anchor=j),j=r(j);return L?r(j):j}else R();break;case ze:L?j=m(y,g,v,I,O,M):j=R();break;default:if(z&1)X!==1||g.type.toLowerCase()!==y.tagName.toLowerCase()?j=R():j=h(y,g,v,I,O,M);else if(z&6){g.slotScopeIds=O;const Le=o(y);if(e(g,Le,null,v,I,Mi(Le),M),j=L?S(y):r(y),j&&Di(j)&&j.data==="teleport end"&&(j=r(j)),Rn(g)){let re;L?(re=we(ze),re.anchor=j?j.previousSibling:Le.lastChild):re=y.nodeType===3?bh(""):we("div"),re.el=y,g.component.subTree=re}}else z&64?X!==8?j=R():j=g.type.hydrate(y,g,v,I,O,M,t,p):z&128&&(j=g.type.hydrate(y,g,v,I,Mi(o(y)),O,M,t,f))}return $!=null&&sr($,null,I,g),j},h=(y,g,v,I,O,M)=>{M=M||!!g.dynamicChildren;const{type:L,props:R,patchFlag:H,shapeFlag:$,dirs:z}=g,U=L==="input"&&z||L==="option";if(U||H!==-1){if(z&&Et(g,null,v,"created"),R)if(U||!M||H&48)for(const j in R)(U&&j.endsWith("value")||gi(j)&&!Ws(j))&&s(y,j,null,R[j],!1,void 0,v);else R.onClick&&s(y,"onClick",null,R.onClick,!1,void 0,v);let X;if((X=R&&R.onVnodeBeforeMount)&&Ke(X,v,g),z&&Et(g,null,v,"beforeMount"),((X=R&&R.onVnodeMounted)||z)&&Yf(()=>{X&&Ke(X,v,g),z&&Et(g,null,v,"mounted")},I),$&16&&!(R&&(R.innerHTML||R.textContent))){let j=p(y.firstChild,g,y,v,I,O,M);for(;j;){zt=!0;const Le=j;j=j.nextSibling,a(Le)}}else $&8&&y.textContent!==g.children&&(zt=!0,y.textContent=g.children)}return y.nextSibling},p=(y,g,v,I,O,M,L)=>{L=L||!!g.dynamicChildren;const R=g.children,H=R.length;for(let $=0;$<H;$++){const z=L?R[$]:R[$]=nt(R[$]);if(y)y=f(y,z,I,O,M,L);else{if(z.type===oi&&!z.children)continue;zt=!0,n(null,z,v,null,I,O,Mi(v),M)}}return y},m=(y,g,v,I,O,M)=>{const{slotScopeIds:L}=g;L&&(O=O?O.concat(L):L);const R=o(y),H=p(r(y),g,R,v,I,O,M);return H&&Di(H)&&H.data==="]"?r(g.anchor=H):(zt=!0,l(g.anchor=c("]"),R,H),H)},E=(y,g,v,I,O,M)=>{if(zt=!0,g.el=null,M){const H=S(y);for(;;){const $=r(y);if($&&$!==H)a($);else break}}const L=r(y),R=o(y);return a(y),n(null,g,R,L,v,I,Mi(R),O),L},S=y=>{let g=0;for(;y;)if(y=r(y),y&&Di(y)&&(y.data==="["&&g++,y.data==="]")){if(g===0)return r(y);g--}return y};return[u,f]}const Pe=Yf;function sm(t){return ph(t)}function im(t){return ph(t,nm)}function ph(t,e){const n=Mg();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=gt,insertStaticContent:m}=t,E=(d,_,b,w=null,T=null,N=null,F=!1,k=null,P=!!_.dynamicChildren)=>{if(d===_)return;d&&!It(d,_)&&(w=D(d),Ve(d,T,N,!0),d=null),_.patchFlag===-2&&(P=!1,_.dynamicChildren=null);const{type:A,ref:V,shapeFlag:W}=_;switch(A){case oi:S(d,_,b,w);break;case qe:y(d,_,b,w);break;case Wi:d==null&&g(_,b,w,F);break;case ze:U(d,_,b,w,T,N,F,k,P);break;default:W&1?O(d,_,b,w,T,N,F,k,P):W&6?X(d,_,b,w,T,N,F,k,P):(W&64||W&128)&&A.process(d,_,b,w,T,N,F,k,P,oe)}V!=null&&T&&sr(V,d&&d.ref,N,_||d,!_)},S=(d,_,b,w)=>{if(d==null)s(_.el=a(_.children),b,w);else{const T=_.el=d.el;_.children!==d.children&&c(T,_.children)}},y=(d,_,b,w)=>{d==null?s(_.el=l(_.children||""),b,w):_.el=d.el},g=(d,_,b,w)=>{[d.el,d.anchor]=m(d.children,_,b,w,d.el,d.anchor)},v=({el:d,anchor:_},b,w)=>{let T;for(;d&&d!==_;)T=h(d),s(d,b,w),d=T;s(_,b,w)},I=({el:d,anchor:_})=>{let b;for(;d&&d!==_;)b=h(d),i(d),d=b;i(_)},O=(d,_,b,w,T,N,F,k,P)=>{F=F||_.type==="svg",d==null?M(_,b,w,T,N,F,k,P):H(d,_,T,N,F,k,P)},M=(d,_,b,w,T,N,F,k)=>{let P,A;const{type:V,props:W,shapeFlag:K,transition:Y,dirs:ee}=d;if(P=d.el=o(d.type,N,W&&W.is,W),K&8?u(P,d.children):K&16&&R(d.children,P,null,w,T,N&&V!=="foreignObject",F,k),ee&&Et(d,null,w,"created"),W){for(const fe in W)fe!=="value"&&!Ws(fe)&&r(P,fe,null,W[fe],N,d.children,w,T,B);"value"in W&&r(P,"value",null,W.value),(A=W.onVnodeBeforeMount)&&Ke(A,w,d)}L(P,d,d.scopeId,F,w),ee&&Et(d,null,w,"beforeMount");const ge=(!T||T&&!T.pendingBranch)&&Y&&!Y.persisted;ge&&Y.beforeEnter(P),s(P,_,b),((A=W&&W.onVnodeMounted)||ge||ee)&&Pe(()=>{A&&Ke(A,w,d),ge&&Y.enter(P),ee&&Et(d,null,w,"mounted")},T)},L=(d,_,b,w,T)=>{if(b&&p(d,b),w)for(let N=0;N<w.length;N++)p(d,w[N]);if(T){let N=T.subTree;if(_===N){const F=T.vnode;L(d,F,F.scopeId,F.slotScopeIds,T.parent)}}},R=(d,_,b,w,T,N,F,k,P=0)=>{for(let A=P;A<d.length;A++){const V=d[A]=k?Xt(d[A]):nt(d[A]);E(null,V,_,b,w,T,N,F,k)}},H=(d,_,b,w,T,N,F)=>{const k=_.el=d.el;let{patchFlag:P,dynamicChildren:A,dirs:V}=_;P|=d.patchFlag&16;const W=d.props||_e,K=_.props||_e;let Y;b&&pn(b,!1),(Y=K.onVnodeBeforeUpdate)&&Ke(Y,b,_,d),V&&Et(_,d,b,"beforeUpdate"),b&&pn(b,!0);const ee=T&&_.type!=="foreignObject";if(A?$(d.dynamicChildren,A,k,b,w,ee,N):F||ue(d,_,k,null,b,w,ee,N,!1),P>0){if(P&16)z(k,_,W,K,b,w,T);else if(P&2&&W.class!==K.class&&r(k,"class",null,K.class,T),P&4&&r(k,"style",W.style,K.style,T),P&8){const ge=_.dynamicProps;for(let fe=0;fe<ge.length;fe++){const Ie=ge[fe],ft=W[Ie],zn=K[Ie];(zn!==ft||Ie==="value")&&r(k,Ie,ft,zn,T,d.children,b,w,B)}}P&1&&d.children!==_.children&&u(k,_.children)}else!F&&A==null&&z(k,_,W,K,b,w,T);((Y=K.onVnodeUpdated)||V)&&Pe(()=>{Y&&Ke(Y,b,_,d),V&&Et(_,d,b,"updated")},w)},$=(d,_,b,w,T,N,F)=>{for(let k=0;k<_.length;k++){const P=d[k],A=_[k],V=P.el&&(P.type===ze||!It(P,A)||P.shapeFlag&70)?f(P.el):b;E(P,A,V,null,w,T,N,F,!0)}},z=(d,_,b,w,T,N,F)=>{if(b!==w){if(b!==_e)for(const k in b)!Ws(k)&&!(k in w)&&r(d,k,b[k],null,F,_.children,T,N,B);for(const k in w){if(Ws(k))continue;const P=w[k],A=b[k];P!==A&&k!=="value"&&r(d,k,A,P,F,_.children,T,N,B)}"value"in w&&r(d,"value",b.value,w.value)}},U=(d,_,b,w,T,N,F,k,P)=>{const A=_.el=d?d.el:a(""),V=_.anchor=d?d.anchor:a("");let{patchFlag:W,dynamicChildren:K,slotScopeIds:Y}=_;Y&&(k=k?k.concat(Y):Y),d==null?(s(A,b,w),s(V,b,w),R(_.children,b,V,T,N,F,k,P)):W>0&&W&64&&K&&d.dynamicChildren?($(d.dynamicChildren,K,b,T,N,F,k),(_.key!=null||T&&_===T.subTree)&&gh(d,_,!0)):ue(d,_,b,V,T,N,F,k,P)},X=(d,_,b,w,T,N,F,k,P)=>{_.slotScopeIds=k,d==null?_.shapeFlag&512?T.ctx.activate(_,b,w,F,P):j(_,b,w,T,N,F,P):Le(d,_,P)},j=(d,_,b,w,T,N,F)=>{const k=d.component=hm(d,w,T);if(_i(d)&&(k.ctx.renderer=oe),dm(k),k.asyncDep){if(T&&T.registerDep(k,re),!d.el){const P=k.subTree=we(qe);y(null,P,_,b)}return}re(k,d,_,b,T,N,F)},Le=(d,_,b)=>{const w=_.component=d.component;if(w_(d,_,b))if(w.asyncDep&&!w.asyncResolved){pe(w,_,b);return}else w.next=_,__(w.update),w.update();else _.el=d.el,w.vnode=_},re=(d,_,b,w,T,N,F)=>{const k=()=>{if(d.isMounted){let{next:V,bu:W,u:K,parent:Y,vnode:ee}=d,ge=V,fe;pn(d,!1),V?(V.el=ee.el,pe(d,V,F)):V=ee,W&&qs(W),(fe=V.props&&V.props.onVnodeBeforeUpdate)&&Ke(fe,Y,V,ee),pn(d,!0);const Ie=to(d),ft=d.subTree;d.subTree=Ie,E(ft,Ie,f(ft.el),D(ft),d,T,N),V.el=Ie.el,ge===null&&za(d,Ie.el),K&&Pe(K,T),(fe=V.props&&V.props.onVnodeUpdated)&&Pe(()=>Ke(fe,Y,V,ee),T)}else{let V;const{el:W,props:K}=_,{bm:Y,m:ee,parent:ge}=d,fe=Rn(_);if(pn(d,!1),Y&&qs(Y),!fe&&(V=K&&K.onVnodeBeforeMount)&&Ke(V,ge,_),pn(d,!0),W&&Z){const Ie=()=>{d.subTree=to(d),Z(W,d.subTree,d,T,null)};fe?_.type.__asyncLoader().then(()=>!d.isUnmounted&&Ie()):Ie()}else{const Ie=d.subTree=to(d);E(null,Ie,b,w,d,T,N),_.el=Ie.el}if(ee&&Pe(ee,T),!fe&&(V=K&&K.onVnodeMounted)){const Ie=_;Pe(()=>Ke(V,ge,Ie),T)}(_.shapeFlag&256||ge&&Rn(ge.vnode)&&ge.vnode.shapeFlag&256)&&d.a&&Pe(d.a,T),d.isMounted=!0,_=b=w=null}},P=d.effect=new Fa(k,()=>kr(A),d.scope),A=d.update=()=>P.run();A.id=d.uid,pn(d,!0),A()},pe=(d,_,b)=>{_.component=d;const w=d.vnode.props;d.vnode=_,d.next=null,Q_(d,_.props,w,b),Z_(d,_.children,b),Cs(),Zl(),Ts()},ue=(d,_,b,w,T,N,F,k,P=!1)=>{const A=d&&d.children,V=d?d.shapeFlag:0,W=_.children,{patchFlag:K,shapeFlag:Y}=_;if(K>0){if(K&128){dn(A,W,b,w,T,N,F,k,P);return}else if(K&256){ct(A,W,b,w,T,N,F,k,P);return}}Y&8?(V&16&&B(A,T,N),W!==A&&u(b,W)):V&16?Y&16?dn(A,W,b,w,T,N,F,k,P):B(A,T,N,!0):(V&8&&u(b,""),Y&16&&R(W,b,w,T,N,F,k,P))},ct=(d,_,b,w,T,N,F,k,P)=>{d=d||ts,_=_||ts;const A=d.length,V=_.length,W=Math.min(A,V);let K;for(K=0;K<W;K++){const Y=_[K]=P?Xt(_[K]):nt(_[K]);E(d[K],Y,b,null,T,N,F,k,P)}A>V?B(d,T,N,!0,!1,W):R(_,b,w,T,N,F,k,P,W)},dn=(d,_,b,w,T,N,F,k,P)=>{let A=0;const V=_.length;let W=d.length-1,K=V-1;for(;A<=W&&A<=K;){const Y=d[A],ee=_[A]=P?Xt(_[A]):nt(_[A]);if(It(Y,ee))E(Y,ee,b,null,T,N,F,k,P);else break;A++}for(;A<=W&&A<=K;){const Y=d[W],ee=_[K]=P?Xt(_[K]):nt(_[K]);if(It(Y,ee))E(Y,ee,b,null,T,N,F,k,P);else break;W--,K--}if(A>W){if(A<=K){const Y=K+1,ee=Y<V?_[Y].el:w;for(;A<=K;)E(null,_[A]=P?Xt(_[A]):nt(_[A]),b,ee,T,N,F,k,P),A++}}else if(A>K)for(;A<=W;)Ve(d[A],T,N,!0),A++;else{const Y=A,ee=A,ge=new Map;for(A=ee;A<=K;A++){const Ye=_[A]=P?Xt(_[A]):nt(_[A]);Ye.key!=null&&ge.set(Ye.key,A)}let fe,Ie=0;const ft=K-ee+1;let zn=!1,jl=0;const xs=new Array(ft);for(A=0;A<ft;A++)xs[A]=0;for(A=Y;A<=W;A++){const Ye=d[A];if(Ie>=ft){Ve(Ye,T,N,!0);continue}let vt;if(Ye.key!=null)vt=ge.get(Ye.key);else for(fe=ee;fe<=K;fe++)if(xs[fe-ee]===0&&It(Ye,_[fe])){vt=fe;break}vt===void 0?Ve(Ye,T,N,!0):(xs[vt-ee]=A+1,vt>=jl?jl=vt:zn=!0,E(Ye,_[vt],b,null,T,N,F,k,P),Ie++)}const Wl=zn?rm(xs):ts;for(fe=Wl.length-1,A=ft-1;A>=0;A--){const Ye=ee+A,vt=_[Ye],ql=Ye+1<V?_[Ye+1].el:w;xs[A]===0?E(null,vt,b,ql,T,N,F,k,P):zn&&(fe<0||A!==Wl[fe]?ut(vt,b,ql,2):fe--)}}},ut=(d,_,b,w,T=null)=>{const{el:N,type:F,transition:k,children:P,shapeFlag:A}=d;if(A&6){ut(d.component.subTree,_,b,w);return}if(A&128){d.suspense.move(_,b,w);return}if(A&64){F.move(d,_,b,oe);return}if(F===ze){s(N,_,b);for(let W=0;W<P.length;W++)ut(P[W],_,b,w);s(d.anchor,_,b);return}if(F===Wi){v(d,_,b);return}if(w!==2&&A&1&&k)if(w===0)k.beforeEnter(N),s(N,_,b),Pe(()=>k.enter(N),T);else{const{leave:W,delayLeave:K,afterLeave:Y}=k,ee=()=>s(N,_,b),ge=()=>{W(N,()=>{ee(),Y&&Y()})};K?K(N,ee,ge):ge()}else s(N,_,b)},Ve=(d,_,b,w=!1,T=!1)=>{const{type:N,props:F,ref:k,children:P,dynamicChildren:A,shapeFlag:V,patchFlag:W,dirs:K}=d;if(k!=null&&sr(k,null,b,d,!0),V&256){_.ctx.deactivate(d);return}const Y=V&1&&K,ee=!Rn(d);let ge;if(ee&&(ge=F&&F.onVnodeBeforeUnmount)&&Ke(ge,_,d),V&6)C(d.component,b,w);else{if(V&128){d.suspense.unmount(b,w);return}Y&&Et(d,null,_,"beforeUnmount"),V&64?d.type.remove(d,_,b,T,oe,w):A&&(N!==ze||W>0&&W&64)?B(A,_,b,!1,!0):(N===ze&&W&384||!T&&V&16)&&B(P,_,b),w&&Kn(d)}(ee&&(ge=F&&F.onVnodeUnmounted)||Y)&&Pe(()=>{ge&&Ke(ge,_,d),Y&&Et(d,null,_,"unmounted")},b)},Kn=d=>{const{type:_,el:b,anchor:w,transition:T}=d;if(_===ze){Ai(b,w);return}if(_===Wi){I(d);return}const N=()=>{i(b),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(d.shapeFlag&1&&T&&!T.persisted){const{leave:F,delayLeave:k}=T,P=()=>F(b,N);k?k(d.el,N,P):P()}else N()},Ai=(d,_)=>{let b;for(;d!==_;)b=h(d),i(d),d=b;i(_)},C=(d,_,b)=>{const{bum:w,scope:T,update:N,subTree:F,um:k}=d;w&&qs(w),T.stop(),N&&(N.active=!1,Ve(F,d,_,b)),k&&Pe(k,_),Pe(()=>{d.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},B=(d,_,b,w=!1,T=!1,N=0)=>{for(let F=N;F<d.length;F++)Ve(d[F],_,b,w,T)},D=d=>d.shapeFlag&6?D(d.component.subTree):d.shapeFlag&128?d.suspense.next():h(d.anchor||d.el),q=(d,_,b)=>{d==null?_._vnode&&Ve(_._vnode,null,null,!0):E(_._vnode||null,d,_,null,null,null,b),Zl(),Xi(),_._vnode=d},oe={p:E,um:Ve,m:ut,r:Kn,mt:j,mc:R,pc:ue,pbc:$,n:D,o:t};let Ee,Z;return e&&([Ee,Z]=e(oe)),{render:q,hydrate:Ee,createApp:tm(q,Ee)}}function pn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function gh(t,e,n=!1){const s=t.children,i=e.children;if(G(s)&&G(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Xt(i[r]),a.el=o.el),n||gh(o,a))}}function rm(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const om=t=>t.__isTeleport,ze=Symbol(void 0),oi=Symbol(void 0),qe=Symbol(void 0),Wi=Symbol(void 0),Ks=[];let st=null;function An(t=!1){Ks.push(st=t?null:[])}function _h(){Ks.pop(),st=Ks[Ks.length-1]||null}let ds=1;function hc(t){ds+=t}function mh(t){return t.dynamicChildren=ds>0?st||ts:null,_h(),ds>0&&st&&st.push(t),t}function xR(t,e,n,s,i,r){return mh(vh(t,e,n,s,i,r,!0))}function os(t,e,n,s,i){return mh(we(t,e,n,s,i,!0))}function ps(t){return t?t.__v_isVNode===!0:!1}function It(t,e){return t.type===e.type&&t.key===e.key}const Mr="__vInternal",yh=({key:t})=>t!=null?t:null,qi=({ref:t,ref_key:e,ref_for:n})=>t!=null?Re(t)||Se(t)||Q(t)?{i:We,r:t,k:e,f:!!n}:t:null;function vh(t,e=null,n=null,s=0,i=null,r=t===ze?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&yh(e),ref:e&&qi(e),scopeId:Or,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(Za(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Re(n)?8:16),ds>0&&!o&&st&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&st.push(l),l}const we=am;function am(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===$_)&&(t=qe),ps(t)){const a=Ht(t,e,!0);return n&&Za(a,n),ds>0&&!r&&st&&(a.shapeFlag&6?st[st.indexOf(t)]=a:st.push(a)),a.patchFlag|=-2,a}if(mm(t)&&(t=t.__vccOpts),e){e=lm(e);let{class:a,style:l}=e;a&&!Re(a)&&(e.class=Cr(a)),be(l)&&(Df(l)&&!G(l)&&(l=Me({},l)),e.style=Ir(l))}const o=Re(t)?1:zf(t)?128:om(t)?64:be(t)?4:Q(t)?2:0;return vh(t,e,n,s,i,o,r,!0)}function lm(t){return t?Df(t)||Mr in t?Me({},t):t:null}function Ht(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?cm(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&yh(a),ref:e&&e.ref?n&&i?G(i)?i.concat(qi(e)):[i,qi(e)]:qi(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ze?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ht(t.ssContent),ssFallback:t.ssFallback&&Ht(t.ssFallback),el:t.el,anchor:t.anchor}}function bh(t=" ",e=0){return we(oi,null,t,e)}function MR(t="",e=!1){return e?(An(),os(qe,null,t)):we(qe,null,t)}function nt(t){return t==null||typeof t=="boolean"?we(qe):G(t)?we(ze,null,t.slice()):typeof t=="object"?Xt(t):we(oi,null,String(t))}function Xt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ht(t)}function Za(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Za(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Mr in e)?e._ctx=We:i===3&&We&&(We.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Q(e)?(e={default:e,_ctx:We},n=32):(e=String(e),s&64?(n=16,e=[bh(e)]):n=8);t.children=e,t.shapeFlag|=n}function cm(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Cr([e.class,s.class]));else if(i==="style")e.style=Ir([e.style,s.style]);else if(gi(i)){const r=e[i],o=s[i];o&&r!==o&&!(G(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Ke(t,e,n,s=null){rt(t,e,7,[n,s])}const um=dh();let fm=0;function hm(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||um,r={uid:fm++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Dg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ch(s,i),emitsOptions:Kf(s,i),emit:null,emitted:null,propsDefaults:_e,inheritAttrs:s.inheritAttrs,ctx:_e,data:_e,props:_e,attrs:_e,slots:_e,refs:_e,setupState:_e,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=y_.bind(null,r),t.ce&&t.ce(r),r}let Ce=null;const Rs=()=>Ce||We,gs=t=>{Ce=t,t.scope.on()},kn=()=>{Ce&&Ce.scope.off(),Ce=null};function Eh(t){return t.vnode.shapeFlag&4}let _s=!1;function dm(t,e=!1){_s=e;const{props:n,children:s}=t.vnode,i=Eh(t);Y_(t,n,i,e),X_(t,s);const r=i?pm(t,e):void 0;return _s=!1,r}function pm(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ja(new Proxy(t.ctx,W_));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?_m(t):null;gs(t),Cs();const r=an(s,t,0,[t.props,i]);if(Ts(),kn(),Ef(r)){if(r.then(kn,kn),e)return r.then(o=>{Ko(t,o,e)}).catch(o=>{Ss(o,t,0)});t.asyncDep=r}else Ko(t,r,e)}else wh(t,e)}function Ko(t,e,n){Q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:be(e)&&(t.setupState=Bf(e)),wh(t,n)}let dc;function wh(t,e,n){const s=t.type;if(!t.render){if(!e&&dc&&!s.render){const i=s.template||Ja(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Me(Me({isCustomElement:r,delimiters:a},o),l);s.render=dc(i,c)}}t.render=s.render||gt}gs(t),Cs(),q_(t),Ts(),kn()}function gm(t){return new Proxy(t.attrs,{get(e,n){return et(t,"get","$attrs"),e[n]}})}function _m(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=gm(t))},slots:t.slots,emit:t.emit,expose:e}}function el(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Bf(ja(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in tr)return tr[n](t)}}))}function zo(t,e=!0){return Q(t)?t.displayName||t.name:t.name||e&&t.__name}function mm(t){return Q(t)&&"__vccOpts"in t}const Te=(t,e)=>d_(t,e,_s);function Qe(t,e,n){const s=arguments.length;return s===2?be(e)&&!G(e)?ps(e)?we(t,null,[e]):we(t,e):we(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ps(n)&&(n=[n]),we(t,e,n))}const ym="3.2.40",vm="http://www.w3.org/2000/svg",En=typeof document<"u"?document:null,pc=En&&En.createElement("template"),bm={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?En.createElementNS(vm,t):En.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>En.createTextNode(t),createComment:t=>En.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>En.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{pc.innerHTML=s?`<svg>${t}</svg>`:t;const a=pc.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Em(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function wm(t,e,n){const s=t.style,i=Re(n);if(n&&!i){for(const r in n)Go(s,r,n[r]);if(e&&!Re(e))for(const r in e)n[r]==null&&Go(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const gc=/\s*!important$/;function Go(t,e,n){if(G(n))n.forEach(s=>Go(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Im(t,e);gc.test(n)?t.setProperty(Is(s),n.replace(gc,""),"important"):t[s]=n}}const _c=["Webkit","Moz","ms"],oo={};function Im(t,e){const n=oo[e];if(n)return n;let s=At(e);if(s!=="filter"&&s in t)return oo[e]=s;s=Rr(s);for(let i=0;i<_c.length;i++){const r=_c[i]+s;if(r in t)return oo[e]=r}return e}const mc="http://www.w3.org/1999/xlink";function Cm(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(mc,e.slice(6,e.length)):t.setAttributeNS(mc,e,n);else{const r=Cg(e);n==null||r&&!yf(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Tm(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=yf(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Ih,Sm]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Yo=0;const Rm=Promise.resolve(),Am=()=>{Yo=0},km=()=>Yo||(Rm.then(Am),Yo=Ih());function Nm(t,e,n,s){t.addEventListener(e,n,s)}function Om(t,e,n,s){t.removeEventListener(e,n,s)}function Pm(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=xm(e);if(s){const c=r[e]=Mm(s,i);Nm(t,a,c,l)}else o&&(Om(t,a,o,l),r[e]=void 0)}}const yc=/(?:Once|Passive|Capture)$/;function xm(t){let e;if(yc.test(t)){e={};let s;for(;s=t.match(yc);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Is(t.slice(2)),e]}function Mm(t,e){const n=s=>{const i=s.timeStamp||Ih();(Sm||i>=n.attached-1)&&rt(Dm(s,n.value),e,5,[s])};return n.value=t,n.attached=km(),n}function Dm(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const vc=/^on[a-z]/,Lm=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?Em(t,s,i):e==="style"?wm(t,n,s):gi(e)?Oa(e)||Pm(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Fm(t,e,s,i))?Tm(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Cm(t,e,s,i))};function Fm(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&vc.test(e)&&Q(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||vc.test(e)&&Re(n)?!1:e in t}const Gt="transition",Ms="animation",Dr=(t,{slots:e})=>Qe(Jf,Um(t),e);Dr.displayName="Transition";const Ch={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Dr.props=Me({},Jf.props,Ch);const gn=(t,e=[])=>{G(t)?t.forEach(n=>n(...e)):t&&t(...e)},bc=t=>t?G(t)?t.some(e=>e.length>1):t.length>1:!1;function Um(t){const e={};for(const U in t)U in Ch||(e[U]=t[U]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,m=Bm(i),E=m&&m[0],S=m&&m[1],{onBeforeEnter:y,onEnter:g,onEnterCancelled:v,onLeave:I,onLeaveCancelled:O,onBeforeAppear:M=y,onAppear:L=g,onAppearCancelled:R=v}=e,H=(U,X,j)=>{_n(U,X?u:a),_n(U,X?c:o),j&&j()},$=(U,X)=>{U._isLeaving=!1,_n(U,f),_n(U,p),_n(U,h),X&&X()},z=U=>(X,j)=>{const Le=U?L:g,re=()=>H(X,U,j);gn(Le,[X,re]),Ec(()=>{_n(X,U?l:r),Yt(X,U?u:a),bc(Le)||wc(X,s,E,re)})};return Me(e,{onBeforeEnter(U){gn(y,[U]),Yt(U,r),Yt(U,o)},onBeforeAppear(U){gn(M,[U]),Yt(U,l),Yt(U,c)},onEnter:z(!1),onAppear:z(!0),onLeave(U,X){U._isLeaving=!0;const j=()=>$(U,X);Yt(U,f),jm(),Yt(U,h),Ec(()=>{!U._isLeaving||(_n(U,f),Yt(U,p),bc(I)||wc(U,s,S,j))}),gn(I,[U,j])},onEnterCancelled(U){H(U,!1),gn(v,[U])},onAppearCancelled(U){H(U,!0),gn(R,[U])},onLeaveCancelled(U){$(U),gn(O,[U])}})}function Bm(t){if(t==null)return null;if(be(t))return[ao(t.enter),ao(t.leave)];{const e=ao(t);return[e,e]}}function ao(t){return Da(t)}function Yt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function _n(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Ec(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Hm=0;function wc(t,e,n,s){const i=t._endId=++Hm,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=$m(t,e);if(!o)return s();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,h),r()},h=p=>{p.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,h)}function $m(t,e){const n=window.getComputedStyle(t),s=m=>(n[m]||"").split(", "),i=s(Gt+"Delay"),r=s(Gt+"Duration"),o=Ic(i,r),a=s(Ms+"Delay"),l=s(Ms+"Duration"),c=Ic(a,l);let u=null,f=0,h=0;e===Gt?o>0&&(u=Gt,f=o,h=r.length):e===Ms?c>0&&(u=Ms,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?Gt:Ms:null,h=u?u===Gt?r.length:l.length:0);const p=u===Gt&&/\b(transform|all)(,|$)/.test(n[Gt+"Property"]);return{type:u,timeout:f,propCount:h,hasTransform:p}}function Ic(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Cc(n)+Cc(t[s])))}function Cc(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function jm(){return document.body.offsetHeight}const Th=Me({patchProp:Lm},bm);let zs,Tc=!1;function Wm(){return zs||(zs=sm(Th))}function qm(){return zs=Tc?zs:im(Th),Tc=!0,zs}const Vm=(...t)=>{const e=Wm().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Sh(s);if(!i)return;const r=e._component;!Q(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e},Km=(...t)=>{const e=qm().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Sh(s);if(i)return n(i,!0,i instanceof SVGElement)},e};function Sh(t){return Re(t)?document.querySelector(t):t}const zm=/"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/,Gm=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,Ym=/^["{[]|^-?[0-9][0-9.]{0,14}$/;function Qm(t,e){if(!(t==="__proto__"||t==="constructor"))return e}function Jm(t){if(typeof t!="string")return t;const e=t.toLowerCase();if(e==="true")return!0;if(e==="false")return!1;if(e==="null")return null;if(e==="nan")return NaN;if(e==="infinity")return 1/0;if(e!=="undefined"){if(!Ym.test(t))return t;try{return zm.test(t)||Gm.test(t)?JSON.parse(t,Qm):JSON.parse(t)}catch{return t}}}const Xm=/#/g,Zm=/&/g,ey=/=/g,Rh=/\+/g,ty=/%5B/gi,ny=/%5D/gi,sy=/%5E/gi,iy=/%60/gi,ry=/%7B/gi,oy=/%7C/gi,ay=/%7D/gi,ly=/%20/gi;function cy(t){return encodeURI(""+t).replace(oy,"|").replace(ty,"[").replace(ny,"]")}function Qo(t){return cy(t).replace(Rh,"%2B").replace(ly,"+").replace(Xm,"%23").replace(Zm,"%26").replace(iy,"`").replace(ry,"{").replace(ay,"}").replace(sy,"^")}function lo(t){return Qo(t).replace(ey,"%3D")}function Ah(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function uy(t){return Ah(t.replace(Rh," "))}function fy(t=""){const e={};t[0]==="?"&&(t=t.substr(1));for(const n of t.split("&")){const s=n.match(/([^=]+)=?(.*)/)||[];if(s.length<2)continue;const i=Ah(s[1]);if(i==="__proto__"||i==="constructor")continue;const r=uy(s[2]||"");e[i]?Array.isArray(e[i])?e[i].push(r):e[i]=[e[i],r]:e[i]=r}return e}function hy(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${lo(t)}=${Qo(n)}`).join("&"):`${lo(t)}=${Qo(e)}`:lo(t)}function dy(t){return Object.keys(t).map(e=>hy(e,t[e])).join("&")}const py=/^\w+:(\/\/)?/,gy=/^\/\/[^/]+/;function tl(t,e=!1){return py.test(t)||e&&gy.test(t)}const _y=/\/$|\/\?/;function Jo(t="",e=!1){return e?_y.test(t):t.endsWith("/")}function kh(t="",e=!1){if(!e)return(Jo(t)?t.slice(0,-1):t)||"/";if(!Jo(t,!0))return t||"/";const[n,...s]=t.split("?");return(n.slice(0,-1)||"/")+(s.length?`?${s.join("?")}`:"")}function my(t="",e=!1){if(!e)return t.endsWith("/")?t:t+"/";if(Jo(t,!0))return t||"/";const[n,...s]=t.split("?");return n+"/"+(s.length?`?${s.join("?")}`:"")}function yy(t=""){return t.startsWith("/")}function vy(t=""){return(yy(t)?t.substr(1):t)||"/"}function by(t,e){if(Nh(e))return t;const n=kh(e);return t.startsWith(n)?t:Lr(n,t)}function Sc(t,e){if(Nh(e))return t;const n=kh(e);if(!t.startsWith(n))return t;const s=t.substring(n.length);return s[0]==="/"?s:"/"+s}function Ey(t,e){const n=Fr(t),s={...fy(n.search),...e};return n.search=dy(s),Iy(n)}function Nh(t){return!t||t==="/"}function wy(t){return t&&t!=="/"}function Lr(t,...e){let n=t||"";for(const s of e.filter(wy))n=n?my(n)+vy(s):s;return n}function Fr(t="",e){if(!tl(t,!0))return e?Fr(e+t):Rc(t);const[n="",s,i=""]=(t.replace(/\\/g,"/").match(/([^:/]+:)?\/\/([^/@]+@)?(.*)/)||[]).splice(1),[r="",o=""]=(i.match(/([^/?#]*)(.*)?/)||[]).splice(1),{pathname:a,search:l,hash:c}=Rc(o);return{protocol:n,auth:s?s.substr(0,s.length-1):"",host:r,pathname:a,search:l,hash:c}}function Rc(t=""){const[e="",n="",s=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:s}}function Iy(t){const e=t.pathname+(t.search?(t.search.startsWith("?")?"":"?")+t.search:"")+t.hash;return t.protocol?t.protocol+"//"+(t.auth?t.auth+"@":"")+t.host+e:e}class Cy extends Error{constructor(){super(...arguments),this.name="FetchError"}}function Ty(t,e,n){let s="";t&&n&&(s=`${n.status} ${n.statusText} (${t.toString()})`),e&&(s=`${e.message} (${s})`);const i=new Cy(s);return Object.defineProperty(i,"request",{get(){return t}}),Object.defineProperty(i,"response",{get(){return n}}),Object.defineProperty(i,"data",{get(){return n&&n._data}}),i}const Sy=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function Ac(t="GET"){return Sy.has(t.toUpperCase())}function Ry(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const Ay=new Set(["image/svg","application/xml","application/xhtml","application/html"]),ky=/^application\/(?:[\w!#$%&*`\-.^~]*\+)?json(;.+)?$/i;function Ny(t=""){if(!t)return"json";const e=t.split(";").shift();return ky.test(e)?"json":Ay.has(e)||e.startsWith("text/")?"text":"blob"}const Oy=new Set([408,409,425,429,500,502,503,504]);function Oh(t){const{fetch:e,Headers:n}=t;function s(o){const a=o.error&&o.error.name==="AbortError"||!1;if(o.options.retry!==!1&&!a){const c=typeof o.options.retry=="number"?o.options.retry:Ac(o.options.method)?0:1,u=o.response&&o.response.status||500;if(c>0&&Oy.has(u))return i(o.request,{...o.options,retry:c-1})}const l=Ty(o.request,o.error,o.response);throw Error.captureStackTrace&&Error.captureStackTrace(l,i),l}const i=async function(a,l={}){const c={request:a,options:{...t.defaults,...l},response:void 0,error:void 0};c.options.onRequest&&await c.options.onRequest(c),typeof c.request=="string"&&(c.options.baseURL&&(c.request=by(c.request,c.options.baseURL)),(c.options.query||c.options.params)&&(c.request=Ey(c.request,{...c.options.params,...c.options.query})),c.options.body&&Ac(c.options.method)&&Ry(c.options.body)&&(c.options.body=typeof c.options.body=="string"?c.options.body:JSON.stringify(c.options.body),c.options.headers=new n(c.options.headers),c.options.headers.has("content-type")||c.options.headers.set("content-type","application/json"),c.options.headers.has("accept")||c.options.headers.set("accept","application/json"))),c.response=await e(c.request,c.options).catch(async f=>(c.error=f,c.options.onRequestError&&await c.options.onRequestError(c),s(c)));const u=(c.options.parseResponse?"json":c.options.responseType)||Ny(c.response.headers.get("content-type")||"");if(u==="json"){const f=await c.response.text(),h=c.options.parseResponse||Jm;c.response._data=h(f)}else u==="stream"?c.response._data=c.response.body:c.response._data=await c.response[u]();return c.options.onResponse&&await c.options.onResponse(c),c.response.ok||c.options.onResponseError&&await c.options.onResponseError(c),c.response.ok?c.response:s(c)},r=function(a,l){return i(a,l).then(c=>c._data)};return r.raw=i,r.create=(o={})=>Oh({...t,defaults:{...t.defaults,...o}}),r}const Ph=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),Py=Ph.fetch||(()=>Promise.reject(new Error("[ohmyfetch] global.fetch is not supported!"))),xy=Ph.Headers,My=Oh({fetch:Py,Headers:xy}),Dy=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},ir=Dy().app,Ly=()=>ir.baseURL,Fy=()=>ir.buildAssetsDir,Uy=(...t)=>Lr(xh(),Fy(),...t),xh=(...t)=>{const e=ir.cdnURL||ir.baseURL;return t.length?Lr(e,...t):e};globalThis.__buildAssetsURL=Uy;globalThis.__publicAssetsURL=xh;function Xo(t,e={},n){for(const s in t){const i=t[s],r=n?`${n}:${s}`:s;typeof i=="object"&&i!==null?Xo(i,e,r):typeof i=="function"&&(e[r]=i)}return e}function By(t,e){return t.reduce((n,s)=>n.then(()=>s.apply(void 0,e)),Promise.resolve(null))}function Hy(t,e){return Promise.all(t.map(n=>n.apply(void 0,e)))}function co(t,e){for(const n of t)n(e)}class $y{constructor(){this._hooks={},this._before=null,this._after=null,this._deprecatedMessages=null,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,s={}){if(!e||typeof n!="function")return()=>{};const i=e;let r;for(;this._deprecatedHooks[e];)r=this._deprecatedHooks[e],e=r.to;if(r&&!s.allowDeprecated){let o=r.message;o||(o=`${i} hook has been deprecated`+(r.to?`, please use ${r.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=null)}}hookOnce(e,n){let s,i=(...r)=>(s(),s=null,i=null,n(...r));return s=this.hook(e,i),s}removeHook(e,n){if(this._hooks[e]){const s=this._hooks[e].indexOf(n);s!==-1&&this._hooks[e].splice(s,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const s=this._hooks[e]||[];this._hooks[e]=void 0;for(const i of s)this.hook(e,i)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=Xo(e),s=Object.keys(n).map(i=>this.hook(i,n[i]));return()=>{s.splice(0,s.length).forEach(i=>i())}}removeHooks(e){const n=Xo(e);for(const s in n)this.removeHook(s,n[s])}callHook(e,...n){return this.callHookWith(By,e,...n)}callHookParallel(e,...n){return this.callHookWith(Hy,e,...n)}callHookWith(e,n,...s){const i=this._before||this._after?{name:n,args:s,context:{}}:void 0;this._before&&co(this._before,i);const r=e(this._hooks[n]||[],s);return r instanceof Promise?r.finally(()=>{this._after&&co(this._after,i)}):(this._after&&co(this._after,i),r)}beforeEach(e){this._before=this._before||[],this._before.push(e)}afterEach(e){this._after=this._after||[],this._after.push(e)}}function jy(){return new $y}function Wy(){let t=null,e=!1;const n=s=>{if(t&&t!==s)throw new Error("Context conflict")};return{use:()=>{if(t==null)throw new Error("Context is not available");return t},tryUse:()=>t,set:(s,i)=>{i||n(s),t=s,e=!0},unset:()=>{t=null,e=!1},call:(s,i)=>{n(s),t=s;try{return i()}finally{e||(t=null)}},async callAsync(s,i){t=s;const r=()=>{t=s},o=()=>t===s?r:void 0;Zo.add(o);try{const a=i();return e||(t=null),await a}finally{Zo.delete(o)}}}}function qy(){const t={};return{get(e){return t[e]||(t[e]=Wy()),t[e],t[e]}}}const rr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},kc="__unctx__",Vy=rr[kc]||(rr[kc]=qy()),Ky=t=>Vy.get(t),Nc="__unctx_async_handlers__",Zo=rr[Nc]||(rr[Nc]=new Set);function zy(t){const e=[];for(const i of Zo){const r=i();r&&e.push(r)}const n=()=>{for(const i of e)i()};let s=t();return"catch"in s&&(s=s.catch(i=>{throw n(),i})),[s,n]}const Mh=Ky("nuxt-app"),Gy="__nuxt_plugin";function Yy(t){const e={provide:void 0,globalName:"nuxt",payload:kt({data:{},state:{},_errors:{},...window.__NUXT__}),isHydrating:!0,_asyncDataPromises:{},_asyncData:{},...t};e.hooks=jy(),e.hook=e.hooks.hook,e.callHook=e.hooks.callHook,e.provide=(i,r)=>{const o="$"+i;Li(e,o,r),Li(e.vueApp.config.globalProperties,o,r)},Li(e.vueApp,"$nuxt",e),Li(e.vueApp.config.globalProperties,"$nuxt",e);const n=kt(e.payload.config),s=new Proxy(n,{get(i,r){var o;return r==="public"?i.public:(o=i[r])!=null?o:i.public[r]},set(i,r,o){return r==="public"||r==="app"?!1:(i[r]=o,i.public[r]=o,!0)}});return e.provide("config",s),e}async function Qy(t,e){if(typeof e!="function")return;const{provide:n}=await Zt(t,e,[t])||{};if(n&&typeof n=="object")for(const s in n)t.provide(s,n[s])}async function Jy(t,e){for(const n of e)await Qy(t,n)}function Xy(t){return t.map(n=>typeof n!="function"?null:n.length>1?s=>n(s,s.provide):n).filter(Boolean)}function yi(t){return t[Gy]=!0,t}function Zt(t,e,n){const s=()=>n?e(...n):e();return Mh.set(t),s()}function De(){const t=Mh.tryUse();if(!t){const e=Rs();if(!e)throw new Error("nuxt instance unavailable");return e.appContext.app.$nuxt}return t}function Zy(){return De().$config}function Li(t,e,n){Object.defineProperty(t,e,{get:()=>n})}/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Qn=typeof window<"u";function ev(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ce=Object.assign;function uo(t,e){const n={};for(const s in e){const i=e[s];n[s]=mt(i)?i.map(t):t(i)}return n}const Gs=()=>{},mt=Array.isArray,tv=/\/$/,nv=t=>t.replace(tv,"");function fo(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=ov(s!=null?s:e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function sv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Oc(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function iv(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&ms(e.matched[s],n.matched[i])&&Dh(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ms(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Dh(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!rv(t[n],e[n]))return!1;return!0}function rv(t,e){return mt(t)?Pc(t,e):mt(e)?Pc(e,t):t===e}function Pc(t,e){return mt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function ov(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var ai;(function(t){t.pop="pop",t.push="push"})(ai||(ai={}));var Ys;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ys||(Ys={}));function av(t){if(!t)if(Qn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),nv(t)}const lv=/^[^#]+#/;function cv(t,e){return t.replace(lv,"#")+e}function uv(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Ur=()=>({left:window.pageXOffset,top:window.pageYOffset});function fv(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=uv(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function xc(t,e){return(history.state?history.state.position-e:-1)+t}const ea=new Map;function hv(t,e){ea.set(t,e)}function dv(t){const e=ea.get(t);return ea.delete(t),e}let pv=()=>location.protocol+"//"+location.host;function Lh(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Oc(l,"")}return Oc(n,t)+s+i}function gv(t,e,n,s){let i=[],r=[],o=null;const a=({state:h})=>{const p=Lh(t,location),m=n.value,E=e.value;let S=0;if(h){if(n.value=p,e.value=h,o&&o===m){o=null;return}S=E?h.position-E.position:0}else s(p);i.forEach(y=>{y(n.value,m,{delta:S,type:ai.pop,direction:S?S>0?Ys.forward:Ys.back:Ys.unknown})})};function l(){o=n.value}function c(h){i.push(h);const p=()=>{const m=i.indexOf(h);m>-1&&i.splice(m,1)};return r.push(p),p}function u(){const{history:h}=window;!h.state||h.replaceState(ce({},h.state,{scroll:Ur()}),"")}function f(){for(const h of r)h();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function Mc(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Ur():null}}function _v(t){const{history:e,location:n}=window,s={value:Lh(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:pv()+t+l;try{e[u?"replaceState":"pushState"](c,"",h),i.value=c}catch(p){console.error(p),n[u?"replace":"assign"](h)}}function o(l,c){const u=ce({},e.state,Mc(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=ce({},i.value,e.state,{forward:l,scroll:Ur()});r(u.current,u,!0);const f=ce({},Mc(s.value,l,null),{position:u.position+1},c);r(l,f,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function Fh(t){t=av(t);const e=_v(t),n=gv(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ce({location:"",base:t,go:s,createHref:cv.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function mv(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Fh(t)}function yv(t){return typeof t=="string"||t&&typeof t=="object"}function Uh(t){return typeof t=="string"||typeof t=="symbol"}const Qt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Bh=Symbol("");var Dc;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Dc||(Dc={}));function ys(t,e){return ce(new Error,{type:t,[Bh]:!0},e)}function Pt(t,e){return t instanceof Error&&Bh in t&&(e==null||!!(t.type&e))}const Lc="[^/]+?",vv={sensitive:!1,strict:!1,start:!0,end:!0},bv=/[.+*?^${}()[\]/\\]/g;function Ev(t,e){const n=ce({},vv,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let f=0;f<c.length;f++){const h=c[f];let p=40+(n.sensitive?.25:0);if(h.type===0)f||(i+="/"),i+=h.value.replace(bv,"\\$&"),p+=40;else if(h.type===1){const{value:m,repeatable:E,optional:S,regexp:y}=h;r.push({name:m,repeatable:E,optional:S});const g=y||Lc;if(g!==Lc){p+=10;try{new RegExp(`(${g})`)}catch(I){throw new Error(`Invalid custom RegExp for param "${m}" (${g}): `+I.message)}}let v=E?`((?:${g})(?:/(?:${g}))*)`:`(${g})`;f||(v=S&&c.length<2?`(?:/${v})`:"/"+v),S&&(v+="?"),i+=v,p+=20,S&&(p+=-8),E&&(p+=-20),g===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",m=r[h-1];f[m.name]=p&&m.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of h)if(p.type===0)u+=p.value;else if(p.type===1){const{value:m,repeatable:E,optional:S}=p,y=m in c?c[m]:"";if(mt(y)&&!E)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const g=mt(y)?y.join("/"):y;if(!g)if(S)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${m}"`);u+=g}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function wv(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Iv(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=wv(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Fc(s))return 1;if(Fc(i))return-1}return i.length-s.length}function Fc(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Cv={type:0,value:""},Tv=/[a-zA-Z0-9_]/;function Sv(t){if(!t)return[[]];if(t==="/")return[[Cv]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function f(){!c||(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):h();break;case 4:h(),n=s;break;case 1:l==="("?n=2:Tv.test(l)?h():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),i}function Rv(t,e,n){const s=Ev(Sv(t.path),n),i=ce(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function Av(t,e){const n=[],s=new Map;e=Hc({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,f,h){const p=!h,m=kv(u);m.aliasOf=h&&h.record;const E=Hc(e,u),S=[m];if("alias"in u){const v=typeof u.alias=="string"?[u.alias]:u.alias;for(const I of v)S.push(ce({},m,{components:h?h.record.components:m.components,path:I,aliasOf:h?h.record:m}))}let y,g;for(const v of S){const{path:I}=v;if(f&&I[0]!=="/"){const O=f.record.path,M=O[O.length-1]==="/"?"":"/";v.path=f.record.path+(I&&M+I)}if(y=Rv(v,f,E),h?h.alias.push(y):(g=g||y,g!==y&&g.alias.push(y),p&&u.name&&!Bc(y)&&o(u.name)),m.children){const O=m.children;for(let M=0;M<O.length;M++)r(O[M],y,h&&h.children[M])}h=h||y,l(y)}return g?()=>{o(g)}:Gs}function o(u){if(Uh(u)){const f=s.get(u);f&&(s.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let f=0;for(;f<n.length&&Iv(u,n[f])>=0&&(u.record.path!==n[f].record.path||!Hh(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Bc(u)&&s.set(u.record.name,u)}function c(u,f){let h,p={},m,E;if("name"in u&&u.name){if(h=s.get(u.name),!h)throw ys(1,{location:u});E=h.record.name,p=ce(Uc(f.params,h.keys.filter(g=>!g.optional).map(g=>g.name)),u.params&&Uc(u.params,h.keys.map(g=>g.name))),m=h.stringify(p)}else if("path"in u)m=u.path,h=n.find(g=>g.re.test(m)),h&&(p=h.parse(m),E=h.record.name);else{if(h=f.name?s.get(f.name):n.find(g=>g.re.test(f.path)),!h)throw ys(1,{location:u,currentLocation:f});E=h.record.name,p=ce({},f.params,u.params),m=h.stringify(p)}const S=[];let y=h;for(;y;)S.unshift(y.record),y=y.parent;return{name:E,path:m,params:p,matched:S,meta:Ov(S)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Uc(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function kv(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Nv(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Nv(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Bc(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Ov(t){return t.reduce((e,n)=>ce(e,n.meta),{})}function Hc(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Hh(t,e){return e.children.some(n=>n===t||Hh(t,n))}const $h=/#/g,Pv=/&/g,xv=/\//g,Mv=/=/g,Dv=/\?/g,jh=/\+/g,Lv=/%5B/g,Fv=/%5D/g,Wh=/%5E/g,Uv=/%60/g,qh=/%7B/g,Bv=/%7C/g,Vh=/%7D/g,Hv=/%20/g;function nl(t){return encodeURI(""+t).replace(Bv,"|").replace(Lv,"[").replace(Fv,"]")}function $v(t){return nl(t).replace(qh,"{").replace(Vh,"}").replace(Wh,"^")}function ta(t){return nl(t).replace(jh,"%2B").replace(Hv,"+").replace($h,"%23").replace(Pv,"%26").replace(Uv,"`").replace(qh,"{").replace(Vh,"}").replace(Wh,"^")}function jv(t){return ta(t).replace(Mv,"%3D")}function Wv(t){return nl(t).replace($h,"%23").replace(Dv,"%3F")}function qv(t){return t==null?"":Wv(t).replace(xv,"%2F")}function or(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Vv(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(jh," "),o=r.indexOf("="),a=or(o<0?r:r.slice(0,o)),l=o<0?null:or(r.slice(o+1));if(a in e){let c=e[a];mt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function $c(t){let e="";for(let n in t){const s=t[n];if(n=jv(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(mt(s)?s.map(r=>r&&ta(r)):[s&&ta(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function Kv(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=mt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const zv=Symbol(""),jc=Symbol(""),sl=Symbol(""),Kh=Symbol(""),na=Symbol("");function Ds(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function en(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(ys(4,{from:n,to:e})):f instanceof Error?a(f):yv(f)?a(ys(2,{from:e,to:f})):(r&&s.enterCallbacks[i]===r&&typeof f=="function"&&r.push(f),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function ho(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(Gv(a)){const c=(a.__vccOpts||a)[e];c&&i.push(en(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=ev(c)?c.default:c;r.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&en(h,n,s,r,o)()}))}}return i}function Gv(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Wc(t){const e=Tt(sl),n=Tt(Kh),s=Te(()=>e.resolve(Je(t.to))),i=Te(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(ms.bind(null,u));if(h>-1)return h;const p=qc(l[c-2]);return c>1&&qc(u)===p&&f[f.length-1].path!==p?f.findIndex(ms.bind(null,l[c-2])):h}),r=Te(()=>i.value>-1&&Xv(n.params,s.value.params)),o=Te(()=>i.value>-1&&i.value===n.matched.length-1&&Dh(n.params,s.value.params));function a(l={}){return Jv(l)?e[Je(t.replace)?"replace":"push"](Je(t.to)).catch(Gs):Promise.resolve()}return{route:s,href:Te(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const Yv=Oe({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Wc,setup(t,{slots:e}){const n=kt(Wc(t)),{options:s}=Tt(sl),i=Te(()=>({[Vc(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Vc(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Qe("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),Qv=Yv;function Jv(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Xv(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!mt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function qc(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Vc=(t,e,n)=>t!=null?t:e!=null?e:n,Zv=Oe({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Tt(na),i=Te(()=>t.route||s.value),r=Tt(jc,0),o=Te(()=>{let c=Je(r);const{matched:u}=i.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Te(()=>i.value.matched[o.value]);Sn(jc,Te(()=>o.value+1)),Sn(zv,a),Sn(na,i);const l=Tn();return Vs(()=>[l.value,a.value,t.name],([c,u,f],[h,p,m])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!ms(u,p)||!h)&&(u.enterCallbacks[f]||[]).forEach(E=>E(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,f=a.value,h=f&&f.components[u];if(!h)return Kc(n.default,{Component:h,route:c});const p=f.props[u],m=p?p===!0?c.params:typeof p=="function"?p(c):p:null,S=Qe(h,ce({},m,e,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Kc(n.default,{Component:S,route:c})||S}}});function Kc(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const zh=Zv;function eb(t){const e=Av(t.routes,t),n=t.parseQuery||Vv,s=t.stringifyQuery||$c,i=t.history,r=Ds(),o=Ds(),a=Ds(),l=Ji(Qt);let c=Qt;Qn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=uo.bind(null,C=>""+C),f=uo.bind(null,qv),h=uo.bind(null,or);function p(C,B){let D,q;return Uh(C)?(D=e.getRecordMatcher(C),q=B):q=C,e.addRoute(q,D)}function m(C){const B=e.getRecordMatcher(C);B&&e.removeRoute(B)}function E(){return e.getRoutes().map(C=>C.record)}function S(C){return!!e.getRecordMatcher(C)}function y(C,B){if(B=ce({},B||l.value),typeof C=="string"){const d=fo(n,C,B.path),_=e.resolve({path:d.path},B),b=i.createHref(d.fullPath);return ce(d,_,{params:h(_.params),hash:or(d.hash),redirectedFrom:void 0,href:b})}let D;if("path"in C)D=ce({},C,{path:fo(n,C.path,B.path).path});else{const d=ce({},C.params);for(const _ in d)d[_]==null&&delete d[_];D=ce({},C,{params:f(C.params)}),B.params=f(B.params)}const q=e.resolve(D,B),oe=C.hash||"";q.params=u(h(q.params));const Ee=sv(s,ce({},C,{hash:$v(oe),path:q.path})),Z=i.createHref(Ee);return ce({fullPath:Ee,hash:oe,query:s===$c?Kv(C.query):C.query||{}},q,{redirectedFrom:void 0,href:Z})}function g(C){return typeof C=="string"?fo(n,C,l.value.path):ce({},C)}function v(C,B){if(c!==C)return ys(8,{from:B,to:C})}function I(C){return L(C)}function O(C){return I(ce(g(C),{replace:!0}))}function M(C){const B=C.matched[C.matched.length-1];if(B&&B.redirect){const{redirect:D}=B;let q=typeof D=="function"?D(C):D;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=g(q):{path:q},q.params={}),ce({query:C.query,hash:C.hash,params:"path"in q?{}:C.params},q)}}function L(C,B){const D=c=y(C),q=l.value,oe=C.state,Ee=C.force,Z=C.replace===!0,d=M(D);if(d)return L(ce(g(d),{state:typeof d=="object"?ce({},oe,d.state):oe,force:Ee,replace:Z}),B||D);const _=D;_.redirectedFrom=B;let b;return!Ee&&iv(s,q,D)&&(b=ys(16,{to:_,from:q}),dn(q,q,!0,!1)),(b?Promise.resolve(b):H(_,q)).catch(w=>Pt(w)?Pt(w,2)?w:ct(w):pe(w,_,q)).then(w=>{if(w){if(Pt(w,2))return L(ce({replace:Z},g(w.to),{state:typeof w.to=="object"?ce({},oe,w.to.state):oe,force:Ee}),B||_)}else w=z(_,q,!0,Z,oe);return $(_,q,w),w})}function R(C,B){const D=v(C,B);return D?Promise.reject(D):Promise.resolve()}function H(C,B){let D;const[q,oe,Ee]=tb(C,B);D=ho(q.reverse(),"beforeRouteLeave",C,B);for(const d of q)d.leaveGuards.forEach(_=>{D.push(en(_,C,B))});const Z=R.bind(null,C,B);return D.push(Z),Gn(D).then(()=>{D=[];for(const d of r.list())D.push(en(d,C,B));return D.push(Z),Gn(D)}).then(()=>{D=ho(oe,"beforeRouteUpdate",C,B);for(const d of oe)d.updateGuards.forEach(_=>{D.push(en(_,C,B))});return D.push(Z),Gn(D)}).then(()=>{D=[];for(const d of C.matched)if(d.beforeEnter&&!B.matched.includes(d))if(mt(d.beforeEnter))for(const _ of d.beforeEnter)D.push(en(_,C,B));else D.push(en(d.beforeEnter,C,B));return D.push(Z),Gn(D)}).then(()=>(C.matched.forEach(d=>d.enterCallbacks={}),D=ho(Ee,"beforeRouteEnter",C,B),D.push(Z),Gn(D))).then(()=>{D=[];for(const d of o.list())D.push(en(d,C,B));return D.push(Z),Gn(D)}).catch(d=>Pt(d,8)?d:Promise.reject(d))}function $(C,B,D){for(const q of a.list())q(C,B,D)}function z(C,B,D,q,oe){const Ee=v(C,B);if(Ee)return Ee;const Z=B===Qt,d=Qn?history.state:{};D&&(q||Z?i.replace(C.fullPath,ce({scroll:Z&&d&&d.scroll},oe)):i.push(C.fullPath,oe)),l.value=C,dn(C,B,D,Z),ct()}let U;function X(){U||(U=i.listen((C,B,D)=>{if(!Ai.listening)return;const q=y(C),oe=M(q);if(oe){L(ce(oe,{replace:!0}),q).catch(Gs);return}c=q;const Ee=l.value;Qn&&hv(xc(Ee.fullPath,D.delta),Ur()),H(q,Ee).catch(Z=>Pt(Z,12)?Z:Pt(Z,2)?(L(Z.to,q).then(d=>{Pt(d,20)&&!D.delta&&D.type===ai.pop&&i.go(-1,!1)}).catch(Gs),Promise.reject()):(D.delta&&i.go(-D.delta,!1),pe(Z,q,Ee))).then(Z=>{Z=Z||z(q,Ee,!1),Z&&(D.delta&&!Pt(Z,8)?i.go(-D.delta,!1):D.type===ai.pop&&Pt(Z,20)&&i.go(-1,!1)),$(q,Ee,Z)}).catch(Gs)}))}let j=Ds(),Le=Ds(),re;function pe(C,B,D){ct(C);const q=Le.list();return q.length?q.forEach(oe=>oe(C,B,D)):console.error(C),Promise.reject(C)}function ue(){return re&&l.value!==Qt?Promise.resolve():new Promise((C,B)=>{j.add([C,B])})}function ct(C){return re||(re=!C,X(),j.list().forEach(([B,D])=>C?D(C):B()),j.reset()),C}function dn(C,B,D,q){const{scrollBehavior:oe}=t;if(!Qn||!oe)return Promise.resolve();const Ee=!D&&dv(xc(C.fullPath,0))||(q||!D)&&history.state&&history.state.scroll||null;return Va().then(()=>oe(C,B,Ee)).then(Z=>Z&&fv(Z)).catch(Z=>pe(Z,C,B))}const ut=C=>i.go(C);let Ve;const Kn=new Set,Ai={currentRoute:l,listening:!0,addRoute:p,removeRoute:m,hasRoute:S,getRoutes:E,resolve:y,options:t,push:I,replace:O,go:ut,back:()=>ut(-1),forward:()=>ut(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Le.add,isReady:ue,install(C){const B=this;C.component("RouterLink",Qv),C.component("RouterView",zh),C.config.globalProperties.$router=B,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>Je(l)}),Qn&&!Ve&&l.value===Qt&&(Ve=!0,I(i.location).catch(oe=>{}));const D={};for(const oe in Qt)D[oe]=Te(()=>l.value[oe]);C.provide(sl,B),C.provide(Kh,kt(D)),C.provide(na,l);const q=C.unmount;Kn.add(C),C.unmount=function(){Kn.delete(C),Kn.size<1&&(c=Qt,U&&U(),U=null,l.value=Qt,Ve=!1,re=!1),q()}}};return Ai}function Gn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function tb(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>ms(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>ms(c,l))||i.push(l))}return[n,s,i]}function nb(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,s]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(s!==void 0&&typeof s!="function")throw new Error("[nuxt] [useState] init must be a function: "+s);const i="$s"+n,r=De(),o=Hf(r.payload.state,i);if(o.value===void 0&&s){const a=s();if(Se(a))return r.payload.state[i]=a,a;o.value=a}return o}class sa extends Error{constructor(){super(...arguments),this.statusCode=500,this.fatal=!1,this.unhandled=!1,this.statusMessage="Internal Server Error"}}sa.__h3_error__=!0;function ia(t){var n;if(typeof t=="string")return new sa(t);if(sb(t))return t;const e=new sa((n=t.message)!=null?n:t.statusMessage,t.cause?{cause:t.cause}:void 0);if("stack"in t)try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}return t.statusCode&&(e.statusCode=t.statusCode),t.statusMessage&&(e.statusMessage=t.statusMessage),t.data&&(e.data=t.data),t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function sb(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const Br=()=>Hf(De().payload,"error"),js=t=>{const e=ob(t);try{De().callHook("app:error",e);const s=Br();s.value=s.value||e}catch{throw e}return e},ib=async(t={})=>{const e=De(),n=Br();e.callHook("app:error:cleared",t),t.redirect&&await e.$router.replace(t.redirect),n.value=null},rb=t=>!!(t&&typeof t=="object"&&"__nuxt_error"in t),ob=t=>{const e=ia(t);return e.__nuxt_error=!0,e},Hr=()=>{var t;return(t=De())==null?void 0:t.$router},Gh=()=>Rs()?Tt("_route",De()._route):De()._route,ab=()=>{try{if(De()._processingMiddleware)return!0}catch{return!0}return!1},lb=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:t.path||"/",s=tl(n,!0);if(s&&!(e!=null&&e.external))throw new Error("Navigating to external URL is not allowed by default. Use `nagivateTo (url, { external: true })`.");if(s&&Fr(n).protocol==="script:")throw new Error("Cannot navigate to an URL with script protocol.");if(!s&&ab())return t;const i=Hr();return s?(e!=null&&e.replace?location.replace(n):location.href=n,Promise.resolve()):e!=null&&e.replace?i.replace(t):i.push(t)},cb="modulepreload",ub=function(t,e){return new URL(t,e).href},zc={},as=function(e,n,s){return!n||n.length===0?e():Promise.all(n.map(i=>{if(i=ub(i,s),i in zc)return;zc[i]=!0;const r=i.endsWith(".css"),o=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${o}`))return;const a=document.createElement("link");if(a.rel=r?"stylesheet":cb,r||(a.as="script",a.crossOrigin=""),a.href=i,document.head.appendChild(a),r)return new Promise((l,c)=>{a.addEventListener("load",l),a.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};function Gc(t,e={}){const n=fb(t,e),s=De(),i=s._payloadCache=s._payloadCache||{};return i[n]?i[n]:(i[t]=hb(n).then(r=>r||(delete i[t],null)),i[t])}function fb(t,e={}){const n=Fr(t);if(n.search)throw new Error("Payload URL cannot contain search params: "+t);const s=e.hash||(e.fresh?Date.now():"");return Lr(n.pathname,s?`_payload.${s}.js`:"_payload.js")}async function hb(t){const e=await as(()=>import(t),[],import.meta.url).catch(n=>{console.warn("[nuxt] Cannot load payload ",t,n)});return(e==null?void 0:e.default)||null}function db(){return!!De().payload.prerenderedAt}const pb=(...t)=>t.find(e=>e!==void 0),gb="noopener noreferrer",_b=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),mb=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)});function yb(t){const e=t.componentName||"NuxtLink";return Oe({name:e,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(n,{slots:s}){const i=Hr(),r=Te(()=>n.to||n.href||""),o=Te(()=>n.external||n.target&&n.target!=="_self"?!0:typeof r.value=="object"?!1:r.value===""||tl(r.value,!0)),a=Tn(!1),l=Tn(null);if(n.prefetch!==!1&&n.noPrefetch!==!0&&typeof r.value=="string"&&!bb()){const u=De(),f=vb();let h,p=null;xr(()=>{h=_b(()=>{var m;(m=l==null?void 0:l.value)!=null&&m.tagName&&(p=f.observe(l.value,async()=>{p==null||p(),p=null,await Promise.all([u.hooks.callHook("link:prefetch",r.value).catch(()=>{}),Eb(r.value,i).catch(()=>{})]),a.value=!0}))})}),mi(()=>{h&&mb(h),p==null||p(),p=null})}return()=>{var p,m,E;if(!o.value)return Qe(Qa("RouterLink"),{ref:S=>{l.value=S==null?void 0:S.$el},to:r.value,...a.value&&!n.custom?{class:n.prefetchedClass||t.prefetchedClass}:{},activeClass:n.activeClass||t.activeClass,exactActiveClass:n.exactActiveClass||t.exactActiveClass,replace:n.replace,ariaCurrentValue:n.ariaCurrentValue,custom:n.custom},s.default);const c=typeof r.value=="object"?(m=(p=i.resolve(r.value))==null?void 0:p.href)!=null?m:null:r.value||null,u=n.target||null,f=n.noRel?null:pb(n.rel,t.externalRelAttribute,c?gb:"")||null,h=()=>lb(c,{replace:n.replace});return n.custom?s.default?s.default({href:c,navigate:h,route:i.resolve(c),rel:f,target:u,isActive:!1,isExactActive:!1}):null:Qe("a",{href:c,rel:f,target:u},(E=s.default)==null?void 0:E.call(s))}}})}const DR=yb({componentName:"NuxtLink"});function vb(){const t=De();if(t._observer)return t._observer;let e=null;const n=new Map,s=(r,o)=>(e||(e=new IntersectionObserver(a=>{for(const l of a){const c=n.get(l.target);(l.isIntersecting||l.intersectionRatio>0)&&c&&c()}})),n.set(r,o),e.observe(r),()=>{n.delete(r),e.unobserve(r),n.size===0&&(e.disconnect(),e=null)});return t._observer={observe:s}}function bb(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}async function Eb(t,e=Hr()){if(e._nuxtLinkPreloaded||(e._nuxtLinkPreloaded=new Set),e._nuxtLinkPreloaded.has(t))return;e._nuxtLinkPreloaded.add(t);const n=e.resolve(t).matched.map(i=>{var r;return(r=i.components)==null?void 0:r.default}).filter(i=>typeof i=="function"),s=[];for(const i of n){const r=Promise.resolve(i()).catch(()=>{});s.push(r)}await Promise.all(s)}function po(t){return t!==null&&typeof t=="object"}function ra(t,e,n=".",s){if(!po(e))return ra(t,{},n,s);const i=Object.assign({},e);for(const r in t){if(r==="__proto__"||r==="constructor")continue;const o=t[r];o!=null&&(s&&s(i,r,o,n)||(Array.isArray(o)&&Array.isArray(i[r])?i[r]=o.concat(i[r]):po(o)&&po(i[r])?i[r]=ra(o,i[r],(n?`${n}.`:"")+r.toString(),s):i[r]=o))}return i}function Yh(t){return(...e)=>e.reduce((n,s)=>ra(n,s,"",t),{})}const wb=Yh(),Ib=Yh((t,e,n,s)=>{if(typeof t[e]<"u"&&typeof n=="function")return t[e]=n(t[e]),!0}),Cb={};Ib(Cb);function il(t){const e=Q(t)?Te(t):t;De()._useHead(e)}const go={},Tb=yi(t=>{for(const e in go)t.vueApp.component(e,go[e]),t.vueApp.component("Lazy"+e,go[e])});var Sb="usehead",Yc="head:count",_o="data-head-attrs",Qh="data-meta-body",Rb=(t,e,n)=>{const s=n.createElement(t);for(const i of Object.keys(e))if(i==="body"&&e.body===!0)s.setAttribute(Qh,"true");else{let r=e[i];if(i==="renderPriority"||i==="key"||r===!1)continue;i==="children"?s.textContent=r:s.setAttribute(i,r)}return s};function Qc(t,e){if(t instanceof HTMLElement&&e instanceof HTMLElement){const n=e.getAttribute("nonce");if(n&&!t.getAttribute("nonce")){const s=e.cloneNode(!0);return s.setAttribute("nonce",""),s.nonce=n,n===t.nonce&&t.isEqualNode(s)}}return t.isEqualNode(e)}var Ab=t=>{if(!["meta","base","script","link"].includes(t.tag))return!1;const{props:e,tag:n}=t;if(n==="base")return"base";if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";const s=["key","id","name","property","http-equiv"];for(const i of s){let r;if(typeof e.getAttribute=="function"&&e.hasAttribute(i)?r=e.getAttribute(i):r=e[i],r!==void 0)return`${n}-${i}-${r}`}return!1},kb=["title","meta","link","base","style","script","noscript","htmlAttrs","bodyAttrs"],Nb=(t,e)=>t==null?"":typeof t=="string"?t.replace("%s",e!=null?e:""):t(Je(e)),Ob=t=>{const e=[],n=Object.keys(t);for(const s of n)if(t[s]!=null)switch(s){case"title":e.push({tag:s,props:{children:t[s]}});break;case"titleTemplate":break;case"base":e.push({tag:s,props:{key:"default",...t[s]}});break;default:if(kb.includes(s)){const i=t[s];Array.isArray(i)?i.forEach(r=>{e.push({tag:s,props:Je(r)})}):i&&e.push({tag:s,props:i})}break}return e},Jc=(t,e)=>{const n=t.getAttribute(_o);if(n)for(const i of n.split(","))i in e||t.removeAttribute(i);const s=[];for(const i in e){const r=e[i];r!=null&&(r===!1?t.removeAttribute(i):t.setAttribute(i,r),s.push(i))}s.length?t.setAttribute(_o,s.join(",")):t.removeAttribute(_o)},Pb=(t=window.document,e,n)=>{var s,i;const r=t.head,o=t.body;let a=r.querySelector(`meta[name="${Yc}"]`),l=o.querySelectorAll(`[${Qh}]`);const c=a?Number(a.getAttribute("content")):0,u=[],f=[];if(l)for(let p=0;p<l.length;p++)l[p]&&((s=l[p].tagName)==null?void 0:s.toLowerCase())===e&&f.push(l[p]);if(a)for(let p=0,m=a.previousElementSibling;p<c;p++,m=(m==null?void 0:m.previousElementSibling)||null)((i=m==null?void 0:m.tagName)==null?void 0:i.toLowerCase())===e&&u.push(m);else a=t.createElement("meta"),a.setAttribute("name",Yc),a.setAttribute("content","0"),r.append(a);let h=n.map(p=>{var m;return{element:Rb(p.tag,p.props,t),body:(m=p.props.body)!=null?m:!1}});h=h.filter(p=>{for(let m=0;m<u.length;m++){const E=u[m];if(Qc(E,p.element))return u.splice(m,1),!1}for(let m=0;m<f.length;m++){const E=f[m];if(Qc(E,p.element))return f.splice(m,1),!1}return!0}),f.forEach(p=>{var m;return(m=p.parentNode)==null?void 0:m.removeChild(p)}),u.forEach(p=>{var m;return(m=p.parentNode)==null?void 0:m.removeChild(p)}),h.forEach(p=>{p.body===!0?o.insertAdjacentElement("beforeend",p.element):r.insertBefore(p.element,a)}),a.setAttribute("content",""+(c-u.length+h.filter(p=>!p.body).length))},xb=t=>{let e=[],n=new Set;t&&e.push(Ji(t));const s={install(i){i.config.globalProperties.$head=s,i.provide(Sb,s)},get headTags(){const i=[],r={},o=e.map(a=>Je(a).titleTemplate).reverse().find(a=>a!=null);return e.forEach((a,l)=>{Ob(Je(a)).forEach((u,f)=>{u._position=l*1e4+f,o&&u.tag==="title"&&(u.props.children=Nb(o,u.props.children));const h=Ab(u);h?r[h]=u:i.push(u)})}),i.push(...Object.values(r)),i.sort((a,l)=>a._position-l._position)},addHeadObjs(i){e.push(i)},removeHeadObjs(i){e=e.filter(r=>r!==i)},updateDOM(i=window.document){let r,o={},a={};const l={};for(const u of s.headTags.sort(Mb)){if(u.tag==="title"){r=u.props.children;continue}if(u.tag==="htmlAttrs"){Object.assign(o,u.props);continue}if(u.tag==="bodyAttrs"){Object.assign(a,u.props);continue}l[u.tag]=l[u.tag]||[],l[u.tag].push(u)}r!==void 0&&(i.title=r),Jc(i.documentElement,o),Jc(i.body,a);const c=new Set([...Object.keys(l),...n]);for(const u of c)Pb(i,u,l[u]||[]);n.clear(),Object.keys(l).forEach(u=>n.add(u))}};return s},Mb=(t,e)=>{const n=s=>{if(s.props.renderPriority)return s.props.renderPriority;switch(s.tag){case"base":return-1;case"meta":return s.props.charset?-2:s.props["http-equiv"]==="content-security-policy"?0:10;default:return 10}};return n(t)-n(e)};const Db=yi(t=>{const e=xb();t.vueApp.use(e);let n=!1;t.hooks.hookOnce("app:mounted",()=>{nc(()=>{e.updateDOM()}),n=!0}),t._useHead=s=>{const i=Tn(s),r=Te(()=>{const a={meta:[]};return i.value.charset&&a.meta.push({key:"charset",charset:i.value.charset}),i.value.viewport&&a.meta.push({name:"viewport",content:i.value.viewport}),wb(a,i.value)});e.addHeadObjs(r),n&&nc(()=>{e.updateDOM()}),Rs()&&mi(()=>{e.removeHeadObjs(r),e.updateDOM()})}}),Lb=t=>Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0)),qt=(t,e)=>(n,s)=>(il(()=>t({...Lb(n),...s.attrs},s)),()=>{var i,r;return e?(r=(i=s.slots).default)==null?void 0:r.call(i):null}),hn={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},Fb=Oe({name:"Script",inheritAttrs:!1,props:{...hn,async:Boolean,crossorigin:{type:[Boolean,String],default:void 0},defer:Boolean,fetchpriority:String,integrity:String,nomodule:Boolean,nonce:String,referrerpolicy:String,src:String,type:String,charset:String,language:String},setup:qt(t=>({script:[t]}))}),Ub=Oe({name:"NoScript",inheritAttrs:!1,props:{...hn,title:String},setup:qt((t,{slots:e})=>{var i;const n={...t},s=(((i=e.default)==null?void 0:i.call(e))||[]).filter(({children:r})=>r).map(({children:r})=>r).join("");return s&&(n.children=s),{noscript:[n]}})}),Bb=Oe({name:"Link",inheritAttrs:!1,props:{...hn,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String},setup:qt(t=>({link:[t]}))}),Hb=Oe({name:"Base",inheritAttrs:!1,props:{...hn,href:String,target:String},setup:qt(t=>({base:t}))}),$b=Oe({name:"Title",inheritAttrs:!1,setup:qt((t,{slots:e})=>{var s,i,r;return{title:((r=(i=(s=e.default)==null?void 0:s.call(e))==null?void 0:i[0])==null?void 0:r.children)||null}})}),jb=Oe({name:"Meta",inheritAttrs:!1,props:{...hn,charset:String,content:String,httpEquiv:String,name:String},setup:qt(t=>{const e={...t};return e.httpEquiv&&(e["http-equiv"]=e.httpEquiv,delete e.httpEquiv),{meta:[e]}})}),Wb=Oe({name:"Style",inheritAttrs:!1,props:{...hn,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0}},setup:qt((t,{slots:e})=>{var i,r,o;const n={...t},s=(o=(r=(i=e.default)==null?void 0:i.call(e))==null?void 0:r[0])==null?void 0:o.children;return s&&(n.children=s),{style:[n]}})}),qb=Oe({name:"Head",inheritAttrs:!1,setup:(t,e)=>()=>{var n,s;return(s=(n=e.slots).default)==null?void 0:s.call(n)}}),Vb=Oe({name:"Html",inheritAttrs:!1,props:{...hn,manifest:String,version:String,xmlns:String},setup:qt(t=>({htmlAttrs:t}),!0)}),Kb=Oe({name:"Body",inheritAttrs:!1,props:hn,setup:qt(t=>({bodyAttrs:t}),!0)}),Xc=Object.freeze(Object.defineProperty({__proto__:null,Script:Fb,NoScript:Ub,Link:Bb,Base:Hb,Title:$b,Meta:jb,Style:Wb,Head:qb,Html:Vb,Body:Kb},Symbol.toStringTag,{value:"Module"})),zb={meta:[],link:[],style:[],script:[],noscript:[],charset:"utf-8",viewport:"width=device-width, initial-scale=1"},Gb={name:"layout",mode:"out-in"},Yb={name:"page",mode:"out-in"},Qb=!1,Jb={created(){const t=Rs();if(!t)return;const e=t.type;if(!e||!("head"in e))return;const n=De(),s=typeof e.head=="function"?Te(()=>e.head(n)):e.head;il(s)}},Xb=yi(t=>{il(ja({title:"",...zb})),t.vueApp.mixin(Jb);for(const e in Xc)t.vueApp.component(e,Xc[e])}),Zb=(t,e)=>e.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var s;return((s=t.params[n.slice(1)])==null?void 0:s.toString())||""}),eE=(t,e)=>{var i;const n=e.route.matched.find(r=>{var o;return((o=r.components)==null?void 0:o.default)===e.Component.type}),s=(i=t!=null?t:n==null?void 0:n.meta.key)!=null?i:n&&Zb(e.route,n);return typeof s=="function"?s(e.route):s},tE=(t,e)=>({default:()=>t?Qe(P_,t===!0?{}:t,e):e}),nE=Oe({setup(t,{slots:e}){return()=>{var n;return(n=e.default)==null?void 0:n.call(e)}}}),oa=(t,e,n)=>({default:()=>e?Qe(t,e===!0?{}:e,n):Qe(nE,{},n)}),Zc=Symbol("isNested"),mo=Oe({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e}){const n=De(),s=Tt(Zc,!1);return Sn(Zc,!0),()=>Qe(zh,{name:t.name,route:t.route,...e},{default:i=>{var a,l,c,u;if(!i.Component)return;const r=eE(t.pageKey,i),o=(l=(a=t.transition)!=null?a:i.route.meta.pageTransition)!=null?l:Yb;return oa(Dr,o,tE((u=(c=t.keepalive)!=null?c:i.route.meta.keepalive)!=null?u:Qb,s&&n.isHydrating?Qe(eu,{key:r,routeProps:i,pageKey:r,hasTransition:!!o}):Qe(Gf,{onPending:()=>n.callHook("page:start",i.Component),onResolve:()=>n.callHook("page:finish",i.Component)},{default:()=>Qe(eu,{key:r,routeProps:i,pageKey:r,hasTransition:!!o})}))).default()}})}}),eu=Oe({props:["routeProps","pageKey","hasTransition"],setup(t){const e=t.pageKey,n=t.routeProps.route,s={};for(const i in t.routeProps.route)s[i]=Te(()=>e===t.pageKey?t.routeProps.route[i]:n[i]);return Sn("_route",kt(s)),()=>Qe(t.routeProps.Component)}}),sE=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Fi=void 0;/**
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
 */const Jh={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const x=function(t,e){if(!t)throw As(e)},As=function(t){return new Error("Firebase Database ("+Jh.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Xh=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},iE=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},rl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,f=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(h=64)),s.push(n[u],n[f],n[h],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Xh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):iE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||f==null)throw Error();const h=r<<2|a>>4;if(s.push(h),c!==64){const p=a<<4&240|c>>2;if(s.push(p),f!==64){const m=c<<6&192|f;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Zh=function(t){const e=Xh(t);return rl.encodeByteArray(e,!0)},ed=function(t){return Zh(t).replace(/\./g,"")},aa=function(t){try{return rl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function rE(t){return td(void 0,t)}function td(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!oE(n)||(t[n]=td(t[n],e[n]));return t}function oE(t){return t!=="__proto__"}/**
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
 */class ol{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function $e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function al(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())}function nd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function sd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function aE(){const t=$e();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function id(){return Jh.NODE_ADMIN===!0}function rd(){return typeof indexedDB=="object"}function od(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function lE(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const cE="FirebaseError";class Ot extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=cE,Object.setPrototypeOf(this,Ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$n.prototype.create)}}class $n{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?uE(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ot(i,a,s)}}function uE(t,e){return t.replace(fE,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const fE=/\{\$([^}]+)}/g;/**
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
 */function li(t){return JSON.parse(t)}function xe(t){return JSON.stringify(t)}/**
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
 */const ad=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=li(aa(r[0])||""),n=li(aa(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},hE=function(t){const e=ad(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},dE=function(t){const e=ad(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Vt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function vs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function la(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ar(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function ci(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(tu(r)&&tu(o)){if(!ci(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function tu(t){return t!==null&&typeof t=="object"}/**
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
 */function ks(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class pE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)s[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)s[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const h=s[f-3]^s[f-8]^s[f-14]^s[f-16];s[f]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let f=0;f<80;f++){f<40?f<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):f<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const h=(i<<5|i>>>27)+c+l+u+s[f]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function gE(t,e){const n=new _E(t,e);return n.subscribe.bind(n)}class _E{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");mE(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=yo),i.error===void 0&&(i.error=yo),i.complete===void 0&&(i.complete=yo);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function yo(){}function yE(t,e){return`${t} failed: ${e} argument `}/**
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
 */const vE=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,x(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},$r=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const bE=1e3,EE=2,wE=4*60*60*1e3,IE=.5;function nu(t,e=bE,n=EE){const s=e*Math.pow(n,t),i=Math.round(IE*s*(Math.random()-.5)*2);return Math.min(wE,s+i)}/**
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
 */function jn(t){return t&&t._delegate?t._delegate:t}class yt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const yn="[DEFAULT]";/**
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
 */class CE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ol;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(SE(e))try{this.getOrInitializeService({instanceIdentifier:yn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=yn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yn){return this.instances.has(e)}getOptions(e=yn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:TE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=yn){return this.component?this.component.multipleInstances?e:yn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function TE(t){return t===yn?void 0:t}function SE(t){return t.instantiationMode==="EAGER"}/**
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
 */class RE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new CE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const AE={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},kE=de.INFO,NE={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},OE=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=NE[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jr{constructor(e){this.name=e,this._logLevel=kE,this._logHandler=OE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?AE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const PE=(t,e)=>e.some(n=>t instanceof n);let su,iu;function xE(){return su||(su=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ME(){return iu||(iu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ld=new WeakMap,ca=new WeakMap,cd=new WeakMap,vo=new WeakMap,ll=new WeakMap;function DE(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(ln(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ld.set(n,t)}).catch(()=>{}),ll.set(e,t),e}function LE(t){if(ca.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});ca.set(t,e)}let ua={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ca.get(t);if(e==="objectStoreNames")return t.objectStoreNames||cd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ln(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function FE(t){ua=t(ua)}function UE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(bo(this),e,...n);return cd.set(s,e.sort?e.sort():[e]),ln(s)}:ME().includes(t)?function(...e){return t.apply(bo(this),e),ln(ld.get(this))}:function(...e){return ln(t.apply(bo(this),e))}}function BE(t){return typeof t=="function"?UE(t):(t instanceof IDBTransaction&&LE(t),PE(t,xE())?new Proxy(t,ua):t)}function ln(t){if(t instanceof IDBRequest)return DE(t);if(vo.has(t))return vo.get(t);const e=BE(t);return e!==t&&(vo.set(t,e),ll.set(e,t)),e}const bo=t=>ll.get(t);function ud(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=ln(o);return s&&o.addEventListener("upgradeneeded",l=>{s(ln(o.result),l.oldVersion,l.newVersion,ln(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const HE=["get","getKey","getAll","getAllKeys","count"],$E=["put","add","delete","clear"],Eo=new Map;function ru(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Eo.get(e))return Eo.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=$E.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||HE.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Eo.set(e,r),r}FE(t=>({...t,get:(e,n,s)=>ru(e,n)||t.get(e,n,s),has:(e,n)=>!!ru(e,n)||t.has(e,n)}));/**
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
 */class jE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(WE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function WE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fa="@firebase/app",ou="0.7.33";/**
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
 */const Pn=new jr("@firebase/app"),qE="@firebase/app-compat",VE="@firebase/analytics-compat",KE="@firebase/analytics",zE="@firebase/app-check-compat",GE="@firebase/app-check",YE="@firebase/auth",QE="@firebase/auth-compat",JE="@firebase/database",XE="@firebase/database-compat",ZE="@firebase/functions",ew="@firebase/functions-compat",tw="@firebase/installations",nw="@firebase/installations-compat",sw="@firebase/messaging",iw="@firebase/messaging-compat",rw="@firebase/performance",ow="@firebase/performance-compat",aw="@firebase/remote-config",lw="@firebase/remote-config-compat",cw="@firebase/storage",uw="@firebase/storage-compat",fw="@firebase/firestore",hw="@firebase/firestore-compat",dw="firebase",pw="9.10.0";/**
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
 */const fd="[DEFAULT]",gw={[fa]:"fire-core",[qE]:"fire-core-compat",[KE]:"fire-analytics",[VE]:"fire-analytics-compat",[GE]:"fire-app-check",[zE]:"fire-app-check-compat",[YE]:"fire-auth",[QE]:"fire-auth-compat",[JE]:"fire-rtdb",[XE]:"fire-rtdb-compat",[ZE]:"fire-fn",[ew]:"fire-fn-compat",[tw]:"fire-iid",[nw]:"fire-iid-compat",[sw]:"fire-fcm",[iw]:"fire-fcm-compat",[rw]:"fire-perf",[ow]:"fire-perf-compat",[aw]:"fire-rc",[lw]:"fire-rc-compat",[cw]:"fire-gcs",[uw]:"fire-gcs-compat",[fw]:"fire-fst",[hw]:"fire-fst-compat","fire-js":"fire-js",[dw]:"fire-js-all"};/**
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
 */const lr=new Map,ha=new Map;function _w(t,e){try{t.container.addComponent(e)}catch(n){Pn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Nt(t){const e=t.name;if(ha.has(e))return Pn.debug(`There were multiple attempts to register component ${e}.`),!1;ha.set(e,t);for(const n of lr.values())_w(n,t);return!0}function Wn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const mw={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},xn=new $n("app","Firebase",mw);/**
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
 */class yw{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xn.create("app-deleted",{appName:this._name})}}/**
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
 */const vi=pw;function LR(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:fd,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw xn.create("bad-app-name",{appName:String(s)});const i=lr.get(s);if(i){if(ci(t,i.options)&&ci(n,i.config))return i;throw xn.create("duplicate-app",{appName:s})}const r=new RE(s);for(const a of ha.values())r.addComponent(a);const o=new yw(t,n,r);return lr.set(s,o),o}function cl(t=fd){const e=lr.get(t);if(!e)throw xn.create("no-app",{appName:t});return e}function ot(t,e,n){var s;let i=(s=gw[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pn.warn(a.join(" "));return}Nt(new yt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const vw="firebase-heartbeat-database",bw=1,ui="firebase-heartbeat-store";let wo=null;function hd(){return wo||(wo=ud(vw,bw,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ui)}}}).catch(t=>{throw xn.create("idb-open",{originalErrorMessage:t.message})})),wo}async function Ew(t){var e;try{return(await hd()).transaction(ui).objectStore(ui).get(dd(t))}catch(n){if(n instanceof Ot)Pn.warn(n.message);else{const s=xn.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Pn.warn(s.message)}}}async function au(t,e){var n;try{const i=(await hd()).transaction(ui,"readwrite");return await i.objectStore(ui).put(e,dd(t)),i.done}catch(s){if(s instanceof Ot)Pn.warn(s.message);else{const i=xn.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});Pn.warn(i.message)}}}function dd(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ww=1024,Iw=30*24*60*60*1e3;class Cw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Sw(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=lu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Iw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=lu(),{heartbeatsToSend:n,unsentEntries:s}=Tw(this._heartbeatsCache.heartbeats),i=ed(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function lu(){return new Date().toISOString().substring(0,10)}function Tw(t,e=ww){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),cu(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),cu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Sw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rd()?od().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ew(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return au(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return au(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function cu(t){return ed(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Rw(t){Nt(new yt("platform-logger",e=>new jE(e),"PRIVATE")),Nt(new yt("heartbeat",e=>new Cw(e),"PRIVATE")),ot(fa,ou,t),ot(fa,ou,"esm2017"),ot("fire-js","")}Rw("");var Aw="firebase",kw="9.10.0";/**
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
 */ot(Aw,kw,"app");const pd="@firebase/installations",ul="0.5.12";/**
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
 */const gd=1e4,_d=`w:${ul}`,md="FIS_v2",Nw="https://firebaseinstallations.googleapis.com/v1",Ow=60*60*1e3,Pw="installations",xw="Installations";/**
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
 */const Mw={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Mn=new $n(Pw,xw,Mw);function yd(t){return t instanceof Ot&&t.code.includes("request-failed")}/**
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
 */function vd({projectId:t}){return`${Nw}/projects/${t}/installations`}function bd(t){return{token:t.token,requestStatus:2,expiresIn:Lw(t.expiresIn),creationTime:Date.now()}}async function Ed(t,e){const s=(await e.json()).error;return Mn.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function wd({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Dw(t,{refreshToken:e}){const n=wd(t);return n.append("Authorization",Fw(e)),n}async function Id(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Lw(t){return Number(t.replace("s","000"))}function Fw(t){return`${md} ${t}`}/**
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
 */async function Uw({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=vd(t),i=wd(t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:md,appId:t.appId,sdkVersion:_d},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Id(()=>fetch(s,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:bd(c.authToken)}}else throw await Ed("Create Installation",l)}/**
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
 */function Cd(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Bw(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Hw=/^[cdef][\w-]{21}$/,da="";function $w(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=jw(t);return Hw.test(n)?n:da}catch{return da}}function jw(t){return Bw(t).substr(0,22)}/**
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
 */function Wr(t){return`${t.appName}!${t.appId}`}/**
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
 */const Td=new Map;function Sd(t,e){const n=Wr(t);Rd(n,e),Ww(n,e)}function Rd(t,e){const n=Td.get(t);if(!!n)for(const s of n)s(e)}function Ww(t,e){const n=qw();n&&n.postMessage({key:t,fid:e}),Vw()}let wn=null;function qw(){return!wn&&"BroadcastChannel"in self&&(wn=new BroadcastChannel("[Firebase] FID Change"),wn.onmessage=t=>{Rd(t.data.key,t.data.fid)}),wn}function Vw(){Td.size===0&&wn&&(wn.close(),wn=null)}/**
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
 */const Kw="firebase-installations-database",zw=1,Dn="firebase-installations-store";let Io=null;function fl(){return Io||(Io=ud(Kw,zw,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Dn)}}})),Io}async function cr(t,e){const n=Wr(t),i=(await fl()).transaction(Dn,"readwrite"),r=i.objectStore(Dn),o=await r.get(n);return await r.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Sd(t,e.fid),e}async function Ad(t){const e=Wr(t),s=(await fl()).transaction(Dn,"readwrite");await s.objectStore(Dn).delete(e),await s.done}async function qr(t,e){const n=Wr(t),i=(await fl()).transaction(Dn,"readwrite"),r=i.objectStore(Dn),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Sd(t,a.fid),a}/**
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
 */async function hl(t){let e;const n=await qr(t.appConfig,s=>{const i=Gw(s),r=Yw(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===da?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Gw(t){const e=t||{fid:$w(),registrationStatus:0};return kd(e)}function Yw(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Mn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=Qw(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Jw(t)}:{installationEntry:e}}async function Qw(t,e){try{const n=await Uw(t,e);return cr(t.appConfig,n)}catch(n){throw yd(n)&&n.customData.serverCode===409?await Ad(t.appConfig):await cr(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Jw(t){let e=await uu(t.appConfig);for(;e.registrationStatus===1;)await Cd(100),e=await uu(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await hl(t);return s||n}return e}function uu(t){return qr(t,e=>{if(!e)throw Mn.create("installation-not-found");return kd(e)})}function kd(t){return Xw(t)?{fid:t.fid,registrationStatus:0}:t}function Xw(t){return t.registrationStatus===1&&t.registrationTime+gd<Date.now()}/**
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
 */async function Zw({appConfig:t,heartbeatServiceProvider:e},n){const s=eI(t,n),i=Dw(t,n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:_d,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Id(()=>fetch(s,a));if(l.ok){const c=await l.json();return bd(c)}else throw await Ed("Generate Auth Token",l)}function eI(t,{fid:e}){return`${vd(t)}/${e}/authTokens:generate`}/**
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
 */async function dl(t,e=!1){let n;const s=await qr(t.appConfig,r=>{if(!Nd(r))throw Mn.create("not-registered");const o=r.authToken;if(!e&&sI(o))return r;if(o.requestStatus===1)return n=tI(t,e),r;{if(!navigator.onLine)throw Mn.create("app-offline");const a=rI(r);return n=nI(t,a),a}});return n?await n:s.authToken}async function tI(t,e){let n=await fu(t.appConfig);for(;n.authToken.requestStatus===1;)await Cd(100),n=await fu(t.appConfig);const s=n.authToken;return s.requestStatus===0?dl(t,e):s}function fu(t){return qr(t,e=>{if(!Nd(e))throw Mn.create("not-registered");const n=e.authToken;return oI(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function nI(t,e){try{const n=await Zw(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await cr(t.appConfig,s),n}catch(n){if(yd(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Ad(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await cr(t.appConfig,s)}throw n}}function Nd(t){return t!==void 0&&t.registrationStatus===2}function sI(t){return t.requestStatus===2&&!iI(t)}function iI(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Ow}function rI(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function oI(t){return t.requestStatus===1&&t.requestTime+gd<Date.now()}/**
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
 */async function aI(t){const e=t,{installationEntry:n,registrationPromise:s}=await hl(e);return s?s.catch(console.error):dl(e).catch(console.error),n.fid}/**
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
 */async function lI(t,e=!1){const n=t;return await cI(n),(await dl(n,e)).token}async function cI(t){const{registrationPromise:e}=await hl(t);e&&await e}/**
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
 */function uI(t){if(!t||!t.options)throw Co("App Configuration");if(!t.name)throw Co("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Co(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Co(t){return Mn.create("missing-app-config-values",{valueName:t})}/**
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
 */const Od="installations",fI="installations-internal",hI=t=>{const e=t.getProvider("app").getImmediate(),n=uI(e),s=Wn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},dI=t=>{const e=t.getProvider("app").getImmediate(),n=Wn(e,Od).getImmediate();return{getId:()=>aI(n),getToken:i=>lI(n,i)}};function pI(){Nt(new yt(Od,hI,"PUBLIC")),Nt(new yt(fI,dI,"PRIVATE"))}pI();ot(pd,ul);ot(pd,ul,"esm2017");/**
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
 */const ur="analytics",gI="firebase_id",_I="origin",mI=60*1e3,yI="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Pd="https://www.googletagmanager.com/gtag/js";/**
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
 */const Xe=new jr("@firebase/analytics");/**
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
 */function xd(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function vI(t,e){const n=document.createElement("script");n.src=`${Pd}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function bI(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function EI(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const l=(await xd(n)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){Xe.error(a)}t("config",i,r)}async function wI(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await xd(n);for(const l of o){const c=a.find(f=>f.measurementId===l),u=c&&e[c.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(r){Xe.error(r)}}function II(t,e,n,s){async function i(r,o,a){try{r==="event"?await wI(t,e,n,o,a):r==="config"?await EI(t,e,n,s,o,a):r==="consent"?t("consent","update",a):t("set",o)}catch(l){Xe.error(l)}}return i}function CI(t,e,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=II(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}function TI(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Pd))return e;return null}/**
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
 */const SI={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},at=new $n("analytics","Analytics",SI);/**
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
 */const RI=30,AI=1e3;class kI{constructor(e={},n=AI){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Md=new kI;function NI(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function OI(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:NI(s)},r=yI.replace("{app-id}",n),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw at.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function PI(t,e=Md,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw at.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw at.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new DI;return setTimeout(async()=>{a.abort()},n!==void 0?n:mI),Dd({appId:s,apiKey:i,measurementId:r},o,a,e)}async function Dd(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=Md){var r,o;const{appId:a,measurementId:l}=t;try{await xI(s,e)}catch(c){if(l)return Xe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${(r=c)===null||r===void 0?void 0:r.message}]`),{appId:a,measurementId:l};throw c}try{const c=await OI(t);return i.deleteThrottleMetadata(a),c}catch(c){const u=c;if(!MI(u)){if(i.deleteThrottleMetadata(a),l)return Xe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:l};throw c}const f=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?nu(n,i.intervalMillis,RI):nu(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(a,h),Xe.debug(`Calling attemptFetch again in ${f} millis`),Dd(t,h,s,i)}}function xI(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),s(at.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function MI(t){if(!(t instanceof Ot)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class DI{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function LI(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const r=await e,o=Object.assign(Object.assign({},s),{send_to:r});t("event",n,o)}}/**
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
 */async function FI(){var t;if(rd())try{await od()}catch(e){return Xe.warn(at.create("indexeddb-unavailable",{errorInfo:(t=e)===null||t===void 0?void 0:t.toString()}).message),!1}else return Xe.warn(at.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function UI(t,e,n,s,i,r,o){var a;const l=PI(t);l.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&Xe.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>Xe.error(p)),e.push(l);const c=FI().then(p=>{if(p)return s.getId()}),[u,f]=await Promise.all([l,c]);TI()||vI(r,u.measurementId),i("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[_I]="firebase",h.update=!0,f!=null&&(h[gI]=f),i("config",u.measurementId,h),u.measurementId}/**
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
 */class BI{constructor(e){this.app=e}_delete(){return delete Qs[this.app.options.appId],Promise.resolve()}}let Qs={},hu=[];const du={};let To="dataLayer",HI="gtag",pu,Ld,gu=!1;function $I(){const t=[];if(nd()&&t.push("This is a browser extension environment."),lE()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=at.create("invalid-analytics-context",{errorInfo:e});Xe.warn(n.message)}}function jI(t,e,n){$I();const s=t.options.appId;if(!s)throw at.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Xe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw at.create("no-api-key");if(Qs[s]!=null)throw at.create("already-exists",{id:s});if(!gu){bI(To);const{wrappedGtag:r,gtagCore:o}=CI(Qs,hu,du,To,HI);Ld=r,pu=o,gu=!0}return Qs[s]=UI(t,hu,du,e,pu,To,n),new BI(t)}function FR(t=cl()){t=jn(t);const e=Wn(t,ur);return e.isInitialized()?e.getImmediate():WI(t)}function WI(t,e={}){const n=Wn(t,ur);if(n.isInitialized()){const i=n.getImmediate();if(ci(e,n.getOptions()))return i;throw at.create("already-initialized")}return n.initialize({options:e})}function qI(t,e,n,s){t=jn(t),LI(Ld,Qs[t.app.options.appId],e,n,s).catch(i=>Xe.error(i))}const _u="@firebase/analytics",mu="0.8.0";function VI(){Nt(new yt(ur,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return jI(s,i,n)},"PUBLIC")),Nt(new yt("analytics-internal",t,"PRIVATE")),ot(_u,mu),ot(_u,mu,"esm2017");function t(e){try{const n=e.getProvider(ur).getImmediate();return{logEvent:(s,i,r)=>qI(n,s,i,r)}}catch(n){throw at.create("interop-component-reg-failed",{reason:n})}}}VI();const Ui=void 0,yu="@firebase/database",vu="0.13.6";/**
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
 */let Fd="";function KI(t){Fd=t}/**
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
 */class zI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),xe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:li(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class GI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Vt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Ud=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new zI(e)}}catch{}return new GI},In=Ud("localStorage"),pa=Ud("sessionStorage");/**
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
 */const ls=new jr("@firebase/database"),YI=function(){let t=1;return function(){return t++}}(),Bd=function(t){const e=vE(t),n=new pE;n.update(e);const s=n.digest();return rl.encodeByteArray(s)},bi=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=bi.apply(null,s):typeof s=="object"?e+=xe(s):e+=s,e+=" "}return e};let Nn=null,bu=!0;const QI=function(t,e){x(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ls.logLevel=de.VERBOSE,Nn=ls.log.bind(ls),e&&pa.set("logging_enabled",!0)):typeof t=="function"?Nn=t:(Nn=null,pa.remove("logging_enabled"))},Fe=function(...t){if(bu===!0&&(bu=!1,Nn===null&&pa.get("logging_enabled")===!0&&QI(!0)),Nn){const e=bi.apply(null,t);Nn(e)}},Ei=function(t){return function(...e){Fe(t,...e)}},ga=function(...t){const e="FIREBASE INTERNAL ERROR: "+bi(...t);ls.error(e)},Ln=function(...t){const e=`FIREBASE FATAL ERROR: ${bi(...t)}`;throw ls.error(e),new Error(e)},Ze=function(...t){const e="FIREBASE WARNING: "+bi(...t);ls.warn(e)},JI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ze("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Hd=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},XI=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},bs="[MIN_NAME]",Fn="[MAX_NAME]",Ns=function(t,e){if(t===e)return 0;if(t===bs||e===Fn)return-1;if(e===bs||t===Fn)return 1;{const n=Eu(t),s=Eu(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},ZI=function(t,e){return t===e?0:t<e?-1:1},Ls=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+xe(e))},pl=function(t){if(typeof t!="object"||t===null)return xe(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=xe(e[s]),n+=":",n+=pl(t[e[s]]);return n+="}",n},$d=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function lt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const jd=function(t){x(!Hd(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let f="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),f=f+h}return f.toLowerCase()},eC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},tC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},nC=new RegExp("^-?(0*)\\d{1,10}$"),sC=-2147483648,iC=2147483647,Eu=function(t){if(nC.test(t)){const e=Number(t);if(e>=sC&&e<=iC)return e}return null},wi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ze("Exception was thrown by user callback.",n),e},Math.floor(0))}},rC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Js=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class oC{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ze(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class aC{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Fe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ze(e)}}class _a{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}_a.OWNER="owner";/**
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
 */const gl="5",Wd="v",qd="s",Vd="r",Kd="f",zd=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Gd="ls",Yd="p",ma="ac",Qd="websocket",Jd="long_polling";/**
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
 */class lC{constructor(e,n,s,i,r=!1,o="",a=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=In.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&In.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function cC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Xd(t,e,n){x(typeof e=="string","typeof type must == string"),x(typeof n=="object","typeof params must == object");let s;if(e===Qd)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Jd)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);cC(t)&&(n.ns=t.namespace);const i=[];return lt(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class uC{constructor(){this.counters_={}}incrementCounter(e,n=1){Vt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return rE(this.counters_)}}/**
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
 */const So={},Ro={};function _l(t){const e=t.toString();return So[e]||(So[e]=new uC),So[e]}function fC(t,e){const n=t.toString();return Ro[n]||(Ro[n]=e()),Ro[n]}/**
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
 */class hC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&wi(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const wu="start",dC="close",pC="pLPCommand",gC="pRTLPCB",Zd="id",ep="pw",tp="ser",_C="cb",mC="seg",yC="ts",vC="d",bC="dframe",np=1870,sp=30,EC=np-sp,wC=25e3,IC=3e4;class Xn{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ei(e),this.stats_=_l(n),this.urlFn=l=>(this.appCheckToken&&(l[ma]=this.appCheckToken),Xd(n,Jd,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new hC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(IC)),XI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ml((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===wu)this.id=a,this.password=l;else if(o===dC)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[wu]="t",s[tp]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[_C]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Wd]=gl,this.transportSessionId&&(s[qd]=this.transportSessionId),this.lastSessionId&&(s[Gd]=this.lastSessionId),this.applicationId&&(s[Yd]=this.applicationId),this.appCheckToken&&(s[ma]=this.appCheckToken),typeof location<"u"&&location.hostname&&zd.test(location.hostname)&&(s[Vd]=Kd);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Xn.forceAllow_=!0}static forceDisallow(){Xn.forceDisallow_=!0}static isAvailable(){return Xn.forceAllow_?!0:!Xn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!eC()&&!tC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Zh(n),i=$d(s,EC);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[bC]="t",s[Zd]=e,s[ep]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=xe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ml{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=YI(),window[pC+this.uniqueCallbackIdentifier]=e,window[gC+this.uniqueCallbackIdentifier]=n,this.myIFrame=ml.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;r='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Fe("frame writing exception"),a.stack&&Fe(a.stack),Fe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Fe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Zd]=this.myID,e[ep]=this.myPW,e[tp]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+sp+s.length<=np;){const o=this.pendingSegs.shift();s=s+"&"+mC+i+"="+o.seg+"&"+yC+i+"="+o.ts+"&"+vC+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(wC)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Fe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const CC=16384,TC=45e3;let fr=null;typeof MozWebSocket<"u"?fr=MozWebSocket:typeof WebSocket<"u"&&(fr=WebSocket);class dt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ei(this.connId),this.stats_=_l(n),this.connURL=dt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Wd]=gl,typeof location<"u"&&location.hostname&&zd.test(location.hostname)&&(o[Vd]=Kd),n&&(o[qd]=n),s&&(o[Gd]=s),i&&(o[ma]=i),r&&(o[Yd]=r),Xd(e,Qd,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,In.set("previous_websocket_failure",!0);try{let s;id(),this.mySock=new fr(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){dt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&fr!==null&&!dt.forceDisallow_}static previouslyFailed(){return In.isInMemoryStorage||In.get("previous_websocket_failure")===!0}markConnectionHealthy(){In.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=li(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=$d(n,CC);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(TC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}dt.responsesRequiredToBeHealthy=2;dt.healthyTimeout=3e4;/**
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
 */class fi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Xn,dt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=dt&&dt.isAvailable();let s=n&&!dt.previouslyFailed();if(e.webSocketOnly&&(n||Ze("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[dt];else{const i=this.transports_=[];for(const r of fi.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);fi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}fi.globalTransportInitialized_=!1;/**
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
 */const SC=6e4,RC=5e3,AC=10*1024,kC=100*1024,Ao="t",Iu="d",NC="s",Cu="r",OC="e",Tu="o",Su="a",Ru="n",Au="p",PC="h";class xC{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ei("c:"+this.id+":"),this.transportManager_=new fi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Js(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>kC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>AC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ao in e){const n=e[Ao];n===Su?this.upgradeIfSecondaryHealthy_():n===Cu?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Tu&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ls("t",e),s=Ls("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Au,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Su,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ru,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ls("t",e),s=Ls("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ls(Ao,e);if(Iu in e){const s=e[Iu];if(n===PC)this.onHandshake_(s);else if(n===Ru){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===NC?this.onConnectionShutdown_(s):n===Cu?this.onReset_(s):n===OC?ga("Server Error: "+s):n===Tu?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ga("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),gl!==s&&Ze("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Js(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(SC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Js(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(RC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Au,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(In.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class ip{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class rp{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){x(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class hr extends rp{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!al()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new hr}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const ku=32,Nu=768;class ve{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function he(){return new ve("")}function se(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function fn(t){return t.pieces_.length-t.pieceNum_}function ye(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ve(t.pieces_,e)}function op(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function MC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ap(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function lp(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ve(e,0)}function Ne(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ve)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ve(n,0)}function te(t){return t.pieceNum_>=t.pieces_.length}function it(t,e){const n=se(t),s=se(e);if(n===null)return e;if(n===s)return it(ye(t),ye(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function cp(t,e){if(fn(t)!==fn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function pt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(fn(t)>fn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class DC{constructor(e,n){this.errorPrefix_=n,this.parts_=ap(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=$r(this.parts_[s]);up(this)}}function LC(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=$r(e),up(t)}function FC(t){const e=t.parts_.pop();t.byteLength_-=$r(e),t.parts_.length>0&&(t.byteLength_-=1)}function up(t){if(t.byteLength_>Nu)throw new Error(t.errorPrefix_+"has a key path longer than "+Nu+" bytes ("+t.byteLength_+").");if(t.parts_.length>ku)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ku+") or object contains a cycle "+vn(t))}function vn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class yl extends rp{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new yl}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Fs=1e3,UC=60*5*1e3,Ou=30*1e3,BC=1.3,HC=3e4,$C="server_kill",Pu=3;class Ut extends ip{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ut.nextPersistentConnectionId_++,this.log_=Ei("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Fs,this.maxReconnectDelay_=UC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!id())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");yl.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&hr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(xe(r)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new ol,s={p:e._path.toString(),q:e._queryObject},i={action:"g",request:s,onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Ut.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Vt(e,"w")){const s=vs(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ze(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||dE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ou)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=hE(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+xe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ga("Unrecognized action received from server: "+xe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Fs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Fs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>HC&&(this.reconnectDelay_=Fs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*BC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ut.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(f){x(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Fe("getToken() completed but was canceled"):(Fe("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=h&&h.token,a=new xC(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,p=>{Ze(p+" ("+this.repoInfo_.toString()+")"),this.interrupt($C)},r))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Ze(f),l())}}}interrupt(e){Fe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Fe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],la(this.interruptReasons_)&&(this.reconnectDelay_=Fs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>pl(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ve(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Fe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Pu&&(this.reconnectDelay_=Ou,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Fe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Pu&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Fd.replace(/\./g,"-")]=1,al()?e["framework.cordova"]=1:sd()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=hr.getInstance().currentlyOnline();return la(this.interruptReasons_)&&e}}Ut.nextPersistentConnectionId_=0;Ut.nextConnectionId_=0;/**
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
 */class ie{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ie(e,n)}}/**
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
 */class Vr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ie(bs,e),i=new ie(bs,n);return this.compare(s,i)!==0}minPost(){return ie.MIN}}/**
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
 */let Bi;class fp extends Vr{static get __EMPTY_NODE(){return Bi}static set __EMPTY_NODE(e){Bi=e}compare(e,n){return Ns(e.name,n.name)}isDefinedOn(e){throw As("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ie.MIN}maxPost(){return new ie(Fn,Bi)}makePost(e,n){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new ie(e,Bi)}toString(){return".key"}}const cs=new fp;/**
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
 */class Hi{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ke{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:ke.RED,this.left=i!=null?i:Ge.EMPTY_NODE,this.right=r!=null?r:Ge.EMPTY_NODE}copy(e,n,s,i,r){return new ke(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ge.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ge.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ke.RED=!0;ke.BLACK=!1;class jC{copy(e,n,s,i,r){return this}insert(e,n,s){return new ke(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ge{constructor(e,n=Ge.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ge(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ke.BLACK,null,null))}remove(e){return new Ge(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ke.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Hi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Hi(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Hi(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Hi(this.root_,null,this.comparator_,!0,e)}}Ge.EMPTY_NODE=new jC;/**
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
 */function WC(t,e){return Ns(t.name,e.name)}function vl(t,e){return Ns(t,e)}/**
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
 */let ya;function qC(t){ya=t}const hp=function(t){return typeof t=="number"?"number:"+jd(t):"string:"+t},dp=function(t){if(t.isLeafNode()){const e=t.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Vt(e,".sv"),"Priority must be a string or number.")}else x(t===ya||t.isEmpty(),"priority of unexpected type.");x(t===ya||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let xu;class Ae{constructor(e,n=Ae.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),dp(this.priorityNode_)}static set __childrenNodeConstructor(e){xu=e}static get __childrenNodeConstructor(){return xu}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ae(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ae.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return te(e)?this:se(e)===".priority"?this.priorityNode_:Ae.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ae.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=se(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(x(s!==".priority"||fn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ae.__childrenNodeConstructor.EMPTY_NODE.updateChild(ye(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+hp(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=jd(this.value_):e+=this.value_,this.lazyHash_=Bd(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ae.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ae.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ae.VALUE_TYPE_ORDER.indexOf(n),r=Ae.VALUE_TYPE_ORDER.indexOf(s);return x(i>=0,"Unknown leaf type: "+n),x(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ae.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let pp,gp;function VC(t){pp=t}function KC(t){gp=t}class zC extends Vr{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Ns(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ie.MIN}maxPost(){return new ie(Fn,new Ae("[PRIORITY-POST]",gp))}makePost(e,n){const s=pp(e);return new ie(n,new Ae("[PRIORITY-POST]",s))}toString(){return".priority"}}const He=new zC;/**
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
 */const GC=Math.log(2);class YC{constructor(e){const n=r=>parseInt(Math.log(r)/GC,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const dr=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let f,h;if(u===0)return null;if(u===1)return f=t[l],h=n?n(f):f,new ke(h,f.node,ke.BLACK,null,null);{const p=parseInt(u/2,10)+l,m=i(l,p),E=i(p+1,c);return f=t[p],h=n?n(f):f,new ke(h,f.node,ke.BLACK,m,E)}},r=function(l){let c=null,u=null,f=t.length;const h=function(m,E){const S=f-m,y=f;f-=m;const g=i(S+1,y),v=t[S],I=n?n(v):v;p(new ke(I,v.node,E,null,g))},p=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const E=l.nextBitIsOne(),S=Math.pow(2,l.count-(m+1));E?h(S,ke.BLACK):(h(S,ke.BLACK),h(S,ke.RED))}return u},o=new YC(t.length),a=r(o);return new Ge(s||e,a)};/**
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
 */let ko;const Yn={};class Dt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return x(Yn&&He,"ChildrenNode.ts has not been loaded"),ko=ko||new Dt({".priority":Yn},{".priority":He}),ko}get(e){const n=vs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ge?n:null}hasIndex(e){return Vt(this.indexSet_,e.toString())}addIndex(e,n){x(e!==cs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(ie.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=dr(s,e.getCompare()):a=Yn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Dt(u,c)}addToIndexes(e,n){const s=ar(this.indexes_,(i,r)=>{const o=vs(this.indexSet_,r);if(x(o,"Missing index implementation for "+r),i===Yn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ie.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),dr(a,o.getCompare())}else return Yn;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ie(e.name,a))),l.insert(e,e.node)}});return new Dt(s,this.indexSet_)}removeFromIndexes(e,n){const s=ar(this.indexes_,i=>{if(i===Yn)return i;{const r=n.get(e.name);return r?i.remove(new ie(e.name,r)):i}});return new Dt(s,this.indexSet_)}}/**
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
 */let Us;class le{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&dp(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Us||(Us=new le(new Ge(vl),null,Dt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Us}updatePriority(e){return this.children_.isEmpty()?this:new le(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Us:n}}getChild(e){const n=se(e);return n===null?this:this.getImmediateChild(n).getChild(ye(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(x(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ie(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Us:this.priorityNode_;return new le(i,o,r)}}updateChild(e,n){const s=se(e);if(s===null)return n;{x(se(e)!==".priority"||fn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ye(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(He,(o,a)=>{n[o]=a.val(e),s++,r&&le.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+hp(this.getPriority().val())+":"),this.forEachChild(He,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Bd(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ie(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ie(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ie(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ie.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ie.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ii?-1:0}withIndex(e){if(e===cs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new le(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===cs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(He),i=n.getIterator(He);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===cs?null:this.indexMap_.get(e.toString())}}le.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class QC extends le{constructor(){super(new Ge(vl),le.EMPTY_NODE,Dt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return le.EMPTY_NODE}isEmpty(){return!1}}const Ii=new QC;Object.defineProperties(ie,{MIN:{value:new ie(bs,le.EMPTY_NODE)},MAX:{value:new ie(Fn,Ii)}});fp.__EMPTY_NODE=le.EMPTY_NODE;Ae.__childrenNodeConstructor=le;qC(Ii);KC(Ii);/**
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
 */const JC=!0;function Ue(t,e=null){if(t===null)return le.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ae(n,Ue(e))}if(!(t instanceof Array)&&JC){const n=[];let s=!1;if(lt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ue(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new ie(o,l)))}}),n.length===0)return le.EMPTY_NODE;const r=dr(n,WC,o=>o.name,vl);if(s){const o=dr(n,He.getCompare());return new le(r,Ue(e),new Dt({".priority":o},{".priority":He}))}else return new le(r,Ue(e),Dt.Default)}else{let n=le.EMPTY_NODE;return lt(t,(s,i)=>{if(Vt(t,s)&&s.substring(0,1)!=="."){const r=Ue(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Ue(e))}}VC(Ue);/**
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
 */class XC extends Vr{constructor(e){super(),this.indexPath_=e,x(!te(e)&&se(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Ns(e.name,n.name):r}makePost(e,n){const s=Ue(e),i=le.EMPTY_NODE.updateChild(this.indexPath_,s);return new ie(n,i)}maxPost(){const e=le.EMPTY_NODE.updateChild(this.indexPath_,Ii);return new ie(Fn,e)}toString(){return ap(this.indexPath_,0).join("/")}}/**
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
 */class ZC extends Vr{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Ns(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ie.MIN}maxPost(){return ie.MAX}makePost(e,n){const s=Ue(e);return new ie(n,s)}toString(){return".value"}}const eT=new ZC;/**
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
 */function tT(t){return{type:"value",snapshotNode:t}}function nT(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function sT(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Mu(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function iT(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class bl{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=He}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:bs}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Fn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===He}copy(){const e=new bl;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Du(t){const e={};if(t.isDefault())return e;let n;return t.index_===He?n="$priority":t.index_===eT?n="$value":t.index_===cs?n="$key":(x(t.index_ instanceof XC,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=xe(n),t.startSet_&&(e.startAt=xe(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+xe(t.indexStartName_))),t.endSet_&&(e.endAt=xe(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+xe(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Lu(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==He&&(e.i=t.index_.toString()),e}/**
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
 */class pr extends ip{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ei("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=pr.getListenId_(e,s),a={};this.listens_[o]=a;const l=Du(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let f=u;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(r,f,!1,s),vs(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const s=pr.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Du(e._queryParams),s=e._path.toString(),i=new ol;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ks(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=li(a.responseText)}catch{Ze("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Ze("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class rT{constructor(){this.rootNode_=le.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function gr(){return{value:null,children:new Map}}function _p(t,e,n){if(te(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=se(e);t.children.has(s)||t.children.set(s,gr());const i=t.children.get(s);e=ye(e),_p(i,e,n)}}function va(t,e,n){t.value!==null?n(e,t.value):oT(t,(s,i)=>{const r=new ve(e.toString()+"/"+s);va(i,r,n)})}function oT(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class aT{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&lt(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const Fu=10*1e3,lT=30*1e3,cT=5*60*1e3;class uT{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new aT(e);const s=Fu+(lT-Fu)*Math.random();Js(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;lt(e,(i,r)=>{r>0&&Vt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Js(this.reportStats_.bind(this),Math.floor(Math.random()*2*cT))}}/**
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
 */var Ct;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ct||(Ct={}));function mp(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function yp(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function vp(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class _r{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Ct.ACK_USER_WRITE,this.source=mp()}operationForChild(e){if(te(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ve(e));return new _r(he(),n,this.revert)}}else return x(se(this.path)===e,"operationForChild called for unrelated child."),new _r(ye(this.path),this.affectedTree,this.revert)}}/**
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
 */class Un{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Ct.OVERWRITE}operationForChild(e){return te(this.path)?new Un(this.source,he(),this.snap.getImmediateChild(e)):new Un(this.source,ye(this.path),this.snap)}}/**
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
 */class hi{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Ct.MERGE}operationForChild(e){if(te(this.path)){const n=this.children.subtree(new ve(e));return n.isEmpty()?null:n.value?new Un(this.source,he(),n.value):new hi(this.source,he(),n)}else return x(se(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new hi(this.source,ye(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class El{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(te(e))return this.isFullyInitialized()&&!this.filtered_;const n=se(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function fT(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(iT(o.childName,o.snapshotNode))}),Bs(t,i,"child_removed",e,s,n),Bs(t,i,"child_added",e,s,n),Bs(t,i,"child_moved",r,s,n),Bs(t,i,"child_changed",e,s,n),Bs(t,i,"value",e,s,n),i}function Bs(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>dT(t,a,l)),o.forEach(a=>{const l=hT(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function hT(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function dT(t,e,n){if(e.childName==null||n.childName==null)throw As("Should only compare child_ events.");const s=new ie(e.childName,e.snapshotNode),i=new ie(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function bp(t,e){return{eventCache:t,serverCache:e}}function Xs(t,e,n,s){return bp(new El(e,n,s),t.serverCache)}function Ep(t,e,n,s){return bp(t.eventCache,new El(e,n,s))}function ba(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Bn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let No;const pT=()=>(No||(No=new Ge(ZI)),No);class me{constructor(e,n=pT()){this.value=e,this.children=n}static fromObject(e){let n=new me(null);return lt(e,(s,i)=>{n=n.set(new ve(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:he(),value:this.value};if(te(e))return null;{const s=se(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ye(e),n);return r!=null?{path:Ne(new ve(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(te(e))return this;{const n=se(e),s=this.children.get(n);return s!==null?s.subtree(ye(e)):new me(null)}}set(e,n){if(te(e))return new me(n,this.children);{const s=se(e),r=(this.children.get(s)||new me(null)).set(ye(e),n),o=this.children.insert(s,r);return new me(this.value,o)}}remove(e){if(te(e))return this.children.isEmpty()?new me(null):new me(null,this.children);{const n=se(e),s=this.children.get(n);if(s){const i=s.remove(ye(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new me(null):new me(this.value,r)}else return this}}get(e){if(te(e))return this.value;{const n=se(e),s=this.children.get(n);return s?s.get(ye(e)):null}}setTree(e,n){if(te(e))return n;{const s=se(e),r=(this.children.get(s)||new me(null)).setTree(ye(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new me(this.value,o)}}fold(e){return this.fold_(he(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Ne(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,he(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(te(e))return null;{const r=se(e),o=this.children.get(r);return o?o.findOnPath_(ye(e),Ne(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,he(),n)}foreachOnPath_(e,n,s){if(te(e))return this;{this.value&&s(n,this.value);const i=se(e),r=this.children.get(i);return r?r.foreachOnPath_(ye(e),Ne(n,i),s):new me(null)}}foreach(e){this.foreach_(he(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Ne(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class _t{constructor(e){this.writeTree_=e}static empty(){return new _t(new me(null))}}function Zs(t,e,n){if(te(e))return new _t(new me(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=it(i,e);return r=r.updateChild(o,n),new _t(t.writeTree_.set(i,r))}else{const i=new me(n),r=t.writeTree_.setTree(e,i);return new _t(r)}}}function Uu(t,e,n){let s=t;return lt(n,(i,r)=>{s=Zs(s,Ne(e,i),r)}),s}function Bu(t,e){if(te(e))return _t.empty();{const n=t.writeTree_.setTree(e,new me(null));return new _t(n)}}function Ea(t,e){return qn(t,e)!=null}function qn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(it(n.path,e)):null}function Hu(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(He,(s,i)=>{e.push(new ie(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ie(s,i.value))}),e}function cn(t,e){if(te(e))return t;{const n=qn(t,e);return n!=null?new _t(new me(n)):new _t(t.writeTree_.subtree(e))}}function wa(t){return t.writeTree_.isEmpty()}function Es(t,e){return wp(he(),t.writeTree_,e)}function wp(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(x(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=wp(Ne(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Ne(t,".priority"),s)),n}}/**
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
 */function Ip(t,e){return Ap(e,t)}function gT(t,e,n,s,i){x(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Zs(t.visibleWrites,e,n)),t.lastWriteId=s}function _T(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function mT(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);x(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&yT(a,s.path)?i=!1:pt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return vT(t),!0;if(s.snap)t.visibleWrites=Bu(t.visibleWrites,s.path);else{const a=s.children;lt(a,l=>{t.visibleWrites=Bu(t.visibleWrites,Ne(s.path,l))})}return!0}else return!1}function yT(t,e){if(t.snap)return pt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&pt(Ne(t.path,n),e))return!0;return!1}function vT(t){t.visibleWrites=Cp(t.allWrites,bT,he()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function bT(t){return t.visible}function Cp(t,e,n){let s=_t.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)pt(n,o)?(a=it(n,o),s=Zs(s,a,r.snap)):pt(o,n)&&(a=it(o,n),s=Zs(s,he(),r.snap.getChild(a)));else if(r.children){if(pt(n,o))a=it(n,o),s=Uu(s,a,r.children);else if(pt(o,n))if(a=it(o,n),te(a))s=Uu(s,he(),r.children);else{const l=vs(r.children,se(a));if(l){const c=l.getChild(ye(a));s=Zs(s,he(),c)}}}else throw As("WriteRecord should have .snap or .children")}}return s}function Tp(t,e,n,s,i){if(!s&&!i){const r=qn(t.visibleWrites,e);if(r!=null)return r;{const o=cn(t.visibleWrites,e);if(wa(o))return n;if(n==null&&!Ea(o,he()))return null;{const a=n||le.EMPTY_NODE;return Es(o,a)}}}else{const r=cn(t.visibleWrites,e);if(!i&&wa(r))return n;if(!i&&n==null&&!Ea(r,he()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(pt(c.path,e)||pt(e,c.path))},a=Cp(t.allWrites,o,e),l=n||le.EMPTY_NODE;return Es(a,l)}}}function ET(t,e,n){let s=le.EMPTY_NODE;const i=qn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(He,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=cn(t.visibleWrites,e);return n.forEachChild(He,(o,a)=>{const l=Es(cn(r,new ve(o)),a);s=s.updateImmediateChild(o,l)}),Hu(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=cn(t.visibleWrites,e);return Hu(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function wT(t,e,n,s,i){x(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Ne(e,n);if(Ea(t.visibleWrites,r))return null;{const o=cn(t.visibleWrites,r);return wa(o)?i.getChild(n):Es(o,i.getChild(n))}}function IT(t,e,n,s){const i=Ne(e,n),r=qn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=cn(t.visibleWrites,i);return Es(o,s.getNode().getImmediateChild(n))}else return null}function CT(t,e){return qn(t.visibleWrites,e)}function TT(t,e,n,s,i,r,o){let a;const l=cn(t.visibleWrites,e),c=qn(l,he());if(c!=null)a=c;else if(n!=null)a=Es(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],f=o.getCompare(),h=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=h.getNext();for(;p&&u.length<i;)f(p,s)!==0&&u.push(p),p=h.getNext();return u}else return[]}function ST(){return{visibleWrites:_t.empty(),allWrites:[],lastWriteId:-1}}function Ia(t,e,n,s){return Tp(t.writeTree,t.treePath,e,n,s)}function Sp(t,e){return ET(t.writeTree,t.treePath,e)}function $u(t,e,n,s){return wT(t.writeTree,t.treePath,e,n,s)}function mr(t,e){return CT(t.writeTree,Ne(t.treePath,e))}function RT(t,e,n,s,i,r){return TT(t.writeTree,t.treePath,e,n,s,i,r)}function wl(t,e,n){return IT(t.writeTree,t.treePath,e,n)}function Rp(t,e){return Ap(Ne(t.treePath,e),t.writeTree)}function Ap(t,e){return{treePath:t,writeTree:e}}/**
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
 */class AT{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;x(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),x(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Mu(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,sT(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,nT(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Mu(s,e.snapshotNode,i.oldSnap));else throw As("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class kT{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const kp=new kT;class Il{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new El(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return wl(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Bn(this.viewCache_),r=RT(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function NT(t,e){x(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function OT(t,e,n,s,i){const r=new AT;let o,a;if(n.type===Ct.OVERWRITE){const c=n;c.source.fromUser?o=Ca(t,e,c.path,c.snap,s,i,r):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!te(c.path),o=yr(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===Ct.MERGE){const c=n;c.source.fromUser?o=xT(t,e,c.path,c.children,s,i,r):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Ta(t,e,c.path,c.children,s,i,a,r))}else if(n.type===Ct.ACK_USER_WRITE){const c=n;c.revert?o=LT(t,e,c.path,s,i,r):o=MT(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Ct.LISTEN_COMPLETE)o=DT(t,e,n.path,s,r);else throw As("Unknown operation type: "+n.type);const l=r.getChanges();return PT(e,o,l),{viewCache:o,changes:l}}function PT(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=ba(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(tT(ba(e)))}}function Np(t,e,n,s,i,r){const o=e.eventCache;if(mr(s,n)!=null)return e;{let a,l;if(te(n))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Bn(e),u=c instanceof le?c:le.EMPTY_NODE,f=Sp(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),f,r)}else{const c=Ia(s,Bn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=se(n);if(c===".priority"){x(fn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const f=$u(s,n,u,l);f!=null?a=t.filter.updatePriority(u,f):a=o.getNode()}else{const u=ye(n);let f;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=$u(s,n,o.getNode(),l);h!=null?f=o.getNode().getImmediateChild(c).updateChild(u,h):f=o.getNode().getImmediateChild(c)}else f=wl(s,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,u,i,r):a=o.getNode()}}return Xs(e,a,o.isFullyInitialized()||te(n),t.filter.filtersNodes())}}function yr(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(te(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),p,null)}else{const p=se(n);if(!l.isCompleteForPath(n)&&fn(n)>1)return e;const m=ye(n),S=l.getNode().getImmediateChild(p).updateChild(m,s);p===".priority"?c=u.updatePriority(l.getNode(),S):c=u.updateChild(l.getNode(),p,S,m,kp,null)}const f=Ep(e,c,l.isFullyInitialized()||te(n),u.filtersNodes()),h=new Il(i,f,r);return Np(t,f,n,i,h,a)}function Ca(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Il(i,e,r);if(te(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Xs(e,c,!0,t.filter.filtersNodes());else{const f=se(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Xs(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=ye(n),p=a.getNode().getImmediateChild(f);let m;if(te(h))m=s;else{const E=u.getCompleteChild(f);E!=null?op(h)===".priority"&&E.getChild(lp(h)).isEmpty()?m=E:m=E.updateChild(h,s):m=le.EMPTY_NODE}if(p.equals(m))l=e;else{const E=t.filter.updateChild(a.getNode(),f,m,h,u,o);l=Xs(e,E,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function ju(t,e){return t.eventCache.isCompleteForChild(e)}function xT(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=Ne(n,l);ju(e,se(u))&&(a=Ca(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=Ne(n,l);ju(e,se(u))||(a=Ca(t,a,u,c,i,r,o))}),a}function Wu(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ta(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;te(n)?c=s:c=new me(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((f,h)=>{if(u.hasChild(f)){const p=e.serverCache.getNode().getImmediateChild(f),m=Wu(t,p,h);l=yr(t,l,new ve(f),m,i,r,o,a)}}),c.children.inorderTraversal((f,h)=>{const p=!e.serverCache.isCompleteForChild(f)&&h.value===null;if(!u.hasChild(f)&&!p){const m=e.serverCache.getNode().getImmediateChild(f),E=Wu(t,m,h);l=yr(t,l,new ve(f),E,i,r,o,a)}}),l}function MT(t,e,n,s,i,r,o){if(mr(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(te(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return yr(t,e,n,l.getNode().getChild(n),i,r,a,o);if(te(n)){let c=new me(null);return l.getNode().forEachChild(cs,(u,f)=>{c=c.set(new ve(u),f)}),Ta(t,e,n,c,i,r,a,o)}else return e}else{let c=new me(null);return s.foreach((u,f)=>{const h=Ne(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),Ta(t,e,n,c,i,r,a,o)}}function DT(t,e,n,s,i){const r=e.serverCache,o=Ep(e,r.getNode(),r.isFullyInitialized()||te(n),r.isFiltered());return Np(t,o,n,s,kp,i)}function LT(t,e,n,s,i,r){let o;if(mr(s,n)!=null)return e;{const a=new Il(s,e,i),l=e.eventCache.getNode();let c;if(te(n)||se(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ia(s,Bn(e));else{const f=e.serverCache.getNode();x(f instanceof le,"serverChildren would be complete if leaf node"),u=Sp(s,f)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=se(n);let f=wl(s,u,e.serverCache);f==null&&e.serverCache.isCompleteForChild(u)&&(f=l.getImmediateChild(u)),f!=null?c=t.filter.updateChild(l,u,f,ye(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,le.EMPTY_NODE,ye(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ia(s,Bn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||mr(s,he())!=null,Xs(e,c,o,t.filter.filtersNodes())}}function FT(t,e){const n=Bn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!te(e)&&!n.getImmediateChild(se(e)).isEmpty())?n.getChild(e):null}function qu(t,e,n,s){e.type===Ct.MERGE&&e.source.queryId!==null&&(x(Bn(t.viewCache_),"We should always have a full cache before handling merges"),x(ba(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=OT(t.processor_,i,e,n,s);return NT(t.processor_,r.viewCache),x(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,UT(t,r.changes,r.viewCache.eventCache.getNode(),null)}function UT(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return fT(t.eventGenerator_,e,n,i)}/**
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
 */let Vu;function BT(t){x(!Vu,"__referenceConstructor has already been defined"),Vu=t}function Cl(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return x(r!=null,"SyncTree gave us an op for an invalid query."),qu(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(qu(o,e,n,s));return r}}function Tl(t,e){let n=null;for(const s of t.views.values())n=n||FT(s,e);return n}/**
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
 */let Ku;function HT(t){x(!Ku,"__referenceConstructor has already been defined"),Ku=t}class zu{constructor(e){this.listenProvider_=e,this.syncPointTree_=new me(null),this.pendingWriteTree_=ST(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function $T(t,e,n,s,i){return gT(t.pendingWriteTree_,e,n,s,i),i?zr(t,new Un(mp(),e,n)):[]}function Zn(t,e,n=!1){const s=_T(t.pendingWriteTree_,e);if(mT(t.pendingWriteTree_,e)){let r=new me(null);return s.snap!=null?r=r.set(he(),!0):lt(s.children,o=>{r=r.set(new ve(o),!0)}),zr(t,new _r(s.path,r,n))}else return[]}function Kr(t,e,n){return zr(t,new Un(yp(),e,n))}function jT(t,e,n){const s=me.fromObject(n);return zr(t,new hi(yp(),e,s))}function WT(t,e,n,s){const i=Mp(t,s);if(i!=null){const r=Dp(i),o=r.path,a=r.queryId,l=it(o,e),c=new Un(vp(a),l,n);return Lp(t,o,c)}else return[]}function qT(t,e,n,s){const i=Mp(t,s);if(i){const r=Dp(i),o=r.path,a=r.queryId,l=it(o,e),c=me.fromObject(n),u=new hi(vp(a),l,c);return Lp(t,o,u)}else return[]}function Op(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=it(o,e),c=Tl(a,l);if(c)return c});return Tp(i,e,r,n,!0)}function zr(t,e){return Pp(e,t.syncPointTree_,null,Ip(t.pendingWriteTree_,he()))}function Pp(t,e,n,s){if(te(t.path))return xp(t,e,n,s);{const i=e.get(he());n==null&&i!=null&&(n=Tl(i,he()));let r=[];const o=se(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Rp(s,o);r=r.concat(Pp(a,l,c,u))}return i&&(r=r.concat(Cl(i,t,s,n))),r}}function xp(t,e,n,s){const i=e.get(he());n==null&&i!=null&&(n=Tl(i,he()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Rp(s,o),u=t.operationForChild(o);u&&(r=r.concat(xp(u,a,l,c)))}),i&&(r=r.concat(Cl(i,t,s,n))),r}function Mp(t,e){return t.tagToQueryMap.get(e)}function Dp(t){const e=t.indexOf("$");return x(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ve(t.substr(0,e))}}function Lp(t,e,n){const s=t.syncPointTree_.get(e);x(s,"Missing sync point for query tag that we're tracking");const i=Ip(t.pendingWriteTree_,e);return Cl(s,n,i,null)}/**
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
 */class Sl{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Sl(n)}node(){return this.node_}}class Rl{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ne(this.path_,e);return new Rl(this.syncTree_,n)}node(){return Op(this.syncTree_,this.path_)}}const VT=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Gu=function(t,e,n){if(!t||typeof t!="object")return t;if(x(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return KT(t[".sv"],e,n);if(typeof t[".sv"]=="object")return zT(t[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},KT=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:x(!1,"Unexpected server value: "+t)}},zT=function(t,e,n){t.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&x(!1,"Unexpected increment value: "+s);const i=e.node();if(x(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},GT=function(t,e,n,s){return Al(e,new Rl(n,t),s)},YT=function(t,e,n){return Al(t,new Sl(e),n)};function Al(t,e,n){const s=t.getPriority().val(),i=Gu(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Gu(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ae(a,Ue(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ae(i))),o.forEachChild(He,(a,l)=>{const c=Al(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class kl{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Nl(t,e){let n=e instanceof ve?e:new ve(e),s=t,i=se(n);for(;i!==null;){const r=vs(s.node.children,i)||{children:{},childCount:0};s=new kl(i,s,r),n=ye(n),i=se(n)}return s}function Os(t){return t.node.value}function Fp(t,e){t.node.value=e,Sa(t)}function Up(t){return t.node.childCount>0}function QT(t){return Os(t)===void 0&&!Up(t)}function Gr(t,e){lt(t.node.children,(n,s)=>{e(new kl(n,t,s))})}function Bp(t,e,n,s){n&&!s&&e(t),Gr(t,i=>{Bp(i,e,!0,s)}),n&&s&&e(t)}function JT(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ci(t){return new ve(t.parent===null?t.name:Ci(t.parent)+"/"+t.name)}function Sa(t){t.parent!==null&&XT(t.parent,t.name,t)}function XT(t,e,n){const s=QT(n),i=Vt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Sa(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Sa(t))}/**
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
 */const ZT=/[\[\].#$\/\u0000-\u001F\u007F]/,eS=/[\[\].#$\u0000-\u001F\u007F]/,Oo=10*1024*1024,Hp=function(t){return typeof t=="string"&&t.length!==0&&!ZT.test(t)},tS=function(t){return typeof t=="string"&&t.length!==0&&!eS.test(t)},nS=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),tS(t)},$p=function(t,e,n){const s=n instanceof ve?new DC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+vn(s));if(typeof e=="function")throw new Error(t+"contains a function "+vn(s)+" with contents = "+e.toString());if(Hd(e))throw new Error(t+"contains "+e.toString()+" "+vn(s));if(typeof e=="string"&&e.length>Oo/3&&$r(e)>Oo)throw new Error(t+"contains a string greater than "+Oo+" utf8 bytes "+vn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(lt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Hp(o)))throw new Error(t+" contains an invalid key ("+o+") "+vn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);LC(s,o),$p(t,a,s),FC(s)}),i&&r)throw new Error(t+' contains ".value" child '+vn(s)+" in addition to actual children.")}},sS=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Hp(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!nS(n))throw new Error(yE(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class iS{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function rS(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!cp(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Vn(t,e,n){rS(t,n),oS(t,s=>pt(s,e)||pt(e,s))}function oS(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(aS(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function aS(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Nn&&Fe("event: "+n.toString()),wi(s)}}}/**
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
 */const lS="repo_interrupt",cS=25;class uS{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new iS,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=gr(),this.transactionQueueTree_=new kl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function fS(t,e,n){if(t.stats_=_l(t.repoInfo_),t.forceRestClient_||rC())t.server_=new pr(t.repoInfo_,(s,i,r,o)=>{Yu(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Qu(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{xe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Ut(t.repoInfo_,e,(s,i,r,o)=>{Yu(t,s,i,r,o)},s=>{Qu(t,s)},s=>{dS(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=fC(t.repoInfo_,()=>new uT(t.stats_,t.server_)),t.infoData_=new rT,t.infoSyncTree_=new zu({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Kr(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ol(t,"connected",!1),t.serverSyncTree_=new zu({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Vn(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function hS(t){const n=t.infoData_.getNode(new ve(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function jp(t){return VT({timestamp:hS(t)})}function Yu(t,e,n,s,i){t.dataUpdateCount++;const r=new ve(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=ar(n,c=>Ue(c));o=qT(t.serverSyncTree_,r,l,i)}else{const l=Ue(n);o=WT(t.serverSyncTree_,r,l,i)}else if(s){const l=ar(n,c=>Ue(c));o=jT(t.serverSyncTree_,r,l)}else{const l=Ue(n);o=Kr(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=xl(t,r)),Vn(t.eventQueue_,a,o)}function Qu(t,e){Ol(t,"connected",e),e===!1&&gS(t)}function dS(t,e){lt(e,(n,s)=>{Ol(t,n,s)})}function Ol(t,e,n){const s=new ve("/.info/"+e),i=Ue(n);t.infoData_.updateSnapshot(s,i);const r=Kr(t.infoSyncTree_,s,i);Vn(t.eventQueue_,s,r)}function pS(t){return t.nextWriteId_++}function gS(t){Wp(t,"onDisconnectEvents");const e=jp(t),n=gr();va(t.onDisconnect_,he(),(i,r)=>{const o=GT(i,r,t.serverSyncTree_,e);_p(n,i,o)});let s=[];va(n,he(),(i,r)=>{s=s.concat(Kr(t.serverSyncTree_,i,r));const o=vS(t,i);xl(t,o)}),t.onDisconnect_=gr(),Vn(t.eventQueue_,he(),s)}function _S(t){t.persistentConnection_&&t.persistentConnection_.interrupt(lS)}function Wp(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Fe(n,...e)}function qp(t,e,n){return Op(t.serverSyncTree_,e,n)||le.EMPTY_NODE}function Pl(t,e=t.transactionQueueTree_){if(e||Yr(t,e),Os(e)){const n=Kp(t,e);x(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&mS(t,Ci(e),n)}else Up(e)&&Gr(e,n=>{Pl(t,n)})}function mS(t,e,n){const s=n.map(c=>c.currentWriteId),i=qp(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];x(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const f=it(e,u.path);r=r.updateChild(f,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Wp(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const f=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(Zn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&f.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Yr(t,Nl(t.transactionQueueTree_,e)),Pl(t,t.transactionQueueTree_),Vn(t.eventQueue_,e,u);for(let h=0;h<f.length;h++)wi(f[h])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Ze("transaction at "+l.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}xl(t,e)}},o)}function xl(t,e){const n=Vp(t,e),s=Ci(n),i=Kp(t,n);return yS(t,i,s),s}function yS(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=it(n,l.path);let u=!1,f;if(x(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,f=l.abortReason,i=i.concat(Zn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=cS)u=!0,f="maxretry",i=i.concat(Zn(t.serverSyncTree_,l.currentWriteId,!0));else{const h=qp(t,l.path,o);l.currentInputSnapshot=h;const p=e[a].update(h.val());if(p!==void 0){$p("transaction failed: Data returned ",p,l.path);let m=Ue(p);typeof p=="object"&&p!=null&&Vt(p,".priority")||(m=m.updatePriority(h.getPriority()));const S=l.currentWriteId,y=jp(t),g=YT(m,h,y);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=g,l.currentWriteId=pS(t),o.splice(o.indexOf(S),1),i=i.concat($T(t.serverSyncTree_,l.path,g,l.currentWriteId,l.applyLocally)),i=i.concat(Zn(t.serverSyncTree_,S,!0))}else u=!0,f="nodata",i=i.concat(Zn(t.serverSyncTree_,l.currentWriteId,!0))}Vn(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(f),!1,null))))}Yr(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)wi(s[a]);Pl(t,t.transactionQueueTree_)}function Vp(t,e){let n,s=t.transactionQueueTree_;for(n=se(e);n!==null&&Os(s)===void 0;)s=Nl(s,n),e=ye(e),n=se(e);return s}function Kp(t,e){const n=[];return zp(t,e,n),n.sort((s,i)=>s.order-i.order),n}function zp(t,e,n){const s=Os(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Gr(e,i=>{zp(t,i,n)})}function Yr(t,e){const n=Os(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Fp(e,n.length>0?n:void 0)}Gr(e,s=>{Yr(t,s)})}function vS(t,e){const n=Ci(Vp(t,e)),s=Nl(t.transactionQueueTree_,e);return JT(s,i=>{Po(t,i)}),Po(t,s),Bp(s,i=>{Po(t,i)}),n}function Po(t,e){const n=Os(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(x(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(x(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Zn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Fp(e,void 0):n.length=r+1,Vn(t.eventQueue_,Ci(e),i);for(let o=0;o<s.length;o++)wi(s[o])}}/**
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
 */function bS(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function ES(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ze(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ju=function(t,e){const n=wS(t),s=n.namespace;n.domain==="firebase.com"&&Ln(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Ln("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||JI();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new lC(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ve(n.pathString)}},wS=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(u,f)),u<f&&(i=bS(t.substring(u,f)));const h=ES(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class Ml{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return te(this._path)?null:op(this._path)}get ref(){return new Ps(this._repo,this._path)}get _queryIdentifier(){const e=Lu(this._queryParams),n=pl(e);return n==="{}"?"default":n}get _queryObject(){return Lu(this._queryParams)}isEqual(e){if(e=jn(e),!(e instanceof Ml))return!1;const n=this._repo===e._repo,s=cp(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+MC(this._path)}}class Ps extends Ml{constructor(e,n){super(e,n,new bl,!1)}get parent(){const e=lp(this._path);return e===null?null:new Ps(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}BT(Ps);HT(Ps);/**
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
 */const IS="FIREBASE_DATABASE_EMULATOR_HOST",Ra={};let CS=!1;function TS(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Ln("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Fe("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ju(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[IS]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Ju(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new _a(_a.OWNER):new aC(t.name,t.options,e);sS("Invalid Firebase Database URL",o),te(o.path)||Ln("Database URL must point to the root of a Firebase Database (not including a child path).");const f=RS(a,t,u,new oC(t.name,n));return new AS(f,t)}function SS(t,e){const n=Ra[e];(!n||n[t.key]!==t)&&Ln(`Database ${e}(${t.repoInfo_}) has already been deleted.`),_S(t),delete n[t.key]}function RS(t,e,n,s){let i=Ra[e.name];i||(i={},Ra[e.name]=i);let r=i[t.toURLString()];return r&&Ln("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new uS(t,CS,n,s),i[t.toURLString()]=r,r}class AS{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(fS(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ps(this._repo,he())),this._rootInternal}_delete(){return this._rootInternal!==null&&(SS(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ln("Cannot call "+e+" on a deleted database.")}}function UR(t=cl(),e){return Wn(t,"database").getImmediate({identifier:e})}/**
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
 */function kS(t){KI(vi),Nt(new yt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return TS(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),ot(yu,vu,t),ot(yu,vu,"esm2017")}Ut.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ut.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};kS();function Dl(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Gp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const NS=Gp,Yp=new $n("auth","Firebase",Gp());/**
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
 */const Xu=new jr("@firebase/auth");function Vi(t,...e){Xu.logLevel<=de.ERROR&&Xu.error(`Auth (${vi}): ${t}`,...e)}/**
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
 */function $t(t,...e){throw Ll(t,...e)}function St(t,...e){return Ll(t,...e)}function OS(t,e,n){const s=Object.assign(Object.assign({},NS()),{[e]:n});return new $n("auth","Firebase",s).create(e,{appName:t.name})}function Ll(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Yp.create(t,...e)}function J(t,e,...n){if(!t)throw Ll(e,...n)}function Lt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Vi(e),new Error(e)}function jt(t,e){t||Lt(e)}/**
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
 */const Zu=new Map;function Ft(t){jt(t instanceof Function,"Expected a class definition");let e=Zu.get(t);return e?(jt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Zu.set(t,e),e)}/**
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
 */function PS(t,e){const n=Wn(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(ci(r,e!=null?e:{}))return i;$t(i,"already-initialized")}return n.initialize({options:e})}function xS(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Ft);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Aa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function MS(){return ef()==="http:"||ef()==="https:"}function ef(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function DS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(MS()||nd()||"connection"in navigator)?navigator.onLine:!0}function LS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ti{constructor(e,n){this.shortDelay=e,this.longDelay=n,jt(n>e,"Short delay should be less than long delay!"),this.isMobile=al()||sd()}get(){return DS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Fl(t,e){jt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Qp{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const FS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const US=new Ti(3e4,6e4);function BS(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Qr(t,e,n,s,i={}){return Jp(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=ks(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Qp.fetch()(Xp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Jp(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},FS),e);try{const i=new $S(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw $i(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw $i(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw $i(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw $i(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw OS(t,u,c);$t(t,u)}}catch(i){if(i instanceof Ot)throw i;$t(t,"network-request-failed")}}async function HS(t,e,n,s,i={}){const r=await Qr(t,e,n,s,i);return"mfaPendingCredential"in r&&$t(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Xp(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Fl(t.config,i):`${t.config.apiScheme}://${i}`}class $S{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(St(this.auth,"network-request-failed")),US.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $i(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=St(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function jS(t,e){return Qr(t,"POST","/v1/accounts:delete",e)}async function WS(t,e){return Qr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ei(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qS(t,e=!1){const n=jn(t),s=await n.getIdToken(e),i=Ul(s);J(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:ei(xo(i.auth_time)),issuedAtTime:ei(xo(i.iat)),expirationTime:ei(xo(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function xo(t){return Number(t)*1e3}function Ul(t){var e;const[n,s,i]=t.split(".");if(n===void 0||s===void 0||i===void 0)return Vi("JWT malformed, contained fewer than 3 sections"),null;try{const r=aa(s);return r?JSON.parse(r):(Vi("Failed to decode base64 JWT payload"),null)}catch(r){return Vi("Caught error parsing JWT payload as JSON",(e=r)===null||e===void 0?void 0:e.toString()),null}}function VS(t){const e=Ul(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function di(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Ot&&KS(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function KS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class zS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Zp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ei(this.lastLoginAt),this.creationTime=ei(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function vr(t){var e;const n=t.auth,s=await t.getIdToken(),i=await di(t,WS(n,{idToken:s}));J(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?QS(r.providerUserInfo):[],a=YS(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Zp(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function GS(t){const e=jn(t);await vr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function YS(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function QS(t){return t.map(e=>{var{providerId:n}=e,s=Dl(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function JS(t,e){const n=await Jp(t,{},async()=>{const s=ks({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Xp(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Qp.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class pi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):VS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return J(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await JS(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new pi;return s&&(J(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(J(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(J(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pi,this.toJSON())}_performRefresh(){return Lt("not implemented")}}/**
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
 */function Jt(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class On{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Dl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Zp(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await di(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return qS(this,e)}reload(){return GS(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new On(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await vr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await di(this,jS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const f=(s=n.displayName)!==null&&s!==void 0?s:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,p=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,y=(c=n.createdAt)!==null&&c!==void 0?c:void 0,g=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:v,emailVerified:I,isAnonymous:O,providerData:M,stsTokenManager:L}=n;J(v&&L,e,"internal-error");const R=pi.fromJSON(this.name,L);J(typeof v=="string",e,"internal-error"),Jt(f,e.name),Jt(h,e.name),J(typeof I=="boolean",e,"internal-error"),J(typeof O=="boolean",e,"internal-error"),Jt(p,e.name),Jt(m,e.name),Jt(E,e.name),Jt(S,e.name),Jt(y,e.name),Jt(g,e.name);const H=new On({uid:v,auth:e,email:h,emailVerified:I,displayName:f,isAnonymous:O,photoURL:m,phoneNumber:p,tenantId:E,stsTokenManager:R,createdAt:y,lastLoginAt:g});return M&&Array.isArray(M)&&(H.providerData=M.map($=>Object.assign({},$))),S&&(H._redirectEventId=S),H}static async _fromIdTokenResponse(e,n,s=!1){const i=new pi;i.updateFromServerResponse(n);const r=new On({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await vr(r),r}}/**
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
 */class eg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}eg.type="NONE";const tf=eg;/**
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
 */function Ki(t,e,n){return`firebase:${t}:${e}:${n}`}class us{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Ki(this.userKey,i.apiKey,r),this.fullPersistenceKey=Ki("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?On._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new us(Ft(tf),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Ft(tf);const o=Ki(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const f=On._fromJSON(e,u);c!==r&&(a=f),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new us(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new us(r,e,s))}}/**
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
 */function nf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rg(e))return"Blackberry";if(og(e))return"Webos";if(Bl(e))return"Safari";if((e.includes("chrome/")||ng(e))&&!e.includes("edge/"))return"Chrome";if(ig(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function tg(t=$e()){return/firefox\//i.test(t)}function Bl(t=$e()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ng(t=$e()){return/crios\//i.test(t)}function sg(t=$e()){return/iemobile/i.test(t)}function ig(t=$e()){return/android/i.test(t)}function rg(t=$e()){return/blackberry/i.test(t)}function og(t=$e()){return/webos/i.test(t)}function Jr(t=$e()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function XS(t=$e()){var e;return Jr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ZS(){return aE()&&document.documentMode===10}function ag(t=$e()){return Jr(t)||ig(t)||og(t)||rg(t)||/windows phone/i.test(t)||sg(t)}function e0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function lg(t,e=[]){let n;switch(t){case"Browser":n=nf($e());break;case"Worker":n=`${nf($e())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${vi}/${s}`}/**
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
 */class t0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const i of this.queue)await i(e),i.onAbort&&s.push(i.onAbort)}catch(i){s.reverse();for(const r of s)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class n0{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sf(this),this.idTokenSubscription=new sf(this),this.beforeStateQueue=new t0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yp,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ft(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await us.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await vr(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=LS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?jn(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ft(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $n("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ft(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await us.create(this,[Ft(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return J(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=lg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function cg(t){return jn(t)}class sf{constructor(e){this.auth=e,this.observer=null,this.addObserver=gE(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class ug{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Lt("not implemented")}_getIdTokenResponse(e){return Lt("not implemented")}_linkToIdToken(e,n){return Lt("not implemented")}_getReauthenticationResolver(e){return Lt("not implemented")}}/**
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
 */async function fs(t,e){return HS(t,"POST","/v1/accounts:signInWithIdp",BS(t,e))}/**
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
 */const s0="http://localhost";class Hn extends ug{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Hn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Dl(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Hn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return fs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,fs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fs(e,n)}buildRequest(){const e={requestUri:s0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ks(n)}return e}}/**
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
 */class fg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Si extends fg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class tn extends Si{constructor(){super("facebook.com")}static credential(e){return Hn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tn.credential(e.oauthAccessToken)}catch{return null}}}tn.FACEBOOK_SIGN_IN_METHOD="facebook.com";tn.PROVIDER_ID="facebook.com";/**
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
 */class nn extends Si{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Hn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return nn.credential(n,s)}catch{return null}}}nn.GOOGLE_SIGN_IN_METHOD="google.com";nn.PROVIDER_ID="google.com";/**
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
 */class sn extends Si{constructor(){super("github.com")}static credential(e){return Hn._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sn.credential(e.oauthAccessToken)}catch{return null}}}sn.GITHUB_SIGN_IN_METHOD="github.com";sn.PROVIDER_ID="github.com";/**
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
 */class rn extends Si{constructor(){super("twitter.com")}static credential(e,n){return Hn._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return rn.credential(n,s)}catch{return null}}}rn.TWITTER_SIGN_IN_METHOD="twitter.com";rn.PROVIDER_ID="twitter.com";/**
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
 */class ws{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await On._fromIdTokenResponse(e,s,i),o=rf(s);return new ws({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=rf(s);return new ws({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function rf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class br extends Ot{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,br.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new br(e,n,s,i)}}function hg(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?br._fromErrorAndOperation(t,r,e,s):r})}async function i0(t,e,n=!1){const s=await di(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ws._forOperation(t,"link",s)}/**
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
 */async function r0(t,e,n=!1){var s;const{auth:i}=t,r="reauthenticate";try{const o=await di(t,hg(i,r,e,t),n);J(o.idToken,i,"internal-error");const a=Ul(o.idToken);J(a,i,"internal-error");const{sub:l}=a;return J(t.uid===l,i,"user-mismatch"),ws._forOperation(t,r,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&$t(i,"user-mismatch"),o}}/**
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
 */async function o0(t,e,n=!1){const s="signIn",i=await hg(t,s,e),r=await ws._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}const Er="__sak";/**
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
 */class dg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Er,"1"),this.storage.removeItem(Er),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function a0(){const t=$e();return Bl(t)||Jr(t)}const l0=1e3,c0=10;class pg extends dg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=a0()&&e0(),this.fallbackToPolling=ag(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);ZS()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,c0):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},l0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}pg.type="LOCAL";const u0=pg;/**
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
 */class gg extends dg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}gg.type="SESSION";const _g=gg;/**
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
 */function f0(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Xr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Xr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await f0(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xr.receivers=[];/**
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
 */function Hl(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class h0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Hl("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(f){const h=f;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Rt(){return window}function d0(t){Rt().location.href=t}/**
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
 */function mg(){return typeof Rt().WorkerGlobalScope<"u"&&typeof Rt().importScripts=="function"}async function p0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function g0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function _0(){return mg()?self:null}/**
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
 */const yg="firebaseLocalStorageDb",m0=1,wr="firebaseLocalStorage",vg="fbase_key";class Ri{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Zr(t,e){return t.transaction([wr],e?"readwrite":"readonly").objectStore(wr)}function y0(){const t=indexedDB.deleteDatabase(yg);return new Ri(t).toPromise()}function ka(){const t=indexedDB.open(yg,m0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(wr,{keyPath:vg})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(wr)?e(s):(s.close(),await y0(),e(await ka()))})})}async function of(t,e,n){const s=Zr(t,!0).put({[vg]:e,value:n});return new Ri(s).toPromise()}async function v0(t,e){const n=Zr(t,!1).get(e),s=await new Ri(n).toPromise();return s===void 0?null:s.value}function af(t,e){const n=Zr(t,!0).delete(e);return new Ri(n).toPromise()}const b0=800,E0=3;class bg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ka(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>E0)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xr._getInstance(_0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await p0(),!this.activeServiceWorker)return;this.sender=new h0(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||g0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ka();return await of(e,Er,"1"),await af(e,Er),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>of(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>v0(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>af(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Zr(i,!1).getAll();return new Ri(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),b0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bg.type="LOCAL";const w0=bg;/**
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
 */function I0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function C0(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=St("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",I0().appendChild(s)})}function T0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ti(3e4,6e4);/**
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
 */function S0(t,e){return e?Ft(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class $l extends ug{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function R0(t){return o0(t.auth,new $l(t),t.bypassAuthState)}function A0(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),r0(n,new $l(t),t.bypassAuthState)}async function k0(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),i0(n,new $l(t),t.bypassAuthState)}/**
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
 */class Eg{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return R0;case"linkViaPopup":case"linkViaRedirect":return k0;case"reauthViaPopup":case"reauthViaRedirect":return A0;default:$t(this.auth,"internal-error")}}resolve(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const N0=new Ti(2e3,1e4);class es extends Eg{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,es.currentPopupAction&&es.currentPopupAction.cancel(),es.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){jt(this.filter.length===1,"Popup operations only handle one event");const e=Hl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(St(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(St(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,es.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(St(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,N0.get())};e()}}es.currentPopupAction=null;/**
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
 */const O0="pendingRedirect",zi=new Map;class P0 extends Eg{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=zi.get(this.auth._key());if(!e){try{const s=await x0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}zi.set(this.auth._key(),e)}return this.bypassAuthState||zi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function x0(t,e){const n=L0(e),s=D0(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function M0(t,e){zi.set(t._key(),e)}function D0(t){return Ft(t._redirectPersistence)}function L0(t){return Ki(O0,t.config.apiKey,t.name)}async function F0(t,e,n=!1){const s=cg(t),i=S0(s,e),o=await new P0(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const U0=10*60*1e3;class B0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!H0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!wg(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(St(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=U0&&this.cachedEventUids.clear(),this.cachedEventUids.has(lf(e))}saveEventToCache(e){this.cachedEventUids.add(lf(e)),this.lastProcessedEventTime=Date.now()}}function lf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function wg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function H0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wg(t);default:return!1}}/**
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
 */async function $0(t,e={}){return Qr(t,"GET","/v1/projects",e)}/**
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
 */const j0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,W0=/^https?/;async function q0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await $0(t);for(const n of e)try{if(V0(n))return}catch{}$t(t,"unauthorized-domain")}function V0(t){const e=Aa(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!W0.test(n))return!1;if(j0.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const K0=new Ti(3e4,6e4);function cf(){const t=Rt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function z0(t){return new Promise((e,n)=>{var s,i,r;function o(){cf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{cf(),n(St(t,"network-request-failed"))},timeout:K0.get()})}if(!((i=(s=Rt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Rt().gapi)===null||r===void 0)&&r.load)o();else{const a=T0("iframefcb");return Rt()[a]=()=>{gapi.load?o():n(St(t,"network-request-failed"))},C0(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Gi=null,e})}let Gi=null;function G0(t){return Gi=Gi||z0(t),Gi}/**
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
 */const Y0=new Ti(5e3,15e3),Q0="__/auth/iframe",J0="emulator/auth/iframe",X0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Z0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function eR(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fl(e,J0):`https://${t.config.authDomain}/${Q0}`,s={apiKey:e.apiKey,appName:t.name,v:vi},i=Z0.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${ks(s).slice(1)}`}async function tR(t){const e=await G0(t),n=Rt().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:eR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:X0,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=St(t,"network-request-failed"),a=Rt().setTimeout(()=>{r(o)},Y0.get());function l(){Rt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const nR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sR=500,iR=600,rR="_blank",oR="http://localhost";class uf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function aR(t,e,n,s=sR,i=iR){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},nR),{width:s.toString(),height:i.toString(),top:r,left:o}),c=$e().toLowerCase();n&&(a=ng(c)?rR:n),tg(c)&&(e=e||oR,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[p,m])=>`${h}${p}=${m},`,"");if(XS(c)&&a!=="_self")return lR(e||"",a),new uf(null);const f=window.open(e||"",a,u);J(f,t,"popup-blocked");try{f.focus()}catch{}return new uf(f)}function lR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const cR="__/auth/handler",uR="emulator/auth/handler";function ff(t,e,n,s,i,r){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:vi,eventId:i};if(e instanceof fg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",la(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof Si){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${fR(t)}?${ks(a).slice(1)}`}function fR({config:t}){return t.emulator?Fl(t,uR):`https://${t.authDomain}/${cR}`}/**
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
 */const Mo="webStorageSupport";class hR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_g,this._completeRedirectFn=F0,this._overrideRedirectResult=M0}async _openPopup(e,n,s,i){var r;jt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=ff(e,n,s,Aa(),i);return aR(e,o,Hl())}async _openRedirect(e,n,s,i){return await this._originValidation(e),d0(ff(e,n,s,Aa(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(jt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await tR(e),s=new B0(e);return n.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Mo,{type:Mo},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Mo];o!==void 0&&n(!!o),$t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=q0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ag()||Bl()||Jr()}}const dR=hR;var hf="@firebase/auth",df="0.20.7";/**
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
 */class pR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var i;e(((i=s)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function gR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function _R(t){Nt(new yt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{J(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),J(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lg(t)},u=new n0(a,l,c);return xS(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Nt(new yt("auth-internal",e=>{const n=cg(e.getProvider("auth").getImmediate());return(s=>new pR(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ot(hf,df,gR(t)),ot(hf,df,"esm2017")}/**
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
 */function BR(t=cl()){const e=Wn(t,"auth");return e.isInitialized()?e.getImmediate():PS(t,{popupRedirectResolver:dR,persistence:[w0,u0,_g]})}_R("Browser");const ji=void 0,pf=[{name:"404",path:"/:catchAll(.*)*",file:"C:/Users/David Macpherson/Documents/Programming/tuskytimev2/pages/404.vue",children:[],meta:Fi,alias:(Fi==null?void 0:Fi.alias)||[],component:()=>as(()=>import("./404.19fa12a2.js"),["404.19fa12a2.js","404.4f71df2d.css"],import.meta.url).then(t=>t.default||t)},{name:"index",path:"/",file:"C:/Users/David Macpherson/Documents/Programming/tuskytimev2/pages/index.vue",children:[],meta:Ui,alias:(Ui==null?void 0:Ui.alias)||[],component:()=>as(()=>import("./index.2aafff62.js"),[],import.meta.url).then(t=>t.default||t)},{name:"study",path:"/study",file:"C:/Users/David Macpherson/Documents/Programming/tuskytimev2/pages/study/index.vue",children:[],meta:ji,alias:(ji==null?void 0:ji.alias)||[],component:()=>as(()=>import("./index.d4d9828f.js"),["index.d4d9828f.js","index.8c5c2e85.css"],import.meta.url).then(t=>t.default||t)}],mR={},xt={...mR},yR=[],Do={};function vR(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){const a=i.includes(t.slice(r))?t.slice(r).length:1;let l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Sc(l,"")}return Sc(n,t)+s+i}const bR=yi(async t=>{var m,E,S,y;let e,n;t.vueApp.component("NuxtPage",mo),t.vueApp.component("NuxtNestedPage",mo),t.vueApp.component("NuxtChild",mo);let s=Zy().app.baseURL;xt.hashMode&&!s.includes("#")&&(s+="#");const i=(E=(m=xt.history)==null?void 0:m.call(xt,s))!=null?E:xt.hashMode?mv(s):Fh(s),r=(y=(S=xt.routes)==null?void 0:S.call(xt,pf))!=null?y:pf,o=vR(s,window.location),a=eb({...xt,history:i,routes:r});t.vueApp.use(a);const l=Ji(a.currentRoute.value);a.afterEach((g,v)=>{l.value=v}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const c=Ji(a.resolve(o)),u=()=>{c.value=a.currentRoute.value};t.hook("page:finish",u),a.afterEach((g,v)=>{var I,O,M,L;((O=(I=g.matched[0])==null?void 0:I.components)==null?void 0:O.default)===((L=(M=v.matched[0])==null?void 0:M.components)==null?void 0:L.default)&&u()});const f={};for(const g in c.value)f[g]=Te(()=>c.value[g]);t._route=kt(f),t._middleware=t._middleware||{global:[],named:{}};const h=Br();try{[e,n]=zy(()=>a.isReady()),await e,n()}catch(g){Zt(t,js,[g])}const p=nb("_layout");return a.beforeEach(async(g,v)=>{var O,M;g.meta=kt(g.meta),t.isHydrating&&(g.meta.layout=(O=p.value)!=null?O:g.meta.layout),t._processingMiddleware=!0;const I=new Set([...yR,...t._middleware.global]);for(const L of g.matched){const R=L.meta.middleware;if(!!R)if(Array.isArray(R))for(const H of R)I.add(H);else I.add(R)}for(const L of I){const R=typeof L=="string"?t._middleware.named[L]||await((M=Do[L])==null?void 0:M.call(Do).then($=>$.default||$)):L;if(!R)throw new Error(`Unknown route middleware: '${L}'.`);const H=await Zt(t,R,[g,v]);if(!t.payload.serverRendered&&t.isHydrating&&(H===!1||H instanceof Error)){const $=H||ia({statusMessage:`Route navigation aborted: ${o}`});return Zt(t,js,[$])}if(H||H===!1)return H}}),a.afterEach(async g=>{delete t._processingMiddleware,!t.isHydrating&&h.value&&await Zt(t,ib),g.matched.length===0&&Zt(t,js,[ia({statusCode:404,fatal:!1,statusMessage:`Page not found: ${g.fullPath}`})])}),t.hooks.hookOnce("app:created",async()=>{try{await a.replace({...a.resolve(o),name:void 0,force:!0})}catch(g){Zt(t,js,[g])}}),{provide:{router:a}}}),ER=yi(t=>{!db()||(t.hooks.hook("link:prefetch",e=>Gc(e)),Hr().beforeResolve(async(e,n)=>{if(e.path===n.path)return;const s=await Gc(e.path);!s||Object.assign(t.payload.data,s.data)}))}),wR=[Tb,Db,Xb,bR,ER],gf={__name:"nuxt-root",setup(t){const e=eh(()=>as(()=>import("./error-component.31d4b51c.js"),[],import.meta.url).then(r=>r.default||r)),n=De(),s=()=>n.callHook("app:suspense:resolve");Sn("_route",Gh()),n.hooks.callHookWith(r=>r.map(o=>o()),"vue:setup");const i=Br();return ih((r,o,a)=>{n.hooks.callHook("vue:error",r,o,a).catch(l=>console.error("[nuxt] Error in `vue:error` hook",l)),rb(r)&&(r.fatal||r.unhandled)&&Zt(n,js,[r])}),(r,o)=>{const a=Qa("App");return An(),os(Gf,{onResolve:s},{default:Ka(()=>[Je(i)?(An(),os(Je(e),{key:0,error:Je(i)},null,8,["error"])):(An(),os(a,{key:1}))]),_:1})}}},_f={default:eh(()=>as(()=>import("./default.e20b8f49.js"),["default.e20b8f49.js","default.b391d05f.css"],import.meta.url).then(t=>t.default||t))},IR=Oe({props:{name:{type:[String,Boolean,Object],default:null}},setup(t,e){const n=Gh();return()=>{var o,a,l;const s=(a=(o=Se(t.name)?t.name.value:t.name)!=null?o:n.meta.layout)!=null?a:"default",i=s&&s in _f,r=(l=n.meta.layoutTransition)!=null?l:Gb;return oa(Dr,i&&r,{default:()=>oa(_f[s],i,e.slots).default()}).default()}}}),CR={};function TR(t,e){const n=Qa("NuxtPage"),s=IR;return An(),os(s,null,{default:Ka(()=>[we(n)]),_:1})}const SR=sE(CR,[["render",TR]]);globalThis.$fetch||(globalThis.$fetch=My.create({baseURL:Ly()}));let mf;const RR=Xy(wR);mf=async function(){var i;const n=Boolean((i=window.__NUXT__)==null?void 0:i.serverRendered)?Km(gf):Vm(gf);n.component("App",SR);const s=Yy({vueApp:n});s.hooks.hookOnce("app:suspense:resolve",()=>{s.isHydrating=!1});try{await Jy(s,RR)}catch(r){await s.callHook("app:error",r),s.payload.error=s.payload.error||r}try{await s.hooks.callHook("app:created",n),await s.hooks.callHook("app:beforeMount",n),n.mount("#__nuxt"),await s.hooks.callHook("app:mounted",n),await Va()}catch(r){await s.callHook("app:error",r),s.payload.error=s.payload.error||r}},mf().catch(t=>{console.error("Error while mounting app:",t)});export{ze as F,as as _,sE as a,xR as b,os as c,eh as d,OR as e,vh as f,lm as g,Oe as h,Te as i,MR as j,LR as k,FR as l,BR as m,AR as n,An as o,NR as p,UR as q,Tn as r,we as s,kR as t,Je as u,PR as v,Ka as w,DR as x,bh as y,il as z};
