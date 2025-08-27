<script setup lang="ts">
import SearchForm from '@/components/search-form/index.vue';
</script>

<template>
  <main>
    <div class="heading">
      <img
        alt="Lokika logo"
        class="logo"
        src="/favicon.ico"
        width="35"
        height="35"
      />
      <h1>Lokika</h1>
    </div>

    <SearchForm />
  </main>
</template>

<style scoped>
main {
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2rem;
}

.heading {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;

  & > * {
    margin-bottom: 5rem;

    font-family: "Courier New", Courier, monospace;
    font-size: 2rem;
    line-height: 2rem;

    text-align: center;
  }
}
</style>
