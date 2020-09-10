<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let name;
  export let value;
  export let label;

  let multiplier = 0;

  function handleChange() {
    dispatch("message", {
      multiplier: multiplier,
    });
  }
</script>

<label>
  <input
    type="radio"
    {value}
    {name}
    bind:group={multiplier}
    on:change={handleChange} />{label}
</label>
