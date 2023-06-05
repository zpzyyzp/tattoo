<template>
  <v-container class="fill-height px-0 px-sm-4">
    <v-row dense>
      <v-col cols="12">
        <v-no-ssr>
          <page-breadcrumbs :breadcrumbs="breadcrumbs" />
        </v-no-ssr>
      </v-col>
      <!--      <v-col cols="12">
        <div class="title-header">
          <h1 class="font-weight-bold text-h4 text-sm-h3">
            {{ shop.name }}
          </h1>
          <h2 class="font-weight-bold text-h5 text-sm-h4">
            {{ shop.nameKana }}
          </h2>
        </div>
      </v-col>-->
      <v-col cols="12">
        <v-img v-if="shop.image" :aspect-ratio="16 / 9" :src="shop.image.sizes.large" cover>
          <v-row class="fill-height">
            <v-col v-if="shop.pt" cols="3" offset="9">
              <v-img v-if="shop.pt" width="100%" src="/badge_PT.png" />
            </v-col>
            <v-col v-if="shop.bk" cols="3" offset="9">
              <v-img v-if="shop.bk" width="100%" src="/badge_BK.png" />
            </v-col>
            <v-col cols="12" class="shadow text-white mt-auto">
              <v-card-subtitle class="font-weight-bold text-h5 text-sm-h4 text-white" style="opacity: 1">
                {{ shop.nameKana }}
              </v-card-subtitle>
              <v-card-title class="font-weight-bold text-h4 text-sm-h3 pb-0">
                {{ shop.name }}
              </v-card-title>
            </v-col>
          </v-row>
        </v-img>
        <v-img v-else :aspect-ratio="16 / 9" src="/no-image.jpg" cover />
      </v-col>
      <v-col cols="12">
        <v-card variant="flat">
          <!--          <v-card-title class="font-weight-bold text-h5 text-sm-h4">
            {{ shop.name }}
          </v-card-title>-->
          <v-card-text>
            <p class="text-body-1 mt-2 mb-4">
              <v-icon color="grey" size="large">
                mdi-map-marker
              </v-icon>{{ shop.address }}
            </p>
            <h2 class="font-weight-bold text-h6 text-sm-h5 text-grey-darken-4">
              在籍アーティスト・彫師
            </h2>
            <p class="font-weight-bold text-h6 text-sm-h5 text-grey-darken-2">
              {{ shop.artist }}
            </p>
          </v-card-text>
          <v-divider color="secondary" />
          <v-list>
            <v-list-item v-if="shop.url">
              <template #prepend>
                <v-img src="/url.png" width="32" height="32" class="mr-8" />
              </template>
              <a :href="shop.url" class="text-decoration-none text-secondary" target="_blank">{{ shop.url }}</a>
            </v-list-item>
            <v-list-item v-if="shop.instagram">
              <template #prepend>
                <v-img src="/instagram.png" width="32" height="32" class="mr-8" />
              </template>
              <a :href="shop.instagram" class="text-decoration-none text-secondary" target="_blank">{{ instagramId(shop.instagram) }}</a>
            </v-list-item>
            <v-list-item v-if="shop.instagramOther">
              <template #prepend>
                <v-img src="/instagram.png" width="32" height="32" class="mr-8" />
              </template>
              <a :href="shop.instagramOther" class="text-decoration-none text-secondary" target="_blank">{{ shop.instagramOther }}</a>
            </v-list-item>
            <v-list-item v-if="shop.twitter">
              <template #prepend>
                <v-img src="/twitter.png" width="32" height="32" class="mr-8" />
              </template>
              <a :href="shop.twitter" class="text-decoration-none text-secondary" target="_blank">{{ shop.twitter }}</a>
            </v-list-item>
            <v-list-item v-if="shop.youtube">
              <template #prepend>
                <v-img src="/youtube.png" width="32" height="32" class="mr-8" />
              </template>
              <a :href="shop.youtube" class="text-decoration-none text-secondary" target="_blank">{{ shop.youtube }}</a>
            </v-list-item>
            <v-list-item v-if="shop.phone">
              <template #prepend>
                <v-img src="/tel.png" width="32" height="32" class="mr-8" />
              </template>
              <a :href="'tel:' + shop.phone" class="text-decoration-none text-secondary">{{ shop.phone }}</a>
            </v-list-item>
          </v-list>
          <v-divider color="secondary" />
          <v-card-text v-if="shop.description" class="text-body-1 description">
            {{ shop.description }}
          </v-card-text>
          <v-card-text v-else class="text-body-1">
            ・・・
          </v-card-text>
        </v-card>
      </v-col>
      <work-list :id="shop.id" :works="shop.works" />
      <v-col cols="12" class="text-center">
        <v-btn color="#ad72ab" class="text-white" elevation="8">
          CONTACT !
          <v-dialog activator="parent" max-width="400">
            <v-card>
              <v-card-title class="text-center font-weight-bold">
                タトゥースタジオへ連絡する
              </v-card-title>
              <v-card-text>
                <v-row class="mb-4">
                  <v-col v-for="i in 4" :key="i" cols="3">
                    <v-card color="grey" rounded="lg">
                      <v-img aspect-ratio="1" />
                    </v-card>
                  </v-col>
                </v-row>
                注意書き注意書き注意書き注意書き注意書き注意書き注意書き注意書き注意書き注意書き注意書き注意書き注意書き注意書き注意書き注意書き注意書き注意書き
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-btn>
      </v-col>
      <v-col cols="12">
        <tattoo-recommend />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const route = useRoute()
