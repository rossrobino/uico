import base from "@/content/base.md?raw";
import color from "@/content/color-generator.md?raw";
import overview from "@/content/overview.md?raw";
import prose from "@/content/prose.md?raw";
import theme from "@/content/theme.md?raw";
import { markdownProcessor } from "@/server/md";
import { Injector } from "@robino/html";
import { html } from "client:page";
import { html as colorHtml } from "client:page/color-generator";
import type { Handler, Prerender } from "domco";

export const prerender: Prerender = ["/", "/color-generator"];

export const handler: Handler = (req) => {
	const { pathname } = new URL(req.url);

	if (pathname === "/") {
		const { html: baseHtml } = markdownProcessor.process(base);
		const { html: proseHtml } = markdownProcessor.process(prose);
		const { html: overviewHtml } = markdownProcessor.process(overview);
		const { html: themeHtml } = markdownProcessor.process(theme);

		const page = new Injector(html)
			.comment("prose", proseHtml)
			.comment("base", baseHtml)
			.comment("overview", overviewHtml)
			.comment("theme", themeHtml);

		return new Response(page.toString(), {
			headers: { "Content-Type": "text/html" },
		});
	} else if (pathname === "/color-generator") {
		const { html: colorMdHtml } = markdownProcessor.process(color);

		const page = new Injector(colorHtml).comment("content", colorMdHtml);

		return new Response(page.toString(), {
			headers: { "Content-Type": "text/html" },
		});
	}

	return new Response("Not found", { status: 404 });
};
