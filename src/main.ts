import { FlashCard, generateFlashCard } from './sass/components/FlashCard/flashcard';
import './sass/main.scss'

const main = document.querySelector("main") as HTMLElement;


const cards: FlashCard[] = [
	{
		title: 'Cow',
		imgUrl: './public/Images/CowPicture_Pexels.jpg',
		description: {
			short: 'The mooooost beautiful of them all!',
			long: `A cow is a large, herbivorous mammal with a sturdy build, 
			a broad head, and a pair of curved horns (in many breeds). 
			Covered in a coat of black, white, brown, or a mix of these, 
			cows are known for their gentle demeanor. 
			They are domesticated for milk, meat, and leather and are key to agriculture. 
			Cows chew cud, a process that aids digestion, and are often seen grazing in fields. 
			Their deep "moo" is a familiar sound in rural areas.`
		}
	},
	{
		title: 'Chicken',
		imgUrl: './public/Images/ChickenPicture_Pexels.jpg',
		description: {
			short: 'Mind your own beakness!',
			long: `A chicken is a small, feathered bird with a plump body, sharp beak, and clawed feet.
			 Hens (females) are raised for their eggs, while roosters (males) are known for their loud crowing. 
			 Chickens come in various colors, such as white, brown, and speckled patterns.
			They forage for seeds, insects, and grains, scratching the ground with their claws, 
			and are among the most widespread domesticated animals worldwide.`
		}
	}
];


main.appendChild(generateFlashCard(cards[0]));
main.appendChild(generateFlashCard(cards[1]));