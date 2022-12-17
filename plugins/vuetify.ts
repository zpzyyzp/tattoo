import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { MAIN_THEME, mainTheme, MAIN_DARK_THEME, mainDarkTheme } from '@/helpers/themes'
import { defaults } from '~~/helpers/defaults'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    defaults,
    // add theme
    theme: {
      defaultTheme: MAIN_THEME,
      themes: {
        mainTheme,
        mainDarkTheme
      },
      // add color variations
      variations: {
        colors: ['primary', 'secondary'],
        lighten: 3,
        darken: 3
      }
    },
    // Add the custom iconset
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi
      }
    }
  })

  app.vueApp.use(vuetify)
})
