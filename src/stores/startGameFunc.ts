import { defineStore } from 'pinia'
import { useNameStore } from '../stores/getRandomName'
import { usePopupToggle } from '../stores/popupToggle'
import { useLettersIdentify } from '../stores/lettersIdentify'

export const useStartGame = defineStore('startGameFunc', () => {
  const getRandomNameStore = useNameStore()
  const lettersStore = useLettersIdentify()
  const closePopupStore = usePopupToggle()

  // старт игры
  const restartGame = async () => {
    await getRandomNameStore.getRandomName()
    closePopupStore.closePopup()
    lettersStore.letters.length = 0
  }

  return {
    restartGame
  }
})
