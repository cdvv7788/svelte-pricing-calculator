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

<style>
  .toggle-widget {
    height: 16px;
    width: 30px;
    border: 1px solid #b1b1b1;
    margin-right: 8px;
    display: block;
    position: relative;
    top: 4px;
    float: left;
    transition: 0.2s ease-in;
  }

  .toggle-widget:before {
    height: 8px;
    width: 8px;
    background: #b1b1b1;
    position: absolute;
    top: 3px;
    left: 3px;
    transition: 0.2s ease-in;
    display: inline-block;
    content: "";
  }

  input[type="radio"]:checked + label .toggle-widget:before {
    background: #04f;
    left: 17px;
  }

  input[type="radio"]:checked + label .toggle-widget {
    border-color: #04f;
  }

  input {
    display: none;
  }
</style>

<input
  id="radio-{name}-{value}"
  type="radio"
  {value}
  {name}
  bind:group={multiplier}
  on:change={handleChange} />
<label for="radio-{name}-{value}">
  <span class="toggle-widget" />
  {label}
</label>
