import React from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';

const Container = styled.div`
height : 60vh ;
background-color: #fcf5f5;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 2px;
`

const Desc = styled.div`
font-size: 24px;
font-weight: 600;
margin-bottom: 20px; 
`

const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;

`

const Input = styled.input`
border: none;
outline: none;
flex: 8;
    
`

const Button = styled.button`
flex: 1;
border: none;
background-color: teal;
color: white;
cursor: pointer;
    
`

function NewsLetter() {
  return (
    <Container>
        <Title>Newsletter</Title>

        <Desc>Get timely update from your favourite products</Desc>

        <InputContainer>
        <Input placeholder='Your email' />
        <Button>
        <SendIcon />
        </Button>
        </InputContainer>

    </Container>
  )
}

export default NewsLetter