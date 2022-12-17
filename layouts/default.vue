<template>
  <div>
    <v-app>
      <layout-header />
      <v-main>
        <slot />
      </v-main>
      <layout-footer />
    </v-app>
  </div>
</template>
<script>
import LayoutFooter from '../components/LayoutFooter'
import LayoutHeader from '../components/LayoutHeader'
export default {
  components: { LayoutHeader, LayoutFooter },
  data () {
    return {
      shop: 1
    }
  }
}
</script>
