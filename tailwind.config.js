module.exports = {
  // Uncomment the line below to enable the experimental Just-in-Time ("JIT") mode.
  // https://tailwindcss.com/docs/just-in-time-mode
  // mode: "jit",
  theme: {
    extend: {
      fontFamily : {
        Oxanium : ["Oxanium", "cursive"],
      },
      typography: (theme) => ({
        DEFAULT : {
          css : {
            h1 : { color : theme('colors.red.800')}
          },
        },
      }),
    },
  },
  variants: {},
  plugins: ['@tailwindcss/typography'],
  corePlugins : {
    preflight: true
  },
  purge: {
    // Filenames to scan for classes
    content: [
      "./src/**/*.html",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
      "./public/index.html",
    ],
    // Options passed to PurgeCSS
    options: {
      // Whitelist specific selectors by name
      // safelist: [],
    },
  },
};
