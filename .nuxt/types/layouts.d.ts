import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/home/davidam/Documents/Programming/tuskytimev2/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}