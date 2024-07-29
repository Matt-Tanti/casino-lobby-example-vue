<!-- Game thumbnails to be used in a list -->
<script setup lang="ts">
import { type Game } from '@/types/modelTypes'
import { useRouter } from 'vue-router'

// Component props
const props = defineProps<{ game: Game }>()

const router = useRouter()

// On thumbnail click navigate to game overview
const handleClick = () => {
  router.push(`/game/${props.game.slug}`)
}
</script>

<template>
  <div class="thumbnail" @click="handleClick">
    <img class="image" :src="game.game_thumbnail" />
    <div class="titleContainer">
      <p class="title">
        {{ game.title }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.thumbnail {
  height: auto;
  display: flex;
  aspect-ratio: 1 / 1;
  position: relative;
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
