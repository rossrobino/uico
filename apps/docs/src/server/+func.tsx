import { ColorGenerator } from "@/pages/color-generator";
import { Home } from "@/pages/home";
import { Router } from "@robino/router";
import { html } from "client:page";
import type { Handler, Prerender } from "domco";

export const prerender: Prerender = ["/", "/color-generator"];

const router = new Router({
	start(c) {
		c.base = html;
	},
});

const Head = (props: { title: string; description: string }) => {
	return (
		<>
			<title>{props.title}</title>
			<meta name="description" content={props.description} />
		</>
	);
};

router.get("/", (c) => {
	c.head(
		<Head title="uico" description="Comprehensive Styles with Modern CSS" />,
	);
	c.page(Home);
});

router.get("/color-generator", (c) => {
	c.head(
		<Head
			title="OKLCH Color Generator"
			description="Generate OKLCH color palettes by inputting a hue."
		/>,
	);
	c.page(ColorGenerator);
});

router.get("/oklch", (c) => {
	c.url.pathname = "/color-generator";
	c.url.search = "";
	c.redirect(c.req.url, 301);
});

export const handler: Handler = router.fetch;
