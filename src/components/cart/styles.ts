
import styled from "styled-components";

interface ContainerProps{
    showCart: boolean;
}

export const Container = styled.aside<ContainerProps> `
position:fixed;
top:0;
right:${(props) => (props.showCart ? "0" : "-350px")};
width:350px;
height: 100vh;
background-color:#FFFAFA;
padding: 2rem;
box-shadow: -5px 0 15px rgba(0,0,0,0.25);
transition: right 0.5s;
`;
export const Title = styled.h1 `
font-family: "Montserrat", serif;
font-size: 1.5rem;
color: #333;
`;

export const CartProductsList = styled.ul`
padding: 2rem 0;
list-style: none;
display: flex;
flex-direction: column;
gap: 1rem;

max-height: 70vh; 
overflow-y: auto; 
margin-bottom: 1rem;
`
export const CartProductItem = styled.li`
  font-family: "Montserrat", serif;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 0.5rem; 
  background-color: #fff; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
`
export const CartTotal = styled.strong`
  display: block;
  font-size: 1.2rem;
  color: #333;
  margin-top: 2rem;
  text-align: center;
`
export const RemoveButton = styled.button`
font-family: "Montserrat", serif;
padding: 0.1rem;
margin-left:1rem;
border : none;
border-radius: 5rem; 
background-color: white;
font-weight: bold;
font-size: 0.2;
cursor: pointer;
transition: background-color 0.3s ease;

`