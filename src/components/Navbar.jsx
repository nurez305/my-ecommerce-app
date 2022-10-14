import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import Badge from '@material-ui/core/Badge/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';



const Container = styled.div`
height: 80px;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`
const Language = styled.div`
font-size: 14px;
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
`


const Center = styled.div`
flex: 1;
text-align: center;
`
const Logo = styled.h1 `
font-weight: bold;
`;

const MenuItem = styled.div `
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`;


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
        <Left>
        <Language>EN</Language>
        <SearchContainer>
        <Input /> 
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