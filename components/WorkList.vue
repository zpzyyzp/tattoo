<script lang="ts" setup>
const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  works: {
    type: Number,
    required: true,
    default: null
  }
})
const worksDefault = [
  '/work-landscape.jpg',
  '/work-portrait.jpg',
  '/work-square.jpg'
]
const imgUrl = (id: number, num: number) => {
  return '/img/' + ('000' + id).slice(-3) + '/work_' + ('000' + num).slice(-3) + '.jpg' + '?20230220'
}
const worksList = computed(() => {
  if (props.works) {
    return [...Array(props.works)].map((_, i) => imgUrl(props.id, i + 1))
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
  <v-col cols="12" class="works">
    <h2>作品画像</h2>
    <v-row class="my-4">
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

</style>
