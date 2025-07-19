import React from 'react';
import styled from 'styled-components';

const Body = styled.div`
    width: 100%;
    display:flex;
    align-items: center;
    justify-content:space-between;
    padding-bottom:20px;
`
const Weather = styled.div`
    display:flex;
    align-items: center;
`
const Temperature = styled.h2`
    font-size:24px;
    color: rgba(255, 255, 255, 0.3);

    @media(max-width: 768px), (min-height: 1080px){
        font-size: clamp(18px, 3.13vw, 24px);
    }
`
const WeatherIcon = styled.img`
    margin-right:35px;
    width:48px;
    height:auto;

    @media(max-width: 768px), (min-height: 1080px){
        width: clamp(36px, 6.25vw, 48px);
        margin-right:clamp(26px, 4.56px, 35px);
    }
`
const icon = '../public/icons/Color=Off-23.svg'

const WeatherInfo = styled.div`

`
const WeatherTime = styled.p`
    margin-bottom:4px;
`
const WeatherForecast = styled.p`
    color: rgba(255, 255, 255, 0.3);
`
interface TodaysWeatherProps {
    time: string;
    forecast: string;
    temperature: string; 
  }

  const TodaysWeatherBlock: React.FC<TodaysWeatherProps> = (props) => {
    return (
        <Body>
            <Weather>
                <WeatherIcon src={icon}/>
                <WeatherInfo>
                    <WeatherTime className='postTitle'>{props.time}</WeatherTime>
                    <WeatherForecast className='postTitle'>{props.forecast}</WeatherForecast>
                </WeatherInfo>
            </Weather>

            <Temperature>
                {props.temperature}
            </Temperature>
        </Body>
    );
};

export default TodaysWeatherBlock;