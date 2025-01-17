
import { Product } from "../../data/products";
import {FiShoppingCart} from "react-icons/fi";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";
import { RootReducer } from "../../redux/root-reducer";
import { addProduct, removeProduct } from "../../redux/Cart/cart-slice";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({product}) =>{
const {cart} = useSelector((rootReducer:RootReducer) => rootReducer.cartReducer)
const dispatch = useDispatch()

//variavel booleana que informa se o produto esta no carrinho
const isProductOnCart = cart.find(productOnCart => product.id === productOnCart.id)
!== undefined;

  function handleAddProductToCart(){
    //despachar a action de adicionar o produto ao carrinho
    dispatch(addProduct(product));
  }
  
  function handleRemoveProductFromCart(){
    dispatch(removeProduct(product))
  
  }
return(
<S.Card>
<S.productImage src={product.image} alt={product.description}/> 
<S.productTitle> {product.title}</S.productTitle>

{/* <S.reviwpricecontainer> 
<S.review>
  {Array.from({length: 5}).map((_, index) => index < Math.round(product.rating.rate)
  ) ?(
    <AiFillStar/>
  ): (
    <AiOutlineStar/>
  )}
  ({` ${product.rating.rate}`})
  </S.review>

<S.price>{product.price}</S.price>
</S.reviwpricecontainer> */}

<S.reviwpricecontainer>
<S.review>
    {Array.from({ length: 5 }).map((_, index) => (
      index < Math.round(product.rating.rate) ? (
        <AiFillStar key={index} />
      ) : (
        <AiOutlineStar key={index} />
      )
    ))}
    {` (${product.rating.rate})`}
  </S.review>

  <S.price>{product.price}</S.price>
</S.reviwpricecontainer>
 


<S.addtocardbuttonWrapper> 

  {isProductOnCart ?(
    <S.removeFromCartButton onClick={handleRemoveProductFromCart}> 
    Remover do carrinho <FiShoppingCart/>
    </S.removeFromCartButton>
  ):(
    <S.addToCartButton onClick={handleAddProductToCart}> 
    Adicionar ao carrinho <FiShoppingCart/></S.addToCartButton>

  )}

</S.addtocardbuttonWrapper>
</S.Card>
)
}
