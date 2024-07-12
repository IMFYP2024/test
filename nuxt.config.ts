// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   devtools: { enabled: true }
// })
// export default defineNuxtConfig({
//   modules: ["@tresjs/nuxt"],
// });
export default defineNuxtConfig({
  nitro: {
    preset: 'cloudflare' // 預設為 node-server
  },

  compatibilityDate: "2024-07-05"
})