<template>
  <div class="wrong-letters-container" v-if="wrongLetters.length">
    <div class="wrong-letters">
      <p>Ошибки</p>
      <span v-for="(letter, i) in wrongLetters" :key="letter"
        >{{ i === wrongLetters.length - 1 ? letter : `${letter}, ` }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  wrongLetters: string[]
}
defineProps<Props>()
</script>

<style scoped>
</style>