import { ref } from 'vue'

export const useGuidelineState = () => {
  const guidelineItems = ref([])

  const setGuidelineItems = (items) => {
    guidelineItems.value = items
  }

  return {
    guidelineItems,
    setGuidelineItems
  }
}
