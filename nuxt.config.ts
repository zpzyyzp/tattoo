import vuetify from 'vite-plugin-vuetify'

// PWA Config
const title = '【TATTOO BOOK】'
const shortTitle = '【TATTOO BOOK】'
const description = '【TATTOO BOOK】全国おすすめの刺青・タトゥースタジオを検索できるポータルサイトです。口コミで人気の彫師・タトゥーアーティストの情報や、作品（和彫り・ブラックアンドグレイ・トライバル・アメリカントラディショナル）を検索・予約できます。'
const image = 'https://book.flag-ts.com/logo.png'
const url = 'https://book.flag-ts.com/'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  _majorVersion: 0,
  css: ['@/assets/main.scss'],
  build: {
    transpile: ['vuetify']
  },
  vite: {
    ssr: {
      noExternal: ['vuetify']
    },
    define: {
      'process.env.DEBUG': false
    }
  },
  modules: [
    'nuxt-icon',
    '@kevinmarrec/nuxt-pwa',
    // this adds the vuetify vite plugin
    // also produces type errors in the current beta release
    async (options, nuxt) => {
      // @ts-ignore
      nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(vuetify()))
    }
  ],

  app: {
    head: {
      title: '【TATTOO BOOK】',
      titleTemplate: '【TATTOO BOOK】%s',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'canonical',
          href: url
        }
      ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description
        },
        { property: 'og:site_name', content: title },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'og:url',
          property: 'og:url',
          content: url
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: image
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: image
        },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: url
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: image
        }
      ],
      script: [
        { src: 'https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver,ResizeObserver,WebAnimations,Object.fromEntries,Array.prototype.at' }
      ]
    }
  },

  pwa: {
    meta: {
      name: shortTitle,
      author: 'zpzyyzp',
      theme_color: '#fff',
      description
    },
    manifest: {
      name: shortTitle,
      short_name: shortTitle,
      theme_color: '#fff',
      description
    }
  },
  generate: {
    routes: [
      '/shop/2',
      '/shop/3',
      '/shop/4',
      '/shop/5',
      '/shop/6',
      '/shop/7',
      '/shop/8',
      '/shop/9',
      '/shop/10',
      '/shop/11',
      '/shop/12',
      '/shop/13',
      '/shop/14',
      '/shop/15',
      '/shop/16',
      '/shop/17',
      '/shop/18',
      '/shop/19',
      '/shop/20',
      '/shop/21',
      '/shop/22',
      '/shop/23',
      '/shop/24',
      '/shop/25',
      '/shop/26',
      '/shop/27',
      '/shop/28',
      '/shop/29',
      '/shop/30',
      '/shop/31',
      '/shop/32',
      '/shop/33',
      '/shop/34',
      '/shop/35',
      '/shop/36',
      '/shop/38',
      '/shop/39',
      '/shop/40',
      '/shop/41',
      '/shop/42',
      '/shop/43',
      '/shop/44',
      '/shop/45',
      '/shop/46',
      '/shop/47',
      '/shop/48',
      '/shop/49',
      '/shop/50',
      '/shop/51',
      '/shop/52',
      '/shop/53',
      '/shop/54',
      '/shop/55',
      '/shop/56',
      '/shop/57',
      '/shop/59',
      '/shop/60',
      '/shop/61',
      '/shop/62',
      '/shop/63',
      '/shop/64',
      '/shop/65',
      '/shop/66',
      '/shop/67',
      '/shop/68',
      '/shop/69',
      '/shop/70',
      '/shop/71',
      '/shop/72',
      '/shop/73',
      '/shop/74',
      '/shop/75',
      '/shop/76',
      '/shop/77',
      '/shop/78',
      '/shop/79',
      '/shop/80',
      '/shop/81',
      '/shop/82',
      '/shop/83',
      '/shop/84',
      '/shop/85',
      '/shop/86',
      '/shop/87',
      '/shop/88',
      '/shop/89',
      '/shop/90',
      '/shop/91',
      '/shop/92',
      '/shop/93',
      '/shop/94',
      '/shop/95',
      '/shop/96',
      '/shop/97',
      '/shop/98',
      '/shop/99',
      '/shop/100',
      '/shop/101',
      '/shop/102',
      '/shop/103',
      '/shop/104',
      '/shop/105',
      '/shop/106',
      '/shop/107',
      '/shop/108',
      '/shop/109',
      '/shop/110',
      '/shop/111',
      '/shop/112',
      '/shop/113',
      '/shop/114',
      '/shop/115',
      '/shop/116',
      '/shop/117',
      '/shop/118',
      '/shop/119',
      '/shop/120',
      '/shop/121',
      '/shop/122',
      '/shop/123',
      '/shop/124',
      '/shop/125',
      '/shop/126',
      '/shop/128',
      '/shop/129',
      '/shop/130',
      '/shop/131',
      '/shop/132',
      '/shop/133',
      '/shop/134',
      '/shop/135',
      '/shop/136',
      '/shop/137',
      '/shop/138',
      '/shop/139',
      '/shop/140',
      '/shop/141',
      '/shop/142',
      '/shop/143',
      '/shop/144',
      '/shop/145',
      '/shop/146',
      '/shop/147',
      '/shop/148',
      '/shop/149',
      '/shop/150',
      '/shop/151',
      '/shop/152',
      '/shop/153',
      '/shop/154',
      '/shop/155',
      '/shop/156',
      '/shop/157',
      '/shop/158',
      '/shop/159',
      '/shop/160',
      '/shop/161',
      '/shop/162',
      '/shop/163',
      '/shop/164',
      '/shop/165',
      '/shop/166',
      '/shop/167',
      '/shop/168',
      '/shop/169',
      '/shop/170',
      '/shop/171',
      '/shop/172',
      '/shop/173',
      '/shop/174',
      '/shop/175',
      '/shop/176',
      '/shop/177',
      '/shop/178',
      '/shop/179',
      '/shop/180',
      '/shop/181',
      '/shop/182',
      '/shop/183',
      '/shop/184',
      '/shop/185',
      '/shop/186',
      '/shop/187',
      '/shop/188',
      '/shop/189',
      '/shop/190',
      '/shop/191',
      '/shop/192',
      '/shop/193',
      '/shop/194',
      '/shop/195',
      '/shop/196',
      '/shop/197',
      '/shop/198',
      '/shop/199',
      '/shop/200',
      '/shop/201',
      '/shop/202',
      '/shop/203',
      '/shop/204',
      '/shop/205',
      '/shop/206',
      '/shop/207',
      '/shop/208',
      '/shop/209',
      '/shop/210',
      '/shop/211',
      '/shop/212',
      '/shop/213',
      '/shop/214',
      '/shop/215',
      '/shop/216',
      '/shop/217',
      '/shop/218',
      '/shop/219',
      '/shop/220',
      '/shop/221',
      '/shop/222',
      '/shop/223',
      '/shop/224',
      '/shop/225',
      '/shop/226',
      '/shop/227',
      '/shop/228',
      '/shop/229',
      '/shop/230',
      '/shop/231',
      '/shop/232',
      '/shop/233',
      '/shop/234',
      '/shop/235',
      '/shop/236',
      '/shop/237',
      '/shop/238',
      '/shop/239',
      '/shop/240',
      '/shop/241',
      '/shop/242',
      '/shop/243',
      '/shop/244',
      '/shop/245',
      '/shop/246',
      '/shop/247',
      '/shop/248',
      '/shop/249',
      '/shop/250',
      '/shop/251',
      '/shop/252',
      '/shop/253',
      '/shop/254',
      '/shop/255',
      '/shop/256',
      '/shop/257',
      '/shop/258',
      '/shop/259',
      '/shop/260',
      '/shop/261',
      '/shop/262',
      '/shop/263',
      '/shop/264',
      '/shop/265',
      '/shop/266',
      '/shop/267',
      '/shop/268',
      '/shop/269',
      '/shop/270',
      '/shop/271',
      '/shop/272',
      '/shop/273',
      '/shop/274',
      '/shop/275',
      '/shop/276',
      '/shop/277',
      '/shop/278',
      '/shop/279',
      '/shop/280',
      '/shop/281'
    ]
  }
})
