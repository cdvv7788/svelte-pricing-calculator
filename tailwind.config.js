module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    enabled: true,
    content: ["./src/**/*.svelte"],
  },
};
