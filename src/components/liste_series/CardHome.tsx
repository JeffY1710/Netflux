// CardComponent.tsx

import Image from 'react';
import { getUserById, updateUserAdd } from '../../data/firebase/global';

interface SeriesData {
  id: number;
  image: string;
  name: string;
  category: number[];
}

interface SerieId{
  id: number;
}

interface CardProps {
  seriesData: SeriesData;
  //genreName: string
  serieId: number;
}


async function addToWatchlist(id:string, idShow: number){
  updateUserAdd(id, idShow);
  // const t : any = await getUserById("AFzubidROKHpWRKEKeJr")
  // const test : []= t
  // console.log(test);  
}

//const CardHome: React.FC<CardProps> = ({ seriesData, genreName }) => {



const CardHome: React.FC<CardProps> = ({ seriesData, serieId }) => {
  const { image, name, category } = seriesData;
  const currentUser = getUserById("")

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

        //<p className="text-gray-700 bg-white text-base text-black inline-block rounded pr-2 px-2">{genreName}</p>
        
      </div>

        <p className="text-gray-700 bg-white text-base text-black inline-block rounded pr-2 px-2">{category}</p>
        <button >{serieId}</button>
        {/*onClick={()=>addToWatchlist(getUserById(""), serieId)}*/}
      </div> 

      
      </div></>
  );
};

export default CardHome;
