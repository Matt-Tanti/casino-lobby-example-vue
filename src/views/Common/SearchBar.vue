<!-- Simple input component -->
<script setup lang="ts">
const props = defineProps<{
  searchFilter: string
}>()
</script>

<template>
  <div class="content">
    <input type="text" placeholder="Search..." v-model="searchFilter" class="input" />
  </div>
</template>

<style scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
}

.input {
  flex: 1;
  padding: 0.8rem;
  border-radius: 5px;
  border: 1px solid #ccc;
}
</style>
