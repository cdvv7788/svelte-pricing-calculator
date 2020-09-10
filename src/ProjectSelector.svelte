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

<select
  bind:value={selected}
  on:change={handleSelectChange}
  class="border border-transparent bg-gray-200 p-4 w-full">
  <option value="" disabled selected>Select a type of project</option>
  {#each projects as project}
    <option value={project.multiplier}>{project.name}</option>
  {/each}
</select>
