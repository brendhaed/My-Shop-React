import styled from 'styled-components';

export const Card = styled.article`
font-family: "Montserrat", serif;
background-color:white;
width:100%;
padding:2rem;
margin: 0 auto;
box-shadow:0 0 5px rgba (0,0,0,0.15);
border-radius: 10px;

display:flex;
flex-direction: column;
align-items: center;
`;

export const productImage = styled.img`
width:250px;
height:400px;
object-fit:contain;
`;
export const productTitle = styled.h2`
font-weight:500;
font-size:1.2rem;
min-height:3rem;
margin-top:1rem;
`;
export const reviwpricecontainer = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:100%;
margin-top:1rem;
`;
export const review = styled.span`
display:flex;
font-size: 0.7 rem;

svg{
font-size: 1rem;
}
`;

export const price = styled.strong``;

export const addtocardbuttonWrapper = styled.div`
display:flex;
justify-content: center;
align-items: center;
width: 100%;
margin-top:1rem;
`;
export const addToCartButton = styled.button`
font-family: "Montserrat", serif;
border:none;
border-radius: 5px;
height: 30px;
padding:0 1rem;
background-color:blue;
color:white;
cursor:pointer;

display:flex;
align-items:center;
gap:0.3rem;

svg{
font-size:0.7rem;
}

`;

export const removeFromCartButton = styled.button`
border:none;
border-radius: 5px;
height: 30px;
padding:0 1rem;
background-color:violet;
color:black;
cursor:pointer;

display:flex;
align-items:center;
gap:0.3rem;

svg{
font-size:0.7rem;
}
`;
