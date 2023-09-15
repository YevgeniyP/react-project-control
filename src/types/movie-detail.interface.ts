import { GenreInterface } from ".";

export interface MovieDetailInterface {
	id: number;
	title: string;
	original_title: string;
	poster_path: string;
	backdrop_path: string;
	adult: false;
	budget: number;
	genres: GenreInterface[];
	homepage: string;
	imdb_id: string;
	original_language: string;
	overview: string;
	popularity: number;
	// [ ] add interface for production company
	production_companies: [
		{
			id: 56242;
			logo_path: "/1YORRYmg7hgYIgoJek8jU3cykuQ.png";
			name: "Apelles Entertainment";
			origin_country: "US";
		},
		{
			id: 174;
			logo_path: "/IuAlhI9eVC9Z8UQWOIDdWRKSEJ.png";
			name: "Warner Bros. Pictures";
			origin_country: "US";
		},
		{
			id: 435;
			logo_path: "/AjzK0s2w1GtLfR4hqCjVSYi0Sr8.png";
			name: "di Bonaventura Pictures";
			origin_country: "US";
		},
		{
			id: 92484;
			logo_path: "/dfWwoWRp8snHjzDKO5IFkiCAUe7.png";
			name: "CMC Pictures";
			origin_country: "CN";
		},
		{
			id: 208093;
			logo_path: null;
			name: "DF Pictures";
			origin_country: "";
		},
		{
			id: 208094;
			logo_path: null;
			name: "Onaroll Productions";
			origin_country: "";
		}
	];
	// [ ] add interface for production country
	production_countries: [
		{
			iso_3166_1: "CN";
			name: "China";
		},
		{
			iso_3166_1: "US";
			name: "United States of America";
		}
	];
	release_date: Date;
	revenue: number;
	runtime: number;

	// spoken_languages: [
	// 	{
	// 		english_name: "English";
	// 		iso_639_1: "en";
	// 		name: "English";
	// 	}
	// ];

	status: string;
	tagline: string;
	video: false;
	vote_average: number;
	vote_count: number;

	// belongs_to_collection: {
	// 	id: 742536;
	// 	name: "The Meg Collection";
	// 	poster_path: "/7sAnVGMn5he5NZBZCE6fhDpA7fl.jpg";
	// 	backdrop_path: "/rNoyJmjdhgn30bVbvd8n3DJMocB.jpg";
	// };
}
