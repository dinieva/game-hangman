import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Ref } from 'vue'

export const useNameStore = defineStore('getRandomName', () => {
  const name: Ref<string> = ref('')
  const getRandomName = async () => {
    try {
      const { data } = await axios<{ FirstName: string }>(
        'https://api.randomdatatools.ru/?count=1&unescaped=false&params=FirstName'
      )
      name.value = data.FirstName.toLowerCase()
    } catch (err) {
      console.log(err)
      name.value = ''
    }
  }
  getRandomName()
  return { name, getRandomName }
})
