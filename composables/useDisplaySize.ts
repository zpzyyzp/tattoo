import { useDisplay } from 'vuetify'

export const useDisplaySize = () => {
  const { smAndDown, lgAndUp } = useDisplay()
  if (smAndDown.value) { return 'compact' }
  if (lgAndUp.value) { return 'default' }
  return 'comfortable'
}
