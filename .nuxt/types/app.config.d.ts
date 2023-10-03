
import type { CustomAppConfig } from 'nuxt/schema'
import type { Defu } from 'defu'


declare const inlineConfig = {}
type ResolvedAppConfig = Defu<typeof inlineConfig, []>

type MergedAppConfig<Resolved extends Record<string, any>, Custom extends Record<string, any>> = {
  [K in keyof Resolved]: K extends keyof Custom
    ? Custom[K] extends Record<string, any>
      ? Resolved[K] extends Record<string, any>
        ? MergedAppConfig<Resolved[K], Custom[K]>
        : Exclude<Custom[K], undefined>
      : Exclude<Custom[K], undefined>
    : Resolved[K]
}

declare module 'nuxt/schema' {
  interface AppConfig extends MergedAppConfig<ResolvedAppConfig, CustomAppConfig> { }
}
declare module '@nuxt/schema' {
  interface AppConfig extends MergedAppConfig<ResolvedAppConfig, CustomAppConfig> { }
}