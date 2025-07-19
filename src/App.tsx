import './App.css'
import MainInfo from './blocks/maininfo/MainInfo';
import styled from 'styled-components';
import ScrollBlock from './blocks/scrollblock/ScrollBlock.tsx';
import { useState, useEffect } from 'react';
import LocationInput from './blocks/locationinput/LocationInput.tsx';

const MainInfoBlock = styled.div`
  position: fixed;
  bottom: 3vw;
  left: 7vw;
  
  @media (max-width: 768px), (min-height: 1080px){
    position: unset;
    padding: clamp(22px, 44vw, 267px) 0  clamp(48px, 10.55vw, 81px) clamp(22px, 5.21vw, 40px);
  }
`
const RightBlock = styled.div`

`
const LocationInputBody = styled.div`
  max-width: clamp(125px, 39.71vw, 305px);
  width: 100%;
  margin: clamp(21px, 4.04vw, 31px) clamp(24px, 5.21vw, 40px) 0 0;

  position: absolute;
  right: 0;
`
function App() {

  const [winWidth, setWinWidth] = useState(window.innerWidth);
  const [winHeight, setWinHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWinWidth(window.innerWidth);
      setWinHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  })

  return (
    <div className='body'>
      {winWidth <= 768 || winHeight >= 1080 ? (<LocationInputBody><LocationInput/></LocationInputBody>) : null}

      <MainInfoBlock><MainInfo/></MainInfoBlock>

      <RightBlock><ScrollBlock/></RightBlock>
    </div>
  )
}

export default App
