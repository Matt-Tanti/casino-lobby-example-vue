<script setup lang="ts">
import { provide, reactive } from 'vue'
import { RouterView } from 'vue-router'
import defaultGamesJson from './constants/games.json'
import { type ContextState } from './types/modelTypes'

// Global data
const state = reactive<ContextState>({
  defaultGames: defaultGamesJson
})

provide('state', state)
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
