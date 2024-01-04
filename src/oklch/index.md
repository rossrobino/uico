# oklch Colors

**uico** comes with an experimental color palette that uses the `oklch` function. This palette is a drop in replacement for Tailwind's default [hex colors](https://tailwindcss.com/docs/customizing-colors), and the colors used in `@tailwindcss/typography` plugin if you are using it. `oklch` colors enable websites to make use of the P3 color space, here's a [post from Evil Martians](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl) with more details.

## Config

```ts
uico({
	colorPalette: "oklch",
}),
```

## Comparison

Below you can view a comparison of these colors and Tailwind's default color palette. You will be able to see the P3 colors if your display supports them (most newer smartphones), otherwise you'll see a fallback. The difference is particularly apparent in colors like orange!

Each color has a constant **hue**. The **lightness** and **chroma** values change depending on the shade (50 - 950). **Lightness** is mathematically calculated so that colors closer in **hue** to yellow are lighter to make the colors as close as possible to the default Tailwind palette. Please feel free to [share feedback](https://github.com/rossrobino/uico/discussions) and let us know what you think.

Click on a color to copy the values and easily add to your custom properties.

<div class="card">
	<color-palette></color-palette>
</div>
