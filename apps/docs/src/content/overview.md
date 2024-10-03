# Comprehensive Styles with Modern CSS

Base styles and color palettes for any web project.

## Overview

### Install

If you are using a bundler, you can install the package from [npm](https://www.npmjs.com/package/uico) and import into your css,

```bash
npm i -D uico
```

```css
@import "uico";
```

or link to a [CDN](https://cdn.jsdelivr.net/npm/uico/style.css) in your html,

```html
<link
	rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/uico@version/style.css"
/>
```

or copy and paste the [stylesheet](https://github.com/rossrobino/uico/tree/main/packages/uico/style.css) into your project (everything is in one CSS file).

### Layers

uico uses [css layers](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer) applied in the following order.

- `theme` - css custom properties
- `base` - base styles and components
- `utilities` - utility classes
- `components` - empty
