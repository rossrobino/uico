import * as color from "@/pages/color-generator";
import * as home from "@/pages/home";
import { App } from "ovr";

const app = new App();

app.use(home, color);

export default {
	fetch: app.fetch,
	prerender: () => {
		return [home.page.pathname(), color.color.pathname()];
	},
};
