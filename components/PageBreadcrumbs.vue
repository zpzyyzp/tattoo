<template>
  <v-breadcrumbs :items="breadcrumbs" :density="display" divider=">">
    <template #divider>
      <v-icon color="secondary">
        mdi-chevron-right
      </v-icon>
    </template>
  </v-breadcrumbs>
</template>

<script setup>
import { useDisplay } from 'vuetify'

defineProps({
  breadcrumbs: {
    type: Array,
    required: true
  }
})

const display = computed(() => {
  const { smAndDown, lgAndUp } = useDisplay()
  if (smAndDown.value) { return 'compact' }
  if (lgAndUp.value) { return 'default' }
  return 'comfortable'
})
</script>

<style scoped>

</style>
