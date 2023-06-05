<template>
  <v-card variant="flat" class="text-center">
    <h2>Instagram</h2>
    <v-divider class="mx-12 my-4" />
    <v-card-text>
      <v-row>
        <v-col v-for="i in 9" :key="i">
          <v-img>aaa</v-img>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'TattooInstagram'
}
</script>

<style scoped>
.text-narrow {
  font-weight: 700;
  letter-spacing: 0.2em;
  transform: scale(1, 1.75)
}
</style>
