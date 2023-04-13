<script setup lang="ts">
import mainStore from "./store";
import { computed } from "vue";

const store = mainStore();

const aa = computed(() => store.getStoreItem(["nowMajorIndex", "nowPath"]));

console.log("nowIndex", aa);
</script>

<template>
   <router-view v-slot="{ Component }">
      <transition name="fade">
         <component :is="Component" />
      </transition>
   </router-view>
</template>
