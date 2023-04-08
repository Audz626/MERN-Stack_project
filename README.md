# mern-stack-ts
create Article web using react and typescript
<!--  -->
- yarn add -D @tailwindcss/aspect-ratio
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // ...
  ],
}
