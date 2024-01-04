# Read Me

**uico** is a minimal TailwindCSS plugin that provides CSS components, system font stack utilities, and a drop in oklch color palette. **uico** works wherever Tailwind does.

The advantage of using a plugin instead of writing custom CSS is that the Tailwind compiler will remove any classes that are not used in the project, ensuring only what is used gets added to the final output.

## Install

```bash
npm i -D uico
```

## Setup

### Config

Import and add the plugin to your `tailwind.config`, optionally, pass in an optional configuration object. Be sure to upgrade Tailwind to the latest version for type compatibility.

```ts
// tailwind.config.ts

import type { Config } from "tailwindcss";
import { uico } from "uico"; // import

export default {
	// ...
	plugins: [
		uico({
			// optional configuration
			// these are the default values
			components: true,
			fonts: true,
			colorFunction: false,
			colorPalette: "hex",
		}),
	],
} satisfies Config;
```
