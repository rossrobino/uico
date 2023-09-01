import md from "$site/md/README.md?raw";
import { marked } from "marked";

export const load = async () => {
	const readMe = marked.parse(md);
	return { readMe };
};
