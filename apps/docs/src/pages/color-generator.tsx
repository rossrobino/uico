import { html } from "@/content/color-generator.md";
import { Layout } from "@/pages/layout";
import { Footer } from "@/ui/footer";
import { Head } from "@/ui/head";
import { Render, Route } from "ovr";

export const color = Route.get("/color-generator", () => {
	return (
		<Layout
			head={
				<Head
					title="OKLCH Color Generator"
					description="Generate OKLCH color palettes by inputting a hue."
				/>
			}
		>
			<header>
				<h2>
					<a href="/">uico</a>
				</h2>
			</header>
			<main class="prose">
				{Render.html(html)}
				<div>
					<color-generator></color-generator>
				</div>
			</main>
			<Footer />
		</Layout>
	);
});

export const redirect = Route.get("/oklch", (c) => {
	c.url.pathname = color.pathname();
	c.url.search = "";
	c.redirect(c.req.url, 301);
});
