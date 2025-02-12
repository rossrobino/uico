import base from "@/content/base.md?raw";
import color from "@/content/color-generator.md?raw";
import overview from "@/content/overview.md?raw";
import theme from "@/content/theme.md?raw";
import { markdownProcessor } from "@/server/md";
import { Injector } from "@robino/html";
import { html } from "client:page";
import { html as colorHtml } from "client:page/color-generator";
import type { Handler, Prerender } from "domco";

export const prerender: Prerender = ["/", "/color-generator"];

export const handler: Handler = (req) => {
	const url = new URL(req.url);

	if (url.pathname === "/") {
		const { html: overviewHtml } = markdownProcessor.process(overview);
		const { html: themeHtml } = markdownProcessor.process(theme);
		const { html: baseHtml } = markdownProcessor.process(base);

		const page = new Injector(html)
			.comment("overview", overviewHtml)
			.comment("theme", themeHtml)
			.comment("base", baseHtml);

		return new Response(page.toString(), {
			headers: { "Content-Type": "text/html" },
		});
	} else if (url.pathname === "/color-generator") {
		const { html: colorMdHtml } = markdownProcessor.process(color);

		const page = new Injector(colorHtml).main(colorMdHtml, "prepend");

		return new Response(page.toString(), {
			headers: { "Content-Type": "text/html" },
		});
	} else if (url.pathname === "/oklch") {
		url.pathname = "/color-generator";
		url.search = "";

		return Response.redirect(url, 301);
	}

	return new Response("Not found", { status: 404 });
};
