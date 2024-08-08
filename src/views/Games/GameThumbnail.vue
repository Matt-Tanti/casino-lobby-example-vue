<!-- Game thumbnails to be used in a list -->
<script setup lang="ts">
import { type Game } from '@/types/modelTypes'

// Component props
const props = defineProps<{ game: Game }>()
</script>

<template>
  <RouterLink :to="`/game/${game.slug}`" class="thumbnail">
    <img class="image" :src="game.game_thumbnail" />
    <div class="titleContainer">
      <p class="title">
        {{ game.title }}
      </p>
    </div>
  </RouterLink>
</template>

<style scoped>
.thumbnail {
  height: auto;
  display: flex;
  aspect-ratio: 1 / 1;
  position: relative;
  color: white;
}

.image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.titleContainer {
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
}

.title {
  margin: 0.8rem;
  text-align: start;
}
</style>
