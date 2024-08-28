# Color Palette Generator

`oklch` colors enable websites to make use of the P3 color space, here’s a post from [Evil Martians](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl) with more details.

Each color has a constant **hue**. The **lightness** and **chroma** values change depending on the shade. **Lightness** is mathematically calculated so that colors closer in **hue** to yellow are lighter to make those colors appear closer to what you would expect. Please feel free to [share feedback](https://github.com/rossrobino/uico/discussions) and let us know what you think.

The `ColorMaker` JavaScript class used to create this tool is exported from the package if you would want to use it in another project.

```js
import { ColorMaker } from "uico";
```
