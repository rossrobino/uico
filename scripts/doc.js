import fs from "fs/promises";
import { marked } from "marked";

// copy readme into index.html between the comments
const md = await fs.readFile("README.md", "utf-8");
let readme = marked.parse(md);
const comment = "<!-- README -->";
let html = await fs.readFile("site/index.html", "utf-8");
html = html.split(comment);
html[1] = readme;
html = html.join(comment);
await fs.writeFile("site/index.html", html);
