<template>
  <div class="flex bg-yellow-500 w-screen top-0 absolute">
    <div class="flex flex-col flex-wrap w-full py-1 px-2 justify-center sm:flex-row sm:py-2">
      <div
        class="font-medium text-center text-black text-[0.75rem] leading-[1.2rem]"
      >
        We have moved to a new domain (<a class="font-semibold text-dark-900" href="https://profileviewer.vercel.app">profileviewer.vercel.app</a>). 
        I am not going to renew the domain <span class="font-semibold text-dark-900">profileviewer.site</span> and it will be out of service in {{ diff }} days.
        For more info, please visit <a class="font-semibold text-blue-600" href="https://github.com/ardasoyturk/twitter-profile-viewer">here</a>.
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const diff = computed(() => {
  let finalDate = new Date("2022-09-20T00:00:00+0300");
  let nowDate = new Date();

  let diff = finalDate.getTime() - nowDate.getTime();
  diff = Math.floor(diff / (1000 * 60 * 60 * 24));
  return diff;
})
</script>
