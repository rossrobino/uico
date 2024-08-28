import md from "@/content/color-generator.md?raw";
import { processMarkdown } from "@robino/md";
import type { Prerender } from "domco";
import { Injector } from "domco/injector";
import { Hono } from "hono";

export const prerender: Prerender = true;

const app = new Hono();

app.get("/", async (c) => {
	const { html } = await processMarkdown({ md });
	return c.html(
		new Injector(c.var.page())
			.comment([{ text: "content", children: html }])
			.toString(),
	);
});

export default app;
