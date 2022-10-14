import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowLeftOutlinedIcon from '@material-ui/icons/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowLeftOutlined';
import { sliderItems } from '../data';


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;

`;

const Arrow = styled.div `
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`;

const Slide = styled.div `
display: flex;
align-items: center;
width: 100vw;
height: 100vh;
background-color: #${props=>props.bg};


`;
const ImageContainer = styled.div `
    flex: 1;
    height: 100%;
`;
const Image = styled.img`
    height: 80%;
    padding-top: 2rem;
`

const InfoContent = styled.div `
    flex: 1;
    padding: 100px;
`;

const Title = styled.h1`
    font-size: 70px;
`

const Desc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`

const Button = styled.button`
   padding: 10px ;
   font-size: 20px;
   background-color: transparent;
   cursor: pointer;
`


function Slidder() {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick=(direction)=>{
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        }else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }
  return (
    <Container>
        <Arrow direction='left' onClick={()=> handleClick('left')}>
            <ArrowLeftOutlinedIcon/>
        </Arrow>
        
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) =>(
                <Slide bg={item.bg} key={item.id}>

                <ImageContainer>
                    <Image src={item.img} />
                </ImageContainer>
                <InfoContent>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button>SHOP NOW</Button>
                </InfoContent>
                </Slide>
    
            ))}
            
        </Wrapper>

        <Arrow direction='right' onClick={()=> handleClick('right')}>
            <ArrowRightOutlinedIcon/>
        </Arrow>
    </Container>
  )
}

export default Slidder