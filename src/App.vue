<script setup lang="ts">
//component
import HeaderComponent from './components/HeaderComponent.vue'
import FigureComponent from './components/FigureComponent.vue'
import WrongLettersComponent from './components/WrongLettersComponent.vue'
import WordComponent from './components/WordComponent.vue'
import PopupComponent from './components/PopupComponent.vue'
import NotificationComponent from './components/NotificationComponent.vue'
//stores
import { useNameStore } from './stores/getRandomName'
import { useLettersIdentify } from './stores/lettersIdentify'
import { useStartGame } from './stores/startGameFunc'
import { usePopupToggle } from './stores/popupToggle'

const nameStore = useNameStore()
const lettersIdentifyStore = useLettersIdentify()
const startGameStore = useStartGame()
const popupToggleStore = usePopupToggle()

window.addEventListener('keydown', ({ key }) => {
  // если открыт попап, то запрет на ввод букв
  if (popupToggleStore.popup === true) {
    return
  }
  lettersIdentifyStore.addLetter(key)
})
</script>

<template>
  <HeaderComponent />
  <div class="game-container">
    <FigureComponent :wrongLettersCount="lettersIdentifyStore.errorLetters.length" />

    <WrongLettersComponent :wrongLetters="lettersIdentifyStore.errorLetters" />

    <WordComponent :word="nameStore.name" :correctLetters="lettersIdentifyStore.correctLetters" />
  </div>

  <!-- Container for final message -->
  <PopupComponent
    :isVisible="popupToggleStore.popup"
    :gameStatus="popupToggleStore.gameStatus"
    :correctName="nameStore.name"
    @startGame="startGameStore.restartGame"
  />

  <!-- Notification -->
  <NotificationComponent :isVisible="popupToggleStore.notification" />
</template>

<style scoped>
</style>
