import type { DribbbleShot } from '~/types'

export const useDribbble = () => {
  const runtimeConfig = useRuntimeConfig()
  
  const shots = ref<DribbbleShot[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  
  const fetchShots = async () => {
    try {
      isLoading.value = true
      error.value = null
      
      const token = runtimeConfig.public.dribbble_token
      
      if (!token) {
        // Mock data when no API token is provided
        shots.value = [
          {
            id: 1,
            title: 'Sample Design 1',
            html_url: 'https://dribbble.com',
            images: {
              normal: 'https://via.placeholder.com/400x300/ff6b6b/ffffff?text=Sample+Design'
            }
          },
          {
            id: 2,
            title: 'Sample Design 2', 
            html_url: 'https://dribbble.com',
            images: {
              normal: 'https://via.placeholder.com/400x300/4ecdc4/ffffff?text=Sample+Design+2'
            }
          }
        ]
        return
      }
      
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