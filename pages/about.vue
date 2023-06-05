<template>
  <v-container>
    <v-row :dense="$vuetify.display.xs">
      <v-col cols="12">
        <v-no-ssr>
          <page-breadcrumbs :breadcrumbs="breadcrumbs" />
        </v-no-ssr>
      </v-col>
      <v-col cols="12">
        <v-card variant="outlined">
          <v-card-title>
            <div class="title-header">
              <h1 class="font-weight-bold text-h5 text-sm-h4">
                {{ title }}
              </h1>
            </div>
          </v-card-title>
          <v-divider color="secondary" />
          <v-card-text>
            <h2>運営業者</h2>
            <p>Flag TATTOO SUPPLY</p>
            <h2>代表責任者</h2>
            <p>二宮大輝</p>
            <h2>所在地</h2>
            <address>
              <p>〒175-0093</p>
              <p>東京都板橋区赤塚新町2-7-17 ライオンズ2F</p>
            </address>
            <h2>問い合わせ</h2>
            <a href="https://blog.flag-ts.com/book-contact/" class="text-decoration-none text-secondary">https://blog.flag-ts.com/book-contact/</a>
            <h2>URL</h2>
            <a href="https://flag-ts.com/" target="_blank" class="text-decoration-none text-secondary">https://flag-ts.com/</a>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const title = '運営会社'
const breadcrumbs = computed(() => {
  return [
    {
      to: '/',
      text: 'TOP'
    },
    {
      disabled: true,
      to: '/about',
      text: title
    }
  ]
})
useHead({
  title
})
</script>

<style lang="scss" scoped>
.v-card--variant-outlined {
  border-color: #666666;
  border-width: 2px;
  border-radius: 8px;

  h1 {
    border-left: 1rem solid #aa3c34;
    padding-left: 1rem;
    line-height: 1.5;
  }
  h2 {
    background: #f6f6f6;
    border-left: 0.5rem solid #aa3c34;
    padding-left: 1.5rem;
    line-height: 1.5;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  a,p {
    margin-bottom: 0.5rem;
    padding-left: 2rem;
  }
}
</style>
