// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
      // ...
      '@pinia/nuxt',
    ],
    css: ['~/assets/css/main.css'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    app: {
      head:{ 
        title: 'Turing Community | Portal',
        link: [
          {rel: 'icon', href: '/_nuxt/assets/images/TuringLogo.png'}
        ]
      }
    }
  })