---
"uico": minor
---

Updates `uico` to be a css file instead of a Tailwind plugin.

This makes it more flexible to be able to be used in any project instead of just Tailwind ones.

#### Features

- Adds base styles, based on Tailwind's preflight styles.
- Adds typography styles with a `prose` class, similar to `@tailwindcss/typography`.
- Updates docs to include a [base](https://uico.robino.dev/#theme) and [normal](https://uico.robino.dev/color-generator) OKLCH color palette generators.

#### Changes

- `uico` now styles elements by default instead of just based on class names. So these extra class names can be removed on the semantic elements. The variant prefix has also been removed. The class names still exist in case you need to style a link like a button for example.

```diff
- <button class="button button-primary">Open</button>
+ <button>Open</button>

- <button class="button button-secondary">Open</button>
+ <button class="secondary">Open</button>
```

- `.card` component is removed.
- Adds `ghost` variant for `.badge` class.
- A variety of custom properties are included to use or override.
- Default theme colors are now included, or edit these variables to create your theme.

```css
--base: #637389;
--accent: #00695f;
--destructive: #cb304a;
--light-start: 0.99;
--light-end: 0.15;
--chroma-start: 0.005;
--chroma-end: 0.035;
--border-radius: 2px;
```

##### Using Tailwind

You can still use `uico` with Tailwind.

1. Remove the `uico` plugin from your Tailwind config.
2. Remove the `typography` plugin if you are using it.
3. Import the `uico` stylesheet into your css.
