import React from 'react';
import TodaysWeatherBlock from '../todaysweatherblock/TodaysWeatherBlock';

const TodaysWeather = () => {
    return (
        <div>
            <h1 className='scrollTitle'>Today’s Weather Forecast...</h1>
            <TodaysWeatherBlock time='00:00' forecast='Snow' temperature='19°'/>
            <TodaysWeatherBlock time='03:00' forecast='Rain' temperature='17°'/>
            <TodaysWeatherBlock time='06:00' forecast='Sunn' temperature='23°'/>
            <TodaysWeatherBlock time='09:00' forecast='Sunn' temperature='23°'/>
            <TodaysWeatherBlock time='15:00' forecast='Sunn' temperature='23°'/>
            <TodaysWeatherBlock time='18:00' forecast='Sunn' temperature='23°'/>
            <TodaysWeatherBlock time='21:00' forecast='Sunn' temperature='23°'/>
            <TodaysWeatherBlock time='24:00' forecast='Sunn' temperature='23°'/>
        </div>
    );
};

export default TodaysWeather;