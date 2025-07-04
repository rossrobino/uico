# uico

## 0.10.3

### Patch Changes

- d338614: fix: Various cursor style improvments

## 0.10.2

### Patch Changes

- 4c1ceab: pre scrollbar color

## 0.10.1

### Patch Changes

- d3a0fa2: fix icon button padding

## 0.10.0

### Minor Changes

- a5b0f37: button height

## 0.9.1

### Patch Changes

- 5507644: fix: buttons font family inherit

## 0.9.0

### Minor Changes

- 57fc20f: scrollbar color

## 0.8.0

### Minor Changes

- 223e1af: default theme changes
  - --light-end default to 0.1 (a bit darker)
  - --accent default to cyan-700

- a6d0ec3: remove cursor style from button

### Patch Changes

- 9266a18: fix: remove margin from non-prose headings
- 63aa6ad: fix: code style within headings

## 0.7.0

### Minor Changes

- e21fd43: Minor changes
  - update selection color from accent to primary
  - refine styles on `select[multiple]`
  - refine styles on checkbox and radio inputs

## 0.6.3

### Patch Changes

- 319eb24: textarea / select[multiple] min height and height

## 0.6.2

### Patch Changes

- 24f584e: fix line height for code blocks

## 0.6.1

### Patch Changes

- d2d2cc1: fix for a tags too

## 0.6.0

### Minor Changes

- 1c8f480: remove cursor pointer from button

## 0.5.0

### Minor Changes

- f118fd7: reduce font size for code blocks

## 0.4.6

### Patch Changes

- 57a64a0: fix: inherit font on inputs, .link underline

## 0.4.5

### Patch Changes

- 8e6bb93: fix: remove components/utilities layers

## 0.4.4

### Patch Changes

- d663929: tailwind example file

## 0.4.3

### Patch Changes

- 1f635da: fix: consistent layer order, lighter light-start value

## 0.4.2

### Patch Changes

- a0ea237: fix: conflicting styles for button, submit, and reset input types

## 0.4.1

### Patch Changes

- ac0fc45: fix: only hover button styles on supported devices

## 0.4.0

### Minor Changes

- 8f90f1a: Minor updates
  - Update focus ring to 1px
  - Improve base styles
  - Improve placeholder colors

## 0.3.3

### Patch Changes

- bacce1d: blockquote right spacing

## 0.3.2

### Patch Changes

- 521aa6a: A few small changes.
  - Improve prose styles - li and image spacing.
  - Fix copy color on color generator.

## 0.3.1

### Patch Changes

- 87a60f2: - Increase font-size on `code` elements not in `pre` tags.
  - Add comments throughout src CSS

## 0.3.0

### Minor Changes

- 350fd06: Updates `uico` to be a css file instead of a Tailwind plugin.

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
