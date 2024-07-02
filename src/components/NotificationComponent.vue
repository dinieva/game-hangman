<template>
  <div class="notification-container show" v-if="isVisible">
    <p>Вы уже вводили этот символ</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  isVisible: boolean
}

withDefaults(defineProps<Props>(), {
  isVisible: false
})
</script>

<style scoped>
</style>