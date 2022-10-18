import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Annoucement from '../components/Announcement'
import Footer from '../components/Footer'
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import {mobile} from '../responsive'


const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding: "10px"})}
`
const Title = styled.h1`
    font-weight: 300; 
    text-align: center;

`

const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"};
    background-color:  ${props => props.type === "filled" ? "black" : "transparent" };
    color: ${props => props.type ==="filled" && "white"};
`
const TopTexts = styled.div`
   ${mobile({display: "none"})}  
`
const TopText = styled.span`
 text-decoration: underline ;
 cursor: pointer;
 margin: 0px 10px;
`

const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection: "column"})}
`
const Info = styled.div`
flex: 3;
` 


const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection: "column"})}
`
const ProductDetail = styled.div`
flex: 2 ;
display: flex;
`
const PriceDetail = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Image = styled.img`
width: 200px;
`
const Details = styled.div`
padding: 20px;
display: flex; 
flex-direction: column;
justify-content: space-around;
`
const ProductId = styled.span``
const ProductName = styled.span``
const ProductSize = styled.span``
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color };
`
const ProductAmountContainer = styled.div`
display: flex;
align-items: center ;
margin-bottom: 20px;
`
const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
${mobile({margin: "5px 15px"})}
`
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 300;
${mobile({marginBottom: "20px"})}
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 2px;

`
const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px ;
height: 50vh;
`

const SummaryTitle = styled.h1`
font-weight: 200;
`
const SummaryItemPrice = styled.div``
const SummaryItemText = styled.div``
const SummaryItem = styled.div`
margin: 30px 0;
display: flex;
justify-content: space-between;
font-weight: ${props => props.type === "total" && "500"};
font-size: ${props => props.type === 'total' && '24px'};

`
const SummaryButton = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
`






function Cart() {
  return (
   <Container>
    <Navbar />
    <Annoucement />
    <Wrapper>
    <Title>YOUR BAG</Title>
    <Top>
        <TopButton>CONTINUE SHOPPING </TopButton>
        <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
        </TopTexts>
        <TopButton type='filled'>CHECKOUT NOW </TopButton>
    </Top>
    <Bottom>
        <Info>
            <Product>
                <ProductDetail>
                    <Image src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ed291e67-4618-49ec-8dda-2c2221a5df41/revolution-6-next-nature-mens-road-running-shoes-XcXMbX.png" />
                    <Details>
                        <ProductName><b>Product:</b> Italian Gucci shoe</ProductName>
                        <ProductId><b>ID:</b> 46783092394853</ProductId>
                        <ProductColor color='black' />
                        <ProductSize><b>Size:</b> 37.5 </ProductSize>
                    </Details>
                </ProductDetail>
                <PriceDetail>
                    <ProductAmountContainer>
                        <AddIcon />
                        <ProductAmount>2</ProductAmount>
                        <RemoveIcon />
                    </ProductAmountContainer>
                    <ProductPrice>₦3000</ProductPrice>
                </PriceDetail>
            </Product>
                <Hr />
            <Product>
                <ProductDetail>
                    <Image src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ed291e67-4618-49ec-8dda-2c2221a5df41/revolution-6-next-nature-mens-road-running-shoes-XcXMbX.png" />
                    <Details>
                        <ProductName><b>Product:</b> Italian Gucci shoe</ProductName>
                        <ProductId><b>ID:</b> 46783092394853</ProductId>
                        <ProductColor color='black' />
                        <ProductSize><b>Size:</b> 37.5 </ProductSize>
                    </Details>
                </ProductDetail>
                <PriceDetail>
                    <ProductAmountContainer>
                        <AddIcon />
                        <ProductAmount>2</ProductAmount>
                        <RemoveIcon />
                    </ProductAmountContainer>
                    <ProductPrice>₦3000</ProductPrice>
                </PriceDetail>
            </Product>
        </Info>
        <Summary>
            <SummaryTitle>ORDER NOW</SummaryTitle>
            <SummaryItem>
                <SummaryItemText>SubTotal</SummaryItemText>
                <SummaryItemPrice>₦3000</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>₦300</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>-₦300</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>₦3000</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>Checkout Now</SummaryButton>
        </Summary>

    </Bottom>
    </Wrapper>
    <Footer />
   </Container>
  )
}

export default Cart