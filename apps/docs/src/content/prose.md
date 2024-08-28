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

Lorem ipsum odor amet, consectetuer adipiscing elit. Efficitur magnis lorem morbi curae aenean vestibulum parturient non. Taciti at neque blandit aptent sollicitudin; dignissim senectus hendrerit. Cubilia malesuada mi imperdiet suscipit nisi efficitur risus. Orci lacinia aliquam hendrerit lectus magnis. Etiam id laoreet tempus cubilia pretium. Dis imperdiet lobortis diam aptent varius commodo mauris. Litora facilisi nam in posuere dictumst velit auctor tempus rutrum. Dapibus `torquent` eu phasellus parturient, rhoncus tempor in potenti.

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

![snowbird image](https://images.unsplash.com/photo-1679330133692-603088131844?q=20&w=2871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

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
