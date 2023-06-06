<template>
  <v-card color="#8554a8" variant="flat" height="400" :hover="false">
    <v-row no-gutters>
      <v-col cols="6" lg="3" class="text-left d-flex justify-start">
        <img src="/phone.png" height="400">
      </v-col>
      <v-col class="d-flex justify-center align-center">
        <div class="text-white text-center">
          <div class="text-h5">
            全国{{ count }}件掲載
          </div>
          <div class="text-h6">
            TATTOO BOOK！
          </div>
          <div>スマホでタトゥーを予約！</div>
        </div>
      </v-col>
    </v-row>
    <v-btn size="x-large" variant="outlined" color="white" href="https://blog.flag-ts.com/book-contact/" target="_blank">
      タトゥースタジオの掲載へ
    </v-btn>
  </v-card>
</template>

<script setup>
const count = ref(0)
const { data } = await useFetch('https://book-admin.flag-ts.com/wp-json/wp/v2/shop?per_page=1', {
  onResponse ({ response }) {
    count.value = response.headers.get('x-wp-total')
  }
})
</script>

<style scoped>
.v-btn {
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: 10%;
}
</style>
