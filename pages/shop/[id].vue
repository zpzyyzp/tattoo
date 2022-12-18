<template>
  <v-container class="fill-height">
    <v-row :dense="$vuetify.display.xs">
      <v-col cols="12">
        <v-breadcrumbs :items="breadcrumbs">
          <template #divider>
            <v-icon color="secondary">
              mdi-chevron-right
            </v-icon>
          </template>
        </v-breadcrumbs>
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
        <v-img src="/no-image.jpg" />
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
                <v-icon size="x-large" color="black">
                  mdi-link-box-variant
                </v-icon>
              </template>
              <a :href="shop.url" class="text-decoration-none text-secondary" target="_blank">{{ shop.url }}</a>
            </v-list-item>
            <v-list-item v-if="shop.instagram">
              <template #prepend>
                <v-icon size="x-large" color="black">
                  mdi-instagram
                </v-icon>
              </template>
              <a :href="shop.instagram" class="text-decoration-none text-secondary" target="_blank">{{ instagramId(shop.instagram) }}</a>
            </v-list-item>
            <v-list-item v-if="shop.instagramOther">
              <template #prepend>
                <v-icon size="x-large" color="black">
                  mdi-instagram
                </v-icon>
              </template>
              <a :href="shop.instagramOther" class="text-decoration-none text-secondary" target="_blank">{{ shop.instagramOther }}</a>
            </v-list-item>
            <v-list-item v-if="shop.phone">
              <template #prepend>
                <v-icon size="x-large">
                  mdi-phone-in-talk
                </v-icon>
              </template>
              <a :href="'tel:' + shop.phone" class="text-decoration-none text-secondary">{{ shop.phone }}</a>
            </v-list-item>
          </v-list>
          <v-divider color="secondary" />
          <v-card-text class="text-body-1">
            <p>van tattoo studio では、皆様が気に入る最高のデザイン、一生を通して愛していただける作品をご提供します。</p>
            <p>カスタムオーダーでお受けしておりますので、全く同じデザインでの施術はいたしておりません。当日も状況によっては承りますので、お気兼ねなくご連絡下さい。</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" class="works">
        <h2>作品画像</h2>
      </v-col>
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
useHead({
  title: shop.value.name
})
</script>

<style lang="scss" scoped>
.v-card--variant-outlined {
  border-color: #666666;
  border-width: 2px;
  border-radius: 8px;
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
