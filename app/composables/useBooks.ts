import type { GoogleBooksResponse, GoogleBook } from '~/types'

export const useBooks = () => {
  const runtimeConfig = useRuntimeConfig()
  
  const books = ref<GoogleBook[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  
  const fetchBooks = async () => {
    try {
      isLoading.value = true
      error.value = null
      
      const UID = runtimeConfig.public.google_books_id
      console.log('Google Books UID:', UID ? 'exists' : 'missing')
      
      if (!UID) {
        // Mock data when no API key is provided
        books.value = [
          {
            volumeInfo: {
              title: 'Sample Book 1',
              authors: ['Author Name'],
              description: 'This is a sample book description.',
              infoLink: 'https://books.google.com',
              imageLinks: {
                smallThumbnail: 'https://via.placeholder.com/128x194/ff6b6b/ffffff?text=Book+1'
              }
            }
          },
          {
            volumeInfo: {
              title: 'Sample Book 2',
              authors: ['Another Author'],
              description: 'This is another sample book description.',
              infoLink: 'https://books.google.com',
              imageLinks: {
                smallThumbnail: 'https://via.placeholder.com/128x194/4ecdc4/ffffff?text=Book+2'
              }
            }
          }
        ]
        return
      }
      
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