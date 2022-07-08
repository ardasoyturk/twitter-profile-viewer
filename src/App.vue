<template>
  <div>
    <v-slot v-if="diff > 0">
      <Notification />
    </v-slot>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
  <Footer />
</template>

<script lang="ts" setup>
import Notification from './components/Notification.vue';
import Footer from "./components/Footer.vue";
import { computed } from 'vue';

const diff = computed(() => {
  let finalDate = new Date("2022-09-20T00:00:00+0300");
  let nowDate = new Date();

  let diff = finalDate.getTime() - nowDate.getTime();
  return diff;
})
</script>

<style>
/* Global Transitions */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transition: opacity 0.2s;
}
</style>