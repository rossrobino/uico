import { ColorGenerator } from "@/client/components/color-generator";
import { ColorSwatch } from "@/client/components/color-swatch";
import * as theme from "@/client/components/theme";
import "@/client/components/theme";
import "drab/dialog/define";

customElements.define("color-swatch", ColorSwatch);
customElements.define("color-generator", ColorGenerator);
customElements.define("theme-picker", theme.Picker);
customElements.define("theme-edit", theme.Edit);
