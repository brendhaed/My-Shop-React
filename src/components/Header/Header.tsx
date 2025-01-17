import { useState } from "react";
import { Cart } from "../cart/cart";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import {login, logout} from "../../redux/UserReducer/user-slice"
import * as S from "./styles";

export const Header:React.FC = () =>{
  const {user} = useSelector((rootReducer:RootReducer) => rootReducer.userReducer)
  
  const {cart} = useSelector((rootReducer:RootReducer) => rootReducer.cartReducer)

  const dispatch = useDispatch()

  const [showCart, setShowCart] = useState(false);
  const isLogged = user !== null;

  function handleUserAuth(){
    //usuário não está logado
    if (user === null){
      //despachar a action de login
      dispatch(
        login({
          name:'brendha',
          email:'brendhaed@gmail.com'
        })
      );
    }else{
      dispatch(logout({}))
    }
  }
  
    return(
  <S.StyledHeader>
    <S.Wrapper>
      <S.HeaderTitle>MyShop.</S.HeaderTitle>
   
    <S.ButtonWrapper>
      <S.AuthButton isLogged={isLogged} onClick={handleUserAuth}>
      {isLogged ? "LogOut" : "Login"}
      {isLogged ? <FiLogOut/> : <FiLogIn/>}
      </S.AuthButton>

      <S.CartButton onClick={() => setShowCart(!showCart)}>
        Carrinho
        <FiShoppingCart/>
        </S.CartButton>
    </S.ButtonWrapper>
    </S.Wrapper>

    <Cart showCart={showCart} cart={cart}/>
  </S.StyledHeader>
    );
};