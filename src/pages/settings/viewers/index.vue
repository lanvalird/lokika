<script setup lang="ts">
import Form from "./form.vue";
</script>

<template>
  <main class="w-full max-w-4xl mx-auto p-4">
    <h1 class="text-3xl text-bold leading-tight mt-4 mb-2">Lokika Homepage</h1>

    <h2 class="text-2xl leading-tight my-2">Settings</h2>
    <Suspense><Form /></Suspense>

    <p class="repo-link text-lg">
      <a href="https://github.com/lanvalird/lokika" target="_blank"
        >Contribute on GitHub</a
      >
    </p>
  </main>
</template>

<style scoped>
.repo-link {
  margin-top: 2rem;
  border: 0px dashed;
  border-bottom: 1px dashed;
}

.repo-link > a {
  width: 100%;
  display: inline-block;

  font-size: 1rem;
  text-align: center;
  text-decoration: none;
  color: var(--text-color);

  transition: transform 250ms linear;
}

.repo-link:hover > a {
  transform: scale(1.05);
}
</style>
