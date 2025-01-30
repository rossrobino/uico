# Comprehensive Styles with Modern CSS

Base styles and color palettes for any web project.

## Overview

### Install

If you are using a bundler, you can install the package from [npm](https://www.npmjs.com/package/uico) and import into your css,

```bash
npm i uico
```

```css
@import "uico";
```

or copy and paste the [stylesheet](https://github.com/rossrobino/uico/tree/main/packages/uico/style.css) into your project (everything is in one CSS file).

#### TailwindCSS

Tailwind is not required to use uico. If you are using uico with [TailwindCSS](https://tailwindcss.com/), [this configuration](https://github.com/rossrobino/uico/blob/main/packages/uico/tailwind.css) configures the custom colors and deduplicates other values. Tailwind `preflight` is not needed.

### Layers

uico uses [css layers](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer) applied in the following order.

- `theme` - css custom properties
- `base` - base styles and components
- `components` - empty
- `utilities` - utility classes
