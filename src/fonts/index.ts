const form = document.querySelector("form");
const article = document.querySelector("article");

if (article && form) {
	form.addEventListener("change", (e) => {
		if (e.target instanceof HTMLInputElement) {
			article.className = e.target.value;
		}
	});
}
