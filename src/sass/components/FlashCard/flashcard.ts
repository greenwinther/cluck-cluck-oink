import "./flashcard.scss";

export type FlashCard = {
	title: string;
	imgUrl: string;
	description : {
		short: string;
		long: string;
	};
}

const unflippedSass = "vontils-card-unflipped";
const unselectableSass = "vontils-card-unselectable";

export const generateFlashCard = (flashCard: FlashCard) => {

	const article = document.createElement("article");
	article.classList.add("vontils-cards-flashcard", unflippedSass, unselectableSass);
	article.appendChild(document.createElement("h2")).innerHTML = flashCard.title;
	article.appendChild(document.createElement("h3")).innerHTML = flashCard.description.short;
	
	const img = article.appendChild(document.createElement("img"));
	img.src = flashCard.imgUrl;
	img.alt = "Image unavailible!";

	article.appendChild(document.createElement("p")).innerHTML = flashCard.description.long;

	article.addEventListener('click', () => {
		if(article.classList.contains(unflippedSass))
			article.classList.remove(unflippedSass);
		else
			article.classList.add(unflippedSass);
	});

	return article as HTMLElement;
}


/* Rendered HTML
<article class="vontils-cards-flashcard">
	<h2>Title</h2>
	<h3>Short description</h3>
	<img src="Image Url" alt="Image unavailible!">
	<p>
		Long description
	</p>
</article>
*/