# Components

**uico** includes CSS classes for a few common components that can be created without JavaScript. [Here's a post](https://blog.robino.dev/posts/css-components) explaining why you might want to use CSS for simple components instead of a JavaScript UI framework.

## Config

```ts
uico({
	components: true, // defaults to `true`
}),
```

### Custom Properties

**uico** components expect certain colors and a border radius size to be set as CSS custom properties. You control these properties and can create your own theme. Check out the [oklch colors](/oklch/) page to copy the values of **uico**'s or Tailwind's color palettes.

If you are using a function like `hsl` or `oklch` for your theme, you can set `colorFunction` to a string. This allows Tailwind to inject alpha values for opacity for classes like `bg-primary/50`.

For example, this site uses `oklch`:

```ts
uico({
	colorFunction: "oklch",
}),
```

```css
/* style.postcss */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
	:root {
		--background: 99% 0.005 257; /* slate-50 */
		--foreground: 37% 0.05 257; /* 700 */
		--muted: 93% 0.015 257; /* 200 */
		--muted-foreground: 44% 0.05 257; /* 600 */
		--primary: 28% 0.05 257; /* 800 */
		--primary-foreground: 97% 0.01 257; /* 100 */
		--secondary: 87% 0.022 257; /* 300 */
		--secondary-foreground: 22% 0.05 257; /* 900 */
		--destructive: 56% 0.19 17; /* rose-700 */
		--destructive-foreground: 100% 0 0; /* white */
		--accent: 28% 0.05 257; /* 800 */
		--accent-foreground: 93% 0.015 257; /* 200 */
		--card: 100% 0 0; /* white */
		--card-foreground: 37% 0.05 257; /* 700 */
		--border: 93% 0.015 257; /* 200 */

		--radius: 0.3rem;
	}

	/* You can also create different themes, for example: */
	.dark {
		--background: 0% 0 0 /* black */;
		/* ... */
	}
}
```

After configuring your theme, these colors can be utilized throughout the project with the added benefit of auto-complete if you have the TailwindCSS extension installed in your IDE.

[TailwindCSS Reference](https://tailwindcss.com/docs/customizing-colors#using-css-variables)

## Customize

These components are designed to be minimal, you can customize and add more styles via CSS.

```css
@layer components {
	.card {
		border: 1px solid theme(borderColor.DEFAULT);
	}
}
```

## Preview

### Button

```html
<button class="button button-primary">Primary</button>
```

<div class="card grid grid-cols-2 gap-4">
	<button class="button button-primary">Primary</button>
	<button class="button button-primary" disabled>Disabled</button>
	<button class="button button-secondary">Secondary</button>
	<button class="button button-secondary" disabled>Disabled</button>
	<button class="button button-ghost">Ghost</button>
	<button class="button button-ghost" disabled>Disabled</button>
	<button class="button button-destructive">Destructive</button>
	<button class="button button-destructive" disabled>Disabled</button>
	<button class="button button-outline">Outline</button>
	<button class="button button-outline" disabled>Disabled</button>
</div>

### Badge

```html
<span class="badge badge-primary">Primary</span>
```

<div class="card flex flex-wrap gap-2">
	<span class="badge badge-primary">Primary</span>
	<span class="badge badge-secondary">Secondary</span>
	<span class="badge badge-destructive">Destructive</span>
	<span class="badge badge-outline">Outline</span>
</div>

### Card

```html
<div class="card">Card</div>
```

<div class="card">
	<h4 class="mt-0">Card</h4>
	<p class="mb-0">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur.
	</p>
</div>

### Input/Label

```html
<label for="textInput" class="label">Text</label>
<input type="text" id="textInput" class="input" placeholder="Placeholder" />
```

<div class="card grid grid-cols-2 gap-4">
	<div>
		<label for="textInput" class="label">Text</label>
		<input type="text" id="textInput" class="input" placeholder="Placeholder" />
	</div>
	<div>
		<label for="passwordInput" class="label">Password</label>
		<input type="password" id="passwordInput" class="input" />
	</div>
	<div>
		<label for="emailInput" class="label">Email</label>
		<input type="email" id="emailInput" class="input" />
	</div>
	<div>
		<label for="urlInput" class="label">URL</label>
		<input type="url" id="urlInput" class="input" />
	</div>
	<div>
		<label for="searchInput" class="label">Search</label>
		<input type="search" id="searchInput" class="input" />
	</div>
	<div>
		<label for="fileInput" class="label">File</label>
		<input type="file" id="fileInput" class="input" />
	</div>
	<div>
		<label for="dateInput" class="label">Date</label>
		<input type="date" id="dateInput" class="input" />
	</div>
	<div>
		<label for="datetime-localInput" class="label">Date Time - Local</label>
		<input type="datetime-local" id="datetime-localInput" class="input" />
	</div>
	<div>
		<label for="monthInput" class="label">Month</label>
		<input type="month" id="monthInput" class="input" />
	</div>
	<div>
		<label for="weekInput" class="label">Week</label>
		<input type="week" id="weekInput" class="input" />
	</div>
	<div>
		<label for="timeInput" class="label">Time</label>
		<input type="time" id="timeInput" class="input" />
	</div>
	<div>
		<label for="numberInput" class="label">Number</label>
		<input type="number" id="numberInput" class="input" />
	</div>
	<div>
		<label for="telInput" class="label">Tel</label>
		<input type="tel" id="telInput" class="input" />
	</div>
	<div>
		<label for="colorInput" class="label">Color</label>
		<input type="color" id="colorInput" class="input" />
	</div>
	<div>
		<div class="flex items-center gap-1">
			<input type="checkbox" class="input" id="checkbox" switch />
			<label for="checkbox" class="label">Checkbox</label>
		</div>
	</div>
	<div>
		<div class="mb-2 flex items-center gap-1">
			<input type="radio" class="input" id="radio1" name="radio" />
			<label for="radio1" class="label">Radio 1</label>
		</div>
		<div class="mb-2 flex items-center gap-1">
			<input type="radio" class="input" id="radio2" name="radio" />
			<label for="radio2" class="label">Radio 2</label>
		</div>
		<div class="flex items-center gap-1">
			<input type="radio" class="input" id="radio3" name="radio" />
			<label for="radio3" class="label">Radio 3</label>
		</div>
	</div>
	<div>
		<label for="range" class="label">Range</label>
		<input type="range" id="range" class="input" />
	</div>
	<div>
		<label for="textarea" class="label">Text Area</label>
		<textarea class="input" id="textarea"></textarea>
	</div>
	<div>
		<label for="select" class="label">Select</label>
		<select class="input" id="select">
			<option value="option1">Option 1</option>
			<option value="option2">Option 2</option>
			<option value="option3">Option 3</option>
		</select>
	</div>
	<div>
		<label for="selectMultiple" class="label">Select Multiple</label>
		<select class="input" id="selectMultiple" multiple>
			<option value="option1">Option 1</option>
			<option value="option2">Option 2</option>
			<option value="option3">Option 3</option>
		</select>
	</div>
</div>

### Link

```html
<a href="https://github.com/rossrobino/uico" class="link">link</a>
```

<div class="card">
	Here's a
	<a href="https://github.com/rossrobino/uico" class="link">link</a> the
	project's GitHub repository.
</div>
