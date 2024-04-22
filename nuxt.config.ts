// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   devtools: { enabled: true }
// })
// export default defineNuxtConfig({
//   modules: ["@tresjs/nuxt"],
// });
export default defineNuxtConfig({
    app: {
      baseURL: process.env.NODE_ENV === 'production' ? '/nuxt3-generate/' : '/',
      buildAssetsDir: '/static/'
    }
})