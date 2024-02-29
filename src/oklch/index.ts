const toCopy = document.querySelectorAll("button[data-copy]");

for (const button of toCopy) {
	button.addEventListener("click", () => {
		const text = button.getAttribute("data-copy");
		if (text) navigator.clipboard.writeText(text);
	});
}
