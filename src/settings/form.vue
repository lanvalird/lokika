<script setup lang="ts">
import { browser } from '@/global';
import { ref } from 'vue';

const username = ref('...');
const background = ref<string | undefined>(undefined);
const searcher = ref('system');

(await browser.storage.local.get(['username', 'background', 'searcher']).then((result) => {
  username.value = (result.username as string) || 'user';
  background.value = (result.background as string) || undefined;
  if (typeof result.searcher === 'string') searcher.value = result.searcher;
})) as { [key: string]: string };

function save(e: Event) {
  const form = e.target as HTMLFormElement;

  if (form.background.files[0] !== undefined) {
    const reader = new FileReader();
    reader.readAsDataURL(form.background.files[0]);
    reader.onloadend = function () {
      reader.result;
      background.value = (reader.result as string) || undefined;
      browser.storage.local.set({
        background: reader.result,
      });
    };
  }

  username.value = form.username.value || 'user';
  searcher.value = form.searcher.value || 'system';

  browser.storage.local.set({
    username: form.username.value,
    searcher: form.searcher.value,
  });
}
</script>

<template>
  <form id="settings" @submit.prevent="save">
    <label for="set-username">User Name</label>
    <input
      id="set-username"
      type="text"
      name="username"
      :value="username"
      placeholder="User"
    />

    <label for="set-background">Background URL</label>
    <input
      id="set-background"
      type="file"
      name="background"
      placeholder="https://example.com/background.png"
    />

    <img
      :src="
        background || 'https://placehold.co/640x360/transparent/FFF?font=lora'
      "
      class="w-full rounded-lg aspect-squire"
      alt="background"
    />

    <label for="set-searcher">Default Searcher</label>
    <select name="searcher" id="set-searcher" :value="searcher">
      <option value="system">System (Browser Provider)</option>
      <option value="google">Google</option>
      <option value="yandex">Yandex</option>
    </select>

    <button class="parameter" type="submit">Save</button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

form label {
  font-size: 1rem;
}

form input {
  width: 100%;
  padding: 0.55rem 1rem;
  border: 1px solid var(--color-gray-700);
  border-radius: 999999999px;
  background-color: var(--color-gray-100);
  color: var(--color-gray-800);
}

form input::placeholder {
  font-style: italic;
  color: var(--color-gray-500);
}

form button {
  cursor: pointer;
}

@media (prefers-color-scheme: dark) {
  form input {
    background-color: var(--color-gray-900);
    color: var(--color-gray-200);
  }
}
</style>
