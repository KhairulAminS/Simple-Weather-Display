import React from 'react'
import './App.css';
import Weather from './pages/Weather';


const app = () => {

    return (
        <div class="w-screen h-screen flex flex-col justify-center items-center gap-10">
            <h1 class="text-3xl text-center font-black 2xl:text-5xl">Simple Weather Display</h1>
            <Weather
                latitude="YOUR PLACE LATITUDE"
                longitude="YOUR PLACE LONGITUDE"
                apiKey="YOUR API KEY"/>
        </div>
        
    )
}

export default app