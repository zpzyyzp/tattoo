<template>
  <v-container class="px-0 px-sm-4">
    <v-row>
      <v-col cols="12">
        <v-img
          height="200"
          aspect-ratio="3"
          src="./tattoo-column.jpg"
          cover
          class="d-flex justify-center align-center text-white text-center"
          gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
        >
          <h1 class="text-h2">
            タトゥースタジオを探す
          </h1>
        </v-img>
      </v-col>
      <v-col cols="12">
        <v-sheet variant="plain" color="#f7f7f7">
          <v-card-text>
            <v-row>
              <v-col v-for="(item, index) in prefecturesList" :key="item" cols="4" lg="2">
                <v-card rounded="lg" :to="'/prefecture/' + item.value">
                  <v-img aspect-ratio="1" :src="'./place-' + index + '.jpg'" class="align-center" cover>
                    <v-card-title class="text-white text-h4 text-center">
                      {{ item.title }}
                    </v-card-title>
                  </v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-text>
            <v-row justify="center">
              <v-btn
                v-for="place in prefecturesAll"
                :key="place"
                class="my-2 mx-8"
                size="large"
                color="#8554a8"
                variant="outlined"
                :to="'/prefecture/' + place"
              >
                {{ place }}
              </v-btn>
            </v-row>
          </v-card-text>
          <v-divider />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const prefecturesList = [
  { title: '東京', value: '東京都' },
  { title: '大阪', value: '大阪府' },
  { title: '神奈川', value: '神奈川県' },
  { title: '京都', value: '京都府' },
  { title: '福岡', value: '福岡県' },
  { title: '愛知', value: '愛知県' }
]
const prefecturesAll = ['北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県', '茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県', '岐阜県', '静岡県', '三重県', '滋賀県', '兵庫県', '奈良県', '和歌山県', '鳥取県', '島根県', '岡山県', '広島県', '山口県', '徳島県', '香川県', '愛媛県', '高知県', '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県', 'その他']
</script>

<style scoped>

</style>
