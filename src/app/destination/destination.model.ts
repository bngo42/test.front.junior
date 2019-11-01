export interface IDestination {
	id: string;
	name: string;
	description: string;
	country: string;
	priceRange: string;
	rating: number;
	tags: string[];
	img: string;
	bg: string;
	thumbnail: string;
	gallery: string[];
}

export interface IActivity {
	id: string;
	name: string;
	description: string;
	destinationId: string;
	thumbnail: string;
}
