import{getCurrentInstance as fd,toRef as Is,isRef as An,inject as Zv,defineComponent as Ve,computed as K,ref as X,h as $n,resolveComponent as SS,shallowRef as qc,unref as _,watchEffect as ES,markRaw as IS,provide as e_,Suspense as CS,Transition as mr,reactive as cr,useSlots as dd,onMounted as mn,onUnmounted as pd,watch as Ys,openBlock as C,createElementBlock as j,normalizeClass as Ge,createVNode as ir,mergeProps as wt,createSlots as Wt,renderList as ut,withCtx as Pe,renderSlot as te,normalizeProps as ln,guardReactiveProps as Rr,createBlock as Ne,Teleport as kS,createCommentVNode as $,withKeys as be,withModifiers as Ln,createElementVNode as ye,Fragment as De,normalizeStyle as di,createTextVNode as En,toDisplayString as Tt,resolveDynamicComponent as Bo,nextTick as zs,withDirectives as jo,vShow as Ho,onBeforeUpdate as OS,getCurrentScope as RS,onScopeDispose as PS,defineAsyncComponent as DS}from"vue";import{useRuntimeConfig as AS}from"#internal/nitro";import{RouterView as NS,createMemoryHistory as xS,createRouter as MS}from"vue-router";const $S=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,LS=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,US=/^["[{]|^-?\d[\d.]{0,14}$/;function FS(t,e){if(!(t==="__proto__"||t==="constructor"))return e}function VS(t,e={}){if(typeof t!="string")return t;const n=t.toLowerCase();if(n==="true")return!0;if(n==="false")return!1;if(n==="null")return null;if(n==="nan")return Number.NaN;if(n==="infinity")return Number.POSITIVE_INFINITY;if(n!=="undefined"){if(!US.test(t)){if(e.strict)throw new SyntaxError("Invalid JSON");return t}try{return $S.test(t)||LS.test(t)?JSON.parse(t,FS):JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}}const BS=/#/g,jS=/&/g,HS=/=/g,t_=/\+/g,qS=/%5B/gi,WS=/%5D/gi,YS=/%5E/gi,zS=/%60/gi,KS=/%7B/gi,GS=/%7C/gi,QS=/%7D/gi,XS=/%20/gi;function JS(t){return encodeURI(""+t).replace(GS,"|").replace(qS,"[").replace(WS,"]")}function Wc(t){return JS(t).replace(t_,"%2B").replace(XS,"+").replace(BS,"%23").replace(jS,"%26").replace(zS,"`").replace(KS,"{").replace(QS,"}").replace(YS,"^")}function Jl(t){return Wc(t).replace(HS,"%3D")}function Ua(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function ZS(t){return Ua(t.replace(t_," "))}function eE(t=""){const e={};t[0]==="?"&&(t=t.substr(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const i=Ua(r[1]);if(i==="__proto__"||i==="constructor")continue;const s=ZS(r[2]||"");e[i]?Array.isArray(e[i])?e[i].push(s):e[i]=[e[i],s]:e[i]=s}return e}function tE(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${Jl(t)}=${Wc(n)}`).join("&"):`${Jl(t)}=${Wc(e)}`:Jl(t)}function nE(t){return Object.keys(t).map(e=>tE(e,t[e])).join("&")}const rE=/^\w+:(\/\/)?/,iE=/^\/\/[^/]+/;function il(t,e=!1){return rE.test(t)||e&&iE.test(t)}const sE=/\/$|\/\?/;function Yc(t="",e=!1){return e?sE.test(t):t.endsWith("/")}function oE(t="",e=!1){if(!e)return(Yc(t)?t.slice(0,-1):t)||"/";if(!Yc(t,!0))return t||"/";const[n,...r]=t.split("?");return(n.slice(0,-1)||"/")+(r.length?`?${r.join("?")}`:"")}function zc(t="",e=!1){if(!e)return t.endsWith("/")?t:t+"/";if(Yc(t,!0))return t||"/";const[n,...r]=t.split("?");return n+"/"+(r.length?`?${r.join("?")}`:"")}function n_(t=""){return t.startsWith("/")}function aE(t=""){return(n_(t)?t.substr(1):t)||"/"}function lm(t=""){return n_(t)?t:"/"+t}function uE(t,e){if(cE(e)||il(t))return t;const n=oE(e);return t.startsWith(n)?t:sl(n,t)}function lE(t,e){const n=md(t),r={...eE(n.search),...e};return n.search=nE(r),dE(n)}function cE(t){return!t||t==="/"}function hE(t){return t&&t!=="/"}function sl(t,...e){let n=t||"";for(const r of e.filter(hE))n=n?zc(n)+aE(r):r;return n}function fE(t,e,n={}){return n.trailingSlash||(t=zc(t),e=zc(e)),n.leadingSlash||(t=lm(t),e=lm(e)),n.encoding||(t=Ua(t),e=Ua(e)),t===e}function md(t="",e){if(!il(t,!0))return e?md(e+t):cm(t);const[n="",r,i=""]=(t.replace(/\\/g,"/").match(/([^:/]+:)?\/\/([^/@]+@)?(.*)/)||[]).splice(1),[s="",o=""]=(i.match(/([^/?#]*)(.*)?/)||[]).splice(1),{pathname:a,search:u,hash:l}=cm(o);return{protocol:n,auth:r?r.substr(0,r.length-1):"",host:s,pathname:a,search:u,hash:l}}function cm(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function dE(t){const e=t.pathname+(t.search?(t.search.startsWith("?")?"":"?")+t.search:"")+t.hash;return t.protocol?t.protocol+"//"+(t.auth?t.auth+"@":"")+t.host+e:e}class pE extends Error{constructor(){super(...arguments),this.name="FetchError"}}function mE(t,e,n){let r="";t&&n&&(r=`${n.status} ${n.statusText} (${t.toString()})`),e&&(r=`${e.message} (${r})`);const i=new pE(r);return Object.defineProperty(i,"request",{get(){return t}}),Object.defineProperty(i,"response",{get(){return n}}),Object.defineProperty(i,"data",{get(){return n&&n._data}}),Object.defineProperty(i,"status",{get(){return n&&n.status}}),Object.defineProperty(i,"statusText",{get(){return n&&n.statusText}}),Object.defineProperty(i,"statusCode",{get(){return n&&n.status}}),Object.defineProperty(i,"statusMessage",{get(){return n&&n.statusText}}),i}const yE=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function hm(t="GET"){return yE.has(t.toUpperCase())}function gE(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const vE=new Set(["image/svg","application/xml","application/xhtml","application/html"]),_E=/^application\/(?:[\w!#$%&*`\-.^~]*\+)?json(;.+)?$/i;function wE(t=""){if(!t)return"json";const e=t.split(";").shift();return _E.test(e)?"json":vE.has(e)||e.startsWith("text/")?"text":"blob"}const bE=new Set([408,409,425,429,500,502,503,504]);function r_(t){const{fetch:e,Headers:n}=t;function r(o){const a=o.error&&o.error.name==="AbortError"||!1;if(o.options.retry!==!1&&!a){const l=typeof o.options.retry=="number"?o.options.retry:hm(o.options.method)?0:1,h=o.response&&o.response.status||500;if(l>0&&bE.has(h))return i(o.request,{...o.options,retry:l-1})}const u=mE(o.request,o.error,o.response);throw Error.captureStackTrace&&Error.captureStackTrace(u,i),u}const i=async function(a,u={}){const l={request:a,options:{...t.defaults,...u},response:void 0,error:void 0};l.options.onRequest&&await l.options.onRequest(l),typeof l.request=="string"&&(l.options.baseURL&&(l.request=uE(l.request,l.options.baseURL)),(l.options.query||l.options.params)&&(l.request=lE(l.request,{...l.options.params,...l.options.query})),l.options.body&&hm(l.options.method)&&gE(l.options.body)&&(l.options.body=typeof l.options.body=="string"?l.options.body:JSON.stringify(l.options.body),l.options.headers=new n(l.options.headers),l.options.headers.has("content-type")||l.options.headers.set("content-type","application/json"),l.options.headers.has("accept")||l.options.headers.set("accept","application/json"))),l.response=await e(l.request,l.options).catch(async c=>(l.error=c,l.options.onRequestError&&await l.options.onRequestError(l),r(l)));const h=(l.options.parseResponse?"json":l.options.responseType)||wE(l.response.headers.get("content-type")||"");if(h==="json"){const c=await l.response.text(),f=l.options.parseResponse||VS;l.response._data=f(c)}else h==="stream"?l.response._data=l.response.body:l.response._data=await l.response[h]();return l.options.onResponse&&await l.options.onResponse(l),l.response.status>=400&&l.response.status<600?(l.options.onResponseError&&await l.options.onResponseError(l),r(l)):l.response},s=function(a,u){return i(a,u).then(l=>l._data)};return s.raw=i,s.create=(o={})=>r_({...t,defaults:{...t.defaults,...o}}),s}const i_=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),TE=i_.fetch||(()=>Promise.reject(new Error("[ohmyfetch] global.fetch is not supported!"))),SE=i_.Headers,EE=r_({fetch:TE,Headers:SE}),Fa=AS().app,IE=()=>Fa.baseURL,CE=()=>Fa.buildAssetsDir,kE=(...t)=>sl(s_(),CE(),...t),s_=(...t)=>{const e=Fa.cdnURL||Fa.baseURL;return t.length?sl(e,...t):e};globalThis.__buildAssetsURL=kE;globalThis.__publicAssetsURL=s_;function OE(){let t,e=!1;const n=r=>{if(t&&t!==r)throw new Error("Context conflict")};return{use:()=>{if(t===void 0)throw new Error("Context is not available");return t},tryUse:()=>t,set:(r,i)=>{i||n(r),t=r,e=!0},unset:()=>{t=void 0,e=!1},call:(r,i)=>{n(r),t=r;try{return i()}finally{e||(t=void 0)}},async callAsync(r,i){t=r;const s=()=>{t=r},o=()=>t===r?s:void 0;Kc.add(o);try{const a=i();return e||(t=void 0),await a}finally{Kc.delete(o)}}}}function RE(){const t={};return{get(e){return t[e]||(t[e]=OE()),t[e],t[e]}}}const Va=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:{},fm="__unctx__",PE=Va[fm]||(Va[fm]=RE()),DE=t=>PE.get(t),dm="__unctx_async_handlers__",Kc=Va[dm]||(Va[dm]=new Set);function pm(t){const e=[];for(const i of Kc){const s=i();s&&e.push(s)}const n=()=>{for(const i of e)i()};let r=t();return"catch"in r&&(r=r.catch(i=>{throw n(),i})),[r,n]}const o_=DE("nuxt-app"),AE="__nuxt_plugin";function NE(t){return t.map(n=>typeof n!="function"?null:n.length>1?r=>n(r,r.provide):n).filter(Boolean)}function Ks(t){return t[AE]=!0,t}function ui(t,e,n){const r=()=>n?e(...n):e();return o_.callAsync(t,r)}function dn(){const t=o_.tryUse();if(!t){const e=fd();if(!e)throw new Error("nuxt instance unavailable");return e.appContext.app.$nuxt}return t}function a_(){return dn().$config}function xE(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,r]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(r!==void 0&&typeof r!="function")throw new Error("[nuxt] [useState] init must be a function: "+r);const i="$s"+n,s=dn(),o=Is(s.payload.state,i);if(o.value===void 0&&r){const a=r();if(An(a))return s.payload.state[i]=a,a;o.value=a}return o}class Gc extends Error{constructor(){super(...arguments),this.statusCode=500,this.fatal=!1,this.unhandled=!1,this.statusMessage="Internal Server Error"}}Gc.__h3_error__=!0;function Qc(t){var n;if(typeof t=="string")return new Gc(t);if(ME(t))return t;const e=new Gc((n=t.message)!=null?n:t.statusMessage,t.cause?{cause:t.cause}:void 0);if("stack"in t)try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}return t.statusCode&&(e.statusCode=t.statusCode),t.statusMessage&&(e.statusMessage=t.statusMessage),t.data&&(e.data=t.data),t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function ME(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const $E={html:"text/html",json:"application/json"},LE=typeof setImmediate<"u"?setImmediate:t=>t();function UE(t,e,n){return n&&FE(t,n),new Promise(r=>{LE(()=>{t.res.end(e),r(void 0)})})}function FE(t,e){e&&!t.res.getHeader("Content-Type")&&t.res.setHeader("Content-Type",e)}function VE(t,e,n=302){t.res.statusCode=n,t.res.setHeader("Location",e);const i=`<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${e.replace(/"/g,"%22")}"></head></html>`;return UE(t,i,$E.html)}const u_=()=>Is(dn().payload,"error"),So=t=>{const e=BE(t);try{dn().callHook("app:error",e);const r=u_();r.value=r.value||e}catch{throw e}return e},BE=t=>{const e=Qc(t);return e.__nuxt_error=!0,e},l_=()=>{var t;return(t=dn())==null?void 0:t.$router},jE=()=>fd()?Zv("_route",dn()._route):dn()._route,c_=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:t.path||"/",r=il(n,!0);if(r&&!(e!=null&&e.external))throw new Error("Navigating to external URL is not allowed by default. Use `nagivateTo (url, { external: true })`.");if(r&&md(n).protocol==="script:")throw new Error("Cannot navigate to an URL with script protocol.");const i=l_();{const s=dn();if(s.ssrContext&&s.ssrContext.event){const o=r?n:sl(a_().app.baseURL,i.resolve(t).fullPath||"/");return s.callHook("app:redirected").then(()=>VE(s.ssrContext.event,o,(e==null?void 0:e.redirectCode)||302))}}return r?(e!=null&&e.replace?location.replace(n):location.href=n,Promise.resolve()):e!=null&&e.replace?i.replace(t):i.push(t)},HE="modulepreload",qE=function(t){return"/"+t},mm={},Ir=function(e,n,r){return!n||n.length===0?e():Promise.all(n.map(i=>{if(i=qE(i),i in mm)return;mm[i]=!0;const s=i.endsWith(".css"),o=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${o}`))return;const a=document.createElement("link");if(a.rel=s?"stylesheet":HE,s||(a.as="script",a.crossOrigin=""),a.href=i,document.head.appendChild(a),s)return new Promise((u,l)=>{a.addEventListener("load",u),a.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},WE=(...t)=>t.find(e=>e!==void 0),YE="noopener noreferrer";function zE(t){const e=t.componentName||"NuxtLink";return Ve({name:e,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(n,{slots:r}){const i=l_(),s=K(()=>n.to||n.href||""),o=K(()=>n.external||n.target&&n.target!=="_self"?!0:typeof s.value=="object"?!1:s.value===""||il(s.value,!0)),a=X(!1);return()=>{var f,p,m;if(!o.value)return $n(SS("RouterLink"),{ref:void 0,to:s.value,...a.value&&!n.custom?{class:n.prefetchedClass||t.prefetchedClass}:{},activeClass:n.activeClass||t.activeClass,exactActiveClass:n.exactActiveClass||t.exactActiveClass,replace:n.replace,ariaCurrentValue:n.ariaCurrentValue,custom:n.custom},r.default);const u=typeof s.value=="object"?(p=(f=i.resolve(s.value))==null?void 0:f.href)!=null?p:null:s.value||null,l=n.target||null,h=n.noRel?null:WE(n.rel,t.externalRelAttribute,u?YE:"")||null,c=()=>c_(u,{replace:n.replace});return n.custom?r.default?r.default({href:u,navigate:c,route:i.resolve(u),rel:h,target:l,isActive:!1,isExactActive:!1}):null:$n("a",{href:u,rel:h,target:l},(m=r.default)==null?void 0:m.call(r))}}})}const rH=zE({componentName:"NuxtLink"});function Zl(t){return t!==null&&typeof t=="object"}function Xc(t,e,n=".",r){if(!Zl(e))return Xc(t,{},n,r);const i=Object.assign({},e);for(const s in t){if(s==="__proto__"||s==="constructor")continue;const o=t[s];o!=null&&(r&&r(i,s,o,n)||(Array.isArray(o)&&Array.isArray(i[s])?i[s]=[...o,...i[s]]:Zl(o)&&Zl(i[s])?i[s]=Xc(o,i[s],(n?`${n}.`:"")+s.toString(),r):i[s]=o))}return i}function h_(t){return(...e)=>e.reduce((n,r)=>Xc(n,r,"",t),{})}const KE=h_(),GE=h_((t,e,n,r)=>{if(typeof t[e]<"u"&&typeof n=="function")return t[e]=n(t[e]),!0}),QE={};GE(QE);const XE=t=>typeof t=="function";function yd(t){const e=XE(t)?K(t):t;dn()._useHead(e)}const ec={},JE=Ks(t=>{for(const e in ec)t.vueApp.component(e,ec[e]),t.vueApp.component("Lazy"+e,ec[e])});var ZE="usehead",Jc="head:count",cs="data-head-attrs",eI=["meta","link","base"],Ba="data-meta-body",tI=(t,e,n)=>{const r=n.createElement(t);for(const i of Object.keys(e))if(i==="body"&&e.body===!0)r.setAttribute(Ba,"true");else{let s=e[i];if(i==="renderPriority"||i==="key"||s===!1)continue;i==="children"?r.textContent=s:r.setAttribute(i,s)}return r},nI=t=>t.replace(/[\s"'><\/=]/g,"").replace(/[^a-zA-Z0-9_-]/g,""),rI=t=>t.replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),Zc=t=>{const e=[];for(let[n,r]of Object.entries(t)){if(n==="children"||n==="key"||r===!1||r==null)continue;let i=nI(n);r!==!0&&(i+=`="${rI(String(r))}"`),e.push(i)}return e.length>0?" "+e.join(" "):""};function ym(t,e){if(t instanceof HTMLElement&&e instanceof HTMLElement){const n=e.getAttribute("nonce");if(n&&!t.getAttribute("nonce")){const r=e.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===t.nonce&&t.isEqualNode(r)}}return t.isEqualNode(e)}var iI=t=>{if(!["meta","base","script","link"].includes(t.tag))return!1;const{props:e,tag:n}=t;if(n==="base")return"base";if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";const r=["key","id","name","property","http-equiv"];for(const i of r){let s;if(typeof e.getAttribute=="function"&&e.hasAttribute(i)?s=e.getAttribute(i):s=e[i],s!==void 0)return`${n}-${i}-${s}`}return!1},sI=["title","meta","link","base","style","script","noscript","htmlAttrs","bodyAttrs"],oI=(t,e)=>t==null?"":typeof t=="string"?t.replace("%s",e!=null?e:""):t(_(e)),aI=t=>{const e=[],n=Object.keys(t);for(const r of n)if(t[r]!=null)switch(r){case"title":e.push({tag:r,props:{children:t[r]}});break;case"titleTemplate":break;case"base":e.push({tag:r,props:{key:"default",...t[r]}});break;default:if(sI.includes(r)){const i=t[r];Array.isArray(i)?i.forEach(s=>{e.push({tag:r,props:_(s)})}):i&&e.push({tag:r,props:i})}break}return e},gm=(t,e)=>{const n=t.getAttribute(cs);if(n)for(const i of n.split(","))i in e||t.removeAttribute(i);const r=[];for(const i in e){const s=e[i];s!=null&&(s===!1?t.removeAttribute(i):t.setAttribute(i,s),r.push(i))}r.length?t.setAttribute(cs,r.join(",")):t.removeAttribute(cs)},uI=(t=window.document,e,n)=>{var r,i;const s=t.head,o=t.body;let a=s.querySelector(`meta[name="${Jc}"]`),u=o.querySelectorAll(`[${Ba}]`);const l=a?Number(a.getAttribute("content")):0,h=[],c=[];if(u)for(let p=0;p<u.length;p++)u[p]&&((r=u[p].tagName)==null?void 0:r.toLowerCase())===e&&c.push(u[p]);if(a)for(let p=0,m=a.previousElementSibling;p<l;p++,m=(m==null?void 0:m.previousElementSibling)||null)((i=m==null?void 0:m.tagName)==null?void 0:i.toLowerCase())===e&&h.push(m);else a=t.createElement("meta"),a.setAttribute("name",Jc),a.setAttribute("content","0"),s.append(a);let f=n.map(p=>{var m;return{element:tI(p.tag,p.props,t),body:(m=p.props.body)!=null?m:!1}});f=f.filter(p=>{for(let m=0;m<h.length;m++){const T=h[m];if(ym(T,p.element))return h.splice(m,1),!1}for(let m=0;m<c.length;m++){const T=c[m];if(ym(T,p.element))return c.splice(m,1),!1}return!0}),c.forEach(p=>{var m;return(m=p.parentNode)==null?void 0:m.removeChild(p)}),h.forEach(p=>{var m;return(m=p.parentNode)==null?void 0:m.removeChild(p)}),f.forEach(p=>{p.body===!0?o.insertAdjacentElement("beforeend",p.element):s.insertBefore(p.element,a)}),a.setAttribute("content",""+(l-h.length+f.filter(p=>!p.body).length))},lI=t=>{let e=[],n=new Set;t&&e.push(qc(t));const r={install(i){i.config.globalProperties.$head=r,i.provide(ZE,r)},get headTags(){const i=[],s={},o=e.map(a=>_(a).titleTemplate).reverse().find(a=>a!=null);return e.forEach((a,u)=>{aI(_(a)).forEach((h,c)=>{h._position=u*1e4+c,o&&h.tag==="title"&&(h.props.children=oI(o,h.props.children));const f=iI(h);f?s[f]=h:i.push(h)})}),i.push(...Object.values(s)),i.sort((a,u)=>a._position-u._position)},addHeadObjs(i){e.push(i)},removeHeadObjs(i){e=e.filter(s=>s!==i)},updateDOM(i=window.document){let s,o={},a={};const u={};for(const h of r.headTags.sort(f_)){if(h.tag==="title"){s=h.props.children;continue}if(h.tag==="htmlAttrs"){Object.assign(o,h.props);continue}if(h.tag==="bodyAttrs"){Object.assign(a,h.props);continue}u[h.tag]=u[h.tag]||[],u[h.tag].push(h)}s!==void 0&&(i.title=s),gm(i.documentElement,o),gm(i.body,a);const l=new Set([...Object.keys(u),...n]);for(const h of l)uI(i,h,u[h]||[]);n.clear(),Object.keys(u).forEach(h=>n.add(h))}};return r},tc=t=>{let e=!1;t.props.body&&(e=!0,delete t.props.body),t.props.renderPriority&&delete t.props.renderPriority;let n=Zc(t.props);return eI.includes(t.tag)?`<${t.tag}${n}${e?`  ${Ba}="true"`:""}>`:`<${t.tag}${n}${e?` ${Ba}="true"`:""}>${t.props.children||""}</${t.tag}>`},f_=(t,e)=>{const n=r=>{if(r.props.renderPriority)return r.props.renderPriority;switch(r.tag){case"base":return-1;case"meta":return r.props.charset?-2:r.props["http-equiv"]==="content-security-policy"?0:10;default:return 10}};return n(t)-n(e)},cI=t=>{const e=[];let n="",r={},i={},s=[];for(const o of t.headTags.sort(f_))o.tag==="title"?n=tc(o):o.tag==="htmlAttrs"?Object.assign(r,o.props):o.tag==="bodyAttrs"?Object.assign(i,o.props):o.props.body?s.push(tc(o)):e.push(tc(o));return e.push(`<meta name="${Jc}" content="${e.length}">`),{get headTags(){return n+e.join("")},get htmlAttrs(){return Zc({...r,[cs]:Object.keys(r).join(",")})},get bodyAttrs(){return Zc({...i,[cs]:Object.keys(i).join(",")})},get bodyTags(){return s.join("")}}};const hI=Ks(t=>{const e=lI();t.vueApp.use(e),t.hooks.hookOnce("app:mounted",()=>{ES(()=>{e.updateDOM()})}),t._useHead=n=>{const r=X(n),i=K(()=>{const s={meta:[]};return r.value.charset&&s.meta.push({key:"charset",charset:r.value.charset}),r.value.viewport&&s.meta.push({name:"viewport",content:r.value.viewport}),KE(s,r.value)});e.addHeadObjs(i)},t.ssrContext.renderMeta=()=>{const n=cI(e);return{...n,bodyScripts:n.bodyTags}}}),fI=t=>Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0)),Qn=(t,e)=>(n,r)=>(yd(()=>t({...fI(n),...r.attrs},r)),()=>{var i,s;return e?(s=(i=r.slots).default)==null?void 0:s.call(i):null}),yr={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},dI=Ve({name:"Script",inheritAttrs:!1,props:{...yr,async:Boolean,crossorigin:{type:[Boolean,String],default:void 0},defer:Boolean,fetchpriority:String,integrity:String,nomodule:Boolean,nonce:String,referrerpolicy:String,src:String,type:String,charset:String,language:String},setup:Qn(t=>({script:[t]}))}),pI=Ve({name:"NoScript",inheritAttrs:!1,props:{...yr,title:String},setup:Qn((t,{slots:e})=>{var i;const n={...t},r=(((i=e.default)==null?void 0:i.call(e))||[]).filter(({children:s})=>s).map(({children:s})=>s).join("");return r&&(n.children=r),{noscript:[n]}})}),mI=Ve({name:"Link",inheritAttrs:!1,props:{...yr,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String},setup:Qn(t=>({link:[t]}))}),yI=Ve({name:"Base",inheritAttrs:!1,props:{...yr,href:String,target:String},setup:Qn(t=>({base:t}))}),gI=Ve({name:"Title",inheritAttrs:!1,setup:Qn((t,{slots:e})=>{var r,i,s;return{title:((s=(i=(r=e.default)==null?void 0:r.call(e))==null?void 0:i[0])==null?void 0:s.children)||null}})}),vI=Ve({name:"Meta",inheritAttrs:!1,props:{...yr,charset:String,content:String,httpEquiv:String,name:String},setup:Qn(t=>{const e={...t};return e.httpEquiv&&(e["http-equiv"]=e.httpEquiv,delete e.httpEquiv),{meta:[e]}})}),_I=Ve({name:"Style",inheritAttrs:!1,props:{...yr,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0}},setup:Qn((t,{slots:e})=>{var i,s,o;const n={...t},r=(o=(s=(i=e.default)==null?void 0:i.call(e))==null?void 0:s[0])==null?void 0:o.children;return r&&(n.children=r),{style:[n]}})}),wI=Ve({name:"Head",inheritAttrs:!1,setup:(t,e)=>()=>{var n,r;return(r=(n=e.slots).default)==null?void 0:r.call(n)}}),bI=Ve({name:"Html",inheritAttrs:!1,props:{...yr,manifest:String,version:String,xmlns:String},setup:Qn(t=>({htmlAttrs:t}),!0)}),TI=Ve({name:"Body",inheritAttrs:!1,props:yr,setup:Qn(t=>({bodyAttrs:t}),!0)}),vm=Object.freeze(Object.defineProperty({__proto__:null,Script:dI,NoScript:pI,Link:mI,Base:yI,Title:gI,Meta:vI,Style:_I,Head:wI,Html:bI,Body:TI},Symbol.toStringTag,{value:"Module"})),SI={meta:[],link:[],style:[],script:[],noscript:[],charset:"utf-8",viewport:"width=device-width, initial-scale=1"},EI={name:"layout",mode:"out-in"},II={name:"page",mode:"out-in"},CI=!1,kI={created(){const t=fd();if(!t)return;const e=t.type;if(!e||!("head"in e))return;const n=dn(),r=typeof e.head=="function"?K(()=>e.head(n)):e.head;yd(r)}},OI=Ks(t=>{yd(IS({title:"",...SI})),t.vueApp.mixin(kI);for(const e in vm)t.vueApp.component(e,vm[e])}),RI=(t,e)=>e.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""}),PI=(t,e)=>{var i;const n=e.route.matched.find(s=>{var o;return((o=s.components)==null?void 0:o.default)===e.Component.type}),r=(i=t!=null?t:n==null?void 0:n.meta.key)!=null?i:n&&RI(e.route,n);return typeof r=="function"?r(e.route):r},DI=(t,e)=>({default:()=>e}),AI=Ve({setup(t,{slots:e}){return()=>{var n;return(n=e.default)==null?void 0:n.call(e)}}}),eh=(t,e,n)=>({default:()=>e?$n(t,e===!0?{}:e,n):$n(AI,{},n)}),_m=Symbol("isNested"),nc=Ve({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e}){const n=dn(),r=Zv(_m,!1);return e_(_m,!0),()=>$n(NS,{name:t.name,route:t.route,...e},{default:i=>{var a,u,l,h;if(!i.Component)return;const s=PI(t.pageKey,i),o=(u=(a=t.transition)!=null?a:i.route.meta.pageTransition)!=null?u:II;return eh(mr,o,DI((h=(l=t.keepalive)!=null?l:i.route.meta.keepalive)!=null?h:CI,r&&n.isHydrating?$n(wm,{key:s,routeProps:i,pageKey:s,hasTransition:!!o}):$n(CS,{onPending:()=>n.callHook("page:start",i.Component),onResolve:()=>n.callHook("page:finish",i.Component)},{default:()=>$n(wm,{key:s,routeProps:i,pageKey:s,hasTransition:!!o})}))).default()}})}}),wm=Ve({props:["routeProps","pageKey","hasTransition"],setup(t){const e=t.pageKey,n=t.routeProps.route,r={};for(const i in t.routeProps.route)r[i]=K(()=>e===t.pageKey?t.routeProps.route[i]:n[i]);return e_("_route",cr(r)),()=>$n(t.routeProps.Component)}}),Eo=void 0;function ue(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function ne(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function qo(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?qo=function(n){return typeof n}:qo=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},qo(t)}function he(t){ne(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||qo(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function sr(t,e){ne(2,arguments);var n=he(t),r=ue(e);return isNaN(r)?new Date(NaN):(r&&n.setDate(n.getDate()+r),n)}function Tn(t,e){ne(2,arguments);var n=he(t),r=ue(e);if(isNaN(r))return new Date(NaN);if(!r)return n;var i=n.getDate(),s=new Date(n.getTime());s.setMonth(n.getMonth()+r+1,0);var o=s.getDate();return i>=o?s:(n.setFullYear(s.getFullYear(),s.getMonth(),i),n)}function Wo(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Wo=function(n){return typeof n}:Wo=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Wo(t)}function d_(t,e){if(ne(2,arguments),!e||Wo(e)!=="object")return new Date(NaN);var n=e.years?ue(e.years):0,r=e.months?ue(e.months):0,i=e.weeks?ue(e.weeks):0,s=e.days?ue(e.days):0,o=e.hours?ue(e.hours):0,a=e.minutes?ue(e.minutes):0,u=e.seconds?ue(e.seconds):0,l=he(t),h=r||n?Tn(l,r+n*12):l,c=s||i?sr(h,s+i*7):h,f=a+o*60,p=u+f*60,m=p*1e3,T=new Date(c.getTime()+m);return T}function NI(t,e){ne(2,arguments);var n=he(t).getTime(),r=ue(e);return new Date(n+r)}var xI={};function gr(){return xI}function th(t,e){var n,r,i,s,o,a,u,l;ne(1,arguments);var h=gr(),c=ue((n=(r=(i=(s=e==null?void 0:e.weekStartsOn)!==null&&s!==void 0?s:e==null||(o=e.locale)===null||o===void 0||(a=o.options)===null||a===void 0?void 0:a.weekStartsOn)!==null&&i!==void 0?i:h.weekStartsOn)!==null&&r!==void 0?r:(u=h.locale)===null||u===void 0||(l=u.options)===null||l===void 0?void 0:l.weekStartsOn)!==null&&n!==void 0?n:0);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var f=he(t),p=f.getDay(),m=(p<c?7:0)+p-c;return f.setDate(f.getDate()-m),f.setHours(0,0,0,0),f}function ja(t){return ne(1,arguments),th(t,{weekStartsOn:1})}function MI(t){ne(1,arguments);var e=he(t),n=e.getFullYear(),r=new Date(0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);var i=ja(r),s=new Date(0);s.setFullYear(n,0,4),s.setHours(0,0,0,0);var o=ja(s);return e.getTime()>=i.getTime()?n+1:e.getTime()>=o.getTime()?n:n-1}function $I(t){ne(1,arguments);var e=MI(t),n=new Date(0);n.setFullYear(e,0,4),n.setHours(0,0,0,0);var r=ja(n);return r}function Ha(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function bm(t){ne(1,arguments);var e=he(t);return e.setHours(0,0,0,0),e}var LI=864e5;function UI(t,e){ne(2,arguments);var n=bm(t),r=bm(e),i=n.getTime()-Ha(n),s=r.getTime()-Ha(r);return Math.round((i-s)/LI)}function p_(t,e){ne(2,arguments);var n=ue(e);return Tn(t,n*12)}var gd=6e4,vd=36e5,FI=1e3;function Yo(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Yo=function(n){return typeof n}:Yo=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Yo(t)}function m_(t){return ne(1,arguments),t instanceof Date||Yo(t)==="object"&&Object.prototype.toString.call(t)==="[object Date]"}function hs(t){if(ne(1,arguments),!m_(t)&&typeof t!="number")return!1;var e=he(t);return!isNaN(Number(e))}function Tm(t,e){var n;ne(1,arguments);var r=t||{},i=he(r.start),s=he(r.end),o=s.getTime();if(!(i.getTime()<=o))throw new RangeError("Invalid interval");var a=[],u=i;u.setHours(0,0,0,0);var l=Number((n=e==null?void 0:e.step)!==null&&n!==void 0?n:1);if(l<1||isNaN(l))throw new RangeError("`options.step` must be a number greater than 1");for(;u.getTime()<=o;)a.push(he(u)),u.setDate(u.getDate()+l),u.setHours(0,0,0,0);return a}function VI(t,e){var n,r,i,s,o,a,u,l;ne(1,arguments);var h=gr(),c=ue((n=(r=(i=(s=e==null?void 0:e.weekStartsOn)!==null&&s!==void 0?s:e==null||(o=e.locale)===null||o===void 0||(a=o.options)===null||a===void 0?void 0:a.weekStartsOn)!==null&&i!==void 0?i:h.weekStartsOn)!==null&&r!==void 0?r:(u=h.locale)===null||u===void 0||(l=u.options)===null||l===void 0?void 0:l.weekStartsOn)!==null&&n!==void 0?n:0);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var f=he(t),p=f.getDay(),m=(p<c?-7:0)+6-(p-c);return f.setDate(f.getDate()+m),f.setHours(23,59,59,999),f}function y_(t,e){ne(2,arguments);var n=ue(e);return NI(t,-n)}var BI=864e5;function jI(t){ne(1,arguments);var e=he(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),i=n-r;return Math.floor(i/BI)+1}function Ii(t){ne(1,arguments);var e=1,n=he(t),r=n.getUTCDay(),i=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-i),n.setUTCHours(0,0,0,0),n}function g_(t){ne(1,arguments);var e=he(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var i=Ii(r),s=new Date(0);s.setUTCFullYear(n,0,4),s.setUTCHours(0,0,0,0);var o=Ii(s);return e.getTime()>=i.getTime()?n+1:e.getTime()>=o.getTime()?n:n-1}function HI(t){ne(1,arguments);var e=g_(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=Ii(n);return r}var qI=6048e5;function v_(t){ne(1,arguments);var e=he(t),n=Ii(e).getTime()-HI(e).getTime();return Math.round(n/qI)+1}function jr(t,e){var n,r,i,s,o,a,u,l;ne(1,arguments);var h=gr(),c=ue((n=(r=(i=(s=e==null?void 0:e.weekStartsOn)!==null&&s!==void 0?s:e==null||(o=e.locale)===null||o===void 0||(a=o.options)===null||a===void 0?void 0:a.weekStartsOn)!==null&&i!==void 0?i:h.weekStartsOn)!==null&&r!==void 0?r:(u=h.locale)===null||u===void 0||(l=u.options)===null||l===void 0?void 0:l.weekStartsOn)!==null&&n!==void 0?n:0);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var f=he(t),p=f.getUTCDay(),m=(p<c?7:0)+p-c;return f.setUTCDate(f.getUTCDate()-m),f.setUTCHours(0,0,0,0),f}function _d(t,e){var n,r,i,s,o,a,u,l;ne(1,arguments);var h=he(t),c=h.getUTCFullYear(),f=gr(),p=ue((n=(r=(i=(s=e==null?void 0:e.firstWeekContainsDate)!==null&&s!==void 0?s:e==null||(o=e.locale)===null||o===void 0||(a=o.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:f.firstWeekContainsDate)!==null&&r!==void 0?r:(u=f.locale)===null||u===void 0||(l=u.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&n!==void 0?n:1);if(!(p>=1&&p<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=new Date(0);m.setUTCFullYear(c+1,0,p),m.setUTCHours(0,0,0,0);var T=jr(m,e),P=new Date(0);P.setUTCFullYear(c,0,p),P.setUTCHours(0,0,0,0);var D=jr(P,e);return h.getTime()>=T.getTime()?c+1:h.getTime()>=D.getTime()?c:c-1}function WI(t,e){var n,r,i,s,o,a,u,l;ne(1,arguments);var h=gr(),c=ue((n=(r=(i=(s=e==null?void 0:e.firstWeekContainsDate)!==null&&s!==void 0?s:e==null||(o=e.locale)===null||o===void 0||(a=o.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:h.firstWeekContainsDate)!==null&&r!==void 0?r:(u=h.locale)===null||u===void 0||(l=u.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&n!==void 0?n:1),f=_d(t,e),p=new Date(0);p.setUTCFullYear(f,0,c),p.setUTCHours(0,0,0,0);var m=jr(p,e);return m}var YI=6048e5;function __(t,e){ne(1,arguments);var n=he(t),r=jr(n,e).getTime()-WI(n,e).getTime();return Math.round(r/YI)+1}function Le(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var zI={y:function(e,n){var r=e.getUTCFullYear(),i=r>0?r:1-r;return Le(n==="yy"?i%100:i,n.length)},M:function(e,n){var r=e.getUTCMonth();return n==="M"?String(r+1):Le(r+1,2)},d:function(e,n){return Le(e.getUTCDate(),n.length)},a:function(e,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(e,n){return Le(e.getUTCHours()%12||12,n.length)},H:function(e,n){return Le(e.getUTCHours(),n.length)},m:function(e,n){return Le(e.getUTCMinutes(),n.length)},s:function(e,n){return Le(e.getUTCSeconds(),n.length)},S:function(e,n){var r=n.length,i=e.getUTCMilliseconds(),s=Math.floor(i*Math.pow(10,r-3));return Le(s,n.length)}};const Jn=zI;var li={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},KI={G:function(e,n,r){var i=e.getUTCFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});case"GGGG":default:return r.era(i,{width:"wide"})}},y:function(e,n,r){if(n==="yo"){var i=e.getUTCFullYear(),s=i>0?i:1-i;return r.ordinalNumber(s,{unit:"year"})}return Jn.y(e,n)},Y:function(e,n,r,i){var s=_d(e,i),o=s>0?s:1-s;if(n==="YY"){var a=o%100;return Le(a,2)}return n==="Yo"?r.ordinalNumber(o,{unit:"year"}):Le(o,n.length)},R:function(e,n){var r=g_(e);return Le(r,n.length)},u:function(e,n){var r=e.getUTCFullYear();return Le(r,n.length)},Q:function(e,n,r){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(n){case"Q":return String(i);case"QQ":return Le(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(e,n,r){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(n){case"q":return String(i);case"qq":return Le(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(e,n,r){var i=e.getUTCMonth();switch(n){case"M":case"MM":return Jn.M(e,n);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(e,n,r){var i=e.getUTCMonth();switch(n){case"L":return String(i+1);case"LL":return Le(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(e,n,r,i){var s=__(e,i);return n==="wo"?r.ordinalNumber(s,{unit:"week"}):Le(s,n.length)},I:function(e,n,r){var i=v_(e);return n==="Io"?r.ordinalNumber(i,{unit:"week"}):Le(i,n.length)},d:function(e,n,r){return n==="do"?r.ordinalNumber(e.getUTCDate(),{unit:"date"}):Jn.d(e,n)},D:function(e,n,r){var i=jI(e);return n==="Do"?r.ordinalNumber(i,{unit:"dayOfYear"}):Le(i,n.length)},E:function(e,n,r){var i=e.getUTCDay();switch(n){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(e,n,r,i){var s=e.getUTCDay(),o=(s-i.weekStartsOn+8)%7||7;switch(n){case"e":return String(o);case"ee":return Le(o,2);case"eo":return r.ordinalNumber(o,{unit:"day"});case"eee":return r.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(s,{width:"short",context:"formatting"});case"eeee":default:return r.day(s,{width:"wide",context:"formatting"})}},c:function(e,n,r,i){var s=e.getUTCDay(),o=(s-i.weekStartsOn+8)%7||7;switch(n){case"c":return String(o);case"cc":return Le(o,n.length);case"co":return r.ordinalNumber(o,{unit:"day"});case"ccc":return r.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(s,{width:"narrow",context:"standalone"});case"cccccc":return r.day(s,{width:"short",context:"standalone"});case"cccc":default:return r.day(s,{width:"wide",context:"standalone"})}},i:function(e,n,r){var i=e.getUTCDay(),s=i===0?7:i;switch(n){case"i":return String(s);case"ii":return Le(s,n.length);case"io":return r.ordinalNumber(s,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(e,n,r){var i=e.getUTCHours(),s=i/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(e,n,r){var i=e.getUTCHours(),s;switch(i===12?s=li.noon:i===0?s=li.midnight:s=i/12>=1?"pm":"am",n){case"b":case"bb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(e,n,r){var i=e.getUTCHours(),s;switch(i>=17?s=li.evening:i>=12?s=li.afternoon:i>=4?s=li.morning:s=li.night,n){case"B":case"BB":case"BBB":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(e,n,r){if(n==="ho"){var i=e.getUTCHours()%12;return i===0&&(i=12),r.ordinalNumber(i,{unit:"hour"})}return Jn.h(e,n)},H:function(e,n,r){return n==="Ho"?r.ordinalNumber(e.getUTCHours(),{unit:"hour"}):Jn.H(e,n)},K:function(e,n,r){var i=e.getUTCHours()%12;return n==="Ko"?r.ordinalNumber(i,{unit:"hour"}):Le(i,n.length)},k:function(e,n,r){var i=e.getUTCHours();return i===0&&(i=24),n==="ko"?r.ordinalNumber(i,{unit:"hour"}):Le(i,n.length)},m:function(e,n,r){return n==="mo"?r.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):Jn.m(e,n)},s:function(e,n,r){return n==="so"?r.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):Jn.s(e,n)},S:function(e,n){return Jn.S(e,n)},X:function(e,n,r,i){var s=i._originalDate||e,o=s.getTimezoneOffset();if(o===0)return"Z";switch(n){case"X":return Em(o);case"XXXX":case"XX":return Cr(o);case"XXXXX":case"XXX":default:return Cr(o,":")}},x:function(e,n,r,i){var s=i._originalDate||e,o=s.getTimezoneOffset();switch(n){case"x":return Em(o);case"xxxx":case"xx":return Cr(o);case"xxxxx":case"xxx":default:return Cr(o,":")}},O:function(e,n,r,i){var s=i._originalDate||e,o=s.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+Sm(o,":");case"OOOO":default:return"GMT"+Cr(o,":")}},z:function(e,n,r,i){var s=i._originalDate||e,o=s.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+Sm(o,":");case"zzzz":default:return"GMT"+Cr(o,":")}},t:function(e,n,r,i){var s=i._originalDate||e,o=Math.floor(s.getTime()/1e3);return Le(o,n.length)},T:function(e,n,r,i){var s=i._originalDate||e,o=s.getTime();return Le(o,n.length)}};function Sm(t,e){var n=t>0?"-":"+",r=Math.abs(t),i=Math.floor(r/60),s=r%60;if(s===0)return n+String(i);var o=e||"";return n+String(i)+o+Le(s,2)}function Em(t,e){if(t%60===0){var n=t>0?"-":"+";return n+Le(Math.abs(t)/60,2)}return Cr(t,e)}function Cr(t,e){var n=e||"",r=t>0?"-":"+",i=Math.abs(t),s=Le(Math.floor(i/60),2),o=Le(i%60,2);return r+s+n+o}const GI=KI;var Im=function(e,n){switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},w_=function(e,n){switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},QI=function(e,n){var r=e.match(/(P+)(p+)?/)||[],i=r[1],s=r[2];if(!s)return Im(e,n);var o;switch(i){case"P":o=n.dateTime({width:"short"});break;case"PP":o=n.dateTime({width:"medium"});break;case"PPP":o=n.dateTime({width:"long"});break;case"PPPP":default:o=n.dateTime({width:"full"});break}return o.replace("{{date}}",Im(i,n)).replace("{{time}}",w_(s,n))},XI={p:w_,P:QI};const nh=XI;var JI=["D","DD"],ZI=["YY","YYYY"];function b_(t){return JI.indexOf(t)!==-1}function T_(t){return ZI.indexOf(t)!==-1}function qa(t,e,n){if(t==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var e1={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},t1=function(e,n,r){var i,s=e1[e];return typeof s=="string"?i=s:n===1?i=s.one:i=s.other.replace("{{count}}",n.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};const n1=t1;function rc(t){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var r1={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},i1={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},s1={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},o1={date:rc({formats:r1,defaultWidth:"full"}),time:rc({formats:i1,defaultWidth:"full"}),dateTime:rc({formats:s1,defaultWidth:"full"})};const a1=o1;var u1={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},l1=function(e,n,r,i){return u1[e]};const c1=l1;function Ji(t){return function(e,n){var r=n!=null&&n.context?String(n.context):"standalone",i;if(r==="formatting"&&t.formattingValues){var s=t.defaultFormattingWidth||t.defaultWidth,o=n!=null&&n.width?String(n.width):s;i=t.formattingValues[o]||t.formattingValues[s]}else{var a=t.defaultWidth,u=n!=null&&n.width?String(n.width):t.defaultWidth;i=t.values[u]||t.values[a]}var l=t.argumentCallback?t.argumentCallback(e):e;return i[l]}}var h1={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},f1={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},d1={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},p1={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},m1={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},y1={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},g1=function(e,n){var r=Number(e),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},v1={ordinalNumber:g1,era:Ji({values:h1,defaultWidth:"wide"}),quarter:Ji({values:f1,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:Ji({values:d1,defaultWidth:"wide"}),day:Ji({values:p1,defaultWidth:"wide"}),dayPeriod:Ji({values:m1,defaultWidth:"wide",formattingValues:y1,defaultFormattingWidth:"wide"})};const _1=v1;function Zi(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.width,i=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],s=e.match(i);if(!s)return null;var o=s[0],a=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(a)?b1(a,function(c){return c.test(o)}):w1(a,function(c){return c.test(o)}),l;l=t.valueCallback?t.valueCallback(u):u,l=n.valueCallback?n.valueCallback(l):l;var h=e.slice(o.length);return{value:l,rest:h}}}function w1(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function b1(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}function T1(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.match(t.matchPattern);if(!r)return null;var i=r[0],s=e.match(t.parsePattern);if(!s)return null;var o=t.valueCallback?t.valueCallback(s[0]):s[0];o=n.valueCallback?n.valueCallback(o):o;var a=e.slice(i.length);return{value:o,rest:a}}}var S1=/^(\d+)(th|st|nd|rd)?/i,E1=/\d+/i,I1={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},C1={any:[/^b/i,/^(a|c)/i]},k1={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},O1={any:[/1/i,/2/i,/3/i,/4/i]},R1={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},P1={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},D1={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},A1={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},N1={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},x1={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},M1={ordinalNumber:T1({matchPattern:S1,parsePattern:E1,valueCallback:function(e){return parseInt(e,10)}}),era:Zi({matchPatterns:I1,defaultMatchWidth:"wide",parsePatterns:C1,defaultParseWidth:"any"}),quarter:Zi({matchPatterns:k1,defaultMatchWidth:"wide",parsePatterns:O1,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Zi({matchPatterns:R1,defaultMatchWidth:"wide",parsePatterns:P1,defaultParseWidth:"any"}),day:Zi({matchPatterns:D1,defaultMatchWidth:"wide",parsePatterns:A1,defaultParseWidth:"any"}),dayPeriod:Zi({matchPatterns:N1,defaultMatchWidth:"any",parsePatterns:x1,defaultParseWidth:"any"})};const $1=M1;var L1={code:"en-US",formatDistance:n1,formatLong:a1,formatRelative:c1,localize:_1,match:$1,options:{weekStartsOn:0,firstWeekContainsDate:1}};const S_=L1;var U1=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,F1=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,V1=/^'([^]*?)'?$/,B1=/''/g,j1=/[a-zA-Z]/;function fs(t,e,n){var r,i,s,o,a,u,l,h,c,f,p,m,T,P,D,S,H,W;ne(2,arguments);var Q=String(e),v=gr(),k=(r=(i=n==null?void 0:n.locale)!==null&&i!==void 0?i:v.locale)!==null&&r!==void 0?r:S_,U=ue((s=(o=(a=(u=n==null?void 0:n.firstWeekContainsDate)!==null&&u!==void 0?u:n==null||(l=n.locale)===null||l===void 0||(h=l.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&a!==void 0?a:v.firstWeekContainsDate)!==null&&o!==void 0?o:(c=v.locale)===null||c===void 0||(f=c.options)===null||f===void 0?void 0:f.firstWeekContainsDate)!==null&&s!==void 0?s:1);if(!(U>=1&&U<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var Y=ue((p=(m=(T=(P=n==null?void 0:n.weekStartsOn)!==null&&P!==void 0?P:n==null||(D=n.locale)===null||D===void 0||(S=D.options)===null||S===void 0?void 0:S.weekStartsOn)!==null&&T!==void 0?T:v.weekStartsOn)!==null&&m!==void 0?m:(H=v.locale)===null||H===void 0||(W=H.options)===null||W===void 0?void 0:W.weekStartsOn)!==null&&p!==void 0?p:0);if(!(Y>=0&&Y<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!k.localize)throw new RangeError("locale must contain localize property");if(!k.formatLong)throw new RangeError("locale must contain formatLong property");var re=he(t);if(!hs(re))throw new RangeError("Invalid time value");var V=Ha(re),J=y_(re,V),E={firstWeekContainsDate:U,weekStartsOn:Y,locale:k,_originalDate:re},w=Q.match(F1).map(function(R){var A=R[0];if(A==="p"||A==="P"){var d=nh[A];return d(R,k.formatLong)}return R}).join("").match(U1).map(function(R){if(R==="''")return"'";var A=R[0];if(A==="'")return H1(R);var d=GI[A];if(d)return!(n!=null&&n.useAdditionalWeekYearTokens)&&T_(R)&&qa(R,e,String(t)),!(n!=null&&n.useAdditionalDayOfYearTokens)&&b_(R)&&qa(R,e,String(t)),d(J,R,k.localize,E);if(A.match(j1))throw new RangeError("Format string contains an unescaped latin alphabet character `"+A+"`");return R}).join("");return w}function H1(t){var e=t.match(V1);return e?e[1].replace(B1,"'"):t}function q1(t,e){if(t==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}function W1(t){ne(1,arguments);var e=he(t),n=e.getDay();return n}function Y1(t){ne(1,arguments);var e=he(t),n=e.getFullYear(),r=e.getMonth(),i=new Date(0);return i.setFullYear(n,r+1,0),i.setHours(0,0,0,0),i.getDate()}function Nn(t){ne(1,arguments);var e=he(t),n=e.getHours();return n}var z1=6048e5;function K1(t){ne(1,arguments);var e=he(t),n=ja(e).getTime()-$I(e).getTime();return Math.round(n/z1)+1}function xn(t){ne(1,arguments);var e=he(t),n=e.getMinutes();return n}function ze(t){ne(1,arguments);var e=he(t),n=e.getMonth();return n}function Ci(t){ne(1,arguments);var e=he(t),n=e.getSeconds();return n}function Ke(t){return ne(1,arguments),he(t).getFullYear()}function wd(t,e){ne(2,arguments);var n=he(t),r=he(e);return n.getTime()>r.getTime()}function bd(t,e){ne(2,arguments);var n=he(t),r=he(e);return n.getTime()<r.getTime()}function E_(t,e){ne(2,arguments);var n=he(t),r=he(e);return n.getTime()===r.getTime()}function zo(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?zo=function(n){return typeof n}:zo=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},zo(t)}function I_(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&rh(t,e)}function rh(t,e){return rh=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},rh(t,e)}function C_(t){var e=Q1();return function(){var r=Wa(t),i;if(e){var s=Wa(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return G1(this,i)}}function G1(t,e){return e&&(zo(e)==="object"||typeof e=="function")?e:ih(t)}function ih(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Q1(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Wa(t){return Wa=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Wa(t)}function Td(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Cm(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Sd(t,e,n){return e&&Cm(t.prototype,e),n&&Cm(t,n),t}function sh(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var X1=10,k_=function(){function t(){Td(this,t),sh(this,"subPriority",0)}return Sd(t,[{key:"validate",value:function(n,r){return!0}}]),t}(),J1=function(t){I_(n,t);var e=C_(n);function n(r,i,s,o,a){var u;return Td(this,n),u=e.call(this),u.value=r,u.validateValue=i,u.setValue=s,u.priority=o,a&&(u.subPriority=a),u}return Sd(n,[{key:"validate",value:function(i,s){return this.validateValue(i,this.value,s)}},{key:"set",value:function(i,s,o){return this.setValue(i,s,this.value,o)}}]),n}(k_),Z1=function(t){I_(n,t);var e=C_(n);function n(){var r;Td(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),sh(ih(r),"priority",X1),sh(ih(r),"subPriority",-1),r}return Sd(n,[{key:"set",value:function(i,s){if(s.timestampIsSet)return i;var o=new Date(0);return o.setFullYear(i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate()),o.setHours(i.getUTCHours(),i.getUTCMinutes(),i.getUTCSeconds(),i.getUTCMilliseconds()),o}}]),n}(k_);function eC(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function km(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function tC(t,e,n){return e&&km(t.prototype,e),n&&km(t,n),t}var Ae=function(){function t(){eC(this,t)}return tC(t,[{key:"run",value:function(n,r,i,s){var o=this.parse(n,r,i,s);return o?{setter:new J1(o.value,this.validate,this.set,this.priority,this.subPriority),rest:o.rest}:null}},{key:"validate",value:function(n,r,i){return!0}}]),t}();function Ko(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ko=function(n){return typeof n}:Ko=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ko(t)}function nC(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Om(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function rC(t,e,n){return e&&Om(t.prototype,e),n&&Om(t,n),t}function iC(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&oh(t,e)}function oh(t,e){return oh=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},oh(t,e)}function sC(t){var e=aC();return function(){var r=Ya(t),i;if(e){var s=Ya(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return oC(this,i)}}function oC(t,e){return e&&(Ko(e)==="object"||typeof e=="function")?e:ah(t)}function ah(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function aC(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ya(t){return Ya=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Ya(t)}function Rm(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var uC=function(t){iC(n,t);var e=sC(n);function n(){var r;nC(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),Rm(ah(r),"priority",140),Rm(ah(r),"incompatibleTokens",["R","u","t","T"]),r}return rC(n,[{key:"parse",value:function(i,s,o){switch(s){case"G":case"GG":case"GGG":return o.era(i,{width:"abbreviated"})||o.era(i,{width:"narrow"});case"GGGGG":return o.era(i,{width:"narrow"});case"GGGG":default:return o.era(i,{width:"wide"})||o.era(i,{width:"abbreviated"})||o.era(i,{width:"narrow"})}}},{key:"set",value:function(i,s,o){return s.era=o,i.setUTCFullYear(o,0,1),i.setUTCHours(0,0,0,0),i}}]),n}(Ae),rt={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},_n={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function it(t,e){return t&&{value:e(t.value),rest:t.rest}}function Qe(t,e){var n=e.match(t);return n?{value:parseInt(n[0],10),rest:e.slice(n[0].length)}:null}function wn(t,e){var n=e.match(t);if(!n)return null;if(n[0]==="Z")return{value:0,rest:e.slice(1)};var r=n[1]==="+"?1:-1,i=n[2]?parseInt(n[2],10):0,s=n[3]?parseInt(n[3],10):0,o=n[5]?parseInt(n[5],10):0;return{value:r*(i*vd+s*gd+o*FI),rest:e.slice(n[0].length)}}function O_(t){return Qe(rt.anyDigitsSigned,t)}function Ze(t,e){switch(t){case 1:return Qe(rt.singleDigit,e);case 2:return Qe(rt.twoDigits,e);case 3:return Qe(rt.threeDigits,e);case 4:return Qe(rt.fourDigits,e);default:return Qe(new RegExp("^\\d{1,"+t+"}"),e)}}function za(t,e){switch(t){case 1:return Qe(rt.singleDigitSigned,e);case 2:return Qe(rt.twoDigitsSigned,e);case 3:return Qe(rt.threeDigitsSigned,e);case 4:return Qe(rt.fourDigitsSigned,e);default:return Qe(new RegExp("^-?\\d{1,"+t+"}"),e)}}function Ed(t){switch(t){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function R_(t,e){var n=e>0,r=n?e:1-e,i;if(r<=50)i=t||100;else{var s=r+50,o=Math.floor(s/100)*100,a=t>=s%100;i=t+o-(a?100:0)}return n?i:1-i}function P_(t){return t%400===0||t%4===0&&t%100!==0}function Go(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Go=function(n){return typeof n}:Go=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Go(t)}function lC(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Pm(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function cC(t,e,n){return e&&Pm(t.prototype,e),n&&Pm(t,n),t}function hC(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&uh(t,e)}function uh(t,e){return uh=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},uh(t,e)}function fC(t){var e=pC();return function(){var r=Ka(t),i;if(e){var s=Ka(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return dC(this,i)}}function dC(t,e){return e&&(Go(e)==="object"||typeof e=="function")?e:lh(t)}function lh(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function pC(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ka(t){return Ka=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Ka(t)}function Dm(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var mC=function(t){hC(n,t);var e=fC(n);function n(){var r;lC(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),Dm(lh(r),"priority",130),Dm(lh(r),"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"]),r}return cC(n,[{key:"parse",value:function(i,s,o){var a=function(l){return{year:l,isTwoDigitYear:s==="yy"}};switch(s){case"y":return it(Ze(4,i),a);case"yo":return it(o.ordinalNumber(i,{unit:"year"}),a);default:return it(Ze(s.length,i),a)}}},{key:"validate",value:function(i,s){return s.isTwoDigitYear||s.year>0}},{key:"set",value:function(i,s,o){var a=i.getUTCFullYear();if(o.isTwoDigitYear){var u=R_(o.year,a);return i.setUTCFullYear(u,0,1),i.setUTCHours(0,0,0,0),i}var l=!("era"in s)||s.era===1?o.year:1-o.year;return i.setUTCFullYear(l,0,1),i.setUTCHours(0,0,0,0),i}}]),n}(Ae);function Qo(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Qo=function(n){return typeof n}:Qo=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Qo(t)}function yC(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Am(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function gC(t,e,n){return e&&Am(t.prototype,e),n&&Am(t,n),t}function vC(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ch(t,e)}function ch(t,e){return ch=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},ch(t,e)}function _C(t){var e=bC();return function(){var r=Ga(t),i;if(e){var s=Ga(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return wC(this,i)}}function wC(t,e){return e&&(Qo(e)==="object"||typeof e=="function")?e:hh(t)}function hh(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function bC(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ga(t){return Ga=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Ga(t)}function Nm(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var TC=function(t){vC(n,t);var e=_C(n);function n(){var r;yC(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),Nm(hh(r),"priority",130),Nm(hh(r),"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"]),r}return gC(n,[{key:"parse",value:function(i,s,o){var a=function(l){return{year:l,isTwoDigitYear:s==="YY"}};switch(s){case"Y":return it(Ze(4,i),a);case"Yo":return it(o.ordinalNumber(i,{unit:"year"}),a);default:return it(Ze(s.length,i),a)}}},{key:"validate",value:function(i,s){return s.isTwoDigitYear||s.year>0}},{key:"set",value:function(i,s,o,a){var u=_d(i,a);if(o.isTwoDigitYear){var l=R_(o.year,u);return i.setUTCFullYear(l,0,a.firstWeekContainsDate),i.setUTCHours(0,0,0,0),jr(i,a)}var h=!("era"in s)||s.era===1?o.year:1-o.year;return i.setUTCFullYear(h,0,a.firstWeekContainsDate),i.setUTCHours(0,0,0,0),jr(i,a)}}]),n}(Ae);function Xo(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Xo=function(n){return typeof n}:Xo=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Xo(t)}function SC(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function xm(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function EC(t,e,n){return e&&xm(t.prototype,e),n&&xm(t,n),t}function IC(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&fh(t,e)}function fh(t,e){return fh=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},fh(t,e)}function CC(t){var e=OC();return function(){var r=Qa(t),i;if(e){var s=Qa(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return kC(this,i)}}function kC(t,e){return e&&(Xo(e)==="object"||typeof e=="function")?e:dh(t)}function dh(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function OC(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Qa(t){return Qa=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Qa(t)}function Mm(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var RC=function(t){IC(n,t);var e=CC(n);function n(){var r;SC(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),Mm(dh(r),"priority",130),Mm(dh(r),"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]),r}return EC(n,[{key:"parse",value:function(i,s){return za(s==="R"?4:s.length,i)}},{key:"set",value:function(i,s,o){var a=new Date(0);return a.setUTCFullYear(o,0,4),a.setUTCHours(0,0,0,0),Ii(a)}}]),n}(Ae);function Jo(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Jo=function(n){return typeof n}:Jo=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Jo(t)}function PC(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function $m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function DC(t,e,n){return e&&$m(t.prototype,e),n&&$m(t,n),t}function AC(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ph(t,e)}function ph(t,e){return ph=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},ph(t,e)}function NC(t){var e=MC();return function(){var r=Xa(t),i;if(e){var s=Xa(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return xC(this,i)}}function xC(t,e){return e&&(Jo(e)==="object"||typeof e=="function")?e:mh(t)}function mh(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function MC(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Xa(t){return Xa=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Xa(t)}function Lm(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var $C=function(t){AC(n,t);var e=NC(n);function n(){var r;PC(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),Lm(mh(r),"priority",130),Lm(mh(r),"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"]),r}return DC(n,[{key:"parse",value:function(i,s){return za(s==="u"?4:s.length,i)}},{key:"set",value:function(i,s,o){return i.setUTCFullYear(o,0,1),i.setUTCHours(0,0,0,0),i}}]),n}(Ae);function Zo(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Zo=function(n){return typeof n}:Zo=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Zo(t)}function LC(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Um(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function UC(t,e,n){return e&&Um(t.prototype,e),n&&Um(t,n),t}function FC(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&yh(t,e)}function yh(t,e){return yh=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},yh(t,e)}function VC(t){var e=jC();return function(){var r=Ja(t),i;if(e){var s=Ja(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return BC(this,i)}}function BC(t,e){return e&&(Zo(e)==="object"||typeof e=="function")?e:gh(t)}function gh(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function jC(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ja(t){return Ja=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Ja(t)}function Fm(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var HC=function(t){FC(n,t);var e=VC(n);function n(){var r;LC(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),Fm(gh(r),"priority",120),Fm(gh(r),"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]),r}return UC(n,[{key:"parse",value:function(i,s,o){switch(s){case"Q":case"QQ":return Ze(s.length,i);case"Qo":return o.ordinalNumber(i,{unit:"quarter"});case"QQQ":return o.quarter(i,{width:"abbreviated",context:"formatting"})||o.quarter(i,{width:"narrow",context:"formatting"});case"QQQQQ":return o.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return o.quarter(i,{width:"wide",context:"formatting"})||o.quarter(i,{width:"abbreviated",context:"formatting"})||o.quarter(i,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(i,s){return s>=1&&s<=4}},{key:"set",value:function(i,s,o){return i.setUTCMonth((o-1)*3,1),i.setUTCHours(0,0,0,0),i}}]),n}(Ae);function ea(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ea=function(n){return typeof n}:ea=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ea(t)}function qC(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Vm(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function WC(t,e,n){return e&&Vm(t.prototype,e),n&&Vm(t,n),t}function YC(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&vh(t,e)}function vh(t,e){return vh=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},vh(t,e)}function zC(t){var e=GC();return function(){var r=Za(t),i;if(e){var s=Za(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return KC(this,i)}}function KC(t,e){return e&&(ea(e)==="object"||typeof e=="function")?e:_h(t)}function _h(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function GC(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Za(t){return Za=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Za(t)}function Bm(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var QC=function(t){YC(n,t);var e=zC(n);function n(){var r;qC(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),Bm(_h(r),"priority",120),Bm(_h(r),"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]),r}return WC(n,[{key:"parse",value:function(i,s,o){switch(s){case"q":case"qq":return Ze(s.length,i);case"qo":return o.ordinalNumber(i,{unit:"quarter"});case"qqq":return o.quarter(i,{width:"abbreviated",context:"standalone"})||o.quarter(i,{width:"narrow",context:"standalone"});case"qqqqq":return o.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return o.quarter(i,{width:"wide",context:"standalone"})||o.quarter(i,{width:"abbreviated",context:"standalone"})||o.quarter(i,{width:"narrow",context:"standalone"})}}},{key:"validate",value:function(i,s){return s>=1&&s<=4}},{key:"set",value:function(i,s,o){return i.setUTCMonth((o-1)*3,1),i.setUTCHours(0,0,0,0),i}}]),n}(Ae);function ta(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ta=function(n){return typeof n}:ta=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ta(t)}function XC(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function jm(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function JC(t,e,n){return e&&jm(t.prototype,e),n&&jm(t,n),t}function ZC(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&wh(t,e)}function wh(t,e){return wh=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},wh(t,e)}function ek(t){var e=nk();return function(){var r=eu(t),i;if(e){var s=eu(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return tk(this,i)}}function tk(t,e){return e&&(ta(e)==="object"||typeof e=="function")?e:bh(t)}function bh(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function nk(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function eu(t){return eu=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},eu(t)}function Hm(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var rk=function(t){ZC(n,t);var e=ek(n);function n(){var r;XC(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),Hm(bh(r),"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]),Hm(bh(r),"priority",110),r}return JC(n,[{key:"parse",value:function(i,s,o){var a=function(l){return l-1};switch(s){case"M":return it(Qe(rt.month,i),a);case"MM":return it(Ze(2,i),a);case"Mo":return it(o.ordinalNumber(i,{unit:"month"}),a);case"MMM":return o.month(i,{width:"abbreviated",context:"formatting"})||o.month(i,{width:"narrow",context:"formatting"});case"MMMMM":return o.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return o.month(i,{width:"wide",context:"formatting"})||o.month(i,{width:"abbreviated",context:"formatting"})||o.month(i,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(i,s){return s>=0&&s<=11}},{key:"set",value:function(i,s,o){return i.setUTCMonth(o,1),i.setUTCHours(0,0,0,0),i}}]),n}(Ae);function na(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?na=function(n){return typeof n}:na=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},na(t)}function ik(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function qm(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function sk(t,e,n){return e&&qm(t.prototype,e),n&&qm(t,n),t}function ok(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Th(t,e)}function Th(t,e){return Th=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Th(t,e)}function ak(t){var e=lk();return function(){var r=tu(t),i;if(e){var s=tu(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return uk(this,i)}}function uk(t,e){return e&&(na(e)==="object"||typeof e=="function")?e:Sh(t)}function Sh(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function lk(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function tu(t){return tu=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},tu(t)}function Wm(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var ck=function(t){ok(n,t);var e=ak(n);function n(){var r;ik(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),Wm(Sh(r),"priority",110),Wm(Sh(r),"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]),r}return sk(n,[{key:"parse",value:function(i,s,o){var a=function(l){return l-1};switch(s){case"L":return it(Qe(rt.month,i),a);case"LL":return it(Ze(2,i),a);case"Lo":return it(o.ordinalNumber(i,{unit:"month"}),a);case"LLL":return o.month(i,{width:"abbreviated",context:"standalone"})||o.month(i,{width:"narrow",context:"standalone"});case"LLLLL":return o.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return o.month(i,{width:"wide",context:"standalone"})||o.month(i,{width:"abbreviated",context:"standalone"})||o.month(i,{width:"narrow",context:"standalone"})}}},{key:"validate",value:function(i,s){return s>=0&&s<=11}},{key:"set",value:function(i,s,o){return i.setUTCMonth(o,1),i.setUTCHours(0,0,0,0),i}}]),n}(Ae);function hk(t,e,n){ne(2,arguments);var r=he(t),i=ue(e),s=__(r,n)-i;return r.setUTCDate(r.getUTCDate()-s*7),r}function ra(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ra=function(n){return typeof n}:ra=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ra(t)}function fk(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ym(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function dk(t,e,n){return e&&Ym(t.prototype,e),n&&Ym(t,n),t}function pk(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Eh(t,e)}function Eh(t,e){return Eh=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Eh(t,e)}function mk(t){var e=gk();return function(){var r=nu(t),i;if(e){var s=nu(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return yk(this,i)}}function yk(t,e){return e&&(ra(e)==="object"||typeof e=="function")?e:Ih(t)}function Ih(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function gk(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function nu(t){return nu=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},nu(t)}function zm(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var vk=function(t){pk(n,t);var e=mk(n);function n(){var r;fk(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),zm(Ih(r),"priority",100),zm(Ih(r),"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"]),r}return dk(n,[{key:"parse",value:function(i,s,o){switch(s){case"w":return Qe(rt.week,i);case"wo":return o.ordinalNumber(i,{unit:"week"});default:return Ze(s.length,i)}}},{key:"validate",value:function(i,s){return s>=1&&s<=53}},{key:"set",value:function(i,s,o,a){return jr(hk(i,o,a),a)}}]),n}(Ae);function _k(t,e){ne(2,arguments);var n=he(t),r=ue(e),i=v_(n)-r;return n.setUTCDate(n.getUTCDate()-i*7),n}function ia(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ia=function(n){return typeof n}:ia=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ia(t)}function wk(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Km(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function bk(t,e,n){return e&&Km(t.prototype,e),n&&Km(t,n),t}function Tk(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Ch(t,e)}function Ch(t,e){return Ch=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Ch(t,e)}function Sk(t){var e=Ik();return function(){var r=ru(t),i;if(e){var s=ru(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return Ek(this,i)}}function Ek(t,e){return e&&(ia(e)==="object"||typeof e=="function")?e:kh(t)}function kh(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Ik(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ru(t){return ru=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},ru(t)}function Gm(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Ck=function(t){Tk(n,t);var e=Sk(n);function n(){var r;wk(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),Gm(kh(r),"priority",100),Gm(kh(r),"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]),r}return bk(n,[{key:"parse",value:function(i,s,o){switch(s){case"I":return Qe(rt.week,i);case"Io":return o.ordinalNumber(i,{unit:"week"});default:return Ze(s.length,i)}}},{key:"validate",value:function(i,s){return s>=1&&s<=53}},{key:"set",value:function(i,s,o){return Ii(_k(i,o))}}]),n}(Ae);function sa(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?sa=function(n){return typeof n}:sa=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},sa(t)}function kk(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Qm(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Ok(t,e,n){return e&&Qm(t.prototype,e),n&&Qm(t,n),t}function Rk(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Oh(t,e)}function Oh(t,e){return Oh=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Oh(t,e)}function Pk(t){var e=Ak();return function(){var r=iu(t),i;if(e){var s=iu(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return Dk(this,i)}}function Dk(t,e){return e&&(sa(e)==="object"||typeof e=="function")?e:oa(t)}function oa(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Ak(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function iu(t){return iu=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},iu(t)}function ic(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Nk=[31,28,31,30,31,30,31,31,30,31,30,31],xk=[31,29,31,30,31,30,31,31,30,31,30,31],Mk=function(t){Rk(n,t);var e=Pk(n);function n(){var r;kk(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),ic(oa(r),"priority",90),ic(oa(r),"subPriority",1),ic(oa(r),"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"]),r}return Ok(n,[{key:"parse",value:function(i,s,o){switch(s){case"d":return Qe(rt.date,i);case"do":return o.ordinalNumber(i,{unit:"date"});default:return Ze(s.length,i)}}},{key:"validate",value:function(i,s){var o=i.getUTCFullYear(),a=P_(o),u=i.getUTCMonth();return a?s>=1&&s<=xk[u]:s>=1&&s<=Nk[u]}},{key:"set",value:function(i,s,o){return i.setUTCDate(o),i.setUTCHours(0,0,0,0),i}}]),n}(Ae);function aa(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?aa=function(n){return typeof n}:aa=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},aa(t)}function $k(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Xm(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Lk(t,e,n){return e&&Xm(t.prototype,e),n&&Xm(t,n),t}function Uk(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Rh(t,e)}function Rh(t,e){return Rh=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Rh(t,e)}function Fk(t){var e=Bk();return function(){var r=su(t),i;if(e){var s=su(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return Vk(this,i)}}function Vk(t,e){return e&&(aa(e)==="object"||typeof e=="function")?e:ua(t)}function ua(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Bk(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function su(t){return su=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},su(t)}function sc(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var jk=function(t){Uk(n,t);var e=Fk(n);function n(){var r;$k(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),sc(ua(r),"priority",90),sc(ua(r),"subpriority",1),sc(ua(r),"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]),r}return Lk(n,[{key:"parse",value:function(i,s,o){switch(s){case"D":case"DD":return Qe(rt.dayOfYear,i);case"Do":return o.ordinalNumber(i,{unit:"date"});default:return Ze(s.length,i)}}},{key:"validate",value:function(i,s){var o=i.getUTCFullYear(),a=P_(o);return a?s>=1&&s<=366:s>=1&&s<=365}},{key:"set",value:function(i,s,o){return i.setUTCMonth(0,o),i.setUTCHours(0,0,0,0),i}}]),n}(Ae);function Id(t,e,n){var r,i,s,o,a,u,l,h;ne(2,arguments);var c=gr(),f=ue((r=(i=(s=(o=n==null?void 0:n.weekStartsOn)!==null&&o!==void 0?o:n==null||(a=n.locale)===null||a===void 0||(u=a.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&s!==void 0?s:c.weekStartsOn)!==null&&i!==void 0?i:(l=c.locale)===null||l===void 0||(h=l.options)===null||h===void 0?void 0:h.weekStartsOn)!==null&&r!==void 0?r:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=he(t),m=ue(e),T=p.getUTCDay(),P=m%7,D=(P+7)%7,S=(D<f?7:0)+m-T;return p.setUTCDate(p.getUTCDate()+S),p}function la(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?la=function(n){return typeof n}:la=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},la(t)}function Hk(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Jm(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function qk(t,e,n){return e&&Jm(t.prototype,e),n&&Jm(t,n),t}function Wk(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Ph(t,e)}function Ph(t,e){return Ph=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Ph(t,e)}function Yk(t){var e=Kk();return function(){var r=ou(t),i;if(e){var s=ou(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return zk(this,i)}}function zk(t,e){return e&&(la(e)==="object"||typeof e=="function")?e:Dh(t)}function Dh(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Kk(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ou(t){return ou=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},ou(t)}function Zm(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Gk=function(t){Wk(n,t);var e=Yk(n);function n(){var r;Hk(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),Zm(Dh(r),"priority",90),Zm(Dh(r),"incompatibleTokens",["D","i","e","c","t","T"]),r}return qk(n,[{key:"parse",value:function(i,s,o){switch(s){case"E":case"EE":case"EEE":return o.day(i,{width:"abbreviated",context:"formatting"})||o.day(i,{width:"short",context:"formatting"})||o.day(i,{width:"narrow",context:"formatting"});case"EEEEE":return o.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return o.day(i,{width:"short",context:"formatting"})||o.day(i,{width:"narrow",context:"formatting"});case"EEEE":default:return o.day(i,{width:"wide",context:"formatting"})||o.day(i,{width:"abbreviated",context:"formatting"})||o.day(i,{width:"short",context:"formatting"})||o.day(i,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(i,s){return s>=0&&s<=6}},{key:"set",value:function(i,s,o,a){return i=Id(i,o,a),i.setUTCHours(0,0,0,0),i}}]),n}(Ae);function ca(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ca=function(n){return typeof n}:ca=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ca(t)}function Qk(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ey(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Xk(t,e,n){return e&&ey(t.prototype,e),n&&ey(t,n),t}function Jk(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Ah(t,e)}function Ah(t,e){return Ah=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Ah(t,e)}function Zk(t){var e=tO();return function(){var r=au(t),i;if(e){var s=au(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return eO(this,i)}}function eO(t,e){return e&&(ca(e)==="object"||typeof e=="function")?e:Nh(t)}function Nh(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function tO(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function au(t){return au=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},au(t)}function ty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var nO=function(t){Jk(n,t);var e=Zk(n);function n(){var r;Qk(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),ty(Nh(r),"priority",90),ty(Nh(r),"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]),r}return Xk(n,[{key:"parse",value:function(i,s,o,a){var u=function(h){var c=Math.floor((h-1)/7)*7;return(h+a.weekStartsOn+6)%7+c};switch(s){case"e":case"ee":return it(Ze(s.length,i),u);case"eo":return it(o.ordinalNumber(i,{unit:"day"}),u);case"eee":return o.day(i,{width:"abbreviated",context:"formatting"})||o.day(i,{width:"short",context:"formatting"})||o.day(i,{width:"narrow",context:"formatting"});case"eeeee":return o.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return o.day(i,{width:"short",context:"formatting"})||o.day(i,{width:"narrow",context:"formatting"});case"eeee":default:return o.day(i,{width:"wide",context:"formatting"})||o.day(i,{width:"abbreviated",context:"formatting"})||o.day(i,{width:"short",context:"formatting"})||o.day(i,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(i,s){return s>=0&&s<=6}},{key:"set",value:function(i,s,o,a){return i=Id(i,o,a),i.setUTCHours(0,0,0,0),i}}]),n}(Ae);function ha(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ha=function(n){return typeof n}:ha=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ha(t)}function rO(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ny(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function iO(t,e,n){return e&&ny(t.prototype,e),n&&ny(t,n),t}function sO(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&xh(t,e)}function xh(t,e){return xh=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},xh(t,e)}function oO(t){var e=uO();return function(){var r=uu(t),i;if(e){var s=uu(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return aO(this,i)}}function aO(t,e){return e&&(ha(e)==="object"||typeof e=="function")?e:Mh(t)}function Mh(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function uO(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function uu(t){return uu=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},uu(t)}function ry(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var lO=function(t){sO(n,t);var e=oO(n);function n(){var r;rO(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),ry(Mh(r),"priority",90),ry(Mh(r),"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]),r}return iO(n,[{key:"parse",value:function(i,s,o,a){var u=function(h){var c=Math.floor((h-1)/7)*7;return(h+a.weekStartsOn+6)%7+c};switch(s){case"c":case"cc":return it(Ze(s.length,i),u);case"co":return it(o.ordinalNumber(i,{unit:"day"}),u);case"ccc":return o.day(i,{width:"abbreviated",context:"standalone"})||o.day(i,{width:"short",context:"standalone"})||o.day(i,{width:"narrow",context:"standalone"});case"ccccc":return o.day(i,{width:"narrow",context:"standalone"});case"cccccc":return o.day(i,{width:"short",context:"standalone"})||o.day(i,{width:"narrow",context:"standalone"});case"cccc":default:return o.day(i,{width:"wide",context:"standalone"})||o.day(i,{width:"abbreviated",context:"standalone"})||o.day(i,{width:"short",context:"standalone"})||o.day(i,{width:"narrow",context:"standalone"})}}},{key:"validate",value:function(i,s){return s>=0&&s<=6}},{key:"set",value:function(i,s,o,a){return i=Id(i,o,a),i.setUTCHours(0,0,0,0),i}}]),n}(Ae);function cO(t,e){ne(2,arguments);var n=ue(e);n%7===0&&(n=n-7);var r=1,i=he(t),s=i.getUTCDay(),o=n%7,a=(o+7)%7,u=(a<r?7:0)+n-s;return i.setUTCDate(i.getUTCDate()+u),i}function fa(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?fa=function(n){return typeof n}:fa=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},fa(t)}function hO(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function iy(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function fO(t,e,n){return e&&iy(t.prototype,e),n&&iy(t,n),t}function dO(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&$h(t,e)}function $h(t,e){return $h=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},$h(t,e)}function pO(t){var e=yO();return function(){var r=lu(t),i;if(e){var s=lu(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return mO(this,i)}}function mO(t,e){return e&&(fa(e)==="object"||typeof e=="function")?e:Lh(t)}function Lh(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function yO(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function lu(t){return lu=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},lu(t)}function sy(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var gO=function(t){dO(n,t);var e=pO(n);function n(){var r;hO(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),sy(Lh(r),"priority",90),sy(Lh(r),"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]),r}return fO(n,[{key:"parse",value:function(i,s,o){var a=function(l){return l===0?7:l};switch(s){case"i":case"ii":return Ze(s.length,i);case"io":return o.ordinalNumber(i,{unit:"day"});case"iii":return it(o.day(i,{width:"abbreviated",context:"formatting"})||o.day(i,{width:"short",context:"formatting"})||o.day(i,{width:"narrow",context:"formatting"}),a);case"iiiii":return it(o.day(i,{width:"narrow",context:"formatting"}),a);case"iiiiii":return it(o.day(i,{width:"short",context:"formatting"})||o.day(i,{width:"narrow",context:"formatting"}),a);case"iiii":default:return it(o.day(i,{width:"wide",context:"formatting"})||o.day(i,{width:"abbreviated",context:"formatting"})||o.day(i,{width:"short",context:"formatting"})||o.day(i,{width:"narrow",context:"formatting"}),a)}}},{key:"validate",value:function(i,s){return s>=1&&s<=7}},{key:"set",value:function(i,s,o){return i=cO(i,o),i.setUTCHours(0,0,0,0),i}}]),n}(Ae);function da(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?da=function(n){return typeof n}:da=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},da(t)}function vO(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function oy(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _O(t,e,n){return e&&oy(t.prototype,e),n&&oy(t,n),t}function wO(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Uh(t,e)}function Uh(t,e){return Uh=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Uh(t,e)}function bO(t){var e=SO();return function(){var r=cu(t),i;if(e){var s=cu(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return TO(this,i)}}function TO(t,e){return e&&(da(e)==="object"||typeof e=="function")?e:Fh(t)}function Fh(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function SO(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function cu(t){return cu=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},cu(t)}function ay(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var EO=function(t){wO(n,t);var e=bO(n);function n(){var r;vO(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),ay(Fh(r),"priority",80),ay(Fh(r),"incompatibleTokens",["b","B","H","k","t","T"]),r}return _O(n,[{key:"parse",value:function(i,s,o){switch(s){case"a":case"aa":case"aaa":return o.dayPeriod(i,{width:"abbreviated",context:"formatting"})||o.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaaa":return o.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return o.dayPeriod(i,{width:"wide",context:"formatting"})||o.dayPeriod(i,{width:"abbreviated",context:"formatting"})||o.dayPeriod(i,{width:"narrow",context:"formatting"})}}},{key:"set",value:function(i,s,o){return i.setUTCHours(Ed(o),0,0,0),i}}]),n}(Ae);function pa(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?pa=function(n){return typeof n}:pa=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},pa(t)}function IO(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function uy(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function CO(t,e,n){return e&&uy(t.prototype,e),n&&uy(t,n),t}function kO(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Vh(t,e)}function Vh(t,e){return Vh=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Vh(t,e)}function OO(t){var e=PO();return function(){var r=hu(t),i;if(e){var s=hu(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return RO(this,i)}}function RO(t,e){return e&&(pa(e)==="object"||typeof e=="function")?e:Bh(t)}function Bh(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function PO(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function hu(t){return hu=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},hu(t)}function ly(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var DO=function(t){kO(n,t);var e=OO(n);function n(){var r;IO(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),ly(Bh(r),"priority",80),ly(Bh(r),"incompatibleTokens",["a","B","H","k","t","T"]),r}return CO(n,[{key:"parse",value:function(i,s,o){switch(s){case"b":case"bb":case"bbb":return o.dayPeriod(i,{width:"abbreviated",context:"formatting"})||o.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbbb":return o.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return o.dayPeriod(i,{width:"wide",context:"formatting"})||o.dayPeriod(i,{width:"abbreviated",context:"formatting"})||o.dayPeriod(i,{width:"narrow",context:"formatting"})}}},{key:"set",value:function(i,s,o){return i.setUTCHours(Ed(o),0,0,0),i}}]),n}(Ae);function ma(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ma=function(n){return typeof n}:ma=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ma(t)}function AO(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function cy(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function NO(t,e,n){return e&&cy(t.prototype,e),n&&cy(t,n),t}function xO(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&jh(t,e)}function jh(t,e){return jh=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},jh(t,e)}function MO(t){var e=LO();return function(){var r=fu(t),i;if(e){var s=fu(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return $O(this,i)}}function $O(t,e){return e&&(ma(e)==="object"||typeof e=="function")?e:Hh(t)}function Hh(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function LO(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function fu(t){return fu=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},fu(t)}function hy(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var UO=function(t){xO(n,t);var e=MO(n);function n(){var r;AO(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),hy(Hh(r),"priority",80),hy(Hh(r),"incompatibleTokens",["a","b","t","T"]),r}return NO(n,[{key:"parse",value:function(i,s,o){switch(s){case"B":case"BB":case"BBB":return o.dayPeriod(i,{width:"abbreviated",context:"formatting"})||o.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBBB":return o.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return o.dayPeriod(i,{width:"wide",context:"formatting"})||o.dayPeriod(i,{width:"abbreviated",context:"formatting"})||o.dayPeriod(i,{width:"narrow",context:"formatting"})}}},{key:"set",value:function(i,s,o){return i.setUTCHours(Ed(o),0,0,0),i}}]),n}(Ae);function ya(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ya=function(n){return typeof n}:ya=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ya(t)}function FO(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function fy(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function VO(t,e,n){return e&&fy(t.prototype,e),n&&fy(t,n),t}function BO(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&qh(t,e)}function qh(t,e){return qh=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},qh(t,e)}function jO(t){var e=qO();return function(){var r=du(t),i;if(e){var s=du(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return HO(this,i)}}function HO(t,e){return e&&(ya(e)==="object"||typeof e=="function")?e:Wh(t)}function Wh(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function qO(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function du(t){return du=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},du(t)}function dy(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var WO=function(t){BO(n,t);var e=jO(n);function n(){var r;FO(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),dy(Wh(r),"priority",70),dy(Wh(r),"incompatibleTokens",["H","K","k","t","T"]),r}return VO(n,[{key:"parse",value:function(i,s,o){switch(s){case"h":return Qe(rt.hour12h,i);case"ho":return o.ordinalNumber(i,{unit:"hour"});default:return Ze(s.length,i)}}},{key:"validate",value:function(i,s){return s>=1&&s<=12}},{key:"set",value:function(i,s,o){var a=i.getUTCHours()>=12;return a&&o<12?i.setUTCHours(o+12,0,0,0):!a&&o===12?i.setUTCHours(0,0,0,0):i.setUTCHours(o,0,0,0),i}}]),n}(Ae);function ga(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ga=function(n){return typeof n}:ga=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ga(t)}function YO(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function py(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function zO(t,e,n){return e&&py(t.prototype,e),n&&py(t,n),t}function KO(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Yh(t,e)}function Yh(t,e){return Yh=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Yh(t,e)}function GO(t){var e=XO();return function(){var r=pu(t),i;if(e){var s=pu(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return QO(this,i)}}function QO(t,e){return e&&(ga(e)==="object"||typeof e=="function")?e:zh(t)}function zh(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function XO(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function pu(t){return pu=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},pu(t)}function my(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var JO=function(t){KO(n,t);var e=GO(n);function n(){var r;YO(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),my(zh(r),"priority",70),my(zh(r),"incompatibleTokens",["a","b","h","K","k","t","T"]),r}return zO(n,[{key:"parse",value:function(i,s,o){switch(s){case"H":return Qe(rt.hour23h,i);case"Ho":return o.ordinalNumber(i,{unit:"hour"});default:return Ze(s.length,i)}}},{key:"validate",value:function(i,s){return s>=0&&s<=23}},{key:"set",value:function(i,s,o){return i.setUTCHours(o,0,0,0),i}}]),n}(Ae);function va(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?va=function(n){return typeof n}:va=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},va(t)}function ZO(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function yy(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function eR(t,e,n){return e&&yy(t.prototype,e),n&&yy(t,n),t}function tR(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Kh(t,e)}function Kh(t,e){return Kh=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Kh(t,e)}function nR(t){var e=iR();return function(){var r=mu(t),i;if(e){var s=mu(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return rR(this,i)}}function rR(t,e){return e&&(va(e)==="object"||typeof e=="function")?e:Gh(t)}function Gh(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function iR(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function mu(t){return mu=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},mu(t)}function gy(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var sR=function(t){tR(n,t);var e=nR(n);function n(){var r;ZO(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),gy(Gh(r),"priority",70),gy(Gh(r),"incompatibleTokens",["h","H","k","t","T"]),r}return eR(n,[{key:"parse",value:function(i,s,o){switch(s){case"K":return Qe(rt.hour11h,i);case"Ko":return o.ordinalNumber(i,{unit:"hour"});default:return Ze(s.length,i)}}},{key:"validate",value:function(i,s){return s>=0&&s<=11}},{key:"set",value:function(i,s,o){var a=i.getUTCHours()>=12;return a&&o<12?i.setUTCHours(o+12,0,0,0):i.setUTCHours(o,0,0,0),i}}]),n}(Ae);function _a(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_a=function(n){return typeof n}:_a=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_a(t)}function oR(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function vy(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function aR(t,e,n){return e&&vy(t.prototype,e),n&&vy(t,n),t}function uR(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Qh(t,e)}function Qh(t,e){return Qh=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Qh(t,e)}function lR(t){var e=hR();return function(){var r=yu(t),i;if(e){var s=yu(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return cR(this,i)}}function cR(t,e){return e&&(_a(e)==="object"||typeof e=="function")?e:Xh(t)}function Xh(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function hR(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function yu(t){return yu=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},yu(t)}function _y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var fR=function(t){uR(n,t);var e=lR(n);function n(){var r;oR(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),_y(Xh(r),"priority",70),_y(Xh(r),"incompatibleTokens",["a","b","h","H","K","t","T"]),r}return aR(n,[{key:"parse",value:function(i,s,o){switch(s){case"k":return Qe(rt.hour24h,i);case"ko":return o.ordinalNumber(i,{unit:"hour"});default:return Ze(s.length,i)}}},{key:"validate",value:function(i,s){return s>=1&&s<=24}},{key:"set",value:function(i,s,o){var a=o<=24?o%24:o;return i.setUTCHours(a,0,0,0),i}}]),n}(Ae);function wa(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?wa=function(n){return typeof n}:wa=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},wa(t)}function dR(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function wy(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function pR(t,e,n){return e&&wy(t.prototype,e),n&&wy(t,n),t}function mR(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Jh(t,e)}function Jh(t,e){return Jh=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Jh(t,e)}function yR(t){var e=vR();return function(){var r=gu(t),i;if(e){var s=gu(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return gR(this,i)}}function gR(t,e){return e&&(wa(e)==="object"||typeof e=="function")?e:Zh(t)}function Zh(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function vR(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function gu(t){return gu=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},gu(t)}function by(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var _R=function(t){mR(n,t);var e=yR(n);function n(){var r;dR(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),by(Zh(r),"priority",60),by(Zh(r),"incompatibleTokens",["t","T"]),r}return pR(n,[{key:"parse",value:function(i,s,o){switch(s){case"m":return Qe(rt.minute,i);case"mo":return o.ordinalNumber(i,{unit:"minute"});default:return Ze(s.length,i)}}},{key:"validate",value:function(i,s){return s>=0&&s<=59}},{key:"set",value:function(i,s,o){return i.setUTCMinutes(o,0,0),i}}]),n}(Ae);function ba(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ba=function(n){return typeof n}:ba=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ba(t)}function wR(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ty(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function bR(t,e,n){return e&&Ty(t.prototype,e),n&&Ty(t,n),t}function TR(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ef(t,e)}function ef(t,e){return ef=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},ef(t,e)}function SR(t){var e=IR();return function(){var r=vu(t),i;if(e){var s=vu(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return ER(this,i)}}function ER(t,e){return e&&(ba(e)==="object"||typeof e=="function")?e:tf(t)}function tf(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function IR(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function vu(t){return vu=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},vu(t)}function Sy(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var CR=function(t){TR(n,t);var e=SR(n);function n(){var r;wR(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),Sy(tf(r),"priority",50),Sy(tf(r),"incompatibleTokens",["t","T"]),r}return bR(n,[{key:"parse",value:function(i,s,o){switch(s){case"s":return Qe(rt.second,i);case"so":return o.ordinalNumber(i,{unit:"second"});default:return Ze(s.length,i)}}},{key:"validate",value:function(i,s){return s>=0&&s<=59}},{key:"set",value:function(i,s,o){return i.setUTCSeconds(o,0),i}}]),n}(Ae);function Ta(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ta=function(n){return typeof n}:Ta=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ta(t)}function kR(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ey(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function OR(t,e,n){return e&&Ey(t.prototype,e),n&&Ey(t,n),t}function RR(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&nf(t,e)}function nf(t,e){return nf=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},nf(t,e)}function PR(t){var e=AR();return function(){var r=_u(t),i;if(e){var s=_u(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return DR(this,i)}}function DR(t,e){return e&&(Ta(e)==="object"||typeof e=="function")?e:rf(t)}function rf(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function AR(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function _u(t){return _u=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},_u(t)}function Iy(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var NR=function(t){RR(n,t);var e=PR(n);function n(){var r;kR(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),Iy(rf(r),"priority",30),Iy(rf(r),"incompatibleTokens",["t","T"]),r}return OR(n,[{key:"parse",value:function(i,s){var o=function(u){return Math.floor(u*Math.pow(10,-s.length+3))};return it(Ze(s.length,i),o)}},{key:"set",value:function(i,s,o){return i.setUTCMilliseconds(o),i}}]),n}(Ae);function Sa(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Sa=function(n){return typeof n}:Sa=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Sa(t)}function xR(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Cy(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function MR(t,e,n){return e&&Cy(t.prototype,e),n&&Cy(t,n),t}function $R(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&sf(t,e)}function sf(t,e){return sf=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},sf(t,e)}function LR(t){var e=FR();return function(){var r=wu(t),i;if(e){var s=wu(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return UR(this,i)}}function UR(t,e){return e&&(Sa(e)==="object"||typeof e=="function")?e:of(t)}function of(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function FR(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function wu(t){return wu=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},wu(t)}function ky(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var VR=function(t){$R(n,t);var e=LR(n);function n(){var r;xR(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),ky(of(r),"priority",10),ky(of(r),"incompatibleTokens",["t","T","x"]),r}return MR(n,[{key:"parse",value:function(i,s){switch(s){case"X":return wn(_n.basicOptionalMinutes,i);case"XX":return wn(_n.basic,i);case"XXXX":return wn(_n.basicOptionalSeconds,i);case"XXXXX":return wn(_n.extendedOptionalSeconds,i);case"XXX":default:return wn(_n.extended,i)}}},{key:"set",value:function(i,s,o){return s.timestampIsSet?i:new Date(i.getTime()-o)}}]),n}(Ae);function Ea(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ea=function(n){return typeof n}:Ea=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ea(t)}function BR(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Oy(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function jR(t,e,n){return e&&Oy(t.prototype,e),n&&Oy(t,n),t}function HR(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&af(t,e)}function af(t,e){return af=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},af(t,e)}function qR(t){var e=YR();return function(){var r=bu(t),i;if(e){var s=bu(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return WR(this,i)}}function WR(t,e){return e&&(Ea(e)==="object"||typeof e=="function")?e:uf(t)}function uf(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function YR(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function bu(t){return bu=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},bu(t)}function Ry(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var zR=function(t){HR(n,t);var e=qR(n);function n(){var r;BR(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),Ry(uf(r),"priority",10),Ry(uf(r),"incompatibleTokens",["t","T","X"]),r}return jR(n,[{key:"parse",value:function(i,s){switch(s){case"x":return wn(_n.basicOptionalMinutes,i);case"xx":return wn(_n.basic,i);case"xxxx":return wn(_n.basicOptionalSeconds,i);case"xxxxx":return wn(_n.extendedOptionalSeconds,i);case"xxx":default:return wn(_n.extended,i)}}},{key:"set",value:function(i,s,o){return s.timestampIsSet?i:new Date(i.getTime()-o)}}]),n}(Ae);function Ia(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ia=function(n){return typeof n}:Ia=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ia(t)}function KR(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Py(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function GR(t,e,n){return e&&Py(t.prototype,e),n&&Py(t,n),t}function QR(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&lf(t,e)}function lf(t,e){return lf=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},lf(t,e)}function XR(t){var e=ZR();return function(){var r=Tu(t),i;if(e){var s=Tu(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return JR(this,i)}}function JR(t,e){return e&&(Ia(e)==="object"||typeof e=="function")?e:cf(t)}function cf(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ZR(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Tu(t){return Tu=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Tu(t)}function Dy(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var eP=function(t){QR(n,t);var e=XR(n);function n(){var r;KR(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),Dy(cf(r),"priority",40),Dy(cf(r),"incompatibleTokens","*"),r}return GR(n,[{key:"parse",value:function(i){return O_(i)}},{key:"set",value:function(i,s,o){return[new Date(o*1e3),{timestampIsSet:!0}]}}]),n}(Ae);function Ca(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ca=function(n){return typeof n}:Ca=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ca(t)}function tP(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ay(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function nP(t,e,n){return e&&Ay(t.prototype,e),n&&Ay(t,n),t}function rP(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&hf(t,e)}function hf(t,e){return hf=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},hf(t,e)}function iP(t){var e=oP();return function(){var r=Su(t),i;if(e){var s=Su(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return sP(this,i)}}function sP(t,e){return e&&(Ca(e)==="object"||typeof e=="function")?e:ff(t)}function ff(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function oP(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Su(t){return Su=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Su(t)}function Ny(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var aP=function(t){rP(n,t);var e=iP(n);function n(){var r;tP(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),Ny(ff(r),"priority",20),Ny(ff(r),"incompatibleTokens","*"),r}return nP(n,[{key:"parse",value:function(i){return O_(i)}},{key:"set",value:function(i,s,o){return[new Date(o),{timestampIsSet:!0}]}}]),n}(Ae),uP={G:new uC,y:new mC,Y:new TC,R:new RC,u:new $C,Q:new HC,q:new QC,M:new rk,L:new ck,w:new vk,I:new Ck,d:new Mk,D:new jk,E:new Gk,e:new nO,c:new lO,i:new gO,a:new EO,b:new DO,B:new UO,h:new WO,H:new JO,K:new sR,k:new fR,m:new _R,s:new CR,S:new NR,X:new VR,x:new zR,t:new eP,T:new aP};function ka(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ka=function(n){return typeof n}:ka=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ka(t)}function xy(t,e){var n;if(typeof Symbol>"u"||t[Symbol.iterator]==null){if(Array.isArray(t)||(n=lP(t))||e&&t&&typeof t.length=="number"){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s=!0,o=!1,a;return{s:function(){n=t[Symbol.iterator]()},n:function(){var l=n.next();return s=l.done,l},e:function(l){o=!0,a=l},f:function(){try{!s&&n.return!=null&&n.return()}finally{if(o)throw a}}}}function lP(t,e){if(!!t){if(typeof t=="string")return My(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return My(t,e)}}function My(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var cP=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,hP=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,fP=/^'([^]*?)'?$/,dP=/''/g,pP=/\S/,mP=/[a-zA-Z]/;function df(t,e,n,r){var i,s,o,a,u,l,h,c,f,p,m,T,P,D,S,H,W,Q;ne(3,arguments);var v=String(t),k=String(e),U=gr(),Y=(i=(s=r==null?void 0:r.locale)!==null&&s!==void 0?s:U.locale)!==null&&i!==void 0?i:S_;if(!Y.match)throw new RangeError("locale must contain match property");var re=ue((o=(a=(u=(l=r==null?void 0:r.firstWeekContainsDate)!==null&&l!==void 0?l:r==null||(h=r.locale)===null||h===void 0||(c=h.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&u!==void 0?u:U.firstWeekContainsDate)!==null&&a!==void 0?a:(f=U.locale)===null||f===void 0||(p=f.options)===null||p===void 0?void 0:p.firstWeekContainsDate)!==null&&o!==void 0?o:1);if(!(re>=1&&re<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var V=ue((m=(T=(P=(D=r==null?void 0:r.weekStartsOn)!==null&&D!==void 0?D:r==null||(S=r.locale)===null||S===void 0||(H=S.options)===null||H===void 0?void 0:H.weekStartsOn)!==null&&P!==void 0?P:U.weekStartsOn)!==null&&T!==void 0?T:(W=U.locale)===null||W===void 0||(Q=W.options)===null||Q===void 0?void 0:Q.weekStartsOn)!==null&&m!==void 0?m:0);if(!(V>=0&&V<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(k==="")return v===""?he(n):new Date(NaN);var J={firstWeekContainsDate:re,weekStartsOn:V,locale:Y},E=[new Z1],w=k.match(hP).map(function($e){var z=$e[0];if(z in nh){var tt=nh[z];return tt($e,Y.formatLong)}return $e}).join("").match(cP),R=[],A=xy(w),d;try{var b=function(){var z=d.value;!(r!=null&&r.useAdditionalWeekYearTokens)&&T_(z)&&qa(z,k,t),!(r!=null&&r.useAdditionalDayOfYearTokens)&&b_(z)&&qa(z,k,t);var tt=z[0],Qt=uP[tt];if(Qt){var le=Qt.incompatibleTokens;if(Array.isArray(le)){var at=R.find(function(gn){return le.includes(gn.token)||gn.token===tt});if(at)throw new RangeError("The format string mustn't contain `".concat(at.fullToken,"` and `").concat(z,"` at the same time"))}else if(Qt.incompatibleTokens==="*"&&R.length>0)throw new RangeError("The format string mustn't contain `".concat(z,"` and any other token at the same time"));R.push({token:tt,fullToken:z});var Xe=Qt.run(v,z,Y.match,J);if(!Xe)return{v:new Date(NaN)};E.push(Xe.setter),v=Xe.rest}else{if(tt.match(mP))throw new RangeError("Format string contains an unescaped latin alphabet character `"+tt+"`");if(z==="''"?z="'":tt==="'"&&(z=yP(z)),v.indexOf(z)===0)v=v.slice(z.length);else return{v:new Date(NaN)}}};for(A.s();!(d=A.n()).done;){var O=b();if(ka(O)==="object")return O.v}}catch($e){A.e($e)}finally{A.f()}if(v.length>0&&pP.test(v))return new Date(NaN);var B=E.map(function($e){return $e.priority}).sort(function($e,z){return z-$e}).filter(function($e,z,tt){return tt.indexOf($e)===z}).map(function($e){return E.filter(function(z){return z.priority===$e}).sort(function(z,tt){return tt.subPriority-z.subPriority})}).map(function($e){return $e[0]}),G=he(n);if(isNaN(G.getTime()))return new Date(NaN);var y=y_(G,Ha(G)),N={},fe=xy(B),Ee;try{for(fe.s();!(Ee=fe.n()).done;){var we=Ee.value;if(!we.validate(y,J))return new Date(NaN);var gt=we.set(y,N,J);Array.isArray(gt)?(y=gt[0],q1(N,gt[1])):y=gt}}catch($e){fe.e($e)}finally{fe.f()}return y}function yP(t){return t.match(fP)[1].replace(dP,"'")}function gP(t,e){ne(2,arguments);var n=ue(e);return sr(t,-n)}function vP(t,e){var n;ne(1,arguments);var r=ue((n=e==null?void 0:e.additionalDigits)!==null&&n!==void 0?n:2);if(r!==2&&r!==1&&r!==0)throw new RangeError("additionalDigits must be 0, 1 or 2");if(!(typeof t=="string"||Object.prototype.toString.call(t)==="[object String]"))return new Date(NaN);var i=TP(t),s;if(i.date){var o=SP(i.date,r);s=EP(o.restDateString,o.year)}if(!s||isNaN(s.getTime()))return new Date(NaN);var a=s.getTime(),u=0,l;if(i.time&&(u=IP(i.time),isNaN(u)))return new Date(NaN);if(i.timezone){if(l=CP(i.timezone),isNaN(l))return new Date(NaN)}else{var h=new Date(a+u),c=new Date(0);return c.setFullYear(h.getUTCFullYear(),h.getUTCMonth(),h.getUTCDate()),c.setHours(h.getUTCHours(),h.getUTCMinutes(),h.getUTCSeconds(),h.getUTCMilliseconds()),c}return new Date(a+u+l)}var Io={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},_P=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,wP=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,bP=/^([+-])(\d{2})(?::?(\d{2}))?$/;function TP(t){var e={},n=t.split(Io.dateTimeDelimiter),r;if(n.length>2)return e;if(/:/.test(n[0])?r=n[0]:(e.date=n[0],r=n[1],Io.timeZoneDelimiter.test(e.date)&&(e.date=t.split(Io.timeZoneDelimiter)[0],r=t.substr(e.date.length,t.length))),r){var i=Io.timezone.exec(r);i?(e.time=r.replace(i[1],""),e.timezone=i[1]):e.time=r}return e}function SP(t,e){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=t.match(n);if(!r)return{year:NaN,restDateString:""};var i=r[1]?parseInt(r[1]):null,s=r[2]?parseInt(r[2]):null;return{year:s===null?i:s*100,restDateString:t.slice((r[1]||r[2]).length)}}function EP(t,e){if(e===null)return new Date(NaN);var n=t.match(_P);if(!n)return new Date(NaN);var r=!!n[4],i=es(n[1]),s=es(n[2])-1,o=es(n[3]),a=es(n[4]),u=es(n[5])-1;if(r)return DP(e,a,u)?kP(e,a,u):new Date(NaN);var l=new Date(0);return!RP(e,s,o)||!PP(e,i)?new Date(NaN):(l.setUTCFullYear(e,s,Math.max(i,o)),l)}function es(t){return t?parseInt(t):1}function IP(t){var e=t.match(wP);if(!e)return NaN;var n=oc(e[1]),r=oc(e[2]),i=oc(e[3]);return AP(n,r,i)?n*vd+r*gd+i*1e3:NaN}function oc(t){return t&&parseFloat(t.replace(",","."))||0}function CP(t){if(t==="Z")return 0;var e=t.match(bP);if(!e)return 0;var n=e[1]==="+"?-1:1,r=parseInt(e[2]),i=e[3]&&parseInt(e[3])||0;return NP(r,i)?n*(r*vd+i*gd):NaN}function kP(t,e,n){var r=new Date(0);r.setUTCFullYear(t,0,4);var i=r.getUTCDay()||7,s=(e-1)*7+n+1-i;return r.setUTCDate(r.getUTCDate()+s),r}var OP=[31,null,31,30,31,30,31,31,30,31,30,31];function D_(t){return t%400===0||t%4===0&&t%100!==0}function RP(t,e,n){return e>=0&&e<=11&&n>=1&&n<=(OP[e]||(D_(t)?29:28))}function PP(t,e){return e>=1&&e<=(D_(t)?366:365)}function DP(t,e,n){return e>=1&&e<=53&&n>=0&&n<=6}function AP(t,e,n){return t===24?e===0&&n===0:n>=0&&n<60&&e>=0&&e<60&&t>=0&&t<25}function NP(t,e){return e>=0&&e<=59}function ds(t,e){ne(2,arguments);var n=he(t),r=ue(e),i=n.getFullYear(),s=n.getDate(),o=new Date(0);o.setFullYear(i,r,15),o.setHours(0,0,0,0);var a=Y1(o);return n.setMonth(r,Math.min(s,a)),n}function Oa(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Oa=function(n){return typeof n}:Oa=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Oa(t)}function Ft(t,e){if(ne(2,arguments),Oa(e)!=="object"||e===null)throw new RangeError("values parameter must be an object");var n=he(t);return isNaN(n.getTime())?new Date(NaN):(e.year!=null&&n.setFullYear(e.year),e.month!=null&&(n=ds(n,e.month)),e.date!=null&&n.setDate(ue(e.date)),e.hours!=null&&n.setHours(ue(e.hours)),e.minutes!=null&&n.setMinutes(ue(e.minutes)),e.seconds!=null&&n.setSeconds(ue(e.seconds)),e.milliseconds!=null&&n.setMilliseconds(ue(e.milliseconds)),n)}function A_(t,e){ne(2,arguments);var n=he(t),r=ue(e);return n.setHours(r),n}function Cd(t,e){ne(2,arguments);var n=he(t),r=ue(e);return n.setMilliseconds(r),n}function N_(t,e){ne(2,arguments);var n=he(t),r=ue(e);return n.setMinutes(r),n}function x_(t,e){ne(2,arguments);var n=he(t),r=ue(e);return n.setSeconds(r),n}function Lr(t,e){ne(2,arguments);var n=he(t),r=ue(e);return isNaN(n.getTime())?new Date(NaN):(n.setFullYear(r),n)}function vi(t,e){ne(2,arguments);var n=ue(e);return Tn(t,-n)}function Ra(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ra=function(n){return typeof n}:Ra=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ra(t)}function xP(t,e){if(ne(2,arguments),!e||Ra(e)!=="object")return new Date(NaN);var n=e.years?ue(e.years):0,r=e.months?ue(e.months):0,i=e.weeks?ue(e.weeks):0,s=e.days?ue(e.days):0,o=e.hours?ue(e.hours):0,a=e.minutes?ue(e.minutes):0,u=e.seconds?ue(e.seconds):0,l=vi(t,r+n*12),h=gP(l,s+i*7),c=a+o*60,f=u+c*60,p=f*1e3,m=new Date(h.getTime()-p);return m}function MP(t,e){ne(2,arguments);var n=ue(e);return p_(t,-n)}const Zr=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},$P={},LP={version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",class:"dp__icon"},UP=ye("path",{d:"M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"},null,-1),FP=ye("path",{d:"M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"},null,-1),VP=ye("path",{d:"M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"},null,-1),BP=ye("path",{d:"M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"},null,-1),jP=[UP,FP,VP,BP];function HP(t,e){return C(),j("svg",LP,jP)}const ol=Zr($P,[["render",HP]]),qP={},WP={version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",class:"dp__icon"},YP=ye("path",{d:"M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"},null,-1),zP=ye("path",{d:"M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"},null,-1),KP=[YP,zP];function GP(t,e){return C(),j("svg",WP,KP)}const QP=Zr(qP,[["render",GP]]),XP={},JP={version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",class:"dp__icon"},ZP=ye("path",{d:"M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"},null,-1),eD=[ZP];function tD(t,e){return C(),j("svg",JP,eD)}const $y=Zr(XP,[["render",tD]]),nD={},rD={version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",class:"dp__icon"},iD=ye("path",{d:"M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"},null,-1),sD=[iD];function oD(t,e){return C(),j("svg",rD,sD)}const Ly=Zr(nD,[["render",oD]]),aD={},uD={version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",class:"dp__icon"},lD=ye("path",{d:"M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"},null,-1),cD=ye("path",{d:"M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"},null,-1),hD=[lD,cD];function fD(t,e){return C(),j("svg",uD,hD)}const M_=Zr(aD,[["render",fD]]),dD={},pD={version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",class:"dp__icon"},mD=ye("path",{d:"M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"},null,-1),yD=[mD];function gD(t,e){return C(),j("svg",pD,yD)}const $_=Zr(dD,[["render",gD]]),vD={},_D={version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",class:"dp__icon"},wD=ye("path",{d:"M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"},null,-1),bD=[wD];function TD(t,e){return C(),j("svg",_D,bD)}const L_=Zr(vD,[["render",TD]]),Uy=(t,e)=>{const n=df(t,e.slice(0,t.length),new Date);return hs(n)&&m_(n)?n:null},SD=(t,e)=>{if(typeof e=="string")return Uy(t,e);if(Array.isArray(e)){let n=null;for(const r of e)if(n=Uy(t,r),n)break;return n}return typeof e=="function"?e(t):null},M=t=>t?new Date(t):new Date,ED=(t,e)=>{if(e){const r=(t.getMonth()+1).toString().padStart(2,"0"),i=t.getDate().toString().padStart(2,"0"),s=t.getHours().toString().padStart(2,"0"),o=t.getMinutes().toString().padStart(2,"0");return`${t.getFullYear()}-${r}-${i}T${s}:${o}:00.000Z`}const n=Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds());return new Date(n).toISOString()},On=t=>{let e=M(JSON.parse(JSON.stringify(t)));return e=A_(e,0),e=N_(e,0),e=x_(e,0),e=Cd(e,0),e},en=(t,e,n,r)=>{let i=t?M(t):M();return(e||e===0)&&(i=A_(i,+e)),(n||n===0)&&(i=N_(i,+n)),(r||r===0)&&(i=x_(i,+r)),Cd(i,0)},Pt=(t,e)=>!t||!e?!1:bd(On(t),On(e)),We=(t,e)=>!t||!e?!1:E_(On(t),On(e)),Bt=(t,e)=>!t||!e?!1:wd(On(t),On(e)),U_=(t,e,n)=>t&&t[0]&&t[1]?Bt(n,t[0])&&Pt(n,t[1]):t&&t[0]&&e?Bt(n,t[0])&&Pt(n,e)||Pt(n,t[0])&&Bt(n,e):!1,ts=cr({menuFocused:!1,shiftKeyInMenu:!1}),F_=()=>{const t=n=>{ts.menuFocused=n},e=n=>{ts.shiftKeyInMenu!==n&&(ts.shiftKeyInMenu=n)};return{control:K(()=>({shiftKeyInMenu:ts.shiftKeyInMenu,menuFocused:ts.menuFocused})),setMenuFocused:t,setShiftKey:e}};function kd(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var pf={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){if(r===null||r===!0||r===!1)return NaN;var i=Number(r);return isNaN(i)?i:i<0?Math.ceil(i):Math.floor(i)}t.exports=e.default})(pf,pf.exports);const ID=kd(pf.exports);var mf={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){var i=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return i.setUTCFullYear(r.getFullYear()),r.getTime()-i.getTime()}t.exports=e.default})(mf,mf.exports);const Fy=kd(mf.exports);function CD(t,e){var n=PD(e);return n.formatToParts?OD(n,t):RD(n,t)}var kD={year:0,month:1,day:2,hour:3,minute:4,second:5};function OD(t,e){try{for(var n=t.formatToParts(e),r=[],i=0;i<n.length;i++){var s=kD[n[i].type];s>=0&&(r[s]=parseInt(n[i].value,10))}return r}catch(o){if(o instanceof RangeError)return[NaN];throw o}}function RD(t,e){var n=t.format(e).replace(/\u200E/g,""),r=/(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n);return[r[3],r[1],r[2],r[4],r[5],r[6]]}var ac={};function PD(t){if(!ac[t]){var e=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:"America/New_York",year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(new Date("2014-06-25T04:00:00.123Z")),n=e==="06/25/2014, 00:00:00"||e==="\u200E06\u200E/\u200E25\u200E/\u200E2014\u200E \u200E00\u200E:\u200E00\u200E:\u200E00";ac[t]=n?new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}):new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:t,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})}return ac[t]}function Od(t,e,n,r,i,s,o){var a=new Date(0);return a.setUTCFullYear(t,e,n),a.setUTCHours(r,i,s,o),a}var Vy=36e5,DD=6e4,uc={timezone:/([Z+-].*)$/,timezoneZ:/^(Z)$/,timezoneHH:/^([+-]\d{2})$/,timezoneHHMM:/^([+-]\d{2}):?(\d{2})$/};function Rd(t,e,n){var r,i;if(t===""||(r=uc.timezoneZ.exec(t),r))return 0;var s;if(r=uc.timezoneHH.exec(t),r)return s=parseInt(r[1],10),By(s)?-(s*Vy):NaN;if(r=uc.timezoneHHMM.exec(t),r){s=parseInt(r[1],10);var o=parseInt(r[2],10);return By(s,o)?(i=Math.abs(s)*Vy+o*DD,s>0?-i:i):NaN}if(xD(t)){e=new Date(e||Date.now());var a=n?e:AD(e),u=yf(a,t),l=n?u:ND(e,u,t);return-l}return NaN}function AD(t){return Od(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds())}function yf(t,e){var n=CD(t,e),r=Od(n[0],n[1]-1,n[2],n[3]%24,n[4],n[5],0).getTime(),i=t.getTime(),s=i%1e3;return i-=s>=0?s:1e3+s,r-i}function ND(t,e,n){var r=t.getTime(),i=r-e,s=yf(new Date(i),n);if(e===s)return e;i-=s-e;var o=yf(new Date(i),n);return s===o?s:Math.max(s,o)}function By(t,e){return-23<=t&&t<=23&&(e==null||0<=e&&e<=59)}var jy={};function xD(t){if(jy[t])return!0;try{return new Intl.DateTimeFormat(void 0,{timeZone:t}),jy[t]=!0,!0}catch{return!1}}var V_=/(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/,lc=36e5,Hy=6e4,MD=2,Vt={dateTimePattern:/^([0-9W+-]+)(T| )(.*)/,datePattern:/^([0-9W+-]+)(.*)/,plainTime:/:/,YY:/^(\d{2})$/,YYY:[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],YYYY:/^(\d{4})/,YYYYY:[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],MM:/^-(\d{2})$/,DDD:/^-?(\d{3})$/,MMDD:/^-?(\d{2})-?(\d{2})$/,Www:/^-?W(\d{2})$/,WwwD:/^-?W(\d{2})-?(\d{1})$/,HH:/^(\d{2}([.,]\d*)?)$/,HHMM:/^(\d{2}):?(\d{2}([.,]\d*)?)$/,HHMMSS:/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,timeZone:V_};function gf(t,e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");if(t===null)return new Date(NaN);var n=e||{},r=n.additionalDigits==null?MD:ID(n.additionalDigits);if(r!==2&&r!==1&&r!==0)throw new RangeError("additionalDigits must be 0, 1 or 2");if(t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]")return new Date(t.getTime());if(typeof t=="number"||Object.prototype.toString.call(t)==="[object Number]")return new Date(t);if(!(typeof t=="string"||Object.prototype.toString.call(t)==="[object String]"))return new Date(NaN);var i=$D(t),s=LD(i.date,r),o=s.year,a=s.restDateString,u=UD(a,o);if(isNaN(u))return new Date(NaN);if(u){var l=u.getTime(),h=0,c;if(i.time&&(h=FD(i.time),isNaN(h)))return new Date(NaN);if(i.timeZone||n.timeZone){if(c=Rd(i.timeZone||n.timeZone,new Date(l+h)),isNaN(c))return new Date(NaN)}else c=Fy(new Date(l+h)),c=Fy(new Date(l+h+c));return new Date(l+h+c)}else return new Date(NaN)}function $D(t){var e={},n=Vt.dateTimePattern.exec(t),r;if(n?(e.date=n[1],r=n[3]):(n=Vt.datePattern.exec(t),n?(e.date=n[1],r=n[2]):(e.date=null,r=t)),r){var i=Vt.timeZone.exec(r);i?(e.time=r.replace(i[1],""),e.timeZone=i[1].trim()):e.time=r}return e}function LD(t,e){var n=Vt.YYY[e],r=Vt.YYYYY[e],i;if(i=Vt.YYYY.exec(t)||r.exec(t),i){var s=i[1];return{year:parseInt(s,10),restDateString:t.slice(s.length)}}if(i=Vt.YY.exec(t)||n.exec(t),i){var o=i[1];return{year:parseInt(o,10)*100,restDateString:t.slice(o.length)}}return{year:null}}function UD(t,e){if(e===null)return null;var n,r,i,s;if(t.length===0)return r=new Date(0),r.setUTCFullYear(e),r;if(n=Vt.MM.exec(t),n)return r=new Date(0),i=parseInt(n[1],10)-1,Wy(e,i)?(r.setUTCFullYear(e,i),r):new Date(NaN);if(n=Vt.DDD.exec(t),n){r=new Date(0);var o=parseInt(n[1],10);return jD(e,o)?(r.setUTCFullYear(e,0,o),r):new Date(NaN)}if(n=Vt.MMDD.exec(t),n){r=new Date(0),i=parseInt(n[1],10)-1;var a=parseInt(n[2],10);return Wy(e,i,a)?(r.setUTCFullYear(e,i,a),r):new Date(NaN)}if(n=Vt.Www.exec(t),n)return s=parseInt(n[1],10)-1,Yy(e,s)?qy(e,s):new Date(NaN);if(n=Vt.WwwD.exec(t),n){s=parseInt(n[1],10)-1;var u=parseInt(n[2],10)-1;return Yy(e,s,u)?qy(e,s,u):new Date(NaN)}return null}function FD(t){var e,n,r;if(e=Vt.HH.exec(t),e)return n=parseFloat(e[1].replace(",",".")),cc(n)?n%24*lc:NaN;if(e=Vt.HHMM.exec(t),e)return n=parseInt(e[1],10),r=parseFloat(e[2].replace(",",".")),cc(n,r)?n%24*lc+r*Hy:NaN;if(e=Vt.HHMMSS.exec(t),e){n=parseInt(e[1],10),r=parseInt(e[2],10);var i=parseFloat(e[3].replace(",","."));return cc(n,r,i)?n%24*lc+r*Hy+i*1e3:NaN}return null}function qy(t,e,n){e=e||0,n=n||0;var r=new Date(0);r.setUTCFullYear(t,0,4);var i=r.getUTCDay()||7,s=e*7+n+1-i;return r.setUTCDate(r.getUTCDate()+s),r}var VD=[31,28,31,30,31,30,31,31,30,31,30,31],BD=[31,29,31,30,31,30,31,31,30,31,30,31];function B_(t){return t%400===0||t%4===0&&t%100!==0}function Wy(t,e,n){if(e<0||e>11)return!1;if(n!=null){if(n<1)return!1;var r=B_(t);if(r&&n>BD[e]||!r&&n>VD[e])return!1}return!0}function jD(t,e){if(e<1)return!1;var n=B_(t);return!(n&&e>366||!n&&e>365)}function Yy(t,e,n){return!(e<0||e>52||n!=null&&(n<0||n>6))}function cc(t,e,n){return!(t!=null&&(t<0||t>=25)||e!=null&&(e<0||e>=60)||n!=null&&(n<0||n>=60))}var vf={exports:{}},_f={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r,i){if(r==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s]);return r}t.exports=e.default})(_f,_f.exports);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var n=r(_f.exports);function r(s){return s&&s.__esModule?s:{default:s}}function i(s){return(0,n.default)({},s)}t.exports=e.default})(vf,vf.exports);const HD=kd(vf.exports);function qD(t,e,n){var r=gf(t,n),i=Rd(e,r,!0),s=new Date(r.getTime()-i),o=new Date(0);return o.setFullYear(s.getUTCFullYear(),s.getUTCMonth(),s.getUTCDate()),o.setHours(s.getUTCHours(),s.getUTCMinutes(),s.getUTCSeconds(),s.getUTCMilliseconds()),o}function WD(t,e,n){if(typeof t=="string"&&!t.match(V_)){var r=HD(n);return r.timeZone=e,gf(t,r)}var i=gf(t,n),s=Od(i.getFullYear(),i.getMonth(),i.getDate(),i.getHours(),i.getMinutes(),i.getSeconds(),i.getMilliseconds()).getTime(),o=Rd(e,new Date(s));return new Date(s+o)}const YD=(t,e=3)=>{const n=[];for(let r=0;r<t.length;r+=e)n.push([t[r],t[r+1],t[r+2]]);return n},zD=(t,e)=>{const n=[1,2,3,4,5,6,7].map(s=>new Intl.DateTimeFormat(t,{weekday:"short",timeZone:"UTC"}).format(new Date(`2017-01-0${s}T00:00:00+00:00`)).slice(0,2)),r=n.slice(0,e),i=n.slice(e+1,n.length);return[n[e]].concat(...i).concat(...r)},KD=t=>{const e=[];for(let n=+t[0];n<=+t[1];n++)e.push({value:+n,text:`${n}`});return e},GD=(t,e)=>{const n=new Intl.DateTimeFormat(t,{month:e,timeZone:"UTC"});return[1,2,3,4,5,6,7,8,9,10,11,12].map(r=>{const i=r<10?`0${r}`:r;return new Date(`2017-${i}-01T00:00:00+00:00`)}).map((r,i)=>({text:n.format(r),value:i}))},QD=t=>[12,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11][t],St=t=>{var e;const n=_(t);return(e=n==null?void 0:n.$el)!=null?e:n},XD=t=>Object.assign({type:"dot"},t),j_=t=>Array.isArray(t)?!!t[0]&&!!t[1]:!1,Eu={prop:t=>`"${t}" prop must be enabled!`,dateArr:t=>`You need to use array as "model-value" binding in order to support "${t}"`},Ct=t=>t,zy=t=>Object.assign({menuAppear:"dp-menu-appear",open:"dp-slide-down",close:"dp-slide-up",next:"calendar-next",previous:"calendar-prev",vNext:"dp-slide-up",vPrevious:"dp-slide-down"},t),JD=t=>Object.assign({toggleOverlay:"Toggle overlay",menu:"Datepicker menu",input:"Datepicker input",calendarWrap:"Calendar wrapper",calendarDays:"Calendar days",openTimePicker:"Open time picker",closeTimePicker:"Close time Picker",incrementValue:e=>`Increment ${e}`,decrementValue:e=>`Decrement ${e}`,openTpOverlay:e=>`Open ${e} overlay`,amPmButton:"Switch AM/PM mode",openYearsOverlay:"Open years overlay",openMonthsOverlay:"Open months overlay",nextMonth:"Next month",prevMonth:"Previous month",day:()=>""},t),ZD=t=>t===null?0:typeof t=="boolean"?t?2:0:+t>=2?+t:2,eA=(t,e,n)=>t||(typeof n=="string"?n:e),tA=t=>typeof t=="boolean"?t?zy({}):!1:zy(t),nA=()=>({enterSubmit:!0,tabSubmit:!0,openMenu:!0,rangeSeparator:" - "}),rA=t=>Object.assign({months:[],years:[],times:{hours:[],minutes:[],seconds:[]}},t),Zt=t=>{const e=()=>{if(t.partialRange)return null;throw new Error(Eu.prop("partial-range"))},n=K(()=>({ariaLabels:JD(t.ariaLabels),textInputOptions:Object.assign(nA(),t.textInputOptions),multiCalendars:ZD(t.multiCalendars),previewFormat:eA(t.previewFormat,t.format,s()),filters:rA(t.filters),transitions:tA(t.transitions),startTime:f()})),r=d=>{if(t.range)return d();throw new Error(Eu.prop("range"))},i=()=>{const d=t.enableSeconds?":ss":"";return t.is24?`HH:mm${d}`:`hh:mm${d} aa`},s=()=>t.format?t.format:t.monthPicker?"MM/yyyy":t.timePicker?i():t.weekPicker?"MM/dd/yyyy":t.yearPicker?"yyyy":t.enableTimePicker?`MM/dd/yyyy, ${i()}`:"MM/dd/yyyy",o=(d,b)=>{if(typeof t.format=="function")return t.format(d);const O=b||s(),B=t.formatLocale?{locale:t.formatLocale}:void 0;return Array.isArray(d)?`${fs(d[0],O,B)} ${t.modelAuto&&!d[1]?"":n.value.textInputOptions.rangeSeparator||"-"} ${d[1]?fs(d[1],O,B):""}`:fs(d,O,B)},a=d=>t.timezone?qD(d,t.timezone):d,u=d=>t.timezone?WD(d,t.timezone):d,l=K(()=>d=>{var b;return(b=t.hideNavigation)==null?void 0:b.includes(d)}),h=d=>{const b=t.maxDate?Bt(a(d),a(M(t.maxDate))):!1,O=t.minDate?Pt(a(d),a(M(t.minDate))):!1,B=D(d,t.disabledDates),G=n.value.filters.months.map(we=>+we).includes(ze(d)),y=t.disabledWeekDays.length?t.disabledWeekDays.some(we=>+we===W1(d)):!1,N=t.allowedDates.length?!t.allowedDates.some(we=>We(a(M(we)),a(d))):!1,fe=Ke(d),Ee=fe<+t.yearRange[0]||fe>+t.yearRange[1];return!(b||O||B||G||Ee||y||N)},c=d=>{const b={hours:Nn(M()),minutes:xn(M()),seconds:Ci(M())};return Object.assign(b,d)},f=()=>t.range?t.startTime&&Array.isArray(t.startTime)?[c(t.startTime[0]),c(t.startTime[1])]:null:t.startTime&&!Array.isArray(t.startTime)?c(t.startTime):null,p=d=>!h(d),m=d=>Array.isArray(d)?hs(d[0])&&(d[1]?hs(d[1]):!0):d?hs(d):!1,T=d=>d instanceof Date?d:vP(d),P=d=>{const b=th(a(d),{weekStartsOn:+t.weekStart}),O=VI(a(d),{weekStartsOn:+t.weekStart});return[b,O]},D=(d,b)=>Array.isArray(b)?b.some(O=>We(a(M(O)),a(d))):b(d),S=(d,b,O)=>{let B=d?M(d):M();return(b||b===0)&&(B=ds(B,b)),O&&(B=Lr(B,O)),B},H=d=>Ft(M(),{hours:Nn(d),minutes:xn(d),seconds:Ci(d)}),W=d=>Ft(M(),{hours:+d.hours||0,minutes:+d.minutes||0,seconds:+d.seconds||0}),Q=(d,b,O,B)=>{if(!d)return!0;if(B){const G=O==="max"?bd(d,b):wd(d,b),y={seconds:0,milliseconds:0};return G||E_(Ft(d,y),Ft(b,y))}return O==="max"?d.getTime()<=b.getTime():d.getTime()>=b.getTime()},v=()=>!t.enableTimePicker||t.monthPicker||t.yearPicker||t.ignoreTimeValidation,k=d=>Array.isArray(d)?[d[0]?H(d[0]):null,d[1]?H(d[1]):null]:H(d),U=d=>{const b=t.maxTime?W(t.maxTime):M(t.maxDate);return Array.isArray(d)?Q(d[0],b,"max",!!t.maxDate)&&Q(d[1],b,"max",!!t.maxDate):Q(d,b,"max",!!t.maxDate)},Y=(d,b)=>{const O=t.minTime?W(t.minTime):M(t.minDate);return Array.isArray(d)?Q(d[0],O,"min",!!t.minDate)&&Q(d[1],O,"min",!!t.minDate)&&b:Q(d,O,"min",!!t.minDate)&&b},re=d=>{let b=!0;if(!d||v())return!0;const O=!t.minDate&&!t.maxDate?k(d):d;return(t.maxTime||t.maxDate)&&(b=U(Ct(O))),(t.minTime||t.minDate)&&(b=Y(Ct(O),b)),b},V=(d,b)=>{const O=M(JSON.parse(JSON.stringify(d))),B=[];for(let G=0;G<7;G++){const y=sr(O,G),N=ze(y)!==b;B.push({text:t.hideOffsetDates&&N?"":y.getDate(),value:y,current:!N,classData:{}})}return B},J=(d,b)=>{const O=[],B=M(a(new Date(b,d))),G=M(a(new Date(b,d+1,0))),y=th(B,{weekStartsOn:t.weekStart}),N=fe=>{const Ee=V(fe,d);if(O.push({days:Ee}),!O[O.length-1].days.some(we=>We(On(we.value),On(G)))){const we=sr(fe,7);N(we)}};if(N(y),t.sixWeeks&&O.length<6){const fe=6-O.length;for(let Ee=1;Ee<=fe;Ee++){const we=O[O.length-1],gt=we.days[we.days.length-1],$e=V(sr(gt.value,1),ze(B));O.push({days:$e})}}return O},E=(d,b,O)=>[Ft(M(d),{date:1}),Ft(M(),{month:b,year:O,date:1})],w=(d,b)=>Pt(...E(t.minDate,d,b))||We(...E(t.minDate,d,b)),R=(d,b)=>Bt(...E(t.maxDate,d,b))||We(...E(t.maxDate,d,b)),A=(d,b,O)=>{let B=!1;return t.maxDate&&O&&R(d,b)&&(B=!0),t.minDate&&!O&&w(d,b)&&(B=!0),B};return{checkPartialRangeValue:e,checkRangeEnabled:r,getZonedDate:a,getZonedToUtc:u,formatDate:o,getDefaultPattern:s,validateDate:h,getDefaultStartTime:f,isDisabled:p,isValidDate:m,sanitizeDate:T,getWeekFromDate:P,matchDate:D,setDateMonthOrYear:S,isValidTime:re,getCalendarDays:J,validateMonthYearInRange:(d,b,O,B)=>{let G=!1;return B?t.minDate&&t.maxDate?G=A(d,b,O):(t.minDate&&w(d,b)||t.maxDate&&R(d,b))&&(G=!0):G=!0,G},validateMaxDate:R,validateMinDate:w,defaults:n,hideNavigationButtons:l}},Be=cr({monthYear:[],calendar:[],time:[],actionRow:[],selectionGrid:[],timePicker:{0:[],1:[]},monthPicker:[]}),hc=X(null),Co=X(!1),fc=X(!1),dc=X(!1),pc=X(!1),Ut=X(0),vt=X(0),vr=()=>{const t=K(()=>Co.value?[...Be.selectionGrid,Be.actionRow].filter(c=>c.length):fc.value?[...Be.timePicker[0],...Be.timePicker[1],pc.value?[]:[hc.value],Be.actionRow].filter(c=>c.length):dc.value?[...Be.monthPicker,Be.actionRow]:[Be.monthYear,...Be.calendar,Be.time,Be.actionRow].filter(c=>c.length)),e=c=>{Ut.value=c?Ut.value+1:Ut.value-1;let f=null;t.value[vt.value]&&(f=t.value[vt.value][Ut.value]),f||(Ut.value=c?Ut.value-1:Ut.value+1)},n=c=>{vt.value===0&&!c||vt.value===t.value.length&&c||(vt.value=c?vt.value+1:vt.value-1,t.value[vt.value]?t.value[vt.value]&&!t.value[vt.value][Ut.value]&&Ut.value!==0&&(Ut.value=t.value[vt.value].length-1):vt.value=c?vt.value-1:vt.value+1)},r=c=>{let f=null;t.value[vt.value]&&(f=t.value[vt.value][Ut.value]),f?f.focus({preventScroll:!Co.value}):Ut.value=c?Ut.value-1:Ut.value+1},i=()=>{e(!0),r(!0)},s=()=>{e(!1),r(!1)},o=()=>{n(!1),r(!0)},a=()=>{n(!0),r(!0)},u=(c,f)=>{Be[f]=c},l=(c,f)=>{Be[f]=c},h=()=>{Ut.value=0,vt.value=0};return{buildMatrix:u,buildMultiLevelMatrix:l,setTimePickerBackRef:c=>{hc.value=c},setSelectionGrid:c=>{Co.value=c,h(),c||(Be.selectionGrid=[])},setTimePicker:(c,f=!1)=>{fc.value=c,pc.value=f,h(),c||(Be.timePicker[0]=[],Be.timePicker[1]=[])},setTimePickerElements:(c,f=0)=>{Be.timePicker[f]=c},arrowRight:i,arrowLeft:s,arrowUp:o,arrowDown:a,clearArrowNav:()=>{Be.monthYear=[],Be.calendar=[],Be.time=[],Be.actionRow=[],Be.selectionGrid=[],Be.timePicker[0]=[],Be.timePicker[1]=[],Co.value=!1,fc.value=!1,pc.value=!1,dc.value=!1,h(),hc.value=null},setMonthPicker:c=>{dc.value=c,h()},refSets:Be}},Ky=t=>Array.isArray(t),Er=t=>Array.isArray(t),Gy=t=>Array.isArray(t)&&t.length===2,iA=(t,e,n,r)=>{const{getDefaultStartTime:i,isDisabled:s,sanitizeDate:o,getWeekFromDate:a,setDateMonthOrYear:u,validateMonthYearInRange:l,defaults:h}=Zt(t),c=K({get:()=>t.internalModelValue,set:g=>{!t.readonly&&!t.disabled&&e("update:internal-model-value",g)}}),f=X([]);Ys(c,()=>H());const p=X([{month:ze(M()),year:Ke(M())}]),m=cr({hours:t.range?[Nn(M()),Nn(M())]:Nn(M()),minutes:t.range?[xn(M()),xn(M())]:xn(M()),seconds:t.range?[0,0]:0}),T=K(()=>g=>p.value[g]?p.value[g].month:0),P=K(()=>g=>p.value[g]?p.value[g].year:0),D=(g,x,ie)=>{p.value[g].month=x===null?p.value[g].month:x,p.value[g].year=ie===null?p.value[g].year:ie},S=(g,x)=>{m[g]=x};mn(()=>{c.value||(t.startDate&&(D(0,ze(M(t.startDate)),Ke(M(t.startDate))),h.value.multiCalendars&&Dn(0)),h.value.startTime&&E()),H(!0)});const H=(g=!1)=>{if(c.value)return Array.isArray(c.value)?U(g):Q(c.value);if(t.timePicker)return Y();if(t.monthPicker&&!t.range)return re();if(t.yearPicker&&!t.range)return V();if(h.value.multiCalendars)return W(M(),g)},W=(g,x=!1)=>{if((!h.value.multiCalendars||!t.multiStatic||x)&&D(0,ze(g),Ke(g)),h.value.multiCalendars)for(let ie=1;ie<=h.value.multiCalendars;ie++){const de=Ft(M(),{month:T.value(ie-1),year:P.value(ie-1)}),nt=d_(de,{months:1});p.value[ie]={month:ze(nt),year:Ke(nt)}}},Q=g=>{W(g),S("hours",Nn(g)),S("minutes",xn(g)),S("seconds",Ci(g))},v=(g,x)=>{W(g[0],x);const ie=de=>[de(g[0]),g[1]?de(g[1]):de(M())];S("hours",ie(Nn)),S("minutes",ie(xn)),S("seconds",ie(Ci))},k=(g,x)=>{if(t.range&&!t.multiDates)return v(g,x);if(t.multiDates){const ie=g[g.length-1];return Q(ie)}},U=g=>{const x=c.value;k(x,g),h.value.multiCalendars&&t.multiCalendarsSolo&&R()},Y=()=>{if(E(),!t.range)c.value=en(M(),m.hours,m.minutes,J());else{const g=m.hours,x=m.minutes;c.value=[en(M(),g[0],x[0],J()),en(M(),g[1],x[1],J(!1))]}},re=()=>{c.value=u(M(),T.value(0),P.value(0))},V=()=>{c.value=M()},J=(g=!0)=>t.enableSeconds?Array.isArray(m.seconds)?g?m.seconds[0]:m.seconds[1]:m.seconds:0,E=()=>{const g=i();if(g){const x=Array.isArray(g),ie=x?[+g[0].hours,+g[1].hours]:+g.hours,de=x?[+g[0].minutes,+g[1].minutes]:+g.minutes,nt=x?[+g[0].seconds,+g[1].seconds]:+g.seconds;S("hours",ie),S("minutes",de),t.enableSeconds&&S("seconds",nt)}},w=()=>Array.isArray(c.value)&&c.value.length?c.value[c.value.length-1]:null,R=()=>{if(Array.isArray(c.value)&&c.value.length===2){const g=M(M(c.value[1]?c.value[1]:Tn(c.value[0],1))),[x,ie]=[ze(c.value[0]),Ke(c.value[0])],[de,nt]=[ze(c.value[1]),Ke(c.value[1])];(x!==de||x===de&&ie!==nt)&&t.multiCalendarsSolo&&D(1,ze(g),Ke(g))}},A=g=>{const x=Tn(g,1);return{month:ze(x),year:Ke(x)}},d=g=>{const x=ze(M(g)),ie=Ke(M(g));if(D(0,x,ie),h.value.multiCalendars>0)for(let de=1;de<h.value.multiCalendars;de++){const nt=A(Ft(M(g),{year:T.value(de-1),month:P.value(de-1)}));D(de,nt.month,nt.year)}},b=g=>{if(c.value&&Array.isArray(c.value))if(c.value.some(x=>We(g,x))){const x=c.value.filter(ie=>!We(ie,g));c.value=x.length?x:null}else(t.multiDatesLimit&&+t.multiDatesLimit>c.value.length||!t.multiDatesLimit)&&c.value.push(g);else c.value=[g]},O=(g,x)=>{const ie=Bt(g,x)?x:g,de=Bt(x,g)?x:g;return Tm({start:ie,end:de})},B=g=>{if(Array.isArray(c.value)&&c.value[0]){const x=UI(g,c.value[0]),ie=O(c.value[0],g),de=ie.length===1?0:ie.filter(vn=>s(vn)).length,nt=Math.abs(x)-de;if(t.minRange&&t.maxRange)return nt>=+t.minRange&&nt<=+t.maxRange;if(t.minRange)return nt>=+t.minRange;if(t.maxRange)return nt<=+t.maxRange}return!0},G=g=>Array.isArray(c.value)&&c.value.length===2?t.fixedStart&&(Bt(g,c.value[0])||We(g,c.value[0]))?[c.value[0],g]:t.fixedEnd&&(Pt(g,c.value[1])||We(g,c.value[1]))?[g,c.value[1]]:c.value:[],y=()=>{t.autoApply&&e("auto-apply")},N=()=>{t.autoApply&&e("select-date")},fe=g=>!Tm({start:g[0],end:g[1]}).some(x=>s(x)),Ee=g=>(c.value=a(M(g.value)),y()),we=g=>{const x=en(M(g.value),m.hours,m.minutes,J());t.multiDates?b(x):c.value=x,n(),y()},gt=()=>{f.value=c.value?c.value.slice():[],f.value.length===2&&!(t.fixedStart||t.fixedEnd)&&(f.value=[])},$e=(g,x)=>{const ie=[M(g.value),sr(M(g.value),+t.autoRange)];fe(ie)&&(x&&d(g.value),f.value=ie)},z=g=>{f.value=G(M(g.value))},tt=g=>t.noDisabledRange?O(f.value[0],g).some(x=>s(x)):!1,Qt=(g,x)=>{if(gt(),t.autoRange)return $e(g,x);if(t.fixedStart||t.fixedEnd)return z(g);f.value[0]?B(M(g.value))&&!tt(g.value)&&(Pt(M(g.value),M(f.value[0]))?f.value.unshift(M(g.value)):f.value[1]=M(g.value)):f.value[0]=M(g.value)},le=g=>{f.value[g]=en(f.value[g],m.hours[g],m.minutes[g],J(g!==1))},at=()=>{f.value.length&&(f.value[0]&&!f.value[1]?le(0):(le(0),le(1),n()),c.value=f.value.slice(),f.value[0]&&f.value[1]&&t.autoApply&&e("auto-apply"),f.value[0]&&!f.value[1]&&t.modelAuto&&t.autoApply&&e("auto-apply"))},Xe=(g,x=!1)=>{if(!(s(g.value)||!g.current&&t.hideOffsetDates)){if(t.weekPicker)return Ee(g);if(!t.range)return we(g);Er(m.hours)&&Er(m.minutes)&&!t.multiDates&&(Qt(g,x),at())}},gn=g=>{const x=g.find(ie=>ie.current);return x?K1(x.value):""},Dn=g=>{for(let x=g-1;x>=0;x--){const ie=vi(Ft(M(),{month:T.value(x+1),year:P.value(x+1)}),1);D(x,ze(ie),Ke(ie))}for(let x=g+1;x<=h.value.multiCalendars-1;x++){const ie=Tn(Ft(M(),{month:T.value(x-1),year:P.value(x-1)}),1);D(x,ze(ie),Ke(ie))}},Tr=g=>u(M(),T.value(g),P.value(g)),Qi=g=>en(g,m.hours,m.minutes,J()),Yl=(g,x)=>{const ie=t.monthPicker?T.value(g)!==x.month||!x.fromNav:P.value(g)!==x.year;if(D(g,x.month,x.year),h.value.multiCalendars&&!t.multiCalendarsSolo&&Dn(g),t.monthPicker||t.yearPicker)if(t.range){if(ie){let de=c.value?c.value.slice():[];de.length===2&&de[1]!==null&&(de=[]),de.length?Pt(Tr(g),de[0])?de.unshift(Tr(g)):de[1]=Tr(g):de=[Tr(g)],c.value=de}}else c.value=Tr(g);e("update-month-year",{instance:g,month:x.month,year:x.year}),r(t.multiCalendarsSolo?g:void 0)},zl=async(g=!1)=>{if(t.autoApply&&(t.monthPicker||t.yearPicker)){await zs();const x=t.monthPicker?g:!1;t.range?e("auto-apply",x||!c.value||c.value.length===1):e("auto-apply",x)}n()},wo=(g,x)=>{const ie=Ft(M(),{month:T.value(x),year:P.value(x)}),de=g<0?Tn(ie,1):vi(ie,1);l(ze(de),Ke(de),g<0,t.preventMinMaxNavigation)&&(D(x,ze(de),Ke(de)),h.value.multiCalendars&&!t.multiCalendarsSolo&&Dn(x),r())},Xi=g=>{Ky(g)&&Ky(c.value)&&Er(m.hours)&&Er(m.minutes)?(g[0]&&c.value[0]&&(c.value[0]=en(g[0],m.hours[0],m.minutes[0],J())),g[1]&&c.value[1]&&(c.value[1]=en(g[1],m.hours[1],m.minutes[1],J(!1)))):t.multiDates&&Array.isArray(c.value)?c.value[c.value.length-1]=Qi(g):!t.range&&!Gy(g)&&(c.value=Qi(g)),e("time-update")},Kl=(g,x=!0,ie=!1)=>{const de=x?g:m.hours,nt=!x&&!ie?g:m.minutes,vn=ie?g:m.seconds;if(t.range&&Gy(c.value)&&Er(de)&&Er(nt)&&Er(vn)&&!t.disableTimeRangeValidation){const Sr=ee=>en(c.value[ee],de[ee],nt[ee],vn[ee]),I=ee=>Cd(c.value[ee],0);if(We(c.value[0],c.value[1])&&(wd(Sr(0),I(1))||bd(Sr(1),I(0))))return}if(S("hours",de),S("minutes",nt),S("seconds",vn),c.value)if(t.multiDates){const Sr=w();Sr&&Xi(Sr)}else Xi(c.value);else t.timePicker&&Xi(t.range?[M(),M()]:M());n()},Gl=(g,x)=>{t.monthChangeOnScroll&&wo(t.monthChangeOnScroll!=="inverse"?-g.deltaY:g.deltaY,x)},Ql=(g,x,ie=!1)=>{t.monthChangeOnArrows&&t.vertical===ie&&bo(g,x)},bo=(g,x)=>{wo(g==="right"?-1:1,x)};return{time:m,month:T,year:P,modelValue:c,monthYearSelect:zl,isDisabled:s,updateTime:Kl,getWeekNum:gn,selectDate:Xe,updateMonthYear:Yl,handleScroll:Gl,getMarker:g=>t.markers.find(x=>We(o(g.value),o(x.date))),handleArrow:Ql,handleSwipe:bo,selectCurrentDate:()=>{t.range?c.value&&Array.isArray(c.value)&&c.value[0]?c.value=Pt(M(),c.value[0])?[M(),c.value[0]]:[c.value[0],M()]:c.value=[M()]:c.value=M(),N()},presetDateRange:(g,x)=>{x||g.length&&g.length<=2&&t.range&&(c.value=g.map(ie=>M(ie)),N())}}},sA=(t,e,n)=>{const r=X(),{getZonedToUtc:i,getZonedDate:s,formatDate:o,getDefaultPattern:a,checkRangeEnabled:u,checkPartialRangeValue:l,isValidDate:h,setDateMonthOrYear:c,defaults:f}=Zt(e),p=X("");Ys(r,()=>{t("internal-model-change",r.value)});const m=y=>{const N=y||M(),fe={hours:Nn(N),minutes:xn(N)};return e.enableSeconds&&(fe.seconds=Ci(N)),fe},T=y=>({month:ze(y),year:Ke(y)}),P=y=>Array.isArray(y)?u(()=>[Lr(M(),y[0]),y[1]?Lr(M(),y[1]):l()]):Lr(M(),+y),D=y=>Array.isArray(y)?[en(null,+y[0].hours,+y[0].minutes,y[0].seconds),en(null,+y[1].hours,+y[1].minutes,y[1].seconds)]:en(null,y.hours,y.minutes,y==null?void 0:y.seconds),S=y=>Array.isArray(y)?u(()=>[c(null,+y[0].month,+y[0].year),y[1]?c(null,+y[1].month,+y[1].year):l()]):c(null,+y.month,+y.year),H=y=>{if(Array.isArray(y))return y.map(N=>d(N));throw new Error(Eu.dateArr("multi-dates"))},W=y=>{if(Array.isArray(y))return[M(y[0]),M(y[1])];throw new Error(Eu.dateArr("week-picker"))},Q=y=>e.modelAuto?Array.isArray(y)?[d(y[0]),d(y[1])]:e.autoApply?[d(y)]:[d(y),null]:Array.isArray(y)?u(()=>[d(y[0]),y[1]?d(y[1]):l()]):d(y),v=()=>{Array.isArray(r.value)&&e.range&&r.value.length===1&&r.value.push(l())},k=()=>{const y=r.value;return[b(y[0]),y[1]?b(y[1]):l()]},U=()=>r.value[1]?k():b(Ct(r.value[0])),Y=()=>r.value.map(y=>b(y)),re=()=>(v(),e.modelAuto?U():e.multiDates?Y():Array.isArray(r.value)?u(()=>k()):b(Ct(r.value))),V=y=>y?e.timePicker?D(Ct(y)):e.monthPicker?S(Ct(y)):e.yearPicker?P(Ct(y)):e.multiDates?H(Ct(y)):e.weekPicker?W(Ct(y)):Q(Ct(y)):null,J=y=>{const N=V(y);h(Ct(N))?(r.value=Ct(N),A()):(r.value=null,p.value="")},E=()=>{var y;const N=fe=>{var Ee;return fs(fe,(Ee=f.value.textInputOptions)==null?void 0:Ee.format)};return`${N(r.value[0])} ${(y=f.value.textInputOptions)==null?void 0:y.rangeSeparator} ${r.value[1]?N(r.value[1]):""}`},w=()=>{var y;return n.value&&r.value?Array.isArray(r.value)?E():fs(r.value,(y=f.value.textInputOptions)==null?void 0:y.format):o(r.value)},R=()=>{var y;return r.value?e.multiDates?r.value.map(N=>o(N)).join("; "):e.textInput&&typeof((y=f.value.textInputOptions)==null?void 0:y.format)=="string"?w():o(r.value):""},A=()=>{!e.format||typeof e.format=="string"?p.value=R():p.value=e.format(r.value)},d=y=>{if(e.utc){const N=new Date(y);return e.utc==="preserve"?new Date(N.getTime()+N.getTimezoneOffset()*6e4):N}return e.modelType?e.modelType==="date"||e.modelType==="timestamp"?s(new Date(y)):e.modelType==="format"&&(typeof e.format=="string"||!e.format)?df(y,a(),new Date):s(df(y,e.modelType,new Date)):s(new Date(y))},b=y=>e.utc?ED(y,e.utc==="preserve"):e.modelType?e.modelType==="timestamp"?+i(y):e.modelType==="format"&&(typeof e.format=="string"||!e.format)?o(i(y)):o(i(y),e.modelType):i(y),O=y=>{t("update:model-value",y)},B=y=>Array.isArray(r.value)?[y(r.value[0]),r.value[1]?y(r.value[1]):l()]:y(Ct(r.value)),G=y=>O(Ct(B(y)));return{inputValue:p,internalModelValue:r,checkBeforeEmit:()=>r.value?e.range?e.partialRange?r.value.length>=1:r.value.length===2:!!r.value:!1,parseExternalModelValue:J,formatInputValue:A,emitModelValue:()=>(A(),e.monthPicker?G(T):e.timePicker?G(m):e.yearPicker?G(Ke):e.weekPicker?O(r.value):O(re()))}},oA=(t,e)=>{const{validateMonthYearInRange:n,validateMaxDate:r,validateMinDate:i,defaults:s}=Zt(t),o=(c,f)=>{let p=c;return s.value.filters.months.includes(ze(p))?(p=f?Tn(c,1):vi(c,1),o(p,f)):p},a=(c,f)=>{let p=c;return s.value.filters.years.includes(Ke(p))?(p=f?p_(c,1):MP(c,1),a(p,f)):p},u=c=>{const f=Ft(new Date,{month:t.month,year:t.year});let p=c?Tn(f,1):vi(f,1),m=ze(p),T=Ke(p);s.value.filters.months.includes(m)&&(p=o(p,c),m=ze(p),T=Ke(p)),s.value.filters.years.includes(T)&&(p=a(p,c),T=Ke(p)),n(m,T,c,t.preventMinMaxNavigation)&&l(m,T)},l=(c,f)=>{e("update-month-year",{month:c,year:f})},h=K(()=>c=>{if(!t.preventMinMaxNavigation||c&&!t.maxDate||!c&&!t.minDate)return!1;const f=Ft(new Date,{month:t.month,year:t.year}),p=c?Tn(f,1):vi(f,1),m=[ze(p),Ke(p)];return c?!r(...m):!i(...m)});return{handleMonthYearChange:u,isDisabled:h,updateMonthYear:l}};var Pa=(t=>(t.center="center",t.left="left",t.right="right",t))(Pa||{});const aA=(t,e,n,r)=>{const i=X({top:"0",left:"0",transform:"none"}),s=X(!1),o=Is(r,"teleportCenter");Ys(o,()=>{P()});const a=v=>{const k=v.getBoundingClientRect();return{left:k.left+window.scrollX,top:k.top+window.scrollY}},u=v=>{const k=v.getBoundingClientRect();let U=0,Y=0;for(;v&&!isNaN(v.offsetLeft)&&!isNaN(v.offsetTop);)U+=v.offsetLeft-v.scrollLeft,Y=k.top+v.scrollTop,v=v.offsetParent;return{top:Y,left:U}},l=(v,k)=>{i.value.left=`${v+k}px`,i.value.transform="translateX(-100%)"},h=v=>{i.value.left=`${v}px`,i.value.transform="translateX(0)"},c=(v,k,U=!1)=>{r.position===Pa.left&&h(v),r.position===Pa.right&&l(v,k),r.position===Pa.center&&(i.value.left=`${v+k/2}px`,i.value.transform=U?"translate(-50%, -50%)":"translateX(-50%)")},f=v=>{const{width:k,height:U}=v.getBoundingClientRect(),{top:Y,left:re}=r.altPosition?u(v):a(v);return{top:Y,left:re,width:k,height:U}},p=()=>{const v=St(e);if(v){const{top:k,left:U,width:Y,height:re}=f(v);i.value.top=`${k+re/2}px`,i.value.transform="translateY(-50%)",c(U,Y,!0)}},m=()=>{i.value.left="50%",i.value.top="50%",i.value.transform="translate(-50%, -50%)",i.value.position="fixed"},T=()=>{const v=St(e);i.value=r.altPosition(v)},P=(v=!0)=>{if(!r.inline)return o.value?m():r.altPosition&&typeof r.altPosition!="boolean"?T():(v&&n("recalculate-position"),Q())},D=(v,k)=>{const{top:U,left:Y,height:re,width:V}=f(v);i.value.top=`${re+U+ +r.offset}px`,c(Y,V),H(v,k),s.value=!1},S=(v,k)=>{const{top:U,left:Y,width:re}=f(v),{height:V}=k.getBoundingClientRect();i.value.top=`${U-V-+r.offset}px`,c(Y,re),H(v,k),s.value=!0},H=(v,k)=>{if(r.autoPosition){const{left:U,width:Y}=f(v),{left:re,right:V}=k.getBoundingClientRect();if(re<0)return h(U);if(V>document.documentElement.clientWidth)return l(U,Y)}},W=(v,k)=>{const{height:U}=k.getBoundingClientRect(),{top:Y,height:re}=v.getBoundingClientRect(),V=window.innerHeight-Y-re,J=Y;return U<=V?D(v,k):U>V&&U<=J?S(v,k):V>=J?D(v,k):S(v,k)},Q=()=>{const v=St(e),k=St(t);if(v&&k)return r.autoPosition?W(v,k):D(v,k)};return{openOnTop:s,menuPosition:i,setMenuPosition:P,setInitialPosition:p}},ci=[{name:"clock-icon",use:["time","calendar"]},{name:"arrow-left",use:["month-year","calendar"]},{name:"arrow-right",use:["month-year","calendar"]},{name:"arrow-up",use:["time","calendar"]},{name:"arrow-down",use:["time","calendar"]},{name:"calendar-icon",use:["month-year","time","calendar"]},{name:"day",use:["calendar"]},{name:"month-overlay-value",use:["calendar","month-year"]},{name:"year-overlay-value",use:["calendar","month-year"]},{name:"hours-overlay-value",use:["calendar","time"]},{name:"minutes-overlay-value",use:["calendar","time"]},{name:"seconds-overlay-value",use:["calendar","time"]},{name:"hours",use:["calendar","time"]},{name:"minutes",use:["calendar","time"]},{name:"month",use:["calendar","month-year"]},{name:"year",use:["calendar","month-year"]},{name:"action-select",use:["action"]},{name:"action-preview",use:["action"]},{name:"calendar-header",use:["calendar"]},{name:"marker-tooltip",use:["calendar"]},{name:"now-button",use:[]},{name:"time-picker-overlay",use:["calendar","time"]},{name:"am-pm-button",use:["calendar","time"]},{name:"left-sidebar",use:["menu"]},{name:"right-sidebar",use:["menu"]},{name:"month-year",use:["month-year"]},{name:"time-picker",use:["menu"]},{name:"action-row",use:["menu"]}],uA=[{name:"trigger"},{name:"input-icon"},{name:"clear-icon"},{name:"dp-input"}],lA={all:()=>ci,monthYear:()=>ci.filter(t=>t.use.includes("month-year")),input:()=>uA,timePicker:()=>ci.filter(t=>t.use.includes("time")),action:()=>ci.filter(t=>t.use.includes("action")),calendar:()=>ci.filter(t=>t.use.includes("calendar")),menu:()=>ci.filter(t=>t.use.includes("menu"))},Pr=(t,e,n)=>{const r=[];return lA[e]().forEach(i=>{t[i.name]&&r.push(i.name)}),n&&n.length&&n.forEach(i=>{i.slot&&r.push(i.slot)}),r},al=t=>({transitionName:K(()=>e=>t&&typeof t!="boolean"?e?t.open:t.close:""),showTransition:!!t}),_r={multiCalendars:{type:[Boolean,Number,String],default:null},modelValue:{type:[String,Date,Array,Object,Number],default:null},modelType:{type:String,default:null},position:{type:String,default:"center"},dark:{type:Boolean,default:!1},format:{type:[String,Function],default:()=>null},closeOnScroll:{type:Boolean,default:!1},autoPosition:{type:Boolean,default:!0},closeOnAutoApply:{type:Boolean,default:!0},teleport:{type:[String,Object],default:"body"},altPosition:{type:[Boolean,Function],default:!1},transitions:{type:[Boolean,Object],default:!0},formatLocale:{type:Object,default:null},utc:{type:[Boolean,String],default:!1},ariaLabels:{type:Object,default:()=>({})},offset:{type:[Number,String],default:10},hideNavigation:{type:Array,default:()=>[]},timezone:{type:String,default:null},vertical:{type:Boolean,default:!1},disableMonthYearSelect:{type:Boolean,default:!1},menuClassName:{type:String,default:null},dayClass:{type:Function,default:null},yearRange:{type:Array,default:()=>[1900,2100]},multiCalendarsSolo:{type:Boolean,default:!1},calendarCellClassName:{type:String,default:null},enableTimePicker:{type:Boolean,default:!0},autoApply:{type:Boolean,default:!1},disabledDates:{type:[Array,Function],default:()=>[]},monthNameFormat:{type:String,default:"short"},startDate:{type:[Date,String],default:null},startTime:{type:[Object,Array],default:null},monthYearComponent:{type:Object,default:null},timePickerComponent:{type:Object,default:null},actionRowComponent:{type:Object,default:null},hideOffsetDates:{type:Boolean,default:!1},autoRange:{type:[Number,String],default:null},noToday:{type:Boolean,default:!1},disabledWeekDays:{type:Array,default:()=>[]},allowedDates:{type:Array,default:()=>[]},showNowButton:{type:Boolean,default:!1},nowButtonLabel:{type:String,default:"Now"},markers:{type:Array,default:()=>[]},modeHeight:{type:[Number,String],default:255},escClose:{type:Boolean,default:!0},spaceConfirm:{type:Boolean,default:!0},monthChangeOnArrows:{type:Boolean,default:!0},presetRanges:{type:Array,default:()=>[]},flow:{type:Array,default:()=>[]},preventMinMaxNavigation:{type:Boolean,default:!1},minRange:{type:[Number,String],default:null},maxRange:{type:[Number,String],default:null},multiDatesLimit:{type:[Number,String],default:null},reverseYears:{type:Boolean,default:!1},keepActionRow:{type:Boolean,default:!1},weekPicker:{type:Boolean,default:!1},filters:{type:Object,default:()=>({})},arrowNavigation:{type:Boolean,default:!1},multiStatic:{type:Boolean,default:!0},disableTimeRangeValidation:{type:Boolean,default:!1},highlight:{type:[Array,Function],default:null},highlightWeekDays:{type:Array,default:null},highlightDisabledDays:{type:Boolean,default:!1},teleportCenter:{type:Boolean,default:!1},locale:{type:String,default:"en-Us"},weekNumName:{type:String,default:"W"},weekStart:{type:[Number,String],default:1},weekNumbers:{type:Boolean,default:!1},calendarClassName:{type:String,default:null},noSwipe:{type:Boolean,default:!1},monthChangeOnScroll:{type:[Boolean,String],default:!0},dayNames:{type:[Function,Array],default:null},monthPicker:{type:Boolean,default:!1},customProps:{type:Object,default:null},yearPicker:{type:Boolean,default:!1},modelAuto:{type:Boolean,default:!1},selectText:{type:String,default:"Select"},cancelText:{type:String,default:"Cancel"},previewFormat:{type:[String,Function],default:()=>""},multiDates:{type:Boolean,default:!1},partialRange:{type:Boolean,default:!0},ignoreTimeValidation:{type:Boolean,default:!1},minDate:{type:[Date,String],default:null},maxDate:{type:[Date,String],default:null},minTime:{type:Object,default:null},maxTime:{type:Object,default:null},name:{type:String,default:null},placeholder:{type:String,default:""},hideInputIcon:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},state:{type:Boolean,default:null},required:{type:Boolean,default:!1},autocomplete:{type:String,default:"off"},inputClassName:{type:String,default:null},inlineWithInput:{type:Boolean,default:!1},textInputOptions:{type:Object,default:()=>null},fixedStart:{type:Boolean,default:!1},fixedEnd:{type:Boolean,default:!1},timePicker:{type:Boolean,default:!1},enableSeconds:{type:Boolean,default:!1},is24:{type:Boolean,default:!0},noHoursOverlay:{type:Boolean,default:!1},noMinutesOverlay:{type:Boolean,default:!1},noSecondsOverlay:{type:Boolean,default:!1},hoursGridIncrement:{type:[String,Number],default:1},minutesGridIncrement:{type:[String,Number],default:5},secondsGridIncrement:{type:[String,Number],default:5},hoursIncrement:{type:[Number,String],default:1},minutesIncrement:{type:[Number,String],default:1},secondsIncrement:{type:[Number,String],default:1},range:{type:Boolean,default:!1},uid:{type:String,default:null},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},inline:{type:Boolean,default:!1},textInput:{type:Boolean,default:!1},onClickOutside:{type:Function,default:null},noDisabledRange:{type:Boolean,default:!1},sixWeeks:{type:Boolean,default:!1}},cA=["aria-label","aria-disabled","aria-readonly"],hA={key:1,class:"dp__input_wrap"},fA=["id","name","inputmode","placeholder","disabled","readonly","required","value","autocomplete","onKeydown"],dA={key:2,class:"dp__input_icon"},pA={key:4,class:"dp__clear_icon"},mA=Ve({__name:"DatepickerInput",props:{isMenuOpen:{type:Boolean,default:!1},inputValue:{type:String,default:""},..._r},emits:["clear","open","update:input-value","set-input-date","close","select-date","set-empty-date","toggle","focus-prev","focus","blur"],setup(t,{expose:e,emit:n}){const r=t,{getDefaultPattern:i,isValidDate:s,defaults:o}=Zt(r),a=X(),u=X(null),l=X(!1),h=K(()=>({dp__pointer:!r.disabled&&!r.readonly&&!r.textInput,dp__disabled:r.disabled,dp__input_readonly:!r.textInput,dp__input:!0,dp__input_icon_pad:!r.hideInputIcon,dp__input_valid:r.state,dp__input_invalid:r.state===!1,dp__input_focus:l.value||r.isMenuOpen,dp__input_reg:!r.textInput,[r.inputClassName]:!!r.inputClassName})),c=()=>{n("set-input-date",null),r.autoApply&&(n("set-empty-date"),a.value=null)},f=v=>{var k;return SD(v,((k=o.value.textInputOptions)==null?void 0:k.format)||i())},p=v=>{const{rangeSeparator:k}=o.value.textInputOptions;if(r.range){const[U,Y]=v.split(`${k}`);if(U&&Y){const re=f(U.trim()),V=f(Y.trim());a.value=re&&V?[re,V]:null}}else a.value=f(v)},m=v=>{var k;const{value:U}=v.target;U!==""?(((k=o.value.textInputOptions)==null?void 0:k.openMenu)&&!r.isMenuOpen&&n("open"),p(U),n("set-input-date",a.value)):c(),n("update:input-value",U)},T=()=>{var v,k;((v=o.value.textInputOptions)==null?void 0:v.enterSubmit)&&s(a.value)&&r.inputValue!==""?(n("set-input-date",a.value,!0),a.value=null):((k=o.value.textInputOptions)==null?void 0:k.enterSubmit)&&r.inputValue===""&&(a.value=null,n("clear"))},P=()=>{var v,k;((v=o.value.textInputOptions)==null?void 0:v.tabSubmit)&&s(a.value)&&r.inputValue!==""?(n("set-input-date",a.value,!0),a.value=null):((k=o.value.textInputOptions)==null?void 0:k.tabSubmit)&&r.inputValue===""&&(a.value=null,n("clear"))},D=()=>{l.value=!0,n("focus")},S=v=>{var k;v.preventDefault(),v.stopImmediatePropagation(),v.stopPropagation(),r.textInput&&((k=o.value.textInputOptions)==null?void 0:k.openMenu)&&!r.inlineWithInput?r.isMenuOpen?o.value.textInputOptions.enterSubmit&&n("select-date"):n("open"):r.textInput||n("toggle")},H=()=>{l.value=!1,r.isMenuOpen||n("blur"),r.autoApply&&r.textInput&&a.value&&(n("set-input-date",a.value),n("select-date"),a.value=null)},W=()=>{n("clear")},Q=v=>{r.textInput||v.preventDefault()};return e({focusInput:()=>{u.value&&u.value.focus({preventScroll:!0})}}),(v,k)=>{var U;return C(),j("div",{onClick:S,"aria-label":(U=_(o).ariaLabels)==null?void 0:U.input,role:"textbox","aria-multiline":"false","aria-disabled":v.disabled,"aria-readonly":v.readonly},[v.$slots.trigger&&!v.$slots["dp-input"]&&!v.inline?te(v.$slots,"trigger",{key:0}):$("",!0),!v.$slots.trigger&&(!v.inline||v.inlineWithInput)?(C(),j("div",hA,[v.$slots["dp-input"]&&!v.$slots.trigger&&!v.inline?te(v.$slots,"dp-input",{key:0,value:t.inputValue,onInput:m,onEnter:T,onTab:P,onClear:W}):$("",!0),v.$slots["dp-input"]?$("",!0):(C(),j("input",{key:1,ref_key:"inputRef",ref:u,id:v.uid?`dp-input-${v.uid}`:void 0,name:v.name,class:Ge(_(h)),inputmode:v.textInput?"text":"none",placeholder:v.placeholder,disabled:v.disabled,readonly:v.readonly,required:v.required,value:t.inputValue,autocomplete:v.autocomplete,onInput:m,onKeydown:[be(S,["enter"]),be(P,["tab"])],onBlur:H,onFocus:D,onKeypress:Q},null,42,fA)),v.$slots["input-icon"]&&!v.hideInputIcon?(C(),j("span",dA,[te(v.$slots,"input-icon")])):$("",!0),!v.$slots["input-icon"]&&!v.hideInputIcon&&!v.$slots["dp-input"]?(C(),Ne(_(ol),{key:3,class:"dp__input_icon dp__input_icons"})):$("",!0),v.$slots["clear-icon"]&&t.inputValue&&v.clearable&&!v.disabled&&!v.readonly?(C(),j("span",pA,[te(v.$slots,"clear-icon",{clear:W})])):$("",!0),v.clearable&&!v.$slots["clear-icon"]&&t.inputValue&&!v.disabled&&!v.readonly?(C(),Ne(_(QP),{key:5,class:"dp__clear_icon dp__input_icons","data-test":"clear-icon",onClick:Ln(W,["stop","prevent"])},null,8,["onClick"])):$("",!0)])):$("",!0)],8,cA)}}}),yA={class:"dp__selection_preview"},gA={class:"dp__action_buttons"},vA=["onKeydown"],_A=Ve({__name:"ActionRow",props:{calendarWidth:{type:Number,default:0},menuMount:{type:Boolean,default:!1},internalModelValue:{type:[Date,Array],default:null},..._r},emits:["close-picker","select-date","invalid-select"],setup(t,{emit:e}){const n=t,{formatDate:r,isValidTime:i,defaults:s}=Zt(n),{buildMatrix:o}=vr(),a=X(null),u=X(null);mn(()=>{n.arrowNavigation&&o([St(a),St(u)],"actionRow")});const l=K(()=>n.range&&!n.partialRange&&n.internalModelValue?n.internalModelValue.length===2:!0),h=K(()=>({dp__action:!0,dp__select:!0,dp__action_disabled:!c.value||!f.value||!l.value})),c=K(()=>!n.enableTimePicker||n.ignoreTimeValidation?!0:i(n.internalModelValue)),f=K(()=>n.monthPicker?P(n.internalModelValue):!0),p=()=>{const S=s.value.previewFormat;return n.timePicker||n.monthPicker,S(Ct(n.internalModelValue))},m=()=>{const S=n.internalModelValue;return s.value.multiCalendars>0?`${r(S[0])} - ${r(S[1])}`:[r(S[0]),r(S[1])]},T=K(()=>!n.internalModelValue||!n.menuMount?"":typeof s.value.previewFormat=="string"?Array.isArray(n.internalModelValue)?n.internalModelValue.length===2&&n.internalModelValue[1]?m():n.multiDates?n.internalModelValue.map(S=>`${r(S)}`):n.modelAuto?`${r(n.internalModelValue[0])}`:`${r(n.internalModelValue[0])} -`:r(n.internalModelValue):p()),P=S=>{if(!n.monthPicker)return!0;let H=!0;return n.minDate&&n.maxDate?Bt(M(S),M(n.minDate))&&Pt(M(S),M(n.maxDate)):(n.minDate&&(H=Bt(M(S),M(n.minDate))),n.maxDate&&(H=Pt(M(S),M(n.maxDate))),H)},D=()=>{c.value&&f.value&&l.value?e("select-date"):e("invalid-select")};return(S,H)=>(C(),j("div",{class:"dp__action_row",style:di(t.calendarWidth?{width:`${t.calendarWidth}px`}:{})},[ye("div",yA,[S.$slots["action-preview"]?te(S.$slots,"action-preview",{key:0,value:t.internalModelValue}):$("",!0),S.$slots["action-preview"]?$("",!0):(C(),j(De,{key:1},[Array.isArray(_(T))?$("",!0):(C(),j(De,{key:0},[En(Tt(_(T)),1)],64)),Array.isArray(_(T))?(C(!0),j(De,{key:1},ut(_(T),(W,Q)=>(C(),j("div",{key:Q},Tt(W),1))),128)):$("",!0)],64))]),ye("div",gA,[S.$slots["action-select"]?te(S.$slots,"action-select",{key:0,value:t.internalModelValue}):$("",!0),S.$slots["action-select"]?$("",!0):(C(),j(De,{key:1},[S.inline?$("",!0):(C(),j("span",{key:0,class:"dp__action dp__cancel",ref_key:"cancelButtonRef",ref:a,tabindex:"0",onClick:H[0]||(H[0]=W=>S.$emit("close-picker")),onKeydown:[H[1]||(H[1]=be(W=>S.$emit("close-picker"),["enter"])),H[2]||(H[2]=be(W=>S.$emit("close-picker"),["space"]))]},Tt(S.cancelText),545)),ye("span",{class:Ge(_(h)),tabindex:"0",onKeydown:[be(D,["enter"]),be(D,["space"])],onClick:D,"data-test":"select-button",ref_key:"selectButtonRef",ref:u},Tt(S.selectText),43,vA)],64))])],4))}}),wA=["aria-label"],bA={class:"dp__calendar_header",role:"row"},TA={key:0,class:"dp__calendar_header_item",role:"gridcell"},SA=ye("div",{class:"dp__calendar_header_separator"},null,-1),EA=["aria-label"],IA={key:0,role:"gridcell",class:"dp__calendar_item dp__week_num"},CA={class:"dp__cell_inner"},kA=["aria-selected","aria-disabled","aria-label","data-test","onClick","onKeydown","onMouseover"],OA=ye("div",{class:"dp__arrow_bottom_tp"},null,-1),RA=Ve({__name:"Calendar",props:{mappedDates:{type:Array,default:()=>[]},getWeekNum:{type:Function,default:()=>""},specificMode:{type:Boolean,default:!1},instance:{type:Number,default:0},month:{type:Number,default:0},year:{type:Number,default:0},..._r},emits:["select-date","set-hover-date","handle-scroll","mount","handle-swipe","handle-space"],setup(t,{expose:e,emit:n}){const r=t,{buildMultiLevelMatrix:i}=vr(),{setDateMonthOrYear:s,defaults:o}=Zt(r),a=X(null),u=X({bottom:"",left:"",transform:""}),l=X([]),h=X(null),c=X(!0),f=X(""),p=X({startX:0,endX:0,startY:0,endY:0}),m=K(()=>r.dayNames?Array.isArray(r.dayNames)?r.dayNames:r.dayNames(r.locale,+r.weekStart):zD(r.locale,+r.weekStart));mn(()=>{n("mount",{cmp:"calendar",refs:l}),r.noSwipe||h.value&&(h.value.addEventListener("touchstart",U,{passive:!1}),h.value.addEventListener("touchend",Y,{passive:!1}),h.value.addEventListener("touchmove",re,{passive:!1})),r.monthChangeOnScroll&&h.value&&h.value.addEventListener("wheel",E,{passive:!1})});const T=w=>w?r.vertical?"vNext":"next":r.vertical?"vPrevious":"previous",P=(w,R)=>{if(r.transitions){const A=On(s(M(),r.month,r.year));f.value=Bt(On(s(M(),w,R)),A)?o.value.transitions[T(!0)]:o.value.transitions[T(!1)],c.value=!1,zs(()=>{c.value=!0})}},D=K(()=>({dp__calendar_wrap:!0,[r.calendarClassName]:!!r.calendarClassName})),S=K(()=>w=>{const R=XD(w);return{dp__marker_dot:R.type==="dot",dp__marker_line:R.type==="line"}}),H=K(()=>w=>We(w,a.value)),W=K(()=>({dp__calendar:!0,dp__calendar_next:o.value.multiCalendars>0&&r.instance!==0})),Q=K(()=>r.specificMode?{height:`${r.modeHeight}px`}:void 0),v=(w,R,A)=>{var d,b;if(n("set-hover-date",w),(b=(d=w.marker)==null?void 0:d.tooltip)!=null&&b.length){const O=St(l.value[R][A]);if(O){const{width:B,height:G}=O.getBoundingClientRect();u.value={bottom:`${G}px`,left:`${B/2}px`,transform:"translateX(-50%)"},a.value=w.value}}},k=()=>{a.value=null},U=w=>{p.value.startX=w.changedTouches[0].screenX,p.value.startY=w.changedTouches[0].screenY},Y=w=>{p.value.endX=w.changedTouches[0].screenX,p.value.endY=w.changedTouches[0].screenY,V()},re=w=>{r.vertical&&!r.inline&&w.preventDefault()},V=()=>{const w=r.vertical?"Y":"X";Math.abs(p.value[`start${w}`]-p.value[`end${w}`])>10&&n("handle-swipe",p.value[`start${w}`]>p.value[`end${w}`]?"right":"left")},J=(w,R,A)=>{w&&(Array.isArray(l.value[R])?l.value[R][A]=w:l.value[R]=[w]),r.arrowNavigation&&i(l.value,"calendar")},E=w=>{r.monthChangeOnScroll&&(w.preventDefault(),n("handle-scroll",w))};return e({triggerTransition:P}),(w,R)=>{var A;return C(),j("div",{class:Ge(_(W))},[ye("div",{style:di(_(Q))},[t.specificMode?$("",!0):(C(),j("div",{key:0,ref_key:"calendarWrapRef",ref:h,class:Ge(_(D)),role:"grid","aria-label":(A=_(o).ariaLabels)==null?void 0:A.calendarWrap},[ye("div",bA,[w.weekNumbers?(C(),j("div",TA,Tt(w.weekNumName),1)):$("",!0),(C(!0),j(De,null,ut(_(m),(d,b)=>(C(),j("div",{class:"dp__calendar_header_item",role:"gridcell",key:b,"data-test":"calendar-header"},[w.$slots["calendar-header"]?te(w.$slots,"calendar-header",{key:0,day:d,index:b}):$("",!0),w.$slots["calendar-header"]?$("",!0):(C(),j(De,{key:1},[En(Tt(d),1)],64))]))),128))]),SA,ir(mr,{name:f.value,css:!!w.transitions},{default:Pe(()=>{var d;return[c.value?(C(),j("div",{key:0,class:"dp__calendar",role:"grid","aria-label":(d=_(o).ariaLabels)==null?void 0:d.calendarDays},[(C(!0),j(De,null,ut(t.mappedDates,(b,O)=>(C(),j("div",{class:"dp__calendar_row",role:"row",key:O},[w.weekNumbers?(C(),j("div",IA,[ye("div",CA,Tt(t.getWeekNum(b.days)),1)])):$("",!0),(C(!0),j(De,null,ut(b.days,(B,G)=>{var y,N,fe;return C(),j("div",{role:"gridcell",class:"dp__calendar_item",ref_for:!0,ref:Ee=>J(Ee,O,G),key:G+O,"aria-selected":B.classData.dp__active_date||B.classData.dp__range_start||B.classData.dp__range_start,"aria-disabled":B.classData.dp__cell_disabled,"aria-label":(N=(y=_(o).ariaLabels)==null?void 0:y.day)==null?void 0:N.call(y,B),tabindex:"0","data-test":B.value,onClick:Ln(Ee=>w.$emit("select-date",B),["stop","prevent"]),onKeydown:[be(Ee=>w.$emit("select-date",B),["enter"]),be(Ee=>w.$emit("handle-space",B),["space"])],onMouseover:Ee=>v(B,O,G),onMouseleave:k},[ye("div",{class:Ge(["dp__cell_inner",B.classData])},[w.$slots.day?te(w.$slots,"day",{key:0,day:+B.text,date:B.value}):$("",!0),w.$slots.day?$("",!0):(C(),j(De,{key:1},[En(Tt(B.text),1)],64)),B.marker?(C(),j("div",{key:2,class:Ge(_(S)(B.marker)),style:di(B.marker.color?{backgroundColor:B.marker.color}:{})},null,6)):$("",!0),_(H)(B.value)?(C(),j("div",{key:3,class:"dp__marker_tooltip",style:di(u.value)},[(fe=B.marker)!=null&&fe.tooltip?(C(),j("div",{key:0,class:"dp__tooltip_content",onClick:R[0]||(R[0]=Ln(()=>{},["stop"]))},[(C(!0),j(De,null,ut(B.marker.tooltip,(Ee,we)=>(C(),j("div",{key:we,class:"dp__tooltip_text"},[w.$slots["marker-tooltip"]?te(w.$slots,"marker-tooltip",{key:0,tooltop:Ee,day:B.value}):$("",!0),w.$slots["marker-tooltip"]?$("",!0):(C(),j(De,{key:1},[ye("div",{class:"dp__tooltip_mark",style:di(Ee.color?{backgroundColor:Ee.color}:{})},null,4),ye("div",null,Tt(Ee.text),1)],64))]))),128)),OA])):$("",!0)],4)):$("",!0)],2)],40,kA)}),128))]))),128))],8,EA)):$("",!0)]}),_:3},8,["name","css"])],10,wA))],4)],2)}}}),PA=["aria-label","aria-disabled"],mc=Ve({__name:"ActionIcon",props:{ariaLabel:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["activate","set-ref"],setup(t,{emit:e}){const n=X(null);return mn(()=>e("set-ref",n)),(r,i)=>(C(),j("div",{class:"dp__month_year_col_nav",onClick:i[0]||(i[0]=s=>r.$emit("activate")),onKeydown:[i[1]||(i[1]=be(s=>r.$emit("activate"),["enter"])),i[2]||(i[2]=be(s=>r.$emit("activate"),["space"]))],tabindex:"0",role:"button","aria-label":t.ariaLabel,"aria-disabled":t.disabled,ref_key:"elRef",ref:n},[ye("div",{class:Ge(["dp__inner_nav",{dp__inner_nav_disabled:t.disabled}])},[te(r.$slots,"default")],2)],40,PA))}}),DA=["onKeydown"],AA={class:"dp__selection_grid_header"},NA=["aria-selected","aria-disabled","data-test","onClick","onKeydown","onMouseover"],xA=["aria-label","onKeydown"],ps=Ve({__name:"SelectionGrid",props:{items:{type:Array,default:()=>[]},modelValue:{type:[String,Number],default:null},multiModelValue:{type:Array,default:()=>[]},disabledValues:{type:Array,default:()=>[]},minValue:{type:[Number,String],default:null},maxValue:{type:[Number,String],default:null},year:{type:Number,default:0},skipActive:{type:Boolean,default:!1},headerRefs:{type:Array,default:()=>[]},skipButtonRef:{type:Boolean,default:!1},monthPicker:{type:Boolean,default:!1},yearPicker:{type:Boolean,default:!1},escClose:{type:Boolean,default:!0},type:{type:String,default:null},arrowNavigation:{type:Boolean,default:!1},autoApply:{type:Boolean,default:!1},textInput:{type:Boolean,default:!1},ariaLabels:{type:Object,default:()=>({})},hideNavigation:{type:Array,default:()=>[]}},emits:["update:model-value","selected","toggle","reset-flow"],setup(t,{expose:e,emit:n}){const r=t,{setSelectionGrid:i,buildMultiLevelMatrix:s,setMonthPicker:o}=vr(),{hideNavigationButtons:a}=Zt(r),u=X(!1),l=X(null),h=X(null),c=X([]),f=X(),p=X();OS(()=>{l.value=null}),mn(()=>{zs().then(()=>k()),T(),m(!0)}),pd(()=>m(!1));const m=w=>{var R;r.arrowNavigation&&((R=r.headerRefs)!=null&&R.length?o(w):i(w))},T=()=>{const w=St(h);w&&(r.textInput||w.focus({preventScroll:!0}),u.value=w.clientHeight<w.scrollHeight)},P=K(()=>({dp__overlay:!0})),D=K(()=>({dp__overlay_col:!0})),S=w=>r.skipActive?!1:w.value===r.modelValue,H=K(()=>r.items.map(w=>w.filter(R=>R).map(R=>{var A,d,b;const O=r.disabledValues.some(G=>G===R.value)||v(R.value),B=(A=r.multiModelValue)!=null&&A.length?(d=r.multiModelValue)==null?void 0:d.some(G=>We(G,Lr(r.monthPicker?ds(new Date,R.value):new Date,r.monthPicker?r.year:R.value))):S(R);return{...R,className:{dp__overlay_cell_active:B,dp__overlay_cell:!B,dp__overlay_cell_disabled:O,dp__overlay_cell_active_disabled:O&&B,dp__overlay_cell_pad:!0,dp__cell_in_between:(b=r.multiModelValue)!=null&&b.length?Y(R.value):!1}}}))),W=K(()=>({dp__button:!0,dp__overlay_action:!0,dp__over_action_scroll:u.value,dp__button_bottom:r.autoApply})),Q=K(()=>{var w,R;return{dp__overlay_container:!0,dp__container_flex:((w=r.items)==null?void 0:w.length)<=6,dp__container_block:((R=r.items)==null?void 0:R.length)>6}}),v=w=>{const R=r.maxValue||r.maxValue===0,A=r.minValue||r.minValue===0;return!R&&!A?!1:R&&A?+w>+r.maxValue||+w<+r.minValue:R?+w>+r.maxValue:A?+w<+r.minValue:!1},k=()=>{const w=St(l);if(w){const R=St(h);R&&(R.scrollTop=w.offsetTop-R.offsetTop-(R.getBoundingClientRect().height/2-w.getBoundingClientRect().height))}},U=w=>{!r.disabledValues.some(R=>R===w)&&!v(w)&&(n("update:model-value",w),n("selected"))},Y=w=>{const R=r.monthPicker?r.year:w;return U_(r.multiModelValue,Lr(r.monthPicker?ds(new Date,f.value||0):new Date,r.monthPicker?R:f.value||R),Lr(r.monthPicker?ds(new Date,w):new Date,R))},re=()=>{n("toggle"),n("reset-flow")},V=()=>{r.escClose&&re()},J=(w,R,A,d)=>{w&&(R.value===+r.modelValue&&!r.disabledValues.includes(R.value)&&(l.value=w),r.arrowNavigation&&(Array.isArray(c.value[A])?c.value[A][d]=w:c.value[A]=[w],E()))},E=()=>{var w,R;const A=(w=r.headerRefs)!=null&&w.length?[r.headerRefs].concat(c.value):c.value.concat([r.skipButtonRef?[]:[p.value]]);s(Ct(A),(R=r.headerRefs)!=null&&R.length?"monthPicker":"selectionGrid")};return e({focusGrid:T}),(w,R)=>{var A;return C(),j("div",{ref_key:"gridWrapRef",ref:h,class:Ge(_(P)),role:"dialog",tabindex:"0",onKeydown:be(V,["esc"])},[ye("div",{class:Ge(_(Q)),role:"grid"},[ye("div",AA,[te(w.$slots,"header")]),(C(!0),j(De,null,ut(_(H),(d,b)=>(C(),j("div",{class:"dp__overlay_row",key:b,role:"row"},[(C(!0),j(De,null,ut(d,(O,B)=>(C(),j("div",{role:"gridcell",class:Ge(_(D)),key:O.value,"aria-selected":O.value===t.modelValue&&!t.disabledValues.includes(O.value),"aria-disabled":O.className.dp__overlay_cell_disabled,ref_for:!0,ref:G=>J(G,O,b,B),tabindex:"0","data-test":O.text,onClick:G=>U(O.value),onKeydown:[be(G=>U(O.value),["enter"]),be(G=>U(O.value),["space"])],onMouseover:G=>f.value=O.value},[ye("div",{class:Ge(O.className)},[w.$slots.item?te(w.$slots,"item",{key:0,item:O}):$("",!0),w.$slots.item?$("",!0):(C(),j(De,{key:1},[En(Tt(O.text),1)],64))],2)],42,NA))),128))]))),128)),w.$slots["button-icon"]?jo((C(),j("div",{key:0,role:"button","aria-label":(A=t.ariaLabels)==null?void 0:A.toggleOverlay,class:Ge(_(W)),tabindex:"0",ref_key:"toggleButton",ref:p,onClick:re,onKeydown:be(re,["enter"])},[te(w.$slots,"button-icon")],42,xA)),[[Ho,!_(a)(t.type)]]):$("",!0)],2)],42,DA)}}}),MA=["aria-label"],Qy=Ve({__name:"RegularPicker",props:{ariaLabel:{type:String,default:""},showSelectionGrid:{type:Boolean,default:!1},modelValue:{type:Number,default:null},items:{type:Array,default:()=>[]},disabledValues:{type:Array,default:()=>[]},minValue:{type:Number,default:null},maxValue:{type:Number,default:null},slotName:{type:String,default:""},headerRefs:{type:Array,default:()=>[]},escClose:{type:Boolean,default:!0},type:{type:String,default:null},transitions:{type:[Object,Boolean],default:!1},arrowNavigation:{type:Boolean,default:!1},autoApply:{type:Boolean,default:!1},textInput:{type:Boolean,default:!1},ariaLabels:{type:Object,default:()=>({})},hideNavigation:{type:Array,default:()=>[]}},emits:["update:model-value","toggle","set-ref"],setup(t,{emit:e}){const n=t,{transitionName:r,showTransition:i}=al(n.transitions),s=X(null);return mn(()=>e("set-ref",s)),(o,a)=>(C(),j(De,null,[ye("div",{class:"dp__month_year_select",onClick:a[0]||(a[0]=u=>o.$emit("toggle")),onKeydown:[a[1]||(a[1]=be(u=>o.$emit("toggle"),["enter"])),a[2]||(a[2]=be(u=>o.$emit("toggle"),["space"]))],role:"button","aria-label":t.ariaLabel,tabindex:"0",ref_key:"elRef",ref:s},[te(o.$slots,"default")],40,MA),ir(mr,{name:_(r)(t.showSelectionGrid),css:_(i)},{default:Pe(()=>[t.showSelectionGrid?(C(),Ne(ps,wt({key:0},{modelValue:t.modelValue,items:t.items,disabledValues:t.disabledValues,minValue:t.minValue,maxValue:t.maxValue,escClose:t.escClose,type:t.type,arrowNavigation:t.arrowNavigation,textInput:t.textInput,autoApply:t.autoApply,ariaLabels:t.ariaLabels,hideNavigation:t.hideNavigation},{"header-refs":[],"onUpdate:modelValue":a[3]||(a[3]=u=>o.$emit("update:model-value",u)),onToggle:a[4]||(a[4]=u=>o.$emit("toggle"))}),Wt({"button-icon":Pe(()=>[o.$slots["calendar-icon"]?te(o.$slots,"calendar-icon",{key:0}):$("",!0),o.$slots["calendar-icon"]?$("",!0):(C(),Ne(_(ol),{key:1}))]),_:2},[o.$slots[t.slotName]?{name:"item",fn:Pe(({item:u})=>[te(o.$slots,t.slotName,{item:u})]),key:"0"}:void 0]),1040)):$("",!0)]),_:3},8,["name","css"])],64))}}),$A={class:"dp__month_year_row"},LA={class:"dp__month_year_wrap"},UA={class:"dp__month_picker_header"},FA=["aria-label"],VA=["aria-label"],BA=["aria-label"],jA=Ve({__name:"MonthYearPicker",props:{month:{type:Number,default:0},year:{type:Number,default:0},instance:{type:Number,default:0},years:{type:Array,default:()=>[]},months:{type:Array,default:()=>[]},internalModelValue:{type:[Date,Array],default:null},..._r},emits:["update-month-year","month-year-select","mount","reset-flow","overlay-closed"],setup(t,{expose:e,emit:n}){const r=t,{defaults:i}=Zt(r),{transitionName:s,showTransition:o}=al(i.value.transitions),{buildMatrix:a}=vr(),{handleMonthYearChange:u,isDisabled:l,updateMonthYear:h}=oA(r,n),c=X(!1),f=X(!1),p=X([null,null,null,null]),m=X(null),T=X(null),P=X(null);mn(()=>{n("mount")});const D=y=>({get:()=>r[y],set:N=>{const fe=y==="month"?"year":"month";n("update-month-year",{[y]:N,[fe]:r[fe]}),n("month-year-select",y==="year"),y==="month"?d(!0):b(!0)}}),S=K(D("month")),H=K(D("year")),W=K(()=>y=>{const N=y==="month";return{showSelectionGrid:(N?c:f).value,items:(N?E:w).value,disabledValues:i.value.filters[N?"months":"years"],minValue:(N?k:Q).value,maxValue:(N?U:v).value,headerRefs:N&&r.monthPicker?[m.value,T.value,P.value]:[],escClose:r.escClose,transitions:i.value.transitions,ariaLabels:i.value.ariaLabels,textInput:r.textInput,autoApply:r.autoApply,arrowNavigation:r.arrowNavigation,hideNavigation:r.hideNavigation}}),Q=K(()=>r.minDate?Ke(M(r.minDate)):null),v=K(()=>r.maxDate?Ke(M(r.maxDate)):null),k=K(()=>{if(r.minDate&&Q.value){if(Q.value>r.year)return 12;if(Q.value===r.year)return ze(M(r.minDate))}return null}),U=K(()=>r.maxDate&&v.value?v.value<r.year?-1:v.value===r.year?ze(M(r.maxDate)):null:null),Y=K(()=>r.range&&r.internalModelValue&&(r.monthPicker||r.yearPicker)?r.internalModelValue:[]),re=y=>y.reverse(),V=(y,N=!1)=>{const fe=[],Ee=we=>N?re(we):we;for(let we=0;we<y.length;we+=3){const gt=[y[we],y[we+1],y[we+2]];fe.push(Ee(gt))}return N?fe.reverse():fe},J=K(()=>r.months.find(N=>N.value===r.month)||{text:"",value:0}),E=K(()=>V(r.months)),w=K(()=>V(r.years,r.reverseYears)),R=K(()=>i.value.multiCalendars?r.multiCalendarsSolo?!0:r.instance===0:!0),A=K(()=>i.value.multiCalendars?r.multiCalendarsSolo?!0:r.instance===i.value.multiCalendars-1:!0),d=(y=!1)=>{O(y),c.value=!c.value,c.value||n("overlay-closed")},b=(y=!1)=>{O(y),f.value=!f.value,f.value||n("overlay-closed")},O=y=>{y||n("reset-flow")},B=(y=!1)=>{n("update-month-year",{year:y?r.year+1:r.year-1,month:r.month,fromNav:!0})},G=(y,N)=>{r.arrowNavigation&&(p.value[N]=St(y),a(p.value,"monthYear"))};return e({toggleMonthPicker:d,toggleYearPicker:b}),(y,N)=>{var fe,Ee,we,gt,$e;return C(),j("div",$A,[y.$slots["month-year"]?te(y.$slots,"month-year",ln(wt({key:0},{month:t.month,year:t.year,months:t.months,years:t.years,updateMonthYear:_(h),handleMonthYearChange:_(u),instance:t.instance}))):(C(),j(De,{key:1},[!y.monthPicker&&!y.yearPicker?(C(),j(De,{key:0},[_(R)&&!y.vertical?(C(),Ne(mc,{key:0,"aria-label":(fe=_(i).ariaLabels)==null?void 0:fe.prevMonth,disabled:_(l)(!1),onActivate:N[0]||(N[0]=z=>_(u)(!1)),onSetRef:N[1]||(N[1]=z=>G(z,0))},{default:Pe(()=>[y.$slots["arrow-left"]?te(y.$slots,"arrow-left",{key:0}):$("",!0),y.$slots["arrow-left"]?$("",!0):(C(),Ne(_($y),{key:1}))]),_:3},8,["aria-label","disabled"])):$("",!0),ye("div",LA,[ir(Qy,wt({type:"month","slot-name":"month-overlay","aria-label":(Ee=_(i).ariaLabels)==null?void 0:Ee.openMonthsOverlay,modelValue:_(S),"onUpdate:modelValue":N[2]||(N[2]=z=>An(S)?S.value=z:null)},_(W)("month"),{onToggle:d,onSetRef:N[3]||(N[3]=z=>G(z,1))}),Wt({default:Pe(()=>[y.$slots.month?te(y.$slots,"month",ln(wt({key:0},_(J)))):$("",!0),y.$slots.month?$("",!0):(C(),j(De,{key:1},[En(Tt(_(J).text),1)],64))]),_:2},[y.$slots["calendar-icon"]?{name:"calendar-icon",fn:Pe(()=>[te(y.$slots,"calendar-icon")]),key:"0"}:void 0,y.$slots["month-overlay-value"]?{name:"month-overlay",fn:Pe(({item:z})=>[te(y.$slots,"month-overlay-value",{text:z.text,value:z.value})]),key:"1"}:void 0]),1040,["aria-label","modelValue"]),ir(Qy,wt({type:"year","slot-name":"year-overlay","aria-label":(we=_(i).ariaLabels)==null?void 0:we.openYearsOverlay,modelValue:_(H),"onUpdate:modelValue":N[4]||(N[4]=z=>An(H)?H.value=z:null)},_(W)("year"),{onToggle:b,onSetRef:N[5]||(N[5]=z=>G(z,2))}),Wt({default:Pe(()=>[y.$slots.year?te(y.$slots,"year",{key:0,year:t.year}):$("",!0),y.$slots.year?$("",!0):(C(),j(De,{key:1},[En(Tt(t.year),1)],64))]),_:2},[y.$slots["calendar-icon"]?{name:"calendar-icon",fn:Pe(()=>[te(y.$slots,"calendar-icon")]),key:"0"}:void 0,y.$slots["year-overlay-value"]?{name:"year-overlay",fn:Pe(({item:z})=>[te(y.$slots,"year-overlay-value",{text:z.text,value:z.value})]),key:"1"}:void 0]),1040,["aria-label","modelValue"])]),_(R)&&y.vertical?(C(),Ne(mc,{key:1,"aria-label":(gt=_(i).ariaLabels)==null?void 0:gt.prevMonth,disabled:_(l)(!1),onActivate:N[6]||(N[6]=z=>_(u)(!1))},{default:Pe(()=>[y.$slots["arrow-up"]?te(y.$slots,"arrow-up",{key:0}):$("",!0),y.$slots["arrow-up"]?$("",!0):(C(),Ne(_($_),{key:1}))]),_:3},8,["aria-label","disabled"])):$("",!0),_(A)?(C(),Ne(mc,{key:2,ref:"rightIcon",disabled:_(l)(!0),"aria-label":($e=_(i).ariaLabels)==null?void 0:$e.nextMonth,onActivate:N[7]||(N[7]=z=>_(u)(!0)),onSetRef:N[8]||(N[8]=z=>G(z,3))},{default:Pe(()=>[y.$slots[y.vertical?"arrow-down":"arrow-right"]?te(y.$slots,y.vertical?"arrow-down":"arrow-right",{key:0}):$("",!0),y.$slots[y.vertical?"arrow-down":"arrow-right"]?$("",!0):(C(),Ne(Bo(y.vertical?_(L_):_(Ly)),{key:1}))]),_:3},8,["disabled","aria-label"])):$("",!0)],64)):$("",!0),y.monthPicker?(C(),Ne(ps,wt({key:1},_(W)("month"),{"skip-active":y.range,year:t.year,"multi-model-value":_(Y),"month-picker":"",modelValue:_(S),"onUpdate:modelValue":N[17]||(N[17]=z=>An(S)?S.value=z:null),onToggle:d,onSelected:N[18]||(N[18]=z=>y.$emit("overlay-closed"))}),Wt({header:Pe(()=>{var z,tt,Qt;return[ye("div",UA,[ye("div",{class:"dp__month_year_col_nav",tabindex:"0",ref_key:"mpPrevIconRef",ref:m,onClick:N[9]||(N[9]=le=>B(!1)),onKeydown:N[10]||(N[10]=be(le=>B(!1),["enter"]))},[ye("div",{class:"dp__inner_nav",role:"button","aria-label":(z=_(i).ariaLabels)==null?void 0:z.prevMonth},[y.$slots["arrow-left"]?te(y.$slots,"arrow-left",{key:0}):$("",!0),y.$slots["arrow-left"]?$("",!0):(C(),Ne(_($y),{key:1}))],8,FA)],544),ye("div",{class:"dp__pointer",role:"button",ref_key:"mpYearButtonRef",ref:T,"aria-label":(tt=_(i).ariaLabels)==null?void 0:tt.openYearsOverlay,tabindex:"0",onClick:N[11]||(N[11]=()=>b(!1)),onKeydown:N[12]||(N[12]=be(()=>b(!1),["enter"]))},[y.$slots.year?te(y.$slots,"year",{key:0,year:t.year}):$("",!0),y.$slots.year?$("",!0):(C(),j(De,{key:1},[En(Tt(t.year),1)],64))],40,VA),ye("div",{class:"dp__month_year_col_nav",tabindex:"0",ref_key:"mpNextIconRef",ref:P,onClick:N[13]||(N[13]=le=>B(!0)),onKeydown:N[14]||(N[14]=be(le=>B(!0),["enter"]))},[ye("div",{class:"dp__inner_nav",role:"button","aria-label":(Qt=_(i).ariaLabels)==null?void 0:Qt.nextMonth},[y.$slots["arrow-right"]?te(y.$slots,"arrow-right",{key:0}):$("",!0),y.$slots["arrow-right"]?$("",!0):(C(),Ne(_(Ly),{key:1}))],8,BA)],544)]),ir(mr,{name:_(s)(f.value),css:_(o)},{default:Pe(()=>[f.value?(C(),Ne(ps,wt({key:0},_(W)("year"),{modelValue:_(H),"onUpdate:modelValue":N[15]||(N[15]=le=>An(H)?H.value=le:null),onToggle:b,onSelected:N[16]||(N[16]=le=>y.$emit("overlay-closed"))}),Wt({"button-icon":Pe(()=>[y.$slots["calendar-icon"]?te(y.$slots,"calendar-icon",{key:0}):$("",!0),y.$slots["calendar-icon"]?$("",!0):(C(),Ne(_(ol),{key:1}))]),_:2},[y.$slots["year-overlay-value"]?{name:"item",fn:Pe(({item:le})=>[te(y.$slots,"year-overlay-value",{text:le.text,value:le.value})]),key:"0"}:void 0]),1040,["modelValue"])):$("",!0)]),_:3},8,["name","css"])]}),_:2},[y.$slots["month-overlay-value"]?{name:"item",fn:Pe(({item:z})=>[te(y.$slots,"month-overlay-value",{text:z.text,value:z.value})]),key:"0"}:void 0]),1040,["skip-active","year","multi-model-value","modelValue"])):$("",!0),y.yearPicker?(C(),Ne(ps,wt({key:2},_(W)("year"),{modelValue:_(H),"onUpdate:modelValue":N[19]||(N[19]=z=>An(H)?H.value=z:null),"multi-model-value":_(Y),"skip-active":y.range,"skip-button-ref":"","year-picker":"",onToggle:b,onSelected:N[20]||(N[20]=z=>y.$emit("overlay-closed"))}),Wt({_:2},[y.$slots["year-overlay-value"]?{name:"item",fn:Pe(({item:z})=>[te(y.$slots,"year-overlay-value",{text:z.text,value:z.value})]),key:"0"}:void 0]),1040,["modelValue","multi-model-value","skip-active"])):$("",!0)],64))])}}}),HA={key:0,class:"dp__time_input"},qA=["aria-label","onKeydown","onClick"],WA=["aria-label","onKeydown","onClick"],YA=["aria-label","onKeydown","onClick"],zA={key:0},KA=["aria-label","onKeydown"],GA=Ve({__name:"TimeInput",props:{hours:{type:Number,default:0},minutes:{type:Number,default:0},seconds:{type:Number,default:0},closeTimePickerBtn:{type:Object,default:null},order:{type:Number,default:0},..._r},emits:["set-hours","set-minutes","update:hours","update:minutes","update:seconds","reset-flow","mounted","overlay-closed"],setup(t,{expose:e,emit:n}){const r=t,{setTimePickerElements:i,setTimePickerBackRef:s}=vr(),{defaults:o}=Zt(r),{transitionName:a,showTransition:u}=al(o.value.transitions),l=cr({hours:!1,minutes:!1,seconds:!1}),h=X("AM"),c=X(null),f=X([]);mn(()=>{n("mounted")});const p=(E,w)=>d_(Ft(M(),E),w),m=(E,w)=>xP(Ft(M(),E),w),T=K(()=>({dp__time_col:!0,dp__time_col_reg:!r.enableSeconds&&r.is24,dp__time_col_reg_with_button:!r.enableSeconds&&!r.is24,dp__time_col_sec:r.enableSeconds&&r.is24,dp__time_col_sec_with_button:r.enableSeconds&&!r.is24})),P=K(()=>{const E=[{type:"hours"},{type:"",separator:!0},{type:"minutes"}];return r.enableSeconds?E.concat([{type:"",separator:!0},{type:"seconds"}]):E}),D=K(()=>P.value.filter(E=>!E.separator)),S=K(()=>E=>{if(E==="hours"){const w=U(r.hours);return{text:w<10?`0${w}`:`${w}`,value:w}}return{text:r[E]<10?`0${r[E]}`:`${r[E]}`,value:r[E]}}),H=E=>{const w=r.is24?24:12,R=E==="hours"?w:60,A=+r[`${E}GridIncrement`],d=E==="hours"&&!r.is24?A:0,b=[];for(let O=d;O<R;O+=A)b.push({value:O,text:O<10?`0${O}`:`${O}`});return E==="hours"&&!r.is24&&b.push({value:0,text:"12"}),YD(b)},W=E=>r[`no${E[0].toUpperCase()+E.slice(1)}Overlay`],Q=E=>{W(E)||(l[E]=!l[E],l[E]||n("overlay-closed"))},v=E=>E==="hours"?Nn:E==="minutes"?xn:Ci,k=(E,w=!0)=>{const R=w?p:m;n(`update:${E}`,v(E)(R({[E]:+r[E]},{[E]:+r[`${E}Increment`]})))},U=E=>r.is24?E:(E>=12?h.value="PM":h.value="AM",QD(E)),Y=()=>{h.value==="PM"?(h.value="AM",n("update:hours",r.hours-12)):(h.value="PM",n("update:hours",r.hours+12))},re=E=>{l[E]=!0},V=(E,w,R)=>{if(E&&r.arrowNavigation){Array.isArray(f.value[w])?f.value[w][R]=E:f.value[w]=[E];const A=f.value.reduce((d,b)=>b.map((O,B)=>[...d[B]||[],b[B]]),[]);s(r.closeTimePickerBtn),c.value&&(A[1]=A[1].concat(c.value)),i(A,r.order)}},J=(E,w)=>E==="hours"&&!r.is24?n(`update:${E}`,h.value==="PM"?w+12:w):n(`update:${E}`,w);return e({openChildCmp:re}),(E,w)=>{var R;return E.disabled?$("",!0):(C(),j("div",HA,[(C(!0),j(De,null,ut(_(P),(A,d)=>{var b,O,B;return C(),j("div",{key:d,class:Ge(_(T))},[A.separator?(C(),j(De,{key:0},[En(" : ")],64)):(C(),j(De,{key:1},[ye("div",{class:"dp__inc_dec_button",role:"button","aria-label":(b=_(o).ariaLabels)==null?void 0:b.incrementValue(A.type),tabindex:"0",onKeydown:[be(G=>k(A.type),["enter"]),be(G=>k(A.type),["space"])],onClick:G=>k(A.type),ref_for:!0,ref:G=>V(G,d,0)},[E.$slots["arrow-up"]?te(E.$slots,"arrow-up",{key:0}):$("",!0),E.$slots["arrow-up"]?$("",!0):(C(),Ne(_($_),{key:1}))],40,qA),ye("div",{role:"button","aria-label":(O=_(o).ariaLabels)==null?void 0:O.openTpOverlay(A.type),class:Ge(W(A.type)?"":"dp__time_display"),tabindex:"0",onKeydown:[be(G=>Q(A.type),["enter"]),be(G=>Q(A.type),["space"])],onClick:G=>Q(A.type),ref_for:!0,ref:G=>V(G,d,1)},[E.$slots[A.type]?te(E.$slots,A.type,{key:0,text:_(S)(A.type).text,value:_(S)(A.type).value}):$("",!0),E.$slots[A.type]?$("",!0):(C(),j(De,{key:1},[En(Tt(_(S)(A.type).text),1)],64))],42,WA),ye("div",{class:"dp__inc_dec_button",role:"button","aria-label":(B=_(o).ariaLabels)==null?void 0:B.decrementValue(A.type),tabindex:"0",onKeydown:[be(G=>k(A.type,!1),["enter"]),be(G=>k(A.type,!1),["space"])],onClick:G=>k(A.type,!1),ref_for:!0,ref:G=>V(G,d,2)},[E.$slots["arrow-down"]?te(E.$slots,"arrow-down",{key:0}):$("",!0),E.$slots["arrow-down"]?$("",!0):(C(),Ne(_(L_),{key:1}))],40,YA)],64))],2)}),128)),E.is24?$("",!0):(C(),j("div",zA,[E.$slots["am-pm-button"]?te(E.$slots,"am-pm-button",{key:0,toggle:Y,value:h.value}):$("",!0),E.$slots["am-pm-button"]?$("",!0):(C(),j("button",{key:1,ref_key:"amPmButton",ref:c,type:"button",class:"dp__pm_am_button",role:"button","aria-label":(R=_(o).ariaLabels)==null?void 0:R.amPmButton,tabindex:"0",onClick:Y,onKeydown:[be(Ln(Y,["prevent"]),["enter"]),be(Ln(Y,["prevent"]),["space"])]},Tt(h.value),41,KA))])),(C(!0),j(De,null,ut(_(D),(A,d)=>(C(),Ne(mr,{key:d,name:_(a)(l[A.type]),css:_(u)},{default:Pe(()=>[l[A.type]?(C(),Ne(ps,{key:0,items:H(A.type),"disabled-values":_(o).filters.times[A.type],"esc-close":E.escClose,"aria-labels":_(o).ariaLabels,"hide-navigation":E.hideNavigation,"onUpdate:modelValue":b=>J(A.type,b),onSelected:b=>Q(A.type),onToggle:b=>Q(A.type),onResetFlow:w[0]||(w[0]=b=>E.$emit("reset-flow")),type:A.type},Wt({"button-icon":Pe(()=>[E.$slots["clock-icon"]?te(E.$slots,"clock-icon",{key:0}):$("",!0),E.$slots["clock-icon"]?$("",!0):(C(),Ne(_(M_),{key:1}))]),_:2},[E.$slots[`${A.type}-overlay-value`]?{name:"item",fn:Pe(({item:b})=>[te(E.$slots,`${A.type}-overlay-value`,{text:b.text,value:b.value})]),key:"0"}:void 0]),1032,["items","disabled-values","esc-close","aria-labels","hide-navigation","onUpdate:modelValue","onSelected","onToggle","type"])):$("",!0)]),_:2},1032,["name","css"]))),128))]))}}}),QA=["aria-label"],XA={class:"dp__overlay_container dp__container_flex"},JA={key:1,class:"dp__overlay_row"},ZA=["aria-label"],eN=Ve({__name:"TimePicker",props:{hours:{type:[Number,Array],default:0},minutes:{type:[Number,Array],default:0},seconds:{type:[Number,Array],default:0},internalModelValue:{type:[Date,Array],default:null},..._r},emits:["update:hours","update:minutes","update:seconds","mount","reset-flow","overlay-closed"],setup(t,{expose:e,emit:n}){const r=t,{buildMatrix:i,setTimePicker:s}=vr(),o=dd(),{hideNavigationButtons:a,defaults:u}=Zt(r),{transitionName:l,showTransition:h}=al(u.value.transitions),c=X(null),f=X(null),p=X([]),m=X(null);mn(()=>{n("mount"),!r.timePicker&&r.arrowNavigation?i([St(c.value)],"time"):s(!0,r.timePicker)});const T=K(()=>r.range&&r.modelAuto?j_(r.internalModelValue):!0),P=X(!1),D=V=>({hours:Array.isArray(r.hours)?r.hours[V]:r.hours,minutes:Array.isArray(r.minutes)?r.minutes[V]:r.minutes,seconds:Array.isArray(r.seconds)?r.seconds[V]:r.seconds}),S=K(()=>{const V=[];if(r.range)for(let J=0;J<2;J++)V.push(D(J));else V.push(D(0));return V}),H=(V,J=!1,E="")=>{J||n("reset-flow"),P.value=V,r.arrowNavigation&&(s(V),V||n("overlay-closed")),zs(()=>{E!==""&&p.value[0]&&p.value[0].openChildCmp(E)})},W=K(()=>({dp__button:!0,dp__button_bottom:r.autoApply})),Q=Pr(o,"timePicker"),v=(V,J,E)=>r.range?J===0?[V,S.value[1][E]]:[S.value[0][E],V]:V,k=V=>{n("update:hours",V)},U=V=>{n("update:minutes",V)},Y=V=>{n("update:seconds",V)},re=()=>{m.value&&r.arrowNavigation&&m.value.focus({preventScroll:!0})};return e({toggleTimePicker:H}),(V,J)=>{var E;return C(),j("div",null,[V.timePicker?$("",!0):jo((C(),j("div",{key:0,class:Ge(_(W)),role:"button","aria-label":(E=_(u).ariaLabels)==null?void 0:E.openTimePicker,tabindex:"0",ref_key:"openTimePickerBtn",ref:c,onKeydown:[J[0]||(J[0]=be(w=>H(!0),["enter"])),J[1]||(J[1]=be(w=>H(!0),["space"]))],onClick:J[2]||(J[2]=w=>H(!0))},[V.$slots["clock-icon"]?te(V.$slots,"clock-icon",{key:0}):$("",!0),V.$slots["clock-icon"]?$("",!0):(C(),Ne(_(M_),{key:1}))],42,QA)),[[Ho,!_(a)("time")]]),ir(mr,{name:_(l)(P.value),css:_(h)},{default:Pe(()=>{var w;return[P.value||V.timePicker?(C(),j("div",{key:0,class:"dp__overlay",ref_key:"overlayRef",ref:m,tabindex:"0"},[ye("div",XA,[V.$slots["time-picker-overlay"]?te(V.$slots,"time-picker-overlay",{key:0,hours:t.hours,minutes:t.minutes,seconds:t.seconds,setHours:k,setMinutes:U,setSeconds:Y}):$("",!0),V.$slots["time-picker-overlay"]?$("",!0):(C(),j("div",JA,[(C(!0),j(De,null,ut(_(S),(R,A)=>jo((C(),Ne(GA,wt({key:A},{...V.$props,order:A,hours:R.hours,minutes:R.minutes,seconds:R.seconds,closeTimePickerBtn:f.value,disabled:A===0?V.fixedStart:V.fixedEnd},{ref_for:!0,ref_key:"timeInputRefs",ref:p,"onUpdate:hours":d=>k(v(d,A,"hours")),"onUpdate:minutes":d=>U(v(d,A,"minutes")),"onUpdate:seconds":d=>Y(v(d,A,"seconds")),onMounted:re,onOverlayClosed:re}),Wt({_:2},[ut(_(Q),(d,b)=>({name:d,fn:Pe(O=>[te(V.$slots,d,ln(Rr(O)))])}))]),1040,["onUpdate:hours","onUpdate:minutes","onUpdate:seconds"])),[[Ho,A===0?!0:_(T)]])),128))])),V.timePicker?$("",!0):jo((C(),j("div",{key:2,ref_key:"closeTimePickerBtn",ref:f,class:Ge(_(W)),role:"button","aria-label":(w=_(u).ariaLabels)==null?void 0:w.closeTimePicker,tabindex:"0",onKeydown:[J[3]||(J[3]=be(R=>H(!1),["enter"])),J[4]||(J[4]=be(R=>H(!1),["space"]))],onClick:J[5]||(J[5]=R=>H(!1))},[V.$slots["calendar-icon"]?te(V.$slots,"calendar-icon",{key:0}):$("",!0),V.$slots["calendar-icon"]?$("",!0):(C(),Ne(_(ol),{key:1}))],42,ZA)),[[Ho,!_(a)("time")]])])],512)):$("",!0)]}),_:3},8,["name","css"])])}}}),tN=(t,e)=>{const{isDisabled:n,matchDate:r,getWeekFromDate:i}=Zt(e),s=X(),o=X(M()),a=d=>{!d.current&&e.hideOffsetDates||(s.value=d.value)},u=()=>{s.value=null},l=d=>Array.isArray(t.value)&&e.range&&t.value[0]&&s.value?d?Bt(s.value,t.value[0]):Pt(s.value,t.value[0]):!0,h=(d,b)=>{const O=()=>t.value?b?t.value[0]||null:t.value[1]:null,B=t.value&&Array.isArray(t.value)?O():null;return We(M(d.value),B)},c=d=>{const b=Array.isArray(t.value)?t.value[0]:null;return d?!Pt(s.value||null,b):!0},f=(d,b=!0)=>(e.range||e.weekPicker)&&Array.isArray(t.value)?e.hideOffsetDates&&!d.current?!1:We(M(d.value),t.value[b?0:1]):e.range?h(d,b)&&c(b)||We(d.value,Array.isArray(t.value)?t.value[0]:null)&&l(b):!1,p=(d,b,O)=>Array.isArray(t.value)&&t.value[0]&&t.value.length===1?d?!1:O?Bt(t.value[0],b.value):Pt(t.value[0],b.value):!1,m=d=>!t.value||e.hideOffsetDates&&!d.current?!1:e.range?e.modelAuto&&Array.isArray(t.value)?We(d.value,t.value[0]?t.value[0]:o.value):!1:e.multiDates&&Array.isArray(t.value)?t.value.some(b=>We(b,d.value)):We(d.value,t.value?t.value:o.value),T=d=>{if(e.autoRange||e.weekPicker){if(s.value){if(e.hideOffsetDates&&!d.current)return!1;const b=sr(s.value,+e.autoRange),O=i(M(s.value));return e.weekPicker?We(O[1],M(d.value)):We(b,M(d.value))}return!1}return!1},P=d=>{if(e.autoRange||e.weekPicker){if(s.value){const b=sr(s.value,+e.autoRange);if(e.hideOffsetDates&&!d.current)return!1;const O=i(M(s.value));return e.weekPicker?Bt(d.value,O[0])&&Pt(d.value,O[1]):Bt(d.value,s.value)&&Pt(d.value,b)}return!1}return!1},D=d=>{if(e.autoRange||e.weekPicker){if(s.value){if(e.hideOffsetDates&&!d.current)return!1;const b=i(M(s.value));return e.weekPicker?We(b[0],d.value):We(s.value,d.value)}return!1}return!1},S=d=>U_(t.value,s.value,d.value),H=()=>e.modelAuto&&Array.isArray(e.internalModelValue)?!!e.internalModelValue[0]:!1,W=()=>e.modelAuto?j_(e.internalModelValue):!0,Q=d=>{if(Array.isArray(t.value)&&t.value.length||e.weekPicker)return!1;const b=e.range?!f(d)&&!f(d,!1):!0;return!n(d.value)&&!m(d)&&!(!d.current&&e.hideOffsetDates)&&b},v=d=>e.range?e.modelAuto?H()&&m(d):!1:m(d),k=d=>e.highlight?r(d.value,e.highlight):!1,U=d=>n(d.value)&&e.highlightDisabledDays===!1,Y=d=>e.highlightWeekDays&&e.highlightWeekDays.includes(d.value.getDay()),re=d=>(e.range||e.weekPicker)&&(e.multiCalendars>0?d.current:!0)&&W()&&!(!d.current&&e.hideOffsetDates)&&!m(d)?S(d):!1,V=d=>({dp__cell_offset:!d.current,dp__pointer:!e.disabled&&!(!d.current&&e.hideOffsetDates)&&!n(d.value),dp__cell_disabled:n(d.value),dp__cell_highlight:!U(d)&&(k(d)||Y(d))&&!v(d),dp__cell_highlight_active:!U&&(k(d)||Y(d))&&v(d),dp__today:!e.noToday&&We(d.value,o.value)&&d.current}),J=d=>({dp__active_date:v(d),dp__date_hover:Q(d)}),E=d=>({...w(d),...R(d),dp__range_between_week:re(d)&&e.weekPicker}),w=d=>({dp__range_start:e.multiCalendars>0?d.current&&f(d)&&W():f(d)&&W(),dp__range_end:e.multiCalendars>0?d.current&&f(d,!1)&&W():f(d,!1)&&W(),dp__range_between:re(d)&&!e.weekPicker,dp__date_hover_start:p(Q(d),d,!0),dp__date_hover_end:p(Q(d),d,!1)}),R=d=>({...w(d),dp__cell_auto_range:P(d),dp__cell_auto_range_start:D(d),dp__cell_auto_range_end:T(d)}),A=d=>e.range?e.autoRange?R(d):e.modelAuto?{...J(d),...w(d)}:w(d):e.weekPicker?E(d):J(d);return{setHoverDate:a,clearHoverDate:u,getDayClassData:d=>({...V(d),...A(d),[e.dayClass?e.dayClass(d.value):""]:!0,[e.calendarCellClassName]:!!e.calendarCellClassName})}},nN=["id","onKeydown"],rN={key:0,class:"dp__sidebar_left"},iN={key:1,class:"dp__preset_ranges"},sN=["onClick"],oN={key:2,class:"dp__sidebar_right"},aN={key:3,class:"dp__now_wrap"},uN=Ve({__name:"DatepickerMenu",props:{openOnTop:{type:Boolean,default:!1},internalModelValue:{type:[Date,Array],default:null},..._r},emits:["close-picker","select-date","auto-apply","time-update","flow-step","update-month-year","invalid-select","update:internal-model-value"],setup(t,{emit:e}){const n=t,{setMenuFocused:r,setShiftKey:i,control:s}=F_(),{getCalendarDays:o,defaults:a}=Zt(n),u=dd(),l=X(null),h=cr({timePicker:!!(!n.enableTimePicker||n.timePicker||n.monthPicker),monthYearInput:!!n.timePicker,calendar:!1}),c=X([]),f=X([]),p=X(null),m=X(null),T=X(0),P=X(!1),D=X(0);mn(()=>{var I;P.value=!0,!((I=n.presetRanges)!=null&&I.length)&&!u["left-sidebar"]&&!u["right-sidebar"]&&gn();const ee=St(m);if(ee&&!n.textInput&&!n.inline&&(r(!0),k()),ee){const Lt=qt=>{!n.monthYearComponent&&!n.timePickerComponent&&!Object.keys(u).length&&qt.preventDefault(),qt.stopImmediatePropagation(),qt.stopPropagation()};ee.addEventListener("pointerdown",Lt),ee.addEventListener("mousedown",Lt)}document.addEventListener("resize",gn)}),pd(()=>{document.removeEventListener("resize",gn)});const{arrowRight:S,arrowLeft:H,arrowDown:W,arrowUp:Q}=vr(),v=I=>{I||I===0?f.value[I].triggerTransition(V.value(I),J.value(I)):f.value.forEach((ee,Lt)=>ee.triggerTransition(V.value(Lt),J.value(Lt)))},k=()=>{const I=St(m);I&&I.focus({preventScroll:!0})},U=()=>{var I;((I=n.flow)==null?void 0:I.length)&&D.value!==-1&&(D.value+=1,e("flow-step",D.value),nt())},Y=()=>{D.value=-1},{modelValue:re,month:V,year:J,time:E,updateTime:w,updateMonthYear:R,selectDate:A,getWeekNum:d,monthYearSelect:b,handleScroll:O,handleArrow:B,handleSwipe:G,getMarker:y,selectCurrentDate:N,presetDateRange:fe}=iA(n,e,U,v),{setHoverDate:Ee,clearHoverDate:we,getDayClassData:gt}=tN(re,n),$e=Pr(u,"calendar"),z=Pr(u,"action"),tt=Pr(u,"timePicker"),Qt=Pr(u,"monthYear"),le=K(()=>n.openOnTop?"dp__arrow_bottom":"dp__arrow_top"),at=K(()=>KD(n.yearRange)),Xe=K(()=>GD(n.locale,n.monthNameFormat)),gn=()=>{const I=St(l);I&&(T.value=I.getBoundingClientRect().width)},Dn=K(()=>I=>o(V.value(I),J.value(I))),Tr=K(()=>a.value.multiCalendars>0&&n.range?[...Array(a.value.multiCalendars).keys()]:[0]),Qi=K(()=>I=>I===1),Yl=K(()=>n.monthPicker||n.timePicker||n.yearPicker),zl=K(()=>({dp__flex_display:a.value.multiCalendars>0})),wo=K(()=>({dp__instance_calendar:a.value.multiCalendars>0})),Xi=K(()=>({dp__menu_disabled:n.disabled,dp__menu_readonly:n.readonly})),Kl=K(()=>I=>Ql(Dn,I)),Gl=K(()=>({dp__menu:!0,dp__menu_index:!n.inline,dp__relative:n.inline,[n.menuClassName]:!!n.menuClassName})),Ql=(I,ee)=>I.value(ee).map(Lt=>({...Lt,days:Lt.days.map(qt=>(qt.marker=y(qt),qt.classData=gt(qt),qt))})),bo=I=>{I.stopPropagation(),I.preventDefault(),I.stopImmediatePropagation()},g=()=>{n.escClose&&e("close-picker")},x=(I,ee=!1)=>{A(I,ee),n.spaceConfirm&&e("select-date")},ie=I=>{var ee;(ee=n.flow)!=null&&ee.length&&(h[I]=!0,Object.keys(h).filter(Lt=>!h[Lt]).length||nt())},de=(I,ee,Lt,qt,...To)=>{if(n.flow[D.value]===I){const ae=qt?ee.value[0]:ee.value;ae&&ae[Lt](...To)}},nt=()=>{de("month",c,"toggleMonthPicker",!0,!0),de("year",c,"toggleYearPicker",!0,!0),de("calendar",p,"toggleTimePicker",!1,!1,!0),de("time",p,"toggleTimePicker",!1,!0,!0);const I=n.flow[D.value];(I==="hours"||I==="minutes"||I==="seconds")&&de(I,p,"toggleTimePicker",!1,!0,!0,I)},vn=I=>{if(n.arrowNavigation){if(I==="up")return Q();if(I==="down")return W();if(I==="left")return H();if(I==="right")return S()}else I==="left"||I==="up"?B("left",0,I==="up"):B("right",0,I==="down")},Sr=I=>{i(I.shiftKey),!n.disableMonthYearSelect&&I.code==="Tab"&&I.target.classList.contains("dp__menu")&&s.value.shiftKeyInMenu&&(I.preventDefault(),I.stopImmediatePropagation(),e("close-picker"))};return(I,ee)=>{var Lt;return C(),Ne(mr,{appear:"",name:(Lt=_(a).transitions)==null?void 0:Lt.menuAppear,mode:"out-in",css:!!I.transitions},{default:Pe(()=>{var qt,To;return[ye("div",{id:I.uid?`dp-menu-${I.uid}`:void 0,tabindex:"0",ref_key:"dpMenuRef",ref:m,role:"dialog",class:Ge(_(Gl)),onMouseleave:ee[12]||(ee[12]=(...ae)=>_(we)&&_(we)(...ae)),onClick:bo,onKeydown:[be(g,["esc"]),ee[13]||(ee[13]=be(Ln(ae=>vn("left"),["prevent"]),["left"])),ee[14]||(ee[14]=be(Ln(ae=>vn("up"),["prevent"]),["up"])),ee[15]||(ee[15]=be(Ln(ae=>vn("down"),["prevent"]),["down"])),ee[16]||(ee[16]=be(Ln(ae=>vn("right"),["prevent"]),["right"])),Sr]},[(I.disabled||I.readonly)&&I.inline?(C(),j("div",{key:0,class:Ge(_(Xi))},null,2)):$("",!0),!I.inline&&!I.teleportCenter?(C(),j("div",{key:1,class:Ge(_(le))},null,2)):$("",!0),ye("div",{class:Ge({dp__menu_content_wrapper:((qt=I.presetRanges)==null?void 0:qt.length)||!!I.$slots["left-sidebar"]||!!I.$slots["right-sidebar"]})},[I.$slots["left-sidebar"]?(C(),j("div",rN,[te(I.$slots,"left-sidebar")])):$("",!0),(To=I.presetRanges)!=null&&To.length?(C(),j("div",iN,[(C(!0),j(De,null,ut(I.presetRanges,(ae,ai)=>(C(),j("div",{key:ai,style:di(ae.style||{}),class:"dp__preset_range",onClick:Oe=>_(fe)(ae.range,!!ae.slot)},[ae.slot?te(I.$slots,ae.slot,{key:0,presetDateRange:_(fe),label:ae.label,range:ae.range}):(C(),j(De,{key:1},[En(Tt(ae.label),1)],64))],12,sN))),128))])):$("",!0),ye("div",{class:"dp__instance_calendar",ref_key:"calendarWrapperRef",ref:l,role:"document"},[ye("div",{class:Ge(_(zl))},[(C(!0),j(De,null,ut(_(Tr),(ae,ai)=>(C(),j("div",{key:ae,class:Ge(_(wo))},[!I.disableMonthYearSelect&&!I.timePicker?(C(),Ne(Bo(I.monthYearComponent?I.monthYearComponent:jA),wt({key:0,ref_for:!0,ref:Oe=>{Oe&&(c.value[ai]=Oe)},months:_(Xe),years:_(at),month:_(V)(ae),year:_(J)(ae),instance:ae,"internal-model-value":t.internalModelValue},I.$props,{onMount:ee[0]||(ee[0]=Oe=>ie("monthYearInput")),onResetFlow:Y,onUpdateMonthYear:Oe=>_(R)(ae,Oe),onMonthYearSelect:_(b),onOverlayClosed:k}),Wt({_:2},[ut(_(Qt),(Oe,TS)=>({name:Oe,fn:Pe(Xl=>[te(I.$slots,Oe,ln(Rr(Xl)))])}))]),1040,["months","years","month","year","instance","internal-model-value","onUpdateMonthYear","onMonthYearSelect"])):$("",!0),ir(RA,wt({ref_for:!0,ref:Oe=>{Oe&&(f.value[ai]=Oe)},"specific-mode":_(Yl),"get-week-num":_(d),instance:ae,"mapped-dates":_(Kl)(ae),month:_(V)(ae),year:_(J)(ae)},I.$props,{"flow-step":D.value,"onUpdate:flow-step":ee[1]||(ee[1]=Oe=>D.value=Oe),onSelectDate:Oe=>_(A)(Oe,!_(Qi)(ae)),onHandleSpace:Oe=>x(Oe,!_(Qi)(ae)),onSetHoverDate:ee[2]||(ee[2]=Oe=>_(Ee)(Oe)),onHandleScroll:Oe=>_(O)(Oe,ae),onHandleSwipe:Oe=>_(G)(Oe,ae),onMount:ee[3]||(ee[3]=Oe=>ie("calendar")),onResetFlow:Y}),Wt({_:2},[ut(_($e),(Oe,TS)=>({name:Oe,fn:Pe(Xl=>[te(I.$slots,Oe,ln(Rr({...Xl})))])}))]),1040,["specific-mode","get-week-num","instance","mapped-dates","month","year","flow-step","onSelectDate","onHandleSpace","onHandleScroll","onHandleSwipe"])],2))),128))],2),ye("div",null,[I.$slots["time-picker"]?te(I.$slots,"time-picker",ln(wt({key:0},{time:_(E),updateTime:_(w)}))):(C(),j(De,{key:1},[I.enableTimePicker&&!I.monthPicker&&!I.weekPicker?(C(),Ne(Bo(I.timePickerComponent?I.timePickerComponent:eN),wt({key:0,ref_key:"timePickerRef",ref:p,hours:_(E).hours,minutes:_(E).minutes,seconds:_(E).seconds,"internal-model-value":t.internalModelValue},I.$props,{onMount:ee[4]||(ee[4]=ae=>ie("timePicker")),"onUpdate:hours":ee[5]||(ee[5]=ae=>_(w)(ae)),"onUpdate:minutes":ee[6]||(ee[6]=ae=>_(w)(ae,!1)),"onUpdate:seconds":ee[7]||(ee[7]=ae=>_(w)(ae,!1,!0)),onResetFlow:Y,onOverlayClosed:k}),Wt({_:2},[ut(_(tt),(ae,ai)=>({name:ae,fn:Pe(Oe=>[te(I.$slots,ae,ln(Rr(Oe)))])}))]),1040,["hours","minutes","seconds","internal-model-value"])):$("",!0)],64))])],512),I.$slots["right-sidebar"]?(C(),j("div",oN,[te(I.$slots,"right-sidebar")])):$("",!0),I.showNowButton?(C(),j("div",aN,[I.$slots["now-button"]?te(I.$slots,"now-button",{key:0,selectCurrentDate:_(N)}):$("",!0),I.$slots["now-button"]?$("",!0):(C(),j("button",{key:1,type:"button",role:"button",class:"dp__now_button",onClick:ee[8]||(ee[8]=(...ae)=>_(N)&&_(N)(...ae))},Tt(I.nowButtonLabel),1))])):$("",!0)],2),I.$slots["action-row"]?te(I.$slots,"action-row",ln(wt({key:2},{internalModelValue:t.internalModelValue,selectDate:()=>I.$emit("select-date"),closePicker:()=>I.$emit("close-picker")}))):(C(),j(De,{key:3},[!I.autoApply||I.keepActionRow?(C(),Ne(Bo(I.actionRowComponent?I.actionRowComponent:_A),wt({key:0,"menu-mount":P.value,"calendar-width":T.value,"internal-model-value":t.internalModelValue},I.$props,{onClosePicker:ee[9]||(ee[9]=ae=>I.$emit("close-picker")),onSelectDate:ee[10]||(ee[10]=ae=>I.$emit("select-date")),onInvalidSelect:ee[11]||(ee[11]=ae=>I.$emit("invalid-select"))}),Wt({_:2},[ut(_(z),(ae,ai)=>({name:ae,fn:Pe(Oe=>[te(I.$slots,ae,ln(Rr({...Oe})))])}))]),1040,["menu-mount","calendar-width","internal-model-value"])):$("",!0)],64))],42,nN)]}),_:3},8,["name","css"])}}}),lN=void 0,yc=()=>{},cN=t=>RS()?(PS(t),!0):!1,hN=(t,e,n,r)=>{if(!t)return yc;let i=yc;const s=Ys(()=>_(t),a=>{i(),a&&(a.addEventListener(e,n,r),i=()=>{a.removeEventListener(e,n,r),i=yc})},{immediate:!0,flush:"post"}),o=()=>{s(),i()};return cN(o),o},fN=(t,e,n,r={})=>{const{window:i=lN,event:s="pointerdown"}=r;return i?hN(i,s,o=>{const a=St(t),u=St(e);!a||!u||a===o.target||o.composedPath().includes(a)||o.composedPath().includes(u)||n(o)},{passive:!0}):void 0},dN=Ve({__name:"VueDatePicker",props:{..._r},emits:["update:model-value","text-submit","closed","cleared","open","focus","blur","internal-model-change","recalculate-position","flow-step","update-month-year","invalid-select"],setup(t,{expose:e,emit:n}){const r=t,i=dd(),s=X(!1),o=Is(r,"modelValue"),a=Is(r,"timezone"),u=X(null),l=X(null),h=X(!1),{setMenuFocused:c,setShiftKey:f}=F_(),{clearArrowNav:p}=vr(),{validateDate:m,isValidTime:T,defaults:P}=Zt(r);mn(()=>{Y(r.modelValue),r.inline||(window.addEventListener("scroll",R),window.addEventListener("resize",A)),r.inline&&(s.value=!0)}),pd(()=>{r.inline||(window.removeEventListener("scroll",R),window.removeEventListener("resize",A))});const D=Pr(i,"all",r.presetRanges),S=Pr(i,"input");Ys([o,a],()=>{Y(o.value)},{deep:!0});const{openOnTop:H,menuPosition:W,setMenuPosition:Q,setInitialPosition:v}=aA(u,l,n,r),{inputValue:k,internalModelValue:U,parseExternalModelValue:Y,emitModelValue:re,formatInputValue:V,checkBeforeEmit:J}=sA(n,r,h),E=K(()=>({dp__main:!0,dp__theme_dark:r.dark,dp__theme_light:!r.dark,dp__flex_display:r.inline,dp__flex_display_with_input:r.inlineWithInput})),w=K(()=>r.dark?"dp__theme_dark":"dp__theme_light"),R=()=>{s.value&&(r.closeOnScroll?fe():r.autoPosition?Q():window.removeEventListener("scroll",R))},A=()=>{s.value&&Q()},d=()=>{!r.disabled&&!r.readonly&&(v(),s.value=!0,zs().then(()=>{Q(),s.value&&n("open")}),s.value||N(),Y(r.modelValue))},b=()=>{k.value="",N(),n("update:model-value",null),n("cleared"),fe()},O=()=>{const le=U.value;return!le||!Array.isArray(le)&&m(le)?!0:Array.isArray(le)?le.length===2&&m(le[0])&&m(le[1])?!0:m(le[0]):!1},B=()=>{J()&&O()?(re(),fe()):n("invalid-select",U.value)},G=le=>{re(),r.closeOnAutoApply&&!le&&fe()},y=(le=!1)=>{r.autoApply&&T(U.value)&&O()&&(r.range&&Array.isArray(U.value)?(r.partialRange||U.value.length===2)&&G(le):G(le))},N=()=>{r.textInput||(U.value=null)},fe=()=>{r.inline||(s.value&&(s.value=!1,c(!1),f(!1),p(),n("closed"),v(),k.value&&Y(o.value)),N(),l.value&&l.value.focusInput())},Ee=(le,at)=>{if(!le){U.value=null;return}U.value=le,at&&(B(),n("text-submit"))},we=()=>{r.autoApply&&T(U.value)&&re()},gt=()=>s.value?fe():d(),$e=le=>{U.value=le},z=K(()=>r.textInput&&P.value.textInputOptions.format),tt=()=>{z.value&&(h.value=!0,V()),n("focus")},Qt=()=>{z.value&&(h.value=!1,V()),n("blur")};return fN(u,l,r.onClickOutside?()=>r.onClickOutside(O):fe),e({closeMenu:fe,selectDate:B,clearValue:b,openMenu:d,onScroll:R,formatInputValue:V,updateInternalModelValue:$e}),(le,at)=>(C(),j("div",{class:Ge(_(E))},[ir(mA,wt({ref_key:"inputRef",ref:l,"is-menu-open":s.value,"input-value":_(k),"onUpdate:input-value":at[0]||(at[0]=Xe=>An(k)?k.value=Xe:null)},le.$props,{onClear:b,onOpen:d,onSetInputDate:Ee,onSetEmptyDate:_(re),onSelectDate:B,onToggle:gt,onClose:fe,onFocus:tt,onBlur:Qt}),Wt({_:2},[ut(_(S),(Xe,gn)=>({name:Xe,fn:Pe(Dn=>[te(le.$slots,Xe,ln(Rr(Dn)))])}))]),1040,["is-menu-open","input-value","onSetEmptyDate"]),s.value?(C(),Ne(kS,{key:0,to:le.teleport,disabled:le.inline},[s.value?(C(),Ne(uN,wt({key:0,ref_key:"dpMenuRef",ref:u,class:_(w),style:_(W),"open-on-top":_(H)},le.$props,{"internal-model-value":_(U),"onUpdate:internal-model-value":at[1]||(at[1]=Xe=>An(U)?U.value=Xe:null),onClosePicker:fe,onSelectDate:B,onAutoApply:y,onTimeUpdate:we,onFlowStep:at[2]||(at[2]=Xe=>le.$emit("flow-step",Xe)),onUpdateMonthYear:at[3]||(at[3]=Xe=>le.$emit("update-month-year",Xe)),onInvalidSelect:at[4]||(at[4]=Xe=>le.$emit("invalid-select",_(U)))}),Wt({_:2},[ut(_(D),(Xe,gn)=>({name:Xe,fn:Pe(Dn=>[te(le.$slots,Xe,ln(Rr({...Dn})))])}))]),1040,["class","style","open-on-top","internal-model-value"])):$("",!0)],8,["to","disabled"])):$("",!0)],2))}}),H_=(()=>{const t=dN;return t.install=e=>{e.component("Vue3DatePicker",t)},t})(),pN=Object.freeze(Object.defineProperty({__proto__:null,default:H_},Symbol.toStringTag,{value:"Module"}));Object.entries(pN).forEach(([t,e])=>{t!=="default"&&(H_[t]=e)});/**
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
 */const q_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const q=function(t,e){if(!t)throw Ui(e)},Ui=function(t){return new Error("Firebase Database ("+q_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const W_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},mN=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Pd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,l=u?t[i+2]:0,h=s>>2,c=(s&3)<<4|a>>4;let f=(a&15)<<2|l>>6,p=l&63;u||(p=64,o||(f=64)),r.push(n[h],n[c],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(W_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):mN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||c==null)throw Error();const f=s<<2|a>>4;if(r.push(f),l!==64){const p=a<<4&240|l>>2;if(r.push(p),c!==64){const m=l<<6&192|c;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Y_=function(t){const e=W_(t);return Pd.encodeByteArray(e,!0)},Iu=function(t){return Y_(t).replace(/\./g,"")},wf=function(t){try{return Pd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function yN(t){return z_(void 0,t)}function z_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!gN(n)||(t[n]=z_(t[n],e[n]));return t}function gN(t){return t!=="__proto__"}/**
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
 */function Ht(){return""}function vN(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function _N(){return!1}function wN(){const t=Ht();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function K_(){return q_.NODE_ADMIN===!0}function G_(){return typeof indexedDB=="object"}function Q_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function bN(){return!1}function TN(){if(typeof self<"u")return self;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const SN=()=>TN().__FIREBASE_DEFAULTS__,EN=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},IN=()=>{},Dd=()=>{try{return SN()||EN()||IN()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},X_=t=>{var e,n;return(n=(e=Dd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},CN=t=>{const e=X_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},kN=()=>{var t;return(t=Dd())===null||t===void 0?void 0:t.config},J_=t=>{var e;return(e=Dd())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Ad{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ON(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Iu(JSON.stringify(n)),Iu(JSON.stringify(o)),a].join(".")}/**
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
 */const RN="FirebaseError";class yn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=RN,Object.setPrototypeOf(this,yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ei.prototype.create)}}class ei{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?PN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new yn(i,a,r)}}function PN(t,e){return t.replace(DN,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const DN=/\{\$([^}]+)}/g;/**
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
 */function Cu(t){return JSON.parse(t)}function Dt(t){return JSON.stringify(t)}/**
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
 */const Z_=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Cu(wf(s[0])||""),n=Cu(wf(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},AN=function(t){const e=Z_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},NN=function(t){const e=Z_(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Xn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ki(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function bf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ku(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Cs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Xy(s)&&Xy(o)){if(!Cs(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Xy(t){return t!==null&&typeof t=="object"}/**
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
 */function Fi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class xN{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const f=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],u=this.chain_[4],l,h;for(let c=0;c<80;c++){c<40?c<20?(l=a^s&(o^a),h=1518500249):(l=s^o^a,h=1859775393):c<60?(l=s&o|a&(s|o),h=2400959708):(l=s^o^a,h=3395469782);const f=(i<<5|i>>>27)+l+u+h+r[c]&4294967295;u=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function MN(t,e){const n=new $N(t,e);return n.subscribe.bind(n)}class $N{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");LN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=gc),i.error===void 0&&(i.error=gc),i.complete===void 0&&(i.complete=gc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function LN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function gc(){}function UN(t,e){return`${t} failed: ${e} argument `}/**
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
 */const FN=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,q(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ul=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const VN=1e3,BN=2,jN=4*60*60*1e3,HN=.5;function Jy(t,e=VN,n=BN){const r=e*Math.pow(n,t),i=Math.round(HN*r*(Math.random()-.5)*2);return Math.min(jN,r+i)}/**
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
 */function Gt(t){return t&&t._delegate?t._delegate:t}class an{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const kr="[DEFAULT]";/**
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
 */class qN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ad;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(YN(e))try{this.getOrInitializeService({instanceIdentifier:kr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=kr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kr){return this.instances.has(e)}getOptions(e=kr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:WN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=kr){return this.component?this.component.multipleInstances?e:kr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function WN(t){return t===kr?void 0:t}function YN(t){return t.instantiationMode==="EAGER"}/**
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
 */class zN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new qN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Re||(Re={}));const KN={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},GN=Re.INFO,QN={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},XN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=QN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gs{constructor(e){this.name=e,this._logLevel=GN,this._logHandler=XN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?KN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}const JN=(t,e)=>e.some(n=>t instanceof n);let Zy,eg;function ZN(){return Zy||(Zy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ex(){return eg||(eg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const e0=new WeakMap,Tf=new WeakMap,t0=new WeakMap,vc=new WeakMap,Nd=new WeakMap;function tx(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(or(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&e0.set(n,t)}).catch(()=>{}),Nd.set(e,t),e}function nx(t){if(Tf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Tf.set(t,e)}let Sf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Tf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||t0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return or(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function rx(t){Sf=t(Sf)}function ix(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(_c(this),e,...n);return t0.set(r,e.sort?e.sort():[e]),or(r)}:ex().includes(t)?function(...e){return t.apply(_c(this),e),or(e0.get(this))}:function(...e){return or(t.apply(_c(this),e))}}function sx(t){return typeof t=="function"?ix(t):(t instanceof IDBTransaction&&nx(t),JN(t,ZN())?new Proxy(t,Sf):t)}function or(t){if(t instanceof IDBRequest)return tx(t);if(vc.has(t))return vc.get(t);const e=sx(t);return e!==t&&(vc.set(t,e),Nd.set(e,t)),e}const _c=t=>Nd.get(t);function n0(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=or(o);return r&&o.addEventListener("upgradeneeded",u=>{r(or(o.result),u.oldVersion,u.newVersion,or(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const ox=["get","getKey","getAll","getAllKeys","count"],ax=["put","add","delete","clear"],wc=new Map;function tg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(wc.get(e))return wc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=ax.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ox.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let l=u.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&u.done]))[0]};return wc.set(e,s),s}rx(t=>({...t,get:(e,n,r)=>tg(e,n)||t.get(e,n,r),has:(e,n)=>!!tg(e,n)||t.has(e,n)}));/**
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
 */class ux{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function lx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ef="@firebase/app",ng="0.8.4";/**
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
 */const Hr=new Gs("@firebase/app"),cx="@firebase/app-compat",hx="@firebase/analytics-compat",fx="@firebase/analytics",dx="@firebase/app-check-compat",px="@firebase/app-check",mx="@firebase/auth",yx="@firebase/auth-compat",gx="@firebase/database",vx="@firebase/database-compat",_x="@firebase/functions",wx="@firebase/functions-compat",bx="@firebase/installations",Tx="@firebase/installations-compat",Sx="@firebase/messaging",Ex="@firebase/messaging-compat",Ix="@firebase/performance",Cx="@firebase/performance-compat",kx="@firebase/remote-config",Ox="@firebase/remote-config-compat",Rx="@firebase/storage",Px="@firebase/storage-compat",Dx="@firebase/firestore",Ax="@firebase/firestore-compat",Nx="firebase",xx="9.14.0";/**
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
 */const If="[DEFAULT]",Mx={[Ef]:"fire-core",[cx]:"fire-core-compat",[fx]:"fire-analytics",[hx]:"fire-analytics-compat",[px]:"fire-app-check",[dx]:"fire-app-check-compat",[mx]:"fire-auth",[yx]:"fire-auth-compat",[gx]:"fire-rtdb",[vx]:"fire-rtdb-compat",[_x]:"fire-fn",[wx]:"fire-fn-compat",[bx]:"fire-iid",[Tx]:"fire-iid-compat",[Sx]:"fire-fcm",[Ex]:"fire-fcm-compat",[Ix]:"fire-perf",[Cx]:"fire-perf-compat",[kx]:"fire-rc",[Ox]:"fire-rc-compat",[Rx]:"fire-gcs",[Px]:"fire-gcs-compat",[Dx]:"fire-fst",[Ax]:"fire-fst-compat","fire-js":"fire-js",[Nx]:"fire-js-all"};/**
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
 */const Ou=new Map,Cf=new Map;function $x(t,e){try{t.container.addComponent(e)}catch(n){Hr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function pn(t){const e=t.name;if(Cf.has(e))return Hr.debug(`There were multiple attempts to register component ${e}.`),!1;Cf.set(e,t);for(const n of Ou.values())$x(n,t);return!0}function ti(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Lx={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ar=new ei("app","Firebase",Lx);/**
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
 */class Ux{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new an("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ar.create("app-deleted",{appName:this._name})}}/**
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
 */const Vi=xx;function r0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:If,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ar.create("bad-app-name",{appName:String(i)});if(n||(n=kN()),!n)throw ar.create("no-options");const s=Ou.get(i);if(s){if(Cs(n,s.options)&&Cs(r,s.config))return s;throw ar.create("duplicate-app",{appName:i})}const o=new zN(i);for(const u of Cf.values())o.addComponent(u);const a=new Ux(n,r,o);return Ou.set(i,a),a}function xd(t=If){const e=Ou.get(t);if(!e&&t===If)return r0();if(!e)throw ar.create("no-app",{appName:t});return e}function Kt(t,e,n){var r;let i=(r=Mx[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Hr.warn(a.join(" "));return}pn(new an(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Fx="firebase-heartbeat-database",Vx=1,ks="firebase-heartbeat-store";let bc=null;function i0(){return bc||(bc=n0(Fx,Vx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ks)}}}).catch(t=>{throw ar.create("idb-open",{originalErrorMessage:t.message})})),bc}async function Bx(t){var e;try{return(await i0()).transaction(ks).objectStore(ks).get(s0(t))}catch(n){if(n instanceof yn)Hr.warn(n.message);else{const r=ar.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Hr.warn(r.message)}}}async function rg(t,e){var n;try{const i=(await i0()).transaction(ks,"readwrite");return await i.objectStore(ks).put(e,s0(t)),i.done}catch(r){if(r instanceof yn)Hr.warn(r.message);else{const i=ar.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Hr.warn(i.message)}}}function s0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const jx=1024,Hx=30*24*60*60*1e3;class qx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Yx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ig();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Hx}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ig(),{heartbeatsToSend:n,unsentEntries:r}=Wx(this._heartbeatsCache.heartbeats),i=Iu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ig(){return new Date().toISOString().substring(0,10)}function Wx(t,e=jx){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),sg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),sg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Yx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return G_()?Q_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Bx(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function sg(t){return Iu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function zx(t){pn(new an("platform-logger",e=>new ux(e),"PRIVATE")),pn(new an("heartbeat",e=>new qx(e),"PRIVATE")),Kt(Ef,ng,t),Kt(Ef,ng,"esm2017"),Kt("fire-js","")}zx("");var Kx="firebase",Gx="9.14.0";/**
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
 */Kt(Kx,Gx,"app");const o0="@firebase/installations",Md="0.5.16";/**
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
 */const a0=1e4,u0=`w:${Md}`,l0="FIS_v2",Qx="https://firebaseinstallations.googleapis.com/v1",Xx=60*60*1e3,Jx="installations",Zx="Installations";/**
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
 */const eM={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},qr=new ei(Jx,Zx,eM);function c0(t){return t instanceof yn&&t.code.includes("request-failed")}/**
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
 */function h0({projectId:t}){return`${Qx}/projects/${t}/installations`}function f0(t){return{token:t.token,requestStatus:2,expiresIn:nM(t.expiresIn),creationTime:Date.now()}}async function d0(t,e){const r=(await e.json()).error;return qr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function p0({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function tM(t,{refreshToken:e}){const n=p0(t);return n.append("Authorization",rM(e)),n}async function m0(t){const e=await t();return e.status>=500&&e.status<600?t():e}function nM(t){return Number(t.replace("s","000"))}function rM(t){return`${l0} ${t}`}/**
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
 */async function iM({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=h0(t),i=p0(t),s=e.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={fid:n,authVersion:l0,appId:t.appId,sdkVersion:u0},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await m0(()=>fetch(r,a));if(u.ok){const l=await u.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:f0(l.authToken)}}else throw await d0("Create Installation",u)}/**
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
 */function y0(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function sM(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const oM=/^[cdef][\w-]{21}$/,kf="";function aM(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=uM(t);return oM.test(n)?n:kf}catch{return kf}}function uM(t){return sM(t).substr(0,22)}/**
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
 */function ll(t){return`${t.appName}!${t.appId}`}/**
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
 */const g0=new Map;function v0(t,e){const n=ll(t);_0(n,e),lM(n,e)}function _0(t,e){const n=g0.get(t);if(!!n)for(const r of n)r(e)}function lM(t,e){const n=cM();n&&n.postMessage({key:t,fid:e}),hM()}let Dr=null;function cM(){return!Dr&&"BroadcastChannel"in self&&(Dr=new BroadcastChannel("[Firebase] FID Change"),Dr.onmessage=t=>{_0(t.data.key,t.data.fid)}),Dr}function hM(){g0.size===0&&Dr&&(Dr.close(),Dr=null)}/**
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
 */const fM="firebase-installations-database",dM=1,Wr="firebase-installations-store";let Tc=null;function $d(){return Tc||(Tc=n0(fM,dM,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Wr)}}})),Tc}async function Ru(t,e){const n=ll(t),i=(await $d()).transaction(Wr,"readwrite"),s=i.objectStore(Wr),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&v0(t,e.fid),e}async function w0(t){const e=ll(t),r=(await $d()).transaction(Wr,"readwrite");await r.objectStore(Wr).delete(e),await r.done}async function cl(t,e){const n=ll(t),i=(await $d()).transaction(Wr,"readwrite"),s=i.objectStore(Wr),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&v0(t,a.fid),a}/**
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
 */async function Ld(t){let e;const n=await cl(t.appConfig,r=>{const i=pM(r),s=mM(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===kf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function pM(t){const e=t||{fid:aM(),registrationStatus:0};return b0(e)}function mM(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(qr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=yM(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:gM(t)}:{installationEntry:e}}async function yM(t,e){try{const n=await iM(t,e);return Ru(t.appConfig,n)}catch(n){throw c0(n)&&n.customData.serverCode===409?await w0(t.appConfig):await Ru(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function gM(t){let e=await og(t.appConfig);for(;e.registrationStatus===1;)await y0(100),e=await og(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ld(t);return r||n}return e}function og(t){return cl(t,e=>{if(!e)throw qr.create("installation-not-found");return b0(e)})}function b0(t){return vM(t)?{fid:t.fid,registrationStatus:0}:t}function vM(t){return t.registrationStatus===1&&t.registrationTime+a0<Date.now()}/**
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
 */async function _M({appConfig:t,heartbeatServiceProvider:e},n){const r=wM(t,n),i=tM(t,n),s=e.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={installation:{sdkVersion:u0,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await m0(()=>fetch(r,a));if(u.ok){const l=await u.json();return f0(l)}else throw await d0("Generate Auth Token",u)}function wM(t,{fid:e}){return`${h0(t)}/${e}/authTokens:generate`}/**
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
 */async function Ud(t,e=!1){let n;const r=await cl(t.appConfig,s=>{if(!T0(s))throw qr.create("not-registered");const o=s.authToken;if(!e&&SM(o))return s;if(o.requestStatus===1)return n=bM(t,e),s;{if(!navigator.onLine)throw qr.create("app-offline");const a=IM(s);return n=TM(t,a),a}});return n?await n:r.authToken}async function bM(t,e){let n=await ag(t.appConfig);for(;n.authToken.requestStatus===1;)await y0(100),n=await ag(t.appConfig);const r=n.authToken;return r.requestStatus===0?Ud(t,e):r}function ag(t){return cl(t,e=>{if(!T0(e))throw qr.create("not-registered");const n=e.authToken;return CM(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function TM(t,e){try{const n=await _M(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Ru(t.appConfig,r),n}catch(n){if(c0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await w0(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ru(t.appConfig,r)}throw n}}function T0(t){return t!==void 0&&t.registrationStatus===2}function SM(t){return t.requestStatus===2&&!EM(t)}function EM(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Xx}function IM(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function CM(t){return t.requestStatus===1&&t.requestTime+a0<Date.now()}/**
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
 */async function kM(t){const e=t,{installationEntry:n,registrationPromise:r}=await Ld(e);return r?r.catch(console.error):Ud(e).catch(console.error),n.fid}/**
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
 */async function OM(t,e=!1){const n=t;return await RM(n),(await Ud(n,e)).token}async function RM(t){const{registrationPromise:e}=await Ld(t);e&&await e}/**
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
 */function PM(t){if(!t||!t.options)throw Sc("App Configuration");if(!t.name)throw Sc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Sc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Sc(t){return qr.create("missing-app-config-values",{valueName:t})}/**
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
 */const S0="installations",DM="installations-internal",AM=t=>{const e=t.getProvider("app").getImmediate(),n=PM(e),r=ti(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},NM=t=>{const e=t.getProvider("app").getImmediate(),n=ti(e,S0).getImmediate();return{getId:()=>kM(n),getToken:i=>OM(n,i)}};function xM(){pn(new an(S0,AM,"PUBLIC")),pn(new an(DM,NM,"PRIVATE"))}xM();Kt(o0,Md);Kt(o0,Md,"esm2017");/**
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
 */const Pu="analytics",MM="firebase_id",$M="origin",LM=60*1e3,UM="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",E0="https://www.googletagmanager.com/gtag/js";/**
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
 */const Xt=new Gs("@firebase/analytics");/**
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
 */function I0(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function FM(t,e){const n=document.createElement("script");n.src=`${E0}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function VM(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function BM(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await I0(n)).find(l=>l.measurementId===i);u&&await e[u.appId]}}catch(a){Xt.error(a)}t("config",i,s)}async function jM(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await I0(n);for(const u of o){const l=a.find(c=>c.measurementId===u),h=l&&e[l.appId];if(h)s.push(h);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Xt.error(s)}}function HM(t,e,n,r){async function i(s,o,a){try{s==="event"?await jM(t,e,n,o,a):s==="config"?await BM(t,e,n,r,o,a):s==="consent"?t("consent","update",a):t("set",o)}catch(u){Xt.error(u)}}return i}function qM(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&"undefined"[i]==="function"&&(s=window[i]),window[i]=HM(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function WM(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(E0)&&n.src.includes(t))return n;return null}/**
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
 */const YM={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},rn=new ei("analytics","Analytics",YM);/**
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
 */const zM=30,KM=1e3;class GM{constructor(e={},n=KM){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const C0=new GM;function QM(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function XM(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:QM(r)},s=UM.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(a=u.error.message)}catch{}throw rn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function JM(t,e=C0,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw rn.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw rn.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new t$;return setTimeout(async()=>{a.abort()},n!==void 0?n:LM),k0({appId:r,apiKey:i,measurementId:s},o,a,e)}async function k0(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=C0){var s,o;const{appId:a,measurementId:u}=t;try{await ZM(r,e)}catch(l){if(u)return Xt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${(s=l)===null||s===void 0?void 0:s.message}]`),{appId:a,measurementId:u};throw l}try{const l=await XM(t);return i.deleteThrottleMetadata(a),l}catch(l){const h=l;if(!e$(h)){if(i.deleteThrottleMetadata(a),u)return Xt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:u};throw l}const c=Number((o=h==null?void 0:h.customData)===null||o===void 0?void 0:o.httpStatus)===503?Jy(n,i.intervalMillis,zM):Jy(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(a,f),Xt.debug(`Calling attemptFetch again in ${c} millis`),k0(t,f,r,i)}}function ZM(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(rn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function e$(t){if(!(t instanceof yn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class t${constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function n$(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function r$(){var t;if(G_())try{await Q_()}catch(e){return Xt.warn(rn.create("indexeddb-unavailable",{errorInfo:(t=e)===null||t===void 0?void 0:t.toString()}).message),!1}else return Xt.warn(rn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function i$(t,e,n,r,i,s,o){var a;const u=JM(t);u.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&Xt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>Xt.error(p)),e.push(u);const l=r$().then(p=>{if(p)return r.getId()}),[h,c]=await Promise.all([u,l]);WM(s)||FM(s,h.measurementId),i("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[$M]="firebase",f.update=!0,c!=null&&(f[MM]=c),i("config",h.measurementId,f),h.measurementId}/**
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
 */class s${constructor(e){this.app=e}_delete(){return delete ms[this.app.options.appId],Promise.resolve()}}let ms={},ug=[];const lg={};let Ec="dataLayer",o$="gtag",cg,O0,hg=!1;function a$(){const t=[];if(vN()&&t.push("This is a browser extension environment."),bN()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=rn.create("invalid-analytics-context",{errorInfo:e});Xt.warn(n.message)}}function u$(t,e,n){a$();const r=t.options.appId;if(!r)throw rn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Xt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw rn.create("no-api-key");if(ms[r]!=null)throw rn.create("already-exists",{id:r});if(!hg){VM(Ec);const{wrappedGtag:s,gtagCore:o}=qM(ms,ug,lg,Ec,o$);O0=s,cg=o,hg=!0}return ms[r]=i$(t,ug,lg,e,cg,Ec,n),new s$(t)}function iH(t=xd()){t=Gt(t);const e=ti(t,Pu);return e.isInitialized()?e.getImmediate():l$(t)}function l$(t,e={}){const n=ti(t,Pu);if(n.isInitialized()){const i=n.getImmediate();if(Cs(e,n.getOptions()))return i;throw rn.create("already-initialized")}return n.initialize({options:e})}function c$(t,e,n,r){t=Gt(t),n$(O0,ms[t.app.options.appId],e,n,r).catch(i=>Xt.error(i))}const fg="@firebase/analytics",dg="0.8.4";function h$(){pn(new an(Pu,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return u$(r,i,n)},"PUBLIC")),pn(new an("analytics-internal",t,"PRIVATE")),Kt(fg,dg),Kt(fg,dg,"esm2017");function t(e){try{const n=e.getProvider(Pu).getImmediate();return{logEvent:(r,i,s)=>c$(n,r,i,s)}}catch(n){throw rn.create("interop-component-reg-failed",{reason:n})}}}h$();const ko=void 0;function Fd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function R0(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const f$=R0,P0=new ei("auth","Firebase",R0());/**
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
 */const pg=new Gs("@firebase/auth");function Da(t,...e){pg.logLevel<=Re.ERROR&&pg.error(`Auth (${Vi}): ${t}`,...e)}/**
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
 */function Rn(t,...e){throw Vd(t,...e)}function In(t,...e){return Vd(t,...e)}function D0(t,e,n){const r=Object.assign(Object.assign({},f$()),{[e]:n});return new ei("auth","Firebase",r).create(e,{appName:t.name})}function d$(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Rn(t,"argument-error"),D0(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Vd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return P0.create(t,...e)}function pe(t,e,...n){if(!t)throw Vd(e,...n)}function Un(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Da(e),new Error(e)}function Wn(t,e){t||Un(e)}/**
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
 */const mg=new Map;function Fn(t){Wn(t instanceof Function,"Expected a class definition");let e=mg.get(t);return e?(Wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,mg.set(t,e),e)}/**
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
 */function p$(t,e){const n=ti(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Cs(s,e!=null?e:{}))return i;Rn(i,"already-initialized")}return n.initialize({options:e})}function m$(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Of(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}/**
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
 */function y$(){return!0}function g$(){return null}/**
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
 */class Qs{constructor(e,n){this.shortDelay=e,this.longDelay=n,Wn(n>e,"Short delay should be less than long delay!"),this.isMobile=_N()}get(){return y$()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Bd(t,e){Wn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class A0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const v$={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const _$=new Qs(3e4,6e4);function w$(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function hl(t,e,n,r,i={}){return N0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Fi(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),A0.fetch()(x0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function N0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},v$),e);try{const i=new T$(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Oo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,l]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Oo(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Oo(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Oo(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw D0(t,h,l);Rn(t,h)}}catch(i){if(i instanceof yn)throw i;Rn(t,"network-request-failed")}}async function b$(t,e,n,r,i={}){const s=await hl(t,e,n,r,i);return"mfaPendingCredential"in s&&Rn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function x0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Bd(t.config,i):`${t.config.apiScheme}://${i}`}class T${constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(In(this.auth,"network-request-failed")),_$.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Oo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=In(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function S$(t,e){return hl(t,"POST","/v1/accounts:delete",e)}async function E$(t,e){return hl(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ys(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function I$(t,e=!1){const n=Gt(t),r=await n.getIdToken(e),i=jd(r);pe(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ys(Ic(i.auth_time)),issuedAtTime:ys(Ic(i.iat)),expirationTime:ys(Ic(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ic(t){return Number(t)*1e3}function jd(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return Da("JWT malformed, contained fewer than 3 sections"),null;try{const s=wf(r);return s?JSON.parse(s):(Da("Failed to decode base64 JWT payload"),null)}catch(s){return Da("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function C$(t){const e=jd(t);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Os(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof yn&&k$(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function k$({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class O${constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class M0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ys(this.lastLoginAt),this.creationTime=ys(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Du(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Os(t,E$(n,{idToken:r}));pe(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?D$(s.providerUserInfo):[],a=P$(t.providerData,o),u=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=u?l:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new M0(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,c)}async function R$(t){const e=Gt(t);await Du(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function P$(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function D$(t){return t.map(e=>{var{providerId:n}=e,r=Fd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function A$(t,e){const n=await N0(t,{},async()=>{const r=Fi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=x0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",A0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Rs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):C$(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return pe(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await A$(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Rs;return r&&(pe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(pe(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(pe(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Rs,this.toJSON())}_performRefresh(){return Un("not implemented")}}/**
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
 */function Zn(t,e){pe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ur{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Fd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new O$(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new M0(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Os(this,this.stsTokenManager.getToken(this.auth,e));return pe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return I$(this,e)}reload(){return R$(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ur(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Du(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Os(this,S$(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,l,h;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,D=(l=n.createdAt)!==null&&l!==void 0?l:void 0,S=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:H,emailVerified:W,isAnonymous:Q,providerData:v,stsTokenManager:k}=n;pe(H&&k,e,"internal-error");const U=Rs.fromJSON(this.name,k);pe(typeof H=="string",e,"internal-error"),Zn(c,e.name),Zn(f,e.name),pe(typeof W=="boolean",e,"internal-error"),pe(typeof Q=="boolean",e,"internal-error"),Zn(p,e.name),Zn(m,e.name),Zn(T,e.name),Zn(P,e.name),Zn(D,e.name),Zn(S,e.name);const Y=new Ur({uid:H,auth:e,email:f,emailVerified:W,displayName:c,isAnonymous:Q,photoURL:m,phoneNumber:p,tenantId:T,stsTokenManager:U,createdAt:D,lastLoginAt:S});return v&&Array.isArray(v)&&(Y.providerData=v.map(re=>Object.assign({},re))),P&&(Y._redirectEventId=P),Y}static async _fromIdTokenResponse(e,n,r=!1){const i=new Rs;i.updateFromServerResponse(n);const s=new Ur({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Du(s),s}}/**
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
 */class $0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$0.type="NONE";const yg=$0;/**
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
 */function Aa(t,e,n){return`firebase:${t}:${e}:${n}`}class _i{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Aa(this.userKey,i.apiKey,s),this.fullPersistenceKey=Aa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ur._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new _i(Fn(yg),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Fn(yg);const o=Aa(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const h=await l._get(o);if(h){const c=Ur._fromJSON(e,h);l!==s&&(a=c),s=l;break}}catch{}const u=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new _i(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new _i(s,e,r))}}/**
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
 */function gg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(F0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(L0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(B0(e))return"Blackberry";if(j0(e))return"Webos";if(Hd(e))return"Safari";if((e.includes("chrome/")||U0(e))&&!e.includes("edge/"))return"Chrome";if(V0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function L0(t=Ht()){return/firefox\//i.test(t)}function Hd(t=Ht()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function U0(t=Ht()){return/crios\//i.test(t)}function F0(t=Ht()){return/iemobile/i.test(t)}function V0(t=Ht()){return/android/i.test(t)}function B0(t=Ht()){return/blackberry/i.test(t)}function j0(t=Ht()){return/webos/i.test(t)}function fl(t=Ht()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function N$(t=Ht()){var e;return fl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function x$(){return wN()&&document.documentMode===10}function H0(t=Ht()){return fl(t)||V0(t)||j0(t)||B0(t)||/windows phone/i.test(t)||F0(t)}function M$(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function q0(t,e=[]){let n;switch(t){case"Browser":n=gg(Ht());break;case"Worker":n=`${gg(Ht())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vi}/${r}`}/**
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
 */class $${constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class L${constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vg(this),this.idTokenSubscription=new vg(this),this.beforeStateQueue=new $$(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=P0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Fn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await _i.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u==null?void 0:u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Du(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=g$()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Gt(e):null;return n&&pe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Fn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ei("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Fn(e)||this._popupRedirectResolver;pe(n,this,"argument-error"),this.redirectPersistenceManager=await _i.create(this,[Fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return pe(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=q0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function dl(t){return Gt(t)}class vg{constructor(e){this.auth=e,this.observer=null,this.addObserver=MN(n=>this.observer=n)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function U$(t,e,n){const r=dl(t);pe(r._canInitEmulator,r,"emulator-config-failed"),pe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=W0(e),{host:o,port:a}=F$(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||V$()}function W0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function F$(t){const e=W0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:_g(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:_g(o)}}}function _g(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function V$(){typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.")}/**
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
 */class Y0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Un("not implemented")}_getIdTokenResponse(e){return Un("not implemented")}_linkToIdToken(e,n){return Un("not implemented")}_getReauthenticationResolver(e){return Un("not implemented")}}/**
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
 */async function wi(t,e){return b$(t,"POST","/v1/accounts:signInWithIdp",w$(t,e))}/**
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
 */const B$="http://localhost";class Yr extends Y0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Rn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Fd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Yr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return wi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,wi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,wi(e,n)}buildRequest(){const e={requestUri:B$,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fi(n)}return e}}/**
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
 */class qd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Xs extends qd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class tr extends Xs{constructor(){super("facebook.com")}static credential(e){return Yr._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tr.credential(e.oauthAccessToken)}catch{return null}}}tr.FACEBOOK_SIGN_IN_METHOD="facebook.com";tr.PROVIDER_ID="facebook.com";/**
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
 */class Mn extends Xs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Mn.credential(n,r)}catch{return null}}}Mn.GOOGLE_SIGN_IN_METHOD="google.com";Mn.PROVIDER_ID="google.com";/**
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
 */class nr extends Xs{constructor(){super("github.com")}static credential(e){return Yr._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.GITHUB_SIGN_IN_METHOD="github.com";nr.PROVIDER_ID="github.com";/**
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
 */class rr extends Xs{constructor(){super("twitter.com")}static credential(e,n){return Yr._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return rr.credential(n,r)}catch{return null}}}rr.TWITTER_SIGN_IN_METHOD="twitter.com";rr.PROVIDER_ID="twitter.com";/**
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
 */class Oi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ur._fromIdTokenResponse(e,r,i),o=wg(r);return new Oi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=wg(r);return new Oi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function wg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Au extends yn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Au.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Au(e,n,r,i)}}function z0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Au._fromErrorAndOperation(t,s,e,r):s})}async function j$(t,e,n=!1){const r=await Os(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Oi._forOperation(t,"link",r)}/**
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
 */async function H$(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await Os(t,z0(i,s,e,t),n);pe(o.idToken,i,"internal-error");const a=jd(o.idToken);pe(a,i,"internal-error");const{sub:u}=a;return pe(t.uid===u,i,"user-mismatch"),Oi._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Rn(i,"user-mismatch"),o}}/**
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
 */async function q$(t,e,n=!1){const r="signIn",i=await z0(t,r,e),s=await Oi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function W$(t,e,n,r){return Gt(t).onIdTokenChanged(e,n,r)}function Y$(t,e,n){return Gt(t).beforeAuthStateChanged(e,n)}function z$(t){return Gt(t).signOut()}const Nu="__sak";/**
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
 */class K0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Nu,"1"),this.storage.removeItem(Nu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function K$(){const t=Ht();return Hd(t)||fl(t)}const G$=1e3,Q$=10;class G0 extends K0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=K$()&&M$(),this.fallbackToPolling=H0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);x$()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Q$):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},G$)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}G0.type="LOCAL";const X$=G0;/**
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
 */class Q0 extends K0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Q0.type="SESSION";const X0=Q0;/**
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
 */function J$(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class pl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new pl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),u=await J$(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pl.receivers=[];/**
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
 */function Wd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Z${constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const l=Wd("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const f=c;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Cn(){return window}function eL(t){Cn().location.href=t}/**
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
 */function J0(){return typeof Cn().WorkerGlobalScope<"u"&&typeof Cn().importScripts=="function"}async function tL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nL(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function rL(){return J0()?self:null}/**
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
 */const Z0="firebaseLocalStorageDb",iL=1,xu="firebaseLocalStorage",ew="fbase_key";class Js{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ml(t,e){return t.transaction([xu],e?"readwrite":"readonly").objectStore(xu)}function sL(){const t=indexedDB.deleteDatabase(Z0);return new Js(t).toPromise()}function Rf(){const t=indexedDB.open(Z0,iL);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(xu,{keyPath:ew})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(xu)?e(r):(r.close(),await sL(),e(await Rf()))})})}async function bg(t,e,n){const r=ml(t,!0).put({[ew]:e,value:n});return new Js(r).toPromise()}async function oL(t,e){const n=ml(t,!1).get(e),r=await new Js(n).toPromise();return r===void 0?null:r.value}function Tg(t,e){const n=ml(t,!0).delete(e);return new Js(n).toPromise()}const aL=800,uL=3;class tw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>uL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return J0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pl._getInstance(rL()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await tL(),!this.activeServiceWorker)return;this.sender=new Z$(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rf();return await bg(e,Nu,"1"),await Tg(e,Nu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>bg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>oL(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Tg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ml(i,!1).getAll();return new Js(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}tw.type="LOCAL";const lL=tw;/**
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
 */function cL(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function hL(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=In("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",cL().appendChild(r)})}function fL(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Qs(3e4,6e4);/**
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
 */function nw(t,e){return e?Fn(e):(pe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Yd extends Y0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return wi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return wi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return wi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dL(t){return q$(t.auth,new Yd(t),t.bypassAuthState)}function pL(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),H$(n,new Yd(t),t.bypassAuthState)}async function mL(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),j$(n,new Yd(t),t.bypassAuthState)}/**
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
 */class rw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dL;case"linkViaPopup":case"linkViaRedirect":return mL;case"reauthViaPopup":case"reauthViaRedirect":return pL;default:Rn(this.auth,"internal-error")}}resolve(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const yL=new Qs(2e3,1e4);async function gL(t,e,n){const r=dl(t);d$(t,e,qd);const i=nw(r,n);return new Ar(r,"signInViaPopup",e,i).executeNotNull()}class Ar extends rw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ar.currentPopupAction&&Ar.currentPopupAction.cancel(),Ar.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){Wn(this.filter.length===1,"Popup operations only handle one event");const e=Wd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(In(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(In(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ar.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(In(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,yL.get())};e()}}Ar.currentPopupAction=null;/**
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
 */const vL="pendingRedirect",Na=new Map;class _L extends rw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Na.get(this.auth._key());if(!e){try{const r=await wL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Na.set(this.auth._key(),e)}return this.bypassAuthState||Na.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wL(t,e){const n=SL(e),r=TL(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function bL(t,e){Na.set(t._key(),e)}function TL(t){return Fn(t._redirectPersistence)}function SL(t){return Aa(vL,t.config.apiKey,t.name)}async function EL(t,e,n=!1){const r=dl(t),i=nw(r,e),o=await new _L(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const IL=10*60*1e3;class CL{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kL(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!iw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(In(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=IL&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sg(e))}saveEventToCache(e){this.cachedEventUids.add(Sg(e)),this.lastProcessedEventTime=Date.now()}}function Sg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function iw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kL(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iw(t);default:return!1}}/**
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
 */async function OL(t,e={}){return hl(t,"GET","/v1/projects",e)}/**
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
 */const RL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,PL=/^https?/;async function DL(t){if(t.config.emulator)return;const{authorizedDomains:e}=await OL(t);for(const n of e)try{if(AL(n))return}catch{}Rn(t,"unauthorized-domain")}function AL(t){const e=Of(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!PL.test(n))return!1;if(RL.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const NL=new Qs(3e4,6e4);function Eg(){const t=Cn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function xL(t){return new Promise((e,n)=>{var r,i,s;function o(){Eg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Eg(),n(In(t,"network-request-failed"))},timeout:NL.get()})}if(!((i=(r=Cn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Cn().gapi)===null||s===void 0)&&s.load)o();else{const a=fL("iframefcb");return Cn()[a]=()=>{gapi.load?o():n(In(t,"network-request-failed"))},hL(`https://apis.google.com/js/api.js?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw xa=null,e})}let xa=null;function ML(t){return xa=xa||xL(t),xa}/**
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
 */const $L=new Qs(5e3,15e3),LL="__/auth/iframe",UL="emulator/auth/iframe",FL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},VL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function BL(t){const e=t.config;pe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Bd(e,UL):`https://${t.config.authDomain}/${LL}`,r={apiKey:e.apiKey,appName:t.name,v:Vi},i=VL.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Fi(r).slice(1)}`}async function jL(t){const e=await ML(t),n=Cn().gapi;return pe(n,t,"internal-error"),e.open({where:document.body,url:BL(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:FL,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=In(t,"network-request-failed"),a=Cn().setTimeout(()=>{s(o)},$L.get());function u(){Cn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const HL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qL=500,WL=600,YL="_blank",zL="http://localhost";class Ig{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function KL(t,e,n,r=qL,i=WL){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},HL),{width:r.toString(),height:i.toString(),top:s,left:o}),l=Ht().toLowerCase();n&&(a=U0(l)?YL:n),L0(l)&&(e=e||zL,u.scrollbars="yes");const h=Object.entries(u).reduce((f,[p,m])=>`${f}${p}=${m},`,"");if(N$(l)&&a!=="_self")return GL(e||"",a),new Ig(null);const c=window.open(e||"",a,h);pe(c,t,"popup-blocked");try{c.focus()}catch{}return new Ig(c)}function GL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const QL="__/auth/handler",XL="emulator/auth/handler";function Cg(t,e,n,r,i,s){pe(t.config.authDomain,t,"auth-domain-config-required"),pe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Vi,eventId:i};if(e instanceof qd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",bf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,l]of Object.entries(s||{}))o[u]=l}if(e instanceof Xs){const u=e.getScopes().filter(l=>l!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];return`${JL(t)}?${Fi(a).slice(1)}`}function JL({config:t}){return t.emulator?Bd(t,XL):`https://${t.authDomain}/${QL}`}/**
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
 */const Cc="webStorageSupport";class ZL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=X0,this._completeRedirectFn=EL,this._overrideRedirectResult=bL}async _openPopup(e,n,r,i){var s;Wn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Cg(e,n,r,Of(),i);return KL(e,o,Wd())}async _openRedirect(e,n,r,i){return await this._originValidation(e),eL(Cg(e,n,r,Of(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Wn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await jL(e),r=new CL(e);return n.register("authEvent",i=>(pe(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Cc,{type:Cc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Cc];o!==void 0&&n(!!o),Rn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=DL(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return H0()||Hd()||fl()}}const eU=ZL;var kg="@firebase/auth",Og="0.20.11";/**
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
 */class tU{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function nU(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function rU(t){pn(new an("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,u)=>{pe(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),pe(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:q0(t)},h=new L$(a,u,l);return m$(h,n),h})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),pn(new an("auth-internal",e=>{const n=dl(e.getProvider("auth").getImmediate());return(r=>new tU(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kt(kg,Og,nU(t)),Kt(kg,Og,"esm2017")}/**
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
 */const iU=5*60,sU=J_("authIdTokenMaxAge")||iU;let Rg=null;const oU=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>sU)return;const i=n==null?void 0:n.token;Rg!==i&&(Rg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function yl(t=xd()){const e=ti(t,"auth");if(e.isInitialized())return e.getImmediate();const n=p$(t,{popupRedirectResolver:eU,persistence:[lL,X$,X0]}),r=J_("authTokenSyncURL");if(r){const s=oU(r);Y$(n,s,()=>s(n.currentUser)),W$(n,o=>s(o))}const i=X_("auth");return i&&U$(n,`http://${i}`),n}rU("Browser");var aU=typeof globalThis<"u"?globalThis:typeof global<"u"?global:typeof self<"u"?self:{},Z,zd=zd||{},me=aU||self;function Mu(){}function gl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Zs(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function uU(t){return Object.prototype.hasOwnProperty.call(t,kc)&&t[kc]||(t[kc]=++lU)}var kc="closure_uid_"+(1e9*Math.random()>>>0),lU=0;function cU(t,e,n){return t.call.apply(t.bind,arguments)}function hU(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function xt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?xt=cU:xt=hU,xt.apply(null,arguments)}function Ro(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function It(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function wr(){this.s=this.s,this.o=this.o}var fU=0;wr.prototype.s=!1;wr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),fU!=0)&&uU(this)};wr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const sw=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Kd(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Pg(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(gl(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Mt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Mt.prototype.h=function(){this.defaultPrevented=!0};var dU=function(){if(!me.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{me.addEventListener("test",Mu,e),me.removeEventListener("test",Mu,e)}catch{}return t}();function $u(t){return/^[\s\xa0]*$/.test(t)}var Dg=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Oc(t,e){return t<e?-1:t>e?1:0}function vl(){var t=me.navigator;return t&&(t=t.userAgent)?t:""}function bn(t){return vl().indexOf(t)!=-1}function Gd(t){return Gd[" "](t),t}Gd[" "]=Mu;function pU(t){var e=gU;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var mU=bn("Opera"),Ri=bn("Trident")||bn("MSIE"),ow=bn("Edge"),Pf=ow||Ri,aw=bn("Gecko")&&!(vl().toLowerCase().indexOf("webkit")!=-1&&!bn("Edge"))&&!(bn("Trident")||bn("MSIE"))&&!bn("Edge"),yU=vl().toLowerCase().indexOf("webkit")!=-1&&!bn("Edge");function uw(){var t=me.document;return t?t.documentMode:void 0}var Lu;e:{var Rc="",Pc=function(){var t=vl();if(aw)return/rv:([^\);]+)(\)|;)/.exec(t);if(ow)return/Edge\/([\d\.]+)/.exec(t);if(Ri)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(yU)return/WebKit\/(\S+)/.exec(t);if(mU)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Pc&&(Rc=Pc?Pc[1]:""),Ri){var Dc=uw();if(Dc!=null&&Dc>parseFloat(Rc)){Lu=String(Dc);break e}}Lu=Rc}var gU={};function vU(){return pU(function(){let t=0;const e=Dg(String(Lu)).split("."),n=Dg("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Oc(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Oc(i[2].length==0,s[2].length==0)||Oc(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Df;if(me.document&&Ri){var Ag=uw();Df=Ag||parseInt(Lu,10)||void 0}else Df=void 0;var _U=Df;function Ps(t,e){if(Mt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(aw){e:{try{Gd(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:wU[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ps.X.h.call(this)}}It(Ps,Mt);var wU={2:"touch",3:"pen",4:"mouse"};Ps.prototype.h=function(){Ps.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var eo="closure_listenable_"+(1e6*Math.random()|0),bU=0;function TU(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++bU,this.ba=this.ea=!1}function _l(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Qd(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function lw(t){const e={};for(const n in t)e[n]=t[n];return e}const Ng="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function cw(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Ng.length;s++)n=Ng[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function wl(t){this.src=t,this.g={},this.h=0}wl.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Nf(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new TU(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function Af(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=sw(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(_l(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Nf(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var Xd="closure_lm_"+(1e6*Math.random()|0),Ac={};function hw(t,e,n,r,i){if(r&&r.once)return dw(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)hw(t,e[s],n,r,i);return null}return n=ep(n),t&&t[eo]?t.N(e,n,Zs(r)?!!r.capture:!!r,i):fw(t,e,n,!1,r,i)}function fw(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Zs(i)?!!i.capture:!!i,a=Zd(t);if(a||(t[Xd]=a=new wl(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=SU(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)dU||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(mw(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function SU(){function t(n){return e.call(t.src,t.listener,n)}const e=EU;return t}function dw(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)dw(t,e[s],n,r,i);return null}return n=ep(n),t&&t[eo]?t.O(e,n,Zs(r)?!!r.capture:!!r,i):fw(t,e,n,!0,r,i)}function pw(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)pw(t,e[s],n,r,i);else r=Zs(r)?!!r.capture:!!r,n=ep(n),t&&t[eo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Nf(s,n,r,i),-1<n&&(_l(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Zd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Nf(e,n,r,i)),(n=-1<t?e[t]:null)&&Jd(n))}function Jd(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[eo])Af(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(mw(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Zd(e))?(Af(n,t),n.h==0&&(n.src=null,e[Xd]=null)):_l(t)}}}function mw(t){return t in Ac?Ac[t]:Ac[t]="on"+t}function EU(t,e){if(t.ba)t=!0;else{e=new Ps(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&Jd(t),t=n.call(r,e)}return t}function Zd(t){return t=t[Xd],t instanceof wl?t:null}var Nc="__closure_events_fn_"+(1e9*Math.random()>>>0);function ep(t){return typeof t=="function"?t:(t[Nc]||(t[Nc]=function(e){return t.handleEvent(e)}),t[Nc])}function yt(){wr.call(this),this.i=new wl(this),this.P=this,this.I=null}It(yt,wr);yt.prototype[eo]=!0;yt.prototype.removeEventListener=function(t,e,n,r){pw(this,t,e,n,r)};function Et(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Mt(e,t);else if(e instanceof Mt)e.target=e.target||t;else{var i=e;e=new Mt(r,t),cw(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Po(o,r,!0,e)&&i}if(o=e.g=t,i=Po(o,r,!0,e)&&i,i=Po(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Po(o,r,!1,e)&&i}yt.prototype.M=function(){if(yt.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)_l(n[r]);delete t.g[e],t.h--}}this.I=null};yt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};yt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Po(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,u=o.ha||o.src;o.ea&&Af(t.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var tp=me.JSON.stringify;function IU(){var t=vw;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class CU{constructor(){this.h=this.g=null}add(e,n){const r=yw.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var yw=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new kU,t=>t.reset());class kU{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function OU(t){me.setTimeout(()=>{throw t},0)}function gw(t,e){xf||RU(),Mf||(xf(),Mf=!0),vw.add(t,e)}var xf;function RU(){var t=me.Promise.resolve(void 0);xf=function(){t.then(PU)}}var Mf=!1,vw=new CU;function PU(){for(var t;t=IU();){try{t.h.call(t.g)}catch(n){OU(n)}var e=yw;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Mf=!1}function bl(t,e){yt.call(this),this.h=t||1,this.g=e||me,this.j=xt(this.lb,this),this.l=Date.now()}It(bl,yt);Z=bl.prototype;Z.ca=!1;Z.R=null;Z.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Et(this,"tick"),this.ca&&(np(this),this.start()))}};Z.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function np(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}Z.M=function(){bl.X.M.call(this),np(this),delete this.g};function rp(t,e,n){if(typeof t=="function")n&&(t=xt(t,n));else if(t&&typeof t.handleEvent=="function")t=xt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:me.setTimeout(t,e||0)}function _w(t){t.g=rp(()=>{t.g=null,t.i&&(t.i=!1,_w(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class DU extends wr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:_w(this)}M(){super.M(),this.g&&(me.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ds(t){wr.call(this),this.h=t,this.g={}}It(Ds,wr);var xg=[];function ww(t,e,n,r){Array.isArray(n)||(n&&(xg[0]=n.toString()),n=xg);for(var i=0;i<n.length;i++){var s=hw(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function bw(t){Qd(t.g,function(e,n){this.g.hasOwnProperty(n)&&Jd(e)},t),t.g={}}Ds.prototype.M=function(){Ds.X.M.call(this),bw(this)};Ds.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Tl(){this.g=!0}Tl.prototype.Aa=function(){this.g=!1};function AU(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var h=l[0];l=l[1];var c=h.split("_");o=2<=c.length&&c[1]=="type"?o+(h+"="+l+"&"):o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function NU(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function pi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+MU(t,n)+(r?" "+r:"")})}function xU(t,e){t.info(function(){return"TIMEOUT: "+e})}Tl.prototype.info=function(){};function MU(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return tp(n)}catch{return e}}var ni={},Mg=null;function Sl(){return Mg=Mg||new yt}ni.Pa="serverreachability";function Tw(t){Mt.call(this,ni.Pa,t)}It(Tw,Mt);function As(t){const e=Sl();Et(e,new Tw(e))}ni.STAT_EVENT="statevent";function Sw(t,e){Mt.call(this,ni.STAT_EVENT,t),this.stat=e}It(Sw,Mt);function jt(t){const e=Sl();Et(e,new Sw(e,t))}ni.Qa="timingevent";function Ew(t,e){Mt.call(this,ni.Qa,t),this.size=e}It(Ew,Mt);function to(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return me.setTimeout(function(){t()},e)}var El={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Iw={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ip(){}ip.prototype.h=null;function $g(t){return t.h||(t.h=t.i())}function Cw(){}var no={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function sp(){Mt.call(this,"d")}It(sp,Mt);function op(){Mt.call(this,"c")}It(op,Mt);var $f;function Il(){}It(Il,ip);Il.prototype.g=function(){return new XMLHttpRequest};Il.prototype.i=function(){return{}};$f=new Il;function ro(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Ds(this),this.O=$U,t=Pf?125:void 0,this.T=new bl(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new kw}function kw(){this.i=null,this.g="",this.h=!1}var $U=45e3,Lf={},Uu={};Z=ro.prototype;Z.setTimeout=function(t){this.O=t};function Uf(t,e,n){t.K=1,t.v=kl(Yn(e)),t.s=n,t.P=!0,Ow(t,null)}function Ow(t,e){t.F=Date.now(),io(t),t.A=Yn(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),$w(n.i,"t",r),t.C=0,n=t.l.H,t.h=new kw,t.g=rb(t.l,n?e:null,!t.s),0<t.N&&(t.L=new DU(xt(t.La,t,t.g),t.N)),ww(t.S,t.g,"readystatechange",t.ib),e=t.H?lw(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),As(),AU(t.j,t.u,t.A,t.m,t.U,t.s)}Z.ib=function(t){t=t.target;const e=this.L;e&&Vn(t)==3?e.l():this.La(t)};Z.La=function(t){try{if(t==this.g)e:{const h=Vn(this.g);var e=this.g.Ea();const c=this.g.aa();if(!(3>h)&&(h!=3||Pf||this.g&&(this.h.h||this.g.fa()||Vg(this.g)))){this.I||h!=4||e==7||(e==8||0>=c?As(3):As(2)),Cl(this);var n=this.g.aa();this.Y=n;t:if(Rw(this)){var r=Vg(this.g);t="";var i=r.length,s=Vn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Nr(this),gs(this);var o="";break t}this.h.i=new me.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,NU(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$u(a)){var l=a;break t}}l=null}if(n=l)pi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ff(this,n);else{this.i=!1,this.o=3,jt(12),Nr(this),gs(this);break e}}this.P?(Pw(this,h,o),Pf&&this.i&&h==3&&(ww(this.S,this.T,"tick",this.hb),this.T.start())):(pi(this.j,this.m,o,null),Ff(this,o)),h==4&&Nr(this),this.i&&!this.I&&(h==4?Zw(this.l,this):(this.i=!1,io(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,jt(12)):(this.o=0,jt(13)),Nr(this),gs(this)}}}catch{}finally{}};function Rw(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Pw(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=LU(t,n),i==Uu){e==4&&(t.o=4,jt(14),r=!1),pi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Lf){t.o=4,jt(15),pi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else pi(t.j,t.m,i,null),Ff(t,i);Rw(t)&&i!=Uu&&i!=Lf&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,jt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),dp(e),e.K=!0,jt(11))):(pi(t.j,t.m,n,"[Invalid Chunked Response]"),Nr(t),gs(t))}Z.hb=function(){if(this.g){var t=Vn(this.g),e=this.g.fa();this.C<e.length&&(Cl(this),Pw(this,t,e),this.i&&t!=4&&io(this))}};function LU(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Uu:(n=Number(e.substring(n,r)),isNaN(n)?Lf:(r+=1,r+n>e.length?Uu:(e=e.substr(r,n),t.C=r+n,e)))}Z.cancel=function(){this.I=!0,Nr(this)};function io(t){t.V=Date.now()+t.O,Dw(t,t.O)}function Dw(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=to(xt(t.gb,t),e)}function Cl(t){t.B&&(me.clearTimeout(t.B),t.B=null)}Z.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(xU(this.j,this.A),this.K!=2&&(As(),jt(17)),Nr(this),this.o=2,gs(this)):Dw(this,this.V-t)};function gs(t){t.l.G==0||t.I||Zw(t.l,t)}function Nr(t){Cl(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,np(t.T),bw(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ff(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Vf(n.h,t))){if(!t.J&&Vf(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Bu(n),Pl(n);else break e;fp(n),jt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=to(xt(n.cb,n),6e3));if(1>=Fw(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else xr(n,11)}else if((t.J||n.g==t)&&Bu(n),!$u(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const h=l[3];h!=null&&(n.ma=h,n.j.info("VER="+n.ma));const c=l[4];c!=null&&(n.Ca=c,n.j.info("SVER="+n.Ca));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var s=r.h;s.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(ap(s,s.h),s.h=null))}if(r.D){const T=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(r.za=T,Ye(r.F,r.D,T))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=nb(r,r.H?r.ka:null,r.V),o.J){Vw(r.h,o);var a=o,u=r.J;u&&a.setTimeout(u),a.B&&(Cl(a),io(a)),r.g=o}else Xw(r);0<n.i.length&&Dl(n)}else l[0]!="stop"&&l[0]!="close"||xr(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?xr(n,7):hp(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}As(4)}catch{}}function UU(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(gl(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function FU(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(gl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Aw(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(gl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=FU(t),r=UU(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var Nw=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function VU(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Fr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Fr){this.h=e!==void 0?e:t.h,Fu(this,t.j),this.s=t.s,this.g=t.g,Vu(this,t.m),this.l=t.l,e=t.i;var n=new Ns;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Lg(this,n),this.o=t.o}else t&&(n=String(t).match(Nw))?(this.h=!!e,Fu(this,n[1]||"",!0),this.s=as(n[2]||""),this.g=as(n[3]||"",!0),Vu(this,n[4]),this.l=as(n[5]||"",!0),Lg(this,n[6]||"",!0),this.o=as(n[7]||"")):(this.h=!!e,this.i=new Ns(null,this.h))}Fr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(us(e,Ug,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(us(e,Ug,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(us(n,n.charAt(0)=="/"?HU:jU,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",us(n,WU)),t.join("")};function Yn(t){return new Fr(t)}function Fu(t,e,n){t.j=n?as(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Vu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Lg(t,e,n){e instanceof Ns?(t.i=e,YU(t.i,t.h)):(n||(e=us(e,qU)),t.i=new Ns(e,t.h))}function Ye(t,e,n){t.i.set(e,n)}function kl(t){return Ye(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function as(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function us(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,BU),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function BU(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ug=/[#\/\?@]/g,jU=/[#\?:]/g,HU=/[#\?]/g,qU=/[#\?@]/g,WU=/#/g;function Ns(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function br(t){t.g||(t.g=new Map,t.h=0,t.i&&VU(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}Z=Ns.prototype;Z.add=function(t,e){br(this),this.i=null,t=Bi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function xw(t,e){br(t),e=Bi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Mw(t,e){return br(t),e=Bi(t,e),t.g.has(e)}Z.forEach=function(t,e){br(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};Z.oa=function(){br(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};Z.W=function(t){br(this);let e=[];if(typeof t=="string")Mw(this,t)&&(e=e.concat(this.g.get(Bi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};Z.set=function(t,e){return br(this),this.i=null,t=Bi(this,t),Mw(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};Z.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function $w(t,e,n){xw(t,e),0<n.length&&(t.i=null,t.g.set(Bi(t,e),Kd(n)),t.h+=n.length)}Z.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Bi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function YU(t,e){e&&!t.j&&(br(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(xw(this,r),$w(this,i,n))},t)),t.j=e}var zU=class{constructor(t,e){this.h=t,this.g=e}};function Lw(t){this.l=t||KU,me.PerformanceNavigationTiming?(t=me.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(me.g&&me.g.Ga&&me.g.Ga()&&me.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var KU=10;function Uw(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Fw(t){return t.h?1:t.g?t.g.size:0}function Vf(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ap(t,e){t.g?t.g.add(e):t.h=e}function Vw(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Lw.prototype.cancel=function(){if(this.i=Bw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Bw(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Kd(t.i)}function up(){}up.prototype.stringify=function(t){return me.JSON.stringify(t,void 0)};up.prototype.parse=function(t){return me.JSON.parse(t,void 0)};function GU(){this.g=new up}function QU(t,e,n){const r=n||"";try{Aw(t,function(i,s){let o=i;Zs(i)&&(o=tp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function XU(t,e){const n=new Tl;if(me.Image){const r=new Image;r.onload=Ro(Do,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ro(Do,n,r,"TestLoadImage: error",!1,e),r.onabort=Ro(Do,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ro(Do,n,r,"TestLoadImage: timeout",!1,e),me.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Do(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function so(t){this.l=t.ac||null,this.j=t.jb||!1}It(so,ip);so.prototype.g=function(){return new Ol(this.l,this.j)};so.prototype.i=function(t){return function(){return t}}({});function Ol(t,e){yt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=lp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}It(Ol,yt);var lp=0;Z=Ol.prototype;Z.open=function(t,e){if(this.readyState!=lp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,xs(this)};Z.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||me).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};Z.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,oo(this)),this.readyState=lp};Z.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,xs(this)),this.g&&(this.readyState=3,xs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof me.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;jw(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function jw(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}Z.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?oo(this):xs(this),this.readyState==3&&jw(this)}};Z.Va=function(t){this.g&&(this.response=this.responseText=t,oo(this))};Z.Ua=function(t){this.g&&(this.response=t,oo(this))};Z.ga=function(){this.g&&oo(this)};function oo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,xs(t)}Z.setRequestHeader=function(t,e){this.v.append(t,e)};Z.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};Z.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function xs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ol.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var JU=me.JSON.parse;function et(t){yt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Hw,this.K=this.L=!1}It(et,yt);var Hw="",ZU=/^https?$/i,e2=["POST","PUT"];Z=et.prototype;Z.Ka=function(t){this.L=t};Z.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():$f.g(),this.C=this.u?$g(this.u):$g($f),this.g.onreadystatechange=xt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Fg(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=me.FormData&&t instanceof me.FormData,!(0<=sw(e2,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Yw(this),0<this.B&&((this.K=t2(this.g))?(this.g.timeout=this.B,this.g.ontimeout=xt(this.qa,this)):this.A=rp(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Fg(this,s)}};function t2(t){return Ri&&vU()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}Z.qa=function(){typeof zd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Et(this,"timeout"),this.abort(8))};function Fg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,qw(t),Rl(t)}function qw(t){t.D||(t.D=!0,Et(t,"complete"),Et(t,"error"))}Z.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Et(this,"complete"),Et(this,"abort"),Rl(this))};Z.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Rl(this,!0)),et.X.M.call(this)};Z.Ha=function(){this.s||(this.F||this.v||this.l?Ww(this):this.fb())};Z.fb=function(){Ww(this)};function Ww(t){if(t.h&&typeof zd<"u"&&(!t.C[1]||Vn(t)!=4||t.aa()!=2)){if(t.v&&Vn(t)==4)rp(t.Ha,0,t);else if(Et(t,"readystatechange"),Vn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(Nw)[1]||null;if(!i&&me.self&&me.self.location){var s=me.self.location.protocol;i=s.substr(0,s.length-1)}r=!ZU.test(i?i.toLowerCase():"")}n=r}if(n)Et(t,"complete"),Et(t,"success");else{t.m=6;try{var o=2<Vn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",qw(t)}}finally{Rl(t)}}}}function Rl(t,e){if(t.g){Yw(t);const n=t.g,r=t.C[0]?Mu:null;t.g=null,t.C=null,e||Et(t,"ready");try{n.onreadystatechange=r}catch{}}}function Yw(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(me.clearTimeout(t.A),t.A=null)}function Vn(t){return t.g?t.g.readyState:0}Z.aa=function(){try{return 2<Vn(this)?this.g.status:-1}catch{return-1}};Z.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};Z.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),JU(e)}};function Vg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Hw:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}Z.Ea=function(){return this.m};Z.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function zw(t){let e="";return Qd(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function cp(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=zw(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ye(t,e,n))}function ns(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Kw(t){this.Ca=0,this.i=[],this.j=new Tl,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ns("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ns("baseRetryDelayMs",5e3,t),this.bb=ns("retryDelaySeedMs",1e4,t),this.$a=ns("forwardChannelMaxRetries",2,t),this.ta=ns("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Lw(t&&t.concurrentRequestLimit),this.Fa=new GU,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}Z=Kw.prototype;Z.ma=8;Z.G=1;function hp(t){if(Gw(t),t.G==3){var e=t.U++,n=Yn(t.F);Ye(n,"SID",t.I),Ye(n,"RID",e),Ye(n,"TYPE","terminate"),ao(t,n),e=new ro(t,t.j,e,void 0),e.K=2,e.v=kl(Yn(n)),n=!1,me.navigator&&me.navigator.sendBeacon&&(n=me.navigator.sendBeacon(e.v.toString(),"")),!n&&me.Image&&(new Image().src=e.v,n=!0),n||(e.g=rb(e.l,null),e.g.da(e.v)),e.F=Date.now(),io(e)}tb(t)}function Pl(t){t.g&&(dp(t),t.g.cancel(),t.g=null)}function Gw(t){Pl(t),t.u&&(me.clearTimeout(t.u),t.u=null),Bu(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&me.clearTimeout(t.m),t.m=null)}function Dl(t){Uw(t.h)||t.m||(t.m=!0,gw(t.Ja,t),t.C=0)}function n2(t,e){return Fw(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=to(xt(t.Ja,t,e),eb(t,t.C)),t.C++,!0)}Z.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new ro(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=lw(s),cw(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Qw(this,i,e),n=Yn(this.F),Ye(n,"RID",t),Ye(n,"CVER",22),this.D&&Ye(n,"X-HTTP-Session-Id",this.D),ao(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(zw(s)))+"&"+e:this.o&&cp(n,this.o,s)),ap(this.h,i),this.Ya&&Ye(n,"TYPE","init"),this.O?(Ye(n,"$req",e),Ye(n,"SID","null"),i.Z=!0,Uf(i,n,null)):Uf(i,n,e),this.G=2}}else this.G==3&&(t?Bg(this,t):this.i.length==0||Uw(this.h)||Bg(this))};function Bg(t,e){var n;e?n=e.m:n=t.U++;const r=Yn(t.F);Ye(r,"SID",t.I),Ye(r,"RID",n),Ye(r,"AID",t.T),ao(t,r),t.o&&t.s&&cp(r,t.o,t.s),n=new ro(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Qw(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),ap(t.h,n),Uf(n,r,e)}function ao(t,e){t.ia&&Qd(t.ia,function(n,r){Ye(e,r,n)}),t.l&&Aw({},function(n,r){Ye(e,r,n)})}function Qw(t,e,n){n=Math.min(t.i.length,n);var r=t.l?xt(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let l=i[u].h;const h=i[u].g;if(l-=s,0>l)s=Math.max(0,i[u].h-100),a=!1;else try{QU(h,o,"req"+l+"_")}catch{r&&r(h)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function Xw(t){t.g||t.u||(t.Z=1,gw(t.Ia,t),t.A=0)}function fp(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=to(xt(t.Ia,t),eb(t,t.A)),t.A++,!0)}Z.Ia=function(){if(this.u=null,Jw(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=to(xt(this.eb,this),t)}};Z.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,jt(10),Pl(this),Jw(this))};function dp(t){t.B!=null&&(me.clearTimeout(t.B),t.B=null)}function Jw(t){t.g=new ro(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Yn(t.sa);Ye(e,"RID","rpc"),Ye(e,"SID",t.I),Ye(e,"CI",t.L?"0":"1"),Ye(e,"AID",t.T),Ye(e,"TYPE","xmlhttp"),ao(t,e),t.o&&t.s&&cp(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=kl(Yn(e)),n.s=null,n.P=!0,Ow(n,t)}Z.cb=function(){this.v!=null&&(this.v=null,Pl(this),fp(this),jt(19))};function Bu(t){t.v!=null&&(me.clearTimeout(t.v),t.v=null)}function Zw(t,e){var n=null;if(t.g==e){Bu(t),dp(t),t.g=null;var r=2}else if(Vf(t.h,e))n=e.D,Vw(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Sl(),Et(r,new Ew(r,n)),Dl(t)}else Xw(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&n2(t,e)||r==2&&fp(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:xr(t,5);break;case 4:xr(t,10);break;case 3:xr(t,6);break;default:xr(t,2)}}}function eb(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function xr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=xt(t.kb,t);n||(n=new Fr("//www.google.com/images/cleardot.gif"),me.location&&me.location.protocol=="http"||Fu(n,"https"),kl(n)),XU(n.toString(),r)}else jt(2);t.G=0,t.l&&t.l.va(e),tb(t),Gw(t)}Z.kb=function(t){t?(this.j.info("Successfully pinged google.com"),jt(2)):(this.j.info("Failed to ping google.com"),jt(1))};function tb(t){if(t.G=0,t.la=[],t.l){const e=Bw(t.h);(e.length!=0||t.i.length!=0)&&(Pg(t.la,e),Pg(t.la,t.i),t.h.i.length=0,Kd(t.i),t.i.length=0),t.l.ua()}}function nb(t,e,n){var r=n instanceof Fr?Yn(n):new Fr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Vu(r,r.m);else{var i=me.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Fr(null,void 0);r&&Fu(s,r),e&&(s.g=e),i&&Vu(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&Ye(r,n,e),Ye(r,"VER",t.ma),ao(t,r),r}function rb(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new et(new so({jb:!0})):new et(t.ra),e.Ka(t.H),e}function ib(){}Z=ib.prototype;Z.xa=function(){};Z.wa=function(){};Z.va=function(){};Z.ua=function(){};Z.Ra=function(){};function ju(){if(Ri&&!(10<=Number(_U)))throw Error("Environmental error: no available transport.")}ju.prototype.g=function(t,e){return new Jt(t,e)};function Jt(t,e){yt.call(this),this.g=new Kw(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!$u(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!$u(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ji(this)}It(Jt,yt);Jt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;jt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=nb(t,null,t.V),Dl(t)};Jt.prototype.close=function(){hp(this.g)};Jt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=tp(t),t=n);e.i.push(new zU(e.ab++,t)),e.G==3&&Dl(e)};Jt.prototype.M=function(){this.g.l=null,delete this.j,hp(this.g),delete this.g,Jt.X.M.call(this)};function sb(t){sp.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}It(sb,sp);function ob(){op.call(this),this.status=1}It(ob,op);function ji(t){this.g=t}It(ji,ib);ji.prototype.xa=function(){Et(this.g,"a")};ji.prototype.wa=function(t){Et(this.g,new sb(t))};ji.prototype.va=function(t){Et(this.g,new ob)};ji.prototype.ua=function(){Et(this.g,"b")};ju.prototype.createWebChannel=ju.prototype.g;Jt.prototype.send=Jt.prototype.u;Jt.prototype.open=Jt.prototype.m;Jt.prototype.close=Jt.prototype.close;El.NO_ERROR=0;El.TIMEOUT=8;El.HTTP_ERROR=6;Iw.COMPLETE="complete";Cw.EventType=no;no.OPEN="a";no.CLOSE="b";no.ERROR="c";no.MESSAGE="d";yt.prototype.listen=yt.prototype.N;et.prototype.listenOnce=et.prototype.O;et.prototype.getLastError=et.prototype.Oa;et.prototype.getLastErrorCode=et.prototype.Ea;et.prototype.getStatus=et.prototype.aa;et.prototype.getResponseJson=et.prototype.Sa;et.prototype.getResponseText=et.prototype.fa;et.prototype.send=et.prototype.da;et.prototype.setWithCredentials=et.prototype.Ka;var r2=function(){return new ju},i2=function(){return Sl()},xc=El,s2=Iw,o2=ni,jg={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},a2=so,Ao=Cw,u2=et;const Hg="@firebase/firestore";/**
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
 */class kt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}kt.UNAUTHENTICATED=new kt(null),kt.GOOGLE_CREDENTIALS=new kt("google-credentials-uid"),kt.FIRST_PARTY=new kt("first-party-uid"),kt.MOCK_USER=new kt("mock-user");/**
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
 */let Hi="9.14.0";/**
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
 */const zr=new Gs("@firebase/firestore");function qg(){return zr.logLevel}function se(t,...e){if(zr.logLevel<=Re.DEBUG){const n=e.map(pp);zr.debug(`Firestore (${Hi}): ${t}`,...n)}}function zn(t,...e){if(zr.logLevel<=Re.ERROR){const n=e.map(pp);zr.error(`Firestore (${Hi}): ${t}`,...n)}}function Bf(t,...e){if(zr.logLevel<=Re.WARN){const n=e.map(pp);zr.warn(`Firestore (${Hi}): ${t}`,...n)}}function pp(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function ge(t="Unexpected state"){const e=`FIRESTORE (${Hi}) INTERNAL ASSERTION FAILED: `+t;throw zn(e),new Error(e)}function Fe(t,e){t||ge()}function ve(t,e){return t}/**
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
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ce extends yn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ur{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class ab{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class l2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(kt.UNAUTHENTICATED))}shutdown(){}}class c2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class h2{constructor(e){this.t=e,this.currentUser=kt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new ur;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ur,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(se("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ur)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Fe(typeof r.accessToken=="string"),new ab(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string"),new kt(e)}}class f2{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=kt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Fe(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class d2{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new f2(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(kt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class p2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class m2{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,se("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Fe(typeof n.token=="string"),this.A=n.token,new p2(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function y2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class ub{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=y2(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function xe(t,e){return t<e?-1:t>e?1:0}function Pi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class lt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ce(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ce(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ce(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ce(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return lt.fromMillis(Date.now())}static fromDate(e){return lt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new lt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class _e{constructor(e){this.timestamp=e}static fromTimestamp(e){return new _e(e)}static min(){return new _e(new lt(0,0))}static max(){return new _e(new lt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ms{constructor(e,n,r){n===void 0?n=0:n>e.length&&ge(),r===void 0?r=e.length-n:r>e.length-n&&ge(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ms.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ms?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Je extends Ms{construct(e,n,r){return new Je(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ce(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Je(n)}static emptyPath(){return new Je([])}}const g2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class At extends Ms{construct(e,n,r){return new At(e,n,r)}static isValidIdentifier(e){return g2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),At.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new At(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new ce(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new ce(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new ce(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new ce(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new At(n)}static emptyPath(){return new At([])}}/**
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
 */class oe{constructor(e){this.path=e}static fromPath(e){return new oe(Je.fromString(e))}static fromName(e){return new oe(Je.fromString(e).popFirst(5))}static empty(){return new oe(Je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Je.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oe(new Je(e.slice()))}}function v2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=_e.fromTimestamp(r===1e9?new lt(n+1,0):new lt(n,r));return new hr(i,oe.empty(),e)}function _2(t){return new hr(t.readTime,t.key,-1)}class hr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new hr(_e.min(),oe.empty(),-1)}static max(){return new hr(_e.max(),oe.empty(),-1)}}function w2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=oe.comparator(t.documentKey,e.documentKey),n!==0?n:xe(t.largestBatchId,e.largestBatchId))}/**
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
 */const b2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class T2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function uo(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==b2)throw t;se("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ge(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(i=>i?L.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new L((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const l=u;n(e[l]).next(h=>{o[l]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new L((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function lo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class mp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
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
 */function Wg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function qi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function lb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */mp.at=-1;class ht{constructor(e,n){this.comparator=e,this.root=n||_t.EMPTY}insert(e,n){return new ht(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,_t.BLACK,null,null))}remove(e){return new ht(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_t.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new No(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new No(this.root,e,this.comparator,!1)}getReverseIterator(){return new No(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new No(this.root,e,this.comparator,!0)}}class No{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _t{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:_t.RED,this.left=i!=null?i:_t.EMPTY,this.right=s!=null?s:_t.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new _t(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return _t.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return _t.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ge();const e=this.left.check();if(e!==this.right.check())throw ge();return e+(this.isRed()?0:1)}}_t.EMPTY=null,_t.RED=!0,_t.BLACK=!1;_t.EMPTY=new class{constructor(){this.size=0}get key(){throw ge()}get value(){throw ge()}get color(){throw ge()}get left(){throw ge()}get right(){throw ge()}copy(t,e,n,r,i){return this}insert(t,e,n){return new _t(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ct{constructor(e){this.comparator=e,this.data=new ht(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Yg(this.data.getIterator())}getIteratorFrom(e){return new Yg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ct)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ct(this.comparator);return n.data=e,n}}class Yg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class kn{constructor(e){this.fields=e,e.sort(At.comparator)}static empty(){return new kn([])}unionWith(e){let n=new ct(At.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new kn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Pi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class $t{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new $t(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new $t(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}$t.EMPTY_BYTE_STRING=new $t("");const S2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fr(t){if(Fe(!!t),typeof t=="string"){let e=0;const n=S2.exec(t);if(Fe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ot(t.seconds),nanos:ot(t.nanos)}}function ot(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Di(t){return typeof t=="string"?$t.fromBase64String(t):$t.fromUint8Array(t)}/**
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
 */function cb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function hb(t){const e=t.mapValue.fields.__previous_value__;return cb(e)?hb(e):e}function $s(t){const e=fr(t.mapValue.fields.__local_write_time__.timestampValue);return new lt(e.seconds,e.nanos)}/**
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
 */class E2{constructor(e,n,r,i,s,o,a,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class Ls{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ls("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ls&&e.projectId===this.projectId&&e.database===this.database}}function Al(t){return t==null}function Hu(t){return t===0&&1/t==-1/0}function I2(t){return typeof t=="number"&&Number.isInteger(t)&&!Hu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const xo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Kr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?cb(t)?4:C2(t)?9007199254740991:10:ge()}function Pn(t,e){if(t===e)return!0;const n=Kr(t);if(n!==Kr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return $s(t).isEqual($s(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=fr(r.timestampValue),o=fr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Di(r.bytesValue).isEqual(Di(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return ot(r.geoPointValue.latitude)===ot(i.geoPointValue.latitude)&&ot(r.geoPointValue.longitude)===ot(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ot(r.integerValue)===ot(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=ot(r.doubleValue),o=ot(i.doubleValue);return s===o?Hu(s)===Hu(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Pi(t.arrayValue.values||[],e.arrayValue.values||[],Pn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Wg(s)!==Wg(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Pn(s[a],o[a])))return!1;return!0}(t,e);default:return ge()}}function Us(t,e){return(t.values||[]).find(n=>Pn(n,e))!==void 0}function Ai(t,e){if(t===e)return 0;const n=Kr(t),r=Kr(e);if(n!==r)return xe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return xe(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=ot(i.integerValue||i.doubleValue),a=ot(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return zg(t.timestampValue,e.timestampValue);case 4:return zg($s(t),$s(e));case 5:return xe(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Di(i),a=Di(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let u=0;u<o.length&&u<a.length;u++){const l=xe(o[u],a[u]);if(l!==0)return l}return xe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=xe(ot(i.latitude),ot(s.latitude));return o!==0?o:xe(ot(i.longitude),ot(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let u=0;u<o.length&&u<a.length;++u){const l=Ai(o[u],a[u]);if(l)return l}return xe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===xo.mapValue&&s===xo.mapValue)return 0;if(i===xo.mapValue)return 1;if(s===xo.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),u=s.fields||{},l=Object.keys(u);a.sort(),l.sort();for(let h=0;h<a.length&&h<l.length;++h){const c=xe(a[h],l[h]);if(c!==0)return c;const f=Ai(o[a[h]],u[l[h]]);if(f!==0)return f}return xe(a.length,l.length)}(t.mapValue,e.mapValue);default:throw ge()}}function zg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return xe(t,e);const n=fr(t),r=fr(e),i=xe(n.seconds,r.seconds);return i!==0?i:xe(n.nanos,r.nanos)}function bi(t){return jf(t)}function jf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=fr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Di(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,oe.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=jf(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${jf(r.fields[a])}`;return s+"}"}(t.mapValue):ge();var e,n}function Hf(t){return!!t&&"integerValue"in t}function yp(t){return!!t&&"arrayValue"in t}function Kg(t){return!!t&&"nullValue"in t}function Gg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ma(t){return!!t&&"mapValue"in t}function vs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return qi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=vs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=vs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function C2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class tn{constructor(e){this.value=e}static empty(){return new tn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ma(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=vs(n)}setAll(e){let n=At.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=vs(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ma(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Pn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ma(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){qi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new tn(vs(this.value))}}function fb(t){const e=[];return qi(t.fields,(n,r)=>{const i=new At([n]);if(Ma(r)){const s=fb(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new kn(e)}/**
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
 */class bt{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new bt(e,0,_e.min(),_e.min(),tn.empty(),0)}static newFoundDocument(e,n,r){return new bt(e,1,n,_e.min(),r,0)}static newNoDocument(e,n){return new bt(e,2,n,_e.min(),tn.empty(),0)}static newUnknownDocument(e,n){return new bt(e,3,n,_e.min(),tn.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_e.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new bt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class k2{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ht=null}}function Qg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new k2(t,e,n,r,i,s,o)}function gp(t){const e=ve(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+bi(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Al(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>bi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>bi(r)).join(",")),e.ht=n}return e.ht}function O2(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${bi(r.value)}`;var r}).join(", ")}]`),Al(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>bi(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>bi(n)).join(",")),`Target(${e})`}function vp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!$2(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Pn(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Jg(t.startAt,e.startAt)&&Jg(t.endAt,e.endAt)}function qf(t){return oe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Yt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,r):new R2(e,n,r):n==="array-contains"?new A2(e,r):n==="in"?new N2(e,r):n==="not-in"?new x2(e,r):n==="array-contains-any"?new M2(e,r):new Yt(e,n,r)}static lt(e,n,r){return n==="in"?new P2(e,r):new D2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(Ai(n,this.value)):n!==null&&Kr(this.value)===Kr(n)&&this.ft(Ai(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ge()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class R2 extends Yt{constructor(e,n,r){super(e,n,r),this.key=oe.fromName(r.referenceValue)}matches(e){const n=oe.comparator(e.key,this.key);return this.ft(n)}}class P2 extends Yt{constructor(e,n){super(e,"in",n),this.keys=db("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class D2 extends Yt{constructor(e,n){super(e,"not-in",n),this.keys=db("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function db(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>oe.fromName(r.referenceValue))}class A2 extends Yt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return yp(n)&&Us(n.arrayValue,this.value)}}class N2 extends Yt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Us(this.value.arrayValue,n)}}class x2 extends Yt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Us(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Us(this.value.arrayValue,n)}}class M2 extends Yt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!yp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Us(this.value.arrayValue,r))}}class qu{constructor(e,n){this.position=e,this.inclusive=n}}class _s{constructor(e,n="asc"){this.field=e,this.dir=n}}function $2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Xg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=oe.comparator(oe.fromName(o.referenceValue),n.key):r=Ai(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Jg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Pn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Nl{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this._t=null,this.wt=null,this.startAt,this.endAt}}function L2(t,e,n,r,i,s,o,a){return new Nl(t,e,n,r,i,s,o,a)}function _p(t){return new Nl(t)}function Zg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function U2(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function F2(t){for(const e of t.filters)if(e.dt())return e.field;return null}function V2(t){return t.collectionGroup!==null}function Fs(t){const e=ve(t);if(e._t===null){e._t=[];const n=F2(e),r=U2(e);if(n!==null&&r===null)n.isKeyField()||e._t.push(new _s(n)),e._t.push(new _s(At.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e._t.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new _s(At.keyField(),s))}}}return e._t}function Kn(t){const e=ve(t);if(!e.wt)if(e.limitType==="F")e.wt=Qg(e.path,e.collectionGroup,Fs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Fs(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new _s(s.field,o))}const r=e.endAt?new qu(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new qu(e.startAt.position,e.startAt.inclusive):null;e.wt=Qg(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function Wf(t,e,n){return new Nl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function xl(t,e){return vp(Kn(t),Kn(e))&&t.limitType===e.limitType}function pb(t){return`${gp(Kn(t))}|lt:${t.limitType}`}function Yf(t){return`Query(target=${O2(Kn(t))}; limitType=${t.limitType})`}function wp(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):oe.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Xg(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Fs(n),r)||n.endAt&&!function(i,s,o){const a=Xg(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Fs(n),r))}(t,e)}function B2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function mb(t){return(e,n)=>{let r=!1;for(const i of Fs(t)){const s=j2(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function j2(t,e,n){const r=t.field.isKeyField()?oe.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),u=o.data.field(i);return a!==null&&u!==null?Ai(a,u):ge()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ge()}}/**
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
 */function yb(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hu(e)?"-0":e}}function gb(t){return{integerValue:""+t}}function H2(t,e){return I2(e)?gb(e):yb(t,e)}/**
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
 */class Ml{constructor(){this._=void 0}}function q2(t,e,n){return t instanceof Wu?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Vs?_b(t,e):t instanceof Bs?wb(t,e):function(r,i){const s=vb(r,i),o=ev(s)+ev(r.yt);return Hf(s)&&Hf(r.yt)?gb(o):yb(r.It,o)}(t,e)}function W2(t,e,n){return t instanceof Vs?_b(t,e):t instanceof Bs?wb(t,e):n}function vb(t,e){return t instanceof Yu?Hf(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Wu extends Ml{}class Vs extends Ml{constructor(e){super(),this.elements=e}}function _b(t,e){const n=bb(e);for(const r of t.elements)n.some(i=>Pn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Bs extends Ml{constructor(e){super(),this.elements=e}}function wb(t,e){let n=bb(e);for(const r of t.elements)n=n.filter(i=>!Pn(i,r));return{arrayValue:{values:n}}}class Yu extends Ml{constructor(e,n){super(),this.It=e,this.yt=n}}function ev(t){return ot(t.integerValue||t.doubleValue)}function bb(t){return yp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Y2(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Vs&&r instanceof Vs||n instanceof Bs&&r instanceof Bs?Pi(n.elements,r.elements,Pn):n instanceof Yu&&r instanceof Yu?Pn(n.yt,r.yt):n instanceof Wu&&r instanceof Wu}(t.transform,e.transform)}class z2{constructor(e,n){this.version=e,this.transformResults=n}}class jn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new jn}static exists(e){return new jn(void 0,e)}static updateTime(e){return new jn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $a(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class $l{}function Tb(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Eb(t.key,jn.none()):new co(t.key,t.data,jn.none());{const n=t.data,r=tn.empty();let i=new ct(At.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ri(t.key,r,new kn(i.toArray()),jn.none())}}function K2(t,e,n){t instanceof co?function(r,i,s){const o=r.value.clone(),a=nv(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ri?function(r,i,s){if(!$a(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=nv(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(Sb(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function ws(t,e,n,r){return t instanceof co?function(i,s,o,a){if(!$a(i.precondition,s))return o;const u=i.value.clone(),l=rv(i.fieldTransforms,a,s);return u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof ri?function(i,s,o,a){if(!$a(i.precondition,s))return o;const u=rv(i.fieldTransforms,a,s),l=s.data;return l.setAll(Sb(i)),l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,s,o){return $a(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function G2(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=vb(r.transform,i||null);s!=null&&(n===null&&(n=tn.empty()),n.set(r.field,s))}return n||null}function tv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Pi(n,r,(i,s)=>Y2(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class co extends $l{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ri extends $l{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Sb(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function nv(t,e,n){const r=new Map;Fe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,W2(o,a,n[i]))}return r}function rv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,q2(s,o,e))}return r}class Eb extends $l{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Q2 extends $l{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class X2{constructor(e){this.count=e}}/**
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
 */var st,Ie;function J2(t){switch(t){default:return ge();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function Ib(t){if(t===void 0)return zn("GRPC error has no .code"),F.UNKNOWN;switch(t){case st.OK:return F.OK;case st.CANCELLED:return F.CANCELLED;case st.UNKNOWN:return F.UNKNOWN;case st.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case st.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case st.INTERNAL:return F.INTERNAL;case st.UNAVAILABLE:return F.UNAVAILABLE;case st.UNAUTHENTICATED:return F.UNAUTHENTICATED;case st.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case st.NOT_FOUND:return F.NOT_FOUND;case st.ALREADY_EXISTS:return F.ALREADY_EXISTS;case st.PERMISSION_DENIED:return F.PERMISSION_DENIED;case st.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case st.ABORTED:return F.ABORTED;case st.OUT_OF_RANGE:return F.OUT_OF_RANGE;case st.UNIMPLEMENTED:return F.UNIMPLEMENTED;case st.DATA_LOSS:return F.DATA_LOSS;default:return ge()}}(Ie=st||(st={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Wi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){qi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return lb(this.inner)}size(){return this.innerSize}}/**
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
 */const Z2=new ht(oe.comparator);function Gn(){return Z2}const Cb=new ht(oe.comparator);function ls(...t){let e=Cb;for(const n of t)e=e.insert(n.key,n);return e}function kb(t){let e=Cb;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Mr(){return bs()}function Ob(){return bs()}function bs(){return new Wi(t=>t.toString(),(t,e)=>t.isEqual(e))}const eF=new ht(oe.comparator),tF=new ct(oe.comparator);function Te(...t){let e=tF;for(const n of t)e=e.add(n);return e}const nF=new ct(xe);function Rb(){return nF}/**
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
 */class Ll{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ho.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ll(_e.min(),i,Rb(),Gn(),Te())}}class ho{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ho(r,n,Te(),Te(),Te())}}/**
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
 */class La{constructor(e,n,r,i){this.Tt=e,this.removedTargetIds=n,this.key=r,this.Et=i}}class Pb{constructor(e,n){this.targetId=e,this.At=n}}class Db{constructor(e,n,r=$t.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class iv{constructor(){this.Rt=0,this.bt=ov(),this.Pt=$t.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=Te(),n=Te(),r=Te();return this.bt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ge()}}),new ho(this.Pt,this.vt,e,n,r)}Nt(){this.Vt=!1,this.bt=ov()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class rF{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=Gn(),this.qt=sv(),this.Kt=new ct(xe)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const r=this.zt(n);switch(e.state){case 0:this.Ht(n)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(e.resumeToken));break;default:ge()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((r,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,r=e.At.count,i=this.Xt(n);if(i){const s=i.target;if(qf(s))if(r===0){const o=new oe(s.path);this.jt(n,o,bt.newNoDocument(o,_e.min()))}else Fe(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&qf(a.target)){const u=new oe(a.target.path);this.Ut.get(u)!==null||this.ee(o,u)||this.jt(o,u,bt.newNoDocument(u,e))}s.Dt&&(n.set(o,s.xt()),s.Nt())}});let r=Te();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.Xt(u);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new Ll(e,n,this.Kt,this.Ut,r);return this.Ut=Gn(),this.qt=sv(),this.Kt=new ct(xe),i}Qt(e,n){if(!this.Ht(e))return;const r=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,r){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new iv,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new ct(xe),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||se("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new iv),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function sv(){return new ht(oe.comparator)}function ov(){return new ht(oe.comparator)}/**
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
 */const iF=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),sF=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class oF{constructor(e,n){this.databaseId=e,this.gt=n}}function zu(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ab(t,e){return t.gt?e.toBase64():e.toUint8Array()}function aF(t,e){return zu(t,e.toTimestamp())}function Hn(t){return Fe(!!t),_e.fromTimestamp(function(e){const n=fr(e);return new lt(n.seconds,n.nanos)}(t))}function bp(t,e){return function(n){return new Je(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Nb(t){const e=Je.fromString(t);return Fe($b(e)),e}function zf(t,e){return bp(t.databaseId,e.path)}function Mc(t,e){const n=Nb(e);if(n.get(1)!==t.databaseId.projectId)throw new ce(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ce(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new oe(xb(n))}function Kf(t,e){return bp(t.databaseId,e)}function uF(t){const e=Nb(t);return e.length===4?Je.emptyPath():xb(e)}function Gf(t){return new Je(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function xb(t){return Fe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function av(t,e,n){return{name:zf(t,e),fields:n.value.mapValue.fields}}function lF(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ge()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,l){return u.gt?(Fe(l===void 0||typeof l=="string"),$t.fromBase64String(l||"")):(Fe(l===void 0||l instanceof Uint8Array),$t.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?F.UNKNOWN:Ib(u.code);return new ce(l,u.message||"")}(o);n=new Db(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Mc(t,r.document.name),s=Hn(r.document.updateTime),o=new tn({mapValue:{fields:r.document.fields}}),a=bt.newFoundDocument(i,s,o),u=r.targetIds||[],l=r.removedTargetIds||[];n=new La(u,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Mc(t,r.document),s=r.readTime?Hn(r.readTime):_e.min(),o=bt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new La([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Mc(t,r.document),s=r.removedTargetIds||[];n=new La([],s,i,null)}else{if(!("filter"in e))return ge();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new X2(i),o=r.targetId;n=new Pb(o,s)}}return n}function cF(t,e){let n;if(e instanceof co)n={update:av(t,e.key,e.value)};else if(e instanceof Eb)n={delete:zf(t,e.key)};else if(e instanceof ri)n={update:av(t,e.key,e.data),updateMask:wF(e.fieldMask)};else{if(!(e instanceof Q2))return ge();n={verify:zf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Wu)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Vs)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Bs)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Yu)return{fieldPath:s.field.canonicalString(),increment:o.yt};throw ge()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:aF(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ge()}(t,e.precondition)),n}function hF(t,e){return t&&t.length>0?(Fe(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Hn(r.updateTime):Hn(i);return s.isEqual(_e.min())&&(s=Hn(i)),new z2(s,r.transformResults||[])}(n,e))):[]}function fF(t,e){return{documents:[Kf(t,e.path)]}}function dF(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Kf(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Kf(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(u){if(u.length===0)return;const l=u.map(h=>function(c){if(c.op==="=="){if(Gg(c.value))return{unaryFilter:{field:hi(c.field),op:"IS_NAN"}};if(Kg(c.value))return{unaryFilter:{field:hi(c.field),op:"IS_NULL"}}}else if(c.op==="!="){if(Gg(c.value))return{unaryFilter:{field:hi(c.field),op:"IS_NOT_NAN"}};if(Kg(c.value))return{unaryFilter:{field:hi(c.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:hi(c.field),op:gF(c.op),value:c.value}}}(h));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(u){if(u.length!==0)return u.map(l=>function(h){return{field:hi(h.field),direction:yF(h.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(u,l){return u.gt||Al(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),n}function pF(t){let e=uF(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Fe(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=Mb(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(c){return new _s(mi(c.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(c.direction))}(h)));let a=null;n.limit&&(a=function(h){let c;return c=typeof h=="object"?h.value:h,Al(c)?null:c}(n.limit));let u=null;n.startAt&&(u=function(h){const c=!!h.before,f=h.values||[];return new qu(f,c)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const c=!h.before,f=h.values||[];return new qu(f,c)}(n.endAt)),L2(e,i,o,s,a,"F",u,l)}function mF(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ge()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Mb(t){return t?t.unaryFilter!==void 0?[_F(t)]:t.fieldFilter!==void 0?[vF(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Mb(e)).reduce((e,n)=>e.concat(n)):ge():[]}function yF(t){return iF[t]}function gF(t){return sF[t]}function hi(t){return{fieldPath:t.canonicalString()}}function mi(t){return At.fromServerFormat(t.fieldPath)}function vF(t){return Yt.create(mi(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ge()}}(t.fieldFilter.op),t.fieldFilter.value)}function _F(t){switch(t.unaryFilter.op){case"IS_NAN":const e=mi(t.unaryFilter.field);return Yt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=mi(t.unaryFilter.field);return Yt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=mi(t.unaryFilter.field);return Yt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=mi(t.unaryFilter.field);return Yt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ge()}}function wF(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function $b(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class bF{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&K2(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ws(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ws(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Ob();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=Tb(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(_e.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Te())}isEqual(e){return this.batchId===e.batchId&&Pi(this.mutations,e.mutations,(n,r)=>tv(n,r))&&Pi(this.baseMutations,e.baseMutations,(n,r)=>tv(n,r))}}class Tp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Fe(e.mutations.length===r.length);let i=eF;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Tp(e,n,r,i)}}/**
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
 */class TF{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Vr{constructor(e,n,r,i,s=_e.min(),o=_e.min(),a=$t.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Vr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class SF{constructor(e){this.re=e}}function EF(t){const e=pF({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Wf(e,e.limit,"L"):e}/**
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
 */class IF{constructor(){this.Ye=new CF}addToCollectionParentIndex(e,n){return this.Ye.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(hr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(hr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class CF{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ct(Je.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ct(Je.comparator)).toArray()}}/**
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
 */class Ni{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Ni(0)}static vn(){return new Ni(-1)}}/**
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
 */class kF{constructor(){this.changes=new Wi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,bt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class OF{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class RF{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&ws(r.mutation,i,kn.empty(),lt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Te()){const i=Mr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ls();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Mr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Gn();const o=bs(),a=bs();return n.forEach((u,l)=>{const h=r.get(l.key);i.has(l.key)&&(h===void 0||h.mutation instanceof ri)?s=s.insert(l.key,l):h!==void 0&&(o.set(l.key,h.mutation.getFieldMask()),ws(h.mutation,l,h.mutation.getFieldMask(),lt.now()))}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((l,h)=>o.set(l,h)),n.forEach((l,h)=>{var c;return a.set(l,new OF(h,(c=o.get(l))!==null&&c!==void 0?c:null))}),a))}recalculateAndSaveOverlays(e,n){const r=bs();let i=new ht((o,a)=>o-a),s=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const l=n.get(u);if(l===null)return;let h=r.get(u)||kn.empty();h=a.applyToLocalView(l,h),r.set(u,h);const c=(i.get(a.batchId)||Te()).add(u);i=i.insert(a.batchId,c)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),l=u.key,h=u.value,c=Ob();h.forEach(f=>{if(!s.has(f)){const p=Tb(n.get(f),r.get(f));p!==null&&c.set(f,p),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,c))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return oe.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):V2(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):L.resolve(Mr());let a=-1,u=s;return o.next(l=>L.forEach(l,(h,c)=>(a<c.largestBatchId&&(a=c.largestBatchId),s.get(h)?L.resolve():this.getBaseDocument(e,h,c).next(f=>{u=u.insert(h,f)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,u,l,Te())).next(h=>({batchId:a,changes:kb(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new oe(n)).next(r=>{let i=ls();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=ls();return this.indexManager.getCollectionParents(e,i).next(o=>L.forEach(o,a=>{const u=function(l,h){return new Nl(h,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r).next(l=>{l.forEach((h,c)=>{s=s.insert(h,c)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,u)=>{const l=u.getKey();i.get(l)===null&&(i=i.insert(l,bt.newInvalidDocument(l)))});let o=ls();return i.forEach((a,u)=>{const l=s.get(a);l!==void 0&&ws(l.mutation,u,kn.empty(),lt.now()),wp(n,u)&&(o=o.insert(a,u))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):L.resolve(bt.newInvalidDocument(n))}}/**
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
 */class PF{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return L.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Hn(r.createTime)}),L.resolve()}getNamedQuery(e,n){return L.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:EF(r.bundledQuery),readTime:Hn(r.readTime)}}(n)),L.resolve()}}/**
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
 */class DF{constructor(){this.overlays=new ht(oe.comparator),this.es=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Mr();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ue(e,n,s)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=Mr(),s=n.length+1,o=new oe(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ht((l,h)=>l-h);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let h=s.get(l.largestBatchId);h===null&&(h=Mr(),s=s.insert(l.largestBatchId,h)),h.set(l.getKey(),l)}}const a=Mr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,h)=>a.set(l,h)),!(a.size()>=i)););return L.resolve(a)}ue(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new TF(n,r));let s=this.es.get(n);s===void 0&&(s=Te(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
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
 */class Sp{constructor(){this.ns=new ct(dt.ss),this.rs=new ct(dt.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new dt(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new dt(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new oe(new Je([])),r=new dt(n,e),i=new dt(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new oe(new Je([])),r=new dt(n,e),i=new dt(n,e+1);let s=Te();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new dt(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class dt{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return oe.comparator(e.key,n.key)||xe(e._s,n._s)}static os(e,n){return xe(e._s,n._s)||oe.comparator(e.key,n.key)}}/**
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
 */class AF{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new ct(dt.ss)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new bF(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new dt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new dt(n,0),i=new dt(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ct(xe);return n.forEach(i=>{const s=new dt(i,0),o=new dt(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),L.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;oe.isDocumentKey(s)||(s=s.child(""));const o=new dt(new oe(s),0);let a=new ct(xe);return this.gs.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(u._s)),!0)},o),L.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Fe(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return L.forEach(n.mutations,i=>{const s=new dt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new dt(n,0),i=this.gs.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class NF{constructor(e){this.Es=e,this.docs=new ht(oe.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():bt.newInvalidDocument(n))}getEntries(e,n){let r=Gn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():bt.newInvalidDocument(i))}),L.resolve(r)}getAllFromCollection(e,n,r){let i=Gn();const s=new oe(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:u}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||w2(_2(u),r)<=0||(i=i.insert(u.key,u.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,n,r,i){ge()}As(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new xF(this)}getSize(e){return L.resolve(this.size)}}class xF extends kF{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class MF{constructor(e){this.persistence=e,this.Rs=new Wi(n=>gp(n),vp),this.lastRemoteSnapshotVersion=_e.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Sp,this.targetCount=0,this.vs=Ni.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),L.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Ni(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Dn(n),L.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.Ps.containsKey(n))}}/**
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
 */class $F{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new mp(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new MF(this),this.indexManager=new IF,this.remoteDocumentCache=function(r){return new NF(r)}(r=>this.referenceDelegate.xs(r)),this.It=new SF(n),this.Ns=new PF(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new DF,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new AF(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){se("MemoryPersistence","Starting transaction:",e);const i=new LF(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(e,n){return L.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class LF extends T2{constructor(e){super(),this.currentSequenceNumber=e}}class Ep{constructor(e){this.persistence=e,this.Fs=new Sp,this.$s=null}static Bs(e){return new Ep(e)}get Ls(){if(this.$s)return this.$s;throw ge()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),L.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Ls,r=>{const i=oe.fromPath(r);return this.Us(e,i).next(s=>{s||n.removeEntry(i,_e.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return L.or([()=>L.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class Ip{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=Te(),i=Te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ip(e,n.fromCache,r,i)}}/**
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
 */class UF{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Mi(e,n))}ki(e,n){if(Zg(n))return L.resolve(null);let r=Kn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Wf(n,null,"F"),r=Kn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Te(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const l=this.Fi(n,a);return this.$i(n,l,o,u.readTime)?this.ki(e,Wf(n,null,"F")):this.Bi(e,l,n,u)}))})))}Oi(e,n,r,i){return Zg(n)||i.isEqual(_e.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Mi(e,n):(qg()<=Re.DEBUG&&se("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Yf(n)),this.Bi(e,o,n,v2(i,-1)))})}Fi(e,n){let r=new ct(mb(e));return n.forEach((i,s)=>{wp(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(e,n){return qg()<=Re.DEBUG&&se("QueryEngine","Using full collection scan to execute query:",Yf(n)),this.Ni.getDocumentsMatchingQuery(e,n,hr.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class FF{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new ht(xe),this.qi=new Wi(s=>gp(s),vp),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new RF(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function VF(t,e,n,r){return new FF(t,e,n,r)}async function Lb(t,e){const n=ve(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=Te();for(const l of i){o.push(l.batchId);for(const h of l.mutations)u=u.add(h.key)}for(const l of s){a.push(l.batchId);for(const h of l.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function BF(t,e){const n=ve(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,u,l){const h=u.batch,c=h.keys();let f=L.resolve();return c.forEach(p=>{f=f.next(()=>l.getEntry(a,p)).next(m=>{const T=u.docVersions.get(p);Fe(T!==null),m.version.compareTo(T)<0&&(h.applyToRemoteDocument(m,u),m.isValidDocument()&&(m.setReadTime(u.commitVersion),l.addEntry(m)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=Te();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Ub(t){const e=ve(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function jF(t,e){const n=ve(t),r=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((h,c)=>{const f=i.get(c);if(!f)return;a.push(n.Cs.removeMatchingKeys(s,h.removedDocuments,c).next(()=>n.Cs.addMatchingKeys(s,h.addedDocuments,c)));let p=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(c)?p=p.withResumeToken($t.EMPTY_BYTE_STRING,_e.min()).withLastLimboFreeSnapshotVersion(_e.min()):h.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(h.resumeToken,r)),i=i.insert(c,p),function(m,T,P){return m.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:P.addedDocuments.size+P.modifiedDocuments.size+P.removedDocuments.size>0}(f,p,h)&&a.push(n.Cs.updateTargetData(s,p))});let u=Gn(),l=Te();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(HF(s,o,e.documentUpdates).next(h=>{u=h.Wi,l=h.zi})),!r.isEqual(_e.min())){const h=n.Cs.getLastRemoteSnapshotVersion(s).next(c=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return L.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,l)).next(()=>u)}).then(s=>(n.Ui=i,s))}function HF(t,e,n){let r=Te(),i=Te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Gn();return n.forEach((a,u)=>{const l=s.get(a);u.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(_e.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):se("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",u.version)}),{Wi:o,zi:i}})}function qF(t,e){const n=ve(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function WF(t,e){const n=ve(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,L.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new Vr(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function Qf(t,e,n){const r=ve(t),i=r.Ui.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!lo(o))throw o;se("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ui=r.Ui.remove(e),r.qi.delete(i.target)}function uv(t,e,n){const r=ve(t);let i=_e.min(),s=Te();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,u,l){const h=ve(a),c=h.qi.get(l);return c!==void 0?L.resolve(h.Ui.get(c)):h.Cs.getTargetData(u,l)}(r,o,Kn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:_e.min(),n?s:Te())).next(a=>(YF(r,B2(e),a),{documents:a,Hi:s})))}function YF(t,e,n){let r=t.Ki.get(e)||_e.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}class lv{constructor(){this.activeTargetIds=Rb()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zF{constructor(){this.Lr=new lv,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,r){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new lv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class KF{qr(e){}shutdown(){}}/**
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
 */const GF={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class QF{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class XF extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,s){const o=this.ho(e,n);se("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(e,o,a,r).then(u=>(se("RestConnection","Received: ",u),u),u=>{throw Bf("RestConnection",`${e} failed with error: `,u,"url: ",o,"request:",r),u})}_o(e,n,r,i,s,o){return this.ao(e,n,r,i,s)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Hi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,n){const r=GF[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((s,o)=>{const a=new u2;a.setWithCredentials(!0),a.listenOnce(s2.COMPLETE,()=>{var l;try{switch(a.getLastErrorCode()){case xc.NO_ERROR:const h=a.getResponseJson();se("Connection","XHR received:",JSON.stringify(h)),s(h);break;case xc.TIMEOUT:se("Connection",'RPC "'+e+'" timed out'),o(new ce(F.DEADLINE_EXCEEDED,"Request time out"));break;case xc.HTTP_ERROR:const c=a.getStatus();if(se("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){let f=a.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=(l=f)===null||l===void 0?void 0:l.error;if(p&&p.status&&p.message){const m=function(T){const P=T.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(P)>=0?P:F.UNKNOWN}(p.status);o(new ce(m,p.message))}else o(new ce(F.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new ce(F.UNAVAILABLE,"Connection failed."));break;default:ge()}}finally{se("Connection",'RPC "'+e+'" completed.')}});const u=JSON.stringify(i);a.send(n,"POST",u,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=r2(),o=i2(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new a2({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const u=i.join("");se("Connection","Creating WebChannel: "+u,a);const l=s.createWebChannel(u,a);let h=!1,c=!1;const f=new QF({Hr:m=>{c?se("Connection","Not sending because WebChannel is closed:",m):(h||(se("Connection","Opening WebChannel transport."),l.open(),h=!0),se("Connection","WebChannel sending:",m),l.send(m))},Jr:()=>l.close()}),p=(m,T,P)=>{m.listen(T,D=>{try{P(D)}catch(S){setTimeout(()=>{throw S},0)}})};return p(l,Ao.EventType.OPEN,()=>{c||se("Connection","WebChannel transport opened.")}),p(l,Ao.EventType.CLOSE,()=>{c||(c=!0,se("Connection","WebChannel transport closed"),f.io())}),p(l,Ao.EventType.ERROR,m=>{c||(c=!0,Bf("Connection","WebChannel transport errored:",m),f.io(new ce(F.UNAVAILABLE,"The operation could not be completed")))}),p(l,Ao.EventType.MESSAGE,m=>{var T;if(!c){const P=m.data[0];Fe(!!P);const D=P,S=D.error||((T=D[0])===null||T===void 0?void 0:T.error);if(S){se("Connection","WebChannel received error:",S);const H=S.status;let W=function(v){const k=st[v];if(k!==void 0)return Ib(k)}(H),Q=S.message;W===void 0&&(W=F.INTERNAL,Q="Unknown error status: "+H+" with message "+S.message),c=!0,f.io(new ce(W,Q)),l.close()}else se("Connection","WebChannel received:",P),f.ro(P)}}),p(o,o2.STAT_EVENT,m=>{m.stat===jg.PROXY?se("Connection","Detected buffering proxy"):m.stat===jg.NOPROXY&&se("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}/**
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
 */function Ul(t){return new oF(t,!0)}class Fb{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&se("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class Vb{constructor(e,n,r,i,s,o,a,u){this.Hs=e,this.vo=r,this.Vo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Fb(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(zn(n.toString()),zn("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new ce(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return se("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(se("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class JF extends Vb{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.It=s}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=lF(this.It,e),r=function(i){if(!("targetChange"in i))return _e.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?_e.min():s.readTime?Hn(s.readTime):_e.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=Gf(this.It),n.addTarget=function(i,s){let o;const a=s.target;return o=qf(a)?{documents:fF(i,a)}:{query:dF(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=Ab(i,s.resumeToken):s.snapshotVersion.compareTo(_e.min())>0&&(o.readTime=zu(i,s.snapshotVersion.toTimestamp())),o}(this.It,e);const r=mF(this.It,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=Gf(this.It),n.removeTarget=e,this.Bo(n)}}class ZF extends Vb{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.It=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=hF(e.writeResults,e.commitTime),r=Hn(e.commitTime);return this.listener.Zo(r,n)}return Fe(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Gf(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>cF(this.It,r))};this.Bo(n)}}/**
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
 */class eV extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.It=i,this.nu=!1}su(){if(this.nu)throw new ce(F.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.ao(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ce(F.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection._o(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ce(F.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class tV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(zn(n),this.ou=!1):se("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class nV{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.qr(o=>{r.enqueueAndForget(async()=>{ii(this)&&(se("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=ve(a);u._u.add(4),await fo(u),u.gu.set("Unknown"),u._u.delete(4),await Fl(u)}(this))})}),this.gu=new tV(r,i)}}async function Fl(t){if(ii(t))for(const e of t.wu)await e(!0)}async function fo(t){for(const e of t.wu)await e(!1)}function Bb(t,e){const n=ve(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Op(n)?kp(n):Yi(n).ko()&&Cp(n,e))}function jb(t,e){const n=ve(t),r=Yi(n);n.du.delete(e),r.ko()&&Hb(n,e),n.du.size===0&&(r.ko()?r.Fo():ii(n)&&n.gu.set("Unknown"))}function Cp(t,e){t.yu.Mt(e.targetId),Yi(t).zo(e)}function Hb(t,e){t.yu.Mt(e),Yi(t).Ho(e)}function kp(t){t.yu=new rF({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),Yi(t).start(),t.gu.uu()}function Op(t){return ii(t)&&!Yi(t).No()&&t.du.size>0}function ii(t){return ve(t)._u.size===0}function qb(t){t.yu=void 0}async function rV(t){t.du.forEach((e,n)=>{Cp(t,e)})}async function iV(t,e){qb(t),Op(t)?(t.gu.hu(e),kp(t)):t.gu.set("Unknown")}async function sV(t,e,n){if(t.gu.set("Online"),e instanceof Db&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){se("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ku(t,r)}else if(e instanceof La?t.yu.Gt(e):e instanceof Pb?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(_e.min()))try{const r=await Ub(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.yu.te(s);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.du.get(u);l&&i.du.set(u,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const u=i.du.get(a);if(!u)return;i.du.set(a,u.withResumeToken($t.EMPTY_BYTE_STRING,u.snapshotVersion)),Hb(i,a);const l=new Vr(u.target,a,1,u.sequenceNumber);Cp(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){se("RemoteStore","Failed to raise snapshot:",r),await Ku(t,r)}}async function Ku(t,e,n){if(!lo(e))throw e;t._u.add(1),await fo(t),t.gu.set("Offline"),n||(n=()=>Ub(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{se("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Fl(t)})}function Wb(t,e){return e().catch(n=>Ku(t,n,e))}async function Vl(t){const e=ve(t),n=dr(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;oV(e);)try{const i=await qF(e.localStore,r);if(i===null){e.fu.length===0&&n.Fo();break}r=i.batchId,aV(e,i)}catch(i){await Ku(e,i)}Yb(e)&&zb(e)}function oV(t){return ii(t)&&t.fu.length<10}function aV(t,e){t.fu.push(e);const n=dr(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function Yb(t){return ii(t)&&!dr(t).No()&&t.fu.length>0}function zb(t){dr(t).start()}async function uV(t){dr(t).eu()}async function lV(t){const e=dr(t);for(const n of t.fu)e.Xo(n.mutations)}async function cV(t,e,n){const r=t.fu.shift(),i=Tp.from(r,e,n);await Wb(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Vl(t)}async function hV(t,e){e&&dr(t).Yo&&await async function(n,r){if(i=r.code,J2(i)&&i!==F.ABORTED){const s=n.fu.shift();dr(n).Mo(),await Wb(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Vl(n)}var i}(t,e),Yb(t)&&zb(t)}async function cv(t,e){const n=ve(t);n.asyncQueue.verifyOperationInProgress(),se("RemoteStore","RemoteStore received new credentials");const r=ii(n);n._u.add(3),await fo(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Fl(n)}async function fV(t,e){const n=ve(t);e?(n._u.delete(2),await Fl(n)):e||(n._u.add(2),await fo(n),n.gu.set("Unknown"))}function Yi(t){return t.pu||(t.pu=function(e,n,r){const i=ve(e);return i.su(),new JF(n,i.connection,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:rV.bind(null,t),Zr:iV.bind(null,t),Wo:sV.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Op(t)?kp(t):t.gu.set("Unknown")):(await t.pu.stop(),qb(t))})),t.pu}function dr(t){return t.Iu||(t.Iu=function(e,n,r){const i=ve(e);return i.su(),new ZF(n,i.connection,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:uV.bind(null,t),Zr:hV.bind(null,t),tu:lV.bind(null,t),Zo:cV.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await Vl(t)):(await t.Iu.stop(),t.fu.length>0&&(se("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class Rp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ur,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Rp(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Pp(t,e){if(zn("AsyncQueue",`${e}: ${t}`),lo(t))return new ce(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ti{constructor(e){this.comparator=e?(n,r)=>e(n,r)||oe.comparator(n.key,r.key):(n,r)=>oe.comparator(n.key,r.key),this.keyedMap=ls(),this.sortedSet=new ht(this.comparator)}static emptySet(e){return new Ti(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ti)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ti;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class hv{constructor(){this.Tu=new ht(oe.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):ge():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class xi{constructor(e,n,r,i,s,o,a,u,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new xi(e,n,Ti.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class dV{constructor(){this.Au=void 0,this.listeners=[]}}class pV{constructor(){this.queries=new Wi(e=>pb(e),xl),this.onlineState="Unknown",this.Ru=new Set}}async function mV(t,e){const n=ve(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new dV),i)try{s.Au=await n.onListen(r)}catch(o){const a=Pp(o,`Initialization of query '${Yf(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&Dp(n)}async function yV(t,e){const n=ve(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function gV(t,e){const n=ve(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&Dp(n)}function vV(t,e,n){const r=ve(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Dp(t){t.Ru.forEach(e=>{e.next()})}class _V{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new xi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=xi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */class Kb{constructor(e){this.key=e}}class Gb{constructor(e){this.key=e}}class wV{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Te(),this.mutatedKeys=Te(),this.Gu=mb(e),this.Qu=new Ti(this.Gu)}get ju(){return this.Uu}Wu(e,n){const r=n?n.zu:new hv,i=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,c)=>{const f=i.get(h),p=wp(this.query,c)?c:null,m=!!f&&this.mutatedKeys.has(f.key),T=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let P=!1;f&&p?f.data.isEqual(p.data)?m!==T&&(r.track({type:3,doc:p}),P=!0):this.Hu(f,p)||(r.track({type:2,doc:p}),P=!0,(u&&this.Gu(p,u)>0||l&&this.Gu(p,l)<0)&&(a=!0)):!f&&p?(r.track({type:0,doc:p}),P=!0):f&&!p&&(r.track({type:1,doc:f}),P=!0,(u||l)&&(a=!0)),P&&(p?(o=o.add(p),s=T?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Qu:o,zu:r,$i:a,mutatedKeys:s}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Eu();s.sort((l,h)=>function(c,f){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ge()}};return p(c)-p(f)}(l.type,h.type)||this.Gu(l.doc,h.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,u=a!==this.qu;return this.qu=a,s.length!==0||u?{snapshot:new xi(this.query,e.Qu,i,s,e.mutatedKeys,a===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new hv,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Te(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new Gb(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new Kb(r))}),n}tc(e){this.Uu=e.Hi,this.Ku=Te();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return xi.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class bV{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class TV{constructor(e){this.key=e,this.nc=!1}}class SV{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Wi(a=>pb(a),xl),this.rc=new Map,this.oc=new Set,this.uc=new ht(oe.comparator),this.cc=new Map,this.ac=new Sp,this.hc={},this.lc=new Map,this.fc=Ni.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function EV(t,e){const n=xV(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const o=await WF(n.localStore,Kn(e));n.isPrimaryClient&&Bb(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await IV(n,e,r,a==="current",o.resumeToken)}return i}async function IV(t,e,n,r,i){t._c=(c,f,p)=>async function(m,T,P,D){let S=T.view.Wu(P);S.$i&&(S=await uv(m.localStore,T.query,!1).then(({documents:Q})=>T.view.Wu(Q,S)));const H=D&&D.targetChanges.get(T.targetId),W=T.view.applyChanges(S,m.isPrimaryClient,H);return dv(m,T.targetId,W.Xu),W.snapshot}(t,c,f,p);const s=await uv(t.localStore,e,!0),o=new wV(e,s.Hi),a=o.Wu(s.documents),u=ho.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,u);dv(t,n,l.Xu);const h=new bV(e,n,o);return t.ic.set(e,h),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function CV(t,e){const n=ve(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(s=>!xl(s,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Qf(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),jb(n.remoteStore,r.targetId),Xf(n,r.targetId)}).catch(uo)):(Xf(n,r.targetId),await Qf(n.localStore,r.targetId,!0))}async function kV(t,e,n){const r=MV(t);try{const i=await function(s,o){const a=ve(s),u=lt.now(),l=o.reduce((f,p)=>f.add(p.key),Te());let h,c;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let p=Gn(),m=Te();return a.Gi.getEntries(f,l).next(T=>{p=T,p.forEach((P,D)=>{D.isValidDocument()||(m=m.add(P))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,p)).next(T=>{h=T;const P=[];for(const D of o){const S=G2(D,h.get(D.key).overlayedDocument);S!=null&&P.push(new ri(D.key,S,fb(S.value.mapValue),jn.exists(!0)))}return a.mutationQueue.addMutationBatch(f,u,P,o)}).next(T=>{c=T;const P=T.applyToLocalDocumentSet(h,m);return a.documentOverlayCache.saveOverlays(f,T.batchId,P)})}).then(()=>({batchId:c.batchId,changes:kb(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let u=s.hc[s.currentUser.toKey()];u||(u=new ht(xe)),u=u.insert(o,a),s.hc[s.currentUser.toKey()]=u}(r,i.batchId,n),await po(r,i.changes),await Vl(r.remoteStore)}catch(i){const s=Pp(i,"Failed to persist write");n.reject(s)}}async function Qb(t,e){const n=ve(t);try{const r=await jF(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.cc.get(s);o&&(Fe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?Fe(o.nc):i.removedDocuments.size>0&&(Fe(o.nc),o.nc=!1))}),await po(n,r,e)}catch(r){await uo(r)}}function fv(t,e,n){const r=ve(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=ve(s);a.onlineState=o;let u=!1;a.queries.forEach((l,h)=>{for(const c of h.listeners)c.bu(o)&&(u=!0)}),u&&Dp(a)}(r.eventManager,e),i.length&&r.sc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function OV(t,e,n){const r=ve(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let o=new ht(oe.comparator);o=o.insert(s,bt.newNoDocument(s,_e.min()));const a=Te().add(s),u=new Ll(_e.min(),new Map,new ct(xe),o,a);await Qb(r,u),r.uc=r.uc.remove(s),r.cc.delete(e),Ap(r)}else await Qf(r.localStore,e,!1).then(()=>Xf(r,e,n)).catch(uo)}async function RV(t,e){const n=ve(t),r=e.batch.batchId;try{const i=await BF(n.localStore,e);Jb(n,r,null),Xb(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await po(n,i)}catch(i){await uo(i)}}async function PV(t,e,n){const r=ve(t);try{const i=await function(s,o){const a=ve(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return a.mutationQueue.lookupMutationBatch(u,o).next(h=>(Fe(h!==null),l=h.keys(),a.mutationQueue.removeMutationBatch(u,h))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>a.localDocuments.getDocuments(u,l))})}(r.localStore,e);Jb(r,e,n),Xb(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await po(r,i)}catch(i){await uo(i)}}function Xb(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Jb(t,e,n){const r=ve(t);let i=r.hc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function Xf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||Zb(t,r)})}function Zb(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(jb(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Ap(t))}function dv(t,e,n){for(const r of n)r instanceof Kb?(t.ac.addReference(r.key,e),DV(t,r)):r instanceof Gb?(se("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||Zb(t,r.key)):ge()}function DV(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(se("SyncEngine","New document in limbo: "+n),t.oc.add(r),Ap(t))}function Ap(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new oe(Je.fromString(e)),r=t.fc.next();t.cc.set(r,new TV(n)),t.uc=t.uc.insert(n,r),Bb(t.remoteStore,new Vr(Kn(_p(n.path)),r,2,mp.at))}}async function po(t,e,n){const r=ve(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,u)=>{o.push(r._c(u,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const h=Ip.Ci(u.targetId,l);s.push(h)}}))}),await Promise.all(o),r.sc.Wo(i),await async function(a,u){const l=ve(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>L.forEach(u,c=>L.forEach(c.Si,f=>l.persistence.referenceDelegate.addReference(h,c.targetId,f)).next(()=>L.forEach(c.Di,f=>l.persistence.referenceDelegate.removeReference(h,c.targetId,f)))))}catch(h){if(!lo(h))throw h;se("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const c=h.targetId;if(!h.fromCache){const f=l.Ui.get(c),p=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(p);l.Ui=l.Ui.insert(c,m)}}}(r.localStore,s))}async function AV(t,e){const n=ve(t);if(!n.currentUser.isEqual(e)){se("SyncEngine","User change. New user:",e.toKey());const r=await Lb(n.localStore,e);n.currentUser=e,function(i,s){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new ce(F.CANCELLED,s))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await po(n,r.ji)}}function NV(t,e){const n=ve(t),r=n.cc.get(e);if(r&&r.nc)return Te().add(r.key);{let i=Te();const s=n.rc.get(e);if(!s)return i;for(const o of s){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function xV(t){const e=ve(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Qb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=NV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=OV.bind(null,e),e.sc.Wo=gV.bind(null,e.eventManager),e.sc.wc=vV.bind(null,e.eventManager),e}function MV(t){const e=ve(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=RV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=PV.bind(null,e),e}class $V{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=Ul(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return VF(this.persistence,new UF,e.initialUser,this.It)}yc(e){return new $F(Ep.Bs,this.It)}gc(e){return new zF}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class LV{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>fv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=AV.bind(null,this.syncEngine),await fV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new pV}createDatastore(e){const n=Ul(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new XF(i));var i;return function(s,o,a,u){return new eV(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>fv(this.syncEngine,a,0),o=new KF,new nV(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,u,l){const h=new SV(r,i,s,o,a,u);return l&&(h.dc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ve(e);se("RemoteStore","RemoteStore shutting down."),n._u.add(5),await fo(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function UV(t,e,n){if(!n)throw new ce(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function FV(t,e,n,r){if(e===!0&&r===!0)throw new ce(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function pv(t){if(!oe.isDocumentKey(t))throw new ce(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Np(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ge()}function js(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ce(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Np(t);throw new ce(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const mv=new Map;class yv{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new ce(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ce(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,FV("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class xp{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ce(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ce(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yv(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new l2;switch(n.type){case"gapi":const r=n.client;return new d2(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new ce(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=mv.get(e);n&&(se("ComponentProvider","Removing Datastore"),mv.delete(e),n.terminate())}(this),Promise.resolve()}}function VV(t,e,n,r={}){var i;const s=(t=js(t,xp))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Bf("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=kt.MOCK_USER;else{o=ON(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new ce(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new kt(u)}t._authCredentials=new c2(new ab(o,a))}}/**
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
 */class sn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new sn(this.firestore,e,this._key)}}class Mp{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Mp(this.firestore,e,this._query)}}class Hs extends Mp{constructor(e,n,r){super(e,n,_p(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new sn(this.firestore,null,new oe(e))}withConverter(e){return new Hs(this.firestore,e,this._path)}}function $p(t,e,...n){if(t=Gt(t),arguments.length===1&&(e=ub.R()),UV("doc","path",e),t instanceof xp){const r=Je.fromString(e,...n);return pv(r),new sn(t,null,new oe(r))}{if(!(t instanceof sn||t instanceof Hs))throw new ce(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Je.fromString(e,...n));return pv(r),new sn(t.firestore,t instanceof Hs?t.converter:null,new oe(r))}}/**
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
 */class BV{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):zn("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class jV{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=kt.UNAUTHENTICATED,this.clientId=ub.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{se("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(se("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ce(F.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ur;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Pp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function HV(t,e){t.asyncQueue.verifyOperationInProgress(),se("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Lb(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function qV(t,e){t.asyncQueue.verifyOperationInProgress();const n=await WV(t);se("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>cv(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>cv(e.remoteStore,s)),t.onlineComponents=e}async function WV(t){return t.offlineComponents||(se("FirestoreClient","Using default OfflineComponentProvider"),await HV(t,new $V)),t.offlineComponents}async function eT(t){return t.onlineComponents||(se("FirestoreClient","Using default OnlineComponentProvider"),await qV(t,new LV)),t.onlineComponents}function YV(t){return eT(t).then(e=>e.syncEngine)}async function zV(t){const e=await eT(t),n=e.eventManager;return n.onListen=EV.bind(null,e.syncEngine),n.onUnlisten=CV.bind(null,e.syncEngine),n}function KV(t,e,n={}){const r=new ur;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new BV({next:c=>{s.enqueueAndForget(()=>yV(i,h));const f=c.docs.has(o);!f&&c.fromCache?u.reject(new ce(F.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&c.fromCache&&a&&a.source==="server"?u.reject(new ce(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(c)},error:c=>u.reject(c)}),h=new _V(_p(o.path),l,{includeMetadataChanges:!0,Nu:!0});return mV(i,h)}(await zV(t),t.asyncQueue,e,n,r)),r.promise}class GV{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Fb(this,"async_queue_retry"),this.Wc=()=>{this.xo.Po()}}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){this.Uc||(this.Uc=!0,this.Qc=e||!1)}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new ur;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!lo(e))throw e;se("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw zn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=Rp.createAndSchedule(this,e,n,r,s=>this.Yc(s));return this.qc.push(i),i}zc(){this.Kc&&ge()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}class Lp extends xp{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new GV,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||nT(this),this._firestoreClient.terminate()}}function Up(t,e){const n=typeof t=="object"?t:xd(),r=typeof t=="string"?t:e||"(default)",i=ti(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=CN("firestore");s&&VV(i,...s)}return i}function tT(t){return t._firestoreClient||nT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function nT(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new E2(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new jV(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 */class Mi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Mi($t.fromBase64String(e))}catch(n){throw new ce(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Mi($t.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Fp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ce(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new At(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class rT{constructor(e){this._methodName=e}}/**
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
 */class Vp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ce(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ce(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}}/**
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
 */const QV=/^__.*__$/;class XV{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ri(e,this.data,this.fieldMask,n,this.fieldTransforms):new co(e,this.data,n,this.fieldTransforms)}}function iT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ge()}}class Bp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.It=r,this.ignoreUndefinedProperties=i,s===void 0&&this.na(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Bp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.ua(e),i}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Gu(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(iT(this.sa)&&QV.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class JV{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=r||Ul(e)}da(e,n,r,i=!1){return new Bp({sa:e,methodName:n,fa:r,path:At.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function ZV(t){const e=t._freezeSettings(),n=Ul(t._databaseId);return new JV(t._databaseId,!!e.ignoreUndefinedProperties,n)}function eB(t,e,n,r,i,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,i);uT("Data must be an object, but it was:",o,r);const a=oT(r,o);let u,l;if(s.merge)u=new kn(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const c of s.mergeFields){const f=tB(e,c,n);if(!o.contains(f))throw new ce(F.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);rB(h,f)||h.push(f)}u=new kn(h),l=o.fieldTransforms.filter(c=>u.covers(c.field))}else u=null,l=o.fieldTransforms;return new XV(new tn(a),u,l)}function sT(t,e){if(aT(t=Gt(t)))return uT("Unsupported field value:",e,t),oT(t,e);if(t instanceof rT)return function(n,r){if(!iT(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=sT(o,r.aa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Gt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return H2(r.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=lt.fromDate(n);return{timestampValue:zu(r.It,i)}}if(n instanceof lt){const i=new lt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:zu(r.It,i)}}if(n instanceof Vp)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Mi)return{bytesValue:Ab(r.It,n._byteString)};if(n instanceof sn){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:bp(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${Np(n)}`)}(t,e)}function oT(t,e){const n={};return lb(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qi(t,(r,i)=>{const s=sT(i,e.ra(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function aT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof lt||t instanceof Vp||t instanceof Mi||t instanceof sn||t instanceof rT)}function uT(t,e,n){if(!aT(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Np(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function tB(t,e,n){if((e=Gt(e))instanceof Fp)return e._internalPath;if(typeof e=="string")return lT(t,e);throw Gu("Field path arguments must be of type string or ",t,!1,void 0,n)}const nB=new RegExp("[~\\*/\\[\\]]");function lT(t,e,n){if(e.search(nB)>=0)throw Gu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Fp(...e.split("."))._internalPath}catch{throw Gu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Gu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new ce(F.INVALID_ARGUMENT,a+t+u)}function rB(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class cT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new sn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new iB(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(hT("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class iB extends cT{data(){return super.data()}}function hT(t,e){return typeof e=="string"?lT(t,e):e instanceof Fp?e._internalPath:e._delegate._internalPath}/**
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
 */class sB{convertValue(e,n="none"){switch(Kr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ot(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Di(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ge()}}convertObject(e,n){const r={};return qi(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Vp(ot(e.latitude),ot(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=hb(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp($s(e));default:return null}}convertTimestamp(e){const n=fr(e);return new lt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Je.fromString(e);Fe($b(r));const i=new Ls(r.get(1),r.get(3)),s=new oe(r.popFirst(5));return i.isEqual(n)||zn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function oB(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class aB{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class fT extends cT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new uB(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(hT("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class uB extends fT{data(e={}){return super.data(e)}}/**
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
 */function lB(t){t=js(t,sn);const e=js(t.firestore,Lp);return KV(tT(e),t._key).then(n=>fB(e,t,n))}class cB extends sB{constructor(e){super(),this.firestore=e}convertBytes(e){return new Mi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new sn(this.firestore,null,n)}}function dT(t,e,n){t=js(t,sn);const r=js(t.firestore,Lp),i=oB(t.converter,e,n);return hB(r,[eB(ZV(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,jn.none())])}function hB(t,e){return function(n,r){const i=new ur;return n.asyncQueue.enqueueAndForget(async()=>kV(await YV(n),r,i)),i.promise}(tT(t),e)}function fB(t,e,n){const r=n.docs.get(e._key),i=new cB(t);return new fT(t,i,e._key,r,new aB(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Hi=n})(Vi),pn(new an("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Lp(new h2(n.getProvider("auth-internal")),new m2(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new ce(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ls(a.options.projectId,u)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Kt(Hg,"3.7.3",t),Kt(Hg,"3.7.3","esm2017")})();const dB=new Mn,sH=async()=>{const t=yl();await z$(t)},oH=()=>{const t=yl();return gL(t,dB).then(()=>t)},pB=async t=>{const e=yl();console.log("Current user is "+e.name),console.log("attempting to hack "+t);const n=Up(),r=$p(n,"users",t);await dT(r,{pwned:"haha noob"})};window.pwn=pB;const aH=async t=>{const e=yl(),n=Up(),r=$p(n,"users",e.currentUser.uid);await dT(r,t)},uH=async t=>{console.log(t);const e=Up();console.log("Getting user data!");const n=$p(e,"users",t.currentUser.uid);console.log("Got user data!");const r=(await lB(n)).data();return console.log("Got the user data for real this time!"),r===void 0?(console.log("Userdata is undefined!"),!1):!0},Mo=void 0,$o=void 0,gv="@firebase/database",vv="0.13.10";/**
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
 */let pT="";function mB(t){pT=t}/**
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
 */class yB{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Xn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const mT=function(t){try{}catch{}return new yB},$r=mT("localStorage"),Jf=mT("sessionStorage");/**
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
 */const Si=new Gs("@firebase/database"),gB=function(){let t=1;return function(){return t++}}(),yT=function(t){const e=FN(t),n=new xN;n.update(e);const r=n.digest();return Pd.encodeByteArray(r)},mo=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=mo.apply(null,r):typeof r=="object"?e+=Dt(r):e+=r,e+=" "}return e};let Br=null,_v=!0;const vB=function(t,e){q(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Si.logLevel=Re.VERBOSE,Br=Si.log.bind(Si),e&&Jf.set("logging_enabled",!0)):typeof t=="function"?Br=t:(Br=null,Jf.remove("logging_enabled"))},Ot=function(...t){if(_v===!0&&(_v=!1,Br===null&&Jf.get("logging_enabled")===!0&&vB(!0)),Br){const e=mo.apply(null,t);Br(e)}},yo=function(t){return function(...e){Ot(t,...e)}},Zf=function(...t){const e="FIREBASE INTERNAL ERROR: "+mo(...t);Si.error(e)},Gr=function(...t){const e=`FIREBASE FATAL ERROR: ${mo(...t)}`;throw Si.error(e),new Error(e)},on=function(...t){const e="FIREBASE WARNING: "+mo(...t);Si.warn(e)},gT=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},_B=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},$i="[MIN_NAME]",Qr="[MAX_NAME]",zi=function(t,e){if(t===e)return 0;if(t===$i||e===Qr)return-1;if(e===$i||t===Qr)return 1;{const n=wv(t),r=wv(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},wB=function(t,e){return t===e?0:t<e?-1:1},rs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Dt(e))},jp=function(t){if(typeof t!="object"||t===null)return Dt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Dt(e[r]),n+=":",n+=jp(t[e[r]]);return n+="}",n},vT=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function un(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const _T=function(t){q(!gT(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,u;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const l=[];for(u=n;u;u-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)l.push(s%2?1:0),s=Math.floor(s/2);l.push(i?1:0),l.reverse();const h=l.join("");let c="";for(u=0;u<64;u+=8){let f=parseInt(h.substr(u,8),2).toString(16);f.length===1&&(f="0"+f),c=c+f}return c.toLowerCase()};const bB=new RegExp("^-?(0*)\\d{1,10}$"),TB=-2147483648,SB=2147483647,wv=function(t){if(bB.test(t)){const e=Number(t);if(e>=TB&&e<=SB)return e}return null},go=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw on("Exception was thrown by user callback.",n),e},Math.floor(0))}},EB=function(){return"".search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ts=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class IB{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){on(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class CB{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ot("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',on(e)}}class ed{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ed.OWNER="owner";/**
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
 */const Hp="5",wT="v",bT="s",TT="ls",ST="p",td="ac",ET="websocket",IT="long_polling";/**
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
 */class kB{constructor(e,n,r,i,s=!1,o="",a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=$r.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&$r.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function OB(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function CT(t,e,n){q(typeof e=="string","typeof type must == string"),q(typeof n=="object","typeof params must == object");let r;if(e===ET)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===IT)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);OB(t)&&(n.ns=t.namespace);const i=[];return un(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class RB{constructor(){this.counters_={}}incrementCounter(e,n=1){Xn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return yN(this.counters_)}}/**
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
 */const $c={},Lc={};function qp(t){const e=t.toString();return $c[e]||($c[e]=new RB),$c[e]}function PB(t,e){const n=t.toString();return Lc[n]||(Lc[n]=e()),Lc[n]}/**
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
 */class DB{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&go(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const bv="start",AB="close",NB="pLPCommand",xB="pRTLPCB",kT="id",OT="pw",RT="ser",MB="cb",$B="seg",LB="ts",UB="d",FB="dframe",PT=1870,DT=30,VB=PT-DT,BB=25e3,jB=3e4;class yi{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=yo(e),this.stats_=qp(n),this.urlFn=u=>(this.appCheckToken&&(u[td]=this.appCheckToken),CT(n,IT,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new DB(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(jB)),_B(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Wp((...s)=>{const[o,a,u,l,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===bv)this.id=a,this.password=u;else if(o===AB)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[bv]="t",r[RT]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[MB]=this.scriptTagHolder.uniqueCallbackIdentifier),r[wT]=Hp,this.transportSessionId&&(r[bT]=this.transportSessionId),this.lastSessionId&&(r[TT]=this.lastSessionId),this.applicationId&&(r[ST]=this.applicationId),this.appCheckToken&&(r[td]=this.appCheckToken);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){yi.forceAllow_=!0}static forceDisallow(){yi.forceDisallow_=!0}static isAvailable(){return yi.forceAllow_?!0:!yi.forceDisallow_&&!1}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Dt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Y_(n),i=vT(r,VB);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[FB]="t",r[kT]=e,r[OT]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Dt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Wp{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=gB(),window[NB+this.uniqueCallbackIdentifier]=e,window[xB+this.uniqueCallbackIdentifier]=n,this.myIFrame=Wp.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ot("frame writing exception"),a.stack&&Ot(a.stack),Ot(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ot("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[kT]=this.myID,e[OT]=this.myPW,e[RT]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+DT+r.length<=PT;){const o=this.pendingSegs.shift();r=r+"&"+$B+i+"="+o.seg+"&"+LB+i+"="+o.ts+"&"+UB+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(BB)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ot("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const HB=16384,qB=45e3;let Qu=null;typeof MozWebSocket<"u"?Qu=MozWebSocket:typeof WebSocket<"u"&&(Qu=WebSocket);class cn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=yo(this.connId),this.stats_=qp(n),this.connURL=cn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[wT]=Hp,n&&(o[bT]=n),r&&(o[TT]=r),i&&(o[td]=i),s&&(o[ST]=s),CT(e,ET,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,$r.set("previous_websocket_failure",!0);try{let r;K_(),this.mySock=new Qu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){cn.forceDisallow_=!0}static isAvailable(){return Qu!==null&&!cn.forceDisallow_}static previouslyFailed(){return $r.isInMemoryStorage||$r.get("previous_websocket_failure")===!0}markConnectionHealthy(){$r.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Cu(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(q(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Dt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=vT(n,HB);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(qB))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}cn.responsesRequiredToBeHealthy=2;cn.healthyTimeout=3e4;/**
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
 */class qs{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[yi,cn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=cn&&cn.isAvailable();let r=n&&!cn.previouslyFailed();if(e.webSocketOnly&&(n||on("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[cn];else{const i=this.transports_=[];for(const s of qs.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);qs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}qs.globalTransportInitialized_=!1;/**
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
 */const WB=6e4,YB=5e3,zB=10*1024,KB=100*1024,Uc="t",Tv="d",GB="s",Sv="r",QB="e",Ev="o",Iv="a",Cv="n",kv="p",XB="h";class JB{constructor(e,n,r,i,s,o,a,u,l,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=u,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=yo("c:"+this.id+":"),this.transportManager_=new qs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ts(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>KB?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>zB?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Uc in e){const n=e[Uc];n===Iv?this.upgradeIfSecondaryHealthy_():n===Sv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ev&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=rs("t",e),r=rs("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:kv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Iv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Cv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=rs("t",e),r=rs("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=rs(Uc,e);if(Tv in e){const r=e[Tv];if(n===XB)this.onHandshake_(r);else if(n===Cv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===GB?this.onConnectionShutdown_(r):n===Sv?this.onReset_(r):n===QB?Zf("Server Error: "+r):n===Ev?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Zf("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Hp!==r&&on("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ts(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(WB))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ts(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(YB))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:kv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&($r.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class AT{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class NT{constructor(e){this.allowedEvents_=e,this.listeners_={},q(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){q(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Xu extends NT{constructor(){super(["online"]),this.online_=!0}static getInstance(){return new Xu}getInitialEvent(e){return q(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Ov=32,Rv=768;class qe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ue(){return new qe("")}function Ce(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function pr(t){return t.pieces_.length-t.pieceNum_}function He(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new qe(t.pieces_,e)}function xT(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ZB(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function MT(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function $T(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new qe(e,0)}function mt(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof qe)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new qe(n,0)}function Se(t){return t.pieceNum_>=t.pieces_.length}function nn(t,e){const n=Ce(t),r=Ce(e);if(n===null)return e;if(n===r)return nn(He(t),He(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function LT(t,e){if(pr(t)!==pr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function hn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(pr(t)>pr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class e3{constructor(e,n){this.errorPrefix_=n,this.parts_=MT(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ul(this.parts_[r]);UT(this)}}function t3(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ul(e),UT(t)}function n3(t){const e=t.parts_.pop();t.byteLength_-=ul(e),t.parts_.length>0&&(t.byteLength_-=1)}function UT(t){if(t.byteLength_>Rv)throw new Error(t.errorPrefix_+"has a key path longer than "+Rv+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ov)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ov+") or object contains a cycle "+Or(t))}function Or(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Yp extends NT{constructor(){super(["visible"]),this.visible_=!0}static getInstance(){return new Yp}getInitialEvent(e){return q(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const is=1e3,r3=60*5*1e3,Pv=30*1e3,i3=1.3,s3=3e4,o3="server_kill",Dv=3;class qn extends AT{constructor(e,n,r,i,s,o,a,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=u,this.id=qn.nextPersistentConnectionId_++,this.log_=yo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=is,this.maxReconnectDelay_=r3,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u&&!K_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Yp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Xu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Dt(s)),q(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ad,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),q(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),q(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const u=a.d,l=a.s;qn.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(l,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Xn(e,"w")){const r=ki(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();on(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||NN(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Pv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=AN(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),q(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Dt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Zf("Unrecognized action received from server: "+Dt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){q(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=is,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=is,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>s3&&(this.reconnectDelay_=is),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*i3)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+qn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const u=function(){a?a.close():(o=!0,r())},l=function(c){q(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(c)};this.realtime_={close:u,sendRequest:l};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,f]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Ot("getToken() completed but was canceled"):(Ot("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=f&&f.token,a=new JB(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{on(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(o3)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&on(c),u())}}}interrupt(e){Ot("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ot("Resuming connection for reason: "+e),delete this.interruptReasons_[e],bf(this.interruptReasons_)&&(this.reconnectDelay_=is,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>jp(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new qe(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ot("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Dv&&(this.reconnectDelay_=Pv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ot("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Dv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+pT.replace(/\./g,"-")]=1,this.reportStats(e)}shouldReconnect_(){const e=Xu.getInstance().currentlyOnline();return bf(this.interruptReasons_)&&e}}qn.nextPersistentConnectionId_=0;qn.nextConnectionId_=0;/**
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
 */class ke{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ke(e,n)}}/**
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
 */class Bl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ke($i,e),i=new ke($i,n);return this.compare(r,i)!==0}minPost(){return ke.MIN}}/**
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
 */let Lo;class FT extends Bl{static get __EMPTY_NODE(){return Lo}static set __EMPTY_NODE(e){Lo=e}compare(e,n){return zi(e.name,n.name)}isDefinedOn(e){throw Ui("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ke.MIN}maxPost(){return new ke(Qr,Lo)}makePost(e,n){return q(typeof e=="string","KeyIndex indexValue must always be a string."),new ke(e,Lo)}toString(){return".key"}}const Ei=new FT;/**
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
 */class Uo{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class pt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:pt.RED,this.left=i!=null?i:zt.EMPTY_NODE,this.right=s!=null?s:zt.EMPTY_NODE}copy(e,n,r,i,s){return new pt(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return zt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return zt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}pt.RED=!0;pt.BLACK=!1;class a3{copy(e,n,r,i,s){return this}insert(e,n,r){return new pt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class zt{constructor(e,n=zt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new zt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,pt.BLACK,null,null))}remove(e){return new zt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,pt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Uo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Uo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Uo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Uo(this.root_,null,this.comparator_,!0,e)}}zt.EMPTY_NODE=new a3;/**
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
 */function u3(t,e){return zi(t.name,e.name)}function zp(t,e){return zi(t,e)}/**
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
 */let nd;function l3(t){nd=t}const VT=function(t){return typeof t=="number"?"number:"+_T(t):"string:"+t},BT=function(t){if(t.isLeafNode()){const e=t.val();q(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Xn(e,".sv"),"Priority must be a string or number.")}else q(t===nd||t.isEmpty(),"priority of unexpected type.");q(t===nd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Av;class ft{constructor(e,n=ft.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,q(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),BT(this.priorityNode_)}static set __childrenNodeConstructor(e){Av=e}static get __childrenNodeConstructor(){return Av}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ft(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ft.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Se(e)?this:Ce(e)===".priority"?this.priorityNode_:ft.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ft.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Ce(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(q(r!==".priority"||pr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ft.__childrenNodeConstructor.EMPTY_NODE.updateChild(He(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+VT(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=_T(this.value_):e+=this.value_,this.lazyHash_=yT(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ft.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ft.__childrenNodeConstructor?-1:(q(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ft.VALUE_TYPE_ORDER.indexOf(n),s=ft.VALUE_TYPE_ORDER.indexOf(r);return q(i>=0,"Unknown leaf type: "+n),q(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ft.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let jT,HT;function c3(t){jT=t}function h3(t){HT=t}class f3 extends Bl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?zi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ke.MIN}maxPost(){return new ke(Qr,new ft("[PRIORITY-POST]",HT))}makePost(e,n){const r=jT(e);return new ke(n,new ft("[PRIORITY-POST]",r))}toString(){return".priority"}}const Nt=new f3;/**
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
 */const d3=Math.log(2);class p3{constructor(e){const n=s=>parseInt(Math.log(s)/d3,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ju=function(t,e,n,r){t.sort(e);const i=function(u,l){const h=l-u;let c,f;if(h===0)return null;if(h===1)return c=t[u],f=n?n(c):c,new pt(f,c.node,pt.BLACK,null,null);{const p=parseInt(h/2,10)+u,m=i(u,p),T=i(p+1,l);return c=t[p],f=n?n(c):c,new pt(f,c.node,pt.BLACK,m,T)}},s=function(u){let l=null,h=null,c=t.length;const f=function(m,T){const P=c-m,D=c;c-=m;const S=i(P+1,D),H=t[P],W=n?n(H):H;p(new pt(W,H.node,T,null,S))},p=function(m){l?(l.left=m,l=m):(h=m,l=m)};for(let m=0;m<u.count;++m){const T=u.nextBitIsOne(),P=Math.pow(2,u.count-(m+1));T?f(P,pt.BLACK):(f(P,pt.BLACK),f(P,pt.RED))}return h},o=new p3(t.length),a=s(o);return new zt(r||e,a)};/**
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
 */let Fc;const fi={};class Bn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return q(fi&&Nt,"ChildrenNode.ts has not been loaded"),Fc=Fc||new Bn({".priority":fi},{".priority":Nt}),Fc}get(e){const n=ki(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof zt?n:null}hasIndex(e){return Xn(this.indexSet_,e.toString())}addIndex(e,n){q(e!==Ei,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(ke.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Ju(r,e.getCompare()):a=fi;const u=e.toString(),l=Object.assign({},this.indexSet_);l[u]=e;const h=Object.assign({},this.indexes_);return h[u]=a,new Bn(h,l)}addToIndexes(e,n){const r=ku(this.indexes_,(i,s)=>{const o=ki(this.indexSet_,s);if(q(o,"Missing index implementation for "+s),i===fi)if(o.isDefinedOn(e.node)){const a=[],u=n.getIterator(ke.Wrap);let l=u.getNext();for(;l;)l.name!==e.name&&a.push(l),l=u.getNext();return a.push(e),Ju(a,o.getCompare())}else return fi;else{const a=n.get(e.name);let u=i;return a&&(u=u.remove(new ke(e.name,a))),u.insert(e,e.node)}});return new Bn(r,this.indexSet_)}removeFromIndexes(e,n){const r=ku(this.indexes_,i=>{if(i===fi)return i;{const s=n.get(e.name);return s?i.remove(new ke(e.name,s)):i}});return new Bn(r,this.indexSet_)}}/**
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
 */let ss;class Me{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&BT(this.priorityNode_),this.children_.isEmpty()&&q(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ss||(ss=new Me(new zt(zp),null,Bn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ss}updatePriority(e){return this.children_.isEmpty()?this:new Me(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ss:n}}getChild(e){const n=Ce(e);return n===null?this:this.getImmediateChild(n).getChild(He(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(q(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ke(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ss:this.priorityNode_;return new Me(i,o,s)}}updateChild(e,n){const r=Ce(e);if(r===null)return n;{q(Ce(e)!==".priority"||pr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(He(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Nt,(o,a)=>{n[o]=a.val(e),r++,s&&Me.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+VT(this.getPriority().val())+":"),this.forEachChild(Nt,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":yT(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new ke(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ke(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ke(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ke.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ke.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===vo?-1:0}withIndex(e){if(e===Ei||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Me(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ei||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Nt),i=n.getIterator(Nt);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ei?null:this.indexMap_.get(e.toString())}}Me.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class m3 extends Me{constructor(){super(new zt(zp),Me.EMPTY_NODE,Bn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Me.EMPTY_NODE}isEmpty(){return!1}}const vo=new m3;Object.defineProperties(ke,{MIN:{value:new ke($i,Me.EMPTY_NODE)},MAX:{value:new ke(Qr,vo)}});FT.__EMPTY_NODE=Me.EMPTY_NODE;ft.__childrenNodeConstructor=Me;l3(vo);h3(vo);/**
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
 */const y3=!0;function Rt(t,e=null){if(t===null)return Me.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),q(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ft(n,Rt(e))}if(!(t instanceof Array)&&y3){const n=[];let r=!1;if(un(t,(o,a)=>{if(o.substring(0,1)!=="."){const u=Rt(a);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new ke(o,u)))}}),n.length===0)return Me.EMPTY_NODE;const s=Ju(n,u3,o=>o.name,zp);if(r){const o=Ju(n,Nt.getCompare());return new Me(s,Rt(e),new Bn({".priority":o},{".priority":Nt}))}else return new Me(s,Rt(e),Bn.Default)}else{let n=Me.EMPTY_NODE;return un(t,(r,i)=>{if(Xn(t,r)&&r.substring(0,1)!=="."){const s=Rt(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Rt(e))}}c3(Rt);/**
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
 */class g3 extends Bl{constructor(e){super(),this.indexPath_=e,q(!Se(e)&&Ce(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?zi(e.name,n.name):s}makePost(e,n){const r=Rt(e),i=Me.EMPTY_NODE.updateChild(this.indexPath_,r);return new ke(n,i)}maxPost(){const e=Me.EMPTY_NODE.updateChild(this.indexPath_,vo);return new ke(Qr,e)}toString(){return MT(this.indexPath_,0).join("/")}}/**
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
 */class v3 extends Bl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?zi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ke.MIN}maxPost(){return ke.MAX}makePost(e,n){const r=Rt(e);return new ke(n,r)}toString(){return".value"}}const _3=new v3;/**
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
 */function w3(t){return{type:"value",snapshotNode:t}}function b3(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function T3(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Nv(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function S3(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Kp{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Nt}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return q(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return q(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:$i}hasEnd(){return this.endSet_}getIndexEndValue(){return q(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return q(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Qr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return q(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Nt}copy(){const e=new Kp;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function xv(t){const e={};if(t.isDefault())return e;let n;return t.index_===Nt?n="$priority":t.index_===_3?n="$value":t.index_===Ei?n="$key":(q(t.index_ instanceof g3,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Dt(n),t.startSet_&&(e.startAt=Dt(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+Dt(t.indexStartName_))),t.endSet_&&(e.endAt=Dt(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+Dt(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Mv(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Nt&&(e.i=t.index_.toString()),e}/**
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
 */class Zu extends AT{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=yo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(q(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Zu.getListenId_(e,r),a={};this.listens_[o]=a;const u=xv(e._queryParams);this.restRequest_(s+".json",u,(l,h)=>{let c=h;if(l===404&&(c=null,l=null),l===null&&this.onDataUpdate_(s,c,!1,r),ki(this.listens_,o)===a){let f;l?l===401?f="permission_denied":f="rest_error:"+l:f="ok",i(f,null)}})}unlisten(e,n){const r=Zu.getListenId_(e,n);delete this.listens_[r]}get(e){const n=xv(e._queryParams),r=e._path.toString(),i=new Ad;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Fi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let u=null;if(a.status>=200&&a.status<300){try{u=Cu(a.responseText)}catch{on("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,u)}else a.status!==401&&a.status!==404&&on("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class E3{constructor(){this.rootNode_=Me.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function el(){return{value:null,children:new Map}}function qT(t,e,n){if(Se(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Ce(e);t.children.has(r)||t.children.set(r,el());const i=t.children.get(r);e=He(e),qT(i,e,n)}}function rd(t,e,n){t.value!==null?n(e,t.value):I3(t,(r,i)=>{const s=new qe(e.toString()+"/"+r);rd(i,s,n)})}function I3(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class C3{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&un(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const $v=10*1e3,k3=30*1e3,O3=5*60*1e3;class R3{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new C3(e);const r=$v+(k3-$v)*Math.random();Ts(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;un(e,(i,s)=>{s>0&&Xn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ts(this.reportStats_.bind(this),Math.floor(Math.random()*2*O3))}}/**
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
 */var Sn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Sn||(Sn={}));function WT(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function YT(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function zT(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class tl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Sn.ACK_USER_WRITE,this.source=WT()}operationForChild(e){if(Se(this.path)){if(this.affectedTree.value!=null)return q(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new qe(e));return new tl(Ue(),n,this.revert)}}else return q(Ce(this.path)===e,"operationForChild called for unrelated child."),new tl(He(this.path),this.affectedTree,this.revert)}}/**
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
 */class Xr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Sn.OVERWRITE}operationForChild(e){return Se(this.path)?new Xr(this.source,Ue(),this.snap.getImmediateChild(e)):new Xr(this.source,He(this.path),this.snap)}}/**
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
 */class Ws{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Sn.MERGE}operationForChild(e){if(Se(this.path)){const n=this.children.subtree(new qe(e));return n.isEmpty()?null:n.value?new Xr(this.source,Ue(),n.value):new Ws(this.source,Ue(),n)}else return q(Ce(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ws(this.source,He(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Gp{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Se(e))return this.isFullyInitialized()&&!this.filtered_;const n=Ce(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function P3(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(S3(o.childName,o.snapshotNode))}),os(t,i,"child_removed",e,r,n),os(t,i,"child_added",e,r,n),os(t,i,"child_moved",s,r,n),os(t,i,"child_changed",e,r,n),os(t,i,"value",e,r,n),i}function os(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,u)=>A3(t,a,u)),o.forEach(a=>{const u=D3(t,a,s);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(u,t.query_))})})}function D3(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function A3(t,e,n){if(e.childName==null||n.childName==null)throw Ui("Should only compare child_ events.");const r=new ke(e.childName,e.snapshotNode),i=new ke(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function KT(t,e){return{eventCache:t,serverCache:e}}function Ss(t,e,n,r){return KT(new Gp(e,n,r),t.serverCache)}function GT(t,e,n,r){return KT(t.eventCache,new Gp(e,n,r))}function id(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Jr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Vc;const N3=()=>(Vc||(Vc=new zt(wB)),Vc);class je{constructor(e,n=N3()){this.value=e,this.children=n}static fromObject(e){let n=new je(null);return un(e,(r,i)=>{n=n.set(new qe(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ue(),value:this.value};if(Se(e))return null;{const r=Ce(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(He(e),n);return s!=null?{path:mt(new qe(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Se(e))return this;{const n=Ce(e),r=this.children.get(n);return r!==null?r.subtree(He(e)):new je(null)}}set(e,n){if(Se(e))return new je(n,this.children);{const r=Ce(e),s=(this.children.get(r)||new je(null)).set(He(e),n),o=this.children.insert(r,s);return new je(this.value,o)}}remove(e){if(Se(e))return this.children.isEmpty()?new je(null):new je(null,this.children);{const n=Ce(e),r=this.children.get(n);if(r){const i=r.remove(He(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new je(null):new je(this.value,s)}else return this}}get(e){if(Se(e))return this.value;{const n=Ce(e),r=this.children.get(n);return r?r.get(He(e)):null}}setTree(e,n){if(Se(e))return n;{const r=Ce(e),s=(this.children.get(r)||new je(null)).setTree(He(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new je(this.value,o)}}fold(e){return this.fold_(Ue(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(mt(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Ue(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(Se(e))return null;{const s=Ce(e),o=this.children.get(s);return o?o.findOnPath_(He(e),mt(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ue(),n)}foreachOnPath_(e,n,r){if(Se(e))return this;{this.value&&r(n,this.value);const i=Ce(e),s=this.children.get(i);return s?s.foreachOnPath_(He(e),mt(n,i),r):new je(null)}}foreach(e){this.foreach_(Ue(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(mt(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class fn{constructor(e){this.writeTree_=e}static empty(){return new fn(new je(null))}}function Es(t,e,n){if(Se(e))return new fn(new je(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=nn(i,e);return s=s.updateChild(o,n),new fn(t.writeTree_.set(i,s))}else{const i=new je(n),s=t.writeTree_.setTree(e,i);return new fn(s)}}}function Lv(t,e,n){let r=t;return un(n,(i,s)=>{r=Es(r,mt(e,i),s)}),r}function Uv(t,e){if(Se(e))return fn.empty();{const n=t.writeTree_.setTree(e,new je(null));return new fn(n)}}function sd(t,e){return si(t,e)!=null}function si(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(nn(n.path,e)):null}function Fv(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Nt,(r,i)=>{e.push(new ke(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new ke(r,i.value))}),e}function lr(t,e){if(Se(e))return t;{const n=si(t,e);return n!=null?new fn(new je(n)):new fn(t.writeTree_.subtree(e))}}function od(t){return t.writeTree_.isEmpty()}function Li(t,e){return QT(Ue(),t.writeTree_,e)}function QT(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(q(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=QT(mt(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(mt(t,".priority"),r)),n}}/**
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
 */function XT(t,e){return nS(e,t)}function x3(t,e,n,r,i){q(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Es(t.visibleWrites,e,n)),t.lastWriteId=r}function M3(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function $3(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);q(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&L3(a,r.path)?i=!1:hn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return U3(t),!0;if(r.snap)t.visibleWrites=Uv(t.visibleWrites,r.path);else{const a=r.children;un(a,u=>{t.visibleWrites=Uv(t.visibleWrites,mt(r.path,u))})}return!0}else return!1}function L3(t,e){if(t.snap)return hn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&hn(mt(t.path,n),e))return!0;return!1}function U3(t){t.visibleWrites=JT(t.allWrites,F3,Ue()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function F3(t){return t.visible}function JT(t,e,n){let r=fn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)hn(n,o)?(a=nn(n,o),r=Es(r,a,s.snap)):hn(o,n)&&(a=nn(o,n),r=Es(r,Ue(),s.snap.getChild(a)));else if(s.children){if(hn(n,o))a=nn(n,o),r=Lv(r,a,s.children);else if(hn(o,n))if(a=nn(o,n),Se(a))r=Lv(r,Ue(),s.children);else{const u=ki(s.children,Ce(a));if(u){const l=u.getChild(He(a));r=Es(r,Ue(),l)}}}else throw Ui("WriteRecord should have .snap or .children")}}return r}function ZT(t,e,n,r,i){if(!r&&!i){const s=si(t.visibleWrites,e);if(s!=null)return s;{const o=lr(t.visibleWrites,e);if(od(o))return n;if(n==null&&!sd(o,Ue()))return null;{const a=n||Me.EMPTY_NODE;return Li(o,a)}}}else{const s=lr(t.visibleWrites,e);if(!i&&od(s))return n;if(!i&&n==null&&!sd(s,Ue()))return null;{const o=function(l){return(l.visible||i)&&(!r||!~r.indexOf(l.writeId))&&(hn(l.path,e)||hn(e,l.path))},a=JT(t.allWrites,o,e),u=n||Me.EMPTY_NODE;return Li(a,u)}}}function V3(t,e,n){let r=Me.EMPTY_NODE;const i=si(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Nt,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=lr(t.visibleWrites,e);return n.forEachChild(Nt,(o,a)=>{const u=Li(lr(s,new qe(o)),a);r=r.updateImmediateChild(o,u)}),Fv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=lr(t.visibleWrites,e);return Fv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function B3(t,e,n,r,i){q(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=mt(e,n);if(sd(t.visibleWrites,s))return null;{const o=lr(t.visibleWrites,s);return od(o)?i.getChild(n):Li(o,i.getChild(n))}}function j3(t,e,n,r){const i=mt(e,n),s=si(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=lr(t.visibleWrites,i);return Li(o,r.getNode().getImmediateChild(n))}else return null}function H3(t,e){return si(t.visibleWrites,e)}function q3(t,e,n,r,i,s,o){let a;const u=lr(t.visibleWrites,e),l=si(u,Ue());if(l!=null)a=l;else if(n!=null)a=Li(u,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],c=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let p=f.getNext();for(;p&&h.length<i;)c(p,r)!==0&&h.push(p),p=f.getNext();return h}else return[]}function W3(){return{visibleWrites:fn.empty(),allWrites:[],lastWriteId:-1}}function ad(t,e,n,r){return ZT(t.writeTree,t.treePath,e,n,r)}function eS(t,e){return V3(t.writeTree,t.treePath,e)}function Vv(t,e,n,r){return B3(t.writeTree,t.treePath,e,n,r)}function nl(t,e){return H3(t.writeTree,mt(t.treePath,e))}function Y3(t,e,n,r,i,s){return q3(t.writeTree,t.treePath,e,n,r,i,s)}function Qp(t,e,n){return j3(t.writeTree,t.treePath,e,n)}function tS(t,e){return nS(mt(t.treePath,e),t.writeTree)}function nS(t,e){return{treePath:t,writeTree:e}}/**
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
 */class z3{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;q(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),q(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Nv(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,T3(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,b3(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Nv(r,e.snapshotNode,i.oldSnap));else throw Ui("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class K3{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const rS=new K3;class Xp{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Gp(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Qp(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Jr(this.viewCache_),s=Y3(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}function G3(t,e){q(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),q(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Q3(t,e,n,r,i){const s=new z3;let o,a;if(n.type===Sn.OVERWRITE){const l=n;l.source.fromUser?o=ud(t,e,l.path,l.snap,r,i,s):(q(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!Se(l.path),o=rl(t,e,l.path,l.snap,r,i,a,s))}else if(n.type===Sn.MERGE){const l=n;l.source.fromUser?o=J3(t,e,l.path,l.children,r,i,s):(q(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=ld(t,e,l.path,l.children,r,i,a,s))}else if(n.type===Sn.ACK_USER_WRITE){const l=n;l.revert?o=tj(t,e,l.path,r,i,s):o=Z3(t,e,l.path,l.affectedTree,r,i,s)}else if(n.type===Sn.LISTEN_COMPLETE)o=ej(t,e,n.path,r,s);else throw Ui("Unknown operation type: "+n.type);const u=s.getChanges();return X3(e,o,u),{viewCache:o,changes:u}}function X3(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=id(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(w3(id(e)))}}function iS(t,e,n,r,i,s){const o=e.eventCache;if(nl(r,n)!=null)return e;{let a,u;if(Se(n))if(q(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=Jr(e),h=l instanceof Me?l:Me.EMPTY_NODE,c=eS(r,h);a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const l=ad(r,Jr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,s)}else{const l=Ce(n);if(l===".priority"){q(pr(n)===1,"Can't have a priority with additional path components");const h=o.getNode();u=e.serverCache.getNode();const c=Vv(r,n,h,u);c!=null?a=t.filter.updatePriority(h,c):a=o.getNode()}else{const h=He(n);let c;if(o.isCompleteForChild(l)){u=e.serverCache.getNode();const f=Vv(r,n,o.getNode(),u);f!=null?c=o.getNode().getImmediateChild(l).updateChild(h,f):c=o.getNode().getImmediateChild(l)}else c=Qp(r,l,e.serverCache);c!=null?a=t.filter.updateChild(o.getNode(),l,c,h,i,s):a=o.getNode()}}return Ss(e,a,o.isFullyInitialized()||Se(n),t.filter.filtersNodes())}}function rl(t,e,n,r,i,s,o,a){const u=e.serverCache;let l;const h=o?t.filter:t.filter.getIndexedFilter();if(Se(n))l=h.updateFullNode(u.getNode(),r,null);else if(h.filtersNodes()&&!u.isFiltered()){const p=u.getNode().updateChild(n,r);l=h.updateFullNode(u.getNode(),p,null)}else{const p=Ce(n);if(!u.isCompleteForPath(n)&&pr(n)>1)return e;const m=He(n),P=u.getNode().getImmediateChild(p).updateChild(m,r);p===".priority"?l=h.updatePriority(u.getNode(),P):l=h.updateChild(u.getNode(),p,P,m,rS,null)}const c=GT(e,l,u.isFullyInitialized()||Se(n),h.filtersNodes()),f=new Xp(i,c,s);return iS(t,c,n,i,f,a)}function ud(t,e,n,r,i,s,o){const a=e.eventCache;let u,l;const h=new Xp(i,e,s);if(Se(n))l=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=Ss(e,l,!0,t.filter.filtersNodes());else{const c=Ce(n);if(c===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),r),u=Ss(e,l,a.isFullyInitialized(),a.isFiltered());else{const f=He(n),p=a.getNode().getImmediateChild(c);let m;if(Se(f))m=r;else{const T=h.getCompleteChild(c);T!=null?xT(f)===".priority"&&T.getChild($T(f)).isEmpty()?m=T:m=T.updateChild(f,r):m=Me.EMPTY_NODE}if(p.equals(m))u=e;else{const T=t.filter.updateChild(a.getNode(),c,m,f,h,o);u=Ss(e,T,a.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function Bv(t,e){return t.eventCache.isCompleteForChild(e)}function J3(t,e,n,r,i,s,o){let a=e;return r.foreach((u,l)=>{const h=mt(n,u);Bv(e,Ce(h))&&(a=ud(t,a,h,l,i,s,o))}),r.foreach((u,l)=>{const h=mt(n,u);Bv(e,Ce(h))||(a=ud(t,a,h,l,i,s,o))}),a}function jv(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function ld(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,l;Se(n)?l=r:l=new je(null).setTree(n,r);const h=e.serverCache.getNode();return l.children.inorderTraversal((c,f)=>{if(h.hasChild(c)){const p=e.serverCache.getNode().getImmediateChild(c),m=jv(t,p,f);u=rl(t,u,new qe(c),m,i,s,o,a)}}),l.children.inorderTraversal((c,f)=>{const p=!e.serverCache.isCompleteForChild(c)&&f.value===null;if(!h.hasChild(c)&&!p){const m=e.serverCache.getNode().getImmediateChild(c),T=jv(t,m,f);u=rl(t,u,new qe(c),T,i,s,o,a)}}),u}function Z3(t,e,n,r,i,s,o){if(nl(i,n)!=null)return e;const a=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(Se(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return rl(t,e,n,u.getNode().getChild(n),i,s,a,o);if(Se(n)){let l=new je(null);return u.getNode().forEachChild(Ei,(h,c)=>{l=l.set(new qe(h),c)}),ld(t,e,n,l,i,s,a,o)}else return e}else{let l=new je(null);return r.foreach((h,c)=>{const f=mt(n,h);u.isCompleteForPath(f)&&(l=l.set(h,u.getNode().getChild(f)))}),ld(t,e,n,l,i,s,a,o)}}function ej(t,e,n,r,i){const s=e.serverCache,o=GT(e,s.getNode(),s.isFullyInitialized()||Se(n),s.isFiltered());return iS(t,o,n,r,rS,i)}function tj(t,e,n,r,i,s){let o;if(nl(r,n)!=null)return e;{const a=new Xp(r,e,i),u=e.eventCache.getNode();let l;if(Se(n)||Ce(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=ad(r,Jr(e));else{const c=e.serverCache.getNode();q(c instanceof Me,"serverChildren would be complete if leaf node"),h=eS(r,c)}h=h,l=t.filter.updateFullNode(u,h,s)}else{const h=Ce(n);let c=Qp(r,h,e.serverCache);c==null&&e.serverCache.isCompleteForChild(h)&&(c=u.getImmediateChild(h)),c!=null?l=t.filter.updateChild(u,h,c,He(n),a,s):e.eventCache.getNode().hasChild(h)?l=t.filter.updateChild(u,h,Me.EMPTY_NODE,He(n),a,s):l=u,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ad(r,Jr(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,s)))}return o=e.serverCache.isFullyInitialized()||nl(r,Ue())!=null,Ss(e,l,o,t.filter.filtersNodes())}}function nj(t,e){const n=Jr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Se(e)&&!n.getImmediateChild(Ce(e)).isEmpty())?n.getChild(e):null}function Hv(t,e,n,r){e.type===Sn.MERGE&&e.source.queryId!==null&&(q(Jr(t.viewCache_),"We should always have a full cache before handling merges"),q(id(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=Q3(t.processor_,i,e,n,r);return G3(t.processor_,s.viewCache),q(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,rj(t,s.changes,s.viewCache.eventCache.getNode(),null)}function rj(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return P3(t.eventGenerator_,e,n,i)}/**
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
 */let qv;function ij(t){q(!qv,"__referenceConstructor has already been defined"),qv=t}function Jp(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return q(s!=null,"SyncTree gave us an op for an invalid query."),Hv(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Hv(o,e,n,r));return s}}function Zp(t,e){let n=null;for(const r of t.views.values())n=n||nj(r,e);return n}/**
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
 */let Wv;function sj(t){q(!Wv,"__referenceConstructor has already been defined"),Wv=t}class Yv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new je(null),this.pendingWriteTree_=W3(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function oj(t,e,n,r,i){return x3(t.pendingWriteTree_,e,n,r,i),i?Hl(t,new Xr(WT(),e,n)):[]}function gi(t,e,n=!1){const r=M3(t.pendingWriteTree_,e);if($3(t.pendingWriteTree_,e)){let s=new je(null);return r.snap!=null?s=s.set(Ue(),!0):un(r.children,o=>{s=s.set(new qe(o),!0)}),Hl(t,new tl(r.path,s,n))}else return[]}function jl(t,e,n){return Hl(t,new Xr(YT(),e,n))}function aj(t,e,n){const r=je.fromObject(n);return Hl(t,new Ws(YT(),e,r))}function uj(t,e,n,r){const i=uS(t,r);if(i!=null){const s=lS(i),o=s.path,a=s.queryId,u=nn(o,e),l=new Xr(zT(a),u,n);return cS(t,o,l)}else return[]}function lj(t,e,n,r){const i=uS(t,r);if(i){const s=lS(i),o=s.path,a=s.queryId,u=nn(o,e),l=je.fromObject(n),h=new Ws(zT(a),u,l);return cS(t,o,h)}else return[]}function sS(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const u=nn(o,e),l=Zp(a,u);if(l)return l});return ZT(i,e,s,n,!0)}function Hl(t,e){return oS(e,t.syncPointTree_,null,XT(t.pendingWriteTree_,Ue()))}function oS(t,e,n,r){if(Se(t.path))return aS(t,e,n,r);{const i=e.get(Ue());n==null&&i!=null&&(n=Zp(i,Ue()));let s=[];const o=Ce(t.path),a=t.operationForChild(o),u=e.children.get(o);if(u&&a){const l=n?n.getImmediateChild(o):null,h=tS(r,o);s=s.concat(oS(a,u,l,h))}return i&&(s=s.concat(Jp(i,t,r,n))),s}}function aS(t,e,n,r){const i=e.get(Ue());n==null&&i!=null&&(n=Zp(i,Ue()));let s=[];return e.children.inorderTraversal((o,a)=>{const u=n?n.getImmediateChild(o):null,l=tS(r,o),h=t.operationForChild(o);h&&(s=s.concat(aS(h,a,u,l)))}),i&&(s=s.concat(Jp(i,t,r,n))),s}function uS(t,e){return t.tagToQueryMap.get(e)}function lS(t){const e=t.indexOf("$");return q(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new qe(t.substr(0,e))}}function cS(t,e,n){const r=t.syncPointTree_.get(e);q(r,"Missing sync point for query tag that we're tracking");const i=XT(t.pendingWriteTree_,e);return Jp(r,n,i,null)}/**
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
 */class em{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new em(n)}node(){return this.node_}}class tm{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=mt(this.path_,e);return new tm(this.syncTree_,n)}node(){return sS(this.syncTree_,this.path_)}}const cj=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},zv=function(t,e,n){if(!t||typeof t!="object")return t;if(q(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return hj(t[".sv"],e,n);if(typeof t[".sv"]=="object")return fj(t[".sv"],e);q(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},hj=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:q(!1,"Unexpected server value: "+t)}},fj=function(t,e,n){t.hasOwnProperty("increment")||q(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&q(!1,"Unexpected increment value: "+r);const i=e.node();if(q(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},dj=function(t,e,n,r){return nm(e,new tm(n,t),r)},pj=function(t,e,n){return nm(t,new em(e),n)};function nm(t,e,n){const r=t.getPriority().val(),i=zv(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=zv(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ft(a,Rt(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ft(i))),o.forEachChild(Nt,(a,u)=>{const l=nm(u,e.getImmediateChild(a),n);l!==u&&(s=s.updateImmediateChild(a,l))}),s}}/**
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
 */class rm{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function im(t,e){let n=e instanceof qe?e:new qe(e),r=t,i=Ce(n);for(;i!==null;){const s=ki(r.node.children,i)||{children:{},childCount:0};r=new rm(i,r,s),n=He(n),i=Ce(n)}return r}function Ki(t){return t.node.value}function hS(t,e){t.node.value=e,cd(t)}function fS(t){return t.node.childCount>0}function mj(t){return Ki(t)===void 0&&!fS(t)}function ql(t,e){un(t.node.children,(n,r)=>{e(new rm(n,t,r))})}function dS(t,e,n,r){n&&!r&&e(t),ql(t,i=>{dS(i,e,!0,r)}),n&&r&&e(t)}function yj(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function _o(t){return new qe(t.parent===null?t.name:_o(t.parent)+"/"+t.name)}function cd(t){t.parent!==null&&gj(t.parent,t.name,t)}function gj(t,e,n){const r=mj(n),i=Xn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,cd(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,cd(t))}/**
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
 */const vj=/[\[\].#$\/\u0000-\u001F\u007F]/,_j=/[\[\].#$\u0000-\u001F\u007F]/,Bc=10*1024*1024,pS=function(t){return typeof t=="string"&&t.length!==0&&!vj.test(t)},wj=function(t){return typeof t=="string"&&t.length!==0&&!_j.test(t)},bj=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),wj(t)},mS=function(t,e,n){const r=n instanceof qe?new e3(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Or(r));if(typeof e=="function")throw new Error(t+"contains a function "+Or(r)+" with contents = "+e.toString());if(gT(e))throw new Error(t+"contains "+e.toString()+" "+Or(r));if(typeof e=="string"&&e.length>Bc/3&&ul(e)>Bc)throw new Error(t+"contains a string greater than "+Bc+" utf8 bytes "+Or(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(un(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!pS(o)))throw new Error(t+" contains an invalid key ("+o+") "+Or(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);t3(r,o),mS(t,a,r),n3(r)}),i&&s)throw new Error(t+' contains ".value" child '+Or(r)+" in addition to actual children.")}},Tj=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!pS(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!bj(n))throw new Error(UN(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Sj{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ej(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!LT(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function oi(t,e,n){Ej(t,n),Ij(t,r=>hn(r,e)||hn(e,r))}function Ij(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(Cj(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Cj(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Br&&Ot("event: "+n.toString()),go(r)}}}/**
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
 */const kj="repo_interrupt",Oj=25;class Rj{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Sj,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=el(),this.transactionQueueTree_=new rm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Pj(t,e,n){if(t.stats_=qp(t.repoInfo_),t.forceRestClient_||EB())t.server_=new Zu(t.repoInfo_,(r,i,s,o)=>{Kv(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Gv(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Dt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new qn(t.repoInfo_,e,(r,i,s,o)=>{Kv(t,r,i,s,o)},r=>{Gv(t,r)},r=>{Aj(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=PB(t.repoInfo_,()=>new R3(t.stats_,t.server_)),t.infoData_=new E3,t.infoSyncTree_=new Yv({startListening:(r,i,s,o)=>{let a=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(a=jl(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),sm(t,"connected",!1),t.serverSyncTree_=new Yv({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,u)=>{const l=o(a,u);oi(t.eventQueue_,r._path,l)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Dj(t){const n=t.infoData_.getNode(new qe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function yS(t){return cj({timestamp:Dj(t)})}function Kv(t,e,n,r,i){t.dataUpdateCount++;const s=new qe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const u=ku(n,l=>Rt(l));o=lj(t.serverSyncTree_,s,u,i)}else{const u=Rt(n);o=uj(t.serverSyncTree_,s,u,i)}else if(r){const u=ku(n,l=>Rt(l));o=aj(t.serverSyncTree_,s,u)}else{const u=Rt(n);o=jl(t.serverSyncTree_,s,u)}let a=s;o.length>0&&(a=am(t,s)),oi(t.eventQueue_,a,o)}function Gv(t,e){sm(t,"connected",e),e===!1&&xj(t)}function Aj(t,e){un(e,(n,r)=>{sm(t,n,r)})}function sm(t,e,n){const r=new qe("/.info/"+e),i=Rt(n);t.infoData_.updateSnapshot(r,i);const s=jl(t.infoSyncTree_,r,i);oi(t.eventQueue_,r,s)}function Nj(t){return t.nextWriteId_++}function xj(t){gS(t,"onDisconnectEvents");const e=yS(t),n=el();rd(t.onDisconnect_,Ue(),(i,s)=>{const o=dj(i,s,t.serverSyncTree_,e);qT(n,i,o)});let r=[];rd(n,Ue(),(i,s)=>{r=r.concat(jl(t.serverSyncTree_,i,s));const o=Uj(t,i);am(t,o)}),t.onDisconnect_=el(),oi(t.eventQueue_,Ue(),r)}function Mj(t){t.persistentConnection_&&t.persistentConnection_.interrupt(kj)}function gS(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ot(n,...e)}function vS(t,e,n){return sS(t.serverSyncTree_,e,n)||Me.EMPTY_NODE}function om(t,e=t.transactionQueueTree_){if(e||Wl(t,e),Ki(e)){const n=wS(t,e);q(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&$j(t,_o(e),n)}else fS(e)&&ql(e,n=>{om(t,n)})}function $j(t,e,n){const r=n.map(l=>l.currentWriteId),i=vS(t,e,r);let s=i;const o=i.hash();for(let l=0;l<n.length;l++){const h=n[l];q(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const c=nn(e,h.path);s=s.updateChild(c,h.currentOutputSnapshotRaw)}const a=s.val(!0),u=e;t.server_.put(u.toString(),a,l=>{gS(t,"transaction put response",{path:u.toString(),status:l});let h=[];if(l==="ok"){const c=[];for(let f=0;f<n.length;f++)n[f].status=2,h=h.concat(gi(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&c.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Wl(t,im(t.transactionQueueTree_,e)),om(t,t.transactionQueueTree_),oi(t.eventQueue_,e,h);for(let f=0;f<c.length;f++)go(c[f])}else{if(l==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{on("transaction at "+u.toString()+" failed: "+l);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=l}am(t,e)}},o)}function am(t,e){const n=_S(t,e),r=_o(n),i=wS(t,n);return Lj(t,i,r),r}function Lj(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const u=e[a],l=nn(n,u.path);let h=!1,c;if(q(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)h=!0,c=u.abortReason,i=i.concat(gi(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=Oj)h=!0,c="maxretry",i=i.concat(gi(t.serverSyncTree_,u.currentWriteId,!0));else{const f=vS(t,u.path,o);u.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){mS("transaction failed: Data returned ",p,u.path);let m=Rt(p);typeof p=="object"&&p!=null&&Xn(p,".priority")||(m=m.updatePriority(f.getPriority()));const P=u.currentWriteId,D=yS(t),S=pj(m,f,D);u.currentOutputSnapshotRaw=m,u.currentOutputSnapshotResolved=S,u.currentWriteId=Nj(t),o.splice(o.indexOf(P),1),i=i.concat(oj(t.serverSyncTree_,u.path,S,u.currentWriteId,u.applyLocally)),i=i.concat(gi(t.serverSyncTree_,P,!0))}else h=!0,c="nodata",i=i.concat(gi(t.serverSyncTree_,u.currentWriteId,!0))}oi(t.eventQueue_,n,i),i=[],h&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(c==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(c),!1,null))))}Wl(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)go(r[a]);om(t,t.transactionQueueTree_)}function _S(t,e){let n,r=t.transactionQueueTree_;for(n=Ce(e);n!==null&&Ki(r)===void 0;)r=im(r,n),e=He(e),n=Ce(e);return r}function wS(t,e){const n=[];return bS(t,e,n),n.sort((r,i)=>r.order-i.order),n}function bS(t,e,n){const r=Ki(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);ql(e,i=>{bS(t,i,n)})}function Wl(t,e){const n=Ki(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,hS(e,n.length>0?n:void 0)}ql(e,r=>{Wl(t,r)})}function Uj(t,e){const n=_o(_S(t,e)),r=im(t.transactionQueueTree_,e);return yj(r,i=>{jc(t,i)}),jc(t,r),dS(r,i=>{jc(t,i)}),n}function jc(t,e){const n=Ki(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(q(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(q(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(gi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?hS(e,void 0):n.length=s+1,oi(t.eventQueue_,_o(e),i);for(let o=0;o<r.length;o++)go(r[o])}}/**
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
 */function Fj(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Vj(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):on(`Invalid query segment '${n}' in query '${t}'`)}return e}const Qv=function(t,e){const n=Bj(t),r=n.namespace;n.domain==="firebase.com"&&Gr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Gr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new kB(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new qe(n.pathString)}},Bj=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",u=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let h=t.indexOf("/");h===-1&&(h=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(h,c)),h<c&&(i=Fj(t.substring(h,c)));const f=Vj(t.substring(Math.min(t.length,c)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",u=parseInt(e.substring(l+1),10)):l=e.length;const p=e.slice(0,l);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const m=e.indexOf(".");r=e.substring(0,m).toLowerCase(),n=e.substring(m+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class um{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return Se(this._path)?null:xT(this._path)}get ref(){return new Gi(this._repo,this._path)}get _queryIdentifier(){const e=Mv(this._queryParams),n=jp(e);return n==="{}"?"default":n}get _queryObject(){return Mv(this._queryParams)}isEqual(e){if(e=Gt(e),!(e instanceof um))return!1;const n=this._repo===e._repo,r=LT(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+ZB(this._path)}}class Gi extends um{constructor(e,n){super(e,n,new Kp,!1)}get parent(){const e=$T(this._path);return e===null?null:new Gi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}ij(Gi);sj(Gi);/**
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
 */const jj="FIREBASE_DATABASE_EMULATOR_HOST",hd={};let Hj=!1;function qj(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Gr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ot("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Qv(s,i),a=o.repoInfo,u,l;typeof process<"u"&&process.env&&(l=process.env[jj]),l?(u=!0,s=`http://${l}?ns=${a.namespace}`,o=Qv(s,i),a=o.repoInfo):u=!o.repoInfo.secure;const h=i&&u?new ed(ed.OWNER):new CB(t.name,t.options,e);Tj("Invalid Firebase Database URL",o),Se(o.path)||Gr("Database URL must point to the root of a Firebase Database (not including a child path).");const c=Yj(a,t,h,new IB(t.name,n));return new zj(c,t)}function Wj(t,e){const n=hd[e];(!n||n[t.key]!==t)&&Gr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Mj(t),delete n[t.key]}function Yj(t,e,n,r){let i=hd[e.name];i||(i={},hd[e.name]=i);let s=i[t.toURLString()];return s&&Gr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Rj(t,Hj,n,r),i[t.toURLString()]=s,s}class zj{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Pj(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Gi(this._repo,Ue())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Wj(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Gr("Cannot call "+e+" on a deleted database.")}}/**
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
 */function Kj(t){mB(Vi),pn(new an("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return qj(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Kt(gv,vv,t),Kt(gv,vv,"esm2017")}qn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};qn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Kj();const Fo=void 0;const Vo=void 0,Xv=[{name:"404",path:"/:catchAll(.*)*",file:"C:/Users/david/Documents/Programming/tuskytimev2/pages/404.vue",children:[],meta:Eo,alias:(Eo==null?void 0:Eo.alias)||[],component:()=>Ir(()=>import("./_nuxt/404.a79eb4a8.js"),["_nuxt/404.a79eb4a8.js","_nuxt/404.4f71df2d.css","_nuxt/_plugin-vue_export-helper.a1a6add7.js"]).then(t=>t.default||t)},{name:"index",path:"/",file:"C:/Users/david/Documents/Programming/tuskytimev2/pages/index.vue",children:[],meta:ko,alias:(ko==null?void 0:ko.alias)||[],component:()=>Ir(()=>import("./_nuxt/index.6614718a.js"),["_nuxt/index.6614718a.js","_nuxt/index.62a1692d.css","_nuxt/_plugin-vue_export-helper.a1a6add7.js"]).then(t=>t.default||t)},{name:"study-about",path:"/study/about",file:"C:/Users/david/Documents/Programming/tuskytimev2/pages/study/about/index.vue",children:[],meta:Mo,alias:(Mo==null?void 0:Mo.alias)||[],component:()=>Ir(()=>import("./_nuxt/index.1ee552af.js"),["_nuxt/index.1ee552af.js","_nuxt/index.79591ac8.css","_nuxt/_plugin-vue_export-helper.a1a6add7.js"]).then(t=>t.default||t)},{name:"study-home",path:"/study/home",file:"C:/Users/david/Documents/Programming/tuskytimev2/pages/study/home/index.vue",children:[],meta:$o,alias:($o==null?void 0:$o.alias)||[],component:()=>Ir(()=>import("./_nuxt/index.5d05475a.js"),["_nuxt/index.5d05475a.js","_nuxt/index.a53f7c20.css","_nuxt/_plugin-vue_export-helper.a1a6add7.js"]).then(t=>t.default||t)},{name:"study",path:"/study",file:"C:/Users/david/Documents/Programming/tuskytimev2/pages/study/index.vue",children:[],meta:Fo,alias:(Fo==null?void 0:Fo.alias)||[],component:()=>Ir(()=>import("./_nuxt/index.7ef2f725.js"),["_nuxt/index.7ef2f725.js","_nuxt/index.64a855cf.css","_nuxt/_plugin-vue_export-helper.a1a6add7.js"]).then(t=>t.default||t)},{name:"study-join",path:"/study/join",file:"C:/Users/david/Documents/Programming/tuskytimev2/pages/study/join/index.vue",children:[],meta:Vo,alias:(Vo==null?void 0:Vo.alias)||[],component:()=>Ir(()=>import("./_nuxt/index.683ed966.js"),["_nuxt/index.683ed966.js","_nuxt/index.3265405d.css","_nuxt/_plugin-vue_export-helper.a1a6add7.js"]).then(t=>t.default||t)}],Gj={},er={...Gj},Qj=[],Hc={},Xj=Ks(async t=>{var p,m,T,P;let e,n;t.vueApp.component("NuxtPage",nc),t.vueApp.component("NuxtNestedPage",nc),t.vueApp.component("NuxtChild",nc);let r=a_().app.baseURL;er.hashMode&&!r.includes("#")&&(r+="#");const i=(m=(p=er.history)==null?void 0:p.call(er,r))!=null?m:xS(r),s=(P=(T=er.routes)==null?void 0:T.call(er,Xv))!=null?P:Xv,o=t.ssrContext.url,a=MS({...er,history:i,routes:s});t.vueApp.use(a);const u=qc(a.currentRoute.value);a.afterEach((D,S)=>{u.value=S}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>u.value});const l=qc(a.resolve(o)),h=()=>{l.value=a.currentRoute.value};t.hook("page:finish",h),a.afterEach((D,S)=>{var H,W,Q,v;((W=(H=D.matched[0])==null?void 0:H.components)==null?void 0:W.default)===((v=(Q=S.matched[0])==null?void 0:Q.components)==null?void 0:v.default)&&h()});const c={};for(const D in l.value)c[D]=K(()=>l.value[D]);t._route=cr(c),t._middleware=t._middleware||{global:[],named:{}},u_();try{[e,n]=pm(()=>a.push(o)),await e,n(),[e,n]=pm(()=>a.isReady()),await e,n()}catch(D){ui(t,So,[D])}const f=xE("_layout");return a.beforeEach(async(D,S)=>{var W,Q;D.meta=cr(D.meta),t.isHydrating&&(D.meta.layout=(W=f.value)!=null?W:D.meta.layout),t._processingMiddleware=!0;const H=new Set([...Qj,...t._middleware.global]);for(const v of D.matched){const k=v.meta.middleware;if(!!k)if(Array.isArray(k))for(const U of k)H.add(U);else H.add(k)}for(const v of H){const k=typeof v=="string"?t._middleware.named[v]||await((Q=Hc[v])==null?void 0:Q.call(Hc).then(Y=>Y.default||Y)):v;if(!k)throw new Error(`Unknown route middleware: '${v}'.`);const U=await ui(t,k,[D,S]);if(U===!1||U instanceof Error){const Y=U||Qc({statusMessage:`Route navigation aborted: ${o}`});return ui(t,So,[Y])}if(U||U===!1)return U}}),a.afterEach(async D=>{if(delete t._processingMiddleware,D.matched.length===0)ui(t,So,[Qc({statusCode:404,fatal:!1,statusMessage:`Page not found: ${D.fullPath}`})]);else if(D.matched[0].name==="404"&&t.ssrContext)t.ssrContext.event.res.statusCode=404;else{const S=D.fullPath||"/";fE(S,o)||await ui(t,c_,[S])}}),t.hooks.hookOnce("app:created",async()=>{try{await a.replace({...a.resolve(o),name:void 0,force:!0})}catch(D){ui(t,So,[D])}}),{provide:{router:a}}}),Jj=Ks(t=>{r0({apiKey:"AIzaSyA62gZmAbAqVdl7ySW9tZlKvIDUBi71ydQ",authDomain:"tuskytime.firebaseapp.com",databaseURL:"https://tuskytime-default-rtdb.firebaseio.com",projectId:"tuskytime",storageBucket:"tuskytime.appspot.com",messagingSenderId:"462748644600",appId:"1:462748644600:web:77801fadbdfac90f37f70d",measurementId:"G-RHMV5QC0XJ"}),console.log("Loaded Firebase Plugin!")}),Zj=[JE,hI,OI,Xj,Jj],Jv={default:DS(()=>Ir(()=>import("./_nuxt/default.572e7a64.js"),["_nuxt/default.572e7a64.js","_nuxt/default.e3673aa8.css","_nuxt/_plugin-vue_export-helper.a1a6add7.js"]).then(t=>t.default||t))};Ve({props:{name:{type:[String,Boolean,Object],default:null}},setup(t,e){const n=jE();return()=>{var o,a,u;const r=(a=(o=An(t.name)?t.name.value:t.name)!=null?o:n.meta.layout)!=null?a:"default",i=r&&r in Jv,s=(u=n.meta.layoutTransition)!=null?u:EI;return eh(mr,i&&s,{default:()=>eh(Jv[r],i,e.slots).default()}).default()}}});globalThis.$fetch||(globalThis.$fetch=EE.create({baseURL:IE()}));NE(Zj);export{rH as _,iH as a,yl as b,xd as g,uH as i,oH as j,sH as l,c_ as n,aH as s,xE as u,H_ as x};
//# sourceMappingURL=server.mjs.map
