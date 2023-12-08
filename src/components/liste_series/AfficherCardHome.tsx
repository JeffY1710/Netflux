import React, { useEffect, useState } from "react";
import CardHome from "./CardHome";
import { getGenres, getSeries } from "../../data/api";
import { addSerie } from "../../data/firebase/global";
import Header from "../common/Header";

interface SeriesList {
	id: number;
	image: string;
	name: string;
	category: number[];
	description: string;
}

const Home: React.FC = () => {
	const [seriesList, setSeriesList] = useState<SeriesList[]>([]);
	const [genresList, setGenresList] = useState<any>([]);
	const [featuredSeries, setFeaturedSeries] = useState<SeriesList>({
		id: 0,
		image: "",
		name: "",
		category: [],
		description: "",
	});

	// ...

	const getGenreName = (id: number) => {
		console.log(genresList);
		const name = genresList.filter((genre: any) => genre.id === id)[0].name;
		return name;
	};

	useEffect(() => {
		// Fetch data from your API here
		console.log(getGenres());

		const fetchData = async () => {
			try {
				const seriesData = await getSeries();
				const genres = await getGenres();
				setGenresList(genres.genres);
				console.log(seriesData);
				// Set the seriesList and featuredSeries state based on API response
				setSeriesList(
					seriesData.results.map(
						(serie: {
							id: any;
							poster_path: any;
							title: any;
							genre_ids: string[];
							overview: any;
						}) => ({
							id: serie.id,
							image: `https://image.tmdb.org/t/p/w500${serie.poster_path}`,
							name: serie.title,
							category: serie.genre_ids, // You may need to get the actual category from your API
							description: serie.overview,
						})
					)
				);

				// For the sake of this example, let's use the first movie as the featured series
				setFeaturedSeries({
					id: seriesData.results[0].id,
					image: `https://image.tmdb.org/t/p/w500${seriesData.results[0].poster_path}`,
					name: seriesData.results[0].title,
					category: seriesData.results[0].genre_ids,
					description: seriesData.results[0].overview,
				});
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []); // Empty dependency array to run the effect only once when the component mounts

	return (
		<>
			<style>
				@import
				url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600&family=DM+Serif+Display&family=Lora:wght@500&family=Montserrat:wght@300&display=swap');
			</style>
      <Header/>

			<div className='w-full h-full object-cover pl-12 px-12 mt-24'>
				{featuredSeries.category[0] && (
					<CardHome
						seriesData={featuredSeries}
						genreName={getGenreName(featuredSeries.category[0])}
					/>
				)}
			</div>
			<div className='pl-12 px-12'>
				<h1 className='text-5xl font-custom font-bold mb-4 mt-24 text-white pb-12'>
					Shows populaires
				</h1>
				<div className='grid grid-cols-5 gap-12'>
					{seriesList.map(
						(series) =>
							series.category[0] && (
								<CardHome
									key={series.id}
									seriesData={series}
									genreName={getGenreName(series.category[0])}
								/>
							)
					)}
				</div>
			</div>
		</>
	);
};

export default Home;
