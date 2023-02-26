<script setup>
defineProps({
  shops: {
    type: Array,
    required: true
  }
})
const imgUrl = (id) => {
  return '/img/' + ('000' + id).slice(-3) + '/top-thumb.jpg?20230226'
}
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
      <v-card variant="outlined" class="fill-height" :to="'/shop/' + shop.id">
        <v-img v-if="shop.image" :aspect-ratio="16 / 9" :src="imgUrl(shop.id)" cover>
          <v-row class="fill-height">
            <v-col v-if="shop.pt" cols="3" offset="9">
              <v-img v-if="shop.pt" width="100%" src="/badge_PT.png" />
            </v-col>
            <v-col v-if="shop.bk" cols="3" offset="9">
              <v-img v-if="shop.bk" width="100%" src="/badge_BK.png" />
            </v-col>
          </v-row>
        </v-img>
        <v-img v-else :aspect-ratio="16 / 9" src="/no-image.jpg" cover />
        <v-card-title>{{ shop.name }}</v-card-title>
        <v-card-subtitle>{{ shop.nameKana }}</v-card-subtitle>
        <v-card-text>
          <address>
            <v-icon color="#aa3c34" size="x-large">
              mdi-map-marker
            </v-icon>{{ shop.address }}
          </address>
        </v-card-text>
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
</style>
