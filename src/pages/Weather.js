import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from '../components/Card';

function Weather({latitude, longitude, apiKey}) {

    const [data, setData] = useState([]);

    const getAPI = async () => {
        try {
            const res = await axios.get("https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + 
            "&lon=" + longitude +
            "&cnt=5&units=metric&appid=" + apiKey)
            setData(res.data.list)
        } catch (err) {
            alert(err.message)
        }
    }

    const getDay = (dateTime) => {

        const str = dateTime.split(/[- ]+/);
        const y = str[0];
        const m = str[1]-1;
        const d = str[2];
        const date = new Date(y, m, d);
        let day = "";
        switch (date.getDay()) {
            case 0:
                day = "Sunday";
                break;
            case 1:
                day = "Monday";
                break;
            case 2:
                day = "Tuesday";
                break;
            case 3:
                day = "Wednesday";
                break;
            case 4:
                day = "Thursday";
                break;
            case 5:
                day = "Friday";
                break;
            case 6:
                day = "Saturday";
                break;
            default:
                day = ""
        }
        console.log(date)
        console.log(date.getDay())
        console.log(day)
        return day
    }

    useEffect(() => {
        getAPI();
    }, [])

    return (
        <div class="gap-5 flex flex-wrap 2xl:flex 2xl:space-x-4 2xl:space-y-0 justify-center">
            {data.map((list) => (
                <Card
                    day={getDay(list.dt_txt)}
                    image={'http://openweathermap.org/img/wn/' + list.weather[0].icon + '@2x.png'}
                    maxTemp={list.main.temp_max.toFixed(2)}
                    minTemp={list.main.temp_min.toFixed(2)} />
            ))}
        </div>
    )
}

export default Weather