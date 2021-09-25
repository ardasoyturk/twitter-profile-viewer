<template>
  <div>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
  <Footer />
</template>

<script lang="ts" setup>
import Footer from "./components/Footer.vue";
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