import type { YouTubePlaylistResponse, YouTubeVideo } from '~/types'

export const useMusic = () => {
  const { $fetch } = useNuxtApp()
  const runtimeConfig = useRuntimeConfig()
  
  const music = ref<YouTubeVideo[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  
  const fetchMusic = async () => {
    try {
      isLoading.value = true
      error.value = null
      
      const apiKey = runtimeConfig.public.youtube_api_key
      const playlistId = "PLX7O3ilIJySfSt_UAwJ4JvJ9bQa90Xh4j"
      const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=100&playlistId=${playlistId}&key=${apiKey}`
      
      const data = await $fetch<YouTubePlaylistResponse>(url)
      
      // Filter out private videos
      const filteredMusic = (data.items || []).filter(
        item => item.snippet.title !== 'Private video'
      )
      
      music.value = filteredMusic
    } catch (err) {
      error.value = 'Failed to fetch music'
      console.error('Error fetching music:', err)
    } finally {
      isLoading.value = false
    }
  }
  
  const formatMusicTitle = (title: string) => {
    return title
      .replace(/\([^()]*\)/g, '')
      .replace(/"/g, '')
      .replace(/[\[\(].*?[\]\)]/g, "")
      .replace(/(^|-)([^ -])/g, "$1 $2")
      .trim()
  }
  
  const getVideoUrl = (videoId: string) => {
    return `https://www.youtube.com/watch?v=${videoId}`
  }
  
  return {
    music: readonly(music),
    isLoading: readonly(isLoading),
    error: readonly(error),
    fetchMusic,
    formatMusicTitle,
    getVideoUrl
  }
}