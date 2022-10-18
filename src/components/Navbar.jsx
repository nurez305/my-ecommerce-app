import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import Badge from '@material-ui/core/Badge/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import {mobile} from '../responsive'



const Container = styled.div`
height: 80px;
${mobile({height: "60px"})}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({padding: "10px 0px"})}
   
`

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`
const Language = styled.span`
font-size: 14px;
${mobile({display: "none"})}

`;

const SearchContainer = styled.div`
border: 0.5px solid lightgrey;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
    
`;
const Input = styled.input `
   border : none ;
   outline: none;
   ${mobile({width: "50px"})}
`


const Center = styled.div`
flex: 1;
text-align: center;
`
const Logo = styled.h1 `
font-weight: bold;
${mobile({fontSize: "16px", fontWeight: "700"})}
`;

const MenuItem = styled.div `
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize: "12px", marginLeft: "10px"})}
`

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({justifyContent: "center", flex: "2"})}
`;


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
        <Left>
        <Language>EN</Language>
        <SearchContainer>
        <Input placeholder='search' /> 
        <SearchIcon style={{fontSize: "16px", color: "grey" }}/> 
        </SearchContainer>
        </Left>
        <Center><Logo>Nurez Store</Logo></Center>
        <Right>
            <MenuItem>Register</MenuItem>
            <MenuItem>Login</MenuItem>
            <MenuItem>
            <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlinedIcon/>
            </Badge>
            </MenuItem>
        </Right>

        </Wrapper>
    </Container>
  )
}

export default Navbar