<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let projects;

  let selected;

  function handleSelectChange() {
    dispatch("message", {
      multiplier: selected,
    });
  }
</script>

<style>
</style>

<select bind:value={selected} on:change={handleSelectChange}>
  <option value="" disabled selected>Select a type of project</option>
  {#each projects as project}
    <option value={project.multiplier}>{project.name}</option>
  {/each}
</select>
