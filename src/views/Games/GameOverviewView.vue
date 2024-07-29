<!-- Game overview -->
<script setup lang="ts">
import { type ContextState, type Game } from '@/types/modelTypes'
import Loading from '@/views/Common/Loading.vue'
import sanitizeHtml from 'sanitize-html'
import { computed, inject, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// Inject the state with the game json
const state = inject<ContextState>('state')

const route = useRoute()
const router = useRouter()

// Get game by slug when default games is set
const game = computed<Game | null>(() => {
  if (!state?.defaultGames || !state?.getGameBySlug) return null

  return state.getGameBySlug(route.params.gameId as string)
})

// Watch for changes in game and defaultGames
// Navigate to 404 if game not found
watch(
  [game, () => state?.defaultGames],
  ([newGame, newDefaultGames]) => {
    if (newGame === null && newDefaultGames !== null) {
      router.replace('/404')
    }
  },
  { immediate: true }
)

// Handle back button click
// Navigate back to lobby
const handleBackClick = () => {
  router.push('/')
}
</script>

<template>
  <div v-if="game" class="gameOverview">
    <!-- Background image -->
    <img :src="game.game_background" :alt="game.title" class="background" />
    <!-- Content -->
    <div class="contentBackground container">
      <div class="content">
        <!-- Backbutton -->
        <button class="backButton" @click="handleBackClick">
          <i class="arrowLeft" />
          <p>back</p>
        </button>

        <!-- Title  -->
        <div class="title">
          <h1>{{ game.title }}</h1>
        </div>

        <!-- Content -->
        <div class="text" v-html="sanitizeHtml(game.content ?? '')"></div>
      </div>
    </div>
  </div>
  <Loading v-else />
</template>

<style scoped>
.gameOverview {
  display: flex;
  flex: 1;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.contentBackground {
  position: relative;
  flex: 1;
  padding: 0;
  background-color: rgba(0, 0, 0, 0.65);
}

.content {
  padding: 1rem;
}

.title {
  padding-top: 0.8rem;
  padding-bottom: 1rem;
}

.text {
  text-align: left;
}

.backButton {
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  padding: 1rem;
  background: none;
  border: none;
}

.arrowLeft {
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 0.5rem;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}
</style>
