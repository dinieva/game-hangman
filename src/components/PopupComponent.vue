<template>
  <div class="popup-container" v-if="isVisible">
    <div class="popup">
      <h2 v-if="gameStatus === 'win'">Поздравляю, вы победили! 😃</h2>
      <div v-else>
        <h2>Вы проиграли. 😕</h2>
        <h3>...имя: {{ correctName }}</h3>
      </div>
      <button @click="emit('startGame')">Сыграть еще раз</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GameStatus } from '../types/GameStatus'

interface Props {
  isVisible: boolean
  correctName: string
  gameStatus: GameStatus
}

withDefaults(defineProps<Props>(), {
  isVisible: false
})

const emit = defineEmits<{
  (e: 'startGame'): void
}>()
</script>

<style scoped>
</style>