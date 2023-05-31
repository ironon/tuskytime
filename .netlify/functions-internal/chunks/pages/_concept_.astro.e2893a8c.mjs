/* empty css                                */import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent } from '../astro.4591a0da.mjs';
import 'html-escaper';
import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';

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

export { $$concept as default, $$file as file, $$url as url };
