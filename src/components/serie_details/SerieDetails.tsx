import React from "react";
import CardHome from "../liste_series/CardHome";
import CardDetail from "./CardDetail";


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
      image: require('../../assets/images/img_film3.jpeg'),
      name: "Episode 1",
      category: "",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sem purus, rutrum quis libero facilisis, pellentesque fermentum nunc. Pellentesque at quam finibus,",
    },
    {
      id: 2,
      image: require('../../assets/images/img_film3.jpeg'),
      name: "Episode 2",
      category: "",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sem purus, rutrum quis libero facilisis, pellentesque fermentum nunc. Pellentesque at quam finibus,",

    },
    {
      id: 3,
      image: require('../../assets/images/img_film3.jpeg'),
      name: "Episode 3",
      category: "",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sem purus, rutrum quis libero facilisis, pellentesque fermentum nunc. Pellentesque at quam finibus,",

    },
    {
      id: 4,
      image: require('../../assets/images/img_film3.jpeg'),
      name: "Episode 4",
      category: "",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sem purus, rutrum quis libero facilisis, pellentesque fermentum nunc. Pellentesque at quam finibus,",

    },

   
  ];

  

  return (
    <><style>
     @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600&family=DM+Serif+Display&family=Lora:wght@500&family=Montserrat:wght@300&display=swap');
    </style>
    

        <div className="w-full h-full object-cover pl-12 px-12">
        </div>
        <div className="pl-12">
        <h1 className="text-5xl font-custom font-bold mb-4 mt-24 text-white">Episodes</h1>
        <div className="grid grid-cols-3 gap-12">
          {seriesList.map(series => (
            <CardDetail key={series.id} seriesData={series} />
          ))}
          </div>
        </div>
      </>
  );
};

export default Home;

