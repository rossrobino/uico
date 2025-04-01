import { ColorGenerator } from "@/pages/color-generator";
import { Home } from "@/pages/home";
import { html } from "client:page";
import { Router } from "ovr";

const app = new Router({
	start(c) {
		c.base = html;
	},
});

app.prerender = ["/", "/color-generator"];

const Head = (props: { title: string; description: string }) => {
	return (
		<>
			<title>{props.title}</title>
			<meta name="description" content={props.description} />
		</>
	);
};

app.get("/", (c) => {
	c.head(
		<Head title="uico" description="Comprehensive Styles with Modern CSS" />,
	);
	c.page(Home);
});

app.get("/color-generator", (c) => {
	c.head(
		<Head
			title="OKLCH Color Generator"
			description="Generate OKLCH color palettes by inputting a hue."
		/>,
	);
	c.page(ColorGenerator);
});

app.get("/oklch", (c) => {
	c.url.pathname = "/color-generator";
	c.url.search = "";
	c.redirect(c.req.url, 301);
});

export default app;
