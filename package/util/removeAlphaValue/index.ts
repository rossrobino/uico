export const removeAlphaValue = (s: string | undefined) => {
	if (!s) return "";
	return s.split(" / <alpha-value>").join("");
};