const { id } = route.params
const { data: shopOrigin } = await useFetch('https://book-admin.flag-ts.com/wp-json/wp/v2/shop/' + id + '?acf_format=standard')
const shop = computed(() => {
  return {
    prefectures: '',
    uid: shopOrigin.value.acf.id,
    ...shopOrigin.value.acf,
    id: shopOrigin.value.id
  }
})
const breadcrumbs = computed(() => {
  return [
    {
      to: '/',
      text: 'TOP'
    },
    {
      to: '/prefecture/' + shop.value.prefectures,
      text: shop.value.prefectures
    },
    {
      disabled: true,
      to: '/shop/' + shop.value.id,
      text: shop.value.name
    }
  ]
})
function instagramId (url) {
  return url.replace('https://www.instagram.com/', '').replace('/', '')
}
const description = computed(() => {
  return '【TATTOO BOOK】' + shop.value.prefectures + 'の刺青・タトゥースタジオ、' + shop.value.name + '｜口コミで人気の彫師・タトゥーアーティストの情報や、おすすめのタトゥースタジオ・作品（和彫り・ブラックアンドグレイ・トライバル・アメリカントラディショナル）を検索・予約できます。'
})
useHead({
  title: shop.value.prefectures + 'の刺青・タトゥースタジオ｜' + shop.value.name,
  meta: [
    { name: 'description', content: description },
    { name: 'og:description', content: description },
    { name: 'twitter:description', content: description }
  ]
})
</script>

<style lang="scss" scoped>
.v-card--variant-outlined {
  border-color: #666666;
  border-width: 2px;
  border-radius: 8px;
  .description {
    line-height: 1.5rem;
    white-space: pre-line;
  }
}

.v-divider {
  margin-left: 32px;
  margin-right: 32px;
}

.title-header {
  border-left: 1rem solid #aa3c34;
  padding-left: 1rem;

  h1 {
    font-size: 3rem;
    line-height: 1.25;
  }
  h2 {
    font-size: 1.75rem;
    color: #666666;
  }
}

.works {
  h2 {
    border-left: 1rem solid #aa3c34;
    padding-left: 1rem;
  }
}
p {
  margin-bottom: 0.5rem;
}
.shadow {
  text-shadow: 1px 1px 1px #000, 1px 1px 2px #000, 1px 1px 3px #000;
}
</style>
