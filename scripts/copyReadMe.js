import fs from "fs/promises";

await fs.copyFile("./src/lib/README.md", "README.md");

console.log("Copied README");
