import React from 'react'
import './App.css';
import Weather from './pages/Weather';


const app = () => {

    return (
        <div class="w-screen h-screen flex justify-center items-center">
            <Weather
                latitude="YOUR PLACE LATITUDE"
                longitude="YOUR PLACE LONGITUDE"
                apiKey="YOUR API KEY"/>
        </div>
        
    )
}

export default app