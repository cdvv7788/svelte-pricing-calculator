<script>
  import { toggle_class } from "svelte/internal";

  import LevelSelector from "./LevelSelector.svelte";
  import ProjectSelector from "./ProjectSelector.svelte";
  import TotalDisplay from "./TotalDisplay.svelte";

  const projects = [
    { name: "Fintech Application", multiplier: 1.0 },
    { name: "Data Mining Tool", multiplier: 2.0 },
    { name: "Open Banking App", multiplier: 3.0 },
    { name: "Marketplace", multiplier: 4.0 },
    { name: "API", multiplier: 5.0 },
    { name: "Analytics / BI Dashboard", multiplier: 6.0 },
    { name: "Community / Social Network", multiplier: 7.0 },
    { name: "Artificial Intelligence Application", multiplier: 8.0 },
    { name: "AI on the edge", multiplier: 9.0 },
    { name: "Music and Entertainment App", multiplier: 10.0 },
    { name: "RegTech Software", multiplier: 11.0 },
    { name: "System Integration Project", multiplier: 12.0 },
    { name: "Blockchain App", multiplier: 13.0 },
    { name: "Lifestyle App", multiplier: 14.0 },
    { name: "Health and Fitness App", multiplier: 15.0 },
    { name: "Travel App", multiplier: 16.0 },
    { name: "Sports App", multiplier: 17.0 },
  ];

  const parameters = [
    {
      name: "Complexity",
      values: [
        { name: "Low", multiplier: 100 },
        { name: "Mid", multiplier: 150 },
        { name: "High", multiplier: 200 },
      ],
    },
    {
      name: "Project Size",
      values: [
        { name: "Small", multiplier: 100 },
        { name: "Medium", multiplier: 150 },
        { name: "Big", multiplier: 200 },
      ],
    },
    {
      name: "Speed",
      values: [
        { name: ">6 months", multiplier: 100 },
        { name: "2>5 months", multiplier: 150 },
        { name: "<2 months", multiplier: 200 },
      ],
    },
  ];

  let total = [0, 0, 0, 0];

  $: calculatedTotal = total.reduce((a, b) => a * b);

  function handleSelector(selectorId) {
    return (e) => {
      total[selectorId] = e.detail.multiplier;
      total = total;
    };
  }
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<div class="border">
  <ProjectSelector {projects} on:message={handleSelector(0)} />

  <div class="grid grid-cols-3 gap-4 text-gray-500">
    {#each parameters as parameter, i}
      <LevelSelector {parameter} on:message={handleSelector(i + 1)} />
    {/each}
  </div>
  <hr />
  <div class="text-center">
    <TotalDisplay total={calculatedTotal} />
  </div>
</div>
