// CardComponent.tsx

import Image from 'react';

interface SeriesData {
  id: number;
  image: string;
  name: string;
  category: string;
}

interface CardProps {
  seriesData: SeriesData;
}

const CardHome: React.FC<CardProps> = ({ seriesData }) => {
  const { image, name, category } = seriesData;

  return (
    <>
    <div className=' flex-row'>
    <div className={` mx-auto overflow-hidden shadow-lg  rounded-lg h-96`}>
      <div className=" w-full h-full ">

      
        <img className='w-full h-full object-cover' src={image} alt={name} />
      </div>
    </div>
    <div >
        <div className="font-bold text-xl mb-2 text-white mt-4">{name}</div>
        <p className="text-gray-700 bg-white text-base text-black inline-block rounded pr-2 px-2">{category}</p>
      </div>
      
      </div></>
  );
};

export default CardHome;
