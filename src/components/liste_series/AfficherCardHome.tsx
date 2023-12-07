import React, { useEffect, useState } from "react";
import CardHome from "./CardHome";
import { getMovies } from "../../data/api";

interface SeriesList {
  id: number;
  image: string;
  name: string;
  category: string;
  description: string;
}

const Home: React.FC = () => {
  const [seriesList, setSeriesList] = useState<SeriesList[]>([]);
  const [featuredSeries, setFeaturedSeries] = useState<SeriesList>({
    id: 0,
    image: '',
    name: '',
    category: '',
    description: '',
  });

  // ...

useEffect(() => {
  // Fetch data from your API here
  const fetchData = async () => {
    try {
      const moviesData = await getMovies();

      // Set the seriesList and featuredSeries state based on API response
      setSeriesList(moviesData.results.map((movie: { id: any; poster_path: any; title: any; overview: any; }) => ({
        id: movie.id,
        image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        name: movie.title,
        category: "Drame", // You may need to get the actual category from your API
        description: movie.overview,
      })));

      // For the sake of this example, let's use the first movie as the featured series
      setFeaturedSeries({
        id: moviesData.results[0].id,
        image: `https://image.tmdb.org/t/p/w500${moviesData.results[0].poster_path}`,
        name: moviesData.results[0].title,
        category: "Drame", // You may need to get the actual category from your API
        description: moviesData.results[0].overview,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []); // Empty dependency array to run the effect only once when the component mounts

// ...

  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600&family=DM+Serif+Display&family=Lora:wght@500&family=Montserrat:wght@300&display=swap');
      </style>

      <div className="w-full h-full object-cover pl-12 px-12 mt-24">
        <CardHome seriesData={featuredSeries} />
      </div>
      <div className="pl-12 px-12">
        <h1 className="text-5xl font-custom font-bold mb-4 mt-24 text-white pb-12">Shows populaires</h1>
        <div className="grid grid-cols-5 gap-12">
          {seriesList.map(series => (
            <CardHome key={series.id} seriesData={series} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
