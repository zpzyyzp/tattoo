<template>
  <v-container>
    <v-row :dense="$vuetify.display.xs">
      <v-col cols="12">
        <v-no-ssr>
          <page-breadcrumbs :breadcrumbs="breadcrumbs" />
        </v-no-ssr>
      </v-col>
      <v-col cols="12">
        <v-card variant="outlined">
          <v-card-title>
            <div class="title-header">
              <h1 class="font-weight-bold text-h5 text-sm-h4">
                {{ title }}
              </h1>
            </div>
          </v-card-title>
          <v-divider color="secondary" />
          <v-card-text>
            <p>各種お問い合わせに関しては、下記の問い合わせフォームからでお願いいたします。</p>
            <a href="https://blog.flag-ts.com/book-contact/" target="_blank" class="ml-8 text-decoration-none text-secondary">
              https://blog.flag-ts.com/book-contact/
            </a>
          </v-card-text>
          <!--          <v-card-text>
            <p>各種お問い合わせに関しては、下記のフォームへお願いいたします。</p>
            <v-form>
              <v-row>
                <v-col cols="12">
                  <v-text-field v-model="formObj.name" label="お名前" color="secondary" density="comfortable" variant="outlined" />
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="formObj.email" label="メールアドレス" color="secondary" density="comfortable" variant="outlined" />
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="formObj.subject" label="題名" color="secondary" density="comfortable" variant="outlined" />
                </v-col>
                <v-col cols="12">
                  <v-textarea v-model="formObj.message" label="メッセージ本文" color="secondary" density="comfortable" variant="outlined" />
                </v-col>
                <v-col cols="12" class="text-center">
                  <v-btn color="secondary" @click="postForm">
                    送信
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>-->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const title = 'お問い合わせ'
const breadcrumbs = computed(() => {
  return [
    {
      to: '/',
      text: 'TOP'
    },
    {
      disabled: true,
      to: '/about',
      text: title
    }
  ]
})
useHead({
  title
})
const formObj = reactive({
  name: 'zpzyyzp',
  email: 'zpzyyzp@gmail.com',
  subject: 'test',
  message: 'text'
})
async function postForm () {
  const formdata = new FormData()
  formdata.append('your-name', 'zpzyyzp')
  formdata.append('your-email', 'zpzyyzp@gmail.com')
  formdata.append('your-subject', 'お問い合わせテスト')
  formdata.append('your-message', '登録するのはどうすればいい？')
  await $fetch('https://blog.flag-ts.com/wp-json/contact-form-7/v1/contact-forms/1052/feedback/', {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    body: formdata
  })
}
</script>

<style lang="scss" scoped>
.v-card--variant-outlined {
  border-color: #666666;
  border-width: 2px;
  border-radius: 8px;

  h1 {
    border-left: 1rem solid #aa3c34;
    padding-left: 1rem;
    line-height: 1.5;
  }
  p {
    margin-bottom: 0.5rem;
    padding-left: 2rem;
  }
}
</style>
