<template>
  <v-app-bar>
    <v-app-bar-title>
      <v-img src="/logo.png" height="56" to="/" class="ma-2" />
    </v-app-bar-title>
    <template #append>
      <v-app-bar-nav-icon />
    </template>
  </v-app-bar>
</template>

<script>
export default {
  name: 'LayoutHeader'
}
</script>

<style scoped>

</style>
