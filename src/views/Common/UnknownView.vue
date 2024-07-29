<!-- Simple 404 page -->
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

// Handle back to lobby button click
// Navigate back to lobby
const handleBackToLobby = (event: MouseEvent) => {
  router.replace('/')
}
</script>

<template>
  <div class="unknown">
    <div>
      <h1>Error 404</h1>
      <p>Page not found!</p>
      <button @click="handleBackToLobby">Back to lobby</button>
    </div>
  </div>
</template>

<style scoped>
.unknown {
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
