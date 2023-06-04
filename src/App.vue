<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="navbar">
      <div class="navbarLeft">
        <RouterLink to="/">Home</RouterLink>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
