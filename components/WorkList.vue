<script lang="ts" setup>
const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  works: {
    type: Array,
    required: true
  }
})
const worksDefault = [
  '/work-landscape.jpg',
  '/work-portrait.jpg',
  '/work-square.jpg'
]
const worksList = computed(() => {
  if (props.works) {
    return props.works.map(x => x.work.sizes.large)
  }
  return worksDefault
})
const visibleRef = ref(false)
const indexRef = ref(0)
const onShow = (index: number) => {
  indexRef.value = index
  visibleRef.value = true
}
const onHide = () => (visibleRef.value = false)
</script>

<template>
  <v-col cols="12" class="works text-center" style="background-color: #f7f7f7">
    <h2>作品紹介</h2>
    <h3 class="text-narrow">
      TATTOO WORKS
    </h3>
    <v-row class="my-4" justify="center" dense>
      <v-col
        v-for="(img, idx) in worksList"
        :key="idx"
        class="d-flex child-flex"
        cols="6"
        sm="4"
        md="3"
      >
        <v-img :src="img" aspect-ratio="1" cover @click="() => onShow(idx)">
          <template #placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="secondary"
              />
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
    <client-only>
      <vue-easy-lightbox
        :visible="visibleRef"
        :index="indexRef"
        :imgs="worksList"
        @hide="onHide"
      />
    </client-only>
  </v-col>
</template>

<script lang="ts">
export default {
  name: 'WorkList'
}
</script>

<style scoped>
.text-narrow {
  font-weight: 700;
  letter-spacing: 0.2em;
  transform: scale(1, 1.75)
}
</style>
