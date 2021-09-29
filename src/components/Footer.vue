<template>
  <div class="absolute bottom-0 flex w-screen bg-black">
    <div class="container flex flex-col flex-wrap px-5 mx-auto py-1.5 sm:py-3 sm:flex-row">
      <div
        class="text-[0.75rem] leading-[1.2rem] sm:text-sm text-center text-gray-200 sm:text-left"
      >
        © {{ new Date().getFullYear() }}
        <a href="#" class="text-current">profileviewer.site</a>
        —
        <p class="hidden sm:inline">Made with 🤍 by</p>
        <a
          href="https://twitter.com/soyturkarda_"
          rel="noopener noreferrer"
          class="ml-1 text-[#009df7]"
          target="_blank"
        >@soyturkarda_</a> — This website is not associated with Twitter Inc.
      </div>
      <span
        class="inline-flex justify-center mx-auto mt-2 space-x-3 lg:mx-0 lg:ml-auto sm:mt-0 lg:justify-start"
      >
        <a
          aria-label="Twitter"
          href="https://twitter.com/soyturkarda_"
          class="text-gray-500 hover:text-gray-300"
        >
          <Icon name="twitter" />
        </a>
        <a
          aria-label="GitHub"
          href="https://github.com/ardasoyturk/twitter-profile-viewer"
          class="text-gray-500 hover:text-gray-300"
        >
          <Icon name="github" />
        </a>
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Icon from './Icon.vue';
</script>
