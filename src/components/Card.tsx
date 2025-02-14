import React from 'react';
import Image from 'next/image';

function Card({ image_cover, status, title, description, date_start, date_end, cost }) {

  function formatEventDate(dateStart: string, dateEnd: string): string {
    const start = new Date(dateStart + "T00:00:00Z");
    const end = new Date(dateEnd + "T00:00:00Z");

    const startDay = start.getUTCDate();
    const endDay = end.getUTCDate();

    const startMonth = start.toLocaleString("es-ES", { month: "long" }).toUpperCase();
    /* const endMonth = end.toLocaleString("es-ES", { month: "long" }).toUpperCase(); */

    if (start.getMonth() === end.getMonth()) {
      return `${startDay} AL ${endDay} DE ${startMonth}`;
    } else {
      return `${startDay}/${start.getMonth() + 1} - ${endDay}/${end.getMonth() + 1}`;
    }
  }

  return (
    <>
      <div className='rounded-lg shadow-2xl w-80 h-[37rem]'>
        <div>
          <Image
            src={`https://api.test.interactiva.net.co${image_cover}`}
            alt={image_cover}
            width={400}
            height={400} />
        </div>
        <div style={{ backgroundColor: status.color }} className='p-1'>
          <p className='text-white text-center'>{status.title}</p>
        </div>
        <div className='p-6 flex flex-col gap-2'>
          <div>
            <p className='font-black text-center'>{title}</p>
          </div>
          <div style={{ color: '#d09b47' }} className='flex flex-row justify-center gap-1'>
            <div>
              <p>{formatEventDate(date_start, date_end)}</p>
            </div>
            <div>
              <p>| DESDE {cost} USD </p>
            </div>
          </div>
          <div>
            <p className='text-center'>{description}</p>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: '#d09b47' }} className='w-80 flex justify-center p-4 rounded-b-xl'>
        <button className='text-white font-black text-center border-b-2'>MÁS INFORMACIÓN</button>
      </div>
    </>
  );
}

export default Card;
