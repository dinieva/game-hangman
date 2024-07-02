import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import { useNameStore } from '../stores/getRandomName'
import { usePopupToggle } from '../stores/popupToggle'

export const useLettersIdentify = defineStore('lettersIdentify', () => {
  const nameStore = useNameStore()
  const popupToggleStore = usePopupToggle()
  const letters = ref<string[]>([]) // все введенные символы

  //добавляем буквы в список введенных символов
  const addLetter = (key: string) => {
    //фильтрация на кириллицу
    if (/[а-яА-ЯёЁ]/.test(key)) {
      popupToggleStore.toogleNotification(key)
      letters.value.push(key.toLowerCase())
    }
  }
  //буквы, которые есть в слове
  const correctLetters = computed<string[]>(() => {
    const arr = letters.value.filter((x) => nameStore.name.includes(x))
    return [...new Set(arr)]
  })

  //буквы, которых нет в слове
  const errorLetters = computed<string[]>(() => {
    return [...new Set(letters.value.filter((x) => !nameStore.name.includes(x)))]
  })
  // наблюдатель за ошибочными буквами
  watch(errorLetters, () => {
    if (errorLetters.value.length === 6) {
      popupToggleStore.openPopup('lose')
    }
  })
  // наблюдатель за правильными буквами
  watch(correctLetters, () => {
    if ([...nameStore.name].every((i) => correctLetters.value.includes(i))) {
      popupToggleStore.openPopup('win')
    }
  })

  return {
    letters,
    correctLetters,
    errorLetters,
    addLetter
  }
})
