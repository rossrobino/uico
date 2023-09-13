# uico

## UI components for TailwindCSS projects

- [GitHub](https://github.com/rossrobino/uico)
- [Preview](https://uico.robino.dev)

**uico** provides utility classes for basic UI elements, it enables the use of CSS classes for basic components instead of relying a JavaScript framework. **uico** is a Tailwind plugin, it works wherever Tailwind does. This site can also be used to create a color scheme for a project without using the plugin.

The advantage of using a plugin instead of writing custom CSS is that the Tailwind compiler will remove any classes that are not used in the project, ensuring only what is used gets added to the final output.

- Check out [shadcn/ui](https://ui.shadcn.com/) to see the styles these components are based on.
- All of the [Modern Font Stacks](https://modernfontstacks.com/) are also included as utility classes. These are system font stacks, so you are not shipping an extra font with your bundle.

## Install

**uico** is one file [`plugin/index.js`](https://github.com/rossrobino/uico/blob/main/plugin/index.js). Install from npm to always have the most up to date version, or copy and paste into your project as a starting point if you end up needing more customization.

```bash
npm i -D uico
```

## Configure Tailwind

- [config](https://github.com/rossrobino/uico/blob/main/vite.config.ts)
- [css](https://github.com/rossrobino/uico/blob/main/src/app.postcss)

**uico** does not supply colors but expects certain colors as CSS custom properties. This site provides a way to customize and preview your theme as well as generate the custom properties needed.

After configuring your theme, these colors can be utilized throughout the project with the added benefit of auto-complete if you have the TailwindCSS extension installed in your IDE. You can also utilize opacity modifiers with these colors: `text-primary-foreground/80`.
