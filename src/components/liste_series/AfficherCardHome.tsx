import React from "react";
import CardHome from "./CardHome";

interface SeriesList {
  id: number;
  image: string;
  name: string;
  category: string;
  description: string;
}

const Home: React.FC = () => {
  // Replace with data from your API
  const seriesList: SeriesList[] = [
    {
      id: 1,
      image: require('../../assets/images/img_film1.jpeg'),
      name: "Matrix",
      category: "Action",
      description:"",
    },
    {
      id: 2,
      image: require('../../assets/images/img_film2.jpeg'),
      name: "Babylon",
      category: "Comédie",
      description:"",

    },
    {
      id: 3,
      image: require('../../assets/images/img_film3.jpeg'),
      name: "The last of us",
      category: "Drame",
      description:"",

    },
    {
      id: 4,
      image: require('../../assets/images/img_film4.jpeg'),
      name: "Gladiator",
      category: "Historique",
      description:"",

    },

   
  ];

  const featuredSeries: SeriesList = {
    id: 5,
    image: '',
    name: 'Série à la une',
    category: 'Drame',
    description: 'Une description captivante de la série à la une.',
  };

  return (
    <><style>
     @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600&family=DM+Serif+Display&family=Lora:wght@500&family=Montserrat:wght@300&display=swap');
    </style>
    

        <div className="w-full h-full object-cover pl-12 px-12">
          <CardHome seriesData={featuredSeries} />
        </div>
        <div className="pl-12">
        <h1 className="text-5xl font-custom font-bold mb-4 mt-24 text-white">Séries populaires</h1>
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
