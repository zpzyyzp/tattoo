<template>
  <v-sheet color="#8554a8" variant="plain" height="400">
    <v-row no-gutters>
      <v-col cols="auto">
        <v-img src="./phone.png" height="400" />
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
  </v-sheet>
</template>

<script>
export default {
  name: 'TattooBook',
  props: {
    count: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
.v-btn {
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: 10%;
}
</style>
