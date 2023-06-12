<script setup>
import { useTimerStore } from "@/stores/timer";
import { storeToRefs } from "pinia";

const store = useTimerStore();
const { startTimer, stopTimer, resetTimer } = store;
const { showButton, formattedTime } = storeToRefs(store);
</script>

<template>
  <div>
    <section class="h-10 lg:h-40 flex justify-center items-end">
      <div class="lg:text-3xl text-xl">Timer demo</div>
    </section>
    <section
      class="flex text-3xl lg:text-6xl justify-center content-center place-content-center"
    >
      <div class="mr-2 ml-2 mt-2 lg:mr-3 lg:ml-3 lg:mt-3 relative">
        {{ formattedTime.days }}
        <div class="label lg:text-sm text-xs left-2 absolute my-1">days</div>
      </div>
      <span class="leading-snug">:</span>
      <div class="mr-2 ml-2 mt-2 lg:mr-3 lg:ml-3 lg:mt-3 relative">
        {{ formattedTime.hours }}
        <div class="label lg:text-sm text-xs left-2 absolute my-1">hours</div>
      </div>
      <span class="leading-snug">:</span>
      <div class="mr-2 ml-2 mt-2 lg:mr-3 lg:ml-3 lg:mt-3 relative">
        {{ formattedTime.minutes }}
        <div class="label lg:text-sm text-xs left-2 absolute my-1">minutes</div>
      </div>
      <span class="leading-snug">:</span>
      <div class="mr-2 ml-2 mt-2 lg:mr-3 lg:ml-3 lg:mt-3 relative">
        {{ formattedTime.seconds }}
        <div class="label lg:text-sm text-xs left-2 absolute my-1">seconds</div>
      </div>
    </section>
    <section class="mt-10 w-">
      <button
        class="block uppercase mx-auto lg:w-30 lg:h-15 shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs lg:py-3 lg:px-10 py-1 px-5 rounded mt-5"
        v-if="showButton"
        @click="startTimer"
      >
        Start
      </button>
      <button
        class="block uppercase mx-auto lg:w-30 lg:h-15 shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs lg:py-3 lg:px-10 py-1 px-5 rounded mt-5"
        v-else
        @click="stopTimer"
      >
        Stop
      </button>
      <button
        class="block uppercase mx-auto lg:w-30 lg:h-15 shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs lg:py-3 lg:px-10 py-1 px-5 rounded mt-5"
        @click="resetTimer"
      >
        Reset
      </button>
    </section>
  </div>
</template>

<style scoped>
</style>
