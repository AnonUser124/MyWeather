import styled from 'styled-components';
import LocationInput from '../locationinput/LocationInput';
import TodaysWeather from '../todayswearher/TodaysWeather';
import GeneralInformation from '../generalinformation/GeneralInformation';

const Body = styled.div`
    border-left: 5px solid rgba(255, 255, 255, 0.24);
    background: rgba(255, 255, 255, 0); /* Полупрозрачный фон */
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(10px);
    width: 35vw;

    @media(max-width: 768px), (min-height: 1080px){
        width: 100%;
        border-top: 5px solid rgba(255, 255, 255, 0.24);
        border-left: unset;

        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

const Content = styled.div`
    padding: 54px 120px 0 35px;


    @media (max-width: 1200px) {
        padding: 54px 20px 0 20px;
    }
    
    @media(max-width: 768px), (min-height: 1080px){
        padding: 0;
        max-width: 354px;
        width: 100%;

        margin-top: 50px;
    }

    @media(max-width: 410px){
        padding: 0 40px;
    }
`

const Line = styled.hr`
    color: white;
    width: 100%;
    border-bottom: 1px solid white;
    margin-bottom:40px;
`
const LocationInputBody = styled.div`
    @media(max-width: 768px), (min-height: 1080px){
        display: none;
    }
`

const ScrollBlock = () => {
    return (
        <Body>
            <Content>
                <LocationInputBody><LocationInput/></LocationInputBody>
                <GeneralInformation/>
                <Line/>
                <TodaysWeather/>
            </Content>
        </Body>
    );
};

export default ScrollBlock;