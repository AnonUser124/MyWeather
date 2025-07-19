import React from 'react';
import styled from 'styled-components';

const Body = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    border-bottom: 1px solid white;
    max-width: 100%;
    padding-bottom:8px;
    margin-bottom:40px;
    @media (max-width: 768px), (min-height: 1080px){
        padding-bottom: 6px;
    }
    @media (max-width: 660px){
        padding-bottom: 0px;
    }
`
const Input = styled.input`
    color: white;
    background-color:unset;
    width: 22vw;
    height:23px;
    padding-right: 10px;
    font-size: 20px;
    &::placeholder{
        font-size:20px;
        color:rgba(255, 255, 255, 0.7);
    }

    @media (max-width: 768px), (min-height: 1080px) {
        font-size: clamp(12px, 2.34vw, 18px);
        width: 100%;
        &::placeholder {
            font-size: clamp(12px, 2.34vw, 18px);
    }
  }
`

const Img = styled.img`
    @media (max-width: 768px), (min-height: 1080px){
        width: 21px;
    }
`
const ButtonInput = styled.button`

`


const LocationInput = () => {
    return (
        <Body>
            <Input placeholder='Search Location...' type="text" />
            <ButtonInput><Img src="./public/icons/fa_search.svg" alt="" /></ButtonInput>
        </Body>
    );
};

export default LocationInput;