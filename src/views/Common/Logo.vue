<script setup lang="ts">
import LogoImage from '@/assets/premier-gaming.png'
</script>

<template>
  <img :src="LogoImage" alt="Premier Gaming" class="logo" />
</template>

<style scoped>
.logo {
  height: auto;
  max-width: 300px;
  min-width: 100px;
}
</style>
