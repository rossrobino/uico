import { html } from "@/content/color-generator.md";
import { Footer } from "@/ui/footer";

export const ColorGenerator = () => {
	return (
		<>
			<header>
				<h2>
					<a href="/">uico</a>
				</h2>
			</header>
			<main class="prose">
				{html}
				<div>
					<color-generator></color-generator>
				</div>
			</main>
			<Footer />
		</>
	);
};
