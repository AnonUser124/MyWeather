import styled from 'styled-components';
import GeneralInfoBlock from '../generalinfoblock/GeneralInfoBlock';

const Body = styled.div``;

const GeneralInformation = () => {

  return (
    <Body>
      <h1 className='scrollTitle'>General information</h1>
        <GeneralInfoBlock
            name="Temp max"
            maininfo={''}
            unit="°C"
            icon="/icons/generalinfo/max-temp.svg"
        />
        <GeneralInfoBlock
            name="Temp min"
            maininfo={''}
            unit="°C"
            icon="/icons/generalinfo/min-temp.svg"
        />
        <GeneralInfoBlock
            name="Humidity"
            maininfo={''}
            unit="%"
            icon="/icons/generalinfo/humidity.svg"
        />
        <GeneralInfoBlock
            name="Cloudy"
            maininfo={''}
            unit="%"
            icon="/icons/generalinfo/cloudiness.svg"
        />
        <GeneralInfoBlock
            name="Wind"
            maininfo={''}
            unit=" км/ч"
            icon="/icons/generalinfo/wind.svg"
        />
    </Body>
  );
};

export default GeneralInformation;
