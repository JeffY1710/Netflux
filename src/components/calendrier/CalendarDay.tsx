import React from 'react';

interface CalendarDayProps {
  day: string;
}

const CalendarDay: React.FC<CalendarDayProps> = ({ day }) => {
  return (
    <><style>
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600&family=DM+Serif+Display&family=Lora:wght@500&family=Montserrat:wght@300&display=swap');
      </style>
    <div className=" p-4 w-full">
      
        <div className="bg-white p-2 rounded shadow h-32">
          <h3 className="text-lg font-semibold mb-2 font-custom">{day}</h3>
          {/* Ajoutez le contenu spécifique du jour ici */}
        </div>
      </div></>
  );
};

export default CalendarDay;
