<template>
  <v-card variant="flat" class="text-center my-4">
    <h2>Instagram</h2>
    <v-divider class="mx-12 my-4" />
    <v-card-text>
      <v-row justify="center" dense>
        <v-col v-for="i in 9" :key="i" cols="4" md="3" lg="2">
          <v-img aspect-ratio="1" src="/place-1.jpg" cover />
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
