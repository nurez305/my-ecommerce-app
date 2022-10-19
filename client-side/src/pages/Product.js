import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import {mobile} from "../responsive"
import {useLocation} from 'react-router-dom'
import {publicRequest} from '../requestMethod'


const Container = styled.div`

`

const Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile({flexDirection: "column", padding: '10px'})}
`
const ImgContainer = styled.div`
flex: 1;

`
const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${mobile({height: "40vh"})}
`
const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
${mobile({padding: "10px"})}
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
${mobile({width: "100%"})}

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
${mobile({width: "100%"})}
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
    const location = useLocation()
    const id = location.pathname.split("/")[2]
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    // const dispatch = useDispatch();

    useEffect(() => {
        const getProduct = async () => {
          try {
            const res = await publicRequest.get("/products/find/" + id);
            setProduct(res.data);
          } catch {}
        };
        getProduct();
      }, [id]);
    
    //   const handleQuantity = (type) => {
    //     if (type === "dec") {
    //       quantity > 1 && setQuantity(quantity - 1);
    //     } else {
    //       setQuantity(quantity + 1);
    //     }
    //   };
    
    //   const handleClick = () => {
    //     dispatch(
    //       addProduct({ ...product, quantity, color, size })
    //     );
    //   };

  return (
    <Container>
        <Navbar />
        <Announcement/>
        <Wrapper>
            <ImgContainer>
            <Image src={product.img} />
            </ImgContainer>

            <InfoContainer>
                <Title>{product.title}</Title>
                <Desc>{product.desc} </Desc>
                <Price> {product.price}</Price>

                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                {product.color.map((c)=>(
                   <FilterColor color={c} key={c} />
                ))}
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



