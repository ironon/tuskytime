import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/david/Documents/Programming/tuskytimev2/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}