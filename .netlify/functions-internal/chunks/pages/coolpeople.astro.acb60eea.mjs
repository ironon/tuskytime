/* empty css                                */import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../astro.4591a0da.mjs';
import 'html-escaper';
/* empty css                                */import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';

const $$Astro = createAstro();
const $$Coolpeople = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
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

const $$file = "C:/Users/HP/Programming/tuskytime/src/pages/coolpeople.astro";
const $$url = "/coolpeople";

export { $$Coolpeople as default, $$file as file, $$url as url };
