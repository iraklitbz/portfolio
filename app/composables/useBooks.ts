import type { GoogleBooksResponse, GoogleBook } from '~/types'

export const useBooks = () => {
  const { $fetch } = useNuxtApp()
  const runtimeConfig = useRuntimeConfig()
  
  const books = ref<GoogleBook[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  
  const fetchBooks = async () => {
    try {
      isLoading.value = true
      error.value = null
      
      const UID = runtimeConfig.public.google_books_id
      const url = `https://www.googleapis.com/books/v1/users/${UID}/bookshelves/4/volumes`
      
      const data = await $fetch<GoogleBooksResponse>(url)
      books.value = data.items || []
    } catch (err) {
      error.value = 'Failed to fetch books'
      console.error('Error fetching books:', err)
    } finally {
      isLoading.value = false
    }
  }
  
  const formatBookTitle = (title: string) => {
    return title
      .replace(/\([^()]*\)/g, '')
      .replace(/"/g, '')
      .replace(/[\[\(].*?[\]\)]/g, "")
      .replace(/(^|-)([^ -])/g, "$1 $2")
      .trim()
  }
  
  return {
    books: readonly(books),
    isLoading: readonly(isLoading),
    error: readonly(error),
    fetchBooks,
    formatBookTitle
  }
}