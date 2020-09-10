import App from "./App.svelte";

const app = new App({
  target: document.getElementById("svelte"),
});

window.app = app;

export default app;
