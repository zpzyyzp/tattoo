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
            <p>本サイトを運営するにあたり以下の項目を遵守する事をここに宣言します。</p>
            <h3>1. 個人情報保護</h3>
            <p>本サイトの定めるところの個人情報の定義とは、実在する一個人に含まれる住所・氏名・年齢及び肖像等の特定個人を識別可能な情報を指しています。 これらの情報を 本サイトが扱う場合、いかなる取扱いケースに於いても第三者への漏えいが無いよう、 細心の注意と最高水準のセキュリティーを以って取扱いをいたします。</p>
            <h3>2. 個人情報収集</h3>
            <p>本サイトは弊社にて商品をご購入いただいた顧客、もしくは弊社商品にお問い合わせをいただいた方に対して メールフォームなどを介して以下の個人情報の収集をする事がございます。</p>
            <p>【フリガナを含むお名前・住所・年齢・生年月日・固定電話番号・携帯電話番号・各種メールアドレス・ログインパスワード・配送先情報・購入履歴情報・これらの情報の組み合わせによって個人が識別可能な情報】</p>
            <p>これらの情報を収集する際にはその利用目的を明示し、日本国法律遵守の上で公正な取扱いを行います。</p>
            <h3>3. 個人情報利用</h3>
            <p>本サイトは取得した個人情報を以下の目的において利用いたします。</p>
            <p>【登録内容の確認と照会・メールマガジン発送時】</p>
            <h3>4. 個人情報の開示及び提供</h3>
            <p>本サイトは顧客及びお問い合わせいただいたお客様の個人情報を含む取得した各種情報を本人の承諾無くいかなる情報も開示及び提供を行うことはございません。</p>
            <p>但し、以下の場合は例外として情報の開示及び提供が行われることがございます。</p>
            <p>日本国法令に基づく正式な委託を受けた機関及び団体が日本国法令に基づいて捜査や事務処理を行う上で協力要請及び下命が成された場合。</p>
            <p>人命及び財産の保護のために当該本人の同意を得る事が不可能な場合。</p>
            <h3>5. Cookieの使用</h3>
            <p>本サイトはお客様へのサービス品質維持の目的でCookie （クッキー）システムを使用しています。</p>
            <p>Cookieとは弊社サーバーからお客様のブラウザに送信されお客様が使用しているPCのハードディスクに蓄積される情報です。</p>
            <p>これにより特定個人の情報が収集されることはございません。</p>
            <p>お客様がCookie機能の受け入れを希望されない場合はブラウザの設定で変更することが可能です。</p>
            <h3>6. SSLの使用について</h3>
            <p>お客様が個人情報を入力される際にその入力と送信を安全に行うために個人情報のフィッシングを防ぐシステム、 SSL（Secure Sockets Layer）技術が使用されています。</p>
            <p>SSLとは情報を暗号化するシステムであり、盗聴やデータの改ざんを防止し安全にデータの送受信を行う機能です。</p>
            <h3>7. プライバシーポリシーの変更</h3>
            <p>本サイトでは本プライバシーポリシーの変更が事前予告なく変更が行われる事がございます。</p>
            <p>但し、これによりお客様への個人情報保護の観念が変更される事は決してございません。</p>
            <h3>8. プライバシーポリシーの遵守宣言</h3>
            <p>本サイトは上記1〜8項のプライバシーポリシーに対し真摯に遵守し、 日本国法令のもとで適正な企業として運営されている事をここに宣言いたします。</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const title = 'プライバシーポリシー'
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
  h2 {
    background: #f6f6f6;
    border-left: 0.75rem solid #aa3c34;
    padding-left: 1.25rem;
    line-height: 1.75;
  }
  h3 {
    background: #f6f6f6;
    border-left: 0.5rem solid #aa3c34;
    padding-left: 1.5rem;
    line-height: 1.75;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  a, p {
    margin-bottom: 0.5rem;
    padding-left: 2rem;
  }
  ul, ol {
    margin-bottom: 0.5rem;
    padding-left: 4rem;
  }
}
</style>
