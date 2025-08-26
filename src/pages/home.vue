<script setup lang="ts">
</script>

<template>
<main>
    <div class="heading">
      <img alt="Vue logo" class="logo" src="/favicon.ico" width="35" height="35" />
      <h1>Lokika</h1>
    </div>    

<!--
    <form id="search-form">
      <svg
        width="32px"
        height="32px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <input type="search" name="search" placeholder="Search..." />
    </form>
-->
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

  background-size: cover;
  background-position: center;
  backdrop-filter: brightness(0.35);
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

#search-form {
  --text-color: rgb(250, 250, 220, 0.5);

  max-width: 500px;
  width: 100%;

  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  color: var(--text-color);
}

#search-form input {
  width: 100%;
  padding: 0.55rem 1rem;

  border: 2px solid;
  border-radius: 999999999px;

  background-color: rgba(50, 50, 50, 0.5);
  color: currentColor;

  box-shadow: 0 0 4px 2px rgb(255, 255, 255, 0.25),
    0 0 2px 0 rgb(60, 30, 0, 0.5);
}

#search-form input::placeholder {
  font-style: italic;
  color: rgb(250, 250, 220, 0.5);
}
</style>
