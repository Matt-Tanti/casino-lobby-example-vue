<!-- Simple 404 page -->
<script setup lang="ts"></script>

<template>
  <div class="unknown">
    <div>
      <h1>Error 404</h1>
      <p>Page not found!</p>
      <RouterLink to="/" tag="button"><button>Back to lobby</button></RouterLink>
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
