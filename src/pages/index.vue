<template>
  <main class="flex items-center justify-center w-full min-h-screen">
    <div>
      <h1 class="title">Twitter Profile Viewer</h1>
      <h2 class="description">A very-detailed profile viewer for Twitter.</h2>
      <div class="space-y-3">
        <input
          ref="input"
          type="text"
          class="input"
          pattern="^@?((?=.*\w)[\w]{1,15})$"
          placeholder="Enter a username... (@Twitter)"
          min="1"
          v-model="username"
        />
        <router-link :to="getUser" class="submit-button">Submit</router-link>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { computed, ref, Ref } from 'vue';
import { useRouter } from "vue-router";
import { onStartTyping, onKeyPressed } from '@vueuse/core';

const router = useRouter();
const input: Ref<HTMLInputElement | null> = ref(null);
const username: Ref<string> = ref("");

const getUser = computed(() => {
  let user = username.value;
  if (!user || user === '') return '/';
  if (user.startsWith('@')) user = user.slice(1);
  return '/user/' + user;
})

onKeyPressed('Enter', (e) => {
  router.push(getUser.value);
})

onStartTyping(() => {
  input?.value?.focus();
});
</script>