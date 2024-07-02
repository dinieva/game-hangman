<template>
  <div class="word">
    <span class="letter" v-for="(letter, i) in word" :key="i">
      {{ correctLetters.includes(letter) ? letter : ' ' }}
    </span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  word: string
  correctLetters: string[]
}
defineProps<Props>()
</script>

<style scoped>
.hidden {
  display: none;
}
</style>