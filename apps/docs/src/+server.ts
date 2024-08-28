import base from "@/content/base.md?raw";
import overview from "@/content/overview.md?raw";
import prose from "@/content/prose.md?raw";
import theme from "@/content/theme.md?raw";
import { processMarkdown } from "@robino/md";
import type { Prerender } from "domco";
import { Injector } from "domco/injector";
import { Hono } from "hono";

export const prerender: Prerender = true;

const app = new Hono();

app.get("/", async (c) => {
	const { html: baseHtml } = await processMarkdown({ md: base });
	const { html: proseHtml } = await processMarkdown({ md: prose });
	const { html: overviewHtml } = await processMarkdown({ md: overview });
	const { html: themeHtml } = await processMarkdown({ md: theme });

	const page = new Injector(c.var.page()).comment([
		{ text: "prose", children: proseHtml },
		{ text: "base", children: baseHtml },
		{ text: "overview", children: overviewHtml },
		{ text: "theme", children: themeHtml },
	]);

	return c.html(page.toString());
});

export default app;
