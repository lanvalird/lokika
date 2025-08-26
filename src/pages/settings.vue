<script setup lang="ts">
import "@/assets/main.css";
import { browser } from "@/global";

function save() {
  alert("Сохранение настроек в разработке");
  browser.runtime.openOptionsPage();
}
</script>

<template>
  <main>
    <h1>Lokika Homepage</h1>

    <p id="welcome">Hello, User!</p>

    <h2>Settings</h2>
    <form id="settings" @submit.prevent="save">
      <label for="set-username">Your First Name</label>
      <input
        class="parameter"
        type="text"
        name="username"
        id="set-username"
        placeholder="User"
      />

      <label for="set-background">Background URL</label>
      <input
        class="parameter"
        type="text"
        name="background"
        id="set-background"
        placeholder="https://example.com/background.png"
      />

      <label for="set-searcher">Default Searcher</label>
      <select class="parameter" name="searcher" id="set-searcher">
        <option value="system">System (Browser Provider)</option>
        <option value="google">Google</option>
        <option value="yandex">Yandex</option>
      </select>

      <button class="parameter" type="submit">Save</button>
    </form>

    <p class="repo-link">
      <a href="https://github.com/lanvalird/lokika" target="_blank"
        >Contribute on GitHub</a
      >
    </p>
  </main>
</template>

<style scoped>
main {
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

form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

form label {
  font-size: 1rem;
}

.parameter {
  padding: 0.5rem 1rem;
  border: 1px solid var(--text-color);
  border-radius: 999999999px;
  background-color: var(--bg-color);
  color: var(--text-color);
}

form input {
  padding: 0.5rem 1rem;
  border: 1px solid var(--text-color);
  border-radius: 999999999px;
  background-color: var(--bg-color);
  color: var(--text-color);

  &.parameter {
    border-radius: 0.25rem;
  }
}

form button {
  cursor: pointer;
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
