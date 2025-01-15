import "./flashcard.scss";

export type FlashCard = {
	title: string;
	imgUrl: string;
	description : {
		short: string;
		long: string;
	};
}

export const generateFlashCard = (flashCard: FlashCard) => {

	const article = document.createElement("article");
	article.classList.add("vontils-cards-flashcard");
	const container = article.appendChild(document.createElement("div"));
	container.appendChild(document.createElement("h2")).innerHTML = flashCard.title;
	container.appendChild(document.createElement("h3")).innerHTML = flashCard.description.short;
	
	const img = container.appendChild(document.createElement("img"));
	img.src = flashCard.imgUrl;
	img.alt = "Image unavailible!";

	container.appendChild(document.createElement("p")).innerHTML = flashCard.description.long;

	return article as HTMLElement;
}