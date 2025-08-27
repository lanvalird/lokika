<script setup lang="ts">
import Form from './form.vue';
</script>

<template>
  <main>
    <h1>Lokika Homepage</h1>

    <p id="welcome">Hello, User!</p>

    <h2>Settings</h2>
    <Suspense><Form /></Suspense>

    <p class="repo-link">
      <a href="https://github.com/lanvalird/lokika" target="_blank"
        >Contribute on GitHub</a
      >
    </p>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  min-width: 400px;
  max-width: 600px;
  min-height: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem;
}

h1 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

h2 {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
}

p {
  font-size: 1rem;
}

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
