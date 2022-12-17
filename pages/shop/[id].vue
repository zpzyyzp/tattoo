<template>
  <v-container class="fill-height">
    <v-row>
      <v-col cols="12">
        <v-breadcrumbs :items="breadcrumbs">
          <template #divider>
            <v-icon color="secondary">mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
      </v-col>
      <v-col cols="12">
        <div class="title-header">
          <h1>{{ shop.name }}</h1>
          <h2>{{ shop.nameKana }}</h2>
        </div>
      </v-col>
      <v-col cols="12">
        <v-img src="/no-image.jpg" />
      </v-col>
      <v-col cols="12">
        <v-card variant="outlined">
          <v-card-title>{{ shop.name }}</v-card-title>
          <v-card-subtitle>{{ shop.address }}</v-card-subtitle>
          <v-card-text>
            <h2>在籍アーティスト・彫師</h2>
            <p>{{ shop.artist }}</p>
          </v-card-text>
          <v-divider color="secondary" />
          <v-list>
            <v-list-item v-if="shop.url">
              <template #prepend>
                <v-icon size="x-large">mdi-link-box-variant</v-icon>
              </template>
              <a :href="shop.url" target="_blank">{{ shop.url }}</a>
            </v-list-item>
            <v-list-item v-if="shop.instagram">
              <template #prepend>
                <v-icon size="x-large">mdi-instagram</v-icon>
              </template>
              <a :href="shop.instagram" target="_blank">{{ shop.instagram }}</a>
            </v-list-item>
            <v-list-item v-if="shop.instagramOther">
              <template #prepend>
                <v-icon size="x-large">mdi-instagram</v-icon>
              </template>
              <a :href="shop.instagramOther" target="_blank">{{ shop.instagramOther }}</a>
            </v-list-item>
            <v-list-item v-if="shop.phone">
              <template #prepend>
                <v-icon size="x-large">mdi-phone-in-talk</v-icon>
              </template>
              <a :href="'tel:' + shop.phone">{{ shop.phone }}</a>
            </v-list-item>
          </v-list>
          <v-divider color="secondary" />
          <v-card-text>
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
import { computed } from 'vue'

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

  h1, h2 {
    margin-left: 1rem;
  }
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
</style>
