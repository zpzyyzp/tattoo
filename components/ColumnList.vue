<template>
  <v-row>
    <v-col
      v-for="column in columns"
      :key="column.id"
      cols="12"
      sm="6"
      lg="4"
      xl="3"
    >
      <v-card :to="'/column/' + column.id">
        <v-img aspect-ratio="1.6" :src="column._embedded['wp:featuredmedia'][0].source_url" cover />
        <v-card-title>
          {{ column.title.rendered }}
        </v-card-title>
        <v-card-text>
          <div v-html="column.title.rendered" />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
defineProps({
  columns: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>

</style>
