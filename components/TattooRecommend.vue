<template>
  <v-card variant="flat" class="text-center">
    <h3 class="mt-8">あなたにおすすめ</h3>
    <h3 class="text-narrow mb-8">
      RECOMMEND TO YOU!
    </h3>
    <Carousel :items-to-show="itemsToShow" :autoplay="2000" :wrap-around="true" :transition="500">
      <Slide v-for="shop in shopsWithImage" :key="shop.id">
        <div class="carousel__item my-4">
          <v-card :to="'/shop/' + shop.id" elevation="4" rounded="lg" height="150" width="150">
            <v-img aspect-ratio="1" height="150" width="150" :src="shop.image.sizes.thumbnail" alt="shop.name" />
          </v-card>
        </div>
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </v-card>
</template>

<script setup>
import { useDisplay } from 'vuetify'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
const { data: shopsAll } = await useFetch('https://book-admin.flag-ts.com/wp-json/wp/v2/shop?acf_format=standard&per_page=50&orderby=rand')
const shopsAcf = shopsAll
  ? shopsAll.value.map(({ id, acf }) => {
    return {
      uid: acf.id,
      ...acf,
      id
    }
  })
  : []
const shopsWithImage = shopsAcf.filter(shop => shop.image).slice(0, 6)
const itemsToShow = computed(() => {
  const { xs, sm, md, lgAndUp } = useDisplay()
  if (xs.value) { return 2 }
  if (sm.value) { return 2.2 }
  if (md.value) { return 3 }
  if (lgAndUp.value) { return 3.95 }
  return 4.95
})
</script>

<style scoped>
.text-narrow {
  font-weight: 700;
  letter-spacing: 0.2em;
  transform: scale(1, 1.75)
}
.carousel >>> .carousel__slide {
  padding: 5px;
}

.carousel >>> .carousel__viewport {
  perspective: 2000px;
}

.carousel >>> .carousel__track {
  transform-style: preserve-3d;
}

.carousel >>> .carousel__slide--sliding {
  transition: 0.5s;
}

.carousel >>> .carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel >>> .carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel >>> .carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel >>> .carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel >>> .carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>
