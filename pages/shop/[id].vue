<template>
  <v-container class="fill-height">
    <v-row :dense="$vuetify.display.xs">
      <v-col cols="12">
        <v-no-ssr>
          <page-breadcrumbs :breadcrumbs="breadcrumbs" />
        </v-no-ssr>
      </v-col>
      <v-col cols="12">
        <div class="title-header">
          <h1 class="font-weight-bold text-h4 text-sm-h3">
            {{ shop.name }}
          </h1>
          <h2 class="font-weight-bold text-h5 text-sm-h4">
            {{ shop.nameKana }}
          </h2>
        </div>
      </v-col>
      <v-col cols="12">
        <v-img v-if="shop.image" :aspect-ratio="16 / 9" :src="imgUrl(shop.id)" cover />
        <v-img v-else :aspect-ratio="16 / 9" src="/no-image.jpg" cover />
      </v-col>
      <v-col cols="12">
        <v-card variant="outlined">
          <v-card-title class="font-weight-bold text-h5 text-sm-h4">
            {{ shop.name }}
          </v-card-title>
          <v-card-text>
            <p class="text-body-1 mt-2 mb-4">
              {{ shop.address }}
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
    </v-row>
  </v-container>
</template>

<script setup>
const route = useRoute()
const { id } = route.params
const { data: shop } = await useFetch('/api/shops/' + id)
const breadcrumbs = computed(() => {
  return [
    {
      to: '/',
      text: 'TOP'
    },
    {
      disabled: true,
      to: '/',
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
const imgUrl = (id) => {
  return '/img/' + ('000' + id).slice(-3) + '/top.jpg'
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
</style>
