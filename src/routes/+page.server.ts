import { process } from "robino/util/md";
import md from "$lib/README.md?raw";

export const load = async () => {
	const { html: readMe } = process(md);
	return { readMe };
};
