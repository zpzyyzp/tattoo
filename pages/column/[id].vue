<template>
  <v-container class="px-0 px-sm-4">
    <v-row>
      <v-col cols="12">
        <v-img height="300" :src="post._embedded['wp:featuredmedia'][0].source_url" cover class="text-white justify-center align-center text-center">
          <v-card-title class="text-h4">
            {{ post.title.rendered }}
          </v-card-title>
          <v-card-subtitle style="opacity: 1">
            {{ date }}
          </v-card-subtitle>
        </v-img>
      </v-col>
      <v-col cols="12">
        <v-no-ssr>
          <page-breadcrumbs :breadcrumbs="breadcrumbs" />
        </v-no-ssr>
        <v-divider />
      </v-col>
      <v-col cols="12">
        <v-card flat>
          <v-card-title class="text-center text-h5">
            {{ post.title.rendered }}
          </v-card-title>
          <v-card-text>
            <div v-html="post.content.rendered" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const route = useRoute()
const { id } = route.params
const { data: post } = await useFetch('https://book-admin.flag-ts.com/wp-json/wp/v2/posts/' + id + '?_embed')
const date = computed(() => {
  return post.value.date.slice(0, 10)
})
const breadcrumbs = computed(() => {
  return [
    {
      to: '/',
      text: 'TOP'
    },
    {
      to: '/column',
      text: 'コラム一覧'
    },
    {
      disabled: true,
      to: '/column/' + id,
      text: post.value.title.rendered
    }
  ]
})
</script>

<style scoped>

</style>
