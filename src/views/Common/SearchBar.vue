<!-- Simple input component -->
<script setup lang="ts">
import { defineEmits, defineProps, ref, watch, type Ref } from 'vue'

// Component props
const props = defineProps<{
  value: string
}>()

// Emit to update prop
const emit = defineEmits(['value'])

// Internal value to update input text
const searchValue: Ref<string> = ref(props.value)

// Watch internal value and update prop on change
watch(searchValue, (newVal) => {
  emit('value', newVal)
})
</script>

<template>
  <div class="searchBar">
    <input type="text" placeholder="Search..." v-model="searchValue" class="input" />
  </div>
</template>

<style scoped>
.searchBar {
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
