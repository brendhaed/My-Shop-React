import { render, screen } from "@testing-library/react"
import { Cart } from "./cart"
import { products } from '../../data/products'
import userEvent from "@testing-library/user-event";
import { removeProduct } from "../../redux/Cart/cart-slice";

const cart = products.slice(0,2); //obtendo os 2 primeiros produtos do array

const mockDispatch = jest.fn();

//Mock: tornar a biblioteca react-redux fake
jest.mock('react-redux',() =>{
    return{
        useDispatch:() =>{
            return mockDispatch
        }
    }
});


describe('cart > unit tests',() => {
    it('should render an empty cart correctly',() =>{
        render (<Cart showCart={true} cart={[]}/>
        );

        const titleElement = screen.getByRole('heading', {level: 1});
        const totalElement = screen.getByTestId("total");
        const cartListElement = screen.getByRole('list') //ul

        //screen.debug(cartListElement);
        
        expect(titleElement).toHaveTextContent('Carrinho');
        expect(totalElement).toHaveTextContent("$0");
        expect(cartListElement).toBeEmptyDOMElement();
    })
    it('should render a cart with two produts', () =>{
        render(<Cart showCart={true} cart={cart}/>);

        const productsItemElements = screen.getAllByRole('listitem');
        const firtProductTitleElement = screen.getByText(cart[0].title)
        const secondProductTitleElement = screen.getByAltText(cart[1].title)

        expect(productsItemElements.length).toBe(2);
        expect(firtProductTitleElement).toBeInTheDocument();
        expect(secondProductTitleElement).toBeInTheDocument();

    });

    it('should remove product when remove button is clicked',() =>{
        render (<Cart showCart={true} cart={[products[0]]}/>)

        const removeProductButton = screen.getByRole('button', {name:'remover'})
        userEvent.click(removeProductButton);

        expect(mockDispatch).toHaveBeenCalled();
        expect(mockDispatch).toHaveBeenCalledWith(removeProduct(products[0]))
    })
})