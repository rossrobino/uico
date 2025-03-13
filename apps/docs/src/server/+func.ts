import { html as baseHtml } from "@/content/base.md";
import { html as colorMdHtml } from "@/content/color-generator.md";
import { html as overviewHtml } from "@/content/overview.md";
import { html as themeHtml } from "@/content/theme.md";
import { Router } from "@robino/router";
import { html } from "client:page";
import { html as colorHtml } from "client:page/color-generator";
import type { Handler, Prerender } from "domco";

export const prerender: Prerender = ["/", "/color-generator"];

const router = new Router({ html });

router.get("/", (c) => {
	c.res.html((p) => {
		p.inject("section-overview", overviewHtml)
			.inject("section-theme", themeHtml)
			.inject("section-base", baseHtml);
	});
});

router.get("/color-generator", (c) => {
	c.res.html(colorHtml, (p) => {
		p.inject("section-about", colorMdHtml);
	});
});

router.get("/oklch", (c) => {
	c.req.url.pathname = "/color-generator";
	c.req.url.search = "";
	c.res.redirect(c.req.url, 301);
});

export const handler: Handler = router.fetch;
