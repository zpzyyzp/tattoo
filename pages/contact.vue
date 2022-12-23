<template>
  <v-container class="fill-height">
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
            <p>各種お問い合わせに関しては、下記アドレスへお願いいたします。</p>
            <v-btn href="mailto:info@book.flag-ts.com" color="secondary" class="ml-8">
              <v-icon>mdi-email</v-icon>
              info@book.flag-ts.com
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const title = 'お問い合わせ'
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
  p {
    margin-bottom: 0.5rem;
    padding-left: 2rem;
  }
}
</style>
