import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';


const Container = styled.div`

`

const Wrapper = styled.div`
padding: 50px;
display: flex;
`
const ImgContainer = styled.div`
flex: 1;

`
const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
`
const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
`

const Title = styled.h1`
font-weight: 200;
`
const Price = styled.span`
font-size: 40px;
font-weight: 100;
`

const Desc = styled.p`
margin: 20px 0px;
`

const FilterContainer = styled.div`
width: 50%;
margin: 30px 0px;
display: flex;
justify-content: space-between;

`

const Filter = styled.div`
display: flex;
align-items: center;

`

const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
outline: none;
`

const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=> props.color};
margin: 0 5px;
cursor: pointer;
`

const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;

`

const FilterOption = styled.option `

`

const AddContainer = styled.div `
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
`

const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`

const Button = styled.button `
padding: 15px;
border:  2px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;

&:hover {
    background-color: #f8f5f5;
}

`

const Amount = styled.span `
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0 5px;
`


function Product() {
  return (
    <Container>
        <Announcement/>
        <Navbar />
        <Wrapper>
            <ImgContainer>
            <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
            </ImgContainer>

            <InfoContainer>
                <Title> Denin Jumpsuite</Title>
                <Desc>You can configure most Dynamic Select controls
                     in a harness, section, or flow action directly,
                      while completing the Harness, Section, or Flow 
                      rule form. That approach is simpler and easier to build 
                    and test than the older approach described here.  </Desc>
                <Price> ₦2000</Price>

                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black" />
                        <FilterColor color="darkblue" />
                        <FilterColor color="gray" />
                    </Filter>

                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                        <FilterOption>XS</FilterOption>
                        <FilterOption>S</FilterOption>
                        <FilterOption>M</FilterOption>
                        <FilterOption>L</FilterOption>
                        <FilterOption>XL</FilterOption>
                        </FilterSize>
                       
                    </Filter>
                </FilterContainer>

                <AddContainer>
                    <AmountContainer>
                        <   RemoveIcon />
                        <Amount>1</Amount>
                        <AddIcon />
                    </AmountContainer>
                    <Button>Add to cart</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <NewsLetter />
        <Footer />

    </Container>
  )
}

export default Product



