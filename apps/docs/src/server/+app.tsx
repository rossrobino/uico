import * as color from "@/pages/color-generator";
import * as home from "@/pages/home";
import { html } from "client:page";
import { App } from "ovr";

const app = new App();

app.base = html;

app.prerender = [home.page.pattern, color.page.pattern];

app.get("/oklch", (c) => {
	c.url.pathname = color.page.pattern;
	c.url.search = "";
	c.redirect(c.req.url, 301);
});

app.add(home, color);

export default app;
