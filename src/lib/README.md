# layercomp

## A layer of components for TailwindCSS projects

- [GitHub](https://github.com/rossrobino/layercomp)
- [Preview](https://layercomp.robino.dev)

These components are built with CSS and a single HTML element. **layercomp** is a TailwindCSS plugin, it works wherever Tailwind does.

Check out [shadcn/ui](https://ui.shadcn.com/) to see the styles these components are based on.

## Install

```bash
npm i -D layercomp
```

## Configure Tailwind

This plugin does not supply colors but expects certain colors to be configured in your `theme`. Utilizing custom properties makes swapping themes simpler, you can also set the theme directly in your `tailwind.config.js` instead.

This site provides a way to customize and preview your theme as well as generate the custom properties needed.

- [tailwind.config.js](https://github.com/rossrobino/layercomp/blob/main/tailwind.config.js)
- [css](https://github.com/rossrobino/layercomp/blob/main/src/app.postcss)
