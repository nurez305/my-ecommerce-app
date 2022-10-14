import styled from 'styled-components'
import React from 'react'
import { categories } from '../data';
import CategoriesItem from './CategoriesItem';


const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`;

function Categories() {
  return (
    <Container>
        {categories.map(item => (
            <CategoriesItem item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Categories