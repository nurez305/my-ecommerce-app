import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PlaceIcon from '@material-ui/icons/Place';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import EmailIcon from '@material-ui/icons/Email';
import {mobile} from '../responsive'

const Container = styled.div `
   display: flex; 
   ${mobile({flexDirection: "column"})}
`

const Left = styled.div `
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1`

`

const Desc = styled.p`
margin: 20px 0px;

`

const SocialContainer = styled.div`
display: flex;

    
`


const SocialIcon = styled.div`
height: 40px;
width: 40px;
border-radius: 50%;
color: white;
background-color: #${props => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
    
`

const Center = styled.div `
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})}
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;


`

const ListItem = styled.li`
width: 40%;
margin-bottom: 10px;
    

`

const Right = styled.div `
    flex: 1;
    padding: 20px;
`

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`
const Payment = styled.img`
    width: 50%;
`

function Footer() {
  return (
    <Container>
        <Left>
            <Logo>Nurez.</Logo>
            <Desc>
                Lorem ipsum dolor sit amet 
                consectetur adipisicing elit.
                 Atque fugit sapiente velit magnam, 
                similique doloremque dolores a
                rchitecto porro est blanditiis?
            </Desc>

            <SocialContainer>
                <SocialIcon color='3B5999'><FacebookIcon/></SocialIcon>
                <SocialIcon color='E4405F'><InstagramIcon/></SocialIcon>
                <SocialIcon color='55ACEE'><TwitterIcon/></SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men's Fashion</ListItem>
                <ListItem>Women's Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Whishlist</ListItem>
                <ListItem>Terms & Condition</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><PlaceIcon style={{marginRight: "10px"}}/>24, Ibadan street, EB west</ContactItem>
            <ContactItem><LocalPhoneIcon style={{marginRight: "10px"}}/>+2347036509595</ContactItem>
            <ContactItem><EmailIcon style={{marginRight: "10px"}}/>nurez$life@gmail.com</ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer