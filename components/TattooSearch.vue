<template>
  <v-sheet variant="plain" color="#f7f7f7">
    <v-card-title class="font-weight-bold text-center">
      タトゥースタジオを探す
    </v-card-title>
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
    <v-card-actions class="justify-end">
      <v-btn to="/prefecture">
        ＞一覧
      </v-btn>
    </v-card-actions>
    <v-divider />
  </v-sheet>
</template>

<script>
export default {
  name: 'TattooSearch',
  data () {
    return {
      prefecturesList: [
        { title: '東京', value: '東京都' },
        { title: '大阪', value: '大阪府' },
        { title: '神奈川', value: '神奈川県' },
        { title: '京都', value: '京都府' },
        { title: '福岡', value: '福岡県' },
        { title: '愛知', value: '愛知県' }
      ],
      prefecturesListAll: ['北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県', '茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県', '新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県', '岐阜県', '静岡県', '愛知県', '三重県', '滋賀県', '京都府', '大阪府', '兵庫県', '奈良県', '和歌山県', '鳥取県', '島根県', '岡山県', '広島県', '山口県', '徳島県', '香川県', '愛媛県', '高知県', '福岡県', '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県', 'その他']
    }
  }
}
</script>

<style scoped>

</style>
