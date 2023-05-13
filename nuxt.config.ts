// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    BACK4APP_ID: process.env.BACK4APP_ID,
    BACK4APP_REST_KEY: process.env.BACK4APP_REST_KEY,
  },
  components: [
    {
      path: "~/components/HomePage",
      prefix: "HomePage",
    },
    "~/components/",
  ],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
        },
      ],
    },
  },
});
