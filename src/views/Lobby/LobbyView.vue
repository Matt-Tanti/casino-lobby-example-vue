<script setup lang="ts">
import { type ContextState, type Game } from '@/types/modelTypes'
import { fuzzySearch } from '@/utils/search'
import { computed, inject, ref, type ComputedRef, type Ref } from 'vue'

const state = inject<ContextState>('state')

const searchFilter: Ref<string> = ref('')

const filteredGames: ComputedRef<Game[]> = computed(() => {
  if (!state?.defaultGames) return []

  const defaultGamesArray: Game[] = Object.values(state.defaultGames)

  // Return full array if no filter
  if (!searchFilter.value) return defaultGamesArray

  // Lowercase search query to remove case sensitivity
  const searchQuery: string = searchFilter.value.toLowerCase()

  // Initially match with substring
  let fGames: Game[] = defaultGamesArray.filter((game: Game) =>
    game.title?.toLowerCase().includes(searchQuery)
  )

  // Fuzzy search if no substring matches
  if (fGames.length < 1) fGames = fuzzySearch(defaultGamesArray, searchQuery)

  return fGames
})
</script>

<template>
  <div></div>
</template>
