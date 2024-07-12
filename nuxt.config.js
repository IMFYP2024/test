export default {
  
  publicRuntimeConfig: {
    cloudflare: {
      apiKey: process.env.CLOUDFLARE_API_KEY,
      accountId: process.env.CLOUDFLARE_ACCOUNT_ID,
    },
  },

  compatibilityDate: "2024-07-09"
};