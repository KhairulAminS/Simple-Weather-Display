import React from 'react';

function Card({ day, image, maxTemp, minTemp }) {
    return (
        <div>
            <div class="p-10 bg-white rounded-xl shadow-lg 
            flex flex-col items-center 
            gap-2 justify-center 
            active:bg-gray-200
            w-40 h-30
            2xl:w-max 2xl:h-max
            2xl:p-[50px]">
                <h1 class="text-2xl font-black">{day}</h1>
                <img src={image} class="scale-1 2xl:scale-150" />
                <div class="flex flex-col gap-5 max-w-lg justify-center 2xl:flex-row">
                    <h1 class="text-2xl text-black font-black">{minTemp}°</h1>
                    <h1 class="text-2xl text-gray-400 font-black">{maxTemp}°</h1>
                </div>
            </div>
        </div>
    );
}

export default Card;
<div>

</div>