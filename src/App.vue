<script setup lang="ts">
import defaultGamesJson from '@/constants/games.json'
import { type ContextState } from '@/types/modelTypes'
import { provide, reactive } from 'vue'
import { RouterView } from 'vue-router'

// Global data
const state = reactive<ContextState>({
  // Default games json data
  // Convert to array?
  defaultGames: defaultGamesJson,
  // Get a game object by slug function
  getGameBySlug(slug?: string) {
    if (!slug) return null

    return this.defaultGames?.[slug] ?? null
  }
})

provide<ContextState>('state', state)
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
