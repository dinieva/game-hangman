import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import type { GameStatus } from '../types/GameStatus'
import { useLettersIdentify } from '../stores/lettersIdentify'

export const usePopupToggle = defineStore('popupToggle', () => {
  const lettersIdentifyStore = useLettersIdentify()
  const popup = ref<boolean>(false) //уведомление об окончании игры
  const notification = ref<boolean>(false) //уведомление о повторном вводе буквы
  const gameStatus: Ref<GameStatus> = ref(null)

  const openPopup = (status: GameStatus) => {
    gameStatus.value = status
    popup.value = true
  }
  const closePopup = () => {
    popup.value = false
  }
  // закрыть уведомление о повторном вводе буквы
  const closeNotification = () => {
    notification.value = false
  }

  // закрыть попап уведомлений
  const toogleNotification = (letter: string) => {
    if (lettersIdentifyStore.letters.includes(letter)) {
      notification.value = true
      setTimeout(closeNotification, 2000)
    } else {
      return
    }
  }

  return {
    popup,
    gameStatus,
    notification,
    openPopup,
    closePopup,
    closeNotification,
    toogleNotification
  }
})
