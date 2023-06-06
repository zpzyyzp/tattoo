<template>
  <v-card variant="flat" style="position:relative">
    <v-card-title class="text-center font-weight-bold">
      タトゥーコラム
    </v-card-title>
    <v-divider class="mx-12 my-4" />
    <v-carousel
      cycle
      continuous
      hide-delimiter-background
      height="324"
      hide-delimiters
      :show-arrows="false"
    >
      <v-carousel-item v-for="column in columns" :key="column.id" rounded="0">
        <v-card
          variant="flat"
          :to="'/column/' + column.id"
          rounded="0"
          height="324"
          class="mb-8"
          style="position:relative"
        >
          <v-img :src="column._embedded['wp:featuredmedia'][0].source_url" cover height="300" />
          <v-btn
            size="large"
            color="#8554a8"
            class="text-white"
            rounded="0"
            position="absolute"
            style="bottom: 0"
            :to="'/column/' + column.id"
          >
            <v-icon class="mr-4">
              mdi-book-open-page-variant-outline
            </v-icon>
            {{ column.title.rendered }}
          </v-btn>
        </v-card>
        <!--        <v-btn
          size="large"
          color="#8554a8"
          class="text-white"
          rounded="0"
          position="absolute"
          style="bottom: -10px; z-index: 10000"
          :to="'/column/' + column.id"
        >
          <v-icon class="mr-4">
            mdi-book-open-page-variant-outline
          </v-icon>
          {{ column.title.rendered }}
        </v-btn>-->
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script setup>
const { data: columns } = await useFetch('https://book-admin.flag-ts.com/wp-json/wp/v2/posts?_embed&per_page=3')
</script>

<style scoped>

</style>
