<template>
  <v-footer>
    <v-row>
      <v-col cols="12">
        <v-divider color="secondary" />
      </v-col>
      <v-col cols="12" sm="6" class="d-flex justify-sm-end justify-center">
        <v-img src="/logo.png" max-width="300" height="60" />
      </v-col>
      <v-col cols="12" sm="6" class="d-flex justify-sm-start justify-center">
        <v-btn size="x-large" to="/">
          タトゥースタジオを掲載する
          <v-icon size="x-large" class="ml-4">
            mdi-chevron-right
          </v-icon>
        </v-btn>
      </v-col>
      <v-col cols="12" class="d-flex justify-center flex-wrap">
        <v-btn flat>
          プライバシーポリシー
        </v-btn>
        <v-btn flat>
          利用規約
        </v-btn>
        <v-btn flat>
          お問い合わせ
        </v-btn>
        <v-btn flat to="/about">
          運営会社
        </v-btn>
      </v-col>
      <v-col class="text-center" cols="12">
        <div id="copyright" class="text-body-2 text-sm-body-1">
          ©TATTOO STUDIO LIST Powered by <a href="https://flag-ts.com/" target="_blank" class="text-decoration-none text-secondary">FLAG T.S.</a>
        </div>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'LayoutFooter'
}
</script>

<style scoped>
.v-divider {
  margin: 0 10%;
}
</style>
