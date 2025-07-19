import React from 'react';

import styled from 'styled-components';

const Body = styled.div`
    width: 100%;
    display:flex;
    align-items: center;
    justify-content:space-between;
    margin-bottom:30px;
`
const Name = styled.h2`
    color: rgba(255, 255, 255, 0.3);
`
const Info = styled.div`
    display:flex;
    align-items: center;
`
const Temperature = styled.h2`

`
const IconBlock = styled.div`
    width:24px;
    display:flex;
    justify-content: flex-end;
    margin-left:26px;

    @media(max-width: 768px), (min-height: 1080px){
        margin-left:clamp(20px, 3.39vw, 26px);

        width: clamp(20px, 3.13vw, 24px);
        height: clamp(20px, 3.13vw, 24px);
    }
`
const Icon = styled.img`
`
type PropsType ={
    name: string,
    maininfo: string,
    icon: string,
    unit: string,
}
const GeneralInfoBlock: React.FC<PropsType> = (props) => {
    return (
        <Body>
            <Name className='postTitle'>{props.name}</Name>
            <Info>
                <Temperature className='postTitle'>{props.maininfo}{props.unit}</Temperature>
                <IconBlock><Icon src={props.icon}/></IconBlock>
            </Info>
        </Body>
    );
};

export default GeneralInfoBlock;