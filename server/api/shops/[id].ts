export default defineEventHandler(async (event) => {
  const items_: any = await import('~/assets/shops.json')
  // .defaultをつける点に注意
  const itemsTotal: any[] = items_.default
  // 以下の参考リンクを参照してください。
  const id = Number(event.context.params.id)
  const shop: any = itemsTotal.find(shop => shop.id === id)
  return shop
})
