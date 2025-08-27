<script setup lang="ts">
import SearchForm from '@/components/search-form/index.vue';
import './logic/init.ts';
</script>

<template>
  <main
    class="w-full h-full flex flex-col flex-grow justify-center items-center gap-5 p-5"
  >

    <div
      class="flex flex-row justify-center items-center gap-2 font-bold font-['Courier_New',_Courier,_monospace]"
    >
      <img
        alt="Lokika logo"
        class="logo"
        src="/favicon.ico"
        width="35"
        height="35"
      />
      <h1 class="text-3xl">Lokika</h1>
    </div>

    <SearchForm />
  </main>
</template>
