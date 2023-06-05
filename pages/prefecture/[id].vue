<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-row justify="center">
          <v-col cols="12" sm="8" md="6" class="text-center">
            <div class="font-weight-bold font-weight-bold text-subtitle-1 text-sm-h6 text-md-h5">
              {{ id }}のタトゥースタジオの検索結果{{ total }}件
            </div>
            <v-divider color="secondary" class="my-4" />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <list-view v-if="shops" :shops="shops" />
      </v-col>
      <v-col col="12">
        <v-row justify="center">
          <v-col cols="12" sm="10" md="8">
            <v-pagination v-if="pages > 1" v-model="page" :length="pages" :density="display" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useDisplay } from 'vuetify'
import lodash from 'lodash'
const { shuffle } = lodash

const route = useRoute()
const { id } = route.params
const { data: shopsAll } = await useFetch('https://book-admin.flag-ts.com/wp-json/wp/v2/shop?acf_format=standard&per_page=1000&' + 'prefectures=' + id)
const shopsAcf = shopsAll
  ? shopsAll.value.map(({ id, acf }) => {
    return {
      uid: acf.id,
      ...acf,
      id
    }
  })
  : []
const shopPt = shopsAcf.filter(shop => shop.pt === true)
const shopBk = shopsAcf.filter(shop => shop.bk === true && shop.pt !== true)
const shopImage = shuffle(shopsAcf.filter(shop => shop.image !== false && shop.pt !== true && shop.bk !== true))
const shopTopBK = shuffle([...shopBk, ...shopImage.slice(0, 25 - shopBk.length - shopPt.length)])
const shopTopPt = shuffle([...shopPt, ...shopTopBK.slice(0, 10 - shopPt.length)])
const shopTopBkOther = shopTopBK.slice(10 - shopPt.length)
const shopImageOther = shopImage.slice(25 - shopBk.length - shopPt.length)
const shopNoImage = shuffle(shopsAcf.filter(shop => shop.image === false))
const shopShuffle = [...shopTopPt, ...shopTopBkOther, ...shopImageOther, ...shopNoImage]

const total = computed(() => { return shopsAcf.length })
const perPage = 12
const page = ref(1)
const pages = computed(() => { return Math.ceil(total.value / perPage) })
const resetPage = () => { page.value = 1 }
const shops = computed(() => { return shopShuffle.slice(page.value * perPage - perPage, page.value * perPage) })
const display = computed(() => {
  const { smAndDown, lgAndUp } = useDisplay()
  if (smAndDown.value) { return 'compact' }
  if (lgAndUp.value) { return 'default' }
  return 'comfortable'
})
</script>

<style scoped>

</style>
