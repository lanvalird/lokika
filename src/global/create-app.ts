import "../assets/main.css";

import type { Component } from "vue";

import { createApp as createVueApp } from "vue";
import { createPinia } from "pinia";

type Data = Record<string, unknown>;

export function createApp(rootComponent: Component, rootProps?: Data | null) {
  const app = createVueApp(rootComponent, rootProps);

  app.use(createPinia());

  app.mount("#app");
}

export default createApp;
