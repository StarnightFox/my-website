<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectLink',
  props: {
    link: {
      type: String,
      required: true
    }
  }
})
</script>

<template>
  <a :href="link" target="_blank" rel="noopener noreferrer" class="projectLink">Github</a>
</template>

<style scoped>
.projectLink {
  padding: 5px;
  border-radius: var(--small-br);
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  width: 25%;
  text-decoration: none;
  cursor: pointer;
}

.projectLink:hover {
  background-color: var(--hover-background);
}
</style>
