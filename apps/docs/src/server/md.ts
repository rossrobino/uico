import { MarkdownProcessor } from "@robino/md";
import langBash from "shiki/langs/bash.mjs";
import langCss from "shiki/langs/css.mjs";
import langHtml from "shiki/langs/html.mjs";
import langJs from "shiki/langs/js.mjs";

export const markdownProcessor = new MarkdownProcessor({
	highlighter: {
		langs: [langBash, langCss, langJs, langHtml],
	},
});
