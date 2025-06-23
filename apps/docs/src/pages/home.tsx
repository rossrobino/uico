import { html as baseHtml } from "@/content/base.md";
import { html as overviewHtml } from "@/content/overview.md";
import { html as themeHtml } from "@/content/theme.md";
import { Footer } from "@/ui/footer";
import { Head } from "@/ui/head";
import { Chunk, Get } from "ovr";

export const page = new Get("/", (c) => {
	c.head(
		<Head title="uico" description="Comprehensive Styles with Modern CSS" />,
	);

	return (
		<>
			<header>
				<drab-dialog click-outside-close>
					<h2>
						<a href="#">uico</a>
					</h2>

					<button
						data-trigger
						type="button"
						class="ghost icon"
						title="Edit Theme"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<line x1="4" x2="20" y1="12" y2="12" />
							<line x1="4" x2="20" y1="6" y2="6" />
							<line x1="4" x2="20" y1="18" y2="18" />
						</svg>
					</button>

					<dialog data-content>
						<div>
							<theme-header>
								<h2>Theme</h2>
								<button data-trigger type="button" class="ghost" title="Close">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path d="M18 6 6 18" />
										<path d="m6 6 12 12" />
									</svg>
								</button>
							</theme-header>

							<theme-input>
								<div>
									<theme-picker
										prop="base"
										type="color"
										value="#637389"
									></theme-picker>
									<theme-picker
										prop="accent"
										type="color"
										value="#2A7392"
									></theme-picker>
									<theme-picker
										prop="destructive"
										type="color"
										value="#CB304A"
									></theme-picker>
								</div>

								<div>
									<theme-picker
										prop="light-start"
										type="number"
										value="0.995"
									></theme-picker>
									<theme-picker
										prop="light-end"
										type="number"
										value="0.1"
									></theme-picker>
								</div>

								<div>
									<theme-picker
										prop="chroma-start"
										type="number"
										value="0.005"
									></theme-picker>
									<theme-picker
										prop="chroma-end"
										type="number"
										value="0.035"
									></theme-picker>
								</div>

								<div>
									<theme-picker
										prop="border-radius"
										type="px"
										value="2"
									></theme-picker>
								</div>
							</theme-input>
						</div>
					</dialog>
				</drab-dialog>
			</header>

			<main class="prose">
				<section>{new Chunk(overviewHtml, true)}</section>
				<section>
					{new Chunk(themeHtml, true)}
					<div>
						<theme-edit>
							<button class="secondary">Edit Theme</button>
						</theme-edit>
					</div>
					<theme-code>
						<pre>
							<code></code>
						</pre>
					</theme-code>
					<color-palette>
						<color-swatch style="background-color: var(--base-50)"></color-swatch>
						<color-swatch style="background-color: var(--base-100)"></color-swatch>
						<color-swatch style="background-color: var(--base-200)"></color-swatch>
						<color-swatch style="background-color: var(--base-300)"></color-swatch>
						<color-swatch style="background-color: var(--base-400)"></color-swatch>
						<color-swatch style="background-color: var(--base-500)"></color-swatch>
						<color-swatch style="background-color: var(--base-600)"></color-swatch>
						<color-swatch style="background-color: var(--base-700)"></color-swatch>
						<color-swatch style="background-color: var(--base-800)"></color-swatch>
						<color-swatch style="background-color: var(--base-900)"></color-swatch>
						<color-swatch style="background-color: var(--base-950)"></color-swatch>
					</color-palette>
				</section>
				<section>{new Chunk(baseHtml, true)}</section>
			</main>
			<Footer />
		</>
	);
});
