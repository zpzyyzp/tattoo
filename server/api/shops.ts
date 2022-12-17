export default defineEventHandler(async (event) => {
  const items_: any = await import('~/assets/shops.json')
  // .defaultをつける点に注意
  const itemsTotal: any[] = items_.default
  // 以下の参考リンクを参照してください。
  /* const query = getQuery(event)
  const page: number = Number(query.page) || 1
  const size: number = Number(query.size) || 20
  const items: any[] = itemsTotal.slice((page - 1) * size, page * size)
  return {
    total: {
      value: itemsTotal.length
    },
    shops: items
  } */
  return itemsTotal
})
