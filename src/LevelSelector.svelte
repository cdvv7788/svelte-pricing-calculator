<script>
  import RadioWidget from "./RadioWidget.svelte";

  export let parameter;
  let multiplier = 0;
</script>

<div class="p-5">
  <h2 class="text-lg uppercase">{parameter.name}</h2>
  {#each parameter.values as value}
    <RadioWidget
      value={value.multiplier}
      name={parameter.name}
      label={value.name}
      on:message />
  {/each}
</div>
