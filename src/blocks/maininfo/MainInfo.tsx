import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';


const Body = styled.div`
  display:flex; 
  align-items: center;
`
const Temperature = styled.h1`
  font-size: clamp(103px, 9.6vw, 9.6vw) ;
  font-weight: Regular ;
  latter-spacing: -0.56vw ;

  @media(max-width: 768px), (min-height: 1080px){
    font-size: clamp(64px, 15.63vw, 120px);
  }
`
const Сity = styled.h2`
  font-size: clamp(45px, 4vw, 4vw) ;
  padding-bottom: 0.75vw;

  @media(max-width: 768px), (min-height: 1080px){
    font-size: clamp(30px, 6.25vw, 48px);
  }
`
const DateAndTime = styled.p`
  font-size: clamp(14px, 1.23vw, 1.23vw) ;

  @media(max-width: 768px), (min-height: 1080px){
    font-size: clamp(10px, 2.08vw, 16px);
  }
`
const MiddleBlock = styled.div`
  margin: 0 2vw 0 0.73vw;
`
const Icon = styled.img`
  width: clamp(50px, 4.7vw, 4.7vw);
  height: auto;
  margin-top:1.7vw;

  @media(max-width: 768px), (min-height: 1080px){
    width: clamp(40px, 7.16vw, 55px);
  }
`
const MainInfo = () => {
  const[currentTemp, setCurrentTemp] = useState <null | number>(null);
  const[currentCode, setCurrentCode] = useState <null | number>(null);

  useEffect(() => {
    const API_KEY = 'ce5c446d6a094333990104902251907'
    const URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Moscow&lang=ru`

    const getCurrentWeather = async function(){
      try{
        const res = await axios.get(URL)
        const data = res.data
        const temp = Math.floor(data.current.temp_c);
        const code = data.current.condition.code;

        setCurrentTemp(temp);
        setCurrentCode(code)

      }catch(error){
        console.error('Ошибка:' , error)
      }
    }

    getCurrentWeather();
  })

    return (
        <Body>
            <Temperature>{currentTemp ? currentTemp : null}</Temperature>

            <MiddleBlock>
                <Сity>{'Moscow'}</Сity>
                <DateAndTime>06:09 - Monday, 9 Sep ‘23</DateAndTime>
            </MiddleBlock>

            <Icon src={'1'}></Icon>{currentCode ? currentCode : null}
        </Body>
    );
};

export default MainInfo;