<script setup>
import TheNavigation from '@/components/TheNavigation.vue'
</script>

<template>
  <header>

    <the-navigation />
    <div class="container">
      <router-view></router-view>
    </div>

  </header>
</template>
