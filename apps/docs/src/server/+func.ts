import base from "@/content/base.md?raw";
import color from "@/content/color-generator.md?raw";
import overview from "@/content/overview.md?raw";
import prose from "@/content/prose.md?raw";
import theme from "@/content/theme.md?raw";
import { MarkdownProcessor } from "@robino/md";
import { html } from "client:page";
import { html as colorHtml } from "client:page/color-generator";
import type { Prerender } from "domco";
import { Injector } from "domco/injector";
import { Hono } from "hono";
import langBash from "shiki/langs/bash.mjs";
import langCss from "shiki/langs/css.mjs";
import langJs from "shiki/langs/js.mjs";

export const prerender: Prerender = ["/", "/color-generator"];

const markdownProcessor = new MarkdownProcessor({
	highlighter: {
		langs: [langBash, langCss, langJs],
	},
});

const { html: baseHtml } = markdownProcessor.process(base);
const { html: proseHtml } = markdownProcessor.process(prose);
const { html: overviewHtml } = markdownProcessor.process(overview);
const { html: themeHtml } = markdownProcessor.process(theme);
const { html: colorMdHtml } = markdownProcessor.process(color);

const app = new Hono();

app.get("/", async (c) => {
	const page = new Injector(html).comment([
		{ text: "prose", children: proseHtml },
		{ text: "base", children: baseHtml },
		{ text: "overview", children: overviewHtml },
		{ text: "theme", children: themeHtml },
	]);

	return c.html(page.html);
});

app.get("/color-generator", async (c) => {
	const page = new Injector(colorHtml).comment([
		{ text: "content", children: colorMdHtml },
	]);

	return c.html(page.html);
});

// redirects from previous version
app.get("/components/", (c) => c.redirect("/", 301));

app.get("/fonts/", (c) => c.redirect("/", 301));

app.get("/oklch/", (c) => c.redirect("/color-generator", 301));

export const handler = app.fetch;
