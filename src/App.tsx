import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from "./components/Header/Header";
import { ProductList } from "./components/productList/productlist";
import { Provider } from 'react-redux';
import { store } from './redux/store';


//Componente funcional do React
function App() {
  return(
<Provider store={store}>
<Header/>
<ProductList/>
<GlobalStyles/>
</Provider>
  );
 
}

export default App;
