/* empty css                                */import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../astro.02a966e2.mjs';
import 'html-escaper';
/* empty css                                */import { useSSRContext, defineComponent, ref } from 'vue';
import { ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';

const $$Astro$3 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "NormalLayout", null, { "client:only": "vue", "client:component-hydration": "only", "client:component-path": "C:/Users/HP/Programming/tuskytime/src/layouts/layout.vue", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`  
    ${renderComponent($$result2, "MainPage", null, { "client:only": "vue", "client:component-hydration": "only", "client:component-path": "C:/Users/HP/Programming/tuskytime/src/components/MainPage.vue", "client:component-export": "default" })}
` })}`;
}, "C:/Users/HP/Programming/tuskytime/src/pages/index.astro");

const $$file$3 = "C:/Users/HP/Programming/tuskytime/src/pages/index.astro";
const $$url$3 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$1,
    file: $$file$3,
    url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$Coolpeople = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Coolpeople;
  return renderTemplate`${renderComponent($$result, "DefaultLayout", null, { "client:only": "vue", "client:component-hydration": "only", "class": "astro-DKUQK47Z", "client:component-path": "C:/Users/HP/Programming/tuskytime/src/layouts/layout.vue", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead($$result2)}<div id="coolpeoplecontainer" class="astro-DKUQK47Z">
            <div id="coolpeople" class="astro-DKUQK47Z">
                <h1 id="coolkidstitle" class="astro-DKUQK47Z">COOL KIDS LIST</h1>
                <p class="opacity-70 astro-DKUQK47Z" id="coolpeopledesc">a list of people that have helped in the making of this website (or they're just that cool)</p>
                <ul class="astro-DKUQK47Z">
                    <li class="coolpersonlist astro-DKUQK47Z" id="0">Ethan Edwards - came up with the idea for this website</li>
                    <li class="coolpersonlist astro-DKUQK47Z" id="1">Jacob Jackson - Various QOL ideas</li>
                    <li class="coolpersonlist astro-DKUQK47Z" id="2">Easton Snow - identified mobile bug for this very page</li>
                    <li class="coolpersonlist astro-DKUQK47Z" id="3">Isaiah Williams - idea of calendar widget</li>
                </ul>
            </div>
        <p id="joketext" class="opacity-25 astro-DKUQK47Z">this list is all inclusive. if ur not on it, im sorry for your loss.</p>
    </div>
` })}`;
}, "C:/Users/HP/Programming/tuskytime/src/pages/coolpeople.astro");

const $$file$2 = "C:/Users/HP/Programming/tuskytime/src/pages/coolpeople.astro";
const $$url$2 = "/coolpeople";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Coolpeople,
    file: $$file$2,
    url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "layout",
  props: ["minimizable"],
  setup(__props, { expose: __expose }) {
    __expose();
    const dproperties = __props;
    let minimized_style = "display: none";
    let maximized_style = "";
    let minimized = ref(maximized_style);
    function minimize() {
      console.log("minimized");
      if (minimized.value == minimized_style) {
        minimized.value = maximized_style;
      } else {
        minimized.value = minimized_style;
      }
    }
    const __returned__ = { get dproperties() {
      return dproperties;
    }, set dproperties(v) {
      dproperties = v;
    }, get minimized_style() {
      return minimized_style;
    }, set minimized_style(v) {
      minimized_style = v;
    }, get maximized_style() {
      return maximized_style;
    }, set maximized_style(v) {
      maximized_style = v;
    }, get minimized() {
      return minimized;
    }, set minimized(v) {
      minimized = v;
    }, minimize };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><head><link rel="stylesheet" href="/assets/main.css"><link rel="stylesheet" href="/assets/style.css"></head><div id="default-layout">`);
  if ($props.minimizable) {
    _push(`<button id="minimizebutton">v</button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div id="navbox" style="${ssrRenderStyle($setup.minimized)}"><a class="nav-link" href="/study">Study</a><img src="/assets/tuskylogo.png"><h1 id="nav-title">TUSKY TIME</h1><a class="nav-link" href="/">Home</a></div><div id="app">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div><div id="footer"><p>not affiliated with LCPS or Tuscarora but that&#39;d be pretty cool if I was </p><p>Made by David Macpherson, 875497@lcps.org</p><a href="/coolpeople">cool people list</a></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MinimizeableLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate(_a || (_a = __template(["", '\n\n<script>\n        function waitForElm(selector) {\n            return new Promise(resolve => {\n                if (document.querySelector(selector)) {\n                    return resolve(document.querySelector(selector));\n                }\n\n                const observer = new MutationObserver(mutations => {\n                    if (document.querySelector(selector)) {\n                        resolve(document.querySelector(selector));\n                        observer.disconnect();\n                    }\n                });\n\n                observer.observe(document.body, {\n                    childList: true,\n                    subtree: true\n                    });\n                });\n            }\n        \n    waitForElm(".addconcept").then((elm) => {\n        elm.addEventListener("click", () => {\n            //@ts-ignore\n            window.location = "/study/concepts/"+window.gotoCanvasId\n        })\n    })\n    \n<\/script>'])), renderComponent($$result, "MinimizeableLayout", MinimizeableLayout, {}, { "default": ($$result2) => renderTemplate`
    ${renderComponent($$result2, "ConceptsView", null, { "client:only": "vue", "client:component-hydration": "only", "client:component-path": "C:/Users/HP/Programming/tuskytime/src/components/ConceptsView.vue", "client:component-export": "default" })}
   
` }));
}, "C:/Users/HP/Programming/tuskytime/src/pages/study/index.astro");

const $$file$1 = "C:/Users/HP/Programming/tuskytime/src/pages/study/index.astro";
const $$url$1 = "/study";

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$concept = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$concept;
  let conceptName = Astro2.params.concept;
  return renderTemplate`${renderComponent($$result, "Layout", null, { "client:only": "vue", "minimizable": true, "client:component-hydration": "only", "client:component-path": "C:/Users/HP/Programming/tuskytime/src/layouts/layout.vue", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "ConceptEdit", null, { "client:only": "react", "conceptName": conceptName, "client:component-hydration": "only", "client:component-path": "C:/Users/HP/Programming/tuskytime/src/components/ConceptEdit", "client:component-export": "ConceptEdit" })}
` })}`;
}, "C:/Users/HP/Programming/tuskytime/src/pages/study/concepts/[concept].astro");

const $$file = "C:/Users/HP/Programming/tuskytime/src/pages/study/concepts/[concept].astro";
const $$url = "/study/concepts/[concept]";

const _page3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$concept,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a, _page2 as b, _page3 as c };
