## Base

Base styles are added to the elements in your application. There are also classes to apply these styles to other elements if needed. For example, when you need to style a link as a button, apply the `button` class to it.

### button, .button

<div class="flex-col">
	<div class="flex-row">
		<button>Primary</button>
		<button disabled>Disabled</button>
	</div>
	<div class="flex-row">
		<button class="secondary">Secondary</button>
		<button class="secondary" disabled>Disabled</button>
	</div>
	<div class="flex-row">
		<button class="accent">Accent</button>
		<button class="accent" disabled>Disabled</button>
	</div>
	<div class="flex-row">
		<button class="destructive">Destructive</button>
		<button class="destructive" disabled>Disabled</button>
	</div>
	<div class="flex-row">
		<button class="ghost">Ghost</button>
		<button class="ghost" disabled>Disabled</button>
	</div>
	<div class="flex-row">
		<button class="outline">Outline</button>
		<button class="outline" disabled>Disabled</button>
	</div>
</div>

### a, .link

Here’s a link to the project’s [GitHub repository](https://github.com/rossrobino/uico).

### .badge

<div class="flex-row">
	<span class="badge">Primary</span>
	<span class="badge secondary">Secondary</span>
	<span class="badge accent">Accent</span>
	<span class="badge secondary">Secondary</span>
	<span class="badge destructive">Destructive</span>
	<span class="badge ghost">Ghost</span>
	<span class="badge outline">Outline</span>
</div>

### input, .input

<div class="grid">
	<div>
		<label for="textInput" class="label">Text</label>
		<input type="text" id="textInput" placeholder="Placeholder" />
	</div>
	<div>
		<label for="passwordInput" class="label">Password</label>
		<input type="password" id="passwordInput" />
	</div>
	<div>
		<label for="emailInput" class="label">Email</label>
		<input type="email" id="emailInput" />
	</div>
	<div>
		<label for="urlInput" class="label">URL</label>
		<input type="url" id="urlInput" />
	</div>
	<div>
		<label for="searchInput" class="label">Search</label>
		<input type="search" id="searchInput" />
	</div>
	<div>
		<label for="fileInput" class="label">File</label>
		<input type="file" id="fileInput" />
	</div>
	<div>
		<label for="dateInput" class="label">Date</label>
		<input type="date" id="dateInput" />
	</div>
	<div>
		<label for="datetime-localInput" class="label">
			Date Time - Local
		</label>
		<input type="datetime-local" id="datetime-localInput" />
	</div>
	<div>
		<label for="monthInput" class="label">Month</label>
		<input type="month" id="monthInput" />
	</div>
	<div>
		<label for="weekInput" class="label">Week</label>
		<input type="week" id="weekInput" />
	</div>
	<div>
		<label for="timeInput" class="label">Time</label>
		<input type="time" id="timeInput" />
	</div>
	<div>
		<label for="numberInput" class="label">Number</label>
		<input type="number" id="numberInput" />
	</div>
	<div>
		<label for="telInput" class="label">Tel</label>
		<input type="tel" id="telInput" />
	</div>
	<div>
		<label for="colorInput" class="label">Color</label>
		<input type="color" id="colorInput" />
	</div>
	<div>
		<div class="flex-row">
			<input type="checkbox" id="checkbox" />
			<label for="checkbox" class="label">Checkbox</label>
		</div>
		<div class="flex-row">
			<input type="checkbox" id="switch" switch />
			<label for="switch" class="label">Switch (safari)</label>
		</div>
	</div>
	<div>
		<div class="flex-row">
			<input type="radio" id="radio1" name="radio" />
			<label for="radio1" class="label">Radio 1</label>
		</div>
		<div class="flex-row">
			<input type="radio" id="radio2" name="radio" />
			<label for="radio2" class="label">Radio 2</label>
		</div>
		<div class="flex-row">
			<input type="radio" id="radio3" name="radio" />
			<label for="radio3" class="label">Radio 3</label>
		</div>
	</div>
	<div>
		<label for="range" class="label">Range</label>
		<input type="range" id="range" />
	</div>
	<div>
		<label for="textarea" class="label">Text Area</label>
		<textarea id="textarea"></textarea>
	</div>
	<div>
		<label for="select" class="label">Select</label>
		<select id="select">
			<option value="option1">Option 1</option>
			<option value="option2">Option 2</option>
			<option value="option3">Option 3</option>
		</select>
	</div>
	<div>
		<label for="selectMultiple" class="label">Select Multiple</label>
		<select id="selectMultiple" multiple>
			<option value="option1">Option 1</option>
			<option value="option2">Option 2</option>
			<option value="option3">Option 3</option>
		</select>
	</div>
</div>
