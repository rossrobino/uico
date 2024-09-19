# Comprehensive Styles with Modern CSS

Base styles and color palettes for any web project.

## Overview

### Install

You can install the package from [npm](https://www.npmjs.com/package/uico),

```bash
npm i -D uico
```

```css
@import "uico";
```

or copy and paste the [stylesheet](https://github.com/rossrobino/uico/tree/main/packages/uico/style.css) into your project (everything is in one CSS file).

### Layers

uico uses [css layers](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer) applied in the following order.

- `theme` - css custom properties
- `base` - base styles and components
- `utilities` - utility classes
- `components` - empty
