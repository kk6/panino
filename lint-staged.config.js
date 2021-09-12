module.exports = {
  // Type check TypeScript files
  "**/*.(ts|tsx)": () => "tsc --noEmit",

  // Lint then format TypeScript and JavaScript files
  "**/*.(ts|tsx|js)": (filenames) => [
    // `yarn lint:fix` は `next lint` を使っているが
    // https://github.com/vercel/next.js/issues/27997
    // のバグがあるため使用しない
    // https://github.com/vercel/next.js/pull/28042
    // ↑のリリース待ち
    `eslint --fix ${filenames.join(" ")}`,
    `prettier --write ${filenames.join(" ")}`,
  ],
}
