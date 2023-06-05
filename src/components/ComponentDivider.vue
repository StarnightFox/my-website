<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ComponentDivider'
})
</script>

<template>
  <div class="divider" />
</template>

<style scoped>
.divider {
  width: 90%;
  border-top: 2px dotted white;
  margin: 10px 0;
}
</style>
