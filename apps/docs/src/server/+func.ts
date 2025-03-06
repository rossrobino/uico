import base from "@/content/base.md?raw";
import color from "@/content/color-generator.md?raw";
import overview from "@/content/overview.md?raw";
import theme from "@/content/theme.md?raw";
import { processor } from "@/server/md";
import { Page } from "@robino/html";
import { Router } from "@robino/router";
import { html } from "client:page";
import { html as colorHtml } from "client:page/color-generator";
import type { Handler, Prerender } from "domco";

export const prerender: Prerender = ["/", "/color-generator"];

const router = new Router();

router.get("/", async (c) => {
	const { html: overviewHtml } = await processor.process(overview);
	const { html: themeHtml } = await processor.process(theme);
	const { html: baseHtml } = await processor.process(base);

	const page = new Page(html)
		.inject("section-overview", overviewHtml)
		.inject("section-theme", themeHtml)
		.inject("section-base", baseHtml);

	c.res = page.toResponse();
});

router.get("/color-generator", async (c) => {
	const { html: colorMdHtml } = await processor.process(color);

	const page = new Page(colorHtml).inject("section-about", colorMdHtml);

	c.res = page.toResponse();
});

router.get("/oklch", (c) => {
	c.url.pathname = "/color-generator";
	c.url.search = "";

	c.res = Response.redirect(c.url, 301);
});

export const handler: Handler = router.fetch;
