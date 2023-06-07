import { defineStore } from 'pinia'
import {computed, ref} from 'vue'

export const useTimerStore = defineStore('timer', () => {
    const time = ref(0)
    const isRunning = ref(false)
    const intervalId = ref(null)
    const showButton = ref(true)

    const formattedTime = computed(()=>{
        const days = String(Math.floor(time.value / 60 / 60 / 24)).padStart(2, '0');
        const hours = String(Math.floor(time.value / 60 / 60) % 24).padStart(2, '0');
        const minutes = String(Math.floor(time.value / 60) % 60).padStart(2, '0');
        const seconds = String(time.value % 60).padStart(2, '0');
        return {days,hours,minutes,seconds}
    })

    const startTimer = () => {
        showButton.value = false
        isRunning.value = true
        intervalId.value = setInterval(() => {
        time.value++
        }, 1000)
    }

    const stopTimer = () => {
        showButton.value = true
        isRunning.value = false
        clearInterval(intervalId.value);
    }
    const resetTimer = () => {
        showButton.value = true
        isRunning.value = false
        time.value = 0;
        clearInterval(intervalId.value);
    }

    return {showButton, formattedTime, startTimer, stopTimer, resetTimer}
})