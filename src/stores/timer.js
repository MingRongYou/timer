import { defineStore } from 'pinia'

export const useTimerStore = defineStore('timer', {
  state: () => ({
    time: 0,
    isRunning: false,
    intervalId :null,
    showButton : true
  }),

  getters: {
    formattedTime() {
      const days = String(Math.floor(this.time / 60 / 60 / 24)).padStart(2, '0');
      const hours = String(Math.floor(this.time / 60 / 60) % 24).padStart(2, '0');
      const minutes = String(Math.floor(this.time / 60) % 60).padStart(2, '0');
      const seconds = String(this.time % 60).padStart(2, '0');
      return {days,hours,minutes,seconds}
    },
    getShowButton() {
        return this.showButton;
      }
  },

  actions: {
    startTimer() {
      this.showButton = false
      this.isRunning = true
      this.intervalId = setInterval(() => {
        this.time++
      }, 1000)
    },
    stopTimer() {
        this.showButton = true
        this.isRunning = false
        clearInterval(this.intervalId);
      },
    resetTimer(){
        this.showButton = true
        this.isRunning = false
        this.time = 0;
        clearInterval(this.intervalId);
    }
  },
})