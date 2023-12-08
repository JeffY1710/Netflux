import React from 'react';
import CalendarDay from './CalendarDay';

const daysOfWeek = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

const Calendar: React.FC = () => {
  return (
    <>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600&family=DM+Serif+Display&family=Lora:wght@500&family=Montserrat:wght@300&display=swap');
      </style>
    
    
    <h1 className='text-5xl mb-24 mt-12 text-center font-custom text-white'>Calendrier</h1><div className="w-full mx-auto">
      <div className="flex flex-col space-y-4">
        {daysOfWeek.map((day, index) => (
          <CalendarDay key={index} day={day} />
        ))}
      </div>
    </div></>
  );
};

export default Calendar;
