<script setup>
defineProps({
  shops: {
    type: Array,
    required: true
  }
})
const worksDefault = [
  '/work-landscape.jpg',
  '/work-portrait.jpg',
  '/work-square.jpg'
]
</script>

<template>
  <v-row justify="center">
    <v-col
      v-for="shop in shops"
      :key="shop.id"
      cols="12"
      sm="6"
      md="4"
      lg="3"
    >
      <v-card variant="flat" color="white" class="fill-height" :to="'/shop/' + shop.id" rounded="0">
        <v-img
          v-if="shop.image"
          :aspect-ratio="16 / 10"
          :src="shop.image.sizes.medium"
          cover
        >
          <v-row class="fill-height" no-gutters>
            <v-col :cols="(shop.pt || shop.bk)? 9 : 12" class="text-white">
              <address v-if="shop.prefectures" class="pa-1 shadow">
                <v-icon color="white">
                  mdi-map-marker
                </v-icon>
                <span>{{ shop.prefectures }}</span>
              </address>
            </v-col>
            <v-col v-if="shop.pt" cols="3">
              <v-img v-if="shop.pt" width="100%" src="/badge_PT.png" />
            </v-col>
            <v-col v-if="shop.bk" cols="3">
              <v-img v-if="shop.bk" width="100%" src="/badge_BK.png" />
            </v-col>
            <v-col cols="12" class="shadow text-white mt-auto">
              <v-card-subtitle class="text-white" style="opacity: 1">
                {{ shop.nameKana }}
              </v-card-subtitle>
              <v-card-title class="py-1">
                {{ shop.name }}
              </v-card-title>
            </v-col>
          </v-row>
        </v-img>
        <v-img v-else :aspect-ratio="16 / 10" src="/no-image.jpg" cover>
          <v-row class="fill-height" no-gutters>
            <v-col :cols="12" class="text-white">
              <address v-if="shop.address" class="pa-1 shadow">
                <v-icon color="white">
                  mdi-map-marker
                </v-icon>
                <span>{{ shop.address }}</span>
              </address>
            </v-col>
            <v-col cols="12" class="shadow text-white mt-auto">
              <v-card-subtitle class="text-white" style="opacity: 1">
                {{ shop.nameKana }}
              </v-card-subtitle>
              <v-card-title class="py-1">
                {{ shop.name }}
              </v-card-title>
            </v-col>
          </v-row>
        </v-img>
        <v-row v-if="shop.works" dense class="my-1">
          <v-col v-for="work in shop.works.slice(0, 3)" :key="work.work.id" cols="4">
            <v-card variant="flat" rounded="0">
              <v-img :aspect-ratio="1" :src="work.work.sizes.thumbnail" cover />
            </v-card>
          </v-col>
        </v-row>
        <v-row v-else dense class="my-1">
          <v-col v-for="work in worksDefault" :key="work" cols="4">
            <v-card variant="flat" rounded="0">
              <v-img :aspect-ratio="1" :src="work" cover />
            </v-card>
          </v-col>
        </v-row>
        <!--        <v-card-subtitle>{{ shop.nameKana }}</v-card-subtitle>
        <v-card-title>{{ shop.name }}</v-card-title>
        <v-card-text>
          <address>
            <v-icon color="#aa3c34" size="x-large">
              mdi-map-marker
            </v-icon>{{ shop.address }}
          </address>
        </v-card-text>-->
      </v-card>
    </v-col>
  </v-row>
</template>

<!--<script>
export default {
  name: 'ListView',
  props: {
    shops: {
      type: Array,
      required: true,
      default: []
    }
  }
}
</script>-->

<style scoped>
.v-card--variant-outlined {
  border-color: #666666;
  border-width: 2px;
  border-radius: 8px;
}

.v-card-title {
  font-weight: bold;
  font-size: 1.5rem;
}

.v-card-subtitle {
  color: #666666;
  font-weight: bold;
}

.shadow {
  text-shadow: 1px 1px 1px #000, 1px 1px 2px #000, 1px 1px 3px #000;
}
</style>
