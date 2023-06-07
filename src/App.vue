<script setup>
import { useTimerStore } from "@/stores/timer";
import { storeToRefs } from "pinia";

const store = useTimerStore();
const { startTimer, stopTimer, resetTimer } = store;
const { showButton, formattedTime } = storeToRefs(store);
</script>

<template>
  <div>
    <section class="h-40 flex justify-center items-end">
      <div class="text-3xl">Timer demo</div>
    </section>
    <section class="flex text-6xl justify-center content-center">
      <div class="mr-3 ml-3 mt-3 relative">
        {{ formattedTime.days }}
        <div class="label ml-4 text-sm absolute bottom-0">days</div>
      </div>
      <span class="leading-snug">:</span>
      <div class="mr-3 ml-3 mt-3 relative">
        {{ formattedTime.hours }}
        <div class="label ml-3 text-sm absolute bottom-0">hours</div>
      </div>
      <span class="leading-snug">:</span>
      <div class="mr-3 ml-3 mt-3 relative">
        {{ formattedTime.minutes }}
        <div class="label ml-1 text-sm absolute bottom-0">minutes</div>
      </div>
      <span class="leading-snug">:</span>
      <div class="mr-3 ml-3 mt-3 relative">
        {{ formattedTime.seconds }}
        <div class="label ml-1 text-sm absolute bottom-0">seconds</div>
      </div>
    </section>
    <section>
      <button
        class="block uppercase mx-auto w-30 h-15 shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded mt-5"
        v-if="showButton"
        @click="startTimer"
      >
        Start
      </button>
      <button
        class="block uppercase mx-auto w-30 h-15 shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded mt-5"
        v-else
        @click="stopTimer"
      >
        Stop
      </button>
      <button
        class="block uppercase mx-auto w-30 h-15 shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded mt-5"
        @click="resetTimer"
      >
        Reset
      </button>
    </section>
  </div>
</template>

<style scoped>
</style>
