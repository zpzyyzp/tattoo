<template>
  <div>
    <v-app-bar>
      <template #prepend>
        <v-app-bar-title>
          <nuxt-link to="/">
            <v-img
              src="/logo.png"
              width="153"
              height="56"
              to="/"
              class="ma-2"
              alt="TATTOO BOOK"
              contain
            />
          </nuxt-link>
        </v-app-bar-title>
      </template>
      <template #append>
        <div v-if="$vuetify.display.mdAndUp">
          <v-btn v-for="(item, i) in navList" :key="i" :to="item.to">
            {{ item.title }}
          </v-btn>
        </div>
        <v-app-bar-nav-icon v-if="$vuetify.display.smAndDown" @click="drawer = !drawer" />
      </template>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" temporary app fixed>
      <v-list>
        <v-list-item
          v-for="(item, i) in drawerList"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <template #prepend>
            <v-icon color="secondary">
              {{ item.icon }}
            </v-icon>
          </template>
          <v-list-item-title>
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
const drawer = ref(false)
const drawerList = [
  { icon: 'mdi-home', title: 'TOP', to: '/' },
  { icon: 'mdi-account-lock', title: 'プライバシーポリシー', to: '/privacy' },
  { icon: 'mdi-file-document', title: '利用規約', to: '/terms' },
  { icon: 'mdi-email', title: 'お問い合わせ', to: '/contact' },
  { icon: 'mdi-information', title: '運営会社', to: '/about' }
]
const navList = [
  { icon: 'mdi-home', title: 'TOP', to: '/' },
  { icon: 'mdi-account-lock', title: 'プライバシーポリシー', to: '/privacy' },
  { icon: 'mdi-file-document', title: '利用規約', to: '/terms' },
  { icon: 'mdi-email', title: 'お問い合わせ', to: '/contact' },
  { icon: 'mdi-information', title: '運営会社', to: '/about' }
]
</script>

<style scoped>

</style>
