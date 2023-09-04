# uico

## UI components for TailwindCSS projects

- [GitHub](https://github.com/rossrobino/uico)
- [Preview](https://uico.robino.dev)

**uico** provides utility classes for basic UI elements, it enables the use of CSS classes for basic components instead of relying a JavaScript framework. **uico** is a Tailwind plugin, it works wherever Tailwind does. This site can also be used to create a color scheme for a project without using the plugin.

Check out [shadcn/ui](https://ui.shadcn.com/) to see the styles these components are based on.

## Install

**uico** is one file [`plugin/index.js`](https://github.com/rossrobino/uico/blob/main/plugin/index.js). Install from npm to always have the most up to date version, or copy and paste into your project as a starting point if you end up needing more customization.

```bash
npm i -D uico
```

## Configure Tailwind

- [tailwind.config.js](https://github.com/rossrobino/uico/blob/main/tailwind.config.js)
- [css](https://github.com/rossrobino/uico/blob/main/src/app.postcss)

**uico** does not supply colors but expects certain colors to be configured in your `theme`. Utilizing CSS custom properties makes swapping themes simpler, you can also set the theme directly in your `tailwind.config.js` instead.

After configuring your theme, these colors can be utilized throughout the project with the added benefit of auto-complete if you have the TailwindCSS extension installed in your IDE. You can also utilize opacity modifiers with these colors: `text-primary-foreground/80`.

This site provides a way to customize and preview your theme as well as generate the custom properties needed.
