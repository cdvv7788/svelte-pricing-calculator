<script>
  export let total;

  function kformat(num) {
    // https://stackoverflow.com/a/9461657/3509554
    if (Math.abs(num) > 999 && Math.abs(num) < 999999) {
      return Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k";
    } else if (Math.abs(num) > 999999) {
      return Math.sign(num) * (Math.abs(num) / 1000000).toFixed(1) + "m";
    }
    return Math.sign(num) * Math.abs(num);
  }
</script>

{#if total != 0}
  <h2 class="text-xl text-gray-600">
    From {kformat(total * 0.75)} To: {kformat(total * 1.25)}
  </h2>
{/if}
