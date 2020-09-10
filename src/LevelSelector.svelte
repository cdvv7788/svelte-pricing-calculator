<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let parameter;
  let multiplier = 0;

  function handleChange(e) {
    dispatch("message", {
      multiplier: multiplier,
    });
  }
</script>

<div class="p-5">
  <h2 class="text-lg uppercase">{parameter.name}</h2>
  {#each parameter.values as value}
    <label>
      <input
        type="radio"
        value={value.multiplier}
        name={parameter.name}
        bind:group={multiplier}
        on:change={handleChange} />{value.name}
    </label>
  {/each}
</div>
