/** @type {import("prettier").Config} */
const config = {
  printWidth: 420,
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
};

module.exports = config;
