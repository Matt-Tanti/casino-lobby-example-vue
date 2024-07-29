<!-- Lobby view -->
<script setup lang="ts">
import { type ContextState, type Game } from '@/types/modelTypes'
import { fuzzySearch } from '@/utils/search'
import Loading from '@/views/Common/Loading.vue'
import Logo from '@/views/Common/Logo.vue'
import SearchBar from '@/views/Common/SearchBar.vue'
import GameThumbnail from '@/views/Games/GameThumbnail.vue'
import { computed, inject, ref, type ComputedRef, type Ref } from 'vue'

// Inject the state with the game json
const state = inject<ContextState>('state')

// Search filter
const searchFilter: Ref<string> = ref('')

// Compute the filtered games based on the search filter
const filteredGames: ComputedRef<Game[] | null> = computed(() => {
  if (!state?.defaultGames) return null

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
  <div class="container lobby">
    <div class="header">
      <Logo />
      <SearchBar :value="searchFilter" />
    </div>

    <!-- Display loading bar if data is not fetched yet -->
    <div v-if="filteredGames" class="grid">
      <GameThumbnail v-for="game in filteredGames" :game="game" />
    </div>
    <Loading v-else />
  </div>
</template>

<style scoped>
.lobby {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
}

.header {
  max-width: 300px;
  padding-bottom: 2rem;
}

.grid {
  display: grid;
  gap: 1.2rem;
  grid-template-columns: repeat(4, 1fr); /* 4 columns by default */

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr); /* 3 columns for screens smaller than 1200px */
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns for screens smaller than 800px */
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr; /* 1 column for screens smaller than 500px */
  }
}
</style>
