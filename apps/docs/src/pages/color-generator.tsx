import { html } from "@/content/color-generator.md";
import { Footer } from "@/ui/footer";
import { Head } from "@/ui/head";
import { Chunk, Page } from "ovr";

export const page = new Page("/color-generator", (c) => {
	c.head(
		<Head
			title="OKLCH Color Generator"
			description="Generate OKLCH color palettes by inputting a hue."
		/>,
	);

	return (
		<>
			<header>
				<h2>
					<a href="/">uico</a>
				</h2>
			</header>
			<main class="prose">
				{new Chunk(html, true)}
				<div>
					<color-generator></color-generator>
				</div>
			</main>
			<Footer />
		</>
	);
});
