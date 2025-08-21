import type { DribbbleShot } from '~/types'

export const useDribbble = () => {
  const { $fetch } = useNuxtApp()
  const runtimeConfig = useRuntimeConfig()
  
  const shots = ref<DribbbleShot[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  
  const fetchShots = async () => {
    try {
      isLoading.value = true
      error.value = null
      
      const token = runtimeConfig.public.dribbble_token
      const url = `https://api.dribbble.com/v2/user/shots?access_token=${token}`
      
      const data = await $fetch<DribbbleShot[]>(url)
      shots.value = data || []
    } catch (err) {
      error.value = 'Failed to fetch Dribbble shots'
      console.error('Error fetching Dribbble shots:', err)
    } finally {
      isLoading.value = false
    }
  }
  
  return {
    shots: readonly(shots),
    isLoading: readonly(isLoading),
    error: readonly(error),
    fetchShots
  }
}