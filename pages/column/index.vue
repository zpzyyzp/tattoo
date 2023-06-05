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
            Column
          </h1>
        </v-img>
      </v-col>
      <v-col cols="12">
        <column-list :columns="posts" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const { data: posts } = await useFetch('https://book-admin.flag-ts.com/wp-json/wp/v2/posts?_embed')
</script>

<style scoped>

</style>
