document.addEventListener("DOMContentLoaded", () => {
	const faqItems = document.querySelectorAll(".faq-row");

	faqItems.forEach((item) => {
		const plusBtn = item.querySelector(".plus-image");
		const minusBtn = item.querySelector(".minus-image");
		const answerText = item.querySelector(".faq-answer-text");

		plusBtn.addEventListener("click", () => {
			answerText.style.display = "block";
			plusBtn.style.display = "none";
			minusBtn.style.display = "inline";
		});

		minusBtn.addEventListener("click", () => {
			answerText.style.display = "none";
			minusBtn.style.display = "none";
			plusBtn.style.display = "inline";
		});

		// Initially hide the answer and minus button
		answerText.style.display = "none";
		minusBtn.style.display = "none";
	});
});
