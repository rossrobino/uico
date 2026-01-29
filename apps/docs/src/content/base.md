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
	<div class="flex-row">
		<button class="icon">i</button>
		<button class="icon" disabled>i</button>
	</div>
</div>

### a, .link

Here’s a link to the project’s [GitHub repository](https://github.com/rossrobino/uico).

### .badge

<div class="flex-row">
	<span class="badge">Primary</span>
	<span class="badge secondary">Secondary</span>
	<span class="badge accent">Accent</span>
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
	<fieldset>
		<legend>Select all that apply</legend>
		<div>
			<input type="checkbox" id="checkbox" />
			<label for="checkbox" class="label">Checkbox 1</label>
		</div>
		<div>
			<input type="checkbox" id="checkbox-2" />
			<label for="checkbox-2" class="label">Checkbox 2</label>
		</div>
	</fieldset>
	<fieldset>
		<legend>Switch (Safari)</legend>
		<div>
			<input type="checkbox" id="switch" switch />
			<label for="switch" class="label">Switch 1</label>
		</div>
		<div>
			<input type="checkbox" id="switch-2" switch />
			<label for="switch-2" class="label">Switch 2</label>
		</div>
	</fieldset>
	<fieldset>
		<legend>Choose one</legend>
		<div>
			<input type="radio" id="radio1" name="radio" />
			<label for="radio1" class="label">Radio 1</label>
		</div>
		<div>
			<input type="radio" id="radio2" name="radio" />
			<label for="radio2" class="label">Radio 2</label>
		</div>
		<div>
			<input type="radio" id="radio3" name="radio" />
			<label for="radio3" class="label">Radio 3</label>
		</div>
	</fieldset>
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

### .prose

Base styles for many common elements, mainly font styles, are included without any extra configuration. Apply the `prose` class to add spacing and other styles to make it easier to read.

Here's a sample of what different elements look like with the `prose` class applied.

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

Lorem, ipsum dolor sit amet [consectetur](#) adipisicing elit. `Dolores cupiditate` facilis nemo pariatur quae delectus, earum dolore asperiores. Id ad `excepturi iusto` commodi at totam placeat quasi facere officia in.

- Facilisi sed nunc et mi nascetur efficitur.
  - Etiam id laoreet tempus
- Imperdiet conubia viverra dignissim pulvinar semper.

  Litora facilisi nam in posuere dictumst velit auctor tempus rutrum.
  - Orci lacinia aliquam hendrerit lectus magnis.
  - Cubilia malesuada mi imperdiet suscipit nisi efficitur risus.

- Platea fringilla tempor risus, tellus porta laoreet fringilla.

1. Quis hendrerit netus nullam dui sagittis ultricies est duis.
2. Parturient fringilla viverra proin cras convallis velit.
3. Aptent ultrices felis finibus ante venenatis placerat.

#### Lorem `ipsum`

Lorem ipsum odor amet, consectetuer adipiscing elit. Efficitur magnis lorem morbi curae aenean vestibulum parturient non. Taciti at neque blandit aptent sollicitudin; dignissim senectus hendrerit. Cubilia malesuada mi imperdiet suscipit nisi efficitur risus. Orci lacinia aliquam hendrerit lectus magnis.

Etiam id laoreet tempus cubilia pretium. Dis imperdiet lobortis diam aptent varius commodo mauris. Litora facilisi nam in posuere dictumst velit auctor tempus rutrum. Dapibus `torquent` eu phasellus parturient, rhoncus tempor in potenti.

<dl>
  <dt>Diam bibendum mus pellentesque cras curabitur facilisi;</dt>
  <dd>
	Ullamcorper vivamus malesuada ut finibus parturient accumsan arcu lacinia consectetur. Faucibus interdum luctus conubia tempor pellentesque diam vivamus est. Pharetra vivamus taciti ex massa commodo pretium senectus? Porttitor elit et porttitor cursus enim aptent torquent sapien.
  </dd>
  <dt>Morbi ligula volutpat erat mollis blandit proin purus.</dt>
  <dd>
	Orci lacinia aliquam hendrerit lectus magnis.
  </dd>
</dl>

Ullamcorper vivamus `malesuada ut finibus` parturient accumsan arcu lacinia consectetur. Faucibus interdum luctus conubia tempor pellentesque diam vivamus est. Pharetra vivamus taciti ex massa commodo pretium senectus? Porttitor elit et porttitor cursus enim aptent torquent sapien. Dictum varius finibus, parturient dolor eros etiam fringilla. Laoreet nunc eros venenatis, eget nec ligula donec. Morbi ligula volutpat erat mollis blandit proin purus.

> Diam bibendum mus pellentesque cras curabitur facilisi; urna facilisis? Interdum venenatis finibus cubilia nisl pretium. Per nascetur scelerisque lacus rhoncus varius inceptos nullam!

<img src="https://images.unsplash.com/photo-1679330133692-603088131844?q=20&w=2871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="snowbird view" loading="lazy">

<table>
	<thead>
		<tr>
			<th>Lorem</th>
			<th>Ipsum</th>
			<th>Dolor</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>sit</td>
			<td>amet</td>
			<td>consectetur</td>
		</tr>
		<tr>
			<td>adipisicing</td>
			<td>elit</td>
			<td>Dolores</td>
		</tr>
		<tr>
			<td>cupiditate</td>
			<td>facilis</td>
			<td>nemo</td>
		</tr>
	</tbody>
</table>

```css
/* this sample uses the base colors to highlight codeblocks with shiki */
:root {
	--shiki-foreground: var(--base-100);
	--shiki-background: var(--base-900);
	--shiki-token-constant: var(--base-50);
	--shiki-token-string: var(--base-300);
	--shiki-token-comment: var(--base-400);
	--shiki-token-keyword: var(--base-400);
	--shiki-token-parameter: var(--base-300);
	--shiki-token-function: var(--base-300);
	--shiki-token-string-expression: var(--base-200);
	--shiki-token-punctuation: var(--base-500);
	--shiki-token-link: var(--base-300);
}
```
