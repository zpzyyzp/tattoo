<template>
  <v-container class="fill-height px-0 px-md-4">
    <v-row justify="center" no-gutters>
      <v-col cols="12" style="background-color: #8554a8;">
        <tattoo-book :count="filteredTotal" />
      </v-col>
      <v-col cols="12">
        <lazy-tattoo-search />
      </v-col>
      <v-col cols="12">
        <lazy-tattoo-column />
      </v-col>
      <v-col cols="12">
        <lazy-tattoo-recommend />
      </v-col>
      <v-col cols="12">
        <lazy-tattoo-instagram />
      </v-col>
      <!--      <v-col cols="12">
        <h2 class="text-center text-secondary font-weight-bold text-subtitle-1 text-sm-h6 text-md-h5">
          全国のタトゥースタジオリスト随時更新中 !!
        </h2>
      </v-col>
      <v-col cols="12">
        <v-row justify="center">
          <v-col cols="12" sm="8" md="6">
            <client-only>
              <v-select
                v-model="prefectures"
                density="comfortable"
                variant="outlined"
                label="都道府県で検索（プルダウン）"
                :items="prefecturesListCount"
                clearable
                hide-details
                @update:model-value="resetPage"
              />
            </client-only>
          </v-col>
        </v-row>
      </v-col>
      <v-col v-show="prefectures" cols="12">
        <v-row justify="center">
          <v-col cols="12" sm="8" md="6" class="text-center">
            <div class="font-weight-bold font-weight-bold text-subtitle-1 text-sm-h6 text-md-h5">
              {{ prefectures }}のタトゥースタジオの検索結果{{ filteredTotal }}件
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
      </v-col>-->
    </v-row>
  </v-container>
</template>

<script setup>
/* import { useDisplay } from 'vuetify'
import lodash from 'lodash'
const { shuffle } = lodash

const page = ref(1)
const prefectures = ref(null)

const perPage = 12
const prefecturesList = ['北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県', '茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県', '新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県', '岐阜県', '静岡県', '愛知県', '三重県', '滋賀県', '京都府', '大阪府', '兵庫県', '奈良県', '和歌山県', '鳥取県', '島根県', '岡山県', '広島県', '山口県', '徳島県', '香川県', '愛媛県', '高知県', '福岡県', '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県', 'その他'] */

const { data: shopsAll } = await useFetch('https://book-admin.flag-ts.com/wp-json/wp/v2/shop?acf_format=standard&per_page=1000')
const filteredTotal = computed(() => { return shopsAll.value.length })
// const promoteShopList = [150, 282, 286]
/* const { data: shopsAll } = await useFetch('https://book-admin.flag-ts.com/wp-json/wp/v2/shop?acf_format=standard&per_page=1000')
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
const shopShuffle = [...shopTopPt, ...shopTopBkOther, ...shopImageOther, ...shopNoImage] */
/* const shopShuffle = shuffle(shopsAll.value)
const shopShuffleSort = [...shopShuffle].sort(function (a, b) {
  return b.image - a.image
}) */

/* const shopsFiltered = computed(() => {
  if (prefectures.value) {
    return shopShuffle.filter(f => f.prefectures === prefectures.value)
  }
  return shopShuffle
})
const filteredTotal = computed(() => { return shopsFiltered.value.length })
const pages = computed(() => { return Math.ceil(filteredTotal.value / perPage) })
const resetPage = () => { page.value = 1 }
const shops = computed(() => { return shopsFiltered.value.slice(page.value * perPage - perPage, page.value * perPage) })
const list = computed(() => { return shopsAcf.map(x => x.prefectures) })
const prefecturesListCount = computed(() => {
  return prefecturesList.map((x) => {
    const count = list.value.filter(y => y === x).length
    return {
      title: x + '(' + count + ')',
      value: x,
      disabled: count === 0
    }
  })
})
const display = computed(() => {
  const { smAndDown, lgAndUp } = useDisplay()
  if (smAndDown.value) { return 'compact' }
  if (lgAndUp.value) { return 'default' }
  return 'comfortable'
}) */

const seoTitle = '全国の刺青・タトゥースタジオ・彫師を検索できるポータルサイト'
const description = '【TATTOO BOOK】全国おすすめの刺青・タトゥースタジオを検索できるポータルサイトです。口コミで人気の彫師・タトゥーアーティストの情報や、作品（和彫り・ブラックアンドグレイ・トライバル・アメリカントラディショナル）を検索・予約できます。'
useHead({
  title: seoTitle,
  meta: [
    { name: 'description', content: description },
    { name: 'og:description', content: description },
    { name: 'twitter:description', content: description }
  ]
})
</script>
