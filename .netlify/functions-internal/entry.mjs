import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import 'mime';
import 'cookie';
import 'html-escaper';
import { d as deserializeManifest } from './chunks/astro.4591a0da.mjs';
import 'kleur/colors';
import 'slash';
import 'vue';
import 'vue/server-renderer';
import 'react';
import 'react-dom/server';
import 'path-to-regexp';
import 'string-width';

const _page0  = () => import('./chunks/index@_@astro.701355b7.mjs');
const _page1  = () => import('./chunks/coolpeople@_@astro.8a57c8bf.mjs');
const _page2  = () => import('./chunks/index@_@astro.63ba09d7.mjs');
const _page3  = () => import('./chunks/_concept_@_@astro.0ebea7fb.mjs');const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/coolpeople.astro", _page1],["src/pages/study/index.astro", _page2],["src/pages/study/concepts/[concept].astro", _page3]]);const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/coolpeople.f2d69b4f.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/coolpeople.f2d69b4f.css"},{"type":"external","src":"/_astro/coolpeople.b36d4ab2.css"}],"routeData":{"route":"/coolpeople","type":"page","pattern":"^\\/coolpeople\\/?$","segments":[[{"content":"coolpeople","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/coolpeople.astro","pathname":"/coolpeople","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/coolpeople.f2d69b4f.css"},{"type":"external","src":"/_astro/ConceptsView.96409e83.css"}],"routeData":{"route":"/study","type":"page","pattern":"^\\/study\\/?$","segments":[[{"content":"study","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/study/index.astro","pathname":"/study","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/coolpeople.f2d69b4f.css"}],"routeData":{"route":"/study/concepts/[concept]","type":"page","pattern":"^\\/study\\/concepts\\/([^/]+?)\\/?$","segments":[[{"content":"study","dynamic":false,"spread":false}],[{"content":"concepts","dynamic":false,"spread":false}],[{"content":"concept","dynamic":true,"spread":false}]],"params":["concept"],"component":"src/pages/study/concepts/[concept].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"pageMap":null,"componentMetadata":[],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(s,c,i)=>{let o=async()=>{await(await s())()},n=new IntersectionObserver(e=>{for(let t of e)if(t.isIntersecting){n.disconnect(),o();break}});for(let e=0;e<i.children.length;e++){let t=i.children[e];n.observe(t)}};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","\u0000@astro-renderers":"renderers.mjs","/src/pages/study/concepts/[concept].astro":"chunks/pages/_concept_.astro.e2893a8c.mjs","/src/pages/coolpeople.astro":"chunks/pages/coolpeople.astro.acb60eea.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index@_@astro.701355b7.mjs","\u0000@astro-page:src/pages/coolpeople@_@astro":"chunks/coolpeople@_@astro.8a57c8bf.mjs","\u0000@astro-page:src/pages/study/index@_@astro":"chunks/index@_@astro.63ba09d7.mjs","\u0000@astro-page:src/pages/study/concepts/[concept]@_@astro":"chunks/_concept_@_@astro.0ebea7fb.mjs","C:/Users/HP/Programming/tuskytime/src/layouts/layout.vue":"_astro/layout.276f973f.js","@astrojs/react/client.js":"_astro/client.d2495f1a.js","C:/Users/HP/Programming/tuskytime/src/components/ConceptsView.vue":"_astro/ConceptsView.1459611b.js","@astrojs/vue/client.js":"_astro/client.e784dedb.js","C:/Users/HP/Programming/tuskytime/src/components/MainPage.vue":"_astro/MainPage.91dea293.js","C:/Users/HP/Programming/tuskytime/src/components/ConceptEdit":"_astro/ConceptEdit.e7f26dd5.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/coolpeople.f2d69b4f.css","/_astro/coolpeople.b36d4ab2.css","/favicon.svg","/assets/baboon.jpg","/assets/courses.json","/assets/favicon.ico","/assets/googlelogo.png","/assets/loadingSpinner.webp","/assets/login.png","/assets/main.css","/assets/main.css.map","/assets/school.png","/assets/signup.png","/assets/style.css","/assets/trashbin.png","/assets/tuskylogo.png","/_astro/client.d2495f1a.js","/_astro/client.e784dedb.js","/_astro/ConceptEdit.e7f26dd5.js","/_astro/Concepts.354b1767.js","/_astro/ConceptsView.1459611b.js","/_astro/ConceptsView.96409e83.css","/_astro/index.0d5c5f21.js","/_astro/layout.276f973f.js","/_astro/MainPage.91dea293.js","/_astro/runtime-core.esm-bundler.8611b282.js","/_astro/runtime-dom.esm-bundler.9f02d379.js","/_astro/_plugin-vue_export-helper.c27b6911.js"]}), {
	pageMap,
	renderers,
	undefined
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
