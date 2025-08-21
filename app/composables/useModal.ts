export const useModal = () => {
  const isOpen = ref(false)
  const title = ref('')
  const description = ref('')
  const url = ref('')
  
  const openModal = (modalTitle: string, modalDescription?: string, modalUrl?: string) => {
    title.value = modalTitle
    description.value = modalDescription || ''
    url.value = modalUrl || ''
    isOpen.value = true
  }
  
  const closeModal = () => {
    isOpen.value = false
    title.value = ''
    description.value = ''
    url.value = ''
  }
  
  return {
    isOpen: readonly(isOpen),
    title: readonly(title),
    description: readonly(description),
    url: readonly(url),
    openModal,
    closeModal
  }
}