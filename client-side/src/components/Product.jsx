import { ShoppingCartOutlined } from '@material-ui/icons'
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import React from 'react'
import styled from 'styled-components'



const Info = styled.div`
opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.7s ease;
`

const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
justify-content: center;
align-items: center;
background-color: #f5fbfd;
position: relative;


&:hover ${Info}{
  opacity: 1;
}
    
`

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;

`;

const Image = styled.img`
height: 75%;
background-size: cover;
z-index: 2;
  
`

const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
margin: 10px;
transition: all 0.5s ease;

&:hover {
  background-color: #e9f5f5;
  transform: scale(1.1);
}
`

function Product({item}) {
  return (
    <Container>
      <Circle />
      <Image src={item.img}/>

      <Info>
        <Icon>
          <ShoppingCartOutlined/>
        </Icon>

        <Icon>
          <SearchIcon/>
        </Icon>


        <Icon>
          <FavoriteBorderIcon/>
        </Icon>
      </Info>

    </Container>
  )
}

export default Product